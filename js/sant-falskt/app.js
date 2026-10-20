// Sant/falskt-sidan: skärmar, knappar, timer och sparade val.
// All logik som kan testas utan webbläsare ligger i session.js, results.js m.fl.
import { STATEMENTS, CHAPTERS } from "./bank/index.js";
import { ANSWER_LABELS } from "./bank/topics.js";
import { MODES } from "./modes.js";
import { createSession } from "./session.js";
import { renderInto } from "./render.js";
import { summarize } from "./results.js";
import { formatClock, formatScore, attemptLabel, scoreTiles } from "./format.js";
import { createStore, recordKey, readRecord, updateRecord } from "./storage.js";

const FLASH_MS = 600;
const LONG_TEXT_CHARS = 140;
const CHAPTERS_KEY = "sant_falskt_chapters";
const KEY_TO_ANSWER = { s: "sant", 1: "sant", b: "beror", 2: "beror", f: "falskt", 3: "falskt" };
const SCREENS = ["sfStart", "sfRun", "sfResult"];

const $ = (id) => document.getElementById(id);
const store = createStore(() => window.localStorage);
const byId = new Map(STATEMENTS.map((s) => [s.id, s]));
const COUNTS = {};
for (const s of STATEMENTS) COUNTS[s.chapter] = (COUNTS[s.chapter] || 0) + 1;
const AVAILABLE = Object.keys(CHAPTERS).map(Number).filter((id) => COUNTS[id] > 0);

let selectedChapters = initialChapters();
let run = null; // pågående omgång: { mode, chapters, session, current, locked, finished, endAt, tick, flashTimer }

function initialChapters() {
  const saved = store.get(CHAPTERS_KEY);
  if (Array.isArray(saved)) {
    const valid = saved.filter((id) => AVAILABLE.includes(id));
    if (valid.length > 0) return valid;
  }
  return AVAILABLE.slice();
}

const isTimed = (mode) => mode.timeLimitSec != null;
const poolFor = (chapters) => STATEMENTS.filter((s) => chapters.includes(s.chapter));
const answerButtons = () => document.querySelectorAll(".sf-answer");

function showScreen(id) {
  for (const screen of SCREENS) $(screen).hidden = screen !== id;
  window.scrollTo(0, 0);
}

// ---------- START ----------

function renderStart(focusChapter = null) {
  const chips = $("sfChapters");
  chips.textContent = "";
  for (const [key, chapter] of Object.entries(CHAPTERS)) {
    const id = Number(key);
    const count = COUNTS[id] || 0;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "sf-chip";
    chip.dataset.chapter = String(id);
    chip.textContent = `${chapter.name} (${count})`;
    chip.disabled = count === 0;
    chip.setAttribute("aria-pressed", String(selectedChapters.includes(id)));
    chip.addEventListener("click", () => toggleChapter(id));
    chips.appendChild(chip);
  }
  if (focusChapter !== null) chips.querySelector(`[data-chapter="${focusChapter}"]`)?.focus();

  const empty = poolFor(selectedChapters).length === 0;
  const modes = $("sfModes");
  modes.textContent = "";
  for (const mode of MODES) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "landing-card";
    card.disabled = empty;
    const title = document.createElement("span");
    title.className = "landing-card-title";
    title.textContent = mode.name;
    const desc = document.createElement("span");
    desc.className = "landing-card-desc";
    desc.textContent = mode.description;
    card.append(title, desc);
    if (mode.trackRecord) {
      const record = readRecord(store, recordKey(mode.id, selectedChapters));
      if (record !== null) {
        const badge = document.createElement("span");
        badge.className = "sf-record-badge";
        badge.textContent = `Rekord: ${formatScore(record)}`;
        card.appendChild(badge);
      }
    }
    card.addEventListener("click", () => startRun(mode, selectedChapters));
    modes.appendChild(card);
  }
  $("sfStartHint").textContent = empty ? "Välj minst ett kapitel med påståenden." : "";
}

