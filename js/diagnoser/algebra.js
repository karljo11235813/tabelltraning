// Algebraiska uttryck som eleven skriver: "3x – 1", "2(x + 3)", "(1 − x²)/x²", "y = 2x − 4". Allt räknas exakt med
// kvadratiska tal (surd.js), aldrig flyttal.
//
// parseAlgebra   läser texten till ett uttrycksträd, eller null. Variablerna är enskilda bokstäver: ab är a · b.
//                Gånger får skrivas ut (·, *, ×) eller utelämnas (2x, 3ab, x(x − 1), (x + 1)(x − 1), 2(x + 3)), men x är
//                aldrig gånger. Ett utelämnat gångertecken binder hårdare än / ("(6 − x²)/2x" är (6 − x²)/(2x)). En siffra
//                direkt efter en bokstav är en exponent (x2 är x², 2ab3 är 2ab³). ° räknas bort ((n − 2) · 180°), och så
//                gör en bokstav och = först ("y = 2x − 4" är 2x − 4). Facit läses alltid så.
// parseAlgebraReadings  båda läsningarna av det eleven skrev: med ett utelämnat gångertecken som binder hårdare än /, och
//                som vanligt gånger från vänster ("1/2bh" är både 1/(2bh) och (1/2)bh). Skrivsättet är tvetydigt, så
//                mark.js godtar svaret när någon av läsningarna är rätt. Ett enhetsord sist ("180(n − 2) grader") räknas
//                bort när det har en bokstav som inte är en av facits variabler. Tom lista när texten inte går att läsa.
// variablesOf    bokstäverna i ett träd, i bokstavsordning.
// evaluate       trädets värde när variablerna har värdena i env (kvadratiska tal). Kastar Unsupported när det inte
//                går att räkna exakt (division med noll, två olika rötter, en potens som blir för stor).
// isEquivalent   två uttryck är lika för alla värden på variablerna: de prövas exakt i några fasta punkter.
// canonicalKey   en text för uttryckets normalform (sorterade summor och produkter, se nedan), eller null.
// constantOf     värdet av ett uttryck utan variabler ("3 + √2", "(6 − √8)/2"), eller null.

import { normalizeAlgebra, stripDecoration } from "./parse.js";
import { rat, Unsupported, isNone } from "./value.js";
import { surd, add, neg, mul, div, pow, sqrt, equals, surdKey, ONE_SURD } from "./surd.js";

// Största exponenten (till beloppet), som i parse.js.
const MAX_EXPONENT = 100n;

class Syntaxfel extends Error {}

// ---------- LÄSA ----------

