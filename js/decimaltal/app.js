// Decimaltal: the page. Three screens: the start (mode, Öva's categories, progress),
// a round (Öva without time, or the test against the clock) and the test's result.
// Everything that can be tested without a browser lives in the other modules of
// this folder.

import { createStore } from '../sant-falskt/storage.js';
import { renderProgress } from '../progress-panel.js';
import { CATEGORIES, CATEGORY_IDS } from './categories.js';
import { feedbackHtml } from './feedback.js';
import { loadRuns, makeRun, saveRun, shouldSave, shownRuns } from './history.js';
import { levelLabel, missedCategories, resultHtml, testCardText } from './result.js';
import { createRound } from './round.js';
import { TEST_SECONDS } from './settings.js';
import { S, testName } from './texts.js';

const FLASH_MS = 350; // how long a test answer colours the box
const RESULT_GUARD_MS = 600; // a click or Enter just as the time ran out must not skip the result
const store = createStore(() => window.localStorage);

const PROGRESS_OPTIONS = {
  score: (run) => run.correct - run.wrong,
  levels: [], // the levels are two limits each, so no single line on a points chart matches them
  columns: [
    { head: S.statPoints, cell: (run) => String(run.correct - run.wrong) },
    { head: 'Nivå', cell: (run) => levelLabel(run, S) },
  ],
};

const $ = (id) => document.getElementById(id);
const startScreen = $('dtStart');
const playScreen = $('dtPlay');
const resultScreen = $('dtResult');
const practicePanel = $('dtPractice');
const categoryRow = $('dtCategories');
const startBtn = $('dtStartBtn');
const scoreLine = $('scoreLine');
const timer = $('dtTimer');
const quitBtn = $('dtQuit');
const problemBox = $('problemBox');
const problemLabel = $('problemLabel');
const problemText = $('problemText');
const answerInput = $('answerInput');
const choiceAnswers = $('choiceAnswers');
const choiceButtons = choiceAnswers.querySelectorAll('button');
const multiAnswers = $('multiAnswers');
const feedback = $('feedback');
const actionBtn = $('actionBtn');
const skipBtn = $('skipBtn');
const resultBody = $('dtResultBody');

let mode = 'test'; // 'practice' or 'test'
let selected = new Set(CATEGORY_IDS); // Öva's categories
let round = null;
let roundCategories = [];
let awaitingNext = false;
let timerId = null;
let flashId = null;
let endsAt = 0;
let resultShownAt = 0;

// Puts HTML into an element and renders its \( … \) math with KaTeX.
// Without KaTeX (e.g. offline) the raw LaTeX shows, but the page works.
function renderMath(element, html) {
  element.innerHTML = html;
  if (typeof window.renderMathInElement === 'function') {
    window.renderMathInElement(element, {
      delimiters: [{ left: '\\(', right: '\\)', display: false }],
      throwOnError: false,
    });
  }
}

// The CSS keeps the question on one line, so one that is wider than its box
// (long ones on a phone) gets a smaller font instead. KaTeX sizes in em, so the
// width scales with the font size.
function fitToWidth(element) {
  element.style.fontSize = '';
  const room = element.clientWidth;
  const needed = element.scrollWidth;
  if (needed <= room) return;
  const size = parseFloat(getComputedStyle(element).fontSize);
  element.style.fontSize = Math.floor(size * room / needed) + 'px';
}

function show(screen) {
  for (const s of [startScreen, playScreen, resultScreen]) s.hidden = s !== screen;
}

// ---- Start screen ----

function renderCategories() {
  const all = CATEGORY_IDS.every((id) => selected.has(id));
  const button = (id, name, pressed) =>
    `<button type="button" data-cat="${id}" aria-pressed="${pressed}" class="${pressed ? 'active' : ''}">${name}</button>`;
  categoryRow.innerHTML = button('all', 'Alla', all)
    + CATEGORIES.map((c) => button(c.id, c.name, selected.has(c.id))).join('');
  startBtn.disabled = mode === 'practice' && selected.size === 0;
}

// The cards choose the mode and Starta starts it. The test is chosen from the
// start and always has all categories, so most students just press Starta. The
// categories are only shown under Öva, all of them chosen unless a round of Öva
// just ended (categories is then that round's).
function setMode(next, categories = CATEGORY_IDS) {
  mode = next;
  document.querySelectorAll('.dt-mode').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  practicePanel.hidden = mode !== 'practice';
  selected = new Set(categories);
  renderCategories();
}

function showStart(nextMode = 'test', categories = CATEGORY_IDS) {
  stopClock();
  const runs = shownRuns(loadRuns(store));
  $('dtTestName').textContent = testName(TEST_SECONDS);
  $('dtTestCard').textContent = testCardText(runs, S);
  setMode(nextMode, categories);
  show(startScreen);
  const panel = $('dtStartProgress');
  panel.hidden = false;
  renderProgress(panel, runs, S, PROGRESS_OPTIONS);
}

