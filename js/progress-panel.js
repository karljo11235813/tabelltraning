// The student's progress on the 1-minute test: verdict, current level, chart,
// small numbers and a table of every run. One self-contained block, so it can go
// on any screen: give renderProgress an empty element, the runs and the texts.
// The chart is drawn at the element's real width, so its text stays readable on
// a phone. Styles are the .pp- classes in styles.css.

import { LEVELS, fill } from './levels.js';
import { summarizeRuns, WINDOW } from './run-stats.js';

const DEFAULT_WIDTH = 476; // the card's inner width on a computer
const HEIGHT = 170;
const PAD = { top: 18, right: 10, bottom: 20, left: 28 };
const HIGHEST_LEVEL_ON_CHART = 80; // the 216 world record would flatten everything else
const MIN_LINE_RUNS = 4; // the rolling line starts at run 3, and a line needs two points

const px = (v) => v.toFixed(1);
const oneDecimal = (v) => String(Math.round(v * 10) / 10).replace('.', ',');
const levelName = (level, s) => s.levelNames[LEVELS.indexOf(level)].replace(/­/g, '');

// The y-axis range and the two levels that matter: the one just passed and the
// next goal. The axis starts just below the worst run rather than at 0, because
// the changes the student wants to see are small next to the whole 0-to-top range.
export function chartLevels(best, worst) {
  const shown = LEVELS.filter(l => l.minCorrect <= HIGHEST_LEVEL_ON_CHART);
  const next = shown.find(l => l.minCorrect > best);
  const passed = shown.filter(l => l.minCorrect <= best).pop();
  const top = Math.ceil(((next ? next.minCorrect : best) + 3) / 5) * 5;
  const lowest = Math.min(worst - 3, passed ? passed.minCorrect : Infinity);
  return { top, bottom: Math.max(0, Math.floor(lowest / 5) * 5), lines: [passed, next].filter(Boolean) };
}

function chartSvg(runs, summary, s, width) {
  const { top, bottom, lines } = chartLevels(summary.best, summary.worst);
  const n = runs.length;
  const plotW = width - PAD.left - PAD.right;
  const plotH = HEIGHT - PAD.top - PAD.bottom;
  const right = width - PAD.right;
  const baseline = HEIGHT - PAD.bottom;
  const x = (i) => PAD.left + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v) => PAD.top + plotH * (1 - (Math.min(top, Math.max(bottom, v)) - bottom) / (top - bottom));

  const parts = [];
  const withInterval = summary.rolling.map((r, i) => ({ ...r, i })).filter(r => r.low !== null);
  const points = (key) => withInterval.map(r => px(x(r.i)) + ',' + px(y(r[key])));
  const showLine = n >= MIN_LINE_RUNS;

  // Text on the chart is limited to the axis, the two levels and the best run.
  if (showLine) {
    parts.push('<polygon class="pp-band" points="' + points('high').concat(points('low').reverse()).join(' ') + '"/>');
  }

  const axisNumber = (value) => '<text class="pp-axis" x="' + (PAD.left - 6) + '" y="' + px(y(value) + 4) + '" text-anchor="end">' + value + '</text>';
  parts.push('<line class="pp-base" x1="' + PAD.left + '" x2="' + right + '" y1="' + baseline + '" y2="' + baseline + '"/>');
  if (!lines.some(level => level.minCorrect === bottom)) parts.push(axisNumber(bottom));
  lines.forEach((level) => {
    const ly = px(y(level.minCorrect));
    parts.push('<line class="pp-goal" x1="' + PAD.left + '" x2="' + right + '" y1="' + ly + '" y2="' + ly + '"/>');
    parts.push(axisNumber(level.minCorrect));
  });

  const axisY = HEIGHT - 4;
  const axisText = (i, anchor) => '<text class="pp-axis" x="' + px(x(i)) + '" y="' + axisY + '" text-anchor="' + anchor + '">' + fill(s.progressAxisRun, { n: i + 1 }) + '</text>';
  parts.push(n === 1 ? axisText(0, 'middle') : axisText(0, 'start') + axisText(n - 1, 'end'));

  const dotRadius = n > 100 ? 2 : n > 40 ? 3 : 4;
  const bestIndex = runs.map(r => r.correct).lastIndexOf(summary.best);
  runs.forEach((run, i) => {
    const cx = px(x(i));
    const cy = px(y(run.correct));
    const title = fill(s.progressRunTitle, {
      n: i + 1,
      date: new Date(run.ts).toLocaleDateString(s.progressLocale),
      correct: run.correct,
      wrong: run.wrong,
    });
    parts.push('<g><title>' + title + '</title><circle class="pp-hit" cx="' + cx + '" cy="' + cy + '" r="12"/>'
      + '<circle class="pp-dot' + (i === bestIndex ? ' pp-dot-best' : '') + '" cx="' + cx + '" cy="' + cy + '" r="' + dotRadius + '"/></g>');
  });

  if (showLine) parts.push('<polyline class="pp-line" points="' + points('mean').join(' ') + '"/>');

  lines.forEach((level) => {
    parts.push('<text class="pp-goal-name" x="' + (PAD.left + 6) + '" y="' + px(y(level.minCorrect) - 4) + '">' + levelName(level, s) + '</text>');
  });
  parts.push('<text class="pp-best" x="' + px(x(bestIndex)) + '" y="' + px(y(summary.best) - 8) + '" text-anchor="middle">' + summary.best + '</text>');

  const aria = fill(s.progressChartAria, { count: summary.count, best: summary.best, worst: summary.worst });
  return '<svg class="pp-chart" role="img" aria-label="' + aria + '" viewBox="0 0 ' + width + ' ' + HEIGHT + '">' + parts.join('') + '</svg>';
}

