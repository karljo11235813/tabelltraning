// Decimaltal: the page. Three screens: the start (mode, categories, progress), a
// round (Öva without time, or the test against the clock) and the test's result.
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

const PRACTICE_KEY = 'decimaltal.practiceCategories';
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
const feedback = $('feedback');
const actionBtn = $('actionBtn');
const resultBody = $('dtResultBody');

let mode = 'practice'; // 'practice' or 'test'
let selected = new Set(CATEGORY_IDS);
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

function savedPractice() {
  const saved = store.get(PRACTICE_KEY);
  const known = Array.isArray(saved) ? saved.filter((id) => CATEGORY_IDS.includes(id)) : [];
  return new Set(known.length ? known : CATEGORY_IDS);
}

function renderCategories() {
  const all = CATEGORY_IDS.every((id) => selected.has(id));
  const button = (id, name, pressed) =>
    `<button type="button" data-cat="${id}" aria-pressed="${pressed}" class="${pressed ? 'active' : ''}">${name}</button>`;
  categoryRow.innerHTML = button('all', 'Alla', all)
    + CATEGORIES.map((c) => button(c.id, c.name, selected.has(c.id))).join('');
  startBtn.disabled = selected.size === 0;
  $('dtCatsNote').hidden = !(mode === 'test' && !all);
}

function setMode(next) {
  mode = next;
  document.querySelectorAll('.dt-mode').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  // The test starts from all categories every time; Öva from the last choice.
  selected = mode === 'test' ? new Set(CATEGORY_IDS) : savedPractice();
  renderCategories();
}

function showStart(nextMode = mode) {
  stopClock();
  const runs = shownRuns(loadRuns(store));
  $('dtTestName').textContent = testName(TEST_SECONDS);
  $('dtTestCard').textContent = testCardText(runs, S);
  setMode(nextMode);
  show(startScreen);
  const panel = $('dtStartProgress');
  panel.hidden = false;
  renderProgress(panel, runs, S, PROGRESS_OPTIONS);
}

document.querySelector('.dt-modes').addEventListener('click', (e) => {
  const btn = e.target.closest('.dt-mode');
  if (btn) setMode(btn.dataset.mode);
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
  if (selected.size === 0) return;
  const categories = CATEGORY_IDS.filter((id) => selected.has(id));
  if (mode === 'practice') startPractice(categories);
  else startTest(categories);
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
  // button below stays hidden until a choice is made.
  const isChoice = problem.answerType === 'choice';
  answerInput.hidden = isChoice;
  choiceAnswers.hidden = !isChoice;
  choiceButtons.forEach((b) => {
    b.disabled = false;
    b.classList.remove('chosen-right', 'chosen-wrong');
  });
  actionBtn.textContent = mode === 'practice' ? 'Kontrollera' : 'Svara';
  actionBtn.style.visibility = isChoice ? 'hidden' : '';
  if (isChoice) {
    // Nothing keeps the focus, so an extra Enter can't skip this question.
    if (document.activeElement) document.activeElement.blur();
  } else {
    answerInput.focus();
  }
}

// The button and Enter both answer and, in Öva once the answer is shown, go on.
function submit(raw, button = null) {
  if (mode === 'practice' && awaitingNext) {
    round.next();
    renderQuestion();
    return;
  }
  const result = round.answer(raw);
  if (result === null) return;
  if (mode === 'practice') showPracticeResult(result.correct, button);
  else nextTestQuestion(result.correct);
}

choiceAnswers.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-answer]');
  if (btn && !(mode === 'practice' && awaitingNext)) submit(btn.dataset.answer, btn);
});

actionBtn.addEventListener('click', () => submit(answerInput.value));

answerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.repeat) {
    e.preventDefault();
    submit(answerInput.value);
  }
});

quitBtn.addEventListener('click', () => showStart());

// ---- Öva ----

function startPractice(categories) {
  mode = 'practice';
  store.set(PRACTICE_KEY, categories);
  quitBtn.textContent = 'Avsluta';
  timer.hidden = true;
  startRound(categories);
}

function showPracticeResult(isCorrect, button) {
  updateScore();
  problemBox.classList.remove('flash-correct', 'flash-wrong');
  void problemBox.offsetWidth;
  if (button) {
    choiceButtons.forEach((b) => { b.disabled = true; });
    button.classList.add(isCorrect ? 'chosen-right' : 'chosen-wrong');
  }
  if (isCorrect) {
    problemBox.classList.add('flash-correct');
    feedback.textContent = 'Rätt!';
    feedback.className = 'feedback correct';
  } else {
    problemBox.classList.add('flash-wrong');
    renderMath(feedback, feedbackHtml(round.current().problem));
    feedback.className = 'feedback wrong';
    feedback.querySelectorAll('.fb-step').forEach(fitToWidth);
  }
  awaitingNext = true;
  actionBtn.textContent = 'Nästa';
  actionBtn.style.visibility = '';
  if (button) actionBtn.focus(); // so Enter goes on to the next question
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
  else if (e.target.closest('#dtBack')) showStart('test');
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

showStart('practice');
