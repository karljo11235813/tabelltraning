// The student's weakest facts on the statistics screen, made to be read at a
// glance by someone leaning over the computer: the multiplication very big, and
// beside it the divisions that are counted together with it. Weakest first, and
// the edge of a tile has the fact's colour from the grid. Styles are the .weak-
// classes in styles.css.

import { fill } from './levels.js';
import { factDivisions, getRetrieval } from './mastery.js';

const SHOWN_FACTS = 8;

function weakestFacts(factStats, answers) {
  return Object.keys(factStats)
    .map(fact => ({ fact, stats: factStats[fact], retrieval: getRetrieval(factStats[fact], answers[fact]) }))
    .filter(f => f.retrieval.bucket === 'red' || f.retrieval.bucket === 'yellow')
    .sort((x, y) => x.retrieval.score - y.retrieval.score)
    .slice(0, SHOWN_FACTS);
}

function tileHtml({ fact, stats, retrieval }, s) {
  const [a, b] = fact.split('x');
  let detail = fill(s.weakOutOf, stats);
  if (retrieval.typicalSeconds !== null) {
    detail += ' · ' + fill(s.weakSpeed, { speed: retrieval.typicalSeconds.toFixed(1).replace('.', ',') });
  }
  return '<div class="weak-tile heat-' + retrieval.step + '">'
    + '<div class="weak-times">' + a + ' × ' + b + '</div>'
    + '<div class="weak-divisions">' + factDivisions(fact).map(d => '<span>' + d + '</span>').join('') + '</div>'
    + '<div class="weak-detail">' + detail + '</div>'
    + '</div>';
}

export function weakFactsHtml(factStats, answers, s) {
  const weakest = weakestFacts(factStats, answers);
  if (weakest.length === 0) return '<div class="stats-empty">' + s.weakAllStrong + '</div>';
  return '<p class="weak-caption">' + s.weakCaption + '</p>'
    + '<div class="weak-list">' + weakest.map(f => tileHtml(f, s)).join('') + '</div>';
}
