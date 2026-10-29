// Radmarkering: hur diagnosernas rader skrivs i datafilerna, t.ex. "6 + 1 = [a]" eller
// "{4^4 · 3^7|4^3 · 3^5} = [a]".
//
//   [id]       en ruta (id är bokstäver, siffror och _; annars är hakparentesen vanlig text)
//   ^3 ^-5     en exponent; ^(…) tar allt inom parentesen
//   {topp|botten}  ett stående bråk; topp och botten är markering och får nästlas
//   √{…}       en rot med överstreck över innehållet; √3 är roten ur ett tal
//   allt annat är vanlig text
//
// parseMarkup    ger tecken att rita ("-" blir "−" i text och exponenter).
// markupToExpr   ger uttryckstext som parseExpr läser; vanlig text och exponenter behålls som de står.
// rowHolds       sätter in svaren och avgör om likheten stämmer.
// tokensToLatex  ger LaTeX för tecken utan rutor (för KaTeX).
// layoutRow      delar en rad vid sina rutor och ger LaTeX för varje bit mellan dem (null om en ruta ligger i ett bråk
//                eller en rot). render.js ritar bitarna med KaTeX när det har laddats, annars som förut.
//
// Trasig markering (oparade { }, bråk utan |) kastar: det är ett fel i datafilen, och en rad som
// ritas fel ser ut som en annan uppgift för eleven.

import { parseExpr } from "./parse.js";
import { equals } from "./value.js";

const BOX = /\[([A-Za-z0-9_]+)\]/y;
const EXPONENT = /\^[-−]?\d+/y;
const ROOT_NUMBER = /√(\d+(?:[.,]\d+)?)/y;

const fail = (markup, why) => {
  throw new Error(`Ogiltig radmarkering "${markup}": ${why}`);
};

function match(re, s, i) {
  re.lastIndex = i;
  return re.exec(s);
}

// Exponenten som börjar i s[i] === "^": hela texten ("^-5", "^(n+1)") och det som ska ritas.
// null när ^ inte följs av en exponent (siffror eller parentes som stängs).
function readExponent(s, i) {
  const m = match(EXPONENT, s, i);
  if (m) return { src: m[0], shown: m[0].slice(1) };
  if (s[i + 1] !== "(") return null;
  let depth = 0;
  for (let j = i + 1; j < s.length; j++) {
    if (s[j] === "(") depth++;
    else if (s[j] === ")" && --depth === 0) return { src: s.slice(i, j + 1), shown: s.slice(i + 2, j) };
  }
  return null;
}

// Läser noder från s[i] tills ett av tecknen i stops dyker upp (eller strängen tar slut).
// Returnerar noderna och var den stoppade. Texten sparas som den står; "−" läggs på först vid ritning.
function readNodes(s, i, stops, markup) {
  const nodes = [];
  let text = "";
  const flush = () => {
    if (text) nodes.push({ t: "text", raw: text });
    text = "";
  };

  while (i < s.length && !stops.includes(s[i])) {
    const c = s[i];
    let m;
    if (c === "[" && (m = match(BOX, s, i))) {
      flush();
      nodes.push({ t: "box", id: m[1] });
      i += m[0].length;
    } else if (c === "^" && (m = readExponent(s, i))) {
      flush();
      nodes.push({ t: "sup", src: m.src, shown: m.shown });
      i += m.src.length;
    } else if (c === "{") {
      flush();
      const top = readNodes(s, i + 1, ["|", "}"], markup);
      if (s[top.end] !== "|") fail(markup, "bråket saknar |");
      const bottom = readNodes(s, top.end + 1, ["|", "}"], markup);
      if (s[bottom.end] === "|") fail(markup, "bråket har mer än ett |");
      if (s[bottom.end] !== "}") fail(markup, "bråket saknar }");
      nodes.push({ t: "frac", top: top.nodes, bottom: bottom.nodes });
      i = bottom.end + 1;
    } else if (c === "√" && s[i + 1] === "{") {
      flush();
      const body = readNodes(s, i + 2, ["}"], markup);
      if (s[body.end] !== "}") fail(markup, "roten saknar }");
      nodes.push({ t: "root", body: body.nodes });
      i = body.end + 1;
    } else if (c === "√" && (m = match(ROOT_NUMBER, s, i))) {
      flush();
      nodes.push({ t: "root", body: [{ t: "text", raw: m[1] }] });
      i += m[0].length;
    } else {
      text += c;
      i++;
    }
  }
  flush();
  return { nodes, end: i };
}

function parseNodes(markup) {
  const s = String(markup);
  const { nodes, end } = readNodes(s, 0, ["}"], s);
  if (end < s.length) fail(s, "} utan { eller √{");
  return nodes;
}

const minus = (s) => s.replaceAll("-", "−");

