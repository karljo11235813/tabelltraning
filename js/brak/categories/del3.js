// Del 3 — Multiplikation: bråk gånger heltal, bråkdel av ett antal, stambråk, bråk gånger bråk, blandade tal.
import { equal, gcd } from "../../representationer/rational.js";
import { pick, randInt } from "../../representationer/random.js";
import { text, num, fr, frv, mixed, op, pic, box, EQ, PLUS, TIMES, DIVIDE } from "../pieces.js";
import { add, mul, fromMixed } from "../fractions.js";
import { rawFrac, rawInt, rawMixed, rawSimplest } from "../check.js";
import { sample, coprimeNums, properFraction, simplifySteps, strip, rewriteMixedStep } from "./helpers.js";

const SIMPLEST = "Räkna ut. Svara i enklaste form.";

const upprepadAddition = {
  id: "upprepad-addition",
  part: 3,
  title: "Bråk gånger heltal",
  intro: "3 · 2/7 betyder 2/7 + 2/7 + 2/7. Nämnaren ändras inte — det är bara antalet delar i täljaren som multipliceras.",
  exampleSeed: 31,
  formRule: true,
  generate(rng, level) {
    const { a, d, k } = sample(() => {
      const d = randInt(rng, 2, level === 2 ? 12 : 10);
      const a = pick(rng, coprimeNums(d));
      const k = randInt(rng, 2, [4, 5, 9][level]);
      const p = k * a;
      const ok = level === 0 ? p < d && gcd(p, d) === 1 : level === 1 ? p > d && gcd(p, d) === 1 : gcd(p, d) > 1;
      return ok ? { a, d, k } : null;
    });
    const p = k * a;
    const answer = { num: p, den: d };
    const data = { a, d, k, p };
    if (level < 2) {
      const sum = Array.from({ length: k }, (_, i) => (i === 0 ? [fr(a, d)] : [PLUS, fr(a, d)])).flat();
      return {
        key: `${k}·${a}/${d}`,
        data,
        prompt: SIMPLEST,
        rows: [[num(k), TIMES, fr(a, d), EQ, ...sum, EQ, box("s")]],
        boxes: { s: { kind: "enklaste", expected: answer } },
        steps: [
          { text: `${k} · ${a}/${d} är ${a}/${d} adderat ${k} gånger. Nämnaren ändras inte.` },
          { text: `Räkna delarna: ${k} · ${a} = ${p}.`, row: [...sum, EQ, fr(p, d)] },
          ...simplifySteps(answer),
        ],
      };
    }
    return {
      key: `${k}·${a}/${d}`,
      data,
      prompt: SIMPLEST,
      rows: [[num(k), TIMES, fr(a, d), EQ, fr(text(`${k} · ${a}`), d), EQ, fr(box("p"), d), EQ, box("s")]],
      boxes: { p: { kind: "int", expected: p }, s: { kind: "enklaste", expected: answer } },
      steps: [
        { text: `Att addera ${a}/${d} ${k} gånger ger ${k} · ${a} delar. Bara täljaren multipliceras.`, row: [num(k), TIMES, fr(a, d), EQ, fr(p, d)] },
        ...simplifySteps(answer),
      ],
    };
  },
  mistakes: [
    {
      id: "multiplied-denominator-too",
      matches: (q, p) => equal(p.s.value, { num: q.data.a, den: q.data.d }),
      text: (q) => `Nämnaren ändras inte när du adderar bråk med samma nämnare. Bara täljaren multipliceras med ${q.data.k}.`,
      sample: (q) => ({ s: rawMixed(0, q.data.p, q.data.k * q.data.d) }),
    },
  ],
};

