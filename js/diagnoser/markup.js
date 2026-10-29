// Radmarkering: hur diagnosernas rader skrivs i datafilerna, t.ex. "6 + 1 = [a]" eller
// "{4^4 · 3^7|4^3 · 3^5} = [a]".
//
//   [id]       en ruta (id är bokstäver, siffror och _; annars är hakparentesen vanlig text)
//   ^3 ^-5     en exponent; ^(…) tar allt inom parentesen
//   {topp|botten}  ett stående bråk; topp och botten är markering och får nästlas. En ruta får stå som hela
//              täljaren ({[a]|8}, bråk med ruta i täljaren, RB4 5), men ingen annanstans i ett bråk
//   {hel|topp|botten}  ett blandat tal ("2 2/3" skrivs {2|2|3}); delarna är bara siffror. Ett negativt blandat
//              tal skrivs med minus framför: -{2|2|3} är −8/3, inte −2 + 2/3
//   √{…}       en rot med överstreck över innehållet; √3 är roten ur ett tal
//   allt annat är vanlig text
//
// parseMarkup    ger tecken att rita ("-" blir "−" i text och exponenter).
// markupToExpr   ger uttryckstext som parseExpr läser; vanlig text och exponenter behålls som de står.
// rowHolds       sätter in svaren och avgör om likheten stämmer (i en kedja a = b = c måste alla sidor vara lika).
// tokensToLatex  ger LaTeX för tecken utan rutor (för KaTeX).
// layoutRow      delar en rad vid sina rutor och ger LaTeX för varje bit mellan dem (null om en ruta ligger i en rot
//                eller i ett bråk på annat sätt än som hela täljaren). Ett bråk med en ruta som täljare är en egen bit
//                ({ box, denominator }) som render.js ritar med HTML. Bitarna ritas med KaTeX när det har laddats.
// splitVariables delar en text i ord och variabler (för render.js när KaTeX saknas).
//
// variables (diagnosens fält, t.ex. "xy") är bokstäverna som är variabler: en följd av bara sådana bokstäver ("x",
// "ab") ritas som matematik (kursiv), inte som \text{…}. Andra ord är text.
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

