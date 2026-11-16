(function registerGameplay(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createGameplay = function createGameplay({ core, config, audio, onTerminal, onRestart }) {
    const state = core.state;
    function enter(next) {
      state.state = next;
      state.phaseTime = 0;
      const action = next === "jumping" ? "jump" : ["collision", "feedback", "gameover"].includes(next) ? "hit" : "run";
      if (state.action !== action) { state.action = action; state.actionTime = 0; }
      if (next === "gameover") {
        state.jumpY = 0;
        state.particles = [];
        state.finalScore = state.score;
        core.saveBest();
        onTerminal(next);
      }
    }
    function burst(color, count) {
      const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      for (let index = 0; index < count * (reduced ? 0.25 : 1); index++) {
        state.particles.push({ x: config.worldLayout.playerAnchor.x, y: config.worldLayout.groundY - 25,
          vx: Math.random() * 220 - 110, vy: -50 - Math.random() * 170, life: 0.65, color });
      }
    }
    function start() {
      if (state.state !== "ready") return;
      audio.unlock();
      enter("running");
    }
    function question() {
      if (!state.bag.length) {
        state.bag = core.shuffle(config.questions);
        if (state.bag[state.bag.length - 1].id === state.lastQuestionId) state.bag.unshift(state.bag.pop());
      }
      state.question = state.bag.pop();
      state.lastQuestionId = state.question.id;
      state.answerOrder = core.shuffle(state.question.options);
      state.timeRemaining = state.question.timeLimitSeconds;
      state.feedback = null;
      enter("question");
    }
    function answer(index, timeout = false) {
      if (state.state !== "question") return;
      if (!timeout && !state.answerOrder[index]) return;
      state.answered++;
      const correct = !timeout && state.answerOrder[index].id === state.question.correctOptionId;
      const correctOption = state.question.options.find(option => option.id === state.question.correctOptionId);
      state.feedback = { correct, timeout, answer: correctOption.text, explanation: state.question.explanation };
      if (correct) {
        state.combo++;
        state.score += config.scoring.correctBase + Math.min(config.scoring.comboBonusCap, config.scoring.comboBonusStep * (state.combo - 1));
        state.speed = Math.min(config.difficulty.maxSpeed, config.difficulty.baseSpeed + state.score * config.difficulty.speedIncreasePerPoint);
        core.saveBest();
        audio.correct();
        audio.jump();
        burst("#65ffe5", config.effects.correctParticles);
        enter("jumping");
      } else {
        state.lives -= config.gameplay.lifeLossPerError;
        state.combo = 0;
        audio.hit();
        burst("#ff64ba", config.effects.hitParticles);
        enter("collision");
      }
    }
    function continueRun() {
      if (state.state !== "feedback") return;
      state.feedback = null;
      state.obstacleX = config.worldLayout.obstacle.spawnX;
      state.spawnDelay = config.gameplay.nextObstacleDelaySeconds;
      enter("running");
    }
    function restart() {
      onRestart();
      core.reset();
      start();
    }
    function update(delta) {
      if (!Number.isFinite(delta) || delta <= 0) return;
      state.frame++;
      state.time += delta;
      state.phaseTime += delta;
      if (state.state === "question") {
        state.timeRemaining = Math.max(0, state.timeRemaining - delta);
        if (state.timeRemaining === 0) answer(-1, true);
      } else if (["running", "jumping", "collision"].includes(state.state)) {
        state.actionTime += delta;
        state.distance += state.speed * delta;
        if (state.state === "running") {
          if (state.spawnDelay > 0) state.spawnDelay -= delta;
          else state.obstacleX -= state.speed * delta;
          if (state.obstacleX <= config.worldLayout.obstacle.questionTriggerX) {
            state.obstacleX = config.worldLayout.obstacle.questionTriggerX;
            question();
          }
        } else if (state.state === "jumping") {
          const progress = Math.min(1, state.phaseTime / config.gameplay.jump.durationSeconds);
          state.jumpY = 4 * config.gameplay.jump.height * progress * (1 - progress);
          state.obstacleX -= state.speed * delta;
          if (progress === 1) {
            state.jumpY = 0;
            burst("#63ddff", config.effects.landingParticles);
            state.obstacleX = config.worldLayout.obstacle.spawnX;
            state.spawnDelay = config.gameplay.nextObstacleDelaySeconds;
            enter("running");
          }
        } else {
          state.obstacleX = Math.max(config.worldLayout.playerAnchor.x + 35, state.obstacleX - state.speed * delta);
          if (state.phaseTime >= config.gameplay.collisionSeconds) enter(state.lives > 0 ? "feedback" : "gameover");
        }
      }
      for (const particle of state.particles) {
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vy += 400 * delta;
        particle.life -= delta;
      }
      state.particles = state.particles.filter(particle => particle.life > 0);
    }
    function key(key) {
      const index = config.controls.answerKeys.findIndex(keys => keys.includes(key));
      if (index >= 0) answer(index);
    }
    return { start, answer, continueRun, restart, update, key, question, enter };
  };
})(window);