const bradelAvAntal = {
  id: "bradel-av-antal",
  part: 3,
  title: "Bråkdel av ett antal",
  intro: "1/3 av 12 betyder att 12 delas i 3 lika stora delar: 12 ÷ 3 = 4. 2/3 av 12 är två sådana delar: 2 · 4 = 8. ”Av” betyder gånger.",
  exampleSeed: 32,
  formRule: false,
  generate(rng, level) {
    const { n, q, M, a } = sample(() => {
      const n = randInt(rng, 2, 10);
      const q = randInt(rng, 2, level === 2 ? 12 : 10);
      const M = n * q;
      if (M > (level === 2 ? 100 : 60)) return null;
      if (level === 0) return { n, q, M, a: 1 };
      const nums = coprimeNums(n).filter((x) => x >= 2);
      return nums.length > 0 ? { n, q, M, a: pick(rng, nums) } : null;
    });
    const data = { n, q, M, a };
    const split = { text: `1/${n} av ${M}: dela ${M} i ${n} lika stora delar.`, row: [num(M), DIVIDE, num(n), EQ, num(q)] };
    if (level === 0) {
      return {
        key: `1/${n} av ${M}`,
        data,
        prompt: "Räkna ut.",
        rows: [[fr(1, n), text("av"), num(M), EQ, box("y")]],
        boxes: { y: { kind: "int", expected: q } },
        steps: [split],
      };
    }
    const scale = { text: `${a}/${n} är ${a} sådana delar: ${a} · ${q} = ${a * q}.`, row: [fr(a, n), TIMES, num(M), EQ, num(a * q)] };
    if (level === 1) {
      return {
        key: `${a}/${n} av ${M}`,
        data,
        prompt: "Räkna ut.",
        rows: [[fr(1, n), text("av"), num(M), EQ, box("x")], [fr(a, n), text("av"), num(M), EQ, box("y")]],
        boxes: { x: { kind: "int", expected: q }, y: { kind: "int", expected: a * q } },
        steps: [split, scale],
      };
    }
    return {
      key: `${a}/${n} · ${M}`,
      data,
      prompt: "”Av” betyder gånger. Räkna ut.",
      rows: [[fr(a, n), text("av"), num(M), text("är samma sak som")], [fr(a, n), TIMES, num(M), EQ, box("y")]],
      boxes: { y: { kind: "int", expected: a * q } },
      steps: [split, scale],
    };
  },
  mistakes: [
    {
      id: "divided-by-numerator",
      matches: (q, p) => q.data.a >= 2 && p.y * q.data.a === q.data.M,
      text: (q) => `Nämnaren ${q.data.n} talar om hur många delar ${q.data.M} ska delas i. Dela med nämnaren, inte med täljaren.`,
      sample: (q) => (q.data.a >= 2 && q.data.M % q.data.a === 0 ? { y: rawInt(q.data.M / q.data.a) } : null),
    },
    {
      id: "forgot-numerator",
      matches: (q, p) => q.data.a >= 2 && p.y === q.data.q,
      text: (q) => `Det där är 1/${q.data.n} av ${q.data.M}. Hur mycket är ${q.data.a} sådana delar?`,
      sample: (q) => (q.data.a >= 2 ? { y: rawInt(q.data.q) } : null),
    },
    {
      id: "multiplied-only",
      matches: (q, p) => q.data.a >= 2 && p.y === q.data.a * q.data.M,
      text: (q) => `Du multiplicerade med ${q.data.a} men delade inte med ${q.data.n}.`,
      sample: (q) => (q.data.a >= 2 ? { y: rawInt(q.data.a * q.data.M) } : null),
    },
  ],
};

// 1/n och a/d. Delbar: n går jämnt upp i a (dela täljaren). Annars multipliceras nämnaren.
function pickUnitCase(rng, divisible) {
  return sample(() => {
    const n = randInt(rng, 2, 5);
    const d = randInt(rng, 3, 12);
    const a = pick(rng, coprimeNums(d));
    if (divisible !== (a % n === 0)) return null;
    return divisible || d * n <= 60 ? { n, a, d } : null;
  });
}

const otherMethodText = "Rätt värde, men skriv det på det sätt som uppgiften frågar efter.";

