// The student's weakest facts on the statistics screen, made to be read at a
// glance by someone leaning over the computer: the multiplication very big, and
// beside it the divisions that are counted together with it. Weakest first, and
// the edge of a tile has the fact's colour from the grid. Under them are always
// the slowest facts, also those that are right every time and those that already
// are among the weakest: a fact can be weak because of a misclick, while the time
// only counts right answers. Styles are the .weak- classes in styles.css.

import { fill } from './levels.js';
import { MASTERY_MIN_ATTEMPTS, factDivisions, getRetrieval } from './mastery.js';

const SHOWN_WEAKEST = 8;
const SHOWN_SLOW = 4;

const speedText = ({ typicalSeconds }, s) => fill(s.weakSpeed, { speed: typicalSeconds.toFixed(1).replace('.', ',') });

function weakestOf(facts) {
  return facts
    .filter(f => f.retrieval.bucket === 'red' || f.retrieval.bucket === 'yellow')
    .sort((x, y) => x.retrieval.score - y.retrieval.score)
    .slice(0, SHOWN_WEAKEST);
}

// Facts with enough right answers go first, so that one long pause on a fact
// seen once can't push out the ones that really are slow.
function slowestOf(facts) {
  const reliable = (f) => f.retrieval.rightAnswers >= MASTERY_MIN_ATTEMPTS;
  return facts
    .filter(f => f.retrieval.typicalSeconds !== null)
    .sort((x, y) => reliable(y) - reliable(x) || y.retrieval.typicalSeconds - x.retrieval.typicalSeconds)
    .slice(0, SHOWN_SLOW);
}

function tileHtml({ fact, retrieval }, detail) {
  const [a, b] = fact.split('x');
  return '<div class="weak-tile heat-' + retrieval.step + '">'
    + '<div class="weak-times">' + a + ' × ' + b + '</div>'
    + '<div class="weak-divisions">' + factDivisions(fact).map(d => '<span>' + d + '</span>').join('') + '</div>'
    + '<div class="weak-detail">' + detail + '</div>'
    + '</div>';
}

function weakTileHtml(f, s) {
  const wrong = fill(s.weakOutOf, f.stats);
  return tileHtml(f, f.retrieval.typicalSeconds === null ? wrong : wrong + ' · ' + speedText(f.retrieval, s));
}

function slowTileHtml(f, s) {
  return tileHtml(f, '<strong>' + speedText(f.retrieval, s) + '</strong> · ' + fill(s.weakOutOf, f.stats));
}

export function weakFactsHtml(factStats, answers, s) {
  const facts = Object.keys(factStats)
    .map(fact => ({ fact, stats: factStats[fact], retrieval: getRetrieval(factStats[fact], answers[fact]) }));
  const weakest = weakestOf(facts);
  const slowest = slowestOf(facts);
  let html = '<p class="weak-caption">' + s.weakCaption + '</p>';
  html += weakest.length > 0
    ? '<div class="weak-list">' + weakest.map(f => weakTileHtml(f, s)).join('') + '</div>'
    : '<div class="stats-empty">' + s.weakAllStrong + '</div>';
  html += '<h3 class="weak-subheading">' + s.weakSlowHeading + '</h3>';
  html += slowest.length > 0
    ? '<p class="weak-caption">' + s.weakSlowCaption + '</p><div class="weak-list">' + slowest.map(f => slowTileHtml(f, s)).join('') + '</div>'
    : '<p class="weak-caption">' + s.weakSlowNone + '</p>';
  return html;
}
