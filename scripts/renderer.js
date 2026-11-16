(function registerRenderer(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createRenderer = function createRenderer({ canvas, assets }) {
    const config = window.LOBSTER_GAME_CONFIG;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context is unavailable");

    function layout0(state) {
      return [{ x: 0, y: 0, width: config.stage.width, height: config.stage.height }];
    }
    function fallback0(placement, state) {
      const gradient = ctx.createLinearGradient(0, 0, 0, config.stage.height);
      gradient.addColorStop(0, "#161637"); gradient.addColorStop(1, "#694072");
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, config.stage.width, config.stage.height);
      ctx.fillStyle = "#282344";
      for (let index = 0; index < 16; index++) { const height = 100 + (index * 53 % 180); ctx.fillRect(index * 90 - (state.distance * .12 % 90), config.worldLayout.groundY - height, 65, height); }
    }
    function drawRole0(state, placements = layout0(state)) {
      const loaded = assets.getRole("neon-skyline");
      if (!loaded) throw new Error("Missing registered asset: " + "neon-skyline");
      for (const placement of placements) {
        if (loaded.image) {
          if (![placement.x, placement.y, placement.width, placement.height].every(Number.isFinite)
              || placement.width <= 0 || placement.height <= 0) throw new Error("Invalid destination for " + "neon-skyline");
          const scale = Math.max(placement.width / loaded.image.width, placement.height / loaded.image.height);
          const sourceWidth = placement.width / scale;
          const sourceHeight = placement.height / scale;
          const drift = Math.sin(state.distance * 0.00012) * Math.max(0, (loaded.image.width - sourceWidth) / 2);
          ctx.drawImage(loaded.image, (loaded.image.width - sourceWidth) / 2 + drift, (loaded.image.height - sourceHeight) / 2, sourceWidth, sourceHeight, placement.x, placement.y, placement.width, placement.height);
        } else {
          fallback0(placement, state);
        }
      }
    }

    function layout1(state) {
      const width = config.stage.width;
      const offset = (state.distance * config.worldLayout.parallax[1].speedRatio) % width;
      return [-offset, width - offset].map(x => ({ x, y: 95, width, height: config.worldLayout.groundY - 95 }));
    }
    function fallback1(placement, state) {
      ctx.fillStyle = "#272b5080";
      for (let index = 0; index < 12; index++) { const height = 100 + (index * 39 % 180); ctx.fillRect(placement.x + index * 110, config.worldLayout.groundY - height, 70, height); ctx.fillStyle = "#69dce47a"; ctx.fillRect(placement.x + index * 110 + 12, config.worldLayout.groundY - height + 20, 5, 22); ctx.fillStyle = "#272b5080"; }
    }
    function drawRole1(state, placements = layout1(state)) {
      const loaded = assets.getRole("near-city");
      if (!loaded) throw new Error("Missing registered asset: " + "near-city");
      for (const placement of placements) {
        if (loaded.image) {
          if (![placement.x, placement.y, placement.width, placement.height].every(Number.isFinite)
              || placement.width <= 0 || placement.height <= 0) throw new Error("Invalid destination for " + "near-city");
          ctx.drawImage(loaded.image, placement.x, placement.y, placement.width, placement.height);
        } else {
          fallback1(placement, state);
        }
      }
    }

    function layout2(state) {
      return state.action === "run" ? [actorPlacement(state)] : [];
    }
    function fallback2(placement, state) {
      drawRobotFallback(placement, state);
    }
    function drawRole2(state, placements = layout2(state)) {
      const loaded = assets.getRole("robot-run");
      if (!loaded) throw new Error("Missing registered asset: " + "robot-run");
      for (const placement of placements) {
        if (loaded.image) {
          const frameIndex = SoonLabCanvas.frameAt(loaded.asset, placement.clip, placement.elapsed);
          if (frameIndex === null) throw new Error("Unmapped animation clip for " + "robot-run");
          if (!SoonLabCanvas.drawSprite(ctx, loaded, { ...placement, frameIndex })) {
            throw new Error("Invalid sprite placement for " + "robot-run");
          }
        } else {
          fallback2(placement, state);
        }
      }
    }

    function layout3(state) {
      return state.action === "jump" ? [actorPlacement(state)] : [];
    }
    function fallback3(placement, state) {
      drawRobotFallback(placement, state);
    }
    function drawRole3(state, placements = layout3(state)) {
      const loaded = assets.getRole("robot-jump");
      if (!loaded) throw new Error("Missing registered asset: " + "robot-jump");
      for (const placement of placements) {
        if (loaded.image) {
          const frameIndex = SoonLabCanvas.frameAt(loaded.asset, placement.clip, placement.elapsed);
          if (frameIndex === null) throw new Error("Unmapped animation clip for " + "robot-jump");
          if (!SoonLabCanvas.drawSprite(ctx, loaded, { ...placement, frameIndex })) {
            throw new Error("Invalid sprite placement for " + "robot-jump");
          }
        } else {
          fallback3(placement, state);
        }
      }
    }

    function layout4(state) {
      return state.action === "hit" ? [actorPlacement(state)] : [];
    }
    function fallback4(placement, state) {
      drawRobotFallback(placement, state);
    }
    function drawRole4(state, placements = layout4(state)) {
      const loaded = assets.getRole("robot-hit");
      if (!loaded) throw new Error("Missing registered asset: " + "robot-hit");
      for (const placement of placements) {
        if (loaded.image) {
          const frameIndex = SoonLabCanvas.frameAt(loaded.asset, placement.clip, placement.elapsed);
          if (frameIndex === null) throw new Error("Unmapped animation clip for " + "robot-hit");
          if (!SoonLabCanvas.drawSprite(ctx, loaded, { ...placement, frameIndex })) {
            throw new Error("Invalid sprite placement for " + "robot-hit");
          }
        } else {
          fallback4(placement, state);
        }
      }
    }

    function layout5(state) {
      return [{ x: state.obstacleX, y: config.worldLayout.groundY, height: config.worldLayout.obstacle.height, flipX: false }];
    }
    function fallback5(placement, state) {
      ctx.save(); ctx.translate(placement.x, placement.y);
      ctx.shadowColor = "#f35cd4"; ctx.shadowBlur = 18;
      for (let index = 0; index < 3; index++) { const center = (index - 1) * 22; const height = placement.height * (index === 1 ? 1 : .65); ctx.fillStyle = index === 1 ? "#f36edd" : "#a54ed1"; ctx.beginPath(); ctx.moveTo(center - 18, 0); ctx.lineTo(center - 14, -height * .65); ctx.lineTo(center, -height); ctx.lineTo(center + 17, -height * .55); ctx.lineTo(center + 13, 0); ctx.closePath(); ctx.fill(); ctx.strokeStyle = "#a0f5ff"; ctx.stroke(); }
      ctx.restore();
    }
    function drawRole5(state, placements = layout5(state)) {
      const loaded = assets.getRole("energy-crystal");
      if (!loaded) throw new Error("Missing registered asset: " + "energy-crystal");
      for (const placement of placements) {
        if (loaded.image) {
          if (!SoonLabCanvas.drawSprite(ctx, loaded, placement)) {
            throw new Error("Invalid sprite placement for " + "energy-crystal");
          }
        } else {
          fallback5(placement, state);
        }
      }
    }

    function actorPlacement(state) {
      return { x: config.worldLayout.playerAnchor.x, y: config.worldLayout.groundY - state.jumpY,
        height: config.stage.height * config.characterScale.stageHeightRatio,
        clip: state.action, elapsed: state.actionTime, flipX: false };
    }
    function drawRobotFallback(placement, state) {
      ctx.save();
      ctx.translate(placement.x, placement.y);
      const scale = placement.height / 144;
      ctx.scale(scale, scale);
      const stride = state.action === "run" ? Math.sin(state.actionTime * 18) * 16 : state.action === "jump" ? 20 : -12;
      const crouch = state.action === "hit" ? 16 : 0;
      ctx.translate(0, crouch);
      ctx.strokeStyle = "#8eeeee"; ctx.lineWidth = 12; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(-14, -46); ctx.lineTo(-18 - stride, -23); ctx.lineTo(-17 + stride, -6 - crouch);
      ctx.moveTo(14, -46); ctx.lineTo(20 + stride, -23); ctx.lineTo(17 - stride, -6 - crouch); ctx.stroke();
      ctx.fillStyle = "#c7e9ec"; ctx.beginPath(); ctx.roundRect(-30, -103, 60, 62, 18); ctx.fill();
      ctx.fillStyle = "#e0f8f9"; ctx.beginPath(); ctx.roundRect(-37, -142, 74, 51, 19); ctx.fill();
      ctx.fillStyle = "#112642"; ctx.beginPath(); ctx.roundRect(-28, -131, 56, 29, 10); ctx.fill();
      ctx.fillStyle = state.action === "hit" ? "#ff73b1" : "#56ffe4";
      ctx.fillRect(-19, -120, 12, 6); ctx.fillRect(7, -120, 12, 6); ctx.fillRect(-9, -85, 18, 18);
      ctx.strokeStyle = "#c0f0f4"; ctx.lineWidth = 10;
      ctx.beginPath(); ctx.moveTo(-28, -91); ctx.lineTo(-45, -65 - stride); ctx.moveTo(28, -91); ctx.lineTo(45, -65 + stride); ctx.stroke();
      ctx.restore();
    }
    function beforeFrame(state) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    function drawTrack(state) {
      const ground = config.worldLayout.groundY;
      ctx.fillStyle = "#151c32"; ctx.fillRect(0, ground, config.stage.width, config.stage.height - ground);
      ctx.fillStyle = "#66e2d7"; ctx.fillRect(0, ground, config.stage.width, 4);
      ctx.fillStyle = "#384b6b";
      for (let index = 0; index < 20; index++) ctx.fillRect(index * 90 - state.distance % 90, ground + 52, 40, 4);
    }
    function drawOverlay(state) {
      for (const particle of state.particles) {
        ctx.globalAlpha = Math.max(0, particle.life / .65);
        ctx.fillStyle = particle.color; ctx.beginPath(); ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function render(state) {
      beforeFrame(state);
      drawRole0(state);
      drawRole1(state);
      drawTrack(state);
      drawRole2(state);
      drawRole3(state);
      drawRole4(state);
      drawRole5(state);
      drawOverlay(state);
    }
    return { render };
  };
})(window);
