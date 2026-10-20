// Alla lägen. Startskärmen visar ett kort per läge i den här ordningen.
// Nytt läge = nytt objekt här; session.js och app.js behöver inte ändras.
export const MODES = [
  {
    id: "sprint",
    name: "Sprint 3 min",
    description: "Hur många hinner du på 3 minuter? Fel svar ger minuspoäng.",
    timeLimitSec: 180,
    retryWrong: false,
    feedback: "flash",
    score: (s) => s.correct - s.wrong,
    isOver: () => false,
    trackRecord: true,
  },
  {
    id: "practice",
    name: "Öva",
    description: "Öva i egen takt. Fel svar kommer tillbaka lite senare.",
    timeLimitSec: null,
    retryWrong: true,
    feedback: "explain",
    score: (s) => s.correct - s.wrong,
    isOver: () => false,
    trackRecord: false,
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
