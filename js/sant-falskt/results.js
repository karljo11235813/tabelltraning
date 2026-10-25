// Grupperar en omgångs historik per påstående för resultatskärmen.
// Det sista försöket avgör om påståendet räknas som rätt eller fel, och
// försöksnumret räknas från det senaste felet (rätt, rätt = första försöket).
// Överhoppade påståenden räknas bara om de inte besvarades senare i omgången.
export function summarize(history, byId, pending = null, skippedIds = []) {
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
  const skipped = skippedIds.filter((id) => !groups.has(id) && byId.has(id)).map((id) => ({ statement: byId.get(id) }));
  return { wrong, correct, unanswered, skipped };
}