// Ett blandat tal ur de tre delarna: var och en är bara siffror (ingen ruta, inget bråk), så att talet alltid
// går att läsa som heltal plus bråk.
function mixedNode(parts, markup) {
  const [whole, top, bottom] = parts.map((nodes) => (nodes.length === 1 && nodes[0].t === "text" && /^\d+$/.test(nodes[0].raw.trim()) ? nodes[0].raw.trim() : null));
  if (whole === null || top === null || bottom === null) fail(markup, "ett blandat tal har bara siffror (ingen ruta eller annan markering)");
  return { t: "mixed", whole, top, bottom };
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
      if (s[bottom.end] === "|") {
        // {hel|topp|botten}: ett blandat tal.
        const third = readNodes(s, bottom.end + 1, ["|", "}"], markup);
        if (s[third.end] === "|") fail(markup, "ett blandat tal har tre delar, inte fler");
        if (s[third.end] !== "}") fail(markup, "det blandade talet saknar }");
        nodes.push(mixedNode([top.nodes, bottom.nodes, third.nodes], markup));
        i = third.end + 1;
        continue;
      }
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
      case "mixed":
        return { t: "mixed", whole: n.whole, top: n.top, bottom: n.bottom };
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
        case "mixed":
          // Hela uttrycket i parentes, så att ett minus framför gäller hela talet: -{2|2|3} är −(2 + 2/3).
          return `(${n.whole}+(${n.top})/(${n.bottom}))`;
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

// {a|b} blir ((a)/(b)), {h|a|b} blir (h+(a)/(b)), √{x} blir √(x) och [id] blir (fill[id]). Kastar om en ruta saknas i fill.
export function markupToExpr(markup, fill) {
  return toExpr(parseNodes(markup), lookup(fill));
}

const countEquals = (s) => s.split("=").length - 1;

// Sant eller falskt när raden har minst ett = och alla sidor går att läsa (två sidor utan reellt värde räknas
// som lika). Med flera = är raden en kedja (a = b = c): alla sidor ska vara lika. null när den inte går att
// kontrollera: inget =, eller en sida som parseExpr inte läser. Kastar om en ruta saknas i fill, men bara för
// rader som har ett =.
export function rowHolds(markup, fill) {
  const nodes = parseNodes(markup);
  // Antalet = räknas på raden utan svar, så att ett = i ett svar inte gör raden till en likhet.
  const signs = countEquals(toExpr(nodes, () => "0"));
  if (signs < 1) return null;

  const expr = toExpr(nodes, lookup(fill));
  if (countEquals(expr) !== signs) return null;
  const sides = expr.split("=").map(parseExpr);
  if (sides.some((side) => side === null)) return null;
  return sides.every((side) => equals(sides[0], side));
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

// En följd bokstäver där varje bokstav är en variabel ("ab" när variables är "abh").
const isVariableRun = (run, variables) => variables !== "" && [...run].every((c) => variables.includes(c));

// Texten i bitar { s, variable }: följder av variabelbokstäver för sig, allt annat (också andra ord) som text.
export function splitVariables(s, variables = "") {
  const parts = [];
  for (const piece of String(s).split(/(\p{L}+)/u)) {
    if (piece === "") continue;
    const variable = isLetter(piece[0]) && isVariableRun(piece, variables);
    const last = parts.at(-1);
    if (last && !last.variable && !variable) last.s += piece;
    else parts.push({ s: piece, variable });
  }
  return parts;
}

// Ett mellanrum av run tecken. Matematikläget ignorerar mellanslag, så de som betyder något skrivs ut:
// ett längre mellanrum (tallinjens tal står med fyra mellanslag emellan), tusentalsavgränsaren mellan
// siffror ("57 000") och mellanrummet kring ett ord ("3 rest 1"). En variabel är inget ord.
function spaceLatex(run, before, after, variables) {
  const isWordLetter = (c) => isLetter(c) && !variables.includes(c);
  if (run >= 2) return `\\hspace{${run / 4}em}`;
  if (isDigit(before) && isDigit(after)) return "\\,";
  if (isWordLetter(before) || isWordLetter(after)) return "\\ ";
  return " ";
}

// Tecken som skrivs som ett LaTeX-kommando.
const COMMANDS = { "·": "\\cdot", "≈": "\\approx", "≤": "\\leq", "≥": "\\geq", "≠": "\\neq", "±": "\\pm" };

// En text som LaTeX. atStart/atEnd är sant för första och sista tecknet i hela raden: mellanrummet där
// ritas inte (render.js lägger det utanför formeln).
function textLatex(s, atStart, atEnd, variables = "") {
  let out = "";
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) {
      let j = i;
      while (j < s.length && /\s/.test(s[j])) j++;
      // Efter "Svar:" (kolonet står i \text) är mellanslaget ett ordmellanrum, som efter ett ord.
      const efterOrdkolon = j - i === 1 && out.endsWith(":}");
      if (!(i === 0 && atStart) && !(j === s.length && atEnd)) out += efterOrdkolon ? "\\ " : spaceLatex(j - i, s[i - 1], s[j], variables);
      i = j;
    } else if (isLetter(c)) {
      let j = i;
      while (j < s.length && isLetter(s[j])) j++;
      const run = s.slice(i, j);
      // En variabel direkt efter ett kommando (\cdot x) behöver ett mellanslag, annars blir det \cdotx.
      if (isVariableRun(run, variables)) out += `${/\\[a-z]+$/i.test(out) ? " " : ""}${run}`;
      else if (s[j] === ":") {
        // Ett kolon efter ett ord ("Svar:") är skiljetecken och står i texten; i matematikläget får det mellanrum som
        // ett relationstecken ("Svar :").
        out += `\\text{${run}:}`;
        j++;
      } else out += `\\text{${run}}`;
      i = j;
    } else {
      if (c === "−" || c === "-") out += "-";
      else if (Object.hasOwn(COMMANDS, c)) out += COMMANDS[c]; // "≈" i avrundningsuppgifter, ≤ ≥ ≠ ± i olikheter och rötter
      else if (c === "," && isDigit(s[i - 1]) && isDigit(s[i + 1])) out += "{,}"; // decimalkomma utan mellanrum
      else if (c === "/" && (/\s/.test(s[i - 1] ?? "") || /\s/.test(s[i + 1] ?? ""))) out += "\\mathbin{/}"; // "14 / 2" som på bladet
      else out += Object.hasOwn(LATEX_ESCAPES, c) ? LATEX_ESCAPES[c] : c;
      i++;
    }
  }
  return out;
}

