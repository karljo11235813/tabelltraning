import { randInt, shuffled } from './utils.js';
import { getLang, setLang, t } from './i18n.js';
import * as Audio from './audio.js';
import { MASTERY_MIN_ATTEMPTS, factKey, getMastery } from './mastery.js';
import { getFactStats, logAttempt, clearFactStats } from './stats-store.js';
import { BUILD_STEPS_META, BUILD_FOCUS_LEN, BUILD_MIX_LEN, SQUARE_NUMBERS, buildStepsUpTo } from './build-data.js';

const ROUND_SECONDS = 60;
const COUNT_TARGET = 100;
const MAX_TABLE = 12;
const ACCEPTABLE_THRESHOLD = 2; // seconds/question — green cutoff & ladder marker
const BG_WORST_AT = 8; // seconds/question — fully orange beyond this
const WRONG_PENALTY_SECONDS = 5; // added per wrong answer before ranking (not shown in raw speed stat)

const landingScreen = document.getElementById('landingScreen');
const testSetupScreen = document.getElementById('testSetupScreen');
const setupScreen = document.getElementById('setupScreen');
const testScreen = document.getElementById('testScreen');
const resultScreen = document.getElementById('resultScreen');

const headerTitle = document.getElementById('headerTitle');
const langToggle = document.getElementById('langToggle');
const soundToggle = document.getElementById('soundToggle');

const chooseTestBtn = document.getElementById('chooseTestBtn');
const choosePracticeBtn = document.getElementById('choosePracticeBtn');
const chooseBuildBtn = document.getElementById('chooseBuildBtn');
const chooseStatsBtn = document.getElementById('chooseStatsBtn');
const backFromTest = document.getElementById('backFromTest');
const backFromPractice = document.getElementById('backFromPractice');

const buildOverviewScreen = document.getElementById('buildOverviewScreen');
const buildStepIntroScreen = document.getElementById('buildStepIntroScreen');
const buildCompleteScreen = document.getElementById('buildCompleteScreen');
const buildLadder = document.getElementById('buildLadder');
const backFromBuildOverview = document.getElementById('backFromBuildOverview');
const backFromBuildIntro = document.getElementById('backFromBuildIntro');
const backFromBuildComplete = document.getElementById('backFromBuildComplete');
const buildStepTitle = document.getElementById('buildStepTitle');
const buildStrategyText = document.getElementById('buildStrategyText');
const buildStrategyExample = document.getElementById('buildStrategyExample');
const buildStartBtn = document.getElementById('buildStartBtn');
const buildDoneCaption = document.getElementById('buildDoneCaption');
const buildNextBtn = document.getElementById('buildNextBtn');

const statsScreen = document.getElementById('statsScreen');
const backFromStats = document.getElementById('backFromStats');
const statsEmpty = document.getElementById('statsEmpty');
const statsContent = document.getElementById('statsContent');
const statsTabWeak = document.getElementById('statsTabWeak');
const statsTabGrid = document.getElementById('statsTabGrid');
const statsWeakView = document.getElementById('statsWeakView');
const statsGridView = document.getElementById('statsGridView');
const statsResetBtn = document.getElementById('statsResetBtn');

const testModeButtons = document.querySelectorAll('#testModeChoice button');
const testStartBtn = document.getElementById('testStartBtn');
const testStartHint = document.getElementById('testStartHint');

const tableGrid = document.getElementById('tableGrid');
const modeButtons = document.querySelectorAll('#modeChoice button');
const modeSub = document.getElementById('modeSub');
const opButtons = document.querySelectorAll('#opChoice button');
const startBtn = document.getElementById('startBtn');
const startHint = document.getElementById('startHint');
const selectAllBtn = document.getElementById('selectAll');
const selectNoneBtn = document.getElementById('selectNone');

const timerDisplay = document.getElementById('timerDisplay');
const timerBar = document.getElementById('timerBar');
const liveScoreLabel = document.getElementById('liveScoreLabel');
const problemBox = document.getElementById('problemBox');
const problemText = document.getElementById('problemText');
const answerInput = document.getElementById('answerInput');
const nextBtn = document.getElementById('nextBtn');
const preview1 = document.getElementById('preview1');

const resultTitle = document.getElementById('resultTitle');
const statCorrect = document.getElementById('statCorrect');
const statWrong = document.getElementById('statWrong');
const statSpeed = document.getElementById('statSpeed');
const penaltyNote = document.getElementById('penaltyNote');
const rankLadder = document.getElementById('rankLadder');
const againBtn = document.getElementById('againBtn');