function toTokens(nodes) {
  return nodes.map((n) => {
    switch (n.t) {
      case "text":
        return { t: "text", s: minus(n.raw) };
      case "box":
        return { t: "box", id: n.id };
      case "sup":
        return { t: "sup", s: minus(n.shown) };
      case "frac":
        return { t: "frac", top: toTokens(n.top), bottom: toTokens(n.bottom) };
      case "root":
        return { t: "root", body: toTokens(n.body) };
    }
  });
}

// boxText(id) ger texten som rutan ersätts med (utan parentes; den läggs på här).
function toExpr(nodes, boxText) {
  return nodes
    .map((n) => {
      switch (n.t) {
        case "text":
          return n.raw;
        case "box":
          return `(${boxText(n.id)})`;
        case "sup":
          return n.src;
        case "frac":
          return `((${toExpr(n.top, boxText)})/(${toExpr(n.bottom, boxText)}))`;
        case "root":
          return `√(${toExpr(n.body, boxText)})`;
      }
    })
    .join("");
}

export function parseMarkup(markup) {
  return toTokens(parseNodes(markup));
}

function lookup(fill) {
  return (id) => {
    if (!Object.prototype.hasOwnProperty.call(fill ?? {}, id) || fill[id] == null) {
      throw new Error(`Rutan ${id} saknas i fill`);
    }
    return String(fill[id]);
  };
}

// {a|b} blir ((a)/(b)), √{x} blir √(x) och [id] blir (fill[id]). Kastar om en ruta saknas i fill.
export function markupToExpr(markup, fill) {
  return toExpr(parseNodes(markup), lookup(fill));
}

const countEquals = (s) => s.split("=").length - 1;

// Sant eller falskt när raden har exakt ett = och båda sidor går att läsa (två sidor utan reellt
// värde räknas som lika). null när den inte går att kontrollera: inget =, flera =, eller en sida
// som parseExpr inte läser. Kastar om en ruta saknas i fill, men bara för rader som har ett =.
export function rowHolds(markup, fill) {
  const nodes = parseNodes(markup);
  // Antalet = räknas på raden utan svar, så att ett = i ett svar inte gör raden till en likhet.
  if (countEquals(toExpr(nodes, () => "0")) !== 1) return null;

  const expr = toExpr(nodes, lookup(fill));
  if (countEquals(expr) !== 1) return null;
  const [left, right] = expr.split("=").map(parseExpr);
  if (left === null || right === null) return null;
  return equals(left, right);
}

// ---------- LATEX ----------

// Tecken som betyder något i LaTeX, i matematikläge.
const LATEX_ESCAPES = {
  "%": "\\%",
  "#": "\\#",
  "&": "\\&",
  _: "\\_",
  "{": "\\{",
  "}": "\\}",
  $: "\\$",
  "\\": "\\backslash",
  "~": "\\sim",
  "^": "\\text{\\textasciicircum}",
};

const isDigit = (c) => c !== undefined && c >= "0" && c <= "9";
const isLetter = (c) => c !== undefined && /^\p{L}$/u.test(c);

// Ett mellanrum av run tecken. Matematikläget ignorerar mellanslag, så de som betyder något skrivs ut:
// ett längre mellanrum (tallinjens tal står med fyra mellanslag emellan), tusentalsavgränsaren mellan
// siffror ("57 000") och mellanrummet kring ett ord ("3 rest 1").
function spaceLatex(run, before, after) {
  if (run >= 2) return `\\hspace{${run / 4}em}`;
  if (isDigit(before) && isDigit(after)) return "\\,";
  if (isLetter(before) || isLetter(after)) return "\\ ";
  return " ";
}

// En text som LaTeX. atStart/atEnd är sant för första och sista tecknet i hela raden: mellanrummet där
// ritas inte (render.js lägger det utanför formeln).
function textLatex(s, atStart, atEnd) {
  let out = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) {
      let j = i;
      while (j < s.length && /\s/.test(s[j])) j++;
      if (!(i === 0 && atStart) && !(j === s.length && atEnd)) out += spaceLatex(j - i, s[i - 1], s[j]);
      i = j;
    } else if (isLetter(c)) {
      let j = i;
      while (j < s.length && isLetter(s[j])) j++;
      out += `\\text{${s.slice(i, j)}}`;
      i = j;
    } else {
      if (c === "−" || c === "-") out += "-";
      else if (c === "·") out += "\\cdot";
      else if (c === "," && isDigit(s[i - 1]) && isDigit(s[i + 1])) out += "{,}"; // decimalkomma utan mellanrum
      else if (c === "/" && (/\s/.test(s[i - 1] ?? "") || /\s/.test(s[i + 1] ?? ""))) out += "\\mathbin{/}"; // "14 / 2" som på bladet
      else out += Object.hasOwn(LATEX_ESCAPES, c) ? LATEX_ESCAPES[c] : c;
      i++;
    }
  }
  return out;
}

