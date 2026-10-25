// En övningsomgång: blandad kortlek, returhög för fel svar, poäng och historik.
// Ingen DOM här, så logiken kan testas i Node.

export function shuffle(items, rng) {
  const out = items.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function createSession({ statements, mode, rng = Math.random, now = () => Date.now() }) {
  const roundSize = statements.length;
  const startedAt = now();
  const history = [];
  let deck = [];
  let retries = []; // { statement, dueIn } — dueIn = hur många visningar kvar tills den kommer igen
  let roundPos = 0;
  let current = null;
  let answered = true;
  let shownAt = 0;
  let lastShownId = null;
  let correct = 0;
  let wrong = 0;
  let streak = 0;
  let skipsLeft = mode.skips || 0;
  const skipped = [];

  function refill() {
    deck = shuffle(statements, rng);
    if (deck.length > 1 && deck[0].id === lastShownId) [deck[0], deck[1]] = [deck[1], deck[0]];
    roundPos = 0;
  }

  function takeFromDeck(id) {
    const i = deck.findIndex((s) => s.id === id);
    if (i === -1) return;
    deck.splice(i, 1);
    roundPos += 1;
  }

  function draw() {
    for (const r of retries) r.dueIn -= 1;
    const due = retries.findIndex((r) => r.dueIn <= 0);
    if (due !== -1) {
      const [r] = retries.splice(due, 1);
      takeFromDeck(r.statement.id); // räknas som visad i omgången, så den inte dyker upp direkt igen
      return r.statement;
    }
    if (deck.length === 0) refill();
    const s = deck.shift();
    roundPos += 1;
    retries = retries.filter((r) => r.statement.id !== s.id); // kortleken tar över returen
    return s;
  }

  function state() {
    const s = {
      correct,
      wrong,
      answered: history.length,
      streak,
      elapsedMs: now() - startedAt,
      history: history.slice(),
      roundPos,
      roundSize,
      skipsLeft,
      skipped: skipped.slice(),
    };
    s.score = mode.score(s);
    return s;
  }

  return {
    next() {
      if (roundSize === 0 || mode.isOver(state())) {
        current = null;
        return null;
      }
      current = draw();
      answered = false;
      shownAt = now();
      lastShownId = current.id;
      return current;
    },
    answer(choice) {
      if (!current || answered) return null;
      answered = true;
      const isCorrect = choice === current.answer;
      history.push({ id: current.id, choice, correct: isCorrect, ms: now() - shownAt });
      if (isCorrect) {
        correct += 1;
        streak += 1;
      } else {
        wrong += 1;
        streak = 0;
        if (mode.retryWrong) retries.push({ statement: current, dueIn: 3 + Math.floor(rng() * 3) });
      }
      return { correct: isCorrect, correctAnswer: current.answer };
    },
    // Går förbi det visade påståendet utan att svara: inget rätt, inget fel, sviten fortsätter.
    // Bara så många gånger per omgång som läget tillåter (mode.skips).
    skip() {
      if (!current || answered || skipsLeft === 0) return false;
      answered = true;
      skipsLeft -= 1;
      skipped.push(current.id);
      return true;
    },
    pending() {
      return current && !answered ? current : null;
    },
    state,
  };
}