let mode = 'time';
let operation = 'mul';
let selectedTables = new Set();
let originScreen = 'practice'; // which setup screen to return to on "again"

// ---------- Bygg upp state ----------
let buildStepIndex = 0;
let buildPhase = 'focus'; // 'focus' | 'mix'
let buildPhaseLen = 0;
let buildSquaresQueue = []; // shuffled, no-repeat draw order for the squares step's focus phase
let buildCompleted = new Set();
try {
  const savedProgress = JSON.parse(localStorage.getItem('tabelltraning_build_progress') || '[]');
  buildCompleted = new Set(savedProgress);
} catch (e) { /* localStorage unavailable — fall back to empty progress */ }

function saveBuildProgress() {
  try {
    localStorage.setItem('tabelltraning_build_progress', JSON.stringify(Array.from(buildCompleted)));
  } catch (e) { /* ignore */ }
}

// ---------- Round state ----------
let queue = [];
let correctCount = 0;
let wrongCount = 0;
let secondsLeft = ROUND_SECONDS;
let roundStartTime = 0;
let lastElapsedSeconds = 0;
let hasResult = false;
let timerId = null;
let running = false;

function updateSoundToggleUI() {
  const on = Audio.isSoundOn();
  soundToggle.setAttribute('aria-pressed', on ? 'true' : 'false');
  soundToggle.setAttribute('aria-label', on ? t().soundOnAria : t().soundOffAria);
}

soundToggle.addEventListener('click', () => {
  Audio.setSoundOn(!Audio.isSoundOn());
  updateSoundToggleUI();
});

// ---------- Screen navigation ----------
function showScreen(el) {
  [landingScreen, testSetupScreen, setupScreen, buildOverviewScreen,
   buildStepIntroScreen, buildCompleteScreen, statsScreen, testScreen, resultScreen].forEach(s => {
    s.style.display = 'none';
  });
  el.style.display = el === testScreen ? 'flex' : 'block';
}

chooseTestBtn.addEventListener('click', () => {
  if (mode === 'build') mode = 'time';
  syncModeUI();
  showScreen(testSetupScreen);
});
choosePracticeBtn.addEventListener('click', () => {
  if (mode === 'build') mode = 'time';
  syncModeUI();
  showScreen(setupScreen);
});
chooseBuildBtn.addEventListener('click', () => {
  renderBuildOverview();
  showScreen(buildOverviewScreen);
});
chooseStatsBtn.addEventListener('click', () => {
  renderStatsScreen();
  showScreen(statsScreen);
});
backFromStats.addEventListener('click', goHome);
function goHome() {
  clearInterval(timerId);
  running = false;
  document.body.style.backgroundColor = '';
  Audio.stopMusic();
  showScreen(landingScreen);
}

backFromTest.addEventListener('click', goHome);
backFromPractice.addEventListener('click', goHome);
backFromBuildOverview.addEventListener('click', goHome);
backFromBuildIntro.addEventListener('click', () => {
  renderBuildOverview();
  showScreen(buildOverviewScreen);
});
backFromBuildComplete.addEventListener('click', () => {
  renderBuildOverview();
  showScreen(buildOverviewScreen);
});
headerTitle.addEventListener('click', goHome);

// ---------- Mode / operation / tables helpers ----------
function syncModeUI() {
  const s = t();
  [modeButtons, testModeButtons].forEach(group => {
    group.forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
  });
  modeSub.textContent = mode === 'time' ? s.modeSubTime : s.modeSubCount;
  startBtn.textContent = mode === 'time' ? s.startTime : s.startCount;
  startHint.textContent = mode === 'time' ? s.hintTime : s.hintCount;
  testStartBtn.textContent = mode === 'time' ? s.startTime : s.startCount;
  testStartHint.textContent = mode === 'time' ? s.hintTime : s.hintCount;
}

function setOperation(op) {
  operation = op;
  opButtons.forEach(b => b.classList.toggle('active', b.dataset.op === op));
}

function setAllTablesSelected() {
  tableGrid.querySelectorAll('input').forEach(cb => {
    cb.checked = true;
    cb.closest('label').classList.add('checked');
  });
  selectedTables = new Set(Array.from({ length: MAX_TABLE }, (_, i) => i + 1));
  updateStartButton();
}

// ---------- Language ----------
function renderLiveLabel() {
  if (mode === 'time') {
    liveScoreLabel.innerHTML = t().liveCorrect + '<b id="liveScore">' + correctCount + '</b>';
  } else if (mode === 'count') {
    const totalAnswered = correctCount + wrongCount;
    liveScoreLabel.innerHTML = t().liveQuestion + '<b id="liveScore">' + totalAnswered + '</b> / ' + COUNT_TARGET;
  } else {
    const totalAnswered = correctCount + wrongCount;
    liveScoreLabel.innerHTML = t().liveQuestion + '<b id="liveScore">' + totalAnswered + '</b> / ' + buildPhaseLen;
  }
}

