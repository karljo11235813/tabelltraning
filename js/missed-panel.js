// The HTML of Öva på det du missade (missed-practice.js): what went wrong and
// what was slowest before the practice, and before → after per fact when it is
// over. Big enough to read from across the room. Styles are the .mp- classes in
// styles.css.

import { fill } from './levels.js';

const seconds = (ms) => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const factLabel = (key) => key.split('x').join(' × ');
const escapeHtml = (text) => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// What was typed next to the right answer; ✗ and ✓ beside the colours, so that the colour never carries it alone.
// The two stay together, so that on a phone they move under the problem side by side.
export function missHtml(given, answer, s) {
  return '<span class="mp-answers"><span class="mp-cell">'
    + given.map(g => '<span class="mp-given">' + escapeHtml(g) + '</span>').join(' ')
    + '<span class="mp-label">✗ ' + s.missedYouWrote + '</span></span>'
    + '<span class="mp-cell"><span class="mp-right">' + answer + '</span>'
    + '<span class="mp-label">✓ ' + s.missedRightAnswer + '</span></span></span>';
}

export function reviewHtml(picked, s) {
  let html = '';
  if (picked.wrong.length > 0) {
    html += '<h3 class="mp-heading">' + s.missedWrongHeading + '</h3>';
    if (picked.wrong.length > picked.keys.length) html += '<p class="mp-caption">' + fill(s.missedFirstN, { n: picked.keys.length }) + '</p>';
    html += '<div class="mp-list">' + picked.wrong.flatMap(f => f.misses).map(m => '<div class="mp-row is-wrong">'
      + '<span class="mp-problem">' + m.text + '</span>' + missHtml(m.given, m.answer, s) + '</div>').join('') + '</div>';
  }
  return html + slowHtml(picked.slow, s.missedSlowCaption, s);
}

function slowHtml(slow, caption, s) {
  if (slow.length === 0) return '';
  return '<h3 class="mp-heading">' + s.missedSlowHeading + '</h3>'
    + '<p class="mp-caption">' + caption + '</p>'
    + '<div class="mp-list">' + slow.map(f => '<div class="mp-row is-slow">'
      + '<span class="mp-problem">' + f.text + ' <span class="mp-right">' + f.answer + '</span></span>'
      + '<span class="mp-cell"><span class="mp-time">' + seconds(f.ms) + '</span></span></div>').join('') + '</div>';
}

// Öva på dina svagaste (weakPracticeFacts in weak-panel.js): from all answers, not one run,
// so beside each fact stands its most common wrong answer and how often it went wrong.
export function weakReviewHtml(picked, s) {
  let html = '';
  if (picked.weak.length > 0) {
    html += '<h3 class="mp-heading">' + s.weakPracticeWeakHeading + '</h3>'
      + '<div class="mp-list">' + picked.weak.map(f => '<div class="mp-row is-wrong">'
        + '<span class="mp-problem">' + factLabel(f.key) + ' = <span class="mp-right">' + f.answer + '</span></span>'
        + '<span class="mp-answers">'
        + (f.mistake === null ? '' : '<span class="mp-cell"><span class="mp-given">' + escapeHtml(f.mistake) + '</span>'
          + '<span class="mp-label">✗ ' + s.missedMostCommon + '</span></span>')
        + '<span class="mp-cell"><span class="mp-count">' + fill(s.weakOutOf, f) + '</span></span>'
        + '</span></div>').join('') + '</div>';
  }
  return html + slowHtml(picked.slow, s.weakPracticeSlowCaption, s);
}

// Before is the time of a slow fact, how often a weak fact went wrong (Öva på dina svagaste)
// or that it was wrong in the run (Öva på det du missade).
function beforeHtml(picked, key, s) {
  const slow = picked.slow.find(f => f.key === key);
  if (slow) return '<span class="mp-before">' + seconds(slow.ms) + '</span>';
  const weak = (picked.weak || []).find(f => f.key === key);
  if (weak) return '<span class="mp-before is-wrong">' + fill(s.weakOutOf, weak) + '</span>';
  return '<span class="mp-before is-wrong">✗ ' + s.missedWasWrong + '</span>';
}

export function summaryHtml(picked, rows, s) {
  return '<div class="mp-summary">'
    + '<span class="mp-sum-head"></span><span class="mp-sum-head">' + (picked.weak ? s.weakPracticeBefore : s.missedBefore) + '</span>'
    + '<span class="mp-sum-head">' + s.missedAfter + '</span>'
    + rows.map(r => {
      const before = beforeHtml(picked, r.key, s);
      const after = fill(s.missedRightOf, r) + (r.typicalMs === null ? '' : ' · ' + seconds(r.typicalMs));
      return '<span class="mp-fact">' + factLabel(r.key) + '</span>' + before + '<span class="mp-after">' + after + '</span>';
    }).join('')
    + '</div>';
}
