// Alla lägen. Startskärmen visar ett kort per läge i den här ordningen.
// Nytt läge = nytt objekt här; session.js och app.js behöver inte ändras.
// scoreUnit står efter poängen ("12 poäng", "12 i rad"), showCounts styr om Rätt och Fel
// visas, showProgress om ett otidsatt läge visar "12 / 496" i kortleken, skips hur många
// påståenden eleven får hoppa över per omgång, och levels (valfritt) gör att
// resultatskärmen bedömer poängen mot nivåerna.
import { STREAK_LEVELS } from "./levels.js";

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
    scoreUnit: "poäng",
    showCounts: true,
    showProgress: false,
    skips: 0,
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
    scoreUnit: "poäng",
    showCounts: true,
    showProgress: true,
    skips: 0,
  },
  {
    id: "streak",
    name: "Rätt i rad",
    description: "Ta din tid. Ett fel och sviten är slut.",
    timeLimitSec: null,
    retryWrong: false,
    feedback: "explain",
    // Omgången tar slut vid första felet, så alla rätt svar är i rad.
    score: (s) => s.correct,
    isOver: (s) => s.wrong > 0,
    overTitle: "Sviten är slut!",
    trackRecord: true,
    scoreUnit: "i rad",
    showCounts: false,
    showProgress: false,
    skips: 1,
    levels: STREAK_LEVELS,
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