function verdictHtml({ verdict, moreMistakes }, s) {
  if (verdict.kind === 'wait') {
    const template = verdict.needed === 1 ? s.progressWaitOne : s.progressWait;
    return '<p class="pp-verdict">' + fill(template, { n: verdict.needed }) + '</p>';
  }
  const text = {
    up: fill(s.progressUp, { n: Math.round(Math.abs(verdict.gap)) }) + (moreMistakes ? ' ' + s.progressMoreMistakes : ''),
    flat: s.progressFlat,
    down: s.progressDown,
  }[verdict.kind];
  const arrow = { up: '↗', flat: '→', down: '↘' }[verdict.kind];
  return '<p class="pp-verdict"><span class="pp-arrow pp-arrow-' + verdict.kind + '" aria-hidden="true">' + arrow + '</span>' + text + '</p>'
    + '<p class="pp-note">' + fill(s.progressCompared, { n: verdict.size }) + '</p>';
}

function levelHtml({ level }, s) {
  const mean = Math.round(level.mean);
  const text = level.low === null
    ? fill(s.progressLevelShort, { mean })
    : fill(s.progressLevel, { mean, low: Math.round(level.low), high: Math.round(level.high) });
  return '<p class="pp-level">' + text + '</p>';
}

function legendHtml(s) {
  const item = (key, text) => '<span><i class="pp-key pp-key-' + key + '"></i>' + text + '</span>';
  return '<div class="pp-legend">'
    + item('dot', s.progressLegendRun)
    + item('line', fill(s.progressLegendAverage, { n: WINDOW }))
    + item('band', s.progressLegendBand)
    + '</div>';
}

function tilesHtml(summary, s) {
  const tile = (value, label) => '<div class="pp-tile"><b>' + value + '</b><span>' + label + '</span></div>';
  return '<div class="pp-tiles">'
    + tile(summary.best, s.progressBest)
    + tile(summary.worst, s.progressWorst)
    + tile(summary.count, s.progressCount)
    + tile(oneDecimal(summary.wrongAverage), fill(s.progressWrong, { n: summary.windowSize }))
    + '</div>';
}

function tableHtml(runs, s) {
  const rows = runs.map((run, i) => '<tr><td>' + (i + 1) + '</td><td>' + new Date(run.ts).toLocaleDateString(s.progressLocale)
    + '</td><td>' + run.correct + '</td><td>' + run.wrong + '</td></tr>').reverse().join('');
  return '<details class="pp-table"><summary>' + s.progressTable + '</summary><div class="pp-table-scroll"><table>'
    + '<thead><tr><th>' + s.progressCount + '</th><th>' + s.progressTableDate + '</th><th>' + s.statCorrect + '</th><th>' + s.statWrong + '</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div></details>';
}

export function progressHtml(runs, s, { width = DEFAULT_WIDTH } = {}) {
  const heading = '<h2>' + s.progressTitle + '</h2>';
  if (runs.length === 0) return heading + '<p class="pp-note">' + s.progressEmpty + '</p>';
  const summary = summarizeRuns(runs);
  return heading
    + verdictHtml(summary, s)
    + levelHtml(summary, s)
    + '<p class="pp-chart-title">' + s.progressChartTitle + '</p>'
    + chartSvg(runs, summary, s, width)
    + (runs.length >= MIN_LINE_RUNS ? legendHtml(s) : '')
    + tilesHtml(summary, s)
    + tableHtml(runs, s);
}

export function renderProgress(el, runs, s) {
  el.innerHTML = progressHtml(runs, s, el.clientWidth ? { width: el.clientWidth } : {});
}
