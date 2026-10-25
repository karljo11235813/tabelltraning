// Nivåerna för Rätt i rad: hur lång svit läraren tycker är godtagbar, mer än godtagbar osv.
// Ändra siffrorna här. Varje nivå måste kräva fler i rad än den före.
// Namnen har mjuka bindestreck (­) så att långa ord kan delas i de smala rutorna.
export const STREAK_LEVELS = [
  { name: "God­tagbart", min: 10 },
  { name: "Mer än god­tagbart", min: 30 },
  { name: "Pro", min: 50 },
  { name: "God mode", min: 80 },
  { name: "Världs­rekord", min: 400 },
];

export function assessLevels(levels, score) {
  const reached = levels.map((l) => score >= l.min);
  return { reached, highest: reached.lastIndexOf(true) };
}

export function levelRequirement(level) {
  return `${level.min} i rad`;
}

export function levelHint(levels, score) {
  const next = levels.find((l) => score < l.min);
  if (!next) return "Du har nått högsta nivån!";
  return `Nästa: ${next.name} – ${next.min - score} till i rad.`;
}
