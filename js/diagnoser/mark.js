// Rättar rutor och skärmar i en diagnos och bygger resultatet som läraren läser.
//
// markBox     rätt, fel eller tomt för en ruta.
// copyOf      uppgiftens andra sida i en rad ("135/25" för "{135|25} = [a]"), som markBox räknar som avskrivet.
// errorNote   "Fel med 10" när heltalssvaret ligger nära det rätta och diagnosen vill ha anteckningen.
// markScreen  rättar en skärm ur en sessionspost { label, answers, skipped, ms }.
// scoreRun    rättar hela omgången och summerar kolumnerna på resultatblanketten.
//
// Allt räknas med exakta värden från value.js, aldrig flyttal.

import { rat, equals, isInteger } from "./value.js";
import { normalize, parseNumber, parseExpr, parseAnswer, stripDecoration } from "./parse.js";
import { markupToExpr } from "./markup.js";
import { checkCalculation } from "./calc.js";

// Värdet av ett facit: ett tal eller ett uttryck. null när det inte är något värde ("Saknar reell lösning").
const valueOf = (text) => parseNumber(text) ?? parseExpr(text);

// Eleven svarade en text eller null (inget placerat). Okända och saknade nycklar ger null.
const rawOf = (answers, id) => (answers && Object.hasOwn(answers, id) ? answers[id] : null);

const withoutParens = (s) => s.replace(/[()]/g, "");

// Det som står på andra sidan om = i en rad, i samma form som en normaliserad text utan parenteser:
// "{135|25} = [a]" ger "135/25" och "4 · 27 = [a]" ger "4·27". null när raden inte har ett enda =, rutan
// inte står på exakt en sida eller andra sidan har rutor.
export function copyOf(markup, id) {
  const sides = String(markup).split("=");
  if (sides.length !== 2) return null;
  const mine = `[${id}]`;
  const [left, right] = sides;
  const other = left.includes(mine) && !right.includes(mine) ? right : right.includes(mine) && !left.includes(mine) ? left : null;
  if (other === null) return null;
  try {
    return withoutParens(normalize(markupToExpr(other, {}))) || null;
  } catch {
    return null; // en ruta på andra sidan (markupToExpr kräver ett värde) eller trasig markering
  }
}

// copy är det som copyOf ger för rutans rad (eller null): att skriva av uppgiftens andra sida är inget svar.
export function markBox(box, raw, copy = null) {
  const given = parseAnswer(raw);
  if (given.kind === "empty") return "empty";

  const accept = box.accept ?? [];
  const typed = normalize(stripDecoration(raw)); // "3³." och "Svar: 3³" är 3³ också i en ruta med bestämd form
  if (accept.some((a) => normalize(a) === typed)) return "right";

  // "135 / 25" och "135/25 kr" är uppgiften 135/25 avskriven, hur parenteser, mellanslag och enhet än ser ut.
  if (copy !== null && [raw, given.text].some((t) => t != null && withoutParens(normalize(t)) === copy)) return "wrong";

  // "Saknar lösning" och rest gäller oavsett form: eleven får skriva orden och kvoten på sitt sätt.
  if (given.kind === "none") return accept.some((a) => parseAnswer(a).kind === "none") ? "right" : "wrong";
  if (given.kind === "rest") {
    const same = (a) => {
      const k = parseAnswer(a);
      return k.kind === "rest" && k.q === given.q && k.r === given.r;
    };
    return accept.some(same) ? "right" : "wrong";
  }

  // Bara värdeformen godtar ett annat skrivsätt: ett tal, inte ett uttryck, som är lika stort som facit.
  if (box.form === "exact" || given.kind !== "number" || accept.length === 0) return "wrong";
  const expected = valueOf(accept[0]);
  if (!expected) return "wrong";
  // Ett skrivet bråk (69/3) är en avskriven division när facit är ett heltal: svaret är 23, inte uppgiften.
  // Är facit ett bråk (1/25) godtas 2/50, och står bråket i accept godtogs det redan ovan.
  if (given.fraction && isInteger(expected)) return "wrong";
  return equals(given.value, expected) ? "right" : "wrong";
}

// Heltalsvärdet av ett svar, eller null.
function integerOf(text) {
  const given = parseAnswer(text);
  return given.kind === "number" && isInteger(given.value) ? given.value.n : null;
}

