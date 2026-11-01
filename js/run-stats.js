// Statistics for the 1-minute test's run history. Pure: numbers in, numbers out.
// The interval is a 95 % t-interval for the student's average over the last
// WINDOW runs, not a forecast of the next run: pooling every run would describe
// a level an improving student has already left. Runs in a row aren't fully
// independent (warm-up, tiredness), so the 95 % is a guide, not a precise claim.

export const WINDOW = 5;
const MIN_INTERVAL_RUNS = 3;
const MIN_GROUP = 3; // the verdict needs two groups of at least this many runs
const MIN_MARGIN = 1; // identical runs have no spread, but that isn't certainty

// Two-sided 95 % t-values by degrees of freedom: the only ones the windows can need.
const T_95 = { 2: 4.303, 3: 3.182, 4: 2.776, 6: 2.447, 8: 2.306 };

function mean(values) {
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

function variance(values) {
  const m = mean(values);
  return values.reduce((sum, v) => sum + (v - m) ** 2, 0) / (values.length - 1);
}

// values: at most WINDOW runs.
export function meanInterval(values) {
  const m = mean(values);
  if (values.length < MIN_INTERVAL_RUNS) return { mean: m, low: null, high: null };
  const margin = T_95[values.length - 1] * Math.sqrt(variance(values) / values.length);
  const wide = Math.max(MIN_MARGIN, margin);
  return { mean: m, low: Math.max(0, m - wide), high: m + wide };
}

// The latest runs against the same number of runs before them. It only leaves
// 'flat' when the whole interval for the gap is on one side of 0, so normal ups
// and downs don't read as a trend.
export function compareRecent(values) {
  if (values.length < MIN_GROUP * 2) return { kind: 'wait', needed: MIN_GROUP * 2 - values.length };
  const size = Math.min(WINDOW, Math.floor(values.length / 2));
  const recent = values.slice(-size);
  const earlier = values.slice(-2 * size, -size);
  const gap = mean(recent) - mean(earlier);
  const margin = Math.max(MIN_MARGIN, T_95[2 * size - 2] * Math.sqrt((variance(recent) + variance(earlier)) / size));
  const kind = gap - margin > 0 ? 'up' : gap + margin < 0 ? 'down' : 'flat';
  return { kind, gap, margin, size };
}

export function summarizeRuns(runs) {
  const right = runs.map(r => r.correct);
  const wrong = runs.map(r => r.wrong);
  const verdict = compareRecent(right);
  if (runs.length === 0) {
    return { count: 0, best: null, worst: null, level: null, wrongAverage: null, windowSize: 0, verdict, moreMistakes: false, rolling: [] };
  }
  const rolling = right.map((_, i) => meanInterval(right.slice(Math.max(0, i - WINDOW + 1), i + 1)));
  return {
    count: runs.length,
    best: Math.max(...right),
    worst: Math.min(...right),
    level: rolling[rolling.length - 1],
    wrongAverage: mean(wrong.slice(-WINDOW)),
    windowSize: Math.min(WINDOW, runs.length),
    verdict,
    moreMistakes: verdict.kind === 'up' && compareRecent(wrong).kind === 'up',
    rolling,
  };
}
