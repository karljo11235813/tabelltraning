// Går igenom en diagnos en skärm i taget och tar tid på varje skärm.
//
// createSession  håller reda på vilken skärm eleven är på och bygger resultatposten.
// formatTime     "m:ss" under en timme, annars "h:mm:ss".
//
// Klockan startar när sessionen skapas, och varje ny skärm startar när den förra lämnades.
// Sessionen vet inte vad en ruta betyder: ett svar räknas som överhoppat när alla värden är tomma.

// Ett andra tryck så här snart efter att skärmen visades är ett dubbeltryck, inte ett svar.
const DOUBLE_PRESS_MS = 300;

const isBlank = (value) => value == null || String(value).trim() === "";

export function createSession(diagnosis, now = () => Date.now()) {
  const screens = diagnosis.screens;
  const startedAt = now();
  const entries = [];
  let shownAt = startedAt;

  // Lägger till en post om trycket räknas. Returnerar true då, false vid dubbeltryck eller när allt är klart.
  // Går klockan bakåt (ändrad systemtid) ska sessionen inte fastna, och tiden blir aldrig negativ.
  function finish(answers, skipped) {
    if (entries.length >= screens.length) return false;
    const t = now();
    const ms = t - shownAt;
    if (ms >= 0 && ms < DOUBLE_PRESS_MS) return false;
    entries.push({ label: screens[entries.length].label, answers: { ...answers }, skipped, ms: Math.max(0, ms) });
    shownAt = t;
    return true;
  }

  return {
    get index() { return entries.length; },
    get total() { return screens.length; },
    get screen() { return screens[entries.length] ?? null; },
    get done() { return entries.length >= screens.length; },

    // Båda returnerar true när trycket räknades och false när det ignorerades.
    submit(answers) {
      const given = answers ?? {};
      return finish(given, Object.values(given).every(isBlank));
    },
    skip() {
      return finish({}, true);
    },

    run() {
      return {
        code: diagnosis.code,
        startedAt,
        totalMs: entries.reduce((sum, e) => sum + e.ms, 0),
        screens: entries.map((e) => ({ ...e, answers: { ...e.answers } })),
      };
    },
  };
}

export function formatTime(ms) {
  const total = Number.isFinite(ms) ? Math.max(0, Math.floor(ms / 1000)) : 0;
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = String(total % 60).padStart(2, "0");
  return hours > 0 ? `${hours}:${String(minutes).padStart(2, "0")}:${seconds}` : `${minutes}:${seconds}`;
}