export function errorNote(diagnosis, box, raw) {
  const notes = diagnosis.notes ?? [];
  if (notes.length === 0) return null;
  const given = integerOf(raw);
  const expected = valueOf(box.accept?.[0] ?? "");
  if (given === null || !expected || !isInteger(expected)) return null;

  const d = given > expected.n ? given - expected.n : expected.n - given;
  if (d === 0n) return null;
  const n = Number(d);
  if (notes.includes(n)) return `Fel med ${d}`;
  if (notes.includes("faktor") && (box.factors ?? []).includes(n)) return `Fel med ${d} (en faktor)`;
  return null;
}

// Rättar en uppsättning rutor, ett id i taget. Ger antal rätt och de som är fel. rows är skärmens rader
// (en skärm utan rader, som en textuppgift med bara Svar, har ingen uppgift att skriva av).
function markBoxes(diagnosis, boxes, answers, rows = []) {
  let right = 0;
  const wrong = [];
  for (const [id, box] of Object.entries(boxes)) {
    const raw = rawOf(answers, id);
    const row = rows.find((r) => r.includes(`[${id}]`));
    if (markBox(box, raw, row === undefined ? null : copyOf(row, id)) === "right") right++;
    else wrong.push({ id, given: raw ?? "", expected: box.accept[0], note: errorNote(diagnosis, box, raw) });
  }
  return { right, wrong };
}

// Värdet som räkningen i en textuppgift ska visa som svar. Ett svar med rest ("7 rest 1") är kvoten.
function wordAnswerValue(accept0) {
  const given = parseAnswer(accept0);
  if (given.kind === "rest") return rat(given.q);
  return given.kind === "number" ? given.value : null;
}

function markWord(screen, answers) {
  const box = { accept: screen.accept };
  const answer = rawOf(answers, "answer");
  const calc = rawOf(answers, "calc");
  const answerRight = markBox(box, answer) === "right";
  const value = wordAnswerValue(screen.accept[0]);
  const calcRight = answerRight && value !== null
    && checkCalculation(calc, { numbers: screen.numbers, answer: value, wholeQuotient: screen.wholeQuotient ?? false });
  const mark = answerRight ? (calcRight ? "right" : "s") : "wrong";
  const wrong = answerRight ? [] : [{ id: "answer", given: answer ?? "", expected: screen.accept[0], note: null }];
  return { mark, right: mark === "right" ? 1 : 0, s: mark === "s" ? 1 : 0, wrong, calc };
}

// Rutorna på en skärm: en ruta per box, eller en ruta per bokstav på tallinjen (godtar bokstavens värde).
function boxesOf(screen) {
  if (screen.kind === "place" || screen.kind === "read") {
    const values = screen.kind === "place" ? screen.letters : screen.marks;
    return Object.fromEntries(Object.entries(values).map(([x, v]) => [x, { accept: [v] }]));
  }
  return screen.boxes ?? {};
}

// "one": hela skärmen är en kolumn, allt rätt eller inget. Textuppgifter, placera och läsa av är aldrig "one".
const isOneColumn = (screen) => screen.kind === undefined && screen.points === "one";

// Antal kolumner på resultatblanketten som skärmen ger.
function columnsOf(screen) {
  if (screen.kind === "word" || isOneColumn(screen)) return 1;
  return Object.keys(boxesOf(screen)).length;
}

// answers är elevens svar som de skrevs (en kopia), så att resultatskärmen kan visa dem också för rutor som blev rätt.
export function markScreen(diagnosis, screen, entry) {
  const result = { label: screen.label, ms: entry.ms ?? 0, mark: "skipped", right: 0, total: columnsOf(screen), s: 0, wrong: [], calc: null, answers: { ...(entry.answers ?? {}) } };
  if (entry.skipped) return result;

  if (screen.kind === "word") return { ...result, ...markWord(screen, entry.answers) };

  const { right, wrong } = markBoxes(diagnosis, boxesOf(screen), entry.answers, screen.rows);
  const all = wrong.length === 0;
  return { ...result, mark: all ? "right" : "wrong", right: isOneColumn(screen) ? Number(all) : right, wrong };
}

export function scoreRun(diagnosis, run) {
  const entries = run.screens ?? [];
  const screens = diagnosis.screens.map((screen) => {
    const found = entries.find((e) => e.label === screen.label);
    return markScreen(diagnosis, screen, found ?? { label: screen.label, answers: {}, skipped: true, ms: 0 });
  });
  const sum = (key) => screens.reduce((acc, s) => acc + s[key], 0);
  return {
    code: diagnosis.code,
    title: diagnosis.title,
    time: diagnosis.time,
    startedAt: run.startedAt,
    totalMs: run.totalMs,
    right: sum("right"),
    total: sum("total"),
    s: sum("s"),
    screens,
  };
}
