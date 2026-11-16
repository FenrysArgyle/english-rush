(function registerInput(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.bindInputs = function bindInputs({ gameplay, state, ui }) {
    document.getElementById("start").addEventListener("click", gameplay.start);
    document.getElementById("continue").addEventListener("click", gameplay.continueRun);
    document.getElementById("restart").addEventListener("click", gameplay.restart);
    document.querySelectorAll("[data-answer]").forEach((button, index) => button.addEventListener("click", () => gameplay.answer(index)));
    window.addEventListener("keydown", event => {
      if (document.getElementById("stage").hidden || event.repeat || /INPUT|TEXTAREA/.test(event.target?.tagName) || ui.isModalOpen()) return;
      if (/^[1-4a-d]$/i.test(event.key)) { event.preventDefault(); gameplay.key(event.key); }
      if (event.key === "Enter" && state.state === "ready") gameplay.start();
    });
    state.inputReady = true;
  };
})(window);