// Trädets noder:
//   { op: "num", v }          ett tal (kvadratiskt tal)
//   { op: "var", name }       en variabel
//   { op: "sum", terms }      en summa; ett minus är en term { op: "neg" }
//   { op: "prod", items }     en produkt; delat med är en faktor { op: "inv" }
//   { op: "neg", a }, { op: "inv", a }, { op: "pow", a, e } (e är ett BigInt), { op: "root", a }
//
// expr   = signed (("+"|"-") term)*  där varje term efter den första är term
// term   = signed (("·"|"/") signed)*
// signed = ("-"|"+") signed | juxt
// juxt   = power power*                (utelämnat gångertecken: nästa tecken är en bokstav, "(" eller "√")
// power  = atom ("^" heltal)?
// atom   = tal | bokstav siffror? | "(" expr ")" | "√" atom
// Med löst är juxt bara power, och term tar ett utelämnat gångertecken som ett · (term = signed (("·"|"/") signed |
// power)*), så att "1/2x" är (1/2) · x i stället för 1/(2x).
function läs(s, löst = false) {
  let i = 0;
  const fel = () => {
    throw new Syntaxfel();
  };
  const isDigit = (c) => c !== undefined && c >= "0" && c <= "9";
  const isLetter = (c) => c !== undefined && /^\p{L}$/u.test(c);

  const siffror = () => {
    const start = i;
    while (isDigit(s[i])) i++;
    if (i === start) fel();
    return s.slice(start, i);
  };

  function tal() {
    const hel = siffror();
    if (s[i] === ",") {
      i++;
      const bråkdel = siffror();
      return rat(BigInt(hel + bråkdel), 10n ** BigInt(bråkdel.length));
    }
    if (s[i] === "_") {
      // Ett blandat tal ("2 1/2" blir "2_1/2" i normalize).
      i++;
      const täljare = BigInt(siffror());
      if (s[i] !== "/") fel();
      i++;
      const nämnare = BigInt(siffror());
      if (nämnare === 0n) fel();
      return rat(BigInt(hel) * nämnare + täljare, nämnare);
    }
    return rat(BigInt(hel));
  }

  const exponent = () => {
    let negativ = false;
    if (s[i] === "-") {
      negativ = true;
      i++;
    }
    const e = BigInt(siffror());
    if (e > MAX_EXPONENT) fel();
    return negativ ? -e : e;
  };

  function atom() {
    const c = s[i];
    if (c === "(") {
      i++;
      const v = uttryck();
      if (s[i] !== ")") fel();
      i++;
      return v;
    }
    if (c === "√") {
      i++;
      return { op: "root", a: atom() };
    }
    if (isLetter(c)) {
      i++;
      const variable = { op: "var", name: c };
      // x2 är x²: ingen skriver en faktor efter sin bokstav.
      if (isDigit(s[i])) {
        const e = BigInt(siffror());
        if (e > MAX_EXPONENT || s[i] === "^") fel();
        return { op: "pow", a: variable, e };
      }
      return variable;
    }
    if (isDigit(c)) return { op: "num", v: surd(tal()) };
    return fel();
  }

  function potens() {
    const bas = atom();
    if (s[i] !== "^") return bas;
    i++;
    return { op: "pow", a: bas, e: exponent() };
  }

  const utelämnatGånger = () => s[i] === "(" || s[i] === "√" || isLetter(s[i]);

  function juxt() {
    const items = [potens()];
    while (!löst && utelämnatGånger()) items.push(potens());
    return items.length === 1 ? items[0] : { op: "prod", items };
  }

  function signed() {
    if (s[i] === "-") {
      i++;
      return { op: "neg", a: signed() };
    }
    if (s[i] === "+") {
      i++;
      return signed();
    }
    return juxt();
  }

  function term() {
    const items = [signed()];
    for (;;) {
      if (s[i] === "·") {
        i++;
        items.push(signed());
      } else if (s[i] === "/") {
        i++;
        items.push({ op: "inv", a: signed() });
      } else if (löst && utelämnatGånger()) items.push(potens());
      else break;
    }
    return items.length === 1 ? items[0] : { op: "prod", items };
  }

  function uttryck() {
    const terms = [term()];
    for (;;) {
      if (s[i] === "+") {
        i++;
        terms.push(term());
      } else if (s[i] === "-") {
        i++;
        terms.push({ op: "neg", a: term() });
      } else break;
    }
    return terms.length === 1 ? terms[0] : { op: "sum", terms };
  }

  if (s === "") fel();
  const tree = uttryck();
  if (i !== s.length) fel();
  return tree;
}

// "Svar:" först, skiljetecken sist, ° och en bokstav med = först räknas bort.
const LEDANDE_VARIABEL = /^\s*\p{L}\s*=(?!=)/u;
const MAX_LÄNGD = 200;

// Texten som läs får, eller null när den är för lång.
function förbered(text) {
  const rå = stripDecoration(text).replace(/°/g, "").replace(LEDANDE_VARIABEL, "");
  return rå.length > MAX_LÄNGD ? null : normalizeAlgebra(rå);
}

function läsEllerNull(s, löst) {
  if (s === null) return null;
  try {
    return läs(s, löst);
  } catch (e) {
    if (e instanceof Syntaxfel || e instanceof RangeError) return null;
    throw e;
  }
}

export function parseAlgebra(text) {
  return läsEllerNull(förbered(text), false);
}

// Ord sist i det eleven skrev, med mellanrum före och minst tre bokstäver ("180(n − 2) grader", "n(n − 3)/2 diagonaler").
const ORD_SIST = /(?<=\S)\s+(\p{L}{3,})$/u;

// Enhetsord sist räknas bort: ett ord som har en bokstav som inte är någon av variables (facits variabler). "3 abc"
// för 3abc är kvar, och en bokstav ("2 x") eller ihopskrivna bokstäver ("2ab") är alltid variabler.
function utanEnhetsord(text, variables) {
  let rå = stripDecoration(text);
  for (let m = rå.match(ORD_SIST); m !== null && [...m[1].toLowerCase()].some((c) => !variables.includes(c)); m = rå.match(ORD_SIST)) {
    rå = rå.slice(0, m.index);
  }
  return rå;
}

