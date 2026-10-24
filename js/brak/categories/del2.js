// Del 2 — Addition och subtraktion: samma nämnare, minsta gemensamma nämnare, jämföra, olika nämnare, blandade tal.
import { equal, gcd, reduce } from "../../representationer/rational.js";
import { pick, randInt } from "../../representationer/random.js";
import { text, num, fr, frv, mixed, mixedOrFrac, op, box, EQ, PLUS, MINUS } from "../pieces.js";
import { add, sub, compare, lcm, lcmAll, fromMixed, symbolFor } from "../fractions.js";
import { rawFrac, rawInt, rawMixed } from "../check.js";
import { sample, coprimeNums, properFraction, pickDenominators, simplifySteps, finishMixed, rewriteSteps, lcdSteps, listPieces } from "./helpers.js";

const IDS = ["x", "y", "z"];
const SIMPLEST = "Räkna ut. Svara i enklaste form.";
const fracKey = (fracs) => fracs.map((f) => `${f.num}/${f.den}`).join(",");

function rewriteBoxes(fracs, L) {
  return Object.fromEntries(fracs.map((f, i) => [IDS[i], { kind: "frac", expected: { num: (f.num * L) / f.den, den: L } }]));
}

const sammaNamnare = {
  id: "samma-namnare",
  part: 2,
  title: "Addition och subtraktion med samma nämnare",
  intro: "När nämnarna är lika är delarna lika stora. Då räknar du bara delarna i täljaren — nämnaren ändras inte.",
  exampleSeed: 21,
  formRule: true,
  generate(rng, level) {
    const kind = [pick(rng, ["plus", "minus"]), pick(rng, ["plus", "minus", "ett-minus"]), pick(rng, ["plus", "tre"])][level];
    const { n, terms, total } = sample(() => {
      const n = randInt(rng, 3, 12);
      const nums = coprimeNums(n);
      if (kind === "ett-minus") {
        const a = pick(rng, nums);
        return { n, terms: [a], total: n - a };
      }
      const terms = Array.from({ length: kind === "tre" ? 3 : 2 }, () => pick(rng, nums));
      const total = kind === "minus" ? terms[0] - terms[1] : terms.reduce((s, t) => s + t, 0);
      if (total <= 0) return null;
      const ok =
        level === 0 ? total < n && gcd(total, n) === 1 : level === 1 ? total < n && gcd(total, n) > 1 : total > n && total % n !== 0;
      return ok ? { n, terms, total } : null;
    });
    const data = { kind, n, terms, total };
    const answer = { num: total, den: n };
    if (kind === "ett-minus") {
      const a = terms[0];
      return {
        key: `1-${a}/${n}`,
        data,
        prompt: SIMPLEST,
        rows: [[num(1), EQ, fr(box("x"), n)], [num(1), MINUS, fr(a, n), EQ, box("s")]],
        boxes: { x: { kind: "int", expected: n }, s: { kind: "enklaste", expected: answer } },
        steps: [
          { text: `En hel är ${n}/${n}.`, row: [num(1), EQ, fr(n, n)] },
          { text: `${n} − ${a} = ${total}.`, row: [fr(n, n), MINUS, fr(a, n), EQ, fr(total, n)] },
          ...simplifySteps(answer),
        ],
      };
    }
    const o = kind === "minus" ? MINUS : PLUS;
    const expr = terms.flatMap((t, i) => (i === 0 ? [fr(t, n)] : [o, fr(t, n)]));
    return {
      key: `${kind}:${terms.join(",")}/${n}`,
      data,
      prompt: SIMPLEST,
      rows: [[...expr, EQ, box("s")]],
      boxes: { s: { kind: "enklaste", expected: answer } },
      steps: [
        { text: `Nämnarna är lika, så räkna bara delarna: ${terms.join(` ${o.o} `)} = ${total}.`, row: [...expr, EQ, fr(total, n)] },
        ...simplifySteps(answer),
      ],
    };
  },
  mistakes: [
    {
      id: "added-denominators",
      matches: (q, p) =>
        ["plus", "tre"].includes(q.data.kind) && equal(p.s.value, { num: q.data.total, den: q.data.n * q.data.terms.length }),
      text: (q) =>
        `Nämnaren ändras inte när du adderar. ${q.data.terms.map((t) => `${t}/${q.data.n}`).join(" + ")} är ${q.data.total} stycken 1/${q.data.n}.`,
      sample: (q) =>
        ["plus", "tre"].includes(q.data.kind) ? { s: rawMixed(0, q.data.total, q.data.n * q.data.terms.length) } : null,
    },
  ],
};

