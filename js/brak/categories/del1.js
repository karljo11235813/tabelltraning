// Del 1 — Bråk som tal: läsa bråk från bild, förlänga, förkorta, bråkform och blandad form.
import { equal, gcd, isReduced } from "../../representationer/rational.js";
import { pick, randInt, range } from "../../representationer/random.js";
import { text, num, fr, mixed, pic, box, val, EQ, DIVIDE } from "../pieces.js";
import { rawFrac, rawInt, rawMixed } from "../check.js";
import { sample, coprimeNums, strip, circle, cap, hela, denWord } from "./helpers.js";

const NOUN = { cirkel: "cirkeln", remsa: "remsan" };
const shape = (model, parts, shaded = 0) => (model === "cirkel" ? circle(parts, shaded) : strip(parts, shaded));

const lasBild = {
  id: "las-bild",
  part: 1,
  title: "Läsa bråk från bild",
  intro: "Nämnaren är hur många lika stora delar det hela är delat i. Täljaren är hur många av delarna det gäller.",
  exampleSeed: 11,
  formRule: false,
  generate(rng, level) {
    const model = pick(rng, ["cirkel", "remsa"]);
    const den = randInt(rng, 2, level === 2 ? 6 : 8);
    const n = pick(rng, coprimeNums(den));
    const scale = level === 2 ? pick(rng, [2, 3].filter((m) => den * m <= 12)) : 1;
    const parts = den * scale;
    const data = { model, n, den, parts };
    if (level === 0) {
      return {
        key: `${model}:${n}/${den}`,
        data,
        prompt: "Hur stor del är färgad? Svara med ett bråk.",
        rows: [[pic(shape(model, den, n))], [box("a")]],
        boxes: { a: { kind: "frac", expected: { num: n, den } } },
        steps: [
          { text: `Bilden är delad i ${den} lika stora delar. Det blir nämnaren.` },
          { text: `${n} av delarna är färgade. Det blir täljaren.`, row: [fr(n, den)] },
        ],
      };
    }
    const steps =
      scale === 1
        ? [{ text: `${cap(NOUN[model])} har ${den} delar, så varje del är 1/${den}. Färga ${n} delar.` }]
        : [
            { text: `${cap(NOUN[model])} har ${parts} delar, inte ${den}. Varje 1/${den} är ${scale} av delarna.` },
            { text: `${n}/${den} är då ${n} · ${scale} = ${n * scale} delar.` },
          ];
    steps.push({ row: [pic(shape(model, parts, n * scale))] });
    return {
      key: `${model}:${n}/${den}:${parts}`,
      data,
      prompt: `Färga så stor del av ${NOUN[model]}.`,
      rows: [[fr(n, den)], [box("a")]],
      boxes: { a: { kind: "shade", expected: { num: n, den }, picture: shape(model, parts) } },
      steps,
    };
  },
  mistakes: [
    {
      id: "shaded-vs-unshaded",
      matches: (q, p) => q.boxes.a.kind === "frac" && p.a.num === q.data.n && p.a.den === q.data.den - q.data.n,
      text: () => "Du jämförde de färgade delarna med de ofärgade. Nämnaren är hur många delar det är totalt.",
      sample: (q) => (q.boxes.a.kind === "frac" ? { a: rawFrac(q.data.n, q.data.den - q.data.n) } : null),
    },
    {
      id: "unshaded-part",
      matches: (q, p) => q.boxes.a.kind === "frac" && p.a.num === q.data.den - q.data.n && p.a.den === q.data.den,
      text: () => "Du räknade de ofärgade delarna. Täljaren är hur många delar som är färgade.",
      sample: (q) =>
        q.boxes.a.kind === "frac" && q.data.den - q.data.n !== q.data.n ? { a: rawFrac(q.data.den - q.data.n, q.data.den) } : null,
    },
    {
      id: "parts-not-scaled",
      matches: (q, p) => q.boxes.a.kind === "shade" && q.data.parts !== q.data.den && p.a === q.data.n,
      text: (q) => `${cap(NOUN[q.data.model])} har ${q.data.parts} delar, inte ${q.data.den}. Hur många av delarna blir 1/${q.data.den}?`,
      sample: (q) => (q.boxes.a.kind === "shade" && q.data.parts !== q.data.den ? { a: q.data.n } : null),
    },
  ],
};