function renderResultText() {
  const s = t();
  const totalAnswered = correctCount + wrongCount;

  // Raw speed stat: seconds per CORRECT answer only (wrong answers don't count toward pace).
  const rawSpeed = correctCount > 0 ? lastElapsedSeconds / correctCount : null;

  // Ranking speed: same, but each wrong answer adds a time penalty first, so
  // guessing fast without accuracy can't inflate the tier. No correct answers
  // at all always lands in the worst tier (Infinity sorts past every cutoff).
  const rankSpeed = correctCount > 0
    ? (lastElapsedSeconds + wrongCount * WRONG_PENALTY_SECONDS) / correctCount
    : Infinity;

  resultTitle.textContent = mode === 'time' ? s.resultTitleTime : s.resultTitleCount;
  document.getElementById('lblStatCorrect').textContent = s.statCorrect;
  document.getElementById('lblStatWrong').textContent = s.statWrong;
  document.getElementById('lblStatSpeed').textContent = s.statSpeed;
  againBtn.textContent = s.again;
  statCorrect.textContent = correctCount;
  statWrong.textContent = wrongCount;
  statSpeed.textContent = rawSpeed !== null
    ? (rawSpeed.toFixed(2).replace('.', ',') + ' s')
    : '–';

  if (wrongCount > 0 && correctCount > 0) {
    penaltyNote.textContent = s.penaltyNote.replace('{n}', WRONG_PENALTY_SECONDS);
    penaltyNote.classList.add('visible');
  } else if (totalAnswered > 0 && correctCount === 0) {
    penaltyNote.textContent = s.allWrongNote;
    penaltyNote.classList.add('visible');
  } else {
    penaltyNote.textContent = '';
    penaltyNote.classList.remove('visible');
  }

  renderRankLadder(rankSpeed, totalAnswered);

  if (totalAnswered > 0) {
    document.body.style.backgroundColor = speedToBgColor(rankSpeed);
  } else {
    document.body.style.backgroundColor = '';
  }
}

function applyLanguage() {
  const s = t();
  document.documentElement.lang = getLang();
  document.title = s.title;
  headerTitle.textContent = s.title;
  soundToggle.textContent = s.soundLabel;
  updateSoundToggleUI();
  langToggle.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.lang === getLang()));

  document.getElementById('landingHeading').textContent = s.landingHeading;
  document.getElementById('landingTestTitle').textContent = s.testTitle;
  document.getElementById('landingTestDesc').textContent = s.testDesc;
  document.getElementById('landingPracticeTitle').textContent = s.practiceTitle;
  document.getElementById('landingPracticeDesc').textContent = s.practiceDesc;
  document.getElementById('landingBuildTitle').textContent = s.buildTitle;
  document.getElementById('landingBuildDesc').textContent = s.buildDesc;
  document.getElementById('landingStatsTitle').textContent = s.statsTitle;
  document.getElementById('landingStatsDesc').textContent = s.statsDesc;
  document.getElementById('landingMulDivLabel').textContent = s.landingMulDivLabel;
  document.getElementById('landingOtherLabel').textContent = s.landingOtherLabel;
  document.getElementById('landingNegativeTitle').textContent = s.landingNegativeTitle;
  document.getElementById('landingNegativeDesc').textContent = s.landingNegativeDesc;
  document.getElementById('landingDecimalTitle').textContent = s.landingDecimalTitle;
  document.getElementById('landingDecimalDesc').textContent = s.landingDecimalDesc;
  document.getElementById('landingWordProblemsTitle').textContent = s.landingWordProblemsTitle;
  document.getElementById('landingWordProblemsDesc').textContent = s.landingWordProblemsDesc;

  backFromTest.textContent = s.back;
  backFromPractice.textContent = s.back;
  document.getElementById('testSetupHeading').textContent = s.testTitle;
  document.getElementById('testSetupInfo').textContent = s.testInfo;
  testModeButtons[0].textContent = s.mode1min;
  testModeButtons[1].textContent = s.mode100;

  document.getElementById('labelChooseMode').textContent = s.chooseMode;
  modeButtons[0].textContent = s.mode1min;
  modeButtons[1].textContent = s.mode100;

  document.getElementById('labelChooseOp').textContent = s.chooseOp;
  opButtons[0].textContent = s.opMul;
  opButtons[1].textContent = s.opDiv;
  opButtons[2].textContent = s.opMix;

  document.getElementById('labelChooseTables').textContent = s.chooseTables;
  selectAllBtn.textContent = s.selectAll;
  selectNoneBtn.textContent = s.selectNone;

  syncModeUI();

  document.getElementById('previewTitle').textContent = s.previewTitle;
  document.getElementById('previewNextLbl').textContent = s.previewNext;
  answerInput.setAttribute('aria-label', s.answerAria);
  nextBtn.textContent = s.nextBtn;

  renderLiveLabel();
  if (hasResult) renderResultText();

  if (buildOverviewScreen.style.display !== 'none') renderBuildOverview();
  if (buildStepIntroScreen.style.display !== 'none') openBuildStepIntro(buildStepIndex);
  if (buildCompleteScreen.style.display !== 'none') showBuildComplete();
  if (statsScreen.style.display !== 'none') renderStatsScreen();
}