function toggleChapter(id) {
  selectedChapters = selectedChapters.includes(id)
    ? selectedChapters.filter((c) => c !== id)
    : [...selectedChapters, id].sort((a, b) => a - b);
  store.set(CHAPTERS_KEY, selectedChapters);
  renderStart(id);
}

// ---------- OMGÅNG ----------

function startRun(mode, chapters) {
  stopTimers();
  run = {
    mode,
    chapters: chapters.slice(),
    session: createSession({ statements: poolFor(chapters), mode }),
    current: null,
    locked: false,
    finished: false,
    endAt: null,
    tick: null,
    flashTimer: null,
  };
  $("sfQuit").hidden = isTimed(mode);
  $("sfTimerTrack").hidden = !isTimed(mode);
  $("sfTimer").classList.toggle("sf-progress", !isTimed(mode));
  if (isTimed(mode)) {
    // Kvarvarande tid räknas från en fast sluttid, så en strypt timer i en bakgrundsflik inte förlänger provet.
    run.endAt = performance.now() + mode.timeLimitSec * 1000;
    run.tick = setInterval(updateTimer, 200);
  }
  showScreen("sfRun");
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
  $("sfTimer").textContent = formatClock(left);
  $("sfTimerBar").style.width = `${(left / (run.mode.timeLimitSec * 1000)) * 100}%`;
  if (left <= 0) finishRun();
}

function updateTop() {
  const state = run.session.state();
  if (isTimed(run.mode)) updateTimer();
  else $("sfTimer").textContent = `${state.roundPos} / ${state.roundSize}`;
  // Poäng, rätt och fel syns hela tiden så att läraren kan se dem på avstånd.
  const tiles = scoreTiles(state);
  $("sfLiveScore").textContent = tiles.score;
  $("sfLiveCorrect").textContent = tiles.correct;
  $("sfLiveWrong").textContent = tiles.wrong;
}

function plainLength(html) {
  return html.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").length;
}

function showNext() {
  const statement = run.session.next();
  if (!statement) {
    finishRun();
    return;
  }
  run.current = statement;
  run.locked = false;
  $("sfMeta").textContent = CHAPTERS[statement.chapter].name + (statement.star ? " · ★" : "");
  const el = $("sfStatement");
  el.classList.toggle("sf-long", plainLength(statement.text) > LONG_TEXT_CHARS);
  renderInto(el, statement.text);
  for (const button of answerButtons()) {
    button.disabled = false;
    button.classList.remove("sf-chosen-right", "sf-chosen-wrong", "sf-correct");
  }
  $("sfExplain").hidden = true;
  updateTop();
}

function choose(answer) {
  if (!run || run.finished || run.locked) return;
  const result = run.session.answer(answer);
  if (!result) return;
  run.locked = true;
  for (const button of answerButtons()) {
    button.disabled = true;
    if (button.dataset.answer === answer) button.classList.add(result.correct ? "sf-chosen-right" : "sf-chosen-wrong");
    else if (button.dataset.answer === result.correctAnswer) button.classList.add("sf-correct");
  }
  updateTop();

  if (run.mode.feedback === "flash") {
    const thisRun = run;
    run.flashTimer = setTimeout(() => {
      thisRun.flashTimer = null;
      if (run === thisRun && !run.finished) showNext();
    }, FLASH_MS);
    return;
  }

  const verdict = $("sfVerdict");
  verdict.textContent = result.correct ? "Rätt!" : `Inte riktigt – rätt svar är ${ANSWER_LABELS[result.correctAnswer]}.`;
  verdict.className = `sf-explain-verdict ${result.correct ? "is-right" : "is-wrong"}`;
  renderInto($("sfExplainText"), run.current.explanation);
  $("sfExplain").hidden = false;
  $("sfNext").focus();
}

