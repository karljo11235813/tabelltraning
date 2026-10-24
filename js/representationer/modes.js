// Alla lägen. Startskärmen visar ett kort per läge i den här ordningen.
export const MODES = [
  {
    id: "sprint",
    name: "Sprint 3 min",
    description: "Hur många hinner du på 3 minuter? Fel svar ger minuspoäng.",
    timeLimitSec: 180,
    retryWrong: false,
    feedback: "flash",
    score: (s) => s.correct - s.wrong,
    isOver: (s) => s.elapsedMs >= 180 * 1000,
    trackRecord: true,
  },
  {
    id: "practice",
    name: "Öva",
    description: "Ingen tid. Efter varje svar ser du talet i alla former, och fel svar kommer tillbaka i ny form.",
    timeLimitSec: null,
    retryWrong: true,
    feedback: "card",
    score: (s) => s.correct - s.wrong,
    isOver: () => false,
    trackRecord: false,
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
