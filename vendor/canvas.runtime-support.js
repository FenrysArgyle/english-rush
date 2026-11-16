(function (global) {
  "use strict";

  function computePresentationFit({ logicalWidth, logicalHeight, availableWidth, availableHeight, scaleMode = "continuous" } = {}) {
    const values = [logicalWidth, logicalHeight, availableWidth, availableHeight];
    if (!values.every((value) => Number.isFinite(value) && value > 0)) {
      throw new TypeError("Presentation dimensions must be finite positive numbers.");
    }
    if (!new Set(["continuous", "integer"]).has(scaleMode)) {
      throw new TypeError("Presentation scaleMode must be continuous or integer.");
    }
    const availableScale = Math.min(availableWidth / logicalWidth, availableHeight / logicalHeight);
    const scale = scaleMode === "integer" && availableScale >= 1 ? Math.floor(availableScale) : availableScale;
    const displayWidth = logicalWidth * scale;
    const displayHeight = logicalHeight * scale;
    return {
      logicalWidth,
      logicalHeight,
      availableWidth,
      availableHeight,
      scale,
      displayWidth,
      displayHeight,
      left: (availableWidth - displayWidth) / 2,
      top: (availableHeight - displayHeight) / 2,
      scaleMode
    };
  }

  function spriteLayout(asset, image) {
    const width = Number(image?.naturalWidth || image?.width || asset?.dimensions?.width);
    const height = Number(image?.naturalHeight || image?.height || asset?.dimensions?.height);
    if (!(width > 0 && height > 0)) return null;
    if (asset?.profile !== "sprite-sheet") return { columns: 1, rows: 1, frameWidth: width, frameHeight: height, frameCount: 1 };
    const meta = asset.animation;
    const match = /^(2x2|3x2)$/.exec(meta?.layout || "");
    if (!match) return null;
    const [columns, rows] = match[1].split("x").map(Number);
    const frameCount = meta.frames?.length;
    if (!Number.isInteger(frameCount) || frameCount < 1 || frameCount > columns * rows ||
        width % columns || height % rows || meta.frameWidth !== width / columns || meta.frameHeight !== height / rows) return null;
    return { columns, rows, frameWidth: width / columns, frameHeight: height / rows, frameCount };
  }

  async function loadAssets(entries, { timeoutMs = 15000, onWarning = () => {} } = {}) {
    if (!Array.isArray(entries)) throw new TypeError("Asset entries must be an array.");
    const byKey = new Map();
    const byRole = new Map();
    const warnings = [];
    // Unified reviewed manifests also contain audio; createAudio owns those.
    await Promise.all(entries.filter((asset) => asset?.kind !== "audio").map((asset) => new Promise((resolve) => {
      const loaded = { asset, image: null };
      byKey.set(asset.runtimeKey, loaded);
      byRole.set(asset.role, loaded);
      let settled = false;
      let timer;
      const finish = (image, reason) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        loaded.image = image;
        if (reason) {
          const message = `${asset.role || asset.runtimeKey}: ${reason}; using declared fallback`;
          warnings.push(message);
          onWarning(message);
        }
        resolve();
      };
      if (asset.placeholder || !(asset.url || asset.path)) return finish(null, "asset unavailable");
      const image = new global.Image();
      image.onload = () => finish(spriteLayout(asset, image) ? image : null, spriteLayout(asset, image) ? "" : "invalid frame metadata");
      image.onerror = () => finish(null, "image load failed");
      timer = setTimeout(() => finish(null, "image load timed out"), timeoutMs);
      image.src = asset.url || asset.path;
    })));
    return { get: (key) => byKey.get(key), getRole: (role) => byRole.get(role), warnings };
  }

  function frameAt(asset, clipName, seconds) {
    const meta = asset?.animation;
    const clip = meta?.loopClip?.name === clipName ? meta.loopClip : meta?.units?.find((unit) => unit.name === clipName);
    if (!clip) return null;
    if (clip.type === "pose") return Number.isInteger(clip.index) ? clip.index : null;
    if (!Array.isArray(clip.indices) || !clip.indices.length || !(clip.fps > 0)) return null;
    const step = Math.floor(Math.max(0, Number(seconds) || 0) * clip.fps);
    return clip.indices[clip === meta.loopClip ? step % clip.indices.length : Math.min(step, clip.indices.length - 1)];
  }

  // x/y is the bottom-center anchor. Facing is chosen by the game; upright
  // character artwork is never rotated by the aiming angle in this helper.
  function drawSprite(ctx, loaded, { x, y, height, frameIndex = 0, flipX = false } = {}) {
    if (!loaded?.image) return false;
    const layout = spriteLayout(loaded.asset, loaded.image);
    if (!layout || ![x, y, height].every(Number.isFinite) || height <= 0 ||
        !Number.isInteger(frameIndex) || frameIndex < 0 || frameIndex >= layout.frameCount) return false;
    const width = height * layout.frameWidth / layout.frameHeight;
    ctx.save();
    ctx.translate(x, y);
    if (flipX) ctx.scale(-1, 1);
    ctx.drawImage(loaded.image, (frameIndex % layout.columns) * layout.frameWidth,
      Math.floor(frameIndex / layout.columns) * layout.frameHeight, layout.frameWidth, layout.frameHeight,
      -width / 2, -height, width, height);
    ctx.restore();
    return true;
  }

  function createAnimator(assets, actionVisuals) {
    const actions = new Map(actionVisuals.map((entry) => [entry.action, entry]));
    let action = "";
    let elapsed = 0;
    function selected() {
      const mapping = actions.get(action);
      const loaded = mapping && assets.getRole(mapping.role);
      const frameIndex = loaded?.asset.profile === "sprite-sheet" ? frameAt(loaded.asset, mapping.clip || action, elapsed) : 0;
      return { mapping, loaded, frameIndex };
    }
    return {
      setAction(next, { restart = false } = {}) {
        if (!actions.has(next)) throw new Error(`Unmapped character action: ${next}`);
        if (next !== action || restart) elapsed = 0;
        action = next;
      },
      update(dt) { if (Number.isFinite(dt) && dt > 0) elapsed += dt; },
      reset() { elapsed = 0; },
      draw(ctx, placement) {
        const { loaded, frameIndex } = selected();
        return frameIndex !== null && drawSprite(ctx, loaded, { ...placement, frameIndex });
      },
      snapshot() {
        const { mapping, frameIndex } = selected();
        return { animationRole: mapping?.role || "", animationState: action, animationFrame: frameIndex };
      }
    };
  }

  function createAudio(config, button) {
    if (config?.enabled === false) {
      const silent = () => false;
      return { playBGM: silent, preloadSFX: () => Promise.resolve([]), playSFX: silent,
        setMuted: silent, toggle: silent, tone: silent, dispose: silent, get muted() { return true; } };
    }
    let muted = false;
    let disposed = false;
    let context;
    let effects;
    let fallback;
    let music;
    let retryBound = false;
    let retryUsed = false;
    const activeTones = new Set();
    const activeToneChannels = new Map();
    const effectBuffers = new Map();
    const effectLoads = new Map();
    const activeEffects = new Map();
    const mediaEffects = new Map();
    const lastEffectAt = new Map();
    const clips = config?.sfx?.clips || {};
    const bgmEnabled = config?.bgm?.enabled !== false;
    function audioContext() {
      if (!context) {
        const Constructor = global.AudioContext || global.webkitAudioContext;
        if (!Constructor) return null;
        try {
          context = new Constructor();
          effects = context.createGain();
          effects.gain.value = muted ? 0 : config.sfx.volume;
          effects.connect(context.destination);
        } catch (_) { return null; }
      }
      if (context.state === "suspended") Promise.resolve(context.resume()).catch(() => {});
      return context;
    }
    function stopFallback() {
      if (!fallback) return;
      fallback.osc.stop();
      fallback.osc.disconnect();
      fallback.gain.disconnect();
      fallback = null;
    }
    function startFallback() {
      if (!bgmEnabled || muted || disposed || fallback) return;
      if (music) music.pause();
      const ac = audioContext();
      if (!ac) return;
      const gain = ac.createGain();
      gain.gain.value = config.bgm.volume * 0.35;
      gain.connect(ac.destination);
      const osc = ac.createOscillator();
      osc.type = "triangle";
      osc.frequency.value = 196;
      osc.connect(gain);
      osc.start();
      fallback = { osc, gain };
    }
    function clearRetry() {
      global.removeEventListener("pointerdown", retry);
      global.removeEventListener("keydown", retry);
      global.removeEventListener("touchstart", retry);
      retryBound = false;
    }
    function retry() { clearRetry(); retryUsed = true; playBGM(); }
    function rejected(error) {
      if (!bgmEnabled || disposed || muted) return;
      if (error?.name === "NotAllowedError") {
        if (!retryBound && !retryUsed) {
          retryBound = true;
          global.addEventListener("pointerdown", retry);
          global.addEventListener("keydown", retry);
          global.addEventListener("touchstart", retry);
        }
      } else startFallback();
    }
    function playBGM() {
      if (!bgmEnabled || muted || disposed) return;
      if (config.bgm.source === "synth") { startFallback(); return; }
      stopFallback();
      try {
        if (!music) {
          music = new global.Audio(config.bgm.url);
          music.loop = config.bgm.loop;
          music.volume = config.bgm.volume;
          music.addEventListener("error", startFallback);
        }
        Promise.resolve(music.play()).catch(rejected);
      } catch (error) { rejected(error); }
    }
    function setMuted(value) {
      muted = Boolean(value);
      button?.setAttribute("aria-pressed", String(muted));
      if (effects) effects.gain.value = muted ? 0 : config.sfx.volume;
      if (music) music.muted = muted;
      if (muted) { music?.pause(); stopFallback(); }
      else playBGM();
      if (muted) mediaEffects.forEach((pool) => pool.forEach((entry) => { entry.player.pause(); entry.active = false; }));
    }
    function toggle() { setMuted(!muted); }
    function tone({ from = 440, to = from, duration = 0.1, type = "sine", gain: toneGain = 1, polyphony = 4 } = {}, channel = "") {
      if (muted || disposed || ![from, to, duration, toneGain].every(Number.isFinite) || from <= 0 || to <= 0 || duration <= 0 || toneGain <= 0) return false;
      const activeChannel = channel ? activeToneChannels.get(channel) || new Set() : null;
      if (activeChannel && activeChannel.size >= Math.max(1, Number(polyphony || 4))) return false;
      const ac = audioContext();
      if (!ac) return false;
      const osc = ac.createOscillator();
      const gain = ac.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(from, ac.currentTime);
      osc.frequency.exponentialRampToValueAtTime(to, ac.currentTime + duration);
      gain.gain.setValueAtTime(0.001, ac.currentTime);
      gain.gain.linearRampToValueAtTime(Math.min(1, toneGain), ac.currentTime + Math.min(0.015, duration / 2));
      gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + duration);
      osc.connect(gain);
      gain.connect(effects);
      activeTones.add(osc);
      if (activeChannel) {
        activeChannel.add(osc);
        activeToneChannels.set(channel, activeChannel);
      }
      osc.onended = () => {
        activeTones.delete(osc);
        if (activeChannel) {
          activeChannel.delete(osc);
          if (!activeChannel.size) activeToneChannels.delete(channel);
        }
        osc.disconnect();
        gain.disconnect();
      };
      osc.start();
      osc.stop(ac.currentTime + duration);
      return true;
    }
    function mediaEffect(name) {
      const clip = clips[name];
      const pool = mediaEffects.get(name) || [];
      let entry = pool.find((item) => !item.active);
      if (entry) return entry;
      if (pool.length >= Math.max(1, Number(clip.polyphony || 4))) return null;
      try {
        const player = new global.Audio(clip.url);
        entry = { player, active: false, failed: false };
        const release = () => { entry.active = false; };
        const failed = () => {
          const wasActive = entry.active;
          entry.failed = true;
          release();
          if (wasActive) tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
        };
        entry.release = release;
        entry.failedListener = failed;
        player.preload = "auto";
        player.addEventListener("ended", release);
        player.addEventListener("error", failed);
        pool.push(entry);
        mediaEffects.set(name, pool);
        if (typeof player.load === "function") player.load();
        return entry;
      } catch (_) { return null; }
    }
    function playMediaEffect(name, clip) {
      const entry = mediaEffect(name);
      if (!entry) return false;
      if (entry.failed) return tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
      entry.active = true;
      try {
        entry.player.currentTime = 0;
        entry.player.volume = Math.min(1, config.sfx.volume * (Number.isFinite(clip.gain) ? clip.gain : 1));
        Promise.resolve(entry.player.play()).catch(() => {
          if (!entry.active) return;
          entry.active = false;
          tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
        });
        return true;
      } catch (_) {
        entry.active = false;
        return tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
      }
    }
    function loadEffect(name) {
      const clip = clips[name];
      // Media elements can play creator files under file:// and public URLs without fetch CORS.
      if (["creator-provided", "creator-selected"].includes(clip?.source) && clip.url) {
        mediaEffect(name);
        return Promise.resolve(null);
      }
      if (!clip?.url || effectBuffers.has(name)) return Promise.resolve(effectBuffers.get(name) || null);
      if (effectLoads.has(name)) return effectLoads.get(name);
      const ac = audioContext();
      if (!ac || typeof global.fetch !== "function" || typeof ac.decodeAudioData !== "function") return Promise.resolve(null);
      const loading = global.fetch(clip.url)
        .then((response) => { if (!response.ok) throw new Error("Sound effect load failed"); return response.arrayBuffer(); })
        .then((data) => ac.decodeAudioData(data))
        .then((buffer) => { if (!disposed) effectBuffers.set(name, buffer); return buffer; })
        .catch(() => null);
      effectLoads.set(name, loading);
      return loading;
    }
    function preloadSFX() {
      return Promise.all(Object.keys(clips).map(loadEffect));
    }
    function playSFX(name) {
      const clip = clips[name];
      if (!clip || muted || disposed) return false;
      const now = Date.now();
      if (now - (lastEffectAt.get(name) || 0) < Number(clip.cooldownMs || 0)) return false;
      if (["creator-provided", "creator-selected"].includes(clip.source) && clip.url) {
        const played = playMediaEffect(name, clip);
        if (played) lastEffectAt.set(name, now);
        return played;
      }
      const buffer = effectBuffers.get(name);
      if (!buffer) {
        loadEffect(name);
        const played = tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
        if (played) lastEffectAt.set(name, now);
        return played;
      }
      const ac = audioContext();
      if (!ac || typeof ac.createBufferSource !== "function") {
        const played = tone({ ...clip.fallbackTone, gain: clip.gain, polyphony: clip.polyphony }, name);
        if (played) lastEffectAt.set(name, now);
        return played;
      }
      const active = activeEffects.get(name) || new Set();
      if (active.size >= Math.max(1, Number(clip.polyphony || 4))) return false;
      const source = ac.createBufferSource();
      const gain = ac.createGain();
      source.buffer = buffer;
      gain.gain.value = Number.isFinite(clip.gain) ? clip.gain : 1;
      source.connect(gain);
      gain.connect(effects);
      active.add(source);
      activeEffects.set(name, active);
      lastEffectAt.set(name, now);
      source.onended = () => { active.delete(source); source.disconnect(); gain.disconnect(); };
      source.start();
      return true;
    }
    button?.setAttribute("aria-pressed", "false");
    button?.addEventListener("click", toggle);
    return {
      playBGM, preloadSFX, playSFX, setMuted, toggle, tone,
      get muted() { return muted; },
      dispose() {
        disposed = true;
        clearRetry();
        button?.removeEventListener("click", toggle);
        music?.pause();
        music?.removeEventListener("error", startFallback);
        stopFallback();
        activeTones.forEach((osc) => osc.stop());
        activeTones.clear();
        activeToneChannels.clear();
        activeEffects.forEach((sources) => sources.forEach((source) => { try { source.stop(); } catch (_) {} }));
        activeEffects.clear();
        mediaEffects.forEach((pool) => pool.forEach((entry) => {
          entry.player.pause();
          entry.player.removeEventListener("ended", entry.release);
          entry.player.removeEventListener("error", entry.failedListener);
        }));
        mediaEffects.clear();
        effectBuffers.clear();
        effectLoads.clear();
        if (context) Promise.resolve(context.close()).catch(() => {});
      }
    };
  }

  global.SoonLabCanvas = Object.freeze({
    version: "1.1.2",
    computePresentationFit,
    loadAssets,
    spriteLayout,
    frameAt,
    drawSprite,
    createAnimator,
    createAudio
  });
})(window);
