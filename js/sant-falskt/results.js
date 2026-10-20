// Grupperar en omgångs historik per påstående för resultatskärmen.
// Det sista försöket avgör om påståendet räknas som rätt eller fel, och
// försöksnumret räknas från det senaste felet (rätt, rätt = första försöket).
export function summarize(history, byId, pending = null) {
  const groups = new Map();
  for (const entry of history) {
    if (!groups.has(entry.id)) groups.set(entry.id, []);
    groups.get(entry.id).push(entry);
  }

  const wrong = [];
  const correct = [];
  for (const [id, attempts] of groups) {
    const statement = byId.get(id);
    if (!statement) continue;
    const last = attempts[attempts.length - 1];
    const lastWrong = attempts.findLastIndex((a) => !a.correct);
    if (last.correct) correct.push({ statement, correctOnAttempt: lastWrong + 2, attempts: attempts.length });
    else wrong.push({ statement, choice: last.choice, attempts: attempts.length });
  }

  const unanswered = pending && !groups.has(pending.id) ? [{ statement: pending }] : [];
  return { wrong, correct, unanswered };
}
