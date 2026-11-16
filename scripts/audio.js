(function registerAudio(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createGameAudio = function createGameAudio({ config }) {
    const buttons = Array.from(document.querySelectorAll("[data-audio-toggle]"));
    let audio = SoonLabCanvas.createAudio({ ...config.audio, bgm: { enabled: false } });
    let mode = "home";
    let muted = false;
    try { muted = localStorage.getItem(config.persistence.muteKey) === "true"; } catch (_) {}
    audio.setMuted(muted);
    function label() {
      buttons.forEach(button => {
        button.textContent = muted ? "Âm thanh: Tắt" : "Âm thanh: Bật";
        button.setAttribute("aria-label", muted ? config.ui.unmute : config.ui.mute);
        button.setAttribute("aria-pressed", String(muted));
      });
    }
    label();
    buttons.forEach(button => button.addEventListener("click", () => {
      muted = !muted;
      audio.setMuted(muted);
      label();
      try { localStorage.setItem(config.persistence.muteKey, String(muted)); } catch (_) {}
    }));
    return {
      setMode(next) {
        if (mode === next) return;
        mode = next;
        audio.dispose();
        const bgm = mode === "runner" ? config.audio.bgm
          : config.audio.modeBgm[mode] ? { ...config.audio.modeBgm[mode], loop: true, volume: config.audio.bgm.volume }
          : { enabled: false };
        audio = SoonLabCanvas.createAudio({ ...config.audio, bgm });
        audio.setMuted(muted);
        label();
      },
      unlock() { audio.playBGM(); audio.preloadSFX(); },
      jump() { audio.playSFX("jump"); },
      correct() { audio.playSFX("powerup"); },
      hit() { audio.playSFX("hit"); },
      dispose() { audio.dispose(); }
    };
  };
})(window);
