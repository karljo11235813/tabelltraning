// Bråktrappan: kartan, exempelkortet, frågorna, kapiteltesten och återkopplingen.
// Logiken som går att testa utan webbläsare ligger i categories/, check.js, chapter-test.js och progress.js.
import { CATEGORIES, PARTS, getCategory, generateQuestion, exampleQuestion } from "./categories/index.js";
import { check, tipFor } from "./check.js";
import { createProgress, STORAGE_KEY, STREAK_TO_MASTER } from "./progress.js";
import { ALLOWED_MISTAKES, FINAL_TEST, STEP_IDS, TESTS, createChapterTest, getTest, questionCount, usesFormRule } from "./chapter-test.js";
import { renderQuestion, renderSolution, renderExample, firstField, nextFocus } from "./render.js";
import { createStore } from "../sant-falskt/storage.js";

const NEXT_GUARD_MS = 250; // ett nedhållet Enter ska inte hoppa förbi återkopplingen
const SCREENS = ["btMap", "btExample", "btQuestion", "btDone"];
const ICONS = { mastered: "✓", current: "▶", open: "○" };
const STATUS_LABELS = { mastered: "klar", current: "föreslaget nästa steg", open: "inte klar än" };
const FORM_RULE = "Enklaste form: förkortat så långt det går, i blandad form om talet är större än 1, och som heltal om det blir ett heltal.";

const $ = (id) => document.getElementById(id);
const store = createStore(() => window.localStorage);
const progress = createProgress(store.get(STORAGE_KEY), STEP_IDS);

// I ett kapiteltest är test och quiz satta, och category och question följer quiz.
let run = null; // { category, question, controls, locked, lockedAt, done, next, test, quiz, failed, review }

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function showScreen(id) {
  for (const screen of SCREENS) $(screen).hidden = screen !== id;
  window.scrollTo(0, 0);
}

function save() {
  store.set(STORAGE_KEY, progress.toStored());
}

const stepNumber = (category) => CATEGORIES.indexOf(category) + 1;
const stepById = (id) => getCategory(id) ?? getTest(id);
const openStep = (id) => (getTest(id) ? openTest(id) : openCategory(id));

// ---------- KARTAN ----------

// Ett steg eller ett kapiteltest på kartan. Testen har inget nummer.
function stairButton(step, number) {
  const status = progress.statusOf(step.id);
  const button = el("button", `bt-stair is-${status}${number === "" ? " is-test" : ""}`);
  button.type = "button";
  button.setAttribute("aria-label", `${number === "" ? "" : `${number}. `}${step.title} (${STATUS_LABELS[status]})`);
  button.append(
    el("span", "bt-stair-icon", ICONS[status]),
    el("span", "bt-stair-number", String(number)),
    el("span", "bt-stair-title", step.title),
  );
  button.addEventListener("click", () => openStep(step.id));
  return button;
}

function renderMap() {
  run = null;
  $("btCount").textContent = `${progress.masteredCount()} av ${STEP_IDS.length} klara`;
  $("btAllDone").hidden = !progress.allMastered();
  $("btResetConfirm").hidden = true;
  const host = $("btParts");
  host.textContent = "";
  for (const { part, title } of PARTS) {
    const section = el("section", "bt-part");
    section.append(el("h2", "bt-part-title", `Del ${part} — ${title}`));
    const list = el("div", "bt-stairs");
    for (const category of CATEGORIES.filter((c) => c.part === part)) list.append(stairButton(category, stepNumber(category)));
    const test = TESTS.find((t) => t.part === part);
    list.append(stairButton(test, ""));
    section.append(list);
    host.append(section);
  }
  const finalSection = el("section", "bt-part");
  finalSection.append(el("h2", "bt-part-title", "Sluttest"), stairButton(FINAL_TEST, ""));
  host.append(finalSection);
  showScreen("btMap");
}

// ---------- EXEMPEL ----------

function openCategory(id) {
  if (!progress.start(id)) return;
  run = { category: getCategory(id), question: null, controls: {}, locked: false, lockedAt: 0, done: false, next: null };
  showExample();
}

function showExample() {
  const { category } = run;
  const review = progress.active().review;
  $("btExampleOf").textContent = `Steg ${stepNumber(category)} av ${CATEGORIES.length}${review ? " · repetition" : ""}`;
  $("btExampleTitle").textContent = category.title;
  $("btExampleIntro").textContent = category.intro;
  $("btFormRule").textContent = FORM_RULE;
  $("btFormRule").hidden = !category.formRule;
  $("btExampleLabel").hidden = false;
  $("btExampleBody").hidden = false;
  $("btExampleBody").replaceChildren(renderExample(exampleQuestion(category)));
  $("btReady").textContent = run.question ? "Tillbaka till uppgiften" : "Jag är redo";
  showScreen("btExample");
  $("btReady").focus();
}

// ---------- KAPITELTEST ----------

