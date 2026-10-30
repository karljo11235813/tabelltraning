// Sidans rena hjälpfunktioner: allt här går att köra i node, utan `document`.
//
// storageWorks  går det att skriva till elevens lagring? (false i ett privat fönster)
// formatStamp   "28 okt 14:05" för en sparad omgång.
// savedList     de sparade omgångarna som listrader, nyaste först; en kod utan data och en omgång som inte går att rätta
//               (ett datafel) visas inte, så att resten av listan ändå kommer fram.
// ignoresEnter  ska ett Enter ignoreras? Ett nedhållet Enter, eller ett andra tryck strax efter att en skärm visades.
// ignoresHeldEnter  ska ett nedhållet Enter på knapparna under skärmen ignoreras? Ja.
// ignoresResultTap  ska ett klick på resultatskärmens knappar ignoreras? Ja strax efter att skärmen visades.
// searchDiagnoses  koderna som passar listans sökruta, i listans ordning.
// filterText    raden som visar att listan är filtrerad ("Filtrerat på ”rd”: 6 av 108 diagnoser"), eller null utan sökning.

import { scoreRun } from "./mark.js";

// En egen nyckel, så att provet aldrig rör sparade resultat.
export const PROBE_KEY = "diamant.probe";

const MONTHS = ["jan", "feb", "mars", "apr", "maj", "juni", "juli", "aug", "sep", "okt", "nov", "dec"];

// Skriver ett litet värde och läser tillbaka det. createStore sväljer fel, så ett blockerat fönster
// ger false här i stället för ett undantag.
export function storageWorks(store) {
  const probe = Date.now();
  return store.set(PROBE_KEY, probe) === true && store.get(PROBE_KEY) === probe;
}

const two = (n) => String(n).padStart(2, "0");

// Webbläsarens lokala tid, så att läraren ser klockslaget på sin egen klocka.
export function formatStamp(ms) {
  if (!Number.isFinite(ms)) return "";
  const d = new Date(ms);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${two(d.getHours())}:${two(d.getMinutes())}`;
}

// Rättar en omgång, eller null när rättningen kastar: ett datafel i en diagnos ska aldrig stoppa startsidan.
export function safeScore(diagnosis, run) {
  try {
    return scoreRun(diagnosis, run);
  } catch {
    return null;
  }
}

// runs är redan nyaste först (loadResults). getDiagnosis ger undefined för en kod som inte finns längre.
export function savedList(runs, getDiagnosis) {
  const items = [];
  for (const run of runs) {
    const diagnosis = getDiagnosis(run.code);
    if (!diagnosis) continue;
    const scored = safeScore(diagnosis, run);
    if (scored === null) continue;
    items.push({ run, diagnosis, scored, text: `${run.code} · ${formatStamp(run.startedAt)} · Rätt ${scored.right} av ${scored.total}` });
  }
  return items;
}

// Listans märke vid varje diagnos: det senaste resultatet, så att eleven ser vad hon redan gjort och hur det gick.
// items är savedList, nyaste först, så det första per kod är det senaste. Diagnoser som inte gjorts saknas.
export function latestByCode(items) {
  const latest = new Map();
  for (const { run, scored } of items) {
    if (!latest.has(run.code)) latest.set(run.code, { right: scored.right, total: scored.total });
  }
  return latest;
}

// Märkets färg: grön från 90 % rätt, orange från 60 %, annars röd. Räknas i heltal, så att 9 av 10 är precis 90 %.
// Samma poäng som resultatskärmen: S räknas inte som rätt och pappersuppgifter ingår inte. Utan rättade delar ingen färg.
export function scoreLevel(right, total) {
  if (!(total > 0)) return null;
  if (right * 10 >= total * 9) return "green";
  if (right * 10 >= total * 6) return "orange";
  return "red";
}

// Samma gräns som sessionens dubbeltryck (session.js): ett Enter så här snart efter att skärmen visades hör till
// förra skärmen. Sessionen ignorerar då själva svaret, men utan det här flyttar Enter ändå fokus mellan rutorna
// på den nya skärmen. Ett nedhållet Enter börjar upprepas först efter en halv sekund, så det fångas av repeat.
export const ENTER_GUARD_MS = 300;

export function ignoresEnter({ repeat, shownAt, now }) {
  return repeat === true || now - shownAt < ENTER_GUARD_MS;
}

// Knapparna under skärmen (Nästa, Klar, Hoppa över): ett nedhållet Enter (repeat) är inget nytt tryck och ska inte
// klicka knappen igen. Sessionens egen gräns räcker inte, eftersom repeat börjar först efter en halv sekund.
export function ignoresHeldEnter({ key, repeat }) {
  return key === "Enter" && repeat === true;
}

// Dubbelklicket på sista "Nästa" ger ett andra klick med några hundra millisekunder emellan. Det träffar den nya
// resultatskärmen, och där ligger "Visa rätt svar" eller "Till listan" på samma plats som "Nästa". Knapparna där
// ignoreras därför en stund efter att skärmen visades. Längre än sessionens dubbeltryck (300 ms): ett dubbelklick
// är ofta nära 400 ms, och att vänta lite längre kostar ingenting eftersom läraren ändå läser först.
export const RESULT_GUARD_MS = 400;

export function ignoresResultTap({ shownAt, now }) {
  return now - shownAt < RESULT_GUARD_MS;
}

// Gemena och utan accenter, så att "brak" hittar "Bråk" och "rd6" hittar "RD6".
const fold = (s) => s.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

// Sökningen delas i ord. Ett ord som är en kod ("rd6") eller kodernas bokstäver ("rd", "au", minst två) väljer de
// koderna, och flera sådana ord lägger ihop dem ("ag1 as3"). En hel kod väljer bara sig själv: "as1" ger inte AS10.
// Alla andra ord ska finnas i diagnosens kod, titel, delområde eller område ("skriftlig division"). Tom sökning ger alla.
export function searchDiagnoses(diagnoses, query) {
  const codes = diagnoses.map((d) => fold(d.code));
  const isCode = (word) => codes.includes(word);
  const isPrefix = (word) => /^\p{L}{2,}$/u.test(word) && codes.some((code) => code.startsWith(word));
  const words = fold(query).split(/[\s,;]+/).filter(Boolean);
  const picks = words.filter((word) => isCode(word) || isPrefix(word));
  const terms = words.filter((word) => !picks.includes(word));
  return diagnoses
    .filter((d) => {
      const code = fold(d.code);
      const text = fold(`${d.code} ${d.title} ${d.sub} ${d.area}`);
      const picked = picks.length === 0 || picks.some((word) => (isCode(word) ? code === word : code.startsWith(word)));
      return picked && terms.every((term) => text.includes(term));
    })
    .map((d) => d.code);
}

// Listan är filtrerad när sökrutan har något annat än mellanslag. Sökordet står som eleven skrev det.
export function filterText(query, count, total) {
  const q = String(query ?? "").trim();
  if (q === "") return null;
  return `Filtrerat på ”${q}”: ${count} av ${total} diagnoser`;
}
