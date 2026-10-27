// Prefixrutnätet: en rad rutor där varje ruta är tio gånger rutan till höger.
// Rent: render.js ritar modellen, kategorierna lägger den i frågor och lösningar.
import { dec, formatDecimal } from "./decimal.js";
import { unit } from "./units.js";

// Lärarens tavelbokstäver: H och D för hekto och deka. Rutor utan prefix har ingen bokstav.
const LETTERS = { 9: "G", 6: "M", 3: "k", 2: "H", 1: "D", [-1]: "d", [-2]: "c", [-3]: "m", [-6]: "µ" };
const NAMES = { 9: "Giga", 6: "Mega", 3: "kilo", 2: "hekto", 1: "deka", [-1]: "deci", [-2]: "centi", [-3]: "milli", [-6]: "mikro" };

export const SQUARES = Array.from({ length: 16 }, (_, i) => {
  const pos = 9 - i;
  return { pos, letter: LETTERS[pos] ?? null, name: NAMES[pos] ?? null };
});

// Hur många steg kommat flyttas för ett steg i rutnätet.
export const CELLS = { m: 1, m2: 2, m3: 3, l: 1, g: 1, W: 1 };

const BASE_LABELS = { m: "m", m2: "m²", m3: "m³", l: "l", g: "g", W: "W" };

// Literraden under m³-rutnätet, i literns egna prefixsteg.
const LITER_LABELS = { 3: "kl", 2: "Hl", 1: "Dl", 0: "l", [-1]: "dl", [-2]: "cl", [-3]: "ml" };

export function hops(from, to) {
  const a = unit(from);
  const b = unit(to);
  if (!a.prefix || !b.prefix) throw new Error(`${a.prefix ? to : from} är ingen enhet med prefix`);
  if (a.family !== b.family) throw new Error(`${from} och ${to} står inte i samma rutnät`);
  const cells = CELLS[a.family];
  const diff = a.pos - b.pos;
  const factorExp = diff * cells;
  return { squares: Math.abs(diff), cells, factorExp, direction: factorExp > 0 ? "höger" : "vänster" };
}

function hopLabel(right, cells) {
  return `${right ? "·" : "/"} ${formatDecimal(dec(1, cells))}`;
}

// Ett hopp per ruta från from till to.
function legHops(row, fromPos, toPos, cells) {
  const out = [];
  const step = fromPos > toPos ? -1 : 1;
  for (let p = fromPos; p !== toPos; p += step) out.push({ row, fromPos: p, toPos: p + step, label: hopLabel(step < 0, cells) });
  return out;
}

// En literenhets ruta och cell i m³-rutnätet: l-pos = 3 · ruta + 3 − cell.
function literSquare(lpos) {
  const pos = Math.floor((lpos - 1) / 3);
  return { pos, cell: 3 * pos + 3 - lpos };
}

// windowUnits: enheterna som fönstret ska rymma, när målet inte ska markeras (L1: bara pennan).
export function gridModel({ family, from = null, to = null, showHops = false, wide = false, names = false, literRow = false, windowUnits = null }) {
  const cells = family ? CELLS[family] : 1;
  const isLiter = (u) => family === "m3" && u.family === "l";
  const squarePos = (u) => (isLiter(u) ? literSquare(u.pos).pos : u.pos);
  const positions = (windowUnits ?? [from, to]).filter(Boolean).map(unit).map(squarePos).filter((p) => p !== null);
  const useWide = wide || positions.some((p) => p > 3 || p < -3);
  const rows = useWide ? SQUARES : SQUARES.filter((s) => s.pos <= 3 && s.pos >= -3);
  const fromUnit = from ? unit(from) : null;
  const toUnit = to ? unit(to) : null;

  const squares = rows.map((s) => ({
    pos: s.pos,
    letter: s.letter,
    name: names ? s.name : null,
    isFrom: !!fromUnit && !isLiter(fromUnit) && fromUnit.pos === s.pos,
    isTo: !!toUnit && !isLiter(toUnit) && toUnit.pos === s.pos,
  }));

  let hopList = [];
  if (showHops && fromUnit && toUnit) {
    if (family === "m3" && (isLiter(fromUnit) || isLiter(toUnit))) {
      // Vägen går alltid via 1 dm³ = 1 l.
      const dm3 = unit("dm³").pos;
      if (isLiter(fromUnit)) {
        hopList = [...legHops("liter", fromUnit.pos, 0, 1), ...(isLiter(toUnit) ? [] : legHops("grid", dm3, toUnit.pos, cells))];
      } else {
        hopList = [...legHops("grid", fromUnit.pos, dm3, cells), ...legHops("liter", 0, toUnit.pos, 1)];
      }
    } else {
      hopList = legHops("grid", fromUnit.pos, toUnit.pos, cells);
    }
  }

  let window = null;
  if (positions.length >= 2) {
    const hi = Math.min(rows[0].pos, Math.max(...positions) + 1);
    const lo = Math.max(rows[rows.length - 1].pos, Math.min(...positions) - 1);
    window = { hi, lo };
  }

  let liter = null;
  if (literRow && family === "m3") {
    liter = [];
    for (const s of rows) {
      for (let cell = 0; cell < 3; cell++) {
        const lpos = 3 * s.pos + 3 - cell;
        const label = LITER_LABELS[lpos];
        if (!label) continue;
        liter.push({
          pos: s.pos,
          cell,
          label,
          isFrom: !!fromUnit && isLiter(fromUnit) && fromUnit.pos === lpos,
          isTo: !!toUnit && isLiter(toUnit) && toUnit.pos === lpos,
        });
      }
    }
  }

  return { family, cells, baseLabel: BASE_LABELS[family] ?? "enhet", squares, hops: hopList, window, literRow: liter };
}