const mgn = {
  id: "mgn",
  part: 2,
  title: "Minsta gemensamma nämnare",
  intro: "En gemensam nämnare är ett tal som alla nämnarna går jämnt upp i. Den minsta hittar du genom att räkna upp multiplarna av den största nämnaren tills du hittar en som de andra nämnarna också går jämnt upp i.",
  exampleSeed: 22,
  formRule: false,
  generate(rng, level) {
    const shared = rng() < 0.6;
    const dens = pickDenominators(rng, ["multipel", "olika", "tre"][level], 60, (ds) => level !== 1 || (gcd(ds[0], ds[1]) > 1) === shared);
    const fracs = dens.map((d) => properFraction(rng, d));
    const L = lcmAll(dens);
    return {
      key: fracKey(fracs),
      data: { dens, fracs, L },
      prompt: "Vilken är den minsta gemensamma nämnaren?",
      rows: [listPieces(fracs.map(frv)), [text("Minsta gemensamma nämnare:"), box("m")]],
      boxes: { m: { kind: "int", expected: L } },
      steps: lcdSteps(dens, L),
    };
  },
  mistakes: [
    {
      id: "common-not-least",
      matches: (q, p) => p.m > q.data.L && q.data.dens.every((d) => p.m % d === 0),
      text: (q, p) => `${p.m} fungerar som gemensam nämnare, men det finns en mindre.`,
      sample: (q) => ({ m: rawInt(2 * q.data.L) }),
    },
    {
      id: "largest-denominator",
      matches: (q, p) => p.m === Math.max(...q.data.dens) && p.m !== q.data.L,
      text: (q, p) => `${p.m} går inte att dela jämnt med ${q.data.dens.find((d) => p.m % d !== 0)}. Alla nämnarna måste gå jämnt upp i den gemensamma nämnaren.`,
      sample: (q) => (Math.max(...q.data.dens) !== q.data.L ? { m: rawInt(Math.max(...q.data.dens)) } : null),
    },
    {
      id: "sum-of-denominators",
      matches: (q, p) => {
        const s = q.data.dens.reduce((t, d) => t + d, 0);
        return p.m === s && s !== q.data.L;
      },
      text: () => "Att addera nämnarna ger inte en gemensam nämnare. Den gemensamma nämnaren ska gå att dela med alla nämnarna.",
      sample: (q) => {
        const s = q.data.dens.reduce((t, d) => t + d, 0);
        return s !== q.data.L ? { m: rawInt(s) } : null;
      },
    },
  ],
};

