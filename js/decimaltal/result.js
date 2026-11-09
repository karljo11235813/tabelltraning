// The result of a test, as HTML, top to bottom: the level (acceptable or not), the
// three numbers, what is missing for the next level, the level boxes, the
// categories with wrong answers and the wrong answers themselves. The buttons
// below it and the progress panel are the page's. Levels are worked out here,
// from the counts, every time a result is shown.

import { assessLevels, fill, levelHint, levelRequirement } from '../levels.js';
import { CATEGORIES } from './categories.js';
import { feedbackHtml, letterList } from './feedback.js';
import { isFullTest } from './history.js';
import { ACCEPTABLE_ID, LEVELS } from './settings.js';

const escapeHtml = (text) => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const plainName = (name) => name.replace(/\u00ad/g, '');

export function levelLabel({ correct, wrong }, s, levels = LEVELS) {
  const { highest } = assessLevels({ correct, wrong }, levels);
  return highest < 0 ? s.notYet : plainName(s.levelNames[highest]);
}

function levelHtml(tally, s, levels) {
  const result = assessLevels(tally, levels);
  const ok = result.highest >= levels.findIndex(l => l.id === ACCEPTABLE_ID);
  const boxes = levels.map((level, i) => {
    const cls = 'level-box' + (result.reached[i] ? ' reached' : '') + (i === result.highest ? ' yours' : '');
    return '<div class="' + cls + '"><span class="level-check">' + (result.reached[i] ? '✓' : '') + '</span>'
      + '<span class="level-name">' + s.levelNames[i] + '</span>'
      + '<span class="level-req">' + levelRequirement(level, s) + '</span>'
      + (i === result.highest ? '<span class="level-yours">' + s.levelYours + '</span>' : '') + '</div>';
  }).join('');
  return {
    top: '<p class="dt-level ' + (ok ? 'is-ok' : 'is-not') + '">' + levelLabel(tally, s, levels) + ' ' + (ok ? '✓' : '✗') + '</p>',
    hint: '<p class="levels-hint">' + levelHint(result, s, levels) + '</p>',
    boxes: '<div class="levels dt-levels"><div class="levels-heading">' + s.levelsHeading + '</div>'
      + '<div class="levels-row">' + boxes + '</div></div>',
  };
}

function scoreHtml({ correct, wrong }, s) {
  const item = (label, value) => '<span class="dt-score-item">' + label + ' <b>' + value + '</b></span>';
  return '<p class="dt-score">' + item(s.statCorrect, correct) + item(s.statWrong, wrong) + item(s.statPoints, correct - wrong) + '</p>';
}

// The categories with a wrong answer, in the page's order.
export function missedCategories(tally) {
  return CATEGORIES.filter(c => (tally.byCategory[c.id]?.wrong || 0) > 0).map(c => c.id);
}

function wrongTilesHtml(tally, s) {
  const wrong = (id) => tally.byCategory[id].wrong;
  const ids = missedCategories(tally).sort((a, b) => wrong(b) - wrong(a)); // stable: ties keep the page order
  if (ids.length === 0) return tally.correct > 0 ? '<p class="dt-no-wrong">' + s.noWrong + '</p>' : '';
  const tiles = ids.map((id) => {
    const { correct, wrong: w } = tally.byCategory[id];
    const name = CATEGORIES.find(c => c.id === id).name;
    return '<div class="dt-wrong-tile"><span class="dt-wrong-name">' + name + '</span>'
      + '<span class="dt-wrong-count">' + fill(s.wrongOf, { w, n: correct + w }) + '</span></div>';
  }).join('');
  return '<h3 class="dt-wrong-heading">' + s.wrongIn + '</h3><div class="dt-wrong-tiles">' + tiles + '</div>'
    + '<button type="button" class="dt-practice-missed">' + s.practiceMissed + '</button>';
}

// Each missed question as it was shown, what the student wrote (always as text) or
// that it was skipped, and the help that goes with the question.
function missedHtml(missed, s) {
  if (missed.length === 0) return '';
  const items = missed.map(({ problem, given, skipped }) => {
    const shown = problem.answerType === 'choice' ? given.charAt(0).toUpperCase() + given.slice(1)
      : problem.answerType === 'multi' ? letterList(given) : given;
    return '<div class="dt-missed-item">'
      + (problem.label ? '<div class="dt-missed-label">' + problem.label + '</div>' : '')
      + (problem.tex ? '<div class="dt-missed-tex">\\(' + problem.tex + '\\)</div>' : '')
      + '<div class="dt-missed-given">' + (skipped ? s.youSkipped : s.youWrote + ': <s>' + escapeHtml(shown) + '</s>') + '</div>'
      + '<div class="feedback wrong">' + feedbackHtml(problem, given, { skipped }) + '</div></div>';
  }).join('');
  return '<details class="dt-missed"><summary>' + fill(s.showMissed, { n: missed.length }) + '</summary>' + items + '</details>';
}

// saved: true or false for a test that should have been saved, null for one that
// was never meant to be (not a full test, or no answers).
export function resultHtml({ tally, missed, categories, seconds, saved }, s, levels = LEVELS) {
  const full = isFullTest({ categories, seconds });
  const level = full ? levelHtml(tally, s, levels) : null;
  return (level ? level.top : '')
    + scoreHtml(tally, s)
    + (level ? level.hint + level.boxes : '<p class="dt-note">' + s.onlyFull + '</p>')
    + (saved === false ? '<p class="dt-note">' + s.notSaved + '</p>' : '')
    + wrongTilesHtml(tally, s)
    + missedHtml(missed, s);
}

// On the start screen's Test card: the best score and the latest test's level.
export function testCardText(runs, s, levels = LEVELS) {
  if (runs.length === 0) return '';
  const best = Math.max(...runs.map(r => r.correct - r.wrong));
  return fill(s.testCard, { best, level: levelLabel(runs[runs.length - 1], s, levels) });
}
