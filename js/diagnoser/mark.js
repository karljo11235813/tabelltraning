// Rättar rutor och skärmar i en diagnos och bygger resultatet som läraren läser.
//
// markBox     rätt, fel eller tomt för en ruta.
// copyOf      det eleven kan skriva av ur uppgiften: varje sida utan ruta i en rad med = ("135/25" för
//             "{135|25} = [a]"), med ett blandat tal både som uttryck ("2+2/3") och som det skrivs ("2 2/3").
//             markBox räknar det som avskrivet, inte som svar.
// errorNote   "Fel med 10" när heltalssvaret ligger nära det rätta och diagnosen vill ha anteckningen.
// markScreen  rättar en skärm ur en sessionspost { label, answers, skipped, ms }. Förutom rutor, textuppgifter och
//             tallinjer finns val: choose (ett alternativ, svaret { choice: id }) och pick (markera allt som stämmer,
//             svaret { <id>: "1" | "" }), pappersuppgifter (paper, svaret { done: "1" }) som inte rättas, skuggning
//             (shade, svaret { pieces: "0,3" }, rätt när delarnas vikter ger målbråket) och punkter i ett
//             koordinatsystem (plot, svaret { points: "1,10;2,20" }).
// scoreRun    rättar hela omgången och summerar kolumnerna på resultatblanketten. Pappersuppgifterna räknas inte
//             i right/total; scored.paper är antalet som eleven markerade Klar på (läraren ska se dem).
//
// Allt räknas med exakta värden från value.js, aldrig flyttal.

import { rat, mul, equals, compare, isInteger } from "./value.js";
import { normalize, parseNumber, parseExpr, parseFractionWord, parseFractionParts, parseAnswer, stripDecoration } from "./parse.js";
import { markupToExpr } from "./markup.js";
import { checkCalculation } from "./calc.js";
import { isShadeRight } from "./figures.js";
import { isPlotRight, pointsText } from "./graph.js";

// Värdet av ett facit: ett tal, ett uttryck eller ett bråkord ("två femtedelar"). null när det inte är något
// värde ("Saknar reell lösning").
const valueOf = (text) => parseNumber(text) ?? parseExpr(text) ?? parseFractionWord(text);

// Ett exakt tal ur datan (en enhetsfaktor eller en gräns i ett intervall): en sträng ("1/10", "0,5"), ett heltal
// eller ett decimaltal. Ett JS-tal läses från sin decimalskrivning (0.1 blir 1/10, inte ett flyttal). Ett flyttal med
// många siffror är en avrundad bråkdel (1/3 blir 0.3333333333333333) och kastar: skriv den som sträng ("1/3").
// Ogiltig data kastar, så att den syns direkt.
export function exactOf(x) {
  const v = typeof x === "number" && String(x).replace(/\D/g, "").length > 10 ? null : parseNumber(String(x));
  if (v === null) throw new TypeError(`Inget exakt tal i datan (skriv bråk som sträng): ${x}`);
  return v;
}

// Som exactOf, men null i stället för ett undantag: rättningen får aldrig kasta på en felskriven faktor eller gräns i
// datan (det skulle stoppa startsidan, som rättar varje sparad omgång). Då räknas svaret som fel, och
// data.test.js kontrollerar att alla faktorer och gränser går att läsa.
function tryExact(x) {
  try {
    return exactOf(x);
  } catch {
    return null;
  }
}

// Eleven svarade en text eller null (inget placerat). Okända och saknade nycklar ger null.
const rawOf = (answers, id) => (answers && Object.hasOwn(answers, id) ? answers[id] : null);

const withoutParens = (s) => s.replace(/[()]/g, "");

// Det eleven kan skriva av ur en rad: varje sida utan ruta, i samma form som en normaliserad text utan parenteser.
// "{135|25} = [a]" ger ["135/25"] och "4 · 27 = [a]" ger ["4·27"]. Ett blandat tal ger två former: uttrycket
// ("2+2/3") och det som eleven skriver ("2 2/3"). I en kedja (a = b = [c]) är varje sida utan ruta en avskrift.
// null när raden inte har något =, rutan inte står på exakt en sida eller ingen annan sida är fri från rutor.
export function copyOf(markup, id) {
  const sides = String(markup).split("=");
  if (sides.length < 2) return null;
  const mine = `[${id}]`;
  if (sides.filter((side) => side.includes(mine)).length !== 1) return null;
  const forms = sides.filter((side) => !side.includes(mine)).flatMap(copyForms);
  return forms.length === 0 ? null : forms;
}