function openTest(id) {
  const test = getTest(id);
  run = { test, quiz: null, category: null, question: null, controls: {}, locked: false, lockedAt: 0, done: false, next: null, failed: false, review: false };
  $("btExampleOf").textContent = progress.statusOf(id) === "mastered" ? `${test.kind} · repetition` : test.kind;
  $("btExampleTitle").textContent = test.title;
  $("btExampleIntro").textContent = `Testet har ${questionCount(test)} frågor från ${test.source}, i slumpad ordning. Du får göra ett fel. Vid det andra felet börjar testet om med nya frågor. Efter ett fel ser du lösningen, men du kan inte titta på exemplen under testet. Testet ska göras klart på en gång.`;
  $("btFormRule").textContent = FORM_RULE;
  $("btFormRule").hidden = !usesFormRule(test);
  $("btExampleLabel").hidden = true;
  $("btExampleBody").hidden = true;
  $("btReady").textContent = "Starta testet";
  showScreen("btExample");
  $("btReady").focus();
}

function startTest() {
  run.quiz = createChapterTest(run.test, Math.random);
  run.failed = false;
  run.done = false;
  showTestQuestion();
}

function showTestQuestion() {
  ({ category: run.category, question: run.question } = run.quiz.current());
  showQuestion();
}

function renderTestStatus() {
  const { quiz } = run;
  const status = `Fråga ${quiz.number()} av ${quiz.total} · Tillåtna fel kvar: ${Math.max(0, ALLOWED_MISTAKES - quiz.mistakes())}`;
  $("btDots").setAttribute("aria-label", status);
  $("btDots").replaceChildren(el("span", "bt-test-status", status));
}

function answerTest(result, right) {
  const outcome = run.quiz.answer(right);
  run.failed = outcome.failed;
  run.done = outcome.passed;
  if (outcome.passed) {
    run.review = progress.statusOf(run.test.id) === "mastered";
    run.next = progress.complete(run.test.id);
    save();
  }
  renderTestStatus();
  const firstMistake = !right && !outcome.failed && !outcome.passed;
  showFeedback(result, right, {
    verdict: outcome.failed ? "Det var ditt andra fel." : right ? "Rätt!" : "Inte riktigt.",
    note: outcome.failed ? "Testet börjar om med nya frågor." : firstMistake ? "Det var ditt tillåtna fel. Ett fel till så börjar testet om." : "",
    next: outcome.failed ? "Börja om testet" : outcome.passed ? "Vidare →" : "Nästa →",
  });
}

// ---------- FRÅGA ----------

function renderDots(streak) {
  const dots = $("btDots");
  dots.textContent = "";
  dots.setAttribute("aria-label", `${streak} av ${STREAK_TO_MASTER} rätt i rad`);
  for (let i = 0; i < STREAK_TO_MASTER; i++) dots.append(el("span", `bt-dot${i < streak ? " is-on" : ""}`));
}

function nextQuestion() {
  run.question = generateQuestion(run.category, Math.random, progress.level(), run.question);
  showQuestion();
}

function showQuestion() {
  const { category, question } = run;
  run.locked = false;
  $("btQuestionTitle").textContent = run.quiz ? run.test.title : `Steg ${stepNumber(category)}: ${category.title}`;
  $("btPrompt").textContent = question.prompt;
  if (run.quiz) renderTestStatus();
  else renderDots(progress.active().streak);
  const { el: rows, controls } = renderQuestion(question);
  run.controls = controls;
  $("btRowsHost").replaceChildren(rows);
  $("btAnswer").inert = false;
  $("btCard").classList.remove("is-right", "is-wrong");
  $("btFeedback").hidden = true;
  $("btShowExample").hidden = Boolean(run.quiz);
  showScreen("btQuestion");
  focusField(firstField(Object.values(controls)));
}

// Tillbaka från exemplet: frågan står kvar med det eleven redan skrivit.
function resumeQuestion() {
  showScreen("btQuestion");
  const fields = Object.values(run.controls).flatMap((c) => c.inputs).filter((i) => i.tagName === "INPUT");
  focusField(fields.find((i) => i.value.trim() === "") ?? fields[0] ?? null);
}

function shake() {
  const form = $("btAnswer");
  form.classList.remove("bt-shake");
  void form.offsetWidth; // startar om animationen
  form.classList.add("bt-shake");
}

function submitAnswer() {
  if (!run || !run.question || run.locked || $("btQuestion").hidden) return;
  const answers = Object.fromEntries(Object.entries(run.controls).map(([id, c]) => [id, c.read()]));
  const result = check(run.question, answers, run.category.mistakes);
  for (const c of Object.values(run.controls)) c.setWrong(false);
  if (result.status === "invalid") {
    // Tomt eller oläsligt räknas inte: sviten är orörd.
    shake();
    const first = run.controls[result.invalidBoxes[0]];
    focusField(first.inputs.find((i) => i.tagName === "INPUT" && i.value.trim() === "") ?? firstField([first]));
    return;
  }
  const right = result.status === "ok";
  run.locked = true;
  run.lockedAt = performance.now();
  $("btAnswer").inert = true;
  $("btShowExample").hidden = true;
  if (run.quiz) {
    answerTest(result, right);
    return;
  }
  const outcome = progress.answer(right);
  run.done = outcome.done;
  run.next = outcome.next;
  if (outcome.done) save();
  renderDots(outcome.streak);
  showFeedback(result, right, {
    verdict: right ? (outcome.done ? `Rätt! ${STREAK_TO_MASTER} i rad!` : "Rätt!") : "Inte riktigt.",
    next: outcome.done ? "Vidare →" : right ? "Nästa →" : "Ny uppgift →",
  });
}