langToggle.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if (!btn || btn.dataset.lang === getLang()) return;
  setLang(btn.dataset.lang);
  applyLanguage();
});

// Build table checkboxes 1..MAX_TABLE, unchecked by default
for (let n = 1; n <= MAX_TABLE; n++) {
  const label = document.createElement('label');
  label.innerHTML = '<input type="checkbox" value="' + n + '"><span>' + n + '</span>';
  tableGrid.appendChild(label);
  label.querySelector('input').addEventListener('change', (e) => {
    if (e.target.checked) {
      selectedTables.add(n);
      label.classList.add('checked');
    } else {
      selectedTables.delete(n);
      label.classList.remove('checked');
    }
    updateStartButton();
  });
}
updateStartButton();

[...modeButtons, ...testModeButtons].forEach(btn => {
  btn.addEventListener('click', () => {
    mode = btn.dataset.mode;
    syncModeUI();
  });
});

opButtons.forEach(btn => {
  btn.addEventListener('click', () => setOperation(btn.dataset.op));
});

selectAllBtn.addEventListener('click', setAllTablesSelected);

selectNoneBtn.addEventListener('click', () => {
  tableGrid.querySelectorAll('input').forEach(cb => {
    cb.checked = false;
    cb.closest('label').classList.remove('checked');
  });
  selectedTables.clear();
  updateStartButton();
});

function updateStartButton() {
  startBtn.disabled = selectedTables.size === 0;
}

// ---------- Result background color (green -> orange by speed) ----------
function speedToBgColor(avgSpeed) {
  const green = [63, 174, 116];
  const orange = [224, 138, 60];
  const clamped = Math.max(ACCEPTABLE_THRESHOLD, Math.min(BG_WORST_AT, avgSpeed));
  const ratio = (clamped - ACCEPTABLE_THRESHOLD) / (BG_WORST_AT - ACCEPTABLE_THRESHOLD);
  const rgb = green.map((g, i) => Math.round(g + (orange[i] - g) * ratio));
  return 'rgb(' + rgb.join(',') + ')';
}

// ---------- Rank ladder ----------
function renderRankLadder(avgSpeedSeconds, totalAnswered) {
  if (totalAnswered === 0) {
    rankLadder.style.display = 'none';
    rankLadder.innerHTML = '';
    return;
  }
  const tiers = t().tiers;
  const youLabel = t().tierYou;
  const markerLabel = t().acceptableLabel;
  rankLadder.style.display = 'flex';
  const achievedIndex = tiers.findIndex(tier => avgSpeedSeconds <= tier.max);
  const markerAt = tiers.findIndex(tier => tier.max > ACCEPTABLE_THRESHOLD);

  const markerHtml = '<div class="rank-marker">'
    + '<span class="rank-marker-line"></span>'
    + '<span class="rank-marker-label">' + markerLabel + '</span>'
    + '<span class="rank-marker-line"></span>'
    + '</div>';

  rankLadder.innerHTML = tiers.map((tier, i) => {
    const achieved = i === achievedIndex;
    const tierHtml = '<div class="rank-tier' + (achieved ? ' achieved' : '') + '">'
      + '<img class="tier-icon" src="img/tiers/tier-' + i + '.png" alt="">'
      + '<span class="tier-step">' + (tiers.length - i) + '</span>'
      + '<span class="tier-body">'
      +   '<span class="tier-top">'
      +     '<span class="tier-name">' + tier.label + '</span>'
      +     '<span class="tier-range">' + tier.range + '</span>'
      +   '</span>'
      +   '<span class="tier-desc">' + tier.desc + '</span>'
      + '</span>'
      + (achieved ? '<span class="tier-you">' + youLabel + '</span>' : '')
      + '</div>';
    return (i === markerAt ? markerHtml : '') + tierHtml;
  }).join('');
}