// Formerna för en sida, eller inga när den har en ruta eller trasig markering.
function copyForms(side) {
  try {
    // {h|t|n} skrivs "h t/n" när eleven skriver talet för hand.
    const written = side.replace(/\{(\d+)\|(\d+)\|(\d+)\}/g, "$1 $2/$3");
    const forms = [markupToExpr(side, {}), ...(written === side ? [] : [markupToExpr(written, {})])];
    return forms.map((form) => withoutParens(normalize(form))).filter((form) => form !== "");
  } catch {
    return []; // en ruta på sidan (markupToExpr kräver ett värde) eller trasig markering
  }
}

// Nämnaren n när rutan är hela täljaren över en tryckt nämnare i sin rad ("{[a]|10}" ger 10n), annars null. En ruta
// i en blandad term ("{[h]|1|3}") eller över en annan ruta är ingen sådan täljare.
export function numeratorOver(markup, id) {
  const m = String(markup).match(new RegExp(`\\{\\[${id}\\]\\|(\\d+)\\}`)); // ett id är bara bokstäver
  return m === null ? null : BigInt(m[1]);
}

// copy är det som copyOf ger för rutans rad (en lista, en enstaka text eller null): att skriva av uppgiften är inget
// svar. over är nämnaren som numeratorOver ger: i en täljarruta räknas ett bråk eller bråkord med just den nämnaren
// ("4/10", "4 tiondelar") som sin täljare, eftersom nämnaren redan står där. Formen frågas efter: 2/5 och 0,4 är fel.
export function markBox(box, raw, copy = null, over = null) {
  const given = parseAnswer(raw);
  if (given.kind === "empty") return "empty";

  const accept = box.accept ?? [];
  const typed = normalize(stripDecoration(raw)); // "3³." och "Svar: 3³" är 3³ också i en ruta med bestämd form
  if (accept.some((a) => normalize(a) === typed)) return "right";

  // "135 / 25" och "135/25 kr" är uppgiften 135/25 avskriven, hur parenteser, mellanslag och enhet än ser ut.
  const copies = [copy ?? []].flat();
  if (copies.some((c) => [raw, given.text].some((t) => t != null && withoutParens(normalize(t)) === c))) return "wrong";

  // "Saknar lösning" och rest gäller oavsett form: eleven får skriva orden och kvoten på sitt sätt.
  if (given.kind === "none") return accept.some((a) => parseAnswer(a).kind === "none") ? "right" : "wrong";
  if (given.kind === "rest") {
    const same = (a) => {
      const k = parseAnswer(a);
      return k.kind === "rest" && k.q === given.q && k.r === given.r;
    };
    return accept.some(same) ? "right" : "wrong";
  }

  // Procent och promille är aldrig bara utsmyckning: "25 %" är inte 25 om rutan inte säger att % hör till svaret.
  if (given.kind === "number" && isPercentUnit(given) && unitKey(box, given) === undefined) return "wrong";

  // Ett intervall och ett uttryck godtar flera svar. accept[0] är bara facits exempel.
  if (over !== null && box.form !== "exact" && !box.range && !box.expression) {
    const parts = parseFractionParts(raw);
    if (parts !== null && parts.den === over) return accept.some((a) => equalsNumerator(parts.num, a)) ? "right" : "wrong";
  }
  if (box.range) return markRange(box.range, given);
  if (box.expression) return markExpression(box, raw);

  // Bara värdeformen godtar ett annat skrivsätt: ett tal, inte ett uttryck, som är lika stort som något av facits svar.
  if (box.form === "exact" || given.kind !== "number" || accept.length === 0) return "wrong";
  const unit = inMainUnit(box, given);
  if (unit === null) return "wrong"; // en felskriven faktor i datan: aldrig ett undantag
  return accept.some((a) => equalsFacit(unit, a, given)) ? "right" : "wrong";
}

// Är täljaren eleven skrev i en täljarruta lika stor som ett facitsvar?
function equalsNumerator(num, facit) {
  const expected = valueOf(facit);
  return expected !== null && equals(rat(num), expected);
}

