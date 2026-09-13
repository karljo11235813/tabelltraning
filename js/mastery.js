// Per-fact mastery scoring: turns raw accuracy/speed into a
// gray/green/yellow/red bucket. Thresholds are tunable constants.

export const MASTERY_MIN_ATTEMPTS = 3; // below this: not enough signal to call it either way
const MASTERY_GOOD_ACCURACY = 0.85;
const MASTERY_OK_ACCURACY = 0.60;
const MASTERY_GOOD_SPEED = 4; // seconds, correct-only avg
const MASTERY_OK_SPEED = 6;
const MASTERY_YELLOW_MIN_ACCURACY = 0.4; // floor so a fast-but-mostly-wrong fact can't read as "building up"

export function factKey(a, b) {
  return Math.min(a, b) + 'x' + Math.max(a, b);
}

export function getMastery(stats) {
  if (!stats || stats.attempts === 0) return 'gray';
  if (stats.attempts < MASTERY_MIN_ATTEMPTS) return 'gray';
  const accuracy = stats.correct / stats.attempts;
  const avgSpeed = stats.speedCount > 0 ? stats.speedSum / stats.speedCount : null;
  if (accuracy >= MASTERY_GOOD_ACCURACY && (avgSpeed === null || avgSpeed <= MASTERY_GOOD_SPEED)) return 'green';
  if (accuracy >= MASTERY_OK_ACCURACY || (accuracy >= MASTERY_YELLOW_MIN_ACCURACY && avgSpeed !== null && avgSpeed <= MASTERY_OK_SPEED)) return 'yellow';
  return 'red';
}