const stambrakGangerBrak = {
  id: "stambrak-ganger-brak",
  part: 3,
  title: "Stambråk gånger bråk",
  intro: "1/3 · 6/7 betyder en tredjedel av 6/7. Går täljaren att dela med 3, dela den: 6/7 blir 2/7. Annars delar du varje del i 3 mindre delar — då multipliceras nämnaren med 3.",
  exampleSeed: 33,
  formRule: true,
  generate(rng, level) {
    const { n, a, d } = pickUnitCase(rng, level !== 1);
    const data = { n, a, d };
    const lhs = [fr(1, n), TIMES, fr(a, d)];
    const key = `1/${n}·${a}/${d}`;
    const divideSteps = [
      { text: `${a} ÷ ${n} = ${a / n}: ${a} delar i ${n} lika stora grupper blir ${a / n} delar i varje grupp.`, row: [...lhs, EQ, fr(text(`${a} ÷ ${n}`), d), EQ, fr(a / n, d)] },
      { row: [pic(strip(d, a)), op("→"), pic(strip(d, a / n))] },
    ];
    const multiplyStep = {
      text: `Dela varje 1/${d} i ${n} delar. Då blir delarna 1/${d * n}, och det är fortfarande ${a} stycken.`,
      row: [...lhs, EQ, fr(a, text(`${d} · ${n}`)), EQ, fr(a, d * n)],
    };
    if (level === 0) {
      return {
        key,
        data,
        prompt: `Räkna ut genom att dela täljaren med ${n}.`,
        rows: [[...lhs, EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a / n, den: d } } },
        steps: divideSteps,
      };
    }
    if (level === 1) {
      return {
        key,
        data,
        prompt: `${a} går inte att dela med ${n}. Multiplicera i stället nämnaren med ${n}.`,
        rows: [[...lhs, EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a, den: d * n } } },
        steps: [multiplyStep],
      };
    }
    return {
      key,
      data,
      prompt: "Räkna ut på båda sätten. Svara i enklaste form på sista raden.",
      rows: [lhs, [text("Dela täljaren:"), box("x")], [text("Multiplicera nämnaren:"), box("y")], [text("Förkorta det andra svaret:"), box("s")]],
      boxes: {
        x: { kind: "frac", expected: { num: a / n, den: d } },
        y: { kind: "frac", expected: { num: a, den: d * n } },
        s: { kind: "enklaste", expected: { num: a, den: d * n } },
      },
      steps: [...divideSteps, multiplyStep, { text: "Båda sätten ger samma tal.", row: [fr(a, d * n), EQ, fr(a / n, d)] }],
    };
  },
  mistakes: [
    {
      id: "multiplied-numerator",
      matches: (q, p) => equal(p.x, { num: q.data.a * q.data.n, den: q.data.d }),
      text: (q) => `Att ta 1/${q.data.n} av något gör det mindre. Täljaren ska delas med ${q.data.n}, inte multipliceras.`,
      sample: (q) => ({ x: rawFrac(q.data.a * q.data.n, q.data.d) }),
    },
    {
      id: "divided-denominator",
      matches: (q, p) => q.data.d % q.data.n === 0 && equal(p.x, { num: q.data.a, den: q.data.d / q.data.n }),
      text: () => "Om nämnaren blir mindre blir delarna större — då blir talet större, inte mindre.",
      sample: (q) => (q.data.d % q.data.n === 0 ? { x: rawFrac(q.data.a, q.data.d / q.data.n) } : null),
    },
    {
      id: "other-method",
      matches: (q, p) =>
        ["x", "y"].some((id) => {
          const b = q.boxes[id];
          return b && equal(p[id], b.expected) && (p[id].num !== b.expected.num || p[id].den !== b.expected.den);
        }),
      text: () => otherMethodText,
      sample: (q) => (q.level !== 1 ? { x: rawFrac(q.data.a, q.data.d * q.data.n) } : null),
    },
  ],
};

