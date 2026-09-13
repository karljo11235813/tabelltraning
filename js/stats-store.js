// Per-fact statistics persistence: a permanent summary per fact
// (tabelltraning_fact_stats, never trimmed) plus a capped recent
// attempt log (tabelltraning_attempts, most recent 2000) used for
// mistake-pattern detail. All reads/writes fail silently if
// localStorage is unavailable.

const ATTEMPTS_CAP = 2000;

let factStats = {};
try {
  const parsed = JSON.parse(localStorage.getItem('tabelltraning_fact_stats') || '{}');
  factStats = (parsed && typeof parsed === 'object') ? parsed : {};
} catch (e) { /* localStorage unavailable — fall back to empty stats */ }

function saveFactStats() {
  try {
    localStorage.setItem('tabelltraning_fact_stats', JSON.stringify(factStats));
  } catch (e) { /* ignore */ }
}

let attemptsLog = [];
try {
  attemptsLog = JSON.parse(localStorage.getItem('tabelltraning_attempts') || '[]');
} catch (e) { /* localStorage unavailable — fall back to empty log */ }

function saveAttempts() {
  try {
    localStorage.setItem('tabelltraning_attempts', JSON.stringify(attemptsLog));
  } catch (e) { /* ignore */ }
}

export function getFactStats() {
  return factStats;
}

export function logAttempt(fact, given, correctAnswer, isCorrect, elapsedMs, mode) {
  if (!factStats[fact]) {
    factStats[fact] = { attempts: 0, correct: 0, wrong: 0, speedSum: 0, speedCount: 0, wrongAnswerCounts: {}, lastSeen: 0 };
  }
  const s = factStats[fact];
  s.attempts++;
  s.lastSeen = Date.now();
  if (isCorrect) {
    s.correct++;
    if (typeof elapsedMs === 'number') {
      s.speedSum += elapsedMs / 1000;
      s.speedCount++;
    }
  } else {
    s.wrong++;
    if (Number.isFinite(given)) {
      const key = String(given);
      s.wrongAnswerCounts[key] = (s.wrongAnswerCounts[key] || 0) + 1;
    }
  }
  saveFactStats();

  attemptsLog.push({ fact, given, answer: correctAnswer, correct: isCorrect, elapsedMs, mode, ts: Date.now() });
  if (attemptsLog.length > ATTEMPTS_CAP) attemptsLog = attemptsLog.slice(-ATTEMPTS_CAP);
  saveAttempts();
}

export function clearFactStats() {
  // Mutate in place (not reassign) so callers holding a reference from
  // getFactStats() keep seeing live data after a reset.
  Object.keys(factStats).forEach(k => delete factStats[k]);
  attemptsLog.length = 0;
  try {
    localStorage.removeItem('tabelltraning_fact_stats');
    localStorage.removeItem('tabelltraning_attempts');
  } catch (e) { /* ignore */ }
}
