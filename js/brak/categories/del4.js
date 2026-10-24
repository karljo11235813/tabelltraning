// Del 4 — Division: heltal delat med stambråk, bråk delat med bråk, blandade tal delat med blandade tal.
import { equal } from "../../representationer/rational.js";
import { pick, randInt, range } from "../../representationer/random.js";
import { text, num, fr, frv, val, mixed, pic, box, EQ, TIMES, DIVIDE } from "../pieces.js";
import { add, div, mul, lcmAll, fromMixed } from "../fractions.js";
import { rawInt, rawSimplest } from "../check.js";
import { sample, coprimeNums, properFraction, pickDenominators, simplifySteps, rewriteSteps, rewriteMixedStep, strip, hela } from "./helpers.js";

const SIMPLEST = "Räkna ut. Svara i enklaste form.";

// F ÷ G med minsta gemensamma nämnare: när delarna är lika stora delar man täljarna.
function lcdDivision(F, G) {
  const L = lcmAll([F.den, G.den]);
  const n1 = (F.num * L) / F.den;
  const n2 = (G.num * L) / G.den;
  const result = { num: n1, den: n2 };
  const steps = [
    { text: `Minsta gemensamma nämnare är ${L}.` },
    ...rewriteSteps([F, G], L),
    {
      text: `Nu är delarna lika stora, så dela täljarna: hur många gånger ryms ${n2} i ${n1}?`,
      row: [fr(n1, L), DIVIDE, fr(n2, L), EQ, num(n1), DIVIDE, num(n2), EQ, n2 === 1 ? num(n1) : fr(n1, n2)],
    },
    ...simplifySteps(result),
    { text: "Samma svar får du om du multiplicerar med det inverterade talet:", row: [frv(F), TIMES, fr(G.den, G.num), EQ, val(div(F, G))] },
  ];
  return { L, n1, n2, result, steps };
}

const heltalDelatStambrak = {
  id: "heltal-delat-stambrak",
  part: 4,
  title: "Heltal delat med stambråk",
  intro: "3 ÷ 1/4 frågar: hur många fjärdedelar ryms i 3? I varje hel ryms 4 fjärdedelar, så i 3 hela ryms 3 · 4 = 12.",
  exampleSeed: 41,
  formRule: false,
  generate(rng, level) {
    if (level === 2) {
      const { W, m, n } = sample(() => {
        const W = randInt(rng, 2, 9);
        const n = randInt(rng, 3, 6);
        const ms = coprimeNums(n).filter((x) => x >= 2 && (W * n) % x === 0);
        return ms.length > 0 ? { W, n, m: pick(rng, ms) } : null;
      });
      const parts = W * n;
      return {
        key: `${W}÷${m}/${n}`,
        data: { W, m, n },
        prompt: "Räkna ut.",
        rows: [
          [num(W), DIVIDE, fr(m, n)],
          [num(W), EQ, fr(box("x"), n)],
          [text("Hur många"), fr(m, n), text("ryms i"), fr(parts, n), text("?"), box("z")],
        ],
        boxes: { x: { kind: "int", expected: parts }, z: { kind: "int", expected: parts / m } },
        steps: [
          { text: `Skriv ${W} med nämnaren ${n}: ${W} · ${n} = ${parts}.`, row: [num(W), EQ, fr(parts, n)] },
          { text: `${m} delar ryms ${parts / m} gånger i ${parts} delar: ${parts} ÷ ${m} = ${parts / m}.`, row: [num(W), DIVIDE, fr(m, n), EQ, num(parts / m)] },
        ],
      };
    }
    const W = randInt(rng, 2, level === 0 ? 5 : 9);
    const n = randInt(rng, 2, level === 0 ? 5 : 10);
    const data = { W, n };
    const key = `${W}÷1/${n}`;
    const prompt = `Hur många 1/${n} ryms i ${W}?`;
    if (level === 0) {
      return {
        key,
        data,
        prompt,
        rows: [
          range(1, W).map(() => pic(strip(n, n))),
          [num(1), EQ, box("x"), text("stycken"), fr(1, n)],
          [num(W), EQ, box("y"), text("stycken"), fr(1, n)],
          [num(W), DIVIDE, fr(1, n), EQ, box("z")],
        ],
        boxes: { x: { kind: "int", expected: n }, y: { kind: "int", expected: W * n }, z: { kind: "int", expected: W * n } },
        steps: [
          { text: `En hel är ${n} stycken 1/${n}.` },
          { text: `${hela(W)} är ${W} · ${n} = ${W * n} stycken 1/${n}.`, row: [num(W), DIVIDE, fr(1, n), EQ, num(W * n)] },
        ],
      };
    }
    return {
      key,
      data,
      prompt,
      rows: [[num(W), DIVIDE, fr(1, n), EQ, num(W), TIMES, box("x"), EQ, box("z")]],
      boxes: { x: { kind: "int", expected: n }, z: { kind: "int", expected: W * n } },
      steps: [
        {
          text: `I varje hel ryms ${n} stycken 1/${n}, så i ${hela(W)} ryms ${W} · ${n}.`,
          row: [num(W), DIVIDE, fr(1, n), EQ, num(W), TIMES, num(n), EQ, num(W * n)],
        },
      ],
    };
  },
  mistakes: [
    {
      id: "divided-instead",
      matches: (q, p) => q.level < 2 && q.data.W % q.data.n === 0 && p.z === q.data.W / q.data.n,
      text: (q) => `Du delade ${q.data.W} med ${q.data.n}. Men frågan är hur många 1/${q.data.n} som ryms i ${q.data.W} — det blir fler än ${q.data.W}.`,
      sample: (q) => (q.level < 2 && q.data.W % q.data.n === 0 ? { z: rawInt(q.data.W / q.data.n) } : null),
    },
    {
      id: "answered-denominator",
      matches: (q, p) => q.level < 2 && p.z === q.data.n,
      text: (q) => `${q.data.n} stycken 1/${q.data.n} ryms i en hel. Hur många ryms i ${hela(q.data.W)}?`,
      sample: (q) => (q.level < 2 ? { z: rawInt(q.data.n) } : null),
    },
  ],
};