// ---------- Problem generation ----------
function pickTable() {
  const arr = Array.from(selectedTables);
  return arr[randInt(0, arr.length - 1)];
}

function makeProblem() {
  let op = operation;
  if (op === 'mix') op = Math.random() < 0.5 ? 'mul' : 'div';

  const table = pickTable();
  const factor = randInt(1, MAX_TABLE);

  if (op === 'mul') {
    const a = Math.random() < 0.5 ? table : factor;
    const b = a === table ? factor : table;
    return { text: a + ' × ' + b + ' =', answer: table * factor, factA: table, factB: factor };
  } else {
    const dividend = table * factor;
    return { text: dividend + ' ÷ ' + table + ' =', answer: factor, factA: table, factB: factor };
  }
}

let problemGenerator = makeProblem; // swapped to a build-step generator while in Bygg upp

function masteryLabel(bucket) {
  const s = t();
  if (bucket === 'green') return s.masteryGreen;
  if (bucket === 'yellow') return s.masteryYellow;
  if (bucket === 'red') return s.masteryRed;
  return s.masteryGray;
}

function mostCommonWrongAnswer(wrongAnswerCounts) {
  let best = null;
  let bestCount = 0;
  for (const key in wrongAnswerCounts) {
    if (wrongAnswerCounts[key] > bestCount) {
      best = key;
      bestCount = wrongAnswerCounts[key];
    }
  }
  return best;
}

function renderWeakList() {
  const s = t();
  const factStats = getFactStats();
  const candidates = Object.keys(factStats)
    .map(fact => ({ fact, stats: factStats[fact], bucket: getMastery(factStats[fact]) }))
    .filter(f => f.stats.attempts >= MASTERY_MIN_ATTEMPTS && (f.bucket === 'red' || f.bucket === 'yellow'));

  candidates.sort((x, y) => {
    const rank = { red: 0, yellow: 1 };
    if (rank[x.bucket] !== rank[y.bucket]) return rank[x.bucket] - rank[y.bucket];
    const accX = x.stats.correct / x.stats.attempts;
    const accY = y.stats.correct / y.stats.attempts;
    if (accX !== accY) return accX - accY;
    const speedX = x.stats.speedCount > 0 ? x.stats.speedSum / x.stats.speedCount : 0;
    const speedY = y.stats.speedCount > 0 ? y.stats.speedSum / y.stats.speedCount : 0;
    return speedY - speedX;
  });

  const top = candidates.slice(0, 8);

  if (top.length === 0) {
    statsWeakView.innerHTML = '<div class="stats-empty">' + s.weakAllStrong + '</div>';
    return;
  }

  statsWeakView.innerHTML = '<div class="weak-list">' + top.map(({ fact, stats, bucket }) => {
    const [a, b] = fact.split('x');
    const avgSpeed = stats.speedCount > 0 ? (stats.speedSum / stats.speedCount).toFixed(1) : null;
    const mistake = mostCommonWrongAnswer(stats.wrongAnswerCounts);
    let html = '<div class="weak-row">';
    html += '<span class="weak-fact">' + a + ' × ' + b + '</span>';
    html += '<span class="mastery-pill mastery-' + bucket + '">' + masteryLabel(bucket) + '</span>';
    html += '<span class="weak-detail">';
    html += s.weakOutOf.replace('{wrong}', stats.wrong).replace('{attempts}', stats.attempts);
    if (avgSpeed !== null) html += ' · ' + s.weakSpeed.replace('{speed}', avgSpeed.replace('.', ','));
    html += '</span>';
    if (mistake !== null) {
      html += '<span class="weak-mistake">' + s.weakMistake.replace('{answer}', mistake) + '</span>';
    }
    html += '</div>';
    return html;
  }).join('') + '</div>';
}
let selectedHeatmapFact = null;

