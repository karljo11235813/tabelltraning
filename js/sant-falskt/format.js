// Små formateringshjälpare för klocka, poäng, försök och sparade omgångar.

export function formatClock(ms) {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function formatScore(n) {
  return n < 0 ? `−${-n}` : String(n);
}

// Siffrorna i resultatrutorna som syns under hela omgången.
export function scoreTiles(state) {
  return { score: formatScore(state.score), correct: String(state.correct), wrong: String(state.wrong) };
}

// Rubriken på poängrutan: lägets enhet med stor bokstav ("Poäng", "I rad").
export function scoreLabel(mode) {
  return mode.scoreUnit.charAt(0).toUpperCase() + mode.scoreUnit.slice(1);
}

const ORDINALS = ["", "första", "andra", "tredje", "fjärde", "femte", "sjätte", "sjunde", "åttonde", "nionde", "tionde"];

export function attemptLabel(n) {
  if (n <= 1) return "";
  return n < ORDINALS.length ? `Rätt på ${ORDINALS[n]} försöket` : `Rätt på försök ${n}`;
}

const TIME_UNITS = [
  { ms: 365 * 24 * 60 * 60 * 1000, one: "år", many: "år" },
  { ms: 30 * 24 * 60 * 60 * 1000, one: "månad", many: "månader" },
  { ms: 7 * 24 * 60 * 60 * 1000, one: "vecka", many: "veckor" },
  { ms: 24 * 60 * 60 * 1000, one: "dag", many: "dagar" },
  { ms: 60 * 60 * 1000, one: "timme", many: "timmar" },
  { ms: 60 * 1000, one: "minut", many: "minuter" },
];

// "för 3 dagar sedan": största hela enheten, avrundat nedåt. En tid i framtiden
// (om datorns klocka har ställts om) blir "nyss".
export function timeAgo(at, now) {
  const elapsed = now - at;
  for (const unit of TIME_UNITS) {
    const n = Math.floor(elapsed / unit.ms);
    if (n >= 1) return `för ${n} ${n === 1 ? unit.one : unit.many} sedan`;
  }
  return "nyss";
}

// Texterna för en sparad omgång (rekord eller senaste) i ett visst läge.
// Det som inte sparats, eller som läget inte visar, blir null.
export function runParts(run, now, mode) {
  return {
    score: `${formatScore(run.score)} ${mode.scoreUnit}`,
    correct: !mode.showCounts || run.correct === null ? null : `${run.correct} rätt`,
    wrong: !mode.showCounts || run.wrong === null ? null : `${run.wrong} fel`,
    when: run.at === null ? null : timeAgo(run.at, now),
  };
}