// Utan / ger båda läsningarna samma träd, och då ges bara ett. Med variables (facits variabler) räknas enhetsord sist
// bort (utanEnhetsord).
export function parseAlgebraReadings(text, variables = null) {
  const s = förbered(variables === null ? text : utanEnhetsord(text, variables));
  const tät = läsEllerNull(s, false);
  if (tät === null) return [];
  const lös = s.includes("/") ? läsEllerNull(s, true) : null;
  return lös === null ? [tät] : [tät, lös];
}

export function variablesOf(tree) {
  const found = new Set();
  const visit = (n) => {
    if (n.op === "var") found.add(n.name);
    else if (n.op === "sum") n.terms.forEach(visit);
    else if (n.op === "prod") n.items.forEach(visit);
    else if (n.a) visit(n.a);
  };
  visit(tree);
  return [...found].sort();
}

// ---------- RÄKNA ----------

// Varje exponent är högst 100, men de multipliceras: ((x^100)^100)^100 är x upphöjt till en miljon och skulle hänga
// sidan. En potens vars bas har b bitar (täljare, nämnare och radikand) och exponent e räknas bara ut när b · |e| är
// högst så här mycket; annars kastar den Unsupported, som division med noll.
const MAX_BITAR = 20_000;
const bitar = (v) => [v.p.n, v.p.d, v.p.r, v.s.n, v.s.d, v.s.r].reduce((sum, b) => sum + (b < 0n ? -b : b).toString(16).length * 4, 0);

export function evaluate(tree, env = {}) {
  switch (tree.op) {
    case "num":
      return tree.v;
    case "var":
      if (!Object.hasOwn(env, tree.name)) throw new Unsupported(`Variabeln ${tree.name} saknar värde`);
      return env[tree.name];
    case "sum":
      return tree.terms.map((t) => evaluate(t, env)).reduce(add);
    case "prod":
      return tree.items.map((t) => evaluate(t, env)).reduce(mul);
    case "neg":
      return neg(evaluate(tree.a, env));
    case "inv":
      return div(ONE_SURD, evaluate(tree.a, env));
    case "pow": {
      const bas = evaluate(tree.a, env);
      const e = tree.e < 0n ? -tree.e : tree.e;
      if (!isNone(bas) && bitar(bas) * Number(e) > MAX_BITAR) throw new Unsupported("Potensen blir för stor");
      return pow(bas, tree.e);
    }
    case "root":
      return sqrt(evaluate(tree.a, env));
  }
  throw new Error(`Okänd nod: ${tree.op}`);
}

// Värdet, eller null när det inte går att räkna exakt eller saknar reellt värde.
function tryEvaluate(tree, env) {
  try {
    const v = evaluate(tree, env);
    return isNone(v) ? null : v;
  } catch (e) {
    if (e instanceof Unsupported) return null;
    throw e;
  }
}

// Värdet av ett uttryck utan variabler ("3 + √2"), eller null.
export function constantOf(text) {
  const tree = parseAlgebra(text);
  if (tree === null || variablesOf(tree).length > 0) return null;
  return tryEvaluate(tree, {});
}

// ---------- LIKA FÖR ALLA VÄRDEN ----------

// Fasta, krångliga rationella tal att pröva i. Variabel nummer j får i punkt k värdet PRÖVOTAL[(5k + 3j) mod 16], så att
// olika variabler alltid får olika värden i samma punkt (3 är inverterbart mod 16).
const PRÖVOTAL = [[2, 3], [-7, 5], [11, 4], [3, 7], [-13, 6], [17, 9], [5, 2], [-19, 8], [23, 11], [7, 3], [-29, 10], [31, 12], [9, 13], [-37, 14], [41, 15], [13, 16]]
  .map(([n, d]) => surd(rat(n, d)));
const PUNKTER = 8;
// Minst så många punkter där båda uttrycken har ett värde. En punkt där något av dem delar med noll hoppas över.
const MINST = 4;

// a och b är träd (parseAlgebra). Sant när de är lika i varje prövad punkt där båda har ett värde, och det är minst MINST
// sådana punkter. (x + 1)² − x² − 2x och 1 är lika.
export function isEquivalent(a, b) {
  const names = [...new Set([...variablesOf(a), ...variablesOf(b)])].sort();
  if (names.length > PRÖVOTAL.length) return false;
  let checked = 0;
  for (let k = 0; k < PUNKTER; k++) {
    const env = Object.fromEntries(names.map((name, j) => [name, PRÖVOTAL[(5 * k + 3 * j) % PRÖVOTAL.length]]));
    const va = tryEvaluate(a, env);
    const vb = tryEvaluate(b, env);
    if (va === null || vb === null) continue;
    if (!equals(va, vb)) return false;
    checked++;
  }
  return checked >= MINST;
}