const forlanga = {
  id: "forlanga",
  part: 1,
  title: "Förlänga bråk",
  intro: "Att förlänga ett bråk är att multiplicera både täljaren och nämnaren med samma tal. Bråket ser annorlunda ut, men värdet är detsamma.",
  exampleSeed: 12,
  formRule: false,
  generate(rng, level) {
    const { a, b, k, k2 } = sample(() => {
      const b = randInt(rng, 2, 10);
      const k = randInt(rng, 2, 6);
      const k2 = randInt(rng, k + 1, 7);
      return b * (level === 2 ? k2 : k) <= 60 ? { a: pick(rng, coprimeNums(b)), b, k, k2 } : null;
    });
    const data = { a, b, k, k2 };
    const multiply = (f) => ({
      text: `Multiplicera både täljaren och nämnaren med ${f}.`,
      row: [fr(a, b), EQ, fr(text(`${a} · ${f}`), text(`${b} · ${f}`)), EQ, fr(a * f, b * f)],
    });
    const sameValue = b * k <= 24 ? [{ text: "Värdet är detsamma — bitarna är bara mindre.", row: [pic(strip(b, a)), pic(strip(b * k, a * k))] }] : [];
    if (level === 0) {
      return {
        key: `0:${a}/${b}·${k}`,
        data,
        prompt: `Förläng bråket med ${k}.`,
        rows: [[fr(a, b), EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a * k, den: b * k } } },
        steps: [multiply(k), ...sameValue],
      };
    }
    if (level === 1) {
      return {
        key: `1:${a}/${b}·${k}`,
        data,
        prompt: `Skriv bråket med nämnaren ${b * k}.`,
        rows: [[fr(a, b), EQ, fr(box("x"), b * k)]],
        boxes: { x: { kind: "int", expected: a * k } },
        steps: [
          { text: `${b} · ${k} = ${b * k}, så nämnaren har multiplicerats med ${k}. Då ska täljaren också multipliceras med ${k}.` },
          multiply(k),
          ...sameValue,
        ],
      };
    }
    return {
      key: `2:${a}/${b}·${k}·${k2}`,
      data,
      prompt: "Fyll i så att bråken blir lika stora.",
      rows: [[fr(a, b), EQ, fr(box("x"), b * k), EQ, fr(a * k2, box("y"))]],
      boxes: { x: { kind: "int", expected: a * k }, y: { kind: "int", expected: b * k2 } },
      steps: [
        { text: `${b} · ${k} = ${b * k}: förläng med ${k}.` },
        multiply(k),
        { text: `${a} · ${k2} = ${a * k2}: förläng med ${k2}.` },
        multiply(k2),
      ],
    };
  },
  mistakes: [
    {
      id: "only-numerator",
      matches: (q, p) => q.level === 0 && p.x.num === q.data.a * q.data.k && p.x.den === q.data.b,
      text: () => "Du multiplicerade bara täljaren. Då ändras värdet — multiplicera både täljaren och nämnaren.",
      sample: (q) => (q.level === 0 ? { x: rawFrac(q.data.a * q.data.k, q.data.b) } : null),
    },
    {
      id: "only-denominator",
      matches: (q, p) => q.level === 0 && p.x.num === q.data.a && p.x.den === q.data.b * q.data.k,
      text: () => "Du multiplicerade bara nämnaren. Då ändras värdet — multiplicera både täljaren och nämnaren.",
      sample: (q) => (q.level === 0 ? { x: rawFrac(q.data.a, q.data.b * q.data.k) } : null),
    },
    {
      id: "added-factor",
      matches: (q, p) => q.level === 0 && p.x.num === q.data.a + q.data.k && p.x.den === q.data.b + q.data.k,
      text: (q) => `Förlänga betyder att multiplicera, inte att addera. Multiplicera täljaren och nämnaren med ${q.data.k}.`,
      sample: (q) => (q.level === 0 ? { x: rawFrac(q.data.a + q.data.k, q.data.b + q.data.k) } : null),
    },
    {
      id: "additive",
      matches: (q, p) => q.level === 1 && p.x === q.data.a + q.data.b * q.data.k - q.data.b,
      text: (q) => {
        const { b, k } = q.data;
        return `Nämnaren ökade med ${b * k - b}, men täljaren ska inte öka lika mycket. Nämnaren har multiplicerats med ${k} — gör samma sak med täljaren.`;
      },
      sample: (q) => (q.level === 1 ? { x: rawInt(q.data.a + q.data.b * q.data.k - q.data.b) } : null),
    },
  ],
};

