// Kontrollerar räkningen i en textuppgift ("14 − 9 = 5"): visar den rätt räknesätt?
//
// Eleven skriver en kedja av likheter. Räkningen godkänns bara om
//   1. den har minst två led (text delad vid "="),
//   2. sista ledet får vara en kvot med rest ("7 rest 1", "7 r 1", "7 (rest 1)"); då ska ledet före
//      vara en enda division a/b av heltal med a = b·q + r och 0 ≤ r < b,
//   3. annars är alla led lika stora (exakta värden). Undantag när wholeQuotient: en division a/b
//      följd av ett heltal q = ⌊a/b⌋ ("50 / 7 = 7"),
//   4. varje tal i uppgiften (numbers) står som tal i räkningen,
//   5. svaret står som tal i räkningen.
// Eleven får skriva flera separata likheter efter varandra ("4·8=32, 32+2=34"): delade vid , eller ; följt av
// mellanrum, eller vid mellanrum mellan två tal där båda delarna har ett =. Då ska varje likhet gälla (var och en
// enligt reglerna ovan) och numbers och svaret söks i alla tillsammans. En enda kedja läses först som en kedja.
// Ord som eleven skriver efter ett tal ("9 år", "34 kr", "9 (år)", "7 rest 1 st") och en punkt sist
// i texten räknas bort innan något kontrolleras. Orden ändrar aldrig ett värde.
// När svaret är ett heltal (talen i uppgiften är alltid heltal) hör inget decimaltecken till uppgiften, och en punkt
// mellan två siffror får också läsas som gånger: "4.8 = 32" godkänns som 4 · 8 = 32. Räkningen godkänns om den
// stämmer på något av sätten, så "2.5 · 4 = 10" är fortfarande 2,5 · 4.

import { rat, equals, isNone, isInteger } from "./value.js";
import { normalize, parseExpr, parseNumber, parseAnswer } from "./parse.js";

const DIVISION = /^(\d+)\/(\d+)$/;
const DOT_BETWEEN_DIGITS = /(?<=\d)\.(?=\d)/g;
const LITERAL = /\d+(?:,\d+)?/g;

// Ett helt ord eller ett ord i parentes. x, r och rest är inga enheter: x är gånger och de andra
// hör till resten ("7 r 1").
const WORD = /\(\s*(\p{L}+)\s*\)|(?<!\p{L})(\p{L}+)(?!\p{L})/gu;
const NOT_UNITS = new Set(["x", "r", "rest"]);
// Ett ord som direkt följs av en siffra ("5 kr 4") eller en exponent ("m²") lämnas kvar, så att
// räkningen inte läses som något annat än det eleven skrev (54 respektive 3²).
const DIGIT_NEXT = /^\)?\s*[\d⁰¹²³⁴⁵⁶⁷⁸⁹]/;

// Tar bort enheter och avslutande skiljetecken ("14 − 9 = 5 kr.").
function clean(text) {
  return String(text ?? "")
    .replace(WORD, (m, inParens, bare, offset, whole) => {
      const word = (inParens ?? bare).toLowerCase();
      return NOT_UNITS.has(word) || DIGIT_NEXT.test(whole.slice(offset + m.length)) ? m : " ";
    })
    .replace(/[\s.,;!?]+$/, "");
}

// Värdet av ett led, eller null om det inte går att läsa (tomt, syntaxfel, division med noll, √ av negativt).
function valueOf(side) {
  const v = parseExpr(side);
  return v === null || isNone(v) ? null : v;
}

// { a, b } om ledet är precis en division a/b av två heltal, annars null.
function asDivision(side) {
  const m = normalize(side).match(DIVISION);
  if (!m) return null;
  const a = BigInt(m[1]);
  const b = BigInt(m[2]);
  return b > 0n ? { a, b } : null;
}

// Alla tal som står skrivna i räkningen. "2,5" är ett tal (inte 2 och 5). Kvoten och resten i
// "7 rest 1" räknas med, så svaret får vara kvoten eller resten.
function literalsOf(sides) {
  return sides.flatMap((side) => normalize(side).match(LITERAL) ?? []).map(parseNumber);
}

// Delar texten i separata likheter: vid , eller ; följt av mellanrum, och vid mellanrum mellan slutet av ett tal
// (siffra eller ")") och början på nästa ("siffra", "(" eller "√") när det som hittills står har ett = och det som
// kommer efter också har ett =. Mellanrummen i en kedja ("4 · 8 = 32 + 2 = 34") ligger bredvid räknetecken och
// delas aldrig. Delar utan innehåll tas bort ("5 + 4 = 9, ").
function splitEqualities(text) {
  const parts = [];
  for (const piece of text.split(/[,;]\s+/)) {
    let start = 0;
    for (const gap of piece.matchAll(/(?<=[\d)])\s+(?=[\d(√])/g)) {
      const left = piece.slice(start, gap.index);
      const after = gap.index + gap[0].length;
      if (left.includes("=") && piece.slice(after).includes("=")) {
        parts.push(left);
        start = after;
      }
    }
    parts.push(piece.slice(start));
  }
  return parts.map((part) => part.trim()).filter((part) => part !== "");
}

// Leden i en kedja av likheter, eller null om kedjan inte gäller (regel 1–3 ovan).
function chainSides(text, wholeQuotient) {
  const sides = text.split("=").map((s) => s.trim());
  if (sides.length < 2) return null;

  const last = sides[sides.length - 1];
  const head = sides.slice(0, -1);

  // Alla led utom det sista ska vara lika stora, och det sista ska passa mot det närmast före.
  const headValue = valueOf(head[0]);
  if (!headValue) return null;
  for (const side of head.slice(1)) {
    const v = valueOf(side);
    if (!v || !equals(v, headValue)) return null;
  }
  const division = asDivision(head[head.length - 1]);

  const parsedLast = parseAnswer(last);
  if (parsedLast.kind === "rest") {
    const { q, r } = parsedLast;
    if (!division || r >= division.b || division.a !== division.b * q + r) return null;
  } else {
    const lastValue = valueOf(last);
    if (!lastValue) return null;
    const equal = equals(lastValue, headValue);
    const wholePart = wholeQuotient && division && equals(lastValue, rat(division.a / division.b));
    if (!equal && !wholePart) return null;
  }
  return sides;
}

export function checkCalculation(text, { numbers, answer, wholeQuotient = false }) {
  const texts = [text];
  if (isInteger(answer)) texts.push(String(text ?? "").replace(DOT_BETWEEN_DIGITS, "·"));
  return [...new Set(texts)].some((t) => checkText(t, numbers, answer, wholeQuotient));
}

function checkText(text, numbers, answer, wholeQuotient) {
  const whole = clean(text);
  const split = splitEqualities(whole);
  // Först som en enda kedja, sedan som separata likheter när texten går att dela.
  const readings = split.length > 1 ? [[whole], split] : [[whole]];

  return readings.some((parts) => {
    const chains = parts.map((part) => chainSides(part, wholeQuotient));
    if (chains.some((sides) => sides === null)) return false;

    const literals = literalsOf(chains.flat());
    const appears = (n) => literals.some((l) => equals(l, n));
    return numbers.every((n) => appears(rat(n))) && appears(answer);
  });
}
