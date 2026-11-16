(async function startGame(window) {
  "use strict";
  window.SoonLabGame ||= {};
  const startup = { ready: false, assetsReady: false, errors: [], warnings: [] };
  window.SoonLabGame.startup = startup;
  let arcade;
  let audio;

  async function composeGame({ assets, startup }) {
    const config = window.LOBSTER_GAME_CONFIG;
    const core = window.SoonLabGame.createCore({ config });
    const state = core.state;
    const canvas = document.getElementById("game-canvas");
    const stage = document.getElementById("stage");
    const root = document.getElementById("game-root");
    const client = SoonLabLeaderboard.createClient({ gameId: config.leaderboard.gameId });

    const ui = window.SoonLabGame.createUi({ state, config, client });
    const gameplay = window.SoonLabGame.createGameplay({ core, config, audio, onTerminal: ui.onTerminal, onRestart: ui.onRestart });
    const renderer = window.SoonLabGame.createRenderer({ canvas, assets });
    let fit;
    let previousTime = null;
    function resize() {
      const availableWidth = root.clientWidth || window.innerWidth || 1280;
      const availableHeight = root.clientHeight || window.innerHeight || 720;
      const tall = availableWidth < availableHeight;
      const logicalWidth = tall ? 420 : 1280;
      const logicalHeight = tall ? Math.max(850, Math.min(960, availableHeight / availableWidth * 420)) : 720;
      fit = SoonLabCanvas.computePresentationFit({ logicalWidth, logicalHeight, availableWidth, availableHeight });
      stage.classList.toggle("tall", tall);
      Object.assign(stage.style, { width: logicalWidth + "px", height: logicalHeight + "px", transform: "scale(" + fit.scale + ")", left: fit.left + "px", top: fit.top + "px" });
    }
    resize();
    window.addEventListener("resize", resize);
    if (window.ResizeObserver) new ResizeObserver(resize).observe(root);
    document.addEventListener("visibilitychange", () => { previousTime = null; });
    function render() { renderer.render(state); ui.render(); }
    function frame(timestamp) {
      try {
        if (previousTime !== null && !document.hidden && arcade.isRunner() && !ui.isModalOpen()) {
          const elapsed = Math.max(0, (timestamp - previousTime) / 1000);
          if (state.state === "question") gameplay.update(elapsed);
          else gameplay.update(Math.min(.05, elapsed));
        }
        previousTime = timestamp;
        render();
        requestAnimationFrame(frame);
      } catch (error) {
        startup.errors.push(error.message);
        startup.ready = false;
        const overlay = document.getElementById("startup-error");
        overlay.textContent = "Trò chơi gặp lỗi. Vui lòng tải lại trang.";
        overlay.hidden = false;
        window.SoonLabGameBridge?.reportError?.(error);
      }
    }
    function snapshot() {
      const loaded = assets.getRole("robot-" + state.action);
      const animationFrame = loaded ? SoonLabCanvas.frameAt(loaded.asset, state.action, state.actionTime) : null;
      return {
        arcade: arcade.snapshot(), title: config.title, renderMode: config.renderMode, gameType: config.gameType,
        state: state.state, frame: state.frame, time: state.time, canRestart: typeof gameplay.restart === "function",
        inputReady: state.inputReady, canvasReady: Boolean(canvas.getContext("2d")),
        rendererProof: { contextReady: Boolean(canvas.getContext("2d")), logicalWidth: config.stage.width, logicalHeight: config.stage.height,
          displayWidth: fit.displayWidth, displayHeight: fit.displayHeight, presentationScale: fit.scale,
          viewportMode: "adaptive", inputMode: "keyboard-pointer-touch", transientWorldOffsetActive: false },
        gameplay: { state: state.state, score: state.score, lives: state.lives, combo: state.combo,
          questionId: state.question?.id || null, questionCategory: state.question?.category || null,
          answerOrder: state.answerOrder.map(option => option.id), timeRemaining: state.timeRemaining,
          worldPaused: !["running", "jumping", "collision"].includes(state.state), obstacleX: state.obstacleX,
          animationRole: "robot-" + state.action, animationState: state.action, animationFrame,
          highScore: state.highScore, finalScore: state.finalScore, leaderboard: ui.snapshot() }
      };
    }
    function advance(seconds) {
      const steps = Math.min(3600, Math.ceil(seconds * 60));
      for (let index = 0; index < steps; index++) gameplay.update(1 / 60);
    }
    function reachQuestion() {
      if (state.state === "ready") gameplay.start();
      if (state.state === "feedback") gameplay.continueRun();
      for (let index = 0; index < 2000 && state.state !== "question" && state.state !== "gameover"; index++) gameplay.update(1 / 60);
    }
    function simulate(input = {}) {
      if (input.type === "arcade") { arcade.simulate(input); return; }
      arcade.show("runner", false);
      if (input.type === "start") gameplay.start();
      if (input.type === "key") { gameplay.key(input.key); advance(Math.min(10, Math.max(0, Number(input.frames) || 1) / 60)); }
      if (input.type === "answer") gameplay.answer(Number(input.index));
      if (input.type === "continue") gameplay.continueRun();
      if (input.type === "tick") advance(Math.min(60, Number(input.seconds) || 1));
      if (input.type === "outcome" && input.state === "gameover") {
        if (state.state === "gameover") gameplay.restart();
        while (state.lives > 0) { reachQuestion(); gameplay.answer(-1, true); advance(.6); }
      }
      if (input.type === "asset-proof") {
        if (state.state === "gameover") gameplay.restart();
        reachQuestion(); render();
        gameplay.answer(state.answerOrder.findIndex(option => option.id === state.question.correctOptionId));
        advance(.3); render(); advance(1.2);
        reachQuestion(); gameplay.answer(-1, true); advance(.2); render();
      }
      render();
    }
    const testHook = window.SoonLabGame.createTestHook({ startup, snapshot, simulate, restart() {
      if (["memory", "quest"].includes(arcade.snapshot().mode)) arcade.simulate({ action: "restart" });
      else gameplay.restart();
      render();
    } });
    return { testHook, bindInputs() { window.SoonLabGame.bindInputs({ gameplay, state, ui }); }, render,
      start() { requestAnimationFrame(frame); } };
  }

  try {
    audio = window.SoonLabGame.createGameAudio({ config: window.LOBSTER_GAME_CONFIG });
    arcade = window.SoonLabGame.createArcade({ audio });
    const assets = await SoonLabCanvas.loadAssets(window.LOBSTER_GAME_ASSETS.assets);
    startup.warnings.push(...assets.warnings);
    const game = await composeGame({ assets, startup });
    window.__CODEX_GAME_TEST__ = game.testHook;
    game.bindInputs();
    game.render();
    startup.assetsReady = true;
    game.start();
    startup.ready = true;
    arcade.setRunnerReady();
    try { window.SoonLabGameBridge?.ready({ interactive: true }); } catch (_) {}
  } catch (error) {
    startup.ready = false;
    startup.errors.push(error.message || String(error));
    let overlay = document.getElementById("startup-error");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.setAttribute("role", "alert");
      document.body.appendChild(overlay);
    }
    overlay.textContent = window.LOBSTER_GAME_CONFIG?.messages?.startupError || "Không thể khởi động trò chơi. Vui lòng tải lại trang.";
    overlay.hidden = false;
    try { window.SoonLabGameBridge?.reportError(error); } catch (_) {}
  }
})(window);