function showFeedback(result, right, { verdict, next, note = "" }) {
  $("btCard").classList.add(right ? "is-right" : "is-wrong");
  const verdictBox = $("btVerdict");
  verdictBox.className = `bt-verdict ${right ? "is-right" : "is-wrong"}`;
  verdictBox.textContent = verdict;
  for (const id of result.wrongBoxes) run.controls[id].setWrong(true);
  const tip = right ? "" : (tipFor(run.question, result, run.category.mistakes) ?? "");
  $("btTip").textContent = [note, tip].filter(Boolean).join(" ");
  const solution = $("btSolution");
  solution.textContent = "";
  if (!right) solution.append(el("h3", "bt-solution-title", "Så här kan du tänka"), renderSolution(run.question));
  $("btNext").textContent = next;
  $("btFeedback").hidden = false;
  $("btNext").focus();
}

function goNext() {
  if (!run || !run.locked || performance.now() - run.lockedAt < NEXT_GUARD_MS) return;
  if (run.done) showDone();
  else if (run.failed) startTest();
  else if (run.quiz) {
    run.quiz.next();
    showTestQuestion();
  } else nextQuestion();
}

// Utan textfält (en bild att färga) släpps fokus, så att Enter skickar in svaret via dokumentet.
function focusField(field) {
  if (field) field.focus();
  else document.activeElement?.blur();
}

// ---------- KLART ----------

function showDone() {
  const { category, quiz, test } = run;
  const review = quiz ? run.review : progress.active().review;
  const next = run.next ? stepById(run.next) : null;
  const suggestion = next ? ` Förslag på nästa steg: ${next.title}.` : "";
  let title;
  let message;
  const score = quiz ? `${quiz.right()} av ${quiz.total} rätt.` : "";
  if (review) {
    title = "Bra repetition!";
    message = quiz ? `Du klarade ${test.title} igen: ${score}${suggestion}` : `Du klarade ${category.title} ${STREAK_TO_MASTER} gånger i rad igen.${suggestion}`;
  } else if (!next) {
    title = "Du har klarat Bråktrappan!";
    message = `${score ? `${score} ` : ""}Alla steg och test är klara. Du kan repetera vilket du vill från kartan.`;
  } else if (quiz) {
    title = "Du klarade testet!";
    message = `${score} ${test.title} är klart.${suggestion}`;
  } else {
    title = "Klart!";
    message = `Du har klarat ${category.title}.${suggestion}`;
  }
  $("btDoneTitle").textContent = title;
  $("btDoneText").textContent = message;
  const showNext = next !== null;
  $("btDoneNext").hidden = !showNext;
  $("btDoneNext").dataset.id = showNext ? next.id : "";
  showScreen("btDone");
  (showNext ? $("btDoneNext") : $("btDoneMap")).focus();
}

// ---------- HÄNDELSER ----------

$("btAnswer").addEventListener("submit", (event) => {
  event.preventDefault();
  submitAnswer();
});
$("btAnswer").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.repeat) return;
  // Enter på det tecken som redan är valt svarar; på ett annat tecken väljer det (som ett klick).
  if (event.target.classList.contains("bt-symbol-btn") && event.target.getAttribute("aria-pressed") === "true") {
    event.preventDefault();
    submitAnswer();
    return;
  }
  if (event.target.tagName !== "INPUT") return;
  const target = nextFocus(Object.values(run.controls), event.target);
  if (target) {
    event.preventDefault();
    target.focus();
  }
});
$("btNext").addEventListener("click", goNext);
$("btReady").addEventListener("click", () => (run.test ? startTest() : run.question ? resumeQuestion() : nextQuestion()));
$("btShowExample").addEventListener("click", showExample);
for (const back of document.querySelectorAll("[data-back]")) back.addEventListener("click", renderMap);
$("btDoneNext").addEventListener("click", () => openStep($("btDoneNext").dataset.id));
$("btDoneMap").addEventListener("click", renderMap);
$("btReset").addEventListener("click", () => {
  $("btResetConfirm").hidden = false;
  $("btResetNo").focus();
});
$("btResetNo").addEventListener("click", () => {
  $("btResetConfirm").hidden = true;
});
$("btResetYes").addEventListener("click", () => {
  progress.reset();
  save();
  renderMap();
});

// Ett nedhållet Enter (autorepeat) får aldrig klicka på en knapp eller skicka in formuläret.
document.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "Enter" && event.repeat) event.preventDefault();
  },
  true,
);

// Enter när inget fält har fokus, t.ex. efter att ha färgat en bild.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.repeat || event.target !== document.body) return;
  if (!run || $("btQuestion").hidden) return;
  event.preventDefault();
  if (run.locked) goNext();
  else submitAnswer();
});

renderMap();