const brakDelatHeltal = {
  id: "brak-delat-heltal",
  part: 3,
  title: "Bråk delat med heltal",
  intro: "Att dela med 3 är samma sak som att ta 1/3 av talet. Går täljaren att dela med 3, dela den. Annars multiplicerar du nämnaren med 3.",
  exampleSeed: 34,
  formRule: true,
  generate(rng, level) {
    const { n, a, d } = pickUnitCase(rng, level === 0 ? true : level === 1 ? false : rng() < 0.5);
    const data = { n, a, d };
    const lhs = [fr(a, d), DIVIDE, num(n)];
    const key = `${a}/${d}÷${n}`;
    if (level === 0) {
      return {
        key,
        data,
        prompt: `Räkna ut genom att dela täljaren med ${n}.`,
        rows: [[...lhs, EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a / n, den: d } } },
        steps: [{ text: `${a} ÷ ${n} = ${a / n}. Nämnaren ändras inte.`, row: [...lhs, EQ, fr(text(`${a} ÷ ${n}`), d), EQ, fr(a / n, d)] }],
      };
    }
    if (level === 1) {
      return {
        key,
        data,
        prompt: `${a} går inte att dela med ${n}. Multiplicera i stället nämnaren med ${n}.`,
        rows: [[...lhs, EQ, box("x")]],
        boxes: { x: { kind: "frac", expected: { num: a, den: d * n } } },
        steps: [{ text: `Dela varje 1/${d} i ${n} delar: nämnaren blir ${d} · ${n} = ${d * n}.`, row: [...lhs, EQ, fr(a, text(`${d} · ${n}`)), EQ, fr(a, d * n)] }],
      };
    }
    const answer = { num: a, den: d * n };
    return {
      key,
      data,
      prompt: "Att dela med ett tal är samma sak som att multiplicera med ett stambråk. Svara i enklaste form.",
      rows: [[...lhs, EQ, box("x"), TIMES, fr(a, d), EQ, box("s")]],
      boxes: { x: { kind: "frac", expected: { num: 1, den: n } }, s: { kind: "enklaste", expected: answer } },
      steps: [
        { text: `Att dela med ${n} är samma sak som att ta 1/${n} av talet.`, row: [...lhs, EQ, fr(1, n), TIMES, fr(a, d), EQ, fr(a, d * n)] },
        ...simplifySteps(answer),
      ],
    };
  },
  mistakes: [
    {
      id: "multiplied-numerator",
      matches: (q, p) => equal(q.level === 2 ? p.s.value : p.x, { num: q.data.a * q.data.n, den: q.data.d }),
      text: (q) => `Att dela med ${q.data.n} gör talet mindre. Täljaren ska inte multipliceras.`,
      sample: (q) => {
        const wrong = { num: q.data.a * q.data.n, den: q.data.d };
        return q.level === 2 ? { s: rawSimplest(wrong) } : { x: rawFrac(wrong.num, wrong.den) };
      },
    },
    {
      id: "divided-wrong-part",
      matches: (q, p) => q.level === 1 && q.data.d % q.data.n === 0 && equal(p.x, { num: q.data.a, den: q.data.d / q.data.n }),
      text: () => "Om du delar nämnaren blir delarna större och talet större. Multiplicera nämnaren i stället.",
      sample: (q) => (q.level === 1 && q.data.d % q.data.n === 0 ? { x: rawFrac(q.data.a, q.data.d / q.data.n) } : null),
    },
    {
      id: "other-method",
      matches: (q, p) => q.level < 2 && equal(p.x, q.boxes.x.expected) && p.x.num !== q.boxes.x.expected.num,
      text: (q) =>
        q.level === 0
          ? `Rätt värde, men här ska du dela täljaren med ${q.data.n}.`
          : `Rätt värde, men här ska du multiplicera nämnaren med ${q.data.n} och låta täljaren vara: ${q.data.a}/${q.data.d * q.data.n}.`,
      sample: (q) => {
        if (q.level === 0) return { x: rawFrac(q.data.a, q.data.d * q.data.n) };
        const g = gcd(q.data.a, q.data.d * q.data.n);
        return q.level === 1 && g > 1 ? { x: rawFrac(q.data.a / g, (q.data.d * q.data.n) / g) } : null;
      },
    },
    {
      id: "multiplied-by-n",
      matches: (q, p) => q.level === 2 && p.x.num === q.data.n && p.x.den === 1,
      text: (q) => `Att dela med ${q.data.n} är samma sak som att multiplicera med 1/${q.data.n}, inte med ${q.data.n}.`,
      sample: (q) => (q.level === 2 ? { x: rawFrac(q.data.n, 1) } : null),
    },
  ],
};