// Är det eleven skrev lika stort som ett facitsvar? Ett svar i accept som inte är ett värde ("Saknar lösning",
// "5 rest 10") räknas inte här.
function equalsFacit({ value, converted }, facit, given) {
  const expected = valueOf(facit);
  if (!expected) return false;
  // Ett skrivet bråk (69/3) är en avskriven division när facit är ett heltal: svaret är 23, inte uppgiften.
  // Är facit ett bråk (1/25) godtas 2/50, och står bråket i accept godtogs det redan ovan. Efter en omräkning mellan
  // enheter gäller skyddet inte: "en halv liter" och "8/5 liter" är 500 ml och 16 dl, inga avskrivna divisioner.
  if (!converted && given.fraction && isInteger(expected)) return false;
  return equals(value, expected);
}

const PERCENT_UNITS = new Set(["%", "‰", "procent", "promille"]);

// Enheten som står efter talet, hela eller första ordet ("procent" i "5 procent av priset").
const unitWords = (given) => (given.unit === null ? [] : [given.unit, given.unit.split(" ")[0]]);
const isPercentUnit = (given) => unitWords(given).some((u) => PERCENT_UNITS.has(u));

// Nyckeln i box.units som svarets enhet matchar (utan hänsyn till gemener och versaler; hela enheten före första
// ordet), eller undefined.
function unitKey(box, given) {
  if (!box.units) return undefined;
  const keys = new Map(Object.keys(box.units).map((unit) => [unit.toLowerCase(), unit]));
  const found = unitWords(given).find((u) => keys.has(u));
  return found === undefined ? undefined : keys.get(found);
}

// Talet i rutans huvudenhet: { value, converted }. Utan units, utan enhet efter talet eller med en enhet som inte står i
// units är det talet som skrevs; annars räknas det om med faktorn, som gäller mot talet i accept[0]: 0,8 kg · 1000 =
// 800 g. converted är sant när faktorn inte är 1 (gram till gram är ingen omräkning). null när faktorn i datan inte går
// att läsa.
function inMainUnit(box, given) {
  const key = unitKey(box, given);
  if (key === undefined) return { value: given.value, converted: false };
  const factor = tryExact(box.units[key]);
  if (factor === null) return null;
  return { value: mul(given.value, factor), converted: !equals(factor, rat(1n)) };
}

// Antal decimaler som skrevs ("8,30" har två), eller null när texten inte är ett heltal eller decimaltal.
function typedDecimals(text) {
  const m = normalize(text).match(/^-?\d+(?:,(\d+))?$/);
  return m === null ? null : (m[1] ?? "").length;
}

// Ett intervall { gt | ge, lt | le, decimals? }: ett vanligt tal (inte ett uttryck) i intervallet och, med decimals,
// skrivet med precis så många decimaler. Jämförelsen är exakt.
function markRange(range, given) {
  if (given.kind !== "number") return "wrong";
  const inside = [
    ["gt", (c) => c > 0], ["ge", (c) => c >= 0], ["lt", (c) => c < 0], ["le", (c) => c <= 0],
  ].every(([bound, ok]) => {
    if (range[bound] === undefined) return true;
    const limit = tryExact(range[bound]); // en felskriven gräns i datan ger fel svar, aldrig ett undantag
    return limit !== null && ok(compare(given.value, limit));
  });
  if (!inside) return "wrong";
  return range.decimals === undefined || typedDecimals(given.text) === range.decimals ? "right" : "wrong";
}

