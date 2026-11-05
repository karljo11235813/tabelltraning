// The student's weakest facts on the statistics screen, made to be read at a
// glance by someone leaning over the computer: the multiplication very big, and
// beside it the divisions that are counted together with it. Weakest first, and
// the edge of a tile has the fact's colour from the grid. Under them are always
// the slowest facts, also those that are right every time and those that already
// are among the weakest: a fact can be weak because of a misclick, while the time
// only counts right answers. Styles are the .weak- classes in styles.css.

import { fill } from './levels.js';
import { MASTERY_MIN_ATTEMPTS, factDivisions, getRetrieval, mostCommonWrongAnswer } from './mastery.js';
import { PRACTICE_FACTS } from './missed-practice.js';

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

const factsOf = (factStats, answers) => Object.keys(factStats)
  .map(fact => ({ fact, stats: factStats[fact], retrieval: getRetrieval(factStats[fact], answers[fact]) }));

const productOf = (fact) => fact.split('x').reduce((a, b) => a * b);

// Öva på dina svagaste (missed-practice.js): the top of the two lists on the page, so the
// practice is always what the student sees. The weakest in their order, then the slowest
// that aren't among them, up to PRACTICE_FACTS.
export function weakPracticeFacts(factStats, answers, n = PRACTICE_FACTS) {
  const facts = factsOf(factStats, answers);
  const weak = weakestOf(facts).slice(0, n);
  const slow = slowestOf(facts).filter(f => !weak.includes(f)).slice(0, n - weak.length);
  return {
    weak: weak.map(({ fact, stats }) => ({
      key: fact, answer: productOf(fact), wrong: stats.wrong, attempts: stats.attempts,
      mistake: mostCommonWrongAnswer(stats.wrongAnswerCounts || {}),
    })),
    slow: slow.map(({ fact, retrieval }) => ({
      key: fact, text: fact.split('x').join(' × ') + ' =', answer: productOf(fact), ms: retrieval.typicalSeconds * 1000,
    })),
    keys: [...weak, ...slow].map(f => f.fact),
  };
}

export function weakFactsHtml(factStats, answers, s) {
  const facts = factsOf(factStats, answers);
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
