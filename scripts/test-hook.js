(function registerTestHook(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createTestHook = function createTestHook({ startup, snapshot, simulate, restart }) {
    function readSnapshot() {
      const game = snapshot();
      const errors = [...startup.errors, ...(game.errors || [])];
      return {
        ...game,
        ok: startup.ready && game.ok !== false && errors.length === 0,
        assetsReady: startup.assetsReady,
        errors,
        warnings: [...startup.warnings, ...(game.warnings || [])]
      };
    }
    return {
      snapshot: readSnapshot,
      simulate(action) { window.SoonLabGame.testMode = true; simulate(action); return readSnapshot(); },
      restart() { window.SoonLabGame.testMode = true; restart(); return readSnapshot(); }
    };
  };
})(window);