// Ett uttryck (RP6 5, 6): något med ett räknesätt i, inte ett färdigt tal, som är exakt lika stort som facits
// uttryck. Ett tal som 140 eller 280/2 är ingen uppställning. Eleven får skriva "uttryck = värde" ("250·0,8·0,7 = 140"):
// varje sida ska då vara lika stor som facit och första sidan ska vara uttrycket, inte ett färdigt tal ("140 = 250·0,56"
// är fel: det första eleven skrev var svaret, inte uppställningen).
function markExpression(box, raw) {
  const expected = valueOf(box.accept?.[0] ?? "");
  if (expected === null) return "wrong";
  const sides = stripDecoration(raw).split("=");
  if (parseNumber(sides[0]) !== null) return "wrong";
  const same = (side) => {
    const value = parseExpr(side);
    return value !== null && equals(value, expected);
  };
  return sides.every(same) ? "right" : "wrong";
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
    const marked = row === undefined ? markBox(box, raw) : markBox(box, raw, copyOf(row, id), numeratorOver(row, id));
    if (marked === "right") right++;
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

// Antal kolumner på resultatblanketten som skärmen ger. Ett val (choose), en skuggning (shade) och en plot är en
// kolumn; pick ger en kolumn per alternativ ("each") eller en för hela skärmen ("one"). En pappersuppgift ger ingen.
function columnsOf(screen) {
  if (screen.kind === "paper") return 0;
  if (screen.kind === "choose" || screen.kind === "shade" || screen.kind === "plot") return 1;
  if (screen.kind === "pick") return screen.points === "one" ? 1 : screen.items.length;
  if (screen.kind === "word" || isOneColumn(screen)) return 1;
  return Object.keys(boxesOf(screen)).length;
}

// choose: rätt när det valda alternativets id är facits. Inget valt (Nästa utan val) är fel, som en tom ruta.
function markChoose(screen, answers) {
  const chosen = rawOf(answers, "choice") ?? "";
  const right = chosen === screen.accept;
  return { mark: right ? "right" : "wrong", right: Number(right), wrong: right ? [] : [{ id: "choice", given: chosen, expected: screen.accept, note: null }] };
}

// shade: de skuggade delarnas vikter ska ge målbråket (D7), vilka delar det än är. Inget skuggat är fel. expected är
// målbråket; vilka delar facit skuggar söks först när resultatet ritas (shadeFacit).
function markShade(screen, answers) {
  const given = rawOf(answers, "pieces") ?? "";
  const right = isShadeRight(screen.figure, screen.target, given);
  return { mark: right ? "right" : "wrong", right: Number(right), wrong: right ? [] : [{ id: "pieces", given, expected: screen.target, note: null }] };
}

// plot: de utsatta punkterna är precis de som ska vara med; origo (optional) får vara med eller saknas (D9).
function markPlot(screen, answers) {
  const given = rawOf(answers, "points") ?? "";
  const right = isPlotRight(screen, given);
  return { mark: right ? "right" : "wrong", right: Number(right), wrong: right ? [] : [{ id: "points", given, expected: pointsText(screen.points), note: null }] };
}

// pick: ett alternativ som inte är markerat är "Nej", inte överhoppat (bara Hoppa över hoppar över skärmen). "each"
// ger en poäng per alternativ som är rätt: markerat precis när det står i accept. "one" ger en poäng när hela
// uppsättningen markerade är facits.
function markPick(screen, answers) {
  const accepted = new Set(screen.accept);
  let right = 0;
  const wrong = [];
  for (const item of screen.items) {
    const selected = rawOf(answers, item.id) === "1";
    if (selected === accepted.has(item.id)) right++;
    else wrong.push({ id: item.id, given: selected ? "1" : "", expected: accepted.has(item.id) ? "1" : "", note: null });
  }
  const all = wrong.length === 0;
  return { mark: all ? "right" : "wrong", right: screen.points === "one" ? Number(all) : right, wrong };
}

// answers är elevens svar som de skrevs (en kopia), så att resultatskärmen kan visa dem också för rutor som blev rätt.
export function markScreen(diagnosis, screen, entry) {
  const result = { label: screen.label, ms: entry.ms ?? 0, mark: "skipped", right: 0, total: columnsOf(screen), s: 0, wrong: [], calc: null, answers: { ...(entry.answers ?? {}) } };
  if (entry.skipped) return result;

  if (screen.kind === "word") return { ...result, ...markWord(screen, entry.answers) };
  if (screen.kind === "choose") return { ...result, ...markChoose(screen, entry.answers) };
  if (screen.kind === "pick") return { ...result, ...markPick(screen, entry.answers) };
  if (screen.kind === "shade") return { ...result, ...markShade(screen, entry.answers) };
  if (screen.kind === "plot") return { ...result, ...markPlot(screen, entry.answers) };
  // En pappersuppgift rättas inte: Klar betyder att eleven ska visa läraren, och räknas inte i poängen.
  if (screen.kind === "paper") return { ...result, mark: entry.answers?.done === "1" ? "paper" : "skipped" };

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
    paper: screens.filter((s) => s.mark === "paper").length,
    screens,
  };
}
