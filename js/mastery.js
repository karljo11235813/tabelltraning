// Per-fact mastery scoring. Every answer gets a score from right or wrong and
// its own time, and a fact's score is those scores with the latest answers
// weighing most. All thresholds are tunable constants.

export const MASTERY_MIN_ATTEMPTS = 3; // below this a fact is shown as preliminary
export const RECENT_ANSWERS = 10; // how many of a fact's latest answers count
export const HEAT_STEPS = 7;

const RECENCY_DECAY = 0.8; // an answer counts this much of the one after it
const NEUTRAL_SCORE = 0.5;
const NEUTRAL_WEIGHT = 0.75; // every fact starts here, so it takes a few answers to reach the ends of the scale
const FAST_SECONDS = 2.5; // a right answer this quick scores 1: about the Godtagbart pace, 25 in a minute
const SLOW_SECONDS = 10;
const SLOW_SCORE = 0.4; // a right answer this slow or slower, which still beats a wrong one
const SLOW_TYPICAL_SECONDS = 4; // above this a fact's typical time counts as slow
const STEP_FLOORS = [0.2, 0.36, 0.5, 0.64, 0.78, 0.89]; // lowest score of steps 2 to 7
const GREEN_FROM_STEP = 6;
const YELLOW_FROM_STEP = 3;

const NOT_PRACTISED = { score: null, step: 0, bucket: 'gray', thin: false, recentWrong: 0, typicalSeconds: null, diagnosis: null };

export function factKey(a, b) {
  return Math.min(a, b) + 'x' + Math.max(a, b);
}

// A multiplication and its divisions are one fact: every answer to 56 ÷ 7 and
// 56 ÷ 8 counts towards 7 × 8.
export function factDivisions(fact) {
  const [a, b] = fact.split('x').map(Number);
  const divisors = a === b ? [a] : [a, b];
  return divisors.map(divisor => a * b + ' ÷ ' + divisor);
}

export function mostCommonWrongAnswer(wrongAnswerCounts) {
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

// The score flattens out at SLOW_SECONDS, so a long pause counts as one slow
// answer and not as the minutes it took.
function speedScore(seconds) {
  const lateness = (seconds - FAST_SECONDS) / (SLOW_SECONDS - FAST_SECONDS);
  return 1 - (1 - SLOW_SCORE) * Math.min(1, Math.max(0, lateness));
}

export function answerScore({ correct, elapsedMs }) {
  return correct ? speedScore(elapsedMs / 1000) : 0;
}

function averageSeconds(stats) {
  return stats.speedCount > 0 ? stats.speedSum / stats.speedCount : null;
}

// The log only keeps the latest answers of all facts, so the lifetime summary
// stands in for a fact's older answers that have left it.
function recentScores(stats, recent) {
  const scores = recent.map(answerScore);
  const missing = Math.min(stats.attempts, RECENT_ANSWERS) - scores.length;
  if (missing <= 0) return scores;
  const seconds = averageSeconds(stats);
  const older = (stats.correct / stats.attempts) * (seconds === null ? 1 : speedScore(seconds));
  return [...Array(missing).fill(older), ...scores];
}

function weightedScore(scores) {
  let sum = NEUTRAL_SCORE * NEUTRAL_WEIGHT;
  let total = NEUTRAL_WEIGHT;
  let weight = 1;
  for (let i = scores.length - 1; i >= 0; i--) {
    sum += scores[i] * weight;
    total += weight;
    weight *= RECENCY_DECAY;
  }
  return sum / total;
}

function median(values) {
  const sorted = [...values].sort((x, y) => x - y);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

// The same colour can mean right but slow or quick but wrong, and they need
// different practice. This says which it is.
function diagnose(thin, recentWrong, typicalSeconds) {
  if (thin) return 'thin';
  const slow = typicalSeconds === null || typicalSeconds > SLOW_TYPICAL_SECONDS;
  if (recentWrong > 0) return slow ? 'weak' : 'shaky';
  return slow ? 'slow' : 'solid';
}

function bucketOf(step, thin) {
  if (thin) return 'gray';
  if (step >= GREEN_FROM_STEP) return 'green';
  return step >= YELLOW_FROM_STEP ? 'yellow' : 'red';
}

// stats is the fact's lifetime summary, answers its logged answers, oldest first.
export function getRetrieval(stats, answers = []) {
  if (!stats || stats.attempts === 0) return NOT_PRACTISED;
  const recent = answers.slice(-RECENT_ANSWERS);
  const score = weightedScore(recentScores(stats, recent));
  const step = 1 + STEP_FLOORS.filter(floor => score >= floor).length;
  const thin = stats.attempts < MASTERY_MIN_ATTEMPTS;
  const rightSeconds = recent.filter(a => a.correct).map(a => a.elapsedMs / 1000);
  const typicalSeconds = rightSeconds.length > 0 ? median(rightSeconds) : averageSeconds(stats);
  const recentWrong = recent.length > 0 ? recent.filter(a => !a.correct).length : stats.wrong;
  return {
    score,
    step,
    bucket: bucketOf(step, thin),
    thin,
    recentWrong,
    typicalSeconds,
    diagnosis: diagnose(thin, recentWrong, typicalSeconds),
  };
}