// LaTeX för tecken från parseMarkup. Tecknen får inte innehålla rutor (en ruta kastar). Det som skrivs:
//   text   siffror och räknesätt som de står ("−" blir "-", "·" blir \cdot, "≈" blir \approx, ≤ ≥ ≠ ± blir \leq \geq \neq \pm,
//          decimalkomma blir {,}), variabler som de står, andra bokstäver som \text{…}, och tecken som betyder något i
//          LaTeX med ett snedstreck framför
//   sup    ^{…}      frac   \frac{topp}{botten}      root   \sqrt{innehåll}
export function tokensToLatex(tokens, variables = "") {
  const last = tokens.length - 1;
  return tokens
    .map((token, i) => {
      switch (token.t) {
        case "text":
          return textLatex(token.s, i === 0, i === last, variables);
        case "sup":
          return `^{${textLatex(token.s, true, true, variables)}}`;
        case "frac":
          return `\\frac{${tokensToLatex(token.top, variables)}}{${tokensToLatex(token.bottom, variables)}}`;
        case "root":
          return `\\sqrt{${tokensToLatex(token.body, variables)}}`;
        case "mixed":
          return `${token.whole}\\frac{${token.top}}{${token.bottom}}`;
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

// Ett bråk vars täljare är precis en ruta och vars nämnare inte har någon ({[a]|8}): bladets "ruta över 8".
// Det delas ut som en egen bit, och render.js ritar det med HTML (en ruta över ett streck) mellan KaTeX-bitarna.
const isBoxFrac = (t) => t.t === "frac" && t.top.length === 1 && t.top[0].t === "box" && !hasBox(t.bottom);

// En bit utan siffror, räknesätt, variabler eller formler ("Svar: ", ett mellanrum mellan två rutor) är ingen
// matematik och ritas som vanlig text.
const MATH_TEXT = /[0-9+\-−·×÷=/<>≤≥≠±]/;
const hasMath = (tokens, variables) =>
  tokens.some((t) => t.t !== "text" || MATH_TEXT.test(t.s) || splitVariables(t.s, variables).some((p) => p.variable));

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

// Räknesätt, likhetstecken och ≈. Står ett sådant först eller sist i en bit invid en ruta behandlar KaTeX det som
// ett tecken i början eller slutet (en enda term, "−3"); {} gör att det får sitt vanliga mellanrum.
const OPERATORS = "+-−·×÷/=≈";
const startsWithOperator = (core) => core[0]?.t === "text" && OPERATORS.includes(core[0].s[0]);
const endsWithOperator = (core) => core.at(-1)?.t === "text" && OPERATORS.includes(core.at(-1).s.at(-1));

// En rad uppdelad vid sina rutor, i ordning: { box: id } för en ruta ({ box: id, denominator: tokens } för ett bråk med
// rutan som täljare och nämnaren som tecken) och { tokens, latex, before, after } för biten
// mellan två rutor. tokens är biten som parseMarkup gav den (ritas som förut när latex är null, eller KaTeX
// inte kan rita den); latex är det KaTeX ska rita, med before och after som mellanrum före och efter.
// null när en ruta ligger i en rot eller i ett bråk på annat sätt än som hela täljaren: då går raden inte att dela,
// och den ritas som förut. variables är diagnosens variabelbokstäver.
export function layoutRow(tokens, variables = "") {
  if (tokens.some((t) => t.t !== "box" && !isBoxFrac(t) && hasBox([t]))) return null;
  const parts = [];
  let group = [];
  const flush = (nextIsBox) => {
    if (group.length === 0) return;
    const tokensHere = group;
    group = [];
    const { before, core, after } = splitEdges(tokensHere);
    if (!hasMath(core, variables)) {
      parts.push({ tokens: tokensHere, latex: null, before: "", after: "" });
      return;
    }
    const afterBox = parts.length > 0; // varje bit före den här slutar med en ruta, annars börjar biten raden
    const leading = afterBox && startsWithOperator(core);
    const trailing = nextIsBox && endsWithOperator(core);
    parts.push({
      tokens: tokensHere,
      latex: `\\displaystyle ${leading ? "{}" : ""}${tokensToLatex(core, variables)}${trailing ? "{}" : ""}`,
      before: leading ? "" : before,
      after: trailing ? "" : after,
    });
  };
  for (const token of tokens) {
    if (token.t === "box") {
      flush(true);
      parts.push({ box: token.id });
    } else if (isBoxFrac(token)) {
      flush(true);
      parts.push({ box: token.top[0].id, denominator: token.bottom });
    } else group.push(token);
  }
  flush(false);
  return parts;
}
