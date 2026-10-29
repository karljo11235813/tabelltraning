// Lösningsmängder: rötterna till en ekvation (TAe6) och lösningen till en olikhet (TAe5). Allt är exakt (surd.js).
//
// parseRoots       en lista med värden ("2 och −2", "x = 3 ± √2", "x₁ = 1, x₂ = 3") som en mängd, eller null.
// sameRoots        två sådana mängder har samma värden.
// parseInequality  ett villkor på en bokstav ("x > 4", "−4 < x < 4", "x ≠ 3", "x > 0,5 eller x < 0") som en union av
//                  intervall, eller null. "alla x" är alla tal och "saknar lösning" den tomma mängden.
// sameSet          två unioner av intervall är samma mängd.

import { parseAnswer, stripDecoration } from "./parse.js";
import { constantOf } from "./algebra.js";
import { compare, equals, isRational, surdKey } from "./surd.js";

const MAX_LÄNGD = 200;
const MAX_VÄRDEN = 20;

// Ett kommatecken direkt mellan två siffror är decimalkomma ("−0,5"), inget skiljetecken ("1, 3" är två tal). Det byts
// mot ett tecken som inte kan skrivas, delas inte, och sätts tillbaka.
const DECIMALKOMMA = "\u0001";
const skyddaKomma = (text) => text.replace(/(\d),(?=\d)/g, `$1${DECIMALKOMMA}`);
const återställKomma = (text) => text.replaceAll(DECIMALKOMMA, ",");

// Delar vid "och", "eller", "," och ";".
const SKILJE = /\s*(?:(?<!\p{L})(?:och|eller|and|or)(?!\p{L})|[,;])\s*/iu;

// "x =", "x₁ =", "x1 =" och "x_1 =" först i ett värde.
const OBEKANT = /^\p{L}(?:_?\d+|[₀-₉]+)?\s*=(?!=)\s*/u;

// Ett skrivet bråk a/b av heltal (b skilt från 1), som "6/2".
const BRÅK = /^-?\d+\/\d+$/;

// Värdena som en text står för: "3 ± √2" är två ("±" också skrivet "+-" eller "+/-"), andra är ett. null när något
// av dem inte är ett tal, saknar reellt värde, eller är ett skrivet bråk för ett heltal ("6/2" för 3, som i en vanlig
// ruta: svaret är 3, inte uppgiften).
function valuesOf(text) {
  const item = återställKomma(text).replace(OBEKANT, "").replace(/\+\s*\/?\s*[-−–]/g, "±");
  if (item === "") return null;
  const parts = item.split("±");
  if (parts.length > 3) return null;
  // Varje ± blir + och −: 2^antal texter.
  let texts = [parts[0]];
  for (const part of parts.slice(1)) texts = texts.flatMap((t) => [`${t}+${part}`, `${t}-${part}`]);
  const values = [];
  for (const t of texts) {
    const v = constantOf(t);
    if (v === null) return null;
    if (BRÅK.test(t.replace(/\s+/g, "").replace(/[−–]/g, "-")) && isRational(v) && v.p.d === 1n) return null;
    values.push(v);
  }
  return values;
}

// Mängden som en lista, utan dubbletter (en dubbelrot får skrivas en eller två gånger).
export function parseRoots(text) {
  const rå = stripDecoration(text);
  if (rå === "" || rå.length > MAX_LÄNGD) return null;
  const items = skyddaKomma(rå).split(SKILJE);
  if (items.length > MAX_VÄRDEN) return null;
  const found = new Map();
  for (const item of items) {
    const values = valuesOf(item.trim());
    if (values === null) return null;
    for (const v of values) found.set(surdKey(v), v);
  }
  return [...found.values()];
}

export function sameRoots(a, b) {
  if (a.length !== b.length) return false;
  const keys = new Set(a.map(surdKey));
  return b.every((v) => keys.has(surdKey(v)));
}

// ---------- OLIKHETER ----------

// Ett intervall { lo, loIn, hi, hiIn }: lo och hi är kvadratiska tal eller null (−∞ och ∞), loIn och hiIn säger om
// gränsen hör till. En mängd är en sorterad lista av intervall som inte överlappar och inte möts.

const ALLA_TAL = [{ lo: null, loIn: false, hi: null, hiIn: false }];
const INGET = [];

// Jämför två nedre (eller två övre) gränser, där null är −∞ (side −1) eller ∞ (side 1).
function compareBound(a, b, side) {
  if (a === null && b === null) return 0;
  if (a === null) return side;
  if (b === null) return -side;
  return compare(a, b);
}

const isEmptyInterval = ({ lo, loIn, hi, hiIn }) => {
  if (lo === null || hi === null) return false;
  const c = compare(lo, hi);
  return c > 0 || (c === 0 && !(loIn && hiIn));
};

// Sorterar och slår ihop intervall som överlappar eller möts i en punkt som hör till något av dem.
function normalizeSet(intervals) {
  const list = intervals.filter((x) => !isEmptyInterval(x));
  list.sort((x, y) => compareBound(x.lo, y.lo, -1) || (x.loIn === y.loIn ? 0 : x.loIn ? -1 : 1));
  const out = [];
  for (const x of list) {
    const last = out.at(-1);
    if (last !== undefined) {
      // Listan är sorterad, så ett x som börjar i −∞ överlappar det förra.
      const c = last.hi === null || x.lo === null ? 1 : compare(last.hi, x.lo);
      if (c > 0 || (c === 0 && (last.hiIn || x.loIn))) {
        const h = compareBound(x.hi, last.hi, 1);
        if (h > 0) out[out.length - 1] = { ...last, hi: x.hi, hiIn: x.hiIn };
        else if (h === 0) out[out.length - 1] = { ...last, hiIn: last.hiIn || x.hiIn };
        continue;
      }
    }
    out.push({ ...x });
  }
  return out;
}