document.querySelector('.dt-modes').addEventListener('click', (e) => {
  const btn = e.target.closest('.dt-mode');
  if (btn && btn.dataset.mode !== mode) setMode(btn.dataset.mode);
});

categoryRow.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-cat]');
  if (!btn) return;
  const id = btn.dataset.cat;
  if (id === 'all') {
    const all = CATEGORY_IDS.every((c) => selected.has(c));
    selected = new Set(all ? [] : CATEGORY_IDS);
  } else if (selected.has(id)) {
    selected.delete(id);
  } else {
    selected.add(id);
  }
  renderCategories();
});

startBtn.addEventListener('click', () => {
  if (mode === 'test') startTest(CATEGORY_IDS);
  else if (selected.size > 0) startPractice(CATEGORY_IDS.filter((id) => selected.has(id)));
});

// ---- A round ----

function startRound(categories) {
  roundCategories = categories;
  round = createRound({ categories, rng: Math.random });
  show(playScreen);
  renderQuestion();
}

function updateScore() {
  const { correct, wrong } = round.tally();
  scoreLine.innerHTML = mode === 'practice'
    ? `Rätt: <b>${correct}</b> av <b>${correct + wrong}</b>`
    : `Rätt <b>${correct}</b> · Fel <b>${wrong}</b>`;
}

function renderQuestion() {
  const problem = round.current().problem;
  renderMath(problemLabel, problem.label || '');
  problemLabel.style.display = problem.label ? 'block' : 'none';
  // A word problem is all in the sentence above, with no expression line.
  renderMath(problemText, problem.tex ? '\\(' + problem.tex + '\\)' : '');
  problemText.style.display = problem.tex ? '' : 'none';
  fitToWidth(problemText);
  answerInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
  problemBox.classList.remove('flash-correct', 'flash-wrong');
  awaitingNext = false;
  updateScore();

  // Större eller mindre? is answered with the two buttons instead of the box, so the
  // button below stays hidden until a choice is made. Samma svar? has a button per
  // calculation to pick, and the button below sends the picks.
  const type = problem.answerType;
  answerInput.hidden = type !== 'decimal';
  choiceAnswers.hidden = type !== 'choice';
  multiAnswers.hidden = type !== 'multi';
  choiceButtons.forEach((b) => {
    b.disabled = false;
    b.classList.remove('chosen-right', 'chosen-wrong');
  });
  if (type === 'multi') {
    renderMath(multiAnswers, problem.options.map((o) =>
      `<button type="button" data-option="${o.id}" aria-pressed="false"><span class="multi-letter">${o.id}</span> \\(${o.tex}\\)</button>`).join(''));
  }
  actionBtn.textContent = mode === 'practice' ? 'Kontrollera' : 'Svara';
  actionBtn.hidden = type === 'choice';
  skipBtn.hidden = false;
  if (type === 'decimal') {
    answerInput.focus();
  } else if (document.activeElement) {
    // Nothing keeps the focus, so an extra Enter can't skip this question.
    document.activeElement.blur();
  }
}

// What the student has given: the box's text, or the picked letters in order.
function givenAnswer() {
  if (round.current().problem.answerType !== 'multi') return answerInput.value;
  return [...multiAnswers.querySelectorAll('button[aria-pressed="true"]')].map((b) => b.dataset.option).join('');
}

// The button and Enter both answer and, in Öva once the answer is shown, go on.
function submit(raw, button = null) {
  if (mode === 'practice' && awaitingNext) {
    round.next();
    renderQuestion();
    return;
  }
  const result = round.answer(raw);
  if (result === null) {
    if (raw === '' && round.current().problem.answerType === 'multi') feedback.textContent = 'Välj ett eller flera svar.';
    return;
  }
  if (mode === 'practice') showPracticeResult(result.correct, button, raw);
  else nextTestQuestion(result.correct);
}

choiceAnswers.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-answer]');
  if (btn && !(mode === 'practice' && awaitingNext)) submit(btn.dataset.answer, btn);
});

multiAnswers.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-option]');
  if (!btn || btn.disabled) return;
  btn.setAttribute('aria-pressed', String(btn.getAttribute('aria-pressed') !== 'true'));
  feedback.textContent = '';
});

actionBtn.addEventListener('click', () => submit(givenAnswer()));

// Hoppa över is a wrong answer: a point off in the test, the help in Öva. The second
// click of a double click must not skip the next question too.
skipBtn.addEventListener('click', (e) => {
  if (e.detail > 1 || (mode === 'practice' && awaitingNext)) return;
  if (round.skip() === null) return;
  if (mode === 'practice') showPracticeResult(false, null, '', true);
  else nextTestQuestion(false);
});

answerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.repeat) {
    e.preventDefault();
    submit(answerInput.value);
  }
});

