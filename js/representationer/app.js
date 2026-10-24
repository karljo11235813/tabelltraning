// Bråk, decimal & procent: skärmar, inmatning, timer och rekord.
// Logiken som kan testas utan webbläsare ligger i generator.js, check.js, session.js m.fl.
import { MODES } from "./modes.js";
import { createSession } from "./session.js";
import { createGenerator } from "./generator.js";
import { renderPicture } from "./pictures.js";
import { cardPicture } from "./models.js";
import { formatDecimal, formatPercent } from "./rational.js";
import { fractionWords } from "./words.js";
import { correctAnswerText, givenAnswerText, hintFor } from "./feedback.js";
import { formatClock, formatScore, scoreTiles } from "../sant-falskt/format.js";
import { createStore, readRecord, updateRecord } from "../sant-falskt/storage.js";

const FLASH_RIGHT_MS = 600;
const FLASH_WRONG_MS = 1500;
const NEXT_GUARD_MS = 250; // ett nedhållet Enter ska inte hoppa över feedbacken
const AGAIN_GUARD_MS = 1000; // ett Enter precis vid 0:00 ska inte starta en ny sprint förbi resultatet
const RECORD_KEY = "representationer.sprintRecord";
const SCREENS = ["rpStart", "rpRun", "rpResult"];
const TARGET_LABELS = { brak: "Bråk", decimal: "Decimal", procent: "Procent", bild: "Bild" };

const $ = (id) => document.getElementById(id);
const store = createStore(() => window.localStorage);

let run = null; // { mode, session, question, inputs, picture, locked, lockedAt, finished, endAt, tick, flashTimer, ellipsisShown }

const isTimed = (mode) => mode.timeLimitSec != null;