function intersect(a, b) {
  const out = [];
  for (const x of a) {
    for (const y of b) {
      const lo = compareBound(x.lo, y.lo, -1);
      const hi = compareBound(x.hi, y.hi, 1);
      out.push({
        lo: lo >= 0 ? x.lo : y.lo,
        loIn: lo > 0 ? x.loIn : lo < 0 ? y.loIn : x.loIn && y.loIn,
        hi: hi <= 0 ? x.hi : y.hi,
        hiIn: hi < 0 ? x.hiIn : hi > 0 ? y.hiIn : x.hiIn && y.hiIn,
      });
    }
  }
  return normalizeSet(out);
}

const union = (a, b) => normalizeSet([...a, ...b]);

// Mängden där x op v (x står till vänster).
function condition(op, v) {
  switch (op) {
    case "<": return [{ lo: null, loIn: false, hi: v, hiIn: false }];
    case "≤": return [{ lo: null, loIn: false, hi: v, hiIn: true }];
    case ">": return [{ lo: v, loIn: false, hi: null, hiIn: false }];
    case "≥": return [{ lo: v, loIn: true, hi: null, hiIn: false }];
    case "=": return [{ lo: v, loIn: true, hi: v, hiIn: true }];
    case "≠": return [{ lo: null, loIn: false, hi: v, hiIn: false }, { lo: v, loIn: false, hi: null, hiIn: false }];
  }
  return null;
}

const FLIP = { "<": ">", "≤": "≥", ">": "<", "≥": "≤", "=": "=", "≠": "≠" };

// Tangentbordets former av tecknen: >= och => är ≥, <= och =< är ≤, != och =/= är ≠.
function normalizeOperators(text) {
  return text
    .replace(/>\s*=|=\s*>/g, "≥")
    .replace(/<\s*=|=\s*</g, "≤")
    .replace(/!\s*=|=\s*\/\s*=/g, "≠");
}

const OPERATOR = /\s*([<>≤≥≠=])\s*/;

// Ett villkor: "x > 4", "4 < x", "−4 < x < 4" (åt samma håll), "x ≠ 3", "alla x utom 3", eller orden för alla tal och
// ingen lösning. null när det inte är ett villkor på bokstaven.
function readCondition(text, letter) {
  const kind = parseAnswer(text).kind;
  if (kind === "all") return ALLA_TAL;
  if (kind === "none") return INGET;
  const except = text.match(/^alla\s+(?:\p{L}|tal|reella\s+tal)\s+utom\s+(.+)$/iu);
  if (except) {
    const v = constantOf(återställKomma(except[1]));
    return v === null ? null : condition("≠", v);
  }
  const parts = text.split(OPERATOR);
  if (parts.length !== 3 && parts.length !== 5) return null;
  const operands = parts.filter((_, i) => i % 2 === 0).map((p) => återställKomma(p).trim().toLowerCase());
  const ops = parts.filter((_, i) => i % 2 === 1);
  const isLetter = operands.map((p) => p === letter);
  const value = (p) => constantOf(p);
  if (operands.length === 2) {
    if (isLetter[0] === isLetter[1]) return null;
    const v = value(isLetter[0] ? operands[1] : operands[0]);
    if (v === null) return null;
    return condition(isLetter[0] ? ops[0] : FLIP[ops[0]], v);
  }
  // a < x < b eller a > x > b.
  if (!isLetter[1] || isLetter[0] || isLetter[2]) return null;
  const up = ops.every((op) => op === "<" || op === "≤");
  const down = ops.every((op) => op === ">" || op === "≥");
  if (!up && !down) return null;
  const a = value(operands[0]);
  const b = value(operands[2]);
  if (a === null || b === null) return null;
  return intersect(condition(FLIP[ops[0]], a), condition(ops[1], b));
}

// Unionen av delarna åtskilda med "eller", "or" och ","; inom en del är "och" och "and" snitt.
export function parseInequality(text, letter = "x") {
  const rå = stripDecoration(text);
  if (rå === "" || rå.length > MAX_LÄNGD) return null;
  const kind = parseAnswer(rå).kind;
  if (kind === "all") return ALLA_TAL;
  if (kind === "none") return INGET;
  let set = INGET;
  for (const part of skyddaKomma(normalizeOperators(rå)).split(/\s*(?:(?<!\p{L})(?:eller|or)(?!\p{L})|[,;])\s*/iu)) {
    let inner = ALLA_TAL;
    for (const piece of part.split(/\s*(?<!\p{L})(?:och|and)(?!\p{L})\s*/iu)) {
      const c = readCondition(piece.trim(), letter);
      if (c === null) return null;
      inner = intersect(inner, c);
    }
    set = union(set, inner);
  }
  return set;
}

const sameBound = (a, b) => (a === null || b === null ? a === b : equals(a, b));

export function sameSet(a, b) {
  return a.length === b.length && a.every((x, i) => {
    const y = b[i];
    return sameBound(x.lo, y.lo) && sameBound(x.hi, y.hi) && (x.lo === null || x.loIn === y.loIn) && (x.hi === null || x.hiIn === y.hiIn);
  });
}