// Leaving a round comes back to its mode, and Öva to the categories it had.
quitBtn.addEventListener('click', () => showStart(mode, roundCategories));

// ---- Öva ----

function startPractice(categories) {
  mode = 'practice';
  quitBtn.textContent = 'Avsluta';
  timer.hidden = true;
  startRound(categories);
}

// skipped: Hoppa över, shown as a wrong answer with nothing picked.
function showPracticeResult(isCorrect, button, given, skipped = false) {
  updateScore();
  problemBox.classList.remove('flash-correct', 'flash-wrong');
  void problemBox.offsetWidth;
  const { answerType, answer } = round.current().problem;
  if (answerType === 'choice') choiceButtons.forEach((b) => { b.disabled = true; });
  if (button) button.classList.add(isCorrect ? 'chosen-right' : 'chosen-wrong');
  // Samma svar?: every calculation shows whether it was right, also one not picked.
  if (answerType === 'multi') {
    multiAnswers.querySelectorAll('button[data-option]').forEach((b) => {
      const picked = !skipped && b.getAttribute('aria-pressed') === 'true', right = answer.includes(b.dataset.option);
      if (skipped) b.setAttribute('aria-pressed', 'false');
      b.disabled = true;
      if (picked) b.classList.add(right ? 'chosen-right' : 'chosen-wrong');
      else if (right) b.classList.add('missed-right');
    });
  }
  if (isCorrect) {
    problemBox.classList.add('flash-correct');
    feedback.textContent = 'Rätt!';
    feedback.className = 'feedback correct';
  } else {
    problemBox.classList.add('flash-wrong');
    renderMath(feedback, feedbackHtml(round.current().problem, given, { skipped }));
    feedback.className = 'feedback wrong';
    feedback.querySelectorAll('.fb-step').forEach(fitToWidth);
  }
  awaitingNext = true;
  actionBtn.textContent = 'Nästa';
  actionBtn.hidden = false;
  skipBtn.hidden = true;
  if (button || skipped) actionBtn.focus(); // so Enter goes on to the next question
}

// ---- Test ----

function startTest(categories) {
  mode = 'test';
  quitBtn.textContent = 'Avbryt';
  timer.hidden = false;
  startRound(categories);
  endsAt = performance.now() + TEST_SECONDS * 1000;
  tick();
  timerId = setInterval(tick, 250);
}

function stopClock() {
  clearInterval(timerId);
  clearTimeout(flashId);
  timerId = null;
}

function tick() {
  const left = Math.max(0, endsAt - performance.now());
  const seconds = Math.ceil(left / 1000);
  timer.textContent = Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
  timer.classList.toggle('is-ending', seconds <= 10);
  if (left === 0) finishTest();
}

// A test answer only colours the box: the next question comes at once.
function nextTestQuestion(isCorrect) {
  round.next();
  renderQuestion();
  clearTimeout(flashId);
  problemBox.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
  flashId = setTimeout(() => problemBox.classList.remove('flash-correct', 'flash-wrong'), FLASH_MS);
}

function finishTest() {
  stopClock();
  round.finish(); // the open question is dropped, and nothing more is recorded
  const tally = round.tally();
  const run = { categories: roundCategories, seconds: TEST_SECONDS, tally };
  const saved = shouldSave(run) ? saveRun(store, makeRun({ ts: Date.now(), seconds: TEST_SECONDS, tally })) : null;
  if (document.activeElement) document.activeElement.blur();
  show(resultScreen);
  resultShownAt = performance.now();
  renderMath(resultBody, resultHtml({ ...run, missed: round.missed(), saved }, S));
  const panel = $('dtResultProgress');
  panel.hidden = false;
  renderProgress(panel, shownRuns(loadRuns(store)), S, PROGRESS_OPTIONS);
  window.scrollTo(0, 0);
}

// ---- Result ----

const guarded = () => performance.now() - resultShownAt < RESULT_GUARD_MS;

resultScreen.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.repeat) e.preventDefault();
});

resultScreen.addEventListener('click', (e) => {
  if (guarded()) return;
  if (e.target.closest('.dt-practice-missed')) startPractice(missedCategories(round.tally()));
  else if (e.target.closest('#dtAgain')) startTest(roundCategories);
  else if (e.target.closest('#dtBack')) showStart();
});

// The steps in Visa dina fel can only be measured once the list is open.
resultBody.addEventListener('toggle', (e) => {
  if (e.target.open) e.target.querySelectorAll('.fb-step, .dt-missed-tex').forEach(fitToWidth);
}, true);

// The room changes when the phone turns, and the width when KaTeX's fonts
// arrive after the first problem is drawn.
function fitLines() {
  fitToWidth(problemText);
  document.querySelectorAll('.fb-step, .dt-missed-tex').forEach(fitToWidth);
}
window.addEventListener('resize', fitLines);
document.fonts.addEventListener('loadingdone', fitLines);

showStart();