// Rutan p ska ha produkten oförkortad. Ett förkortat (eller annat likvärdigt) bråk där är rätt värde men fel ruta.
const unreducedBoxMistake = {
  id: "unreduced-box",
  matches: (q, p) => equal(p.p, q.boxes.p.expected) && (p.p.num !== q.boxes.p.expected.num || p.p.den !== q.boxes.p.expected.den),
  text: () => "Rätt värde, men i den här rutan ska produkten stå oförkortad: täljare gånger täljare och nämnare gånger nämnare. Förkorta i sista rutan.",
  sample: (q) => {
    const { num: n, den: d } = q.boxes.p.expected;
    const g = gcd(n, d);
    return g > 1 ? { p: rawFrac(n / g, d / g) } : null;
  },
};

const brakGangerBrak = {
  id: "brak-ganger-brak",
  part: 3,
  title: "Bråk gånger bråk",
  intro: "Multiplicera täljare med täljare och nämnare med nämnare. Förkorta sedan svaret så långt det går.",
  exampleSeed: 35,
  formRule: true,
  generate(rng, level) {
    const { f, g } = sample(() => {
      let f;
      let g;
      if (level < 2) {
        f = properFraction(rng, randInt(rng, 2, 9));
        g = properFraction(rng, randInt(rng, 2, 9));
      } else {
        f = { num: randInt(rng, 1, 12), den: randInt(rng, 2, 6) };
        g = { num: randInt(rng, 1, 12), den: randInt(rng, 2, 6) };
        if (gcd(f.num, f.den) !== 1 || gcd(g.num, g.den) !== 1 || (f.num < f.den && g.num < g.den)) return null;
      }
      const P = { num: f.num * g.num, den: f.den * g.den };
      if (level === 0 && gcd(P.num, P.den) !== 1) return null;
      if (level === 1 && gcd(P.num, P.den) === 1) return null;
      if (level === 2 && P.num <= P.den) return null;
      return { f, g };
    });
    const P = { num: f.num * g.num, den: f.den * g.den };
    const steps = [
      {
        text: "Multiplicera täljare med täljare och nämnare med nämnare.",
        row: [frv(f), TIMES, frv(g), EQ, fr(text(`${f.num} · ${g.num}`), text(`${f.den} · ${g.den}`)), EQ, frv(P)],
      },
      ...simplifySteps(P),
    ];
    const pairs = [[f.num, g.den], [g.num, f.den]]
      .filter(([x, y]) => gcd(x, y) > 1)
      .map(([x, y]) => `${x} och ${y} kan båda delas med ${gcd(x, y)}`);
    if (pairs.length > 0) steps.push({ text: `Du kan också förkorta före multiplikationen: ${pairs.join(", och ")}.` });
    return {
      key: `${f.num}/${f.den}·${g.num}/${g.den}`,
      data: { f, g, P },
      prompt: SIMPLEST,
      rows: [[frv(f), TIMES, frv(g), EQ, box("p"), EQ, box("s")]],
      boxes: { p: { kind: "frac", expected: P }, s: { kind: "enklaste", expected: P } },
      steps,
    };
  },
  mistakes: [
    {
      id: "cross-multiplied",
      matches: (q, p) => {
        const { f, g, P } = q.data;
        const cross = { num: f.num * g.den, den: f.den * g.num };
        return !equal(cross, P) && (equal(p.p, cross) || equal(p.s.value, cross));
      },
      text: () => "Du multiplicerade korsvis. Vid multiplikation: täljare gånger täljare och nämnare gånger nämnare.",
      sample: (q) => {
        const { f, g, P } = q.data;
        const cross = { num: f.num * g.den, den: f.den * g.num };
        return equal(cross, P) ? null : { p: rawFrac(cross.num, cross.den) };
      },
    },
    {
      id: "kept-one-denominator",
      matches: (q, p) => {
        const { f, g, P } = q.data;
        return p.p.num === P.num && (p.p.den === f.den || p.p.den === g.den) && p.p.den !== P.den;
      },
      text: () => "Nämnarna ska också multipliceras med varandra.",
      sample: (q) => ({ p: rawFrac(q.data.P.num, q.data.f.den) }),
    },
 
    unreducedBoxMistake,
  ],
};