function renderFactDetail(fact) {
  const s = t();
  const container = document.getElementById('statsFactDetail');
  if (!container) return;
  const stats = getFactStats()[fact];
  const [a, b] = fact.split('x');
  if (!stats || stats.attempts === 0) {
    container.innerHTML = '<div class="fact-detail-title">' + a + ' × ' + b + ' = ' + (a * b) + '</div>' + s.factDetailNone;
    return;
  }
  const avgSpeed = stats.speedCount > 0 ? (stats.speedSum / stats.speedCount).toFixed(1).replace('.', ',') : null;
  const mistake = mostCommonWrongAnswer(stats.wrongAnswerCounts);
  let html = '<div class="fact-detail-title">' + a + ' × ' + b + ' = ' + (a * b) + '</div>';
  html += '<div>' + s.factDetailStats.replace('{correct}', stats.correct).replace('{wrong}', stats.wrong).replace('{attempts}', stats.attempts) + '</div>';
  html += '<div>' + (avgSpeed !== null ? s.factDetailSpeed.replace('{speed}', avgSpeed) : s.factDetailNoSpeed) + '</div>';
  if (mistake !== null) html += '<div>' + s.weakMistake.replace('{answer}', mistake) + '</div>';
  html += '<div>' + s.factDetailLastSeen.replace('{date}', new Date(stats.lastSeen).toLocaleDateString(getLang() === 'sv' ? 'sv-SE' : 'en-US')) + '</div>';
  container.innerHTML = html;
}

function renderHeatmap() {
  const s = t();
  const factStats = getFactStats();
  let html = '<div class="heatmap-wrap"><div class="heatmap-grid">';
  html += '<div class="heatmap-label"></div>';
  for (let col = 1; col <= MAX_TABLE; col++) html += '<div class="heatmap-label">' + col + '</div>';
  for (let row = 1; row <= 12; row++) {
    html += '<div class="heatmap-label">' + row + '</div>';
    for (let col = 1; col <= MAX_TABLE; col++) {
      const fact = factKey(row, col);
      const bucket = getMastery(factStats[fact]);
      const isSelected = fact === selectedHeatmapFact;
      html += '<button type="button" class="heatmap-cell mastery-' + bucket + (isSelected ? ' selected' : '')
        + '" data-fact="' + fact + '" aria-label="' + row + ' × ' + col + '"></button>';
    }
  }
  html += '</div></div>';
  html += '<div class="fact-detail" id="statsFactDetail">' + s.factDetailPrompt + '</div>';
  statsGridView.innerHTML = html;

  statsGridView.querySelectorAll('.heatmap-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      selectedHeatmapFact = cell.dataset.fact;
      statsGridView.querySelectorAll('.heatmap-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      renderFactDetail(selectedHeatmapFact);
    });
  });

  if (selectedHeatmapFact) renderFactDetail(selectedHeatmapFact);
}

function buildMulProblem(a, b) {
  const flip = Math.random() < 0.5;
  const x = flip ? a : b;
  const y = flip ? b : a;
  return { text: x + ' × ' + y + ' =', answer: a * b, factA: a, factB: b };
}

function makeBuildProblem() {
  const step = BUILD_STEPS_META[buildStepIndex];

  if (buildPhase === 'focus') {
    if (step.kind === 'squares') {
      // Draw without repeats so every square (2² through 10²) gets covered
      // before any repeats — falls back to random once the set is exhausted
      // (only ever happens for unanswered preview slots, never a real question).
      const n = buildSquaresQueue.length > 0 ? buildSquaresQueue.pop() : randInt(2, 10);
      return buildMulProblem(n, n);
    }
    const base = step.addsTables[randInt(0, step.addsTables.length - 1)];
    return buildMulProblem(base, randInt(1, 10));
  }

  // mix phase: draw from everything unlocked so far, including this step
  const { nums, includeSquares } = buildStepsUpTo(buildStepIndex);
  if (includeSquares && Math.random() < 0.25) {
    const n = randInt(2, 10);
    return buildMulProblem(n, n);
  }
  const table = nums[randInt(0, nums.length - 1)];
  return buildMulProblem(table, randInt(1, 10));
}

function refillQueue() {
  while (queue.length < 2) queue.push(problemGenerator());
}

let problemShownAt = 0;

function renderCurrent() {
  refillQueue();
  problemText.textContent = queue[0].text;
  preview1.textContent = queue[1].text;
  problemShownAt = performance.now();
}

function startRound() {
  correctCount = 0;
  wrongCount = 0;
  queue = [];
  running = true;
  hasResult = false;
  roundStartTime = performance.now();
  document.body.style.backgroundColor = '';
  problemGenerator = makeProblem;
  Audio.startMusic();

  showScreen(testScreen);

  answerInput.value = '';

  if (mode === 'time') {
    secondsLeft = ROUND_SECONDS;
    timerDisplay.textContent = secondsLeft;
    timerBar.style.width = '100%';
  } else {
    timerDisplay.textContent = '0,0 s';
    timerBar.style.width = '0%';
  }
  renderLiveLabel();

  renderCurrent();
  answerInput.focus();

  clearInterval(timerId);
  timerId = setInterval(mode === 'time' ? tickTime : tickCount, 100);
}