const forkorta = {
  id: "forkorta",
  part: 1,
  title: "Förkorta bråk",
  intro: "Att förkorta ett bråk är att dividera både täljaren och nämnaren med samma tal. Värdet är detsamma, men talen blir mindre.",
  exampleSeed: 13,
  formRule: false,
  generate(rng, level) {
    const { a, b, k } = sample(() => {
      const b = randInt(rng, 2, level === 2 ? 8 : 10);
      const k = level === 2 ? pick(rng, [4, 6, 8, 9, 12]) : randInt(rng, 2, 6);
      return b * k <= (level === 2 ? 96 : 60) ? { a: pick(rng, coprimeNums(b)), b, k } : null;
    });
    const [n, d] = [a * k, b * k];
    const data = { a, b, k, n, d };
    const divide = {
      text: `Dividera både täljaren och nämnaren med ${k}.`,
      row: [fr(n, d), EQ, fr(text(`${n} ÷ ${k}`), text(`${d} ÷ ${k}`)), EQ, fr(a, b)],
    };
    if (level === 0) {
      return {
        key: `0:${n}/${d}÷${k}`,
        data,
        prompt: `Förkorta bråket med ${k}.`,
        rows: [[fr(n, d), EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a, den: b } } },
        steps: [divide],
      };
    }
    if (level === 1) {
      return {
        key: `1:${n}/${d}÷${k}`,
        data,
        prompt: "Fyll i så att bråken blir lika stora.",
        rows: [[fr(n, d), EQ, fr(box("x"), b)]],
        boxes: { x: { kind: "int", expected: a } },
        steps: [{ text: `${d} ÷ ${k} = ${b}, så nämnaren har dividerats med ${k}. Gör samma sak med täljaren.` }, divide],
      };
    }
    const p = k % 2 === 0 ? 2 : 3;
    return {
      key: `2:${n}/${d}`,
      data,
      prompt: "Förkorta så långt det går.",
      rows: [[fr(n, d), EQ, box("x")]],
      boxes: { x: { kind: "brakform", expected: { num: a, den: b } } },
      steps: [
        { text: `Det största tal som går jämnt upp i både ${n} och ${d} är ${k}.` },
        divide,
        { text: `Det går också att förkorta i flera steg, till exempel först med ${p} och sedan med ${k / p}.` },
      ],
    };
  },
  mistakes: [
    {
      id: "subtracted",
      matches: (q, p) => q.level === 0 && p.x.num === q.data.n - q.data.k && p.x.den === q.data.d - q.data.k,
      text: (q) => `Förkorta betyder att dividera, inte att subtrahera. Dividera täljaren och nämnaren med ${q.data.k}.`,
      sample: (q) => (q.level === 0 ? { x: rawFrac(q.data.n - q.data.k, q.data.d - q.data.k) } : null),
    },
    {
      id: "only-one-part",
      matches: (q, p) =>
        q.level === 0 &&
        ((p.x.num === q.data.a && p.x.den === q.data.d) || (p.x.num === q.data.n && p.x.den === q.data.b)),
      text: (q) => `Både täljaren och nämnaren ska divideras med ${q.data.k}.`,
      sample: (q) => (q.level === 0 ? { x: rawFrac(q.data.a, q.data.d) } : null),
    },
    {
      id: "not-fully-reduced",
      matches: (q, p) => q.level === 2 && equal(p.x, { num: q.data.a, den: q.data.b }) && !isReduced(p.x) && p.x.den < q.data.d,
      text: () => "Du har förkortat, men det går att förkorta mer. Finns det något tal som går jämnt upp i både täljaren och nämnaren?",
      sample: (q) => {
        if (q.level !== 2) return null;
        const f = q.data.k % 2 === 0 ? 2 : 3;
        return { x: rawFrac(q.data.n / f, q.data.d / f) };
      },
    },
  ],
};