const blandatGangerBlandat = {
  id: "blandat-ganger-blandat",
  part: 3,
  title: "Blandade tal gånger blandade tal",
  intro: "Skriv först de blandade talen i bråkform. Multiplicera sedan som vanligt och skriv svaret i enklaste form.",
  exampleSeed: 36,
  formRule: true,
  generate(rng, level) {
    const c = sample(() => {
      const [wMax, dMax] = level === 2 ? [3, 6] : [2, 4];
      const m1 = { whole: randInt(rng, 1, wMax), ...properFraction(rng, randInt(rng, 2, dMax)) };
      const m2 = { whole: level === 0 ? 0 : randInt(rng, 1, wMax), ...properFraction(rng, randInt(rng, 2, dMax)) };
      const F1 = fromMixed(m1.whole, m1.num, m1.den);
      const F2 = fromMixed(m2.whole, m2.num, m2.den);
      const P = { num: F1.num * F2.num, den: F1.den * F2.den };
      if (P.num > 144 || (level === 2 && gcd(P.num, P.den) === 1)) return null;
      return { m1, m2, F1, F2, P };
    });
    const { m1, m2, F1, F2, P } = c;
    const first = mixed(m1.whole, m1.num, m1.den);
    const second = level === 0 ? frv(F2) : mixed(m2.whole, m2.num, m2.den);
    const boxes =
      level === 0
        ? { x: { kind: "brakform", expected: F1 }, p: { kind: "frac", expected: P }, s: { kind: "enklaste", expected: P } }
        : {
            x: { kind: "brakform", expected: F1 },
            y: { kind: "brakform", expected: F2 },
            p: { kind: "frac", expected: P },
            s: { kind: "enklaste", expected: P },
          };
    return {
      key: `${m1.whole} ${m1.num}/${m1.den}·${m2.whole} ${m2.num}/${m2.den}`,
      data: c,
      prompt: SIMPLEST,
      rows: [[first, TIMES, second, EQ, box("x"), TIMES, level === 0 ? frv(F2) : box("y"), EQ, box("p"), EQ, box("s")]],
      boxes,
      steps: [
        rewriteMixedStep(m1),
        ...(level === 0 ? [] : [rewriteMixedStep(m2)]),
        { text: "Multiplicera täljare med täljare och nämnare med nämnare.", row: [frv(F1), TIMES, frv(F2), EQ, frv(P)] },
        ...simplifySteps(P),
      ],
    };
  },
  mistakes: [
    {
      id: "wholes-and-parts-separately",
      matches: (q, p) => {
        const { m1, m2 } = q.data;
        if (m2.whole === 0) return false;
        const wrong = add({ num: m1.whole * m2.whole, den: 1 }, mul({ num: m1.num, den: m1.den }, { num: m2.num, den: m2.den }));
        return equal(p.s.value, wrong);
      },
      text: () => "Man kan inte multiplicera hela med hela och delar med delar. Skriv om till bråkform först.",
      sample: (q) => {
        const { m1, m2 } = q.data;
        if (m2.whole === 0) return null;
        return { s: rawSimplest(add({ num: m1.whole * m2.whole, den: 1 }, mul({ num: m1.num, den: m1.den }, { num: m2.num, den: m2.den }))) };
      },
    },
    unreducedBoxMistake,
  ],
};

export const DEL3 = [upprepadAddition, bradelAvAntal, stambrakGangerBrak, brakDelatHeltal, brakGangerBrak, blandatGangerBlandat];
