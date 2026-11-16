(function registerCore(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createCore = function createCore({ config }) {
    let highScore = 0;
    try { highScore = Math.max(0, Number(localStorage.getItem(config.persistence.highScoreKey)) || 0); } catch (_) {}
    const state = { highScore, frame: 0, time: 0, inputReady: false };
    function reset() {
      Object.assign(state, {
        state: "ready", score: 0, lives: config.difficulty.startingLives, combo: 0,
        question: null, answerOrder: [], timeRemaining: 0, bag: [], lastQuestionId: null,
        obstacleX: config.worldLayout.obstacle.spawnX, distance: 0, action: "run", actionTime: 0,
        jumpY: 0, feedback: null, finalScore: null, particles: [], answered: 0,
        speed: config.difficulty.baseSpeed, phaseTime: 0, spawnDelay: 0
      });
    }
    function saveBest() {
      state.highScore = Math.max(state.highScore, state.score);
      try { localStorage.setItem(config.persistence.highScoreKey, String(state.highScore)); } catch (_) {}
    }
    function shuffle(items) {
      const result = items.slice();
      for (let index = result.length - 1; index > 0; index--) {
        const other = Math.floor(Math.random() * (index + 1));
        [result[index], result[other]] = [result[other], result[index]];
      }
      return result;
    }
    reset();
    return { state, reset, saveBest, shuffle };
  };
})(window);
