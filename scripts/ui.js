(function registerUi(window) {
  "use strict";
  window.SoonLabGame ||= {};
  window.SoonLabGame.createUi = function createUi({ state, config, client }) {
    const element = id => document.getElementById(id);
    const boardModal = element("board-modal");
    const nameModal = element("name-modal");
    let board = null;
    let roundVersion = 0;
    let listVersion = 0;
    let nameVersion = 0;
    let boardReturnFocus = null;
    let nameReturnFocus = null;
    let lastQuestion = null;
    let lastState = null;
    let submissionState = "idle";
    let submitAttempts = 0;
    let lastAttemptScore = null;
    let namePending = false;
    const text = (id, value) => { element(id).textContent = value; };
    function acceptBoard(result) {
      if (!result.ok || result.skipped) return;
      if (board?.current && (!result.current || result.current.score < board.current.score)) return;
      board = result;
      drawBoard();
    }
    function personalText() {
      const current = board?.current;
      const name = client.profile.displayName;
      if (current) return `${name} · Kỷ lục: ${current.score} · Hạng theo kỷ lục: #${current.rank} · Mốc tiếp theo: ${current.nextScore ?? "Đang dẫn đầu"}`;
      return `${name} · ${board ? "Chưa có điểm" : submissionState === "submitting" ? "Đang gửi điểm…" : "Chưa kết nối bảng xếp hạng. Bạn vẫn có thể chơi lại."}`;
    }
    function drawBoard() {
      const rows = element("board-rows");
      rows.textContent = "";
      for (const item of board?.items || []) {
        const row = document.createElement("div");
        const self = item.playerId === client.profile.playerId;
        row.className = "board-row" + (self ? " self" : "");
        for (const value of [`#${item.rank}`, self ? `${client.profile.displayName} (Bạn)` : item.displayName, String(item.score)]) {
          const cell = document.createElement("span");
          cell.textContent = value;
          row.appendChild(cell);
        }
        rows.appendChild(row);
      }
      text("personal-board", "Kỷ lục của tôi — " + personalText());
      text("personal-result", personalText());
    }
    async function sendFrozenScore(version) {
      submissionState = "submitting";
      render();
      const result = await client.submit(lastAttemptScore);
      if (version !== roundVersion) return;
      submissionState = result.skipped ? "test-suppressed" : result.ok ? "submitted" : "failed";
      acceptBoard(result);
      render();
    }
    function onTerminal(terminal) {
      if (!config.leaderboard.submitStates.includes(terminal) || submitAttempts) return;
      if (!Number.isSafeInteger(state.finalScore)) throw new Error("Điểm kết thúc không hợp lệ");
      submitAttempts = 1;
      lastAttemptScore = state.finalScore;
      sendFrozenScore(roundVersion);
    }
    function onRestart() {
      roundVersion++;
      listVersion++;
      nameVersion++;
      submitAttempts = 0;
      lastAttemptScore = null;
      submissionState = "idle";
      namePending = false;
      boardModal.hidden = true;
      nameModal.hidden = true;
    }
    async function list() {
      const version = ++listVersion;
      const round = roundVersion;
      text("board-status", "Đang tải…");
      const result = await client.list();
      if (version !== listVersion || round !== roundVersion) return;
      text("board-status", result.ok ? "TOP 20 · Xếp hạng theo điểm cao nhất" : config.ui.offline);
      acceptBoard(result);
    }
    function closeBoard() {
      boardModal.hidden = true;
      listVersion++;
      boardReturnFocus?.focus();
    }
    function validName() {
      const value = element("nickname").value.normalize("NFC").trim();
      return [...value].length >= 1 && [...value].length <= 16 && !/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/.test(value);
    }
    function validateName() {
      const valid = validName();
      element("save-name").disabled = !valid || namePending;
      text("name-status", valid ? "1–16 ký tự · Không dùng ký tự điều khiển" : "Nhập biệt danh hợp lệ, từ 1 đến 16 ký tự.");
    }
    function closeName() {
      nameVersion++;
      namePending = false;
      nameModal.hidden = true;
      nameReturnFocus?.focus();
    }
    document.querySelectorAll("[data-board-open]").forEach(button => button.addEventListener("click", () => {
      boardReturnFocus = button;
      boardModal.hidden = false;
      drawBoard();
      list();
      element("close-board").focus();
    }));
    element("close-board").addEventListener("click", closeBoard);
    element("refresh-board").addEventListener("click", list);
    element("retry-submit").addEventListener("click", () => {
      if (submissionState === "failed") sendFrozenScore(roundVersion);
    });
    document.querySelectorAll("[data-edit-name]").forEach(button => button.addEventListener("click", () => {
      nameReturnFocus = button;
      nameModal.hidden = false;
      element("nickname").value = client.profile.displayName;
      validateName();
      element("nickname").focus();
    }));
    element("nickname").addEventListener("input", validateName);
    element("cancel-name").addEventListener("click", closeName);
    element("name-form").addEventListener("submit", async event => {
      event.preventDefault();
      if (!validName() || namePending) return;
      const version = ++nameVersion;
      const round = roundVersion;
      namePending = true;
      validateName();
      text("name-status", "Đang lưu…");
      const result = await client.rename(element("nickname").value);
      if (version !== nameVersion || round !== roundVersion || nameModal.hidden) return;
      namePending = false;
      if (result.ok && !result.skipped) {
        acceptBoard(result);
        drawBoard();
        closeName();
      } else {
        element("save-name").disabled = false;
        text("name-status", result.code === "score_unconfirmed" ? "Hãy đóng và làm mới bảng xếp hạng để xác nhận điểm trước khi đổi tên." : "Chưa lưu được. Giữ nguyên biệt danh cũ; bạn có thể thử lại.");
      }
    });
    window.addEventListener("keydown", event => {
      if (event.key === "Escape") { if (!nameModal.hidden) closeName(); else if (!boardModal.hidden) closeBoard(); }
      if (event.key === "Tab" && (!nameModal.hidden || !boardModal.hidden)) {
        const modal = !nameModal.hidden ? nameModal : boardModal;
        const controls = [...modal.querySelectorAll("button, input")].filter(control => !control.disabled);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    function render() {
      text("score", state.score);
      text("best", state.highScore);
      text("combo", `×${state.combo}`);
      text("lives", "♥ ".repeat(Math.max(0, state.lives)) + "♡ ".repeat(3 - Math.max(0, state.lives)));
      element("ready-panel").hidden = state.state !== "ready";
      element("question-panel").hidden = state.state !== "question";
      element("running-panel").hidden = !["running", "jumping", "collision"].includes(state.state);
      element("feedback-panel").hidden = !["feedback", "gameover"].includes(state.state);
      const question = state.question;
      if (state.state === "question" && question) {
        if (lastQuestion !== question || lastState !== "question") {
          text("question-text", question.prompt);
          const categories = { "fill-in-the-blank": "ĐIỀN TỪ", "sentence-structure": "CẤU TRÚC CÂU", "meaning-idioms": "NGHĨA & THÀNH NGỮ" };
          text("category", `${categories[question.category] || "TỪ VỰNG"} · ${state.answered + 1}`);
          document.querySelectorAll("[data-answer]").forEach((button, index) => {
            button.textContent = "";
            const badge = document.createElement("b");
            badge.textContent = "ABCD"[index];
            const label = document.createElement("span");
            label.textContent = state.answerOrder[index].text;
            button.appendChild(badge);
            button.appendChild(label);
          });
        }
        text("timer-label", `${Math.ceil(state.timeRemaining)} giây`);
        element("timer-fill").style.width = `${state.timeRemaining / question.timeLimitSeconds * 100}%`;
        element("timer-fill").style.background = state.timeRemaining < 5 ? "#ff7ba7" : "#77f6d9";
      }
      text("scene-message", state.state === "question" ? "Tạm dừng · Đến lượt bạn!" : state.state === "jumping" ? `CHÍNH XÁC! · COMBO ×${state.combo}` : state.state === "ready" ? "Sẵn sàng cho hành trình?" : "Học từng câu · Tiến từng bước");
      text("run-title", state.state === "jumping" ? "Chính xác! Tuyệt vời ✦" : state.state === "collision" ? "Một bài học mới…" : "Tiến lên, người khám phá!");
      text("run-copy", state.state === "jumping" ? `+${config.scoring.correctBase + Math.min(config.scoring.comboBonusCap, config.scoring.comboBonusStep * (state.combo - 1))} điểm · Giữ vững phong độ!` : "Câu hỏi tiếp theo đang đến gần…");
      if (state.feedback) {
        text("feedback-tag", state.state === "gameover" ? "HÀNH TRÌNH TẠM KHÉP LẠI" : "HỌC TỪ MỖI BƯỚC CHẠY");
        text("feedback-title", state.state === "gameover" ? "Hết tim, chưa hết quyết tâm!" : state.feedback.timeout ? "Hết thời gian" : "Chưa đúng — thử lại nhé!");
        text("correction", "Đáp án đúng: " + state.feedback.answer);
        text("explanation", state.feedback.explanation);
      }
      element("continue").hidden = state.state !== "feedback";
      element("result").hidden = state.state !== "gameover";
      text("final-score", `Điểm lượt này: ${state.finalScore ?? 0}`);
      text("personal-result", personalText());
      element("retry-submit").hidden = submissionState !== "failed";
      lastQuestion = question;
      lastState = state.state;
    }
    function snapshot() { return { enabled: true, submitAttempts, lastAttemptScore, submissionState }; }
    return { render, onTerminal, onRestart, snapshot, isModalOpen: () => !boardModal.hidden || !nameModal.hidden };
  };
})(window);

(function registerArcade(window) {
  "use strict";
  window.SoonLabGame.createArcade = function createArcade({ audio }) {
    const element = id => document.getElementById(id);
    const vocabulary = window.LOBSTER_GAME_CONFIG.learningVocabulary;
    const board = element("memory-board");
    const grid = element("quest-grid");
    let mode = "home";
    let cards = [];
    let opened = [];
    let moves = 0;
    let matched = 0;
    let mismatchTimer = null;
    let words = [];
    let letters = [];
    let selection = [];
    let anchor = null;
    let pointer = null;
    let dragging = false;
    let elapsed = 0;
    let ticking = false;
    let completed = false;
    let lastTick = performance.now();
    function shuffle(items) {
      const result = items.slice();
      for (let index = result.length - 1; index > 0; index--) {
        const other = Math.floor(Math.random() * (index + 1));
        [result[index], result[other]] = [result[other], result[index]];
      }
      return result;
    }
    function clock() {
      const seconds = Math.floor(elapsed / 1000);
      return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    }
    function stats() {
      element("mini-time").textContent = clock();
      element("mini-moves").textContent = String(moves);
      element("mini-progress").textContent = mode === "memory" ? `${matched}/8 cặp` : `${words.filter(word => word.found).length}/6 từ`;
    }
    function status(message) { element("mini-status").textContent = message; }
    function finish() {
      completed = true;
      ticking = false;
      stats();
      status(mode === "memory" ? `Hoàn thành! Bạn ghép đủ 8 cặp trong ${clock()}, với ${moves} lượt lật. Chơi lại để thử kỷ lục mới!` : `Kho báu đã mở! Bạn tìm đủ 6 từ trong ${clock()}. Tuyệt vời!`);
      element("mini-status").classList.add("complete");
    }
    function cancelSelection() {
      anchor = null;
      selection = [];
      pointer = null;
      dragging = false;
      paintQuest();
    }
    function reset() {
      clearTimeout(mismatchTimer);
      mismatchTimer = null;
      elapsed = 0;
      lastTick = performance.now();
      ticking = false;
      completed = false;
      moves = 0;
      matched = 0;
      opened = [];
      cancelSelection();
      element("mini-status").classList.remove("complete");
      if (mode === "memory") setupMemory();
      else setupQuest();
      stats();
    }
    function paintMemory() {
      cards.forEach((card, index) => {
        const button = board.children[index];
        const visible = card.matched || opened.includes(index);
        button.textContent = visible ? card.text : "?";
        button.className = "memory-card" + (visible ? " revealed" : "") + (card.matched ? " matched" : "");
        button.disabled = card.matched;
        button.setAttribute("aria-label", visible ? `${card.text}${card.matched ? ", đã ghép" : ""}` : `Thẻ úp ${index + 1}`);
        button.setAttribute("aria-pressed", String(visible));
      });
    }
    function flip(index) {
      if (mode !== "memory" || completed || mismatchTimer || opened.includes(index) || !cards[index] || cards[index].matched) return;
      ticking = true;
      opened.push(index);
      paintMemory();
      if (opened.length !== 2) return;
      moves++;
      const [first, second] = opened;
      if (cards[first].pair === cards[second].pair) {
        cards[first].matched = true;
        cards[second].matched = true;
        matched++;
        opened = [];
        paintMemory();
        status(`Chính xác! ${vocabulary[cards[first].pair].join(" = ")}`);
        if (matched === 8) finish();
      } else {
        status("Chưa khớp! Hãy ghi nhớ vị trí của hai thẻ.");
        mismatchTimer = setTimeout(() => {
          opened = [];
          mismatchTimer = null;
          paintMemory();
        }, 1000);
      }
      stats();
    }
    function setupMemory() {
      element("mini-kicker").textContent = "02 / RÈN LUYỆN TRÍ NHỚ";
      element("mini-title").textContent = "Memory Match";
      element("mini-instructions").textContent = "Lật hai thẻ để ghép từ tiếng Anh với nghĩa tiếng Việt. Mỗi hai thẻ tính một lượt lật.";
      element("mini-moves-wrap").hidden = false;
      board.hidden = false;
      element("quest-layout").hidden = true;
      cards = shuffle(shuffle(vocabulary.map((pair, pairIndex) => ({ pair, pairIndex }))).slice(0, 8)
        .flatMap(({ pair, pairIndex }) => pair.map(text => ({ text, pair: pairIndex, matched: false }))));
      board.replaceChildren();
      cards.forEach((card, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.addEventListener("click", () => flip(index));
        board.appendChild(button);
      });
      paintMemory();
      status("8 cặp từ · Đồng hồ bắt đầu khi bạn lật thẻ đầu tiên.");
    }
    function generateQuest() {
      const chosen = shuffle(vocabulary).slice(0, 6).map(([word, meaning]) => ({ word: word.toUpperCase(), meaning }));
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
      letters = Array(81).fill("");
      words = [];
      for (const entry of chosen.slice().sort((first, second) => second.word.length - first.word.length)) {
        let placed = false;
        for (let attempt = 0; attempt < 300 && !placed; attempt++) {
          const row = Math.floor(Math.random() * 9);
          const column = Math.floor(Math.random() * 9);
          const [rowStep, columnStep] = directions[Math.floor(Math.random() * directions.length)];
          const endRow = row + rowStep * (entry.word.length - 1);
          const endColumn = column + columnStep * (entry.word.length - 1);
          if (endRow < 0 || endRow > 8 || endColumn < 0 || endColumn > 8) continue;
          const cells = Array.from(entry.word, (_, index) => (row + rowStep * index) * 9 + column + columnStep * index);
          if (cells.some((cell, index) => letters[cell] && letters[cell] !== entry.word[index])) continue;
          cells.forEach((cell, index) => { letters[cell] = entry.word[index]; });
          words.push({ ...entry, cells, found: false });
          placed = true;
        }
        if (!placed) break;
      }
      if (words.length !== 6) {
        letters = Array(81).fill("");
        const rows = shuffle(Array.from({ length: 9 }, (_, index) => index));
        words = chosen.map((entry, index) => {
          const start = Math.floor(Math.random() * (10 - entry.word.length));
          let cells = Array.from(entry.word, (_, offset) => rows[index] * 9 + start + offset);
          if (Math.random() < .5) cells.reverse();
          cells.forEach((cell, offset) => { letters[cell] = entry.word[offset]; });
          return { ...entry, cells, found: false };
        });
      }
      letters = letters.map(letter => letter || "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)]);
    }
    function setupQuest() {
      element("mini-kicker").textContent = "03 / KHO BÁU TỪ VỰNG";
      element("mini-title").textContent = "Word Quest";
      element("mini-instructions").textContent = "Kéo từ chữ đầu đến chữ cuối theo hàng ngang, dọc hoặc chéo (cả hai chiều). Bạn cũng có thể chạm hai đầu từ.";
      element("mini-moves-wrap").hidden = true;
      board.hidden = true;
      element("quest-layout").hidden = false;
      generateQuest();
      grid.replaceChildren();
      letters.forEach((letter, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = letter;
        button.dataset.cell = String(index);
        button.setAttribute("aria-label", `${letter}, hàng ${Math.floor(index / 9) + 1}, cột ${index % 9 + 1}`);
        button.addEventListener("click", event => { if (event.detail === 0) pickEndpoint(index); });
        button.addEventListener("keydown", event => {
          const shifts = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -9, ArrowDown: 9 };
          if (shifts[event.key] !== undefined) {
            event.preventDefault();
            grid.children[Math.max(0, Math.min(80, index + shifts[event.key]))].focus();
          }
        });
        grid.appendChild(button);
      });
      element("quest-words").replaceChildren();
      words.forEach(word => {
        const item = document.createElement("li");
        const label = document.createElement("strong");
        label.textContent = word.word;
        const meaning = document.createElement("span");
        meaning.textContent = word.meaning;
        item.append(label, meaning);
        element("quest-words").appendChild(item);
      });
      paintQuest();
      status("Từ vựng nhiều chủ đề · Tìm đủ 6 từ để mở kho báu!");
    }
    function line(first, last) {
      const rowDelta = Math.floor(last / 9) - Math.floor(first / 9);
      const columnDelta = last % 9 - first % 9;
      if (rowDelta && columnDelta && Math.abs(rowDelta) !== Math.abs(columnDelta)) return [];
      return Array.from({ length: Math.max(Math.abs(rowDelta), Math.abs(columnDelta)) + 1 }, (_, index) => first + index * (Math.sign(rowDelta) * 9 + Math.sign(columnDelta)));
    }
    function paintQuest() {
      Array.from(grid.children).forEach((button, index) => {
        const found = words.find(word => word.found && word.cells.includes(index));
        button.classList.toggle("found", Boolean(found));
        button.classList.toggle("selecting", selection.includes(index));
        button.setAttribute("aria-pressed", String(selection.includes(index) || Boolean(found)));
      });
      Array.from(element("quest-words").children).forEach((item, index) => {
        item.classList.toggle("found", words[index]?.found === true);
      });
    }
    function submitSelection() {
      const text = selection.map(index => letters[index]).join("");
      const reverse = text.split("").reverse().join("");
      const word = words.find(entry => !entry.found && (entry.word === text || entry.word === reverse));
      if (word) {
        word.found = true;
        word.cells = selection.slice();
        status(`Đã tìm thấy ${word.word} — ${word.meaning}!`);
        if (words.every(entry => entry.found)) finish();
      } else status("Chưa đúng từ cần tìm. Chọn một đường thẳng ngang, dọc hoặc chéo nhé!");
      anchor = null;
      selection = [];
      paintQuest();
      stats();
    }
    function pickEndpoint(index) {
      if (mode !== "quest" || completed) return;
      ticking = true;
      if (anchor === null) { anchor = index; selection = [index]; paintQuest(); }
      else { selection = line(anchor, index); submitSelection(); }
    }
    function cellAt(event) {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const cell = target?.closest("[data-cell]");
      return cell && grid.contains(cell) ? Number(cell.dataset.cell) : null;
    }
    grid.addEventListener("pointerdown", event => {
      if (mode !== "quest" || completed || pointer !== null || event.button !== 0) return;
      const index = cellAt(event);
      if (index === null) return;
      event.preventDefault();
      ticking = true;
      pointer = event.pointerId;
      dragging = anchor !== null;
      if (anchor === null) anchor = index;
      selection = line(anchor, index);
      grid.setPointerCapture(pointer);
      grid.children[index].focus({ preventScroll: true });
      paintQuest();
    });
    grid.addEventListener("pointermove", event => {
      if (pointer !== event.pointerId) return;
      const index = cellAt(event);
      if (index === null) { selection = []; paintQuest(); return; }
      if (index !== anchor) dragging = true;
      selection = line(anchor, index);
      paintQuest();
    });
    grid.addEventListener("pointerup", event => {
      if (pointer !== event.pointerId) return;
      const index = cellAt(event);
      if (grid.hasPointerCapture(pointer)) grid.releasePointerCapture(pointer);
      pointer = null;
      if (index === null) { cancelSelection(); return; }
      selection = line(anchor, index);
      if (dragging || index !== anchor) submitSelection();
      else status("Đã chọn chữ đầu. Chạm chữ cuối hoặc kéo để chọn từ.");
      dragging = false;
    });
    grid.addEventListener("pointercancel", cancelSelection);
    window.addEventListener("blur", cancelSelection);
    document.addEventListener("visibilitychange", () => { lastTick = performance.now(); cancelSelection(); });
    function resize() {
      const root = element("game-root");
      const width = root.clientWidth || window.innerWidth;
      const height = root.clientHeight || window.innerHeight;
      const tall = width < height;
      const logicalWidth = tall ? 420 : 1060;
      const logicalHeight = mode === "home" ? (tall ? 790 : 760) : (tall ? 950 : 890);
      const fit = SoonLabCanvas.computePresentationFit({ logicalWidth, logicalHeight, availableWidth: width, availableHeight: height });
      element("arcade-stage").classList.toggle("arcade-tall", tall);
      Object.assign(element("arcade-stage").style, { width: logicalWidth + "px", height: logicalHeight + "px", left: fit.left + "px", top: fit.top + "px", transform: `scale(${fit.scale})` });
    }
    function show(next, focus = true) {
      if (!["home", "runner", "memory", "quest"].includes(next)) return;
      if (mode === "memory") {
        clearTimeout(mismatchTimer);
        mismatchTimer = null;
        opened = [];
      }
      cancelSelection();
      mode = next;
      audio.setMode(mode);
      element("stage").hidden = mode !== "runner";
      element("arcade-shell").hidden = mode === "runner";
      element("home-screen").hidden = mode !== "home";
      element("mini-screen").hidden = !["memory", "quest"].includes(mode);
      element("arcade-home").hidden = mode === "home";
      if (mode === "memory" || mode === "quest") reset();
      resize();
      lastTick = performance.now();
      if (focus) {
        if (mode === "runner") element("runner-home").focus();
        else if (mode === "home") element("choose-memory").focus();
        else element("mini-title").focus();
      }
    }
    ["runner", "memory", "quest"].forEach(name => element("choose-" + name).addEventListener("click", () => show(name)));
    element("arcade-home").addEventListener("click", () => show("home"));
    element("runner-home").addEventListener("click", () => show("home"));
    element("mini-restart").addEventListener("click", reset);
    window.addEventListener("resize", resize);
    if (window.ResizeObserver) new ResizeObserver(resize).observe(element("game-root"));
    setInterval(() => {
      const now = performance.now();
      if (ticking && !completed && !document.hidden && ["memory", "quest"].includes(mode)) elapsed += now - lastTick;
      lastTick = now;
      if (mode === "memory" || mode === "quest") stats();
    }, 100);
    resize();
    return {
      isRunner: () => mode === "runner", show,
      setRunnerReady() { element("choose-runner").disabled = false; element("runner-loading").textContent = "Vào đường chạy →"; },
      snapshot() { return { mode, completed, moves, matched, elapsed, cards: cards.map(card => ({ ...card })), opened: opened.slice(), words: words.map(word => ({ ...word, cells: word.cells.slice() })), letters: letters.slice() }; },
      simulate(input) {
        if (input.mode) show(input.mode, false);
        if (input.action === "flip") flip(input.index);
        if (input.action === "select" && mode === "quest" && !completed && Number.isInteger(input.first) && Number.isInteger(input.last) && input.first >= 0 && input.first < 81 && input.last >= 0 && input.last < 81) {
          ticking = true;
          selection = line(input.first, input.last);
          submitSelection();
        }
        if (input.action === "restart" && ["memory", "quest"].includes(mode)) reset();
      }
    };
  };
})(window);
