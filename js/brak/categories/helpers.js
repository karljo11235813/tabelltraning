// Gemensamt för kategorierna: slumpa tal som uppfyller villkor, bilder och lösningssteg som återkommer.
import { gcd } from "../../representationer/rational.js";
import { pick, randInt, range, shuffle } from "../../representationer/random.js";
import { DEN_WORDS } from "../../representationer/words.js";
import { fromMixed, lcmAll } from "../fractions.js";
import { text, num, fr, frv, mixed, mixedOrFrac, val, EQ } from "../pieces.js";

// Provar make() tills den ger något annat än null.
export function sample(make, tries = 2000) {
  for (let i = 0; i < tries; i++) {
    const x = make();
    if (x !== null) return x;
  }
  throw new Error("Hittade inga tal som passar villkoren");
}

export function coprimeNums(den) {
  return range(1, den - 1).filter((n) => gcd(n, den) === 1);
}

// Ett förkortat äkta bråk med nämnaren den.
export function properFraction(rng, den) {
  return { num: pick(rng, coprimeNums(den)), den };
}

// "multipel": den ena nämnaren är en multipel av den andra. "olika": ingen av dem är det.
// "tre": tre olika nämnare där minsta gemensamma nämnare inte bara är den största.
export function pickDenominators(rng, kind, maxLcd, accept = () => true) {
  return sample(() => {
    let dens;
    if (kind === "multipel") {
      const d = randInt(rng, 2, 6);
      dens = shuffle([d, d * randInt(rng, 2, 4)], rng);
      if (Math.max(...dens) > 12) return null;
    } else if (kind === "olika") {
      dens = [randInt(rng, 2, 12), randInt(rng, 2, 12)];
      if (dens[0] % dens[1] === 0 || dens[1] % dens[0] === 0) return null;
    } else {
      dens = [randInt(rng, 2, 12), randInt(rng, 2, 12), randInt(rng, 2, 12)];
      if (new Set(dens).size < 3 || lcmAll(dens) === Math.max(...dens)) return null;
    }
    const L = lcmAll(dens);
    return L <= maxLcd && accept(dens, L) ? dens : null;
  });
}

export function cap(s) {
  return s[0].toUpperCase() + s.slice(1);
}

export function hela(w) {
  return w === 1 ? "1 hel" : `${w} hela`;
}

const WORDS = { ...DEN_WORDS, 11: ["elftedel", "elftedelar"] };

// "fjärdedelar"; nämnare utan eget ord blir "24-delar".
export function denWord(den) {
  return WORDS[den] ? WORDS[den][1] : `${den}-delar`;
}

export function strip(parts, shaded = 0) {
  return { model: "remsa", parts, rows: 1, cols: parts, shaded: range(0, shaded - 1) };
}

export function circle(parts, shaded = 0) {
  return { model: "cirkel", parts, rows: 0, cols: 0, shaded: range(0, shaded - 1) };
}

// [a, "och", b] eller [a, ",", b, "och", c].
export function listPieces(pieces) {
  return pieces.flatMap((p, i) => (i === 0 ? [p] : [text(i === pieces.length - 1 ? "och" : ","), p]));
}

// Från ett uträknat bråk till enklaste form: förkorta, sedan blandad form.
export function simplifySteps({ num: n, den: d }) {
  const steps = [];
  const g = gcd(n, d);
  if (g > 1) {
    steps.push({ text: `Förkorta med ${g}.`, row: [fr(n, d), EQ, d / g === 1 ? num(n / g) : fr(n / g, d / g)] });
    n /= g;
    d /= g;
  }
  if (d > 1 && n > d) {
    const q = Math.floor(n / d);
    steps.push({ text: `Skriv i blandad form: ${n} ÷ ${d} = ${q}, rest ${n % d}.`, row: [fr(n, d), EQ, mixed(q, n % d, d)] });
  }
  return steps;
}

// Ett blandat tal vars bråkdel kan vara för stor eller oförkortad, till enklaste form.
export function finishMixed(whole, n, d) {
  if (n < d && gcd(n, d) === 1) return [];
  return [{ text: "Skriv i enklaste form.", row: [mixedOrFrac(whole, n, d), EQ, val(fromMixed(whole, n, d))] }];
}

// Förläng varje bråk till nämnaren L.
export function rewriteSteps(fracs, L) {
  return fracs.map(({ num: a, den: d }) => {
    const k = L / d;
    if (k === 1) return { text: `${a}/${d} har redan nämnaren ${L}.` };
    return {
      text: `${d} · ${k} = ${L}, så förläng ${a}/${d} med ${k}.`,
      row: [fr(a, d), EQ, fr(text(`${a} · ${k}`), text(`${d} · ${k}`)), EQ, fr(a * k, L)],
    };
  });
}

// Multiplarna av den största nämnaren tills alla nämnare går jämnt upp.
export function lcdSteps(dens, L) {
  const max = Math.max(...dens);
  const others = dens.filter((d) => d !== max);
  const multiples = range(1, L / max).map((i) => i * max);
  return [
    { text: `Multiplar av den största nämnaren, ${max}: ${multiples.join(", ")}.` },
    { text: `${L} är den första som också går att dela med ${others.join(" och ")}. Minsta gemensamma nämnare är ${L}.` },
  ];
}

// 2 1/3 → 7/3.
export function rewriteMixedStep(m) {
  const F = fromMixed(m.whole, m.num, m.den);
  return {
    text: `${cap(hela(m.whole))} är ${m.whole * m.den}/${m.den}. Lägg till ${m.num}/${m.den}: ${m.whole * m.den} + ${m.num} = ${F.num}.`,
    row: [mixed(m.whole, m.num, m.den), EQ, frv(F)],
  };
}