function showScreen(id) {
  for (const screen of SCREENS) $(screen).hidden = screen !== id;
  window.scrollTo(0, 0);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function stackedFraction(num, den) {
  const frac = el("span", "rp-frac");
  frac.setAttribute("aria-label", `${num}/${den}`);
  frac.append(el("span", "rp-frac-num", String(num)), el("span", "rp-frac-den", String(den)));
  return frac;
}

// ---------- START ----------

function renderStart() {
  const modes = $("rpModes");
  modes.textContent = "";
  for (const mode of MODES) {
    const card = el("button", "landing-card");
    card.type = "button";
    card.append(el("span", "landing-card-title", mode.name), el("span", "landing-card-desc", mode.description));
    if (mode.trackRecord) {
      const record = readRecord(store, RECORD_KEY);
      if (record !== null) card.append(el("span", "rp-record-badge", `Rekord: ${formatScore(record)}`));
    }
    card.addEventListener("click", () => startRun(mode));
    modes.appendChild(card);
  }
}

// ---------- OMGÅNG ----------

function startRun(mode) {
  stopTimers();
  run = {
    mode,
    session: createSession({ mode, generator: createGenerator(Math.random) }),
    question: null,
    inputs: {},
    picture: null,
    locked: false,
    lockedAt: 0,
    finished: false,
    endAt: null,
    tick: null,
    flashTimer: null,
    ellipsisShown: false,
  };
  $("rpQuit").hidden = isTimed(mode);
  $("rpRestart").hidden = !isTimed(mode);
  $("rpTimer").hidden = !isTimed(mode);
  $("rpTimerTrack").hidden = !isTimed(mode);
  if (isTimed(mode)) {
    // Kvarvarande tid räknas från en fast sluttid, så en strypt timer i en bakgrundsflik inte förlänger provet.
    run.endAt = performance.now() + mode.timeLimitSec * 1000;
    run.tick = setInterval(updateTimer, 200);
  }
  showScreen("rpRun");
  showNext();
}

function stopTimers() {
  if (!run) return;
  clearInterval(run.tick);
  clearTimeout(run.flashTimer);
  run.tick = null;
  run.flashTimer = null;
}

function updateTimer() {
  if (!run || run.finished || run.endAt === null) return;
  const left = Math.max(0, run.endAt - performance.now());
  $("rpTimer").textContent = formatClock(left);
  $("rpTimerBar").style.width = `${(left / (run.mode.timeLimitSec * 1000)) * 100}%`;
  if (left <= 0) finishRun();
}

function updateTop() {
  if (isTimed(run.mode)) updateTimer();
  const tiles = scoreTiles(run.session.state());
  $("rpLiveScore").textContent = tiles.score;
  $("rpLiveCorrect").textContent = tiles.correct;
  $("rpLiveWrong").textContent = tiles.wrong;
}

function showNext() {
  clearTimeout(run.flashTimer);
  run.flashTimer = null;
  const question = run.session.next();
  if (!question) {
    finishRun();
    return;
  }
  run.question = question;
  run.locked = false;
  $("rpCard").classList.remove("is-right", "is-wrong");
  renderSource(question);
  // Förklaringen av "…" visas första gången ett sådant tal dyker upp.
  const showNote = question.hasEllipsis && !run.ellipsisShown;
  $("rpEllipsisNote").hidden = !showNote;
  if (showNote) run.ellipsisShown = true;
  $("rpPrompt").textContent = question.prompt;
  renderAnswer(question);
  $("rpFlashAnswer").hidden = true;
  $("rpFeedback").hidden = true;
  updateTop();
  (run.inputs.num ?? run.inputs.text ?? $("rpSubmit")).focus();
}

function renderSource(question) {
  const box = $("rpSource");
  box.textContent = "";
  box.className = `rp-source rp-source-${question.source.kind}`;
  const { source } = question;
  if (source.kind === "brak") box.append(stackedFraction(source.num, source.den));
  else if (source.kind === "bild") box.append(renderPicture(source.picture, { shaded: source.picture.shaded }).el);
  else box.textContent = source.text;
}

function numberInput(label, inputMode) {
  const input = document.createElement("input");
  input.type = "text";
  input.inputMode = inputMode;
  input.autocomplete = "off";
  input.spellcheck = false;
  input.setAttribute("aria-label", label);
  return input;
}

function renderAnswer(question) {
  const form = $("rpAnswer");
  form.textContent = "";
  form.inert = false;
  run.inputs = {};
  run.picture = null;
  const kind = question.target.kind;
  if (kind === "brak") {
    run.inputs.num = numberInput("Täljare", "numeric");
    run.inputs.den = numberInput("Nämnare", "numeric");
    const box = el("div", "rp-frac-input");
    box.append(run.inputs.num, el("div", "rp-frac-line"), run.inputs.den);
    form.append(box);
  } else if (kind === "bild") {
    const picture = renderPicture(question.target.picture, { interactive: true });
    run.picture = picture;
    const clear = el("button", "rp-clear", "Rensa");
    clear.type = "button";
    clear.addEventListener("click", () => picture.clear());
    form.append(picture.el, clear);
  } else {
    run.inputs.text = numberInput(kind === "procent" ? "Svar i procent" : "Svar i decimalform", "decimal");
    const row = el("div", "rp-num-input");
    row.append(run.inputs.text);
    if (kind === "procent") row.append(el("span", "rp-unit", "%"));
    form.append(row);
  }
  const submit = el("button", "start-btn", "Svara");
  submit.type = "submit";
  submit.id = "rpSubmit";
  form.append(submit);
}

function collectAnswer(question) {
  if (question.target.kind === "brak") return { num: run.inputs.num.value, den: run.inputs.den.value };
  if (question.target.kind === "bild") return { shaded: run.picture.count() };
  return { text: run.inputs.text.value };
}

function shake() {
  const form = $("rpAnswer");
  form.classList.remove("rp-shake");
  void form.offsetWidth; // startar om animationen
  form.classList.add("rp-shake");
}

function submitAnswer() {
  if (!run || run.finished || run.locked) return;
  const question = run.question;
  // Enter i täljaren hoppar till nämnaren om den är tom.
  if (
    question.target.kind === "brak" &&
    document.activeElement === run.inputs.num &&
    run.inputs.num.value.trim() !== "" &&
    run.inputs.den.value.trim() === ""
  ) {
    run.inputs.den.focus();
    return;
  }
  const answer = collectAnswer(question);
  const result = run.session.answer(answer);
  if (!result) return;
  if (!result.scored) {
    shake();
    return;
  }
  run.locked = true;
  run.lockedAt = performance.now();
  $("rpAnswer").inert = true;
  $("rpCard").classList.add(result.correct ? "is-right" : "is-wrong");
  updateTop();

  if (run.mode.feedback === "flash") {
    if (!result.correct) {
      $("rpFlashAnswer").textContent = `Rätt svar: ${correctAnswerText(question)}`;
      $("rpFlashAnswer").hidden = false;
    }
    const thisRun = run;
    run.flashTimer = setTimeout(() => {
      thisRun.flashTimer = null;
      if (run === thisRun && !run.finished) showNext();
    }, result.correct ? FLASH_RIGHT_MS : FLASH_WRONG_MS);
    return;
  }
  showFeedback(question, answer, result);
}

function showFeedback(question, answer, result) {
  const verdict = $("rpVerdict");
  verdict.textContent = "";
  verdict.className = `rp-verdict ${result.correct ? "is-right" : "is-wrong"}`;
  verdict.append(el("div", "rp-verdict-title", result.correct ? "Rätt!" : "Inte riktigt."));
  if (!result.correct) {
    verdict.append(el("div", "rp-verdict-line", `Ditt svar: ${givenAnswerText(question, answer)} · Rätt: ${correctAnswerText(question)}`));
  }
  $("rpHint").textContent = hintFor(question, result) ?? "";
  renderTranslation(question);
  $("rpFeedback").hidden = false;
  $("rpNext").focus();
}

// Värdet i alla fem former sida vid sida.
function renderTranslation(question) {
  const v = question.value;
  const picture = cardPicture(v, question.source.picture ?? question.target.picture ?? null);
  const cells = [
    ["Bråk", stackedFraction(v.num, v.den)],
    ["Decimal", formatDecimal(v)],
    ["Procent", formatPercent(v)],
    ["Ord", fractionWords(v.num, v.den)],
    ["Bild", renderPicture(picture, { shaded: picture.shaded }).el],
  ];
  const box = $("rpTranslation");
  box.textContent = "";
  for (const [label, content] of cells) {
    const value = el("div", `rp-tr-value${label === "Ord" ? " is-words" : ""}`);
    if (typeof content === "string") value.textContent = content;
    else value.append(content);
    const cell = el("div", "rp-tr-cell");
    cell.append(el("div", "rp-tr-label", label), value);
    box.appendChild(cell);
  }
}

function goNext() {
  if (!run || run.finished || !run.locked || run.mode.feedback !== "card") return;
  if (performance.now() - run.lockedAt < NEXT_GUARD_MS) return;
  showNext();
}

// ---------- RESULTAT ----------

function finishRun() {
  if (!run || run.finished) return;
  run.finished = true;
  run.finishedAt = performance.now();
  stopTimers();
  const state = run.session.state();
  const isNew = run.mode.trackRecord ? updateRecord(store, RECORD_KEY, state.score).isNew : false;
  $("rpResultTitle").textContent = isTimed(run.mode) ? "Tiden är ute!" : "Bra jobbat!";
  $("rpStatScore").textContent = formatScore(state.score);
  $("rpStatCorrect").textContent = String(state.correct);
  $("rpStatWrong").textContent = String(state.wrong);
  $("rpRecord").hidden = !isNew;

  const breakdown = $("rpBreakdown");
  breakdown.textContent = "";
  const targets = Object.keys(TARGET_LABELS).filter((t) => state.byTarget[t]);
  if (targets.length === 0) breakdown.append(el("p", "rp-empty", "Du svarade inte på några frågor den här gången."));
  for (const t of targets) {
    const { correct, total } = state.byTarget[t];
    breakdown.append(el("span", "rp-breakdown-item", `${TARGET_LABELS[t]} ${correct}/${total}`));
  }
  showScreen("rpResult");
  $("rpAgain").focus();
}

// ---------- HÄNDELSER ----------

$("rpAnswer").addEventListener("submit", (event) => {
  event.preventDefault();
  submitAnswer();
});
$("rpNext").addEventListener("click", goNext);
$("rpQuit").addEventListener("click", finishRun);
// Startar en ny sprint direkt. Den avbrutna räknas inte: inget rekord, ingen resultatskärm.
$("rpRestart").addEventListener("click", () => startRun(run.mode));
$("rpAgain").addEventListener("click", () => {
  if (performance.now() - run.finishedAt < AGAIN_GUARD_MS) return;
  startRun(run.mode);
});
$("rpChangeMode").addEventListener("click", () => {
  stopTimers();
  run = null;
  renderStart();
  showScreen("rpStart");
});

// Ett nedhållet Enter (autorepeat) får aldrig klicka på en knapp eller skicka in formuläret.
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Enter" && event.repeat) event.preventDefault();
  },
  true,
);

// Enter när inget fält eller ingen knapp har fokus (t.ex. efter att ha färgat en bild).
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  if (!run || run.finished || $("rpRun").hidden || event.key !== "Enter") return;
  if (event.target !== document.body) return;
  event.preventDefault();
  if (run.locked) goNext();
  else submitAnswer();
});

renderStart();
showScreen("rpStart");