const skrivOmMgn = {
  id: "skriv-om-mgn",
  part: 2,
  title: "Skriva bråk med minsta gemensamma nämnare",
  intro: "Hitta den minsta gemensamma nämnaren. Förläng sedan varje bråk så att det får den nämnaren.",
  exampleSeed: 23,
  formRule: false,
  generate(rng, level) {
    const dens = pickDenominators(rng, ["multipel", "olika", "tre"][level], level === 2 ? 60 : 36);
    const fracs = dens.map((d) => properFraction(rng, d));
    const L = lcmAll(dens);
    return {
      key: fracKey(fracs),
      data: { fracs, L },
      prompt: "Skriv bråken med minsta gemensamma nämnare.",
      rows: fracs.map((f, i) => [frv(f), EQ, box(IDS[i])]),
      boxes: rewriteBoxes(fracs, L),
      steps: [{ text: `Minsta gemensamma nämnare är ${L}.` }, ...rewriteSteps(fracs, L)],
    };
  },
  mistakes: [
    {
      id: "additive",
      matches: (q, p) =>
        q.data.fracs.some((f, i) => f.den !== q.data.L && p[IDS[i]].num === f.num + q.data.L - f.den && p[IDS[i]].den === q.data.L),
      text: () => "Du lade till lika mycket i täljaren som i nämnaren. Förläng i stället: multiplicera täljaren och nämnaren med samma tal.",
      sample: (q) => {
        const i = q.data.fracs.findIndex((f) => f.den !== q.data.L);
        const f = q.data.fracs[i];
        return { [IDS[i]]: rawFrac(f.num + q.data.L - f.den, q.data.L) };
      },
    },
    {
      id: "only-denominator",
      matches: (q, p) => q.data.fracs.some((f, i) => f.den !== q.data.L && p[IDS[i]].num === f.num && p[IDS[i]].den === q.data.L),
      text: (q) => `Nämnaren blev ${q.data.L}, men täljaren måste förlängas med samma tal.`,
      sample: (q) => {
        const i = q.data.fracs.findIndex((f) => f.den !== q.data.L);
        return { [IDS[i]]: rawFrac(q.data.fracs[i].num, q.data.L) };
      },
    },
    {
      id: "common-not-least",
      matches: (q, p) => {
        const { fracs, L } = q.data;
        const D = p[IDS[0]].den;
        return D > L && D % L === 0 && fracs.every((f, i) => p[IDS[i]].den === D && equal(p[IDS[i]], f));
      },
      text: () => "Bråken har en gemensam nämnare, men inte den minsta. Vilken är den minsta?",
      sample: (q) => {
        const { fracs, L } = q.data;
        return Object.fromEntries(fracs.map((f, i) => [IDS[i], rawFrac((f.num * 2 * L) / f.den, 2 * L)]));
      },
    },
  ],
};

// Jämför täljarna (eller nämnarna) som om de vore hela tal — det eleven gör när den gissar på talen.
const naiveSymbol = (x, y) => symbolFor({ num: x, den: 1 }, { num: y, den: 1 });

function naiveMistake(id, part, message) {
  const naive = (q, i) => naiveSymbol(q.data.fracs[i][part], q.data.fracs[i + 1][part]);
  return {
    id,
    matches: (q, p) => q.data.syms.some((s, i) => naive(q, i) !== s && p[`c${i + 1}`] === naive(q, i)),
    text: () => message,
    sample: (q) => {
      const i = q.data.syms.findIndex((s, j) => naive(q, j) !== s);
      return i < 0 ? null : { [`c${i + 1}`]: naive(q, i) };
    },
  };
}