const tillBlandad = {
  id: "till-blandad",
  part: 1,
  title: "Från bråkform till blandad form",
  intro: "Ett bråk som är större än 1 kan skrivas som hela och en bråkdel. Dela täljaren med nämnaren: kvoten är antalet hela och resten är täljaren i bråkdelen.",
  exampleSeed: 14,
  formRule: true,
  generate(rng, level) {
    const u = rng();
    const kind = level < 2 ? "coprime" : u < 0.25 ? "whole" : u < 0.75 ? "shared" : "coprime";
    const { N, d } = sample(() => {
      const d = randInt(rng, 2, [5, 8, 10][level]);
      if (kind === "whole") {
        const w = randInt(rng, 2, 6);
        return w * d <= 60 ? { N: w * d, d } : null;
      }
      const max = level === 0 ? Math.min(20, 4 * d - 1) : level === 1 ? 40 : 60;
      const N = randInt(rng, d + 1, max);
      if (N % d === 0) return null;
      return (gcd(N, d) > 1) === (kind === "shared") ? { N, d } : null;
    });
    const q = Math.floor(N / d);
    const r = N % d;
    const pictures = level === 0 ? [[...range(1, q).map(() => pic(circle(d, d))), pic(circle(d, r))]] : [];
    const steps = [{ text: `${d} ryms ${q} gånger i ${N}: ${q} · ${d} = ${q * d}, och det blir ${r} kvar.` }];
    if (r === 0) {
      steps.push({ text: `Det blir ingen rest, så ${N}/${d} är heltalet ${q}.`, row: [fr(N, d), EQ, num(q)] });
    } else {
      steps.push({ text: `Det blir ${hela(q)} och ${r}/${d}.`, row: [fr(N, d), EQ, mixed(q, r, d)] });
      if (gcd(r, d) > 1) steps.push({ text: `Förkorta bråkdelen med ${gcd(r, d)}.`, row: [mixed(q, r, d), EQ, val({ num: N, den: d })] });
    }
    return {
      key: `${N}/${d}`,
      data: { N, d, q, r },
      prompt: "Skriv i enklaste form.",
      rows: [...pictures, [num(N), DIVIDE, num(d), EQ, box("q"), text("rest"), box("r")], [fr(N, d), EQ, box("s")]],
      boxes: {
        q: { kind: "int", expected: q },
        r: { kind: "int", expected: r },
        s: { kind: "enklaste", expected: { num: N, den: d } },
      },
      steps,
    };
  },
  mistakes: [
    {
      id: "remainder-as-denominator",
      matches: (q, p) => q.data.r > 0 && p.s.whole === q.data.q && p.s.part?.num === q.data.d && p.s.part?.den === q.data.r,
      text: (q) => `Nämnaren ändras inte — det är fortfarande ${denWord(q.data.d)}. Resten ${q.data.r} blir täljaren.`,
      sample: (q) => (q.data.r > 0 ? { s: rawMixed(q.data.q, q.data.d, q.data.r) } : null),
    },
    {
      id: "quotient-off-by-one",
      matches: (q, p) => Math.abs(p.s.whole - q.data.q) === 1 && !equal(p.s.value, q.boxes.s.expected),
      text: (q) => {
        const { q: k, d } = q.data;
        return `Kontrollera antalet hela: ${k} · ${d} = ${k * d} och ${k + 1} · ${d} = ${(k + 1) * d}.`;
      },
      sample: (q) => ({ s: rawMixed(q.data.q + 1, Math.max(q.data.r, 1), q.data.d) }),
    },
  ],
};

