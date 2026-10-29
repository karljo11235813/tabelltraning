// Sparade resultat ligger i elevens egen webbläsare (localStorage via createStore), aldrig på en server.
//
// loadResults  alla sparade omgångar, nyaste först. Trasiga poster hoppas över.
// saveResult   lägger till en omgång. Returnerar false när lagringen inte går att skriva till.
//
// store är ett objekt från createStore i ../sant-falskt/storage.js, till exempel createStore(() => localStorage).

export const STORAGE_KEY = "diamant.results";

// Startsidan rättar varje sparad omgång, så en skärmpost utan etikett eller med fel fälttyper får inte komma igenom.
const isEntry = (e) =>
  e != null && typeof e === "object" && typeof e.label === "string" && typeof e.skipped === "boolean" && Number.isFinite(e.ms)
  && (e.answers === null || (typeof e.answers === "object" && !Array.isArray(e.answers)));

const isRun = (r) =>
  r != null && typeof r === "object" && typeof r.code === "string" && Number.isFinite(r.startedAt) && Number.isFinite(r.totalMs)
  && Array.isArray(r.screens) && r.screens.every(isEntry);

// Giltiga poster i den ordning de sparades (äldst först). Något som inte är en lista räknas som tomt.
function readValid(store) {
  const stored = store.get(STORAGE_KEY);
  return Array.isArray(stored) ? stored.filter(isRun) : [];
}

export function loadResults(store) {
  return readValid(store)
    .map((run, order) => ({ run, order }))
    // Lika starttid: den som sparades senast först.
    .sort((a, b) => b.run.startedAt - a.run.startedAt || b.order - a.order)
    .map((e) => e.run);
}

export function saveResult(store, run) {
  return store.set(STORAGE_KEY, [...readValid(store), run]);
}