const jamfora = {
  id: "jamfora",
  part: 2,
  title: "Jämföra bråk",
  intro: "Bråk med samma nämnare är lätta att jämföra: då är det bara täljarna som skiljer. Skriv därför bråken med minsta gemensamma nämnare först.",
  exampleSeed: 24,
  formRule: false,
  generate(rng, level) {
    const equalCase = level === 1 && rng() < 0.2;
    const fracs = sample(() => {
      if (level === 2) return pickDenominators(rng, "tre", 24).map((d) => properFraction(rng, d));
      if (equalCase) {
        const base = properFraction(rng, randInt(rng, 2, 6));
        const [k1, k2] = [randInt(rng, 1, 4), randInt(rng, 1, 4)];
        if (k1 === k2) return null;
        const pair = [k1, k2].map((k) => ({ num: base.num * k, den: base.den * k }));
        return pair.every((f) => f.den <= 12) ? pair : null;
      }
      const dens = pickDenominators(rng, level === 0 ? pick(rng, ["multipel", "olika"]) : "olika", level === 0 ? 24 : 36);
      const pair = dens.map((d) => properFraction(rng, d));
      if (level === 1) {
        // Större täljare och nämnare men mindre värde, så att det inte går att gissa på talen.
        const [f, g] = pair;
        const big = f.num > g.num && f.den > g.den ? f : g.num > f.num && g.den > f.den ? g : null;
        if (!big || compare(big, big === f ? g : f) >= 0) return null;
      }
      return pair;
    });
    const L = lcmAll(fracs.map((f) => f.den));
    const syms = fracs.slice(1).map((g, i) => symbolFor(fracs[i], g));
    const cids = syms.map((_, i) => `c${i + 1}`);
    const rewritten = fracs.map((f) => ({ num: (f.num * L) / f.den, den: L }));
    const chain = (values, symbol) => values.flatMap((f, i) => (i === 0 ? [frv(f)] : [symbol(i - 1), frv(f)]));
    return {
      key: fracKey(fracs),
      data: { fracs, L, syms },
      prompt: "Skriv med minsta gemensamma nämnare och jämför. Välj <, = eller >.",
      rows: [...fracs.map((f, i) => [frv(f), EQ, box(IDS[i])]), chain(fracs, (i) => box(cids[i]))],
      boxes: { ...rewriteBoxes(fracs, L), ...Object.fromEntries(cids.map((c, i) => [c, { kind: "symbol", expected: syms[i] }])) },
      steps: [
        { text: `Minsta gemensamma nämnare är ${L}.` },
        ...rewriteSteps(fracs, L),
        { text: "Nu har bråken samma nämnare, så det räcker att jämföra täljarna.", row: chain(rewritten, (i) => op(syms[i])) },
        { row: chain(fracs, (i) => op(syms[i])) },
      ],
    };
  },
  mistakes: [
    naiveMistake("compared-numerators", "num", "Du jämförde bara täljarna. Det fungerar bara när nämnarna är lika — jämför de omskrivna bråken."),
    naiveMistake("bigger-denominator-is-bigger", "den", "En större nämnare betyder mindre delar, inte ett större tal. Jämför de omskrivna bråken."),
  ],
};

const olikaNamnare = {
  id: "olika-namnare",
  part: 2,
  title: "Addition och subtraktion med olika nämnare",
  intro: "Bråk med olika nämnare har olika stora delar, så de går inte att lägga ihop direkt. Skriv dem först med minsta gemensamma nämnare.",
  exampleSeed: 25,
  formRule: true,
  generate(rng, level) {
    const minus = rng() < 0.4;
    const kind = level === 0 ? "multipel" : level === 1 ? "olika" : pick(rng, ["multipel", "olika"]);
    const c = sample(() => {
      const dens = pickDenominators(rng, kind, level === 0 ? 24 : 36);
      let [f, g] = dens.map((d) => properFraction(rng, d));
      if (minus && compare(f, g) < 0) [f, g] = [g, f];
      const L = lcmAll(dens);
      const n1 = (f.num * L) / f.den;
      const n2 = (g.num * L) / g.den;
      const raw = { num: minus ? n1 - n2 : n1 + n2, den: L };
      const needsWork = reduce(raw).den !== L || raw.num >= L;
      return needsWork === (level === 2) ? { f, g, L, n1, n2, raw } : null;
    });
    const { f, g, L, n1, n2, raw } = c;
    const o = minus ? MINUS : PLUS;
    return {
      key: `${f.num}/${f.den}${o.o}${g.num}/${g.den}`,
      data: { ...c, minus },
      prompt: "Använd minsta gemensamma nämnare. Svara i enklaste form.",
      rows: [[frv(f), o, frv(g), EQ, box("x"), o, box("y"), EQ, box("s")]],
      boxes: {
        x: { kind: "frac", expected: { num: n1, den: L } },
        y: { kind: "frac", expected: { num: n2, den: L } },
        s: { kind: "enklaste", expected: raw },
      },
      steps: [
        { text: `Minsta gemensamma nämnare är ${L}.` },
        ...rewriteSteps([f, g], L),
        { text: `Nu är delarna lika stora: ${n1} ${o.o} ${n2} = ${raw.num}.`, row: [fr(n1, L), o, fr(n2, L), EQ, fr(raw.num, L)] },
        ...simplifySteps(raw),
      ],
    };
  },
  mistakes: [
    {
      id: "added-across",
      matches: (q, p) => !q.data.minus && equal(p.s.value, { num: q.data.f.num + q.data.g.num, den: q.data.f.den + q.data.g.den }),
      text: (q) => {
        const { f, g } = q.data;
        return `Du adderade både täljarna och nämnarna, men ${f.num}/${f.den} + ${g.num}/${g.den} är inte ${f.num + g.num}/${f.den + g.den}. Delarna måste vara lika stora innan du lägger ihop dem.`;
      },
      sample: (q) => (q.data.minus ? null : { s: rawMixed(0, q.data.f.num + q.data.g.num, q.data.f.den + q.data.g.den) }),
    },
    {
      id: "only-denominator-changed",
      matches: (q, p) => {
        const { f, g, L } = q.data;
        return (f.den !== L && p.x.num === f.num && p.x.den === L) || (g.den !== L && p.y.num === g.num && p.y.den === L);
      },
      text: () => "Du bytte nämnare utan att förlänga täljaren med samma tal.",
      sample: (q) => {
        const { f, g, L } = q.data;
        return f.den !== L ? { x: rawFrac(f.num, L) } : { y: rawFrac(g.num, L) };
      },
    },
  ],
};

