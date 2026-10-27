// Rättar rutorna i en fråga exakt. Tom eller oläslig inmatning räknas inte (status "invalid").
// Ett skalsvar med rätt förhållande men i fel ordning, oförkortat eller med decimaler är fel,
// med ett skäl som ger ett riktat tips.
import { parseDecimal, equals, formatDecimal, wholeRatio, isWhole } from "./decimal.js";

const INT_RE = /^\d{1,9}$/;

function readInt(raw) {
  const t = String(raw ?? "").replace(/\s/g, "");
  return INT_RE.test(t) ? Number(t) : null;
}

// En enhet efter talet godtas om det är rutans enhet: "350 cm" i en cm-ruta.
function readDecimal(b, raw) {
  if (typeof raw !== "string") return null;
  let t = raw.trim();
  if (b.unit && t.endsWith(b.unit)) t = t.slice(0, -b.unit.length).trim();
  return parseDecimal(t);
}

function readRatio(raw) {
  if (!raw) return null;
  const left = parseDecimal(String(raw.left ?? ""));
  const right = parseDecimal(String(raw.right ?? ""));
  if (!left || !right || left.m === 0 || right.m === 0) return null;
  return { left, right };
}

// Rå inmatning → tolkat värde, eller null om rutan inte går att rätta.
export function readBox(b, raw) {
  if (b.kind === "int") return readInt(raw);
  if (b.kind === "decimal") return readDecimal(b, raw);
  if (b.kind === "symbol") return ["<", "=", ">"].includes(raw) ? raw : null;
  if (b.kind === "choice") return b.options.includes(raw) ? raw : null;
  if (b.kind === "ratio") return readRatio(raw);
  if (b.kind === "pick") return Array.isArray(raw) && raw.length > 0 ? [...new Set(raw)].sort((x, y) => x - y) : null;
  throw new Error(`Okänd ruta: ${b.kind}`);
}

function gradeRatio([a, b], { left, right }) {
  const [p, q] = wholeRatio(left, right);
  const whole = isWhole(left) && isWhole(right);
  if (p === a && q === b) {
    if (!whole) return { ok: false, form: "not-whole" };
    return equals(left, { m: a, e: 0 }) && equals(right, { m: b, e: 0 }) ? { ok: true } : { ok: false, form: "not-reduced" };
  }
  if (p === b && q === a) return { ok: false, form: "reversed" };
  return { ok: false };
}

// { ok } och, när ett skalsvar har rätt förhållande men fel form, skälet i form.
export function gradeBox(b, v) {
  const e = b.expected;
  if (b.kind === "int" || b.kind === "symbol" || b.kind === "choice") return { ok: v === e };
  if (b.kind === "decimal") return { ok: equals(v, e) };
  if (b.kind === "ratio") return gradeRatio(e, v);
  if (b.kind === "pick") return { ok: v.length === e.length && v.every((x, i) => x === e[i]) };
  throw new Error(`Okänd ruta: ${b.kind}`);
}

export function check(question, answers, mistakes = []) {
  const entries = Object.entries(question.boxes);
  const parsed = {};
  const invalid = [];
  for (const [id, b] of entries) {
    const v = readBox(b, answers[id]);
    if (v === null) invalid.push(id);
    else parsed[id] = v;
  }
  if (invalid.length > 0) return { status: "invalid", wrongBoxes: [], invalidBoxes: invalid, reason: null, formBox: null, parsed };
  const wrong = entries.map(([id, b]) => [id, gradeBox(b, parsed[id])]).filter(([, g]) => !g.ok);
  if (wrong.length === 0) return { status: "ok", wrongBoxes: [], invalidBoxes: [], reason: null, formBox: null, parsed };
  const mistake = mistakes.find((m) => m.matches(question, parsed));
  const formed = wrong.find(([, g]) => g.form);
  const formBox = !mistake && formed ? formed[0] : null;
  return {
    status: "wrong",
    wrongBoxes: wrong.map(([id]) => id),
    invalidBoxes: [],
    reason: mistake ? mistake.id : formed ? formed[1].form : "wrong",
    formBox,
    parsed,
  };
}

const ratioText = (v) => `${formatDecimal(v.left)} : ${formatDecimal(v.right)}`;

const FORM_TIPS = {
  reversed: (v) => `Du skrev ${ratioText(v)}. Skalan skrivs bild : verklighet.`,
  "not-reduced": (v) => `Rätt förhållande, men ${ratioText(v)} kan förkortas. Förkorta tills ett av talen är 1.`,
  "not-whole": () => "Rätt förhållande, men skalan skrivs med heltal. Förläng båda talen tills de blir heltal.",
};

export function tipFor(question, result, mistakes = []) {
  if (result.status !== "wrong") return null;
  const mistake = mistakes.find((m) => m.id === result.reason);
  if (mistake) return mistake.text(question, result.parsed);
  if (!result.formBox) return null;
  return FORM_TIPS[result.reason](result.parsed[result.formBox]);
}

export function rawInt(n) {
  return String(n);
}

export function rawDecimal(x) {
  return formatDecimal(x);
}

export function rawRatio(a, b) {
  return { left: String(a), right: String(b) };
}

export function rawFor(b) {
  if (b.kind === "int") return rawInt(b.expected);
  if (b.kind === "decimal") return rawDecimal(b.expected);
  if (b.kind === "symbol" || b.kind === "choice") return b.expected;
  if (b.kind === "ratio") return rawRatio(b.expected[0], b.expected[1]);
  if (b.kind === "pick") return [...b.expected];
  throw new Error(`Okänd ruta: ${b.kind}`);
}

export function correctAnswers(question) {
  return Object.fromEntries(Object.entries(question.boxes).map(([id, b]) => [id, rawFor(b)]));
}