let tickAccum = 0;
function tickTime() {
  tickAccum += 100;
  if (tickAccum < 1000) return;
  tickAccum = 0;
  secondsLeft--;
  timerDisplay.textContent = secondsLeft;
  timerBar.style.width = (secondsLeft / ROUND_SECONDS * 100) + '%';
  if (secondsLeft <= 0) endRound();
}

function tickCount() {
  const elapsed = (performance.now() - roundStartTime) / 1000;
  timerDisplay.textContent = elapsed.toFixed(1).replace('.', ',') + ' s';
}

function endRound() {
  running = false;
  clearInterval(timerId);
  Audio.stopMusic();
  showScreen(resultScreen);

  lastElapsedSeconds = mode === 'time'
    ? ROUND_SECONDS
    : (performance.now() - roundStartTime) / 1000;
  hasResult = true;

  renderResultText();
}

// ---------- Bygg upp: untimed focus -> mix phases per step ----------
function startBuildPhase(phase) {
  mode = 'build';
  buildPhase = phase;
  const isSquaresFocus = phase === 'focus' && BUILD_STEPS_META[buildStepIndex].kind === 'squares';
  buildPhaseLen = isSquaresFocus ? SQUARE_NUMBERS.length : (phase === 'focus' ? BUILD_FOCUS_LEN : BUILD_MIX_LEN);
  if (isSquaresFocus) buildSquaresQueue = shuffled(SQUARE_NUMBERS);
  correctCount = 0;
  wrongCount = 0;
  queue = [];
  running = true;
  hasResult = false;
  problemGenerator = makeBuildProblem;
  document.body.style.backgroundColor = '';
  clearInterval(timerId);
  timerId = null;

  showScreen(testScreen);
  answerInput.value = '';
  timerDisplay.textContent = phase === 'focus' ? t().phaseFocus : t().phaseMix;
  timerBar.style.width = '0%';
  renderLiveLabel();
  renderCurrent();
  answerInput.focus();
}

function completeBuildPhase() {
  running = false;
  if (buildPhase === 'focus') {
    startBuildPhase('mix');
    return;
  }
  buildCompleted.add(buildStepIndex);
  saveBuildProgress();
  showBuildComplete();
}

function renderBuildOverview() {
  const s = t();
  document.getElementById('buildOverviewHeading').textContent = s.buildOverviewHeading;
  document.getElementById('buildOverviewIntro').textContent = s.buildOverviewIntro;
  backFromBuildOverview.textContent = s.back;

  const firstOpenIndex = BUILD_STEPS_META.findIndex((_, i) => !buildCompleted.has(i));
  buildLadder.innerHTML = BUILD_STEPS_META.map((_, i) => {
    const info = s.buildSteps[i];
    const done = buildCompleted.has(i);
    const isNext = !done && i === firstOpenIndex;
    const badge = done
      ? '<span class="step-badge done">' + s.doneBadge + '</span>'
      : (isNext ? '<span class="step-badge next">' + s.nextBadge + '</span>' : '');
    return '<button type="button" class="rank-tier clickable' + (done ? ' achieved' : '') + '" data-step="' + i + '">'
      + '<span class="tier-step">' + (i + 1) + '</span>'
      + '<span class="tier-body">'
      +   '<span class="tier-top">'
      +     '<span class="tier-name">' + info.title + '</span>'
      +   '</span>'
      +   '<span class="tier-desc">' + info.strategy + '</span>'
      + '</span>'
      + badge
      + '</button>';
  }).join('');
}

buildLadder.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-step]');
  if (!btn) return;
  openBuildStepIntro(parseInt(btn.dataset.step, 10));
});

function openBuildStepIntro(index) {
  buildStepIndex = index;
  const s = t();
  const info = s.buildSteps[index];
  document.getElementById('buildStepOf').textContent = s.stepOf
    .replace('{i}', index + 1).replace('{n}', BUILD_STEPS_META.length);
  buildStepTitle.textContent = info.title;
  document.getElementById('buildStrategyLabel').textContent = s.strategyLabel;
  buildStrategyText.textContent = info.strategy;
  buildStrategyExample.textContent = info.example;
  buildStartBtn.textContent = s.startStep;
  backFromBuildIntro.textContent = s.backToOverview;
  showScreen(buildStepIntroScreen);
}

buildStartBtn.addEventListener('click', () => startBuildPhase('focus'));