const tillBrakform = {
  id: "till-brakform",
  part: 1,
  title: "Från blandad form till bråkform",
  intro: "En hel är lika mycket som nämnaren delad med sig själv, till exempel 4/4. Räkna om de hela till delar och lägg till bråkdelen.",
  exampleSeed: 15,
  formRule: false,
  generate(rng, level) {
    const [wMax, dMax] = [[3, 5], [5, 8], [9, 12]][level];
    const w = randInt(rng, 1, wMax);
    const d = randInt(rng, 2, dMax);
    const wholeStep = { text: `En hel är ${d}/${d}, så ${hela(w)} är ${w} · ${d} = ${w * d} stycken 1/${d}.`, row: [num(w), EQ, fr(w * d, d)] };
    if (level === 2 && rng() < 0.25) {
      return {
        key: `${w}:${d}`,
        data: { w, d, a: 0 },
        prompt: `Skriv heltalet som ett bråk med nämnaren ${d}.`,
        rows: [[num(w), EQ, fr(box("x"), d)]],
        boxes: { x: { kind: "int", expected: w * d } },
        steps: [wholeStep],
      };
    }
    const a = pick(rng, coprimeNums(d));
    const pictures = level === 0 ? [[...range(1, w).map(() => pic(circle(d, d))), pic(circle(d, a))]] : [];
    return {
      key: `${w} ${a}/${d}`,
      data: { w, d, a },
      prompt: "Skriv i bråkform.",
      rows: [...pictures, [num(w), EQ, fr(box("x"), d)], [mixed(w, a, d), EQ, box("y")]],
      boxes: { x: { kind: "int", expected: w * d }, y: { kind: "brakform", expected: { num: w * d + a, den: d } } },
      steps: [wholeStep, { text: `Lägg till ${a}/${d}: ${w * d} + ${a} = ${w * d + a}.`, row: [mixed(w, a, d), EQ, fr(w * d + a, d)] }],
    };
  },
  mistakes: [
    {
      id: "whole-times-numerator",
      matches: (q, p) => {
        const { w, d, a } = q.data;
        return a > 0 && w * a + d !== w * d + a && p.y.num === w * a + d && p.y.den === d;
      },
      text: (q) => `De hela ska multipliceras med nämnaren: ${q.data.w} · ${q.data.d}, inte ${q.data.w} · ${q.data.a}.`,
      sample: (q) => {
        const { w, d, a } = q.data;
        return a > 0 && w * a + d !== w * d + a ? { y: rawFrac(w * a + d, d) } : null;
      },
    },
    {
      id: "whole-plus-numerator",
      matches: (q, p) => q.data.a > 0 && p.y.num === q.data.w + q.data.a && p.y.den === q.data.d,
      text: (q) => `En hel är ${q.data.d}/${q.data.d}, inte 1/${q.data.d}. Hur många 1/${q.data.d} är ${hela(q.data.w)}?`,
      sample: (q) => (q.data.a > 0 ? { y: rawFrac(q.data.w + q.data.a, q.data.d) } : null),
    },
    {
      id: "forgot-numerator",
      matches: (q, p) => q.data.a > 0 && p.y.num === q.data.w * q.data.d && p.y.den === q.data.d,
      text: (q) => `Du har räknat om de hela, men glömt att lägga till ${q.data.a}/${q.data.d}.`,
      sample: (q) => (q.data.a > 0 ? { y: rawFrac(q.data.w * q.data.d, q.data.d) } : null),
    },
  ],
};

export const DEL1 = [lasBild, forlanga, forkorta, tillBlandad, tillBrakform];