// ---------- NORMALFORM ----------

// Normalformen för "Förenkla": det som bara är ett annat skrivsätt av samma uttryck ger samma form, medan den
// oförenklade uppgiften inte gör det.
//   - summor och produkter plattas till och sorteras (1 + 3x = 3x + 1, x · 3 = 3x)
//   - minus är en term gånger −1
//   - ett deluttryck utan variabler blir ett exakt tal, och talen i en produkt blir en koefficient (x/2 = 0,5x)
//   - en kvot är en produkt med en invers; inversen av en produkt är produkten av inverserna, och inversen av x² är x^-2
//   - potenser behåller bas och exponent; lika baser slås inte ihop (x · x, x² · x och a²/a står kvar)
//   - summor multipliceras inte ut och termer läggs inte ihop (2(x + 3) ≠ 2x + 6, x + 2x ≠ 3x, x + 1 + 1 ≠ x + 2)
//
// Formens noder: { t: "n", v } tal, { t: "v", name }, { t: "s", terms } summa, { t: "p", c, fs } produkt med
// koefficienten c och minst en faktor, { t: "^", base, e } potens, { t: "r", body } rot. Varje nod har sin nyckel k.

const num = (v) => ({ t: "n", v, k: `n(${surdKey(v)})` });

function sumOf(parts) {
  const terms = parts.flatMap((p) => (p.t === "s" ? p.terms : [p]));
  if (terms.length === 1) return terms[0];
  terms.sort((x, y) => (x.k < y.k ? -1 : x.k > y.k ? 1 : 0));
  return { t: "s", terms, k: `s(${terms.map((x) => x.k).join(",")})` };
}

function productOf(parts) {
  let c = ONE_SURD;
  const fs = [];
  for (const p of parts) {
    if (p.t === "n") c = mul(c, p.v);
    else if (p.t === "p") {
      c = mul(c, p.c);
      fs.push(...p.fs);
    } else fs.push(p);
  }
  if (c.p.n === 0n && c.s.n === 0n) return num(c);
  if (fs.length === 0) return num(c);
  if (fs.length === 1 && equals(c, ONE_SURD)) return fs[0];
  fs.sort((x, y) => (x.k < y.k ? -1 : x.k > y.k ? 1 : 0));
  return { t: "p", c, fs, k: `p(${surdKey(c)};${fs.map((x) => x.k).join(",")})` };
}

function powerOf(base, e) {
  if (e === 0n) return num(ONE_SURD);
  if (e === 1n) return base;
  if (base.t === "n") return num(pow(base.v, e));
  return { t: "^", base, e, k: `^(${base.k};${e})` };
}

function inverseOf(x) {
  if (x.t === "n") return num(div(ONE_SURD, x.v));
  if (x.t === "^") return powerOf(x.base, -x.e);
  if (x.t === "p") return productOf([num(div(ONE_SURD, x.c)), ...x.fs.map(inverseOf)]);
  return powerOf(x, -1n);
}

function canonical(tree) {
  if (variablesOf(tree).length === 0) {
    const v = evaluate(tree, {});
    if (isNone(v)) throw new Unsupported("Inget reellt värde");
    return num(v);
  }
  switch (tree.op) {
    case "var":
      return { t: "v", name: tree.name, k: `v(${tree.name})` };
    case "sum":
      return sumOf(tree.terms.map(canonical));
    case "prod":
      return productOf(tree.items.map(canonical));
    case "neg":
      return productOf([num(neg(ONE_SURD)), canonical(tree.a)]);
    case "inv":
      return inverseOf(canonical(tree.a));
    case "pow":
      return powerOf(canonical(tree.a), tree.e);
    case "root": {
      const body = canonical(tree.a);
      return { t: "r", body, k: `r(${body.k})` };
    }
  }
  throw new Error(`Okänd nod: ${tree.op}`);
}

// Nyckeln för trädets normalform, eller null när något i det inte går att räkna exakt (division med noll).
export function canonicalKey(tree) {
  try {
    return canonical(tree).k;
  } catch (e) {
    if (e instanceof Unsupported) return null;
    throw e;
  }
}
