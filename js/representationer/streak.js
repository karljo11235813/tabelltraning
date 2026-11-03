// Rätt i rad: nivåerna, de sparade omgångarna och statistiken över dem. Rent, utan DOM.
//
// STREAK_LEVELS     nivåerna; ändra siffrorna här. Varje nivå kräver fler i rad än den före.
// reachedLevel      index för den högsta nivån som sviten har nått, eller -1.
// nextLevelText     raden under sviten medan eleven spelar: hur många till nästa nivå.
// resultHint        raden under nivåerna på resultatskärmen.
// loadStreaks       omgångarna i den här webbläsaren, äldst först: { ts, streak }.
// saveStreak        lägger till en omgång; false om lagringen inte går.
// summarizeStreaks  antal, bäst, senaste och den nivå som minst hälften av de RECENT senaste omgångarna nådde.
//
// En svit hoppar mycket mer än ett 1-minutstest: den som har 90 % rätt kan få 4 i rad ena gången och 40 nästa av
// ren tur. Ett snitt med intervall som i tabellernas ruta (run-stats.js) skulle nästan alltid säga "ingen tydlig
// förändring", så här räknas i stället vilken nivå de flesta senaste omgångarna når.

// Mjuka bindestreck (­) så att de långa namnen kan delas i de smala rutorna. plainName tar bort dem.
export const STREAK_LEVELS = [
  { name: "Nästan god­tagbart", min: 10 },
  { name: "God­tagbart", min: 15 },
  { name: "Mer än god­tagbart", min: 30 },
  { name: "Pro", min: 50 },
];

export const RECENT = 10;
const KEY = "representationer.streakRuns";

export const plainName = (level) => level.name.replace(/­/g, "");

export function reachedLevel(streak, levels = STREAK_LEVELS) {
  return levels.findLastIndex((level) => streak >= level.min);
}

export function nextLevelText(streak, levels = STREAK_LEVELS) {
  const next = levels.find((level) => streak < level.min);
  if (!next) return `Du har nått ${plainName(levels.at(-1))}! Hur långt kommer du?`;
  return `${next.min - streak} kvar till ${plainName(next)}`;
}

export function resultHint(streak, levels = STREAK_LEVELS) {
  const next = levels.find((level) => streak < level.min);
  if (!next) return "Du nådde högsta nivån!";
  return `Nästa nivå: ${plainName(next)}, ${next.min} i rad.`;
}

const isRun = (run) => Boolean(run) && Number.isFinite(run.ts) && Number.isInteger(run.streak) && run.streak >= 0;

export function loadStreaks(store) {
  const saved = store.get(KEY);
  return Array.isArray(saved) ? saved.filter(isRun) : [];
}

export function saveStreak(store, run) {
  return store.set(KEY, [...loadStreaks(store), run]);
}

// typical är den högsta nivån som minst hälften av de senaste omgångarna nådde (-1: färre än hälften nådde den första).
// Det är nivån för medianen: "de flesta av dina omgångar når Godtagbart".
export function summarizeStreaks(runs, levels = STREAK_LEVELS) {
  if (runs.length === 0) return { count: 0, best: null, latest: null, recent: 0, typical: -1 };
  const streaks = runs.map((run) => run.streak);
  const recent = streaks.slice(-RECENT);
  const typical = levels.findLastIndex((level) => 2 * recent.filter((s) => s >= level.min).length >= recent.length);
  return { count: runs.length, best: Math.max(...streaks), latest: streaks.at(-1), recent: recent.length, typical };
}
