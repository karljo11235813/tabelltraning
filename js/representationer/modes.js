// Alla lägen. Startskärmen visar ett kort per läge i den här ordningen.
import { STREAK_LEVELS } from "./streak.js";

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
  {
    id: "streak",
    name: "Rätt i rad",
    description: "Ingen tid. Ett fel och sviten är slut. Hur långt kommer du?",
    timeLimitSec: null,
    retryWrong: false,
    feedback: "flash", // ett rätt svar blinkar och nästa fråga kommer direkt
    wrongFeedback: "card", // felet visar rätt svar i alla former innan resultatet
    // Omgången tar slut vid första felet, så alla rätt svar är i rad.
    score: (s) => s.correct,
    isOver: (s) => s.wrong > 0,
    trackRecord: false, // rekordet är bästa omgången i streak.js, inte sprintens rekord
    levels: STREAK_LEVELS,
  },
];

export function getMode(id) {
  return MODES.find((m) => m.id === id);
}