function statsTabLabels() {
  const s = t();
  statsTabWeak.textContent = s.statsTabWeak;
  statsTabGrid.textContent = s.statsTabGrid;
  backFromStats.textContent = s.back;
  document.getElementById('statsHeading').textContent = s.statsHeading;
  statsResetBtn.textContent = s.statsReset;
}

let statsActiveTab = 'weak';

function renderStatsScreen() {
  const s = t();
  statsTabLabels();

  const hasAnyData = Object.keys(getFactStats()).length > 0;
  statsEmpty.style.display = hasAnyData ? 'none' : 'block';
  statsContent.style.display = hasAnyData ? 'block' : 'none';
  statsEmpty.textContent = s.statsEmptyMessage;
  if (!hasAnyData) return;

  statsTabWeak.classList.toggle('active', statsActiveTab === 'weak');
  statsTabGrid.classList.toggle('active', statsActiveTab === 'grid');
  statsWeakView.style.display = statsActiveTab === 'weak' ? 'block' : 'none';
  statsGridView.style.display = statsActiveTab === 'grid' ? 'block' : 'none';

  renderWeakList();
  renderHeatmap();
}

statsTabWeak.addEventListener('click', () => { statsActiveTab = 'weak'; renderStatsScreen(); });
statsTabGrid.addEventListener('click', () => { statsActiveTab = 'grid'; renderStatsScreen(); });

statsResetBtn.addEventListener('click', () => {
  if (!window.confirm(t().statsResetConfirm)) return;
  clearFactStats();
  selectedHeatmapFact = null;
  renderStatsScreen();
});

function showBuildComplete() {
  const s = t();
  const info = s.buildSteps[buildStepIndex];
  document.getElementById('buildDoneHeading').textContent = s.stepDoneHeading;
  buildDoneCaption.textContent = s.stepDoneCaption.replace('{title}', info.title);
  backFromBuildComplete.textContent = s.backToOverview;

  const hasNext = buildStepIndex < BUILD_STEPS_META.length - 1;
  buildNextBtn.textContent = hasNext
    ? s.nextStepBtn.replace('{title}', s.buildSteps[buildStepIndex + 1].title)
    : s.allStepsDoneBtn;
  buildNextBtn.onclick = () => {
    if (hasNext) {
      openBuildStepIntro(buildStepIndex + 1);
    } else {
      renderBuildOverview();
      showScreen(buildOverviewScreen);
    }
  };

  showScreen(buildCompleteScreen);
}

function submitAnswer() {
  if (!running) return;
  const raw = answerInput.value.trim();
  if (raw === '') return;

  const given = parseInt(raw, 10);
  const correct = queue[0].answer;
  const isCorrect = given === correct;
  const elapsedMs = performance.now() - problemShownAt;
  logAttempt(factKey(queue[0].factA, queue[0].factB), given, correct, isCorrect, elapsedMs, mode);

  if (isCorrect) {
    correctCount++;
    flash('flash-correct');
    Audio.playCorrectSfx();
  } else {
    wrongCount++;
    flash('flash-wrong');
    Audio.playWrongSfx();
  }

  renderLiveLabel();

  if (mode === 'count') {
    const totalAnswered = correctCount + wrongCount;
    timerBar.style.width = (totalAnswered / COUNT_TARGET * 100) + '%';
    if (totalAnswered >= COUNT_TARGET) {
      endRound();
      return;
    }
  } else if (mode === 'build') {
    const totalAnswered = correctCount + wrongCount;
    timerBar.style.width = (totalAnswered / buildPhaseLen * 100) + '%';
    if (totalAnswered >= buildPhaseLen) {
      completeBuildPhase();
      return;
    }
  }

  queue.shift();
  answerInput.value = '';
  renderCurrent();
}

let flashTimeout = null;
function flash(cls) {
  problemBox.classList.remove('flash-correct', 'flash-wrong');
  void problemBox.offsetWidth; // restart animation
  problemBox.classList.add(cls);
  clearTimeout(flashTimeout);
  flashTimeout = setTimeout(() => problemBox.classList.remove(cls), 250);
}

answerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.repeat) {
    e.preventDefault();
    submitAnswer();
  }
});

nextBtn.addEventListener('click', () => {
  submitAnswer();
  answerInput.focus();
});

testStartBtn.addEventListener('click', () => {
  setAllTablesSelected();
  setOperation('mix');
  originScreen = 'test';
  startRound();
});

startBtn.addEventListener('click', () => {
  originScreen = 'practice';
  startRound();
});

againBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = '';
  showScreen(originScreen === 'test' ? testSetupScreen : setupScreen);
});

updateStartButton();
applyLanguage();
showScreen(landingScreen);