// LaTeX för tecken från parseMarkup. Tecknen får inte innehålla rutor (en ruta kastar). Det som skrivs:
//   text   siffror och räknesätt som de står ("−" blir "-", "·" blir \cdot, decimalkomma blir {,}), bokstäver
//          som \text{…}, och tecken som betyder något i LaTeX med ett snedstreck framför
//   sup    ^{…}      frac   \frac{topp}{botten}      root   \sqrt{innehåll}
export function tokensToLatex(tokens) {
  const last = tokens.length - 1;
  return tokens
    .map((token, i) => {
      switch (token.t) {
        case "text":
          return textLatex(token.s, i === 0, i === last);
        case "sup":
          return `^{${textLatex(token.s, true, true)}}`;
        case "frac":
          return `\\frac{${tokensToLatex(token.top)}}{${tokensToLatex(token.bottom)}}`;
        case "root":
          return `\\sqrt{${tokensToLatex(token.body)}}`;
        case "box":
          throw new Error("Rutor kan inte skrivas som LaTeX: dela raden vid dem först");
        default:
          throw new Error(`Okänt tecken: ${token.t}`);
      }
    })
    .join("")
    .trim();
}

// Alternativen för katex.render och katex.renderToString. Med throwOnError fortsätter inget fel osynligt:
// render.js ritar då biten som förut. Bråk ritas i fulla storleken med \displaystyle (se layoutRow).
export const KATEX_OPTIONS = { throwOnError: true, displayMode: false };

const hasBox = (tokens) =>
  tokens.some((t) => t.t === "box" || (t.t === "frac" && (hasBox(t.top) || hasBox(t.bottom))) || (t.t === "root" && hasBox(t.body)));

// En bit utan siffror, räknesätt eller formler ("Svar: ", ett mellanrum mellan två rutor) är ingen matematik
// och ritas som vanlig text.
const MATH_TEXT = /[0-9+\-−·×÷=/<>]/;
const hasMath = (tokens) => tokens.some((t) => t.t !== "text" || MATH_TEXT.test(t.s));

// Mellanrummet först och sist i en bit. Det ritas utanför formeln, eftersom KaTeX inte ger något mellanrum vid
// formelns kanter.
function splitEdges(tokens) {
  const core = tokens.slice();
  let before = "";
  let after = "";
  if (core[0]?.t === "text") {
    const s = core[0].s;
    before = /^\s*/.exec(s)[0];
    if (before === s) core.shift();
    else core[0] = { t: "text", s: s.slice(before.length) };
  }
  const end = core.length - 1;
  if (end >= 0 && core[end].t === "text") {
    const s = core[end].s;
    after = /\s*$/.exec(s)[0];
    core[end] = { t: "text", s: s.slice(0, s.length - after.length) };
  }
  return { before, core, after };
}

// Räknesätt och likhetstecken. Står ett sådant först eller sist i en bit invid en ruta behandlar KaTeX det som
// ett tecken i början eller slutet (en enda term, "−3"); {} gör att det får sitt vanliga mellanrum.
const OPERATORS = "+-−·×÷/=";
const startsWithOperator = (core) => core[0]?.t === "text" && OPERATORS.includes(core[0].s[0]);
const endsWithOperator = (core) => core.at(-1)?.t === "text" && OPERATORS.includes(core.at(-1).s.at(-1));

// En rad uppdelad vid sina rutor, i ordning: { box: id } för en ruta och { tokens, latex, before, after } för biten
// mellan två rutor. tokens är biten som parseMarkup gav den (ritas som förut när latex är null, eller KaTeX
// inte kan rita den); latex är det KaTeX ska rita, med before och after som mellanrum före och efter.
// null när en ruta ligger i ett bråk eller en rot: då går raden inte att dela, och den ritas som förut.
export function layoutRow(tokens) {
  if (tokens.some((t) => t.t !== "box" && hasBox([t]))) return null;
  const parts = [];
  let group = [];
  const flush = (nextIsBox) => {
    if (group.length === 0) return;
    const tokensHere = group;
    group = [];
    const { before, core, after } = splitEdges(tokensHere);
    if (!hasMath(core)) {
      parts.push({ tokens: tokensHere, latex: null, before: "", after: "" });
      return;
    }
    const afterBox = parts.length > 0; // varje bit före den här slutar med en ruta, annars börjar biten raden
    const leading = afterBox && startsWithOperator(core);
    const trailing = nextIsBox && endsWithOperator(core);
    parts.push({
      tokens: tokensHere,
      latex: `\\displaystyle ${leading ? "{}" : ""}${tokensToLatex(core)}${trailing ? "{}" : ""}`,
      before: leading ? "" : before,
      after: trailing ? "" : after,
    });
  };
  for (const token of tokens) {
    if (token.t === "box") {
      flush(true);
      parts.push({ box: token.id });
    } else group.push(token);
  }
  flush(false);
  return parts;
}