// Den som vänder på fel bråk eller multiplicerar i stället får de här svaren.
const wrongInverse = ({ f, g }) => mul({ num: f.den, den: f.num }, g);
const wrongProduct = ({ f, g }) => mul(f, g);

function divisionMistake(id, wrongValue, text) {
  return {
    id,
    matches: (q, p) => {
      if (!p.s) return false;
      const w = wrongValue(q.data);
      return !equal(w, div(q.data.f, q.data.g)) && equal(p.s.value, w);
    },
    text,
    sample: (q) => {
      if (q.level === 0) return null;
      const w = wrongValue(q.data);
      return equal(w, div(q.data.f, q.data.g)) ? null : { s: rawSimplest(w) };
    },
  };
}

const brakDelatBrak = {
  id: "brak-delat-brak",
  part: 4,
  title: "Bråk delat med bråk",
  intro: "3/4 ÷ 1/4 frågar: hur många fjärdedelar ryms i tre fjärdedelar? Svaret är 3. När nämnarna är lika delar du täljarna. Är nämnarna olika, skriv först bråken med minsta gemensamma nämnare.",
  exampleSeed: 42,
  formRule: true,
  generate(rng, level) {
    if (level === 0) {
      const { a, d } = sample(() => {
        const d = randInt(rng, 3, 12);
        const as = coprimeNums(d).filter((x) => x >= 2);
        return as.length > 0 ? { a: pick(rng, as), d } : null;
      });
      return {
        key: `${a}/${d}÷1/${d}`,
        data: { f: { num: a, den: d }, g: { num: 1, den: d } },
        prompt: `Hur många 1/${d} ryms i ${a}/${d}?`,
        rows: [[fr(a, d), DIVIDE, fr(1, d), EQ, box("z")]],
        boxes: { z: { kind: "int", expected: a } },
        steps: [{ text: `${a}/${d} är ${a} stycken 1/${d}.`, row: [fr(a, d), DIVIDE, fr(1, d), EQ, num(a)] }],
      };
    }
    if (level === 1) {
      const { a, b, d } = sample(() => {
        const d = randInt(rng, 3, 12);
        const nums = coprimeNums(d);
        const [a, b] = [pick(rng, nums), pick(rng, nums)];
        return b >= 2 && a !== b ? { a, b, d } : null;
      });
      const answer = { num: a, den: b };
      return {
        key: `${a}/${d}÷${b}/${d}`,
        data: { f: { num: a, den: d }, g: { num: b, den: d } },
        prompt: "Nämnarna är lika, så dela täljarna. Svara i enklaste form.",
        rows: [[fr(a, d), DIVIDE, fr(b, d), EQ, num(a), DIVIDE, num(b), EQ, box("s")]],
        boxes: { s: { kind: "enklaste", expected: answer } },
        steps: [
          { text: `Delarna är lika stora: hur många gånger ryms ${b} delar i ${a} delar?`, row: [fr(a, d), DIVIDE, fr(b, d), EQ, num(a), DIVIDE, num(b), EQ, fr(a, b)] },
          ...simplifySteps(answer),
        ],
      };
    }
    const dens = pickDenominators(rng, pick(rng, ["multipel", "olika"]), 36);
    const [f, g] = dens.map((d) => properFraction(rng, d));
    const { L, n1, n2, result, steps } = lcdDivision(f, g);
    return {
      key: `${f.num}/${f.den}÷${g.num}/${g.den}`,
      data: { f, g },
      prompt: "Använd minsta gemensamma nämnare. Svara i enklaste form.",
      rows: [[frv(f), DIVIDE, frv(g), EQ, box("x"), DIVIDE, box("y"), EQ, box("p"), DIVIDE, box("q"), EQ, box("s")]],
      boxes: {
        x: { kind: "frac", expected: { num: n1, den: L } },
        y: { kind: "frac", expected: { num: n2, den: L } },
        p: { kind: "int", expected: n1 },
        q: { kind: "int", expected: n2 },
        s: { kind: "enklaste", expected: result },
      },
      steps,
    };
  },
  mistakes: [
    divisionMistake("inverted-wrong-fraction", wrongInverse, () => "Du vände på fel bråk. Det är bråket du delar med (det andra bråket) som ska vändas."),
    divisionMistake("multiplied-instead", wrongProduct, (q) => {
      const { f, g } = q.data;
      return `Det där är ${f.num}/${f.den} · ${g.num}/${g.den}. Vid division är frågan hur många ${g.num}/${g.den} som ryms i ${f.num}/${f.den}.`;
    }),
  ],
};