// Både Nästa-knappen och Enter går hit; vakten gör att ett Enter som också
// klickar på knappen inte hoppar över ett påstående.
function goNext() {
  if (!run || run.finished || !run.locked || run.mode.feedback !== "explain") return;
  showNext();
}

// ---------- RESULTAT ----------

function finishRun() {
  if (!run || run.finished) return;
  run.finished = true;
  stopTimers();
  const state = run.session.state();
  const pending = isTimed(run.mode) ? run.session.pending() : null;
  const isNew = run.mode.trackRecord
    ? updateRecord(store, recordKey(run.mode.id, run.chapters), state.score).isNew
    : false;
  renderResult(state, pending, isNew);
  showScreen("sfResult");
  $("sfAgain").focus();
}

function renderResult(state, pending, isNew) {
  $("sfResultTitle").textContent = isTimed(run.mode) ? "Tiden är ute!" : "Bra jobbat!";
  $("sfStatScore").textContent = formatScore(state.score);
  $("sfStatCorrect").textContent = String(state.correct);
  $("sfStatWrong").textContent = String(state.wrong);
  $("sfRecord").hidden = !isNew;

  const { wrong, correct, unanswered } = summarize(state.history, byId, pending);
  const list = $("sfResultList");
  list.textContent = "";
  if (wrong.length + correct.length + unanswered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "sf-empty";
    empty.textContent = "Du svarade inte på några påståenden den här gången.";
    list.appendChild(empty);
    return;
  }
  const label = (answer) => ANSWER_LABELS[answer];
  for (const item of wrong) {
    list.appendChild(resultRow(item, "wrong", `Du: ${label(item.choice)} · Rätt: ${label(item.statement.answer)}`));
  }
  for (const item of correct) {
    const line = [label(item.statement.answer), attemptLabel(item.correctOnAttempt)].filter(Boolean).join(" · ");
    list.appendChild(resultRow(item, "correct", line));
  }
  for (const item of unanswered) {
    list.appendChild(resultRow(item, "unanswered", `Hann inte · Rätt: ${label(item.statement.answer)}`));
  }
}

function resultRow(item, kind, answerLine) {
  const row = document.createElement("details");
  row.className = `sf-row sf-row-${kind}`;
  row.open = kind === "wrong";
  const summary = document.createElement("summary");
  const icon = document.createElement("span");
  icon.className = "sf-row-icon";
  icon.textContent = { wrong: "✗", correct: "✓", unanswered: "–" }[kind];
  const text = document.createElement("span");
  text.className = "sf-row-text";
  renderInto(text, item.statement.text);
  const answer = document.createElement("span");
  answer.className = "sf-row-answer";
  answer.textContent = answerLine;
  summary.append(icon, text, answer);
  const explanation = document.createElement("div");
  explanation.className = "sf-row-explain";
  renderInto(explanation, item.statement.explanation);
  row.append(summary, explanation);
  return row;
}

// ---------- HÄNDELSER ----------

for (const button of answerButtons()) button.addEventListener("click", () => choose(button.dataset.answer));
$("sfNext").addEventListener("click", goNext);
$("sfQuit").addEventListener("click", finishRun);
$("sfAgain").addEventListener("click", () => startRun(run.mode, run.chapters));
$("sfChangeMode").addEventListener("click", () => {
  stopTimers();
  run = null;
  renderStart();
  showScreen("sfStart");
});

document.addEventListener("keydown", (event) => {
  if (!run || run.finished || $("sfRun").hidden) return;
  if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
  const answer = KEY_TO_ANSWER[event.key.toLowerCase()];
  if (answer) {
    event.preventDefault();
    choose(answer);
    return;
  }
  if (event.key === "Enter" && run.locked) {
    // Andra knappar (t.ex. Avsluta) sköter sitt eget Enter.
    if (event.target !== document.body && event.target !== $("sfNext")) return;
    event.preventDefault();
    goNext();
  }
});

renderStart();
showScreen("sfStart");