const blandadeTal = {
  id: "blandade-tal",
  part: 2,
  title: "Addition och subtraktion med blandade tal",
  intro: "Räkna de hela för sig och bråkdelarna för sig. Blir bråkdelen en hel eller mer, gör om den till en hel. Räcker inte bråkdelen till när du subtraherar, växla en hel till delar.",
  exampleSeed: 26,
  formRule: true,
  generate(rng, level) {
    const kind = level === 0 ? "plus" : level === 1 ? pick(rng, ["heltal-minus", "plus-vaxla"]) : "minus-vaxla";
    if (kind === "heltal-minus") {
      const W = randInt(rng, 1, 5);
      const f = properFraction(rng, randInt(rng, 2, 10));
      const left = f.den - f.num;
      return {
        key: `${W}-${f.num}/${f.den}`,
        data: { kind, W, f },
        prompt: SIMPLEST,
        rows: [[num(W), MINUS, frv(f), EQ, box("s")]],
        boxes: { s: { kind: "enklaste", expected: sub({ num: W, den: 1 }, f) } },
        steps: [
          { text: `Växla en hel till ${f.den}/${f.den}.`, row: [num(W), EQ, mixedOrFrac(W - 1, f.den, f.den)] },
          { text: `${f.den} − ${f.num} = ${left}.`, row: [mixedOrFrac(W - 1, f.den, f.den), MINUS, frv(f), EQ, mixedOrFrac(W - 1, left, f.den)] },
          ...finishMixed(W - 1, left, f.den),
        ],
      };
    }
    const c = sample(() => {
      const d1 = randInt(rng, 2, 10);
      const d2 = level === 2 && rng() < 0.4 ? d1 * 2 : d1;
      if (d2 > 12) return null;
      let x = { whole: randInt(rng, 1, 5), ...properFraction(rng, d1) };
      let y = { whole: randInt(rng, 1, 5), ...properFraction(rng, d2) };
      if (rng() < 0.5) [x, y] = [y, x];
      const L = lcm(x.den, y.den);
      const ax = (x.num * L) / x.den;
      const ay = (y.num * L) / y.den;
      const ok =
        kind === "plus" ? ax + ay < L && gcd(ax + ay, L) === 1 : kind === "plus-vaxla" ? ax + ay > L : x.whole > y.whole && ax < ay;
      return ok ? { x, y, L, ax, ay } : null;
    });
    const { x, y, L, ax, ay } = c;
    const X = fromMixed(x.whole, x.num, x.den);
    const Y = fromMixed(y.whole, y.num, y.den);
    const minus = kind === "minus-vaxla";
    const o = minus ? MINUS : PLUS;
    const steps = [];
    if (x.den !== L || y.den !== L) {
      steps.push({
        text: `Skriv bråkdelarna med nämnaren ${L}.`,
        row: [mixed(x.whole, x.num, x.den), o, mixed(y.whole, y.num, y.den), EQ, mixed(x.whole, ax, L), o, mixed(y.whole, ay, L)],
      });
    }
    if (minus) {
      const W = x.whole - 1 - y.whole;
      const n = ax + L - ay;
      steps.push({ text: `${ax}/${L} är mindre än ${ay}/${L}. Växla en hel till ${L}/${L}.`, row: [mixed(x.whole, ax, L), EQ, mixed(x.whole - 1, ax + L, L)] });
      steps.push({
        text: `Hela: ${x.whole - 1} − ${y.whole} = ${W}. Delar: ${ax + L} − ${ay} = ${n}.`,
        row: [mixed(x.whole - 1, ax + L, L), MINUS, mixed(y.whole, ay, L), EQ, mixedOrFrac(W, n, L)],
      });
      steps.push(...finishMixed(W, n, L));
    } else {
      const W = x.whole + y.whole;
      const n = ax + ay;
      steps.push({
        text: `Hela: ${x.whole} + ${y.whole} = ${W}. Delar: ${ax} + ${ay} = ${n}.`,
        row: [mixed(x.whole, ax, L), PLUS, mixed(y.whole, ay, L), EQ, mixed(W, n, L)],
      });
      steps.push(...finishMixed(W, n, L));
    }
    return {
      key: `${kind}:${x.whole} ${x.num}/${x.den}${o.o}${y.whole} ${y.num}/${y.den}`,
      data: { kind, x, y, L, ax, ay },
      prompt: SIMPLEST,
      rows: [[mixed(x.whole, x.num, x.den), o, mixed(y.whole, y.num, y.den), EQ, box("s")]],
      boxes: { s: { kind: "enklaste", expected: minus ? sub(X, Y) : add(X, Y) } },
      steps,
    };
  },
  mistakes: [
    {
      id: "subtracted-smaller-part",
      matches: (q, p) =>
        q.data.kind === "minus-vaxla" && equal(p.s.value, fromMixed(q.data.x.whole - q.data.y.whole, q.data.ay - q.data.ax, q.data.L)),
      text: (q) => {
        const { ax, ay, L } = q.data;
        return `Du räknade ${ay}/${L} − ${ax}/${L} i stället för ${ax}/${L} − ${ay}/${L}. Växla en hel först, så att det finns tillräckligt med delar.`;
      },
      sample: (q) =>
        q.data.kind === "minus-vaxla" ? { s: rawMixed(q.data.x.whole - q.data.y.whole, q.data.ay - q.data.ax, q.data.L) } : null,
    },
    {
      id: "whole-minus-fraction-kept-whole",
      matches: (q, p) => q.data.kind === "heltal-minus" && equal(p.s.value, add({ num: q.data.W, den: 1 }, q.data.f)),
      text: (q) => {
        const { W, f } = q.data;
        return `${W} − ${f.num}/${f.den} är mindre än ${W}. Växla en hel till ${f.den}/${f.den} och subtrahera sedan.`;
      },
      sample: (q) => (q.data.kind === "heltal-minus" ? { s: rawMixed(q.data.W, q.data.f.num, q.data.f.den) } : null),
    },
  ],
};

export const DEL2 = [sammaNamnare, mgn, skrivOmMgn, jamfora, olikaNamnare, blandadeTal];
