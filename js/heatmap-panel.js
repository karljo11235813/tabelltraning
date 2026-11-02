// The grid of every fact on the statistics screen. Colour is a fact's retrieval
// score (mastery.js), a dot says it has been wrong lately, stripes say it has too
// few answers to trust and an empty cell says it hasn't been practised. Pressing
// a cell shows its diagnosis and its latest answers, one by one. Give
// renderHeatmap an empty element, the data and the texts. Styles are the .heat-
// and .strip- classes in styles.css.

import { fill } from './levels.js';
import { HEAT_STEPS, MASTERY_MIN_ATTEMPTS, RECENT_ANSWERS, factKey, getRetrieval, mostCommonWrongAnswer } from './mastery.js';

const MAX_TABLE = 12;
const STRIP_TOP_SECONDS = 10; // a bar for a longer answer stops here; its number under the bar still says how long
const STRIP_MIN_HEIGHT = 6; // percent, so that a very quick answer still shows as a bar

const tables = Array.from({ length: MAX_TABLE }, (_, i) => i + 1);
const seconds = (v) => (v >= 10 ? String(Math.round(v)) : v.toFixed(1).replace('.', ','));

function stepCounts(factStats, answers) {
  const counts = Array(HEAT_STEPS + 1).fill(0);
  tables.forEach(a => tables.filter(b => b >= a).forEach(b => {
    const fact = factKey(a, b);
    counts[getRetrieval(factStats[fact], answers[fact]).step]++;
  }));
  return counts;
}

function legendHtml(factStats, answers, s) {
  const counts = stepCounts(factStats, answers);
  const total = counts.reduce((sum, n) => sum + n, 0);
  const steps = counts.slice(1).map((n, i) => (
    '<div class="heat-step" title="' + fill(s.heatStepCount, { n, total }) + '">'
    + '<span class="heat-swatch heat-' + (i + 1) + '"></span>'
    + '<span class="heat-count">' + n + '</span></div>'
  )).join('');
  return '<p class="heat-caption">' + s.heatCaption + '</p>'
    + '<div class="heat-scale">'
    + '<div class="heat-scale-ends"><span>' + s.heatWeak + '</span><span>' + s.heatStrong + '</span></div>'
    + '<div class="heat-steps">' + steps + '</div>'
    + '</div>'
    + '<div class="heat-keys">'
    + '<span><i class="heat-key heat-4 has-wrong"></i>' + fill(s.heatKeyWrong, { n: RECENT_ANSWERS }) + '</span>'
    + '<span><i class="heat-key heat-4 is-thin"></i>' + fill(s.heatKeyThin, { n: MASTERY_MIN_ATTEMPTS }) + '</span>'
    + '<span><i class="heat-key heat-0"></i>' + s.factDetailNone + ' (' + counts[0] + ')</span>'
    + '</div>';
}

function cellLabel(row, col, stats, retrieval, s) {
  const name = row + ' × ' + col;
  if (retrieval.step === 0) return name + ': ' + s.factDetailNone;
  const parts = [fill(s.factDetailStats, stats)];
  if (retrieval.typicalSeconds !== null) parts.push(fill(s.factDetailSpeed, { speed: seconds(retrieval.typicalSeconds) }));
  return name + ': ' + parts.join(', ');
}

function cellHtml(row, col, factStats, answers, s, selected) {
  const fact = factKey(row, col);
  const retrieval = getRetrieval(factStats[fact], answers[fact]);
  const classes = ['heatmap-cell', 'heat-' + retrieval.step];
  if (retrieval.thin) classes.push('is-thin');
  if (retrieval.recentWrong > 0) classes.push('has-wrong');
  if (fact === selected) classes.push('selected');
  const label = cellLabel(row, col, factStats[fact], retrieval, s);
  return '<button type="button" class="' + classes.join(' ') + '" data-fact="' + fact
    + '" aria-label="' + label + '" title="' + label + '"></button>';
}

function stripSlotHtml(answer, s) {
  const time = answer.elapsedMs / 1000;
  const height = Math.max(STRIP_MIN_HEIGHT, Math.min(100, time / STRIP_TOP_SECONDS * 100));
  const given = !answer.correct && Number.isFinite(answer.given) ? ' title="' + fill(s.stripGiven, { answer: answer.given }) + '"' : '';
  return '<div class="strip-slot' + (answer.correct ? '' : ' is-wrong') + '"' + given + '>'
    + '<span class="strip-track"><span class="strip-bar" style="height:' + height.toFixed(0) + '%"></span></span>'
    + '<span class="strip-mark">' + (answer.correct ? '' : '✕') + '</span>'
    + '<span class="strip-time">' + seconds(time) + '</span></div>';
}

function stripHtml(answers, s) {
  if (answers.length === 0) return '';
  return '<div class="answer-strip">' + answers.map(a => stripSlotHtml(a, s)).join('') + '</div>'
    + '<div class="strip-caption">' + s.stripCaption + '</div>';
}

export function factDetailHtml(fact, factStats, answers, s) {
  const stats = factStats[fact];
  const [a, b] = fact.split('x');
  const title = '<div class="fact-detail-title">' + a + ' × ' + b + ' = ' + (a * b) + '</div>';
  const retrieval = getRetrieval(stats, answers[fact]);
  if (retrieval.step === 0) return title + s.factDetailNone;
  const mistake = mostCommonWrongAnswer(stats.wrongAnswerCounts);
  let html = title;
  html += '<div class="fact-diagnosis"><span class="heat-swatch heat-' + retrieval.step + '"></span>' + s.diagnosis[retrieval.diagnosis] + '</div>';
  html += '<div>' + fill(s.factDetailStats, stats) + '</div>';
  html += '<div>' + (retrieval.typicalSeconds !== null ? fill(s.factDetailSpeed, { speed: seconds(retrieval.typicalSeconds) }) : s.factDetailNoSpeed) + '</div>';
  if (mistake !== null) html += '<div>' + fill(s.weakMistake, { answer: mistake }) + '</div>';
  html += '<div>' + fill(s.factDetailLastSeen, { date: new Date(stats.lastSeen).toLocaleDateString(s.progressLocale) }) + '</div>';
  html += stripHtml((answers[fact] || []).slice(-RECENT_ANSWERS), s);
  return html;
}

export function heatmapHtml(factStats, answers, s, selected = null) {
  let html = legendHtml(factStats, answers, s);
  html += '<div class="heatmap-grid">';
  html += '<div class="heatmap-label"></div>';
  tables.forEach(col => { html += '<div class="heatmap-label">' + col + '</div>'; });
  tables.forEach(row => {
    html += '<div class="heatmap-label">' + row + '</div>';
    tables.forEach(col => { html += cellHtml(row, col, factStats, answers, s, selected); });
  });
  html += '</div>';
  html += '<div class="fact-detail" aria-live="polite">'
    + (selected ? factDetailHtml(selected, factStats, answers, s) : s.factDetailPrompt) + '</div>';
  return html;
}

let selectedFact = null;

export function clearHeatmapSelection() {
  selectedFact = null;
}

export function renderHeatmap(el, factStats, answers, s) {
  el.innerHTML = heatmapHtml(factStats, answers, s, selectedFact);
  const cells = el.querySelectorAll('.heatmap-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      selectedFact = cell.dataset.fact;
      // 7 × 8 and 8 × 7 are one fact, so both light up.
      cells.forEach(c => c.classList.toggle('selected', c.dataset.fact === selectedFact));
      el.querySelector('.fact-detail').innerHTML = factDetailHtml(selectedFact, factStats, answers, s);
    });
  });
}