const blandatDelatBlandat = {
  id: "blandat-delat-blandat",
  part: 4,
  title: "Blandade tal delat med blandade tal",
  intro: "Skriv först de blandade talen i bråkform. Dela sedan som med vanliga bråk: skriv dem med minsta gemensamma nämnare och dela täljarna.",
  exampleSeed: 43,
  formRule: true,
  generate(rng, level) {
    if (level === 0) {
      const m = { whole: randInt(rng, 1, 4), ...properFraction(rng, randInt(rng, 2, 5)) };
      const n = randInt(rng, 2, 6);
      const F = fromMixed(m.whole, m.num, m.den);
      const answer = { num: F.num, den: F.den * n };
      return {
        key: `${m.whole} ${m.num}/${m.den}÷${n}`,
        data: { m1: m, n },
        prompt: SIMPLEST,
        rows: [[mixed(m.whole, m.num, m.den), DIVIDE, num(n), EQ, box("x"), DIVIDE, num(n), EQ, box("s")]],
        boxes: { x: { kind: "brakform", expected: F }, s: { kind: "enklaste", expected: answer } },
        steps: [
          rewriteMixedStep(m),
          { text: `Dela med ${n}: multiplicera nämnaren med ${n}.`, row: [frv(F), DIVIDE, num(n), EQ, fr(F.num, text(`${F.den} · ${n}`)), EQ, fr(F.num, F.den * n)] },
          ...simplifySteps(answer),
        ],
      };
    }
    const c = sample(() => {
      const m1 = { whole: randInt(rng, 1, level === 2 ? 3 : 2), ...properFraction(rng, randInt(rng, 2, 6)) };
      const m2 = { whole: level === 1 ? 0 : randInt(rng, 1, 2), ...properFraction(rng, randInt(rng, 2, 6)) };
      const F1 = fromMixed(m1.whole, m1.num, m1.den);
      const F2 = fromMixed(m2.whole, m2.num, m2.den);
      const L = lcmAll([F1.den, F2.den]);
      if (L > (level === 2 ? 36 : 24) || (F1.num * L) / F1.den > 144) return null;
      return { m1, m2, F1, F2, L };
    });
    const { m1, m2, F1, F2 } = c;
    const { L, n1, n2, result, steps } = lcdDivision(F1, F2);
    const second = level === 1 ? frv(F2) : mixed(m2.whole, m2.num, m2.den);
    return {
      key: `${m1.whole} ${m1.num}/${m1.den}÷${m2.whole} ${m2.num}/${m2.den}`,
      data: c,
      prompt: SIMPLEST,
      rows: [
        [mixed(m1.whole, m1.num, m1.den), DIVIDE, second, EQ, box("x"), DIVIDE, level === 2 ? box("y") : frv(F2)],
        [EQ, box("u"), DIVIDE, box("v")],
        [EQ, box("p"), DIVIDE, box("q"), EQ, box("s")],
      ],
      boxes: {
        x: { kind: "brakform", expected: F1 },
        ...(level === 2 ? { y: { kind: "brakform", expected: F2 } } : {}),
        u: { kind: "frac", expected: { num: n1, den: L } },
        v: { kind: "frac", expected: { num: n2, den: L } },
        p: { kind: "int", expected: n1 },
        q: { kind: "int", expected: n2 },
        s: { kind: "enklaste", expected: result },
      },
      steps: [rewriteMixedStep(m1), ...(level === 2 ? [rewriteMixedStep(m2)] : []), ...steps],
    };
  },
  mistakes: [
    {
      id: "wholes-and-parts-separately",
      matches: (q, p) => {
        if (q.level !== 2) return false;
        const { m1, m2, F1, F2 } = q.data;
        const wrong = add({ num: m1.whole, den: m2.whole }, div({ num: m1.num, den: m1.den }, { num: m2.num, den: m2.den }));
        return !equal(wrong, div(F1, F2)) && equal(p.s.value, wrong);
      },
      text: () => "Man kan inte dela hela med hela och delar med delar. Skriv om till bråkform först.",
      sample: (q) => {
        if (q.level !== 2) return null;
        const { m1, m2, F1, F2 } = q.data;
        const wrong = add({ num: m1.whole, den: m2.whole }, div({ num: m1.num, den: m1.den }, { num: m2.num, den: m2.den }));
        return equal(wrong, div(F1, F2)) ? null : { s: rawSimplest(wrong) };
      },
    },
  ],
};

export const DEL4 = [heltalDelatStambrak, brakDelatBrak, blandatDelatBlandat];
