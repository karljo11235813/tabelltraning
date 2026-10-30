// Ritar diagnosernas skärmar och resultatskärmen. Inget här rör `document` när modulen laddas, så att
// node kan importera den för testerna; allt som ritar görs först när en funktion anropas.
//
// toSuperscript    en siffra eller ett minustecken som upphöjt tecken, annars null.
// snapToTick       närmaste plats på en tallinje för en pixelposition, som text ("−0,4"). Platserna är strecken
//                  (line.step), eller tätare om linjen har line.snap ("0,1" på en linje med streck var 0,2).
// renderScreen     en skärm som eleven fyller i: rader med rutor (och en tabell eller ett koordinatsystem att läsa av,
//                  graph.js, och en figur, figures.js), textuppgift, placera eller läsa av tallinjen, ett val (choose,
//                  pick; choice.js), skuggning (shade), punkter (plot), en rät linje (line), visarna på en klocka (clock;
//                  clock.js), ett stapel- eller stolpdiagram (bars; bars.js) eller en pappersuppgift (paper). Ger
//                  { el, read, focusFirst } och, för skärmar där det behövs, keepBlank (tomt är ett svar) och nextLabel
//                  ("Klar" i stället för "Nästa").
//
// Tallinjens streck är decimaltal (steg som "0,1") eller, när något av min, max, step och snap är ett bråk ("1/6"), exakta
// bråk; platser och bokstäver är då bråktext ("1/3").
// rowsOf           raderna på en skärm; en skärm utan rows är en text med raden "Svar: [ ]".
// prettyAnswer     ett facitsvar för visning (^2 som upphöjt, "−" som minustecken).
// renderFilledRow  en rad med givna texter i stället för rutor (förhandsvisningen och resultatet); renderFilledTable en tabell.
// renderResult     resultatskärmen som läraren läser.
// guideText        Diamants tidsriktlinje på resultatskärmen ("avbryt efter" utelämnas när stop är null).
//
// Uppgifternas matematik ritas med KaTeX när det har laddats (window.katex) och annars, eller om KaTeX inte kan rita
// en bit, med spans som förut. Det eleven skriver (rutorna, svaren på resultatskärmen) är alltid vanlig text.
//
// Rutorna visar aldrig vilken form svaret ska ha: samma textruta överallt, och symbolraden är densamma
// på varje skärm i en diagnos (symbolsOf: de fyra med symbols, och π i en diagnos med en π-ruta). Ingen rätt eller fel
// visas under tiden.

import { parseMarkup, layoutRow, splitVariables, KATEX_OPTIONS } from "./markup.js";
import { formatTime } from "./session.js";
import { buildChoice, choiceDetail, choiceFacit } from "./choice.js";
import { parseNumber } from "./parse.js";
import { rat, add, sub, mul, div, compare, isInteger } from "./value.js";
import { figureStage, buildShade, shadeDetail, shadeSkipped } from "./figures.js";
import { drawTable, cellsOf, chartStage, chartBlock, buildPlot, plotDetail, plotSkipped, buildLine, drawnLineDetail, drawnLineSkipped } from "./graph.js";
import { buildClock, clockDetail, clockSkipped } from "./clock.js";
import { diagramStage, diagramBlock } from "./diagram.js";
import { buildBars, barsDetail, barsSkipped } from "./bars.js";

const SVG_NS = "http://www.w3.org/2000/svg";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function svgEl(tag, attrs = {}, text) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  if (text != null) node.textContent = text;
  return node;
}

// ---------- UPPHÖJDA TECKEN ----------

const SUPERSCRIPT = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹", "-": "⁻", "−": "⁻" };

export function toSuperscript(ch) {
  return Object.hasOwn(SUPERSCRIPT, ch) ? SUPERSCRIPT[ch] : null;
}

// Facitets skrivsätt för visning: ^2 och ^(-3) som upphöjt, och "−" i stället för bindestreck.
export function prettyAnswer(text) {
  return String(text)
    .replace(/\^\(([^)]*)\)|\^(-?\d+)/g, (whole, inParens, plain) => {
      const raised = [...(inParens ?? plain)].map(toSuperscript);
      return raised.every((c) => c !== null) ? raised.join("") : whole;
    })
    .replaceAll("-", "−");
}

// ---------- TALLINJEN: STRECK OCH SNAP ----------

// Talen på linjen räknas som heltal gånger 10^-decimaler, så att "0,1"-steg aldrig får flyttalsbrus.
const decimalsOf = (x) => /[.,](\d+)$/.exec(String(x))?.[1].length ?? 0;

// Ett tal som text ("−0,4", "(−3)", "1/2") som flyttal; bara för att rita, aldrig för rättning.
function numberOf(text) {
  const clean = String(text).replaceAll("−", "-").replaceAll(",", ".").replace(/[()\s]/g, "");
  const [top, bottom] = clean.split("/");
  const value = bottom === undefined ? Number(top) : Number(top) / Number(bottom);
  return Number.isFinite(value) ? value : null;
}

function formatScaled(value, decimals) {
  const digits = String(Math.abs(value)).padStart(decimals + 1, "0");
  const whole = digits.slice(0, digits.length - decimals);
  const fraction = digits.slice(digits.length - decimals).replace(/0+$/, "");
  return `${value < 0 ? "−" : ""}${whole}${fraction ? `,${fraction}` : ""}`;
}

// Alla streck: [{ key, text, zero }], hur många steg linjen har, keyOf (nyckeln för ett tal som text, att jämföra
// etiketter med) och isLong(long) (om ett streck är en jämn multipel av long). En decimallinje har heltal som nyckel.
function decimalTicksOf(line) {
  const decimals = Math.max(decimalsOf(line.step), decimalsOf(line.min), decimalsOf(line.max));
  const toInt = (x) => Math.round(numberOf(x) * 10 ** decimals);
  const first = toInt(line.min);
  const last = toInt(line.max);
  const step = Math.max(1, toInt(line.step));
  const count = Math.max(1, Math.round((last - first) / step));
  const ticks = Array.from({ length: count + 1 }, (_, i) => {
    const key = first + i * step;
    return { key, text: formatScaled(key, decimals), zero: key === 0 };
  });
  const isLong = (long) => {
    const every = toInt(long);
    return (tick) => every > 0 && tick.key % every === 0;
  };
  return { ticks, count, keyOf: toInt, isLong };
}

// En linje med bråk ("1/4", "1/6") räknas exakt med bråk (value.js): sjättedelar är inga ändliga decimaltal.
const isFractionLine = (line) => [line.min, line.max, line.step, line.snap].some((x) => typeof x === "string" && x.includes("/"));
const exactOf = (x) => {
  const v = parseNumber(String(x));
  if (v === null || v.r !== 1n) throw new TypeError(`Inget exakt tal på tallinjen: ${x}`);
  return v;
};
const fractionKey = (v) => `${v.n}/${v.d}`;
const fractionText = (v) => `${v.n < 0n ? "−" : ""}${v.n < 0n ? -v.n : v.n}${v.d === 1n ? "" : `/${v.d}`}`;

function fractionTicksOf(line) {
  const [first, last, step] = [line.min, line.max, line.step].map(exactOf);
  if (compare(step, rat(0)) <= 0) throw new RangeError("Steget på tallinjen ska vara positivt");
  const steps = div(sub(last, first), step);
  const count = Math.max(1, Math.round(Number(steps.n) / Number(steps.d)));
  const ticks = Array.from({ length: count + 1 }, (_, i) => {
    const value = add(first, mul(step, rat(i)));
    return { key: fractionKey(value), text: fractionText(value), zero: value.n === 0n, value };
  });
  const isLong = (long) => {
    const every = exactOf(long);
    return (tick) => every.n > 0n && isInteger(div(tick.value, every));
  };
  return { ticks, count, keyOf: (x) => fractionKey(exactOf(x)), isLong };
}

const ticksOf = (line) => (isFractionLine(line) ? fractionTicksOf(line) : decimalTicksOf(line));

// Strecket som ligger närmast px, när linjens första streck sitter vid x0 och det sista vid x1.
function nearestIndex(px, count, x0, x1) {
  const t = x1 === x0 ? 0 : (px - x0) / (x1 - x0);
  return Math.min(count, Math.max(0, Math.round(t * count)));
}

// Platserna ett tal kan placeras på: strecken, eller tätare när linjen har snap (decimaltext som step, och step
// ska vara ett helt antal snap). Så kan 0,1 och −0,9 placeras mellan bladets streck var 0,2.
const gridOf = (line) => ticksOf(line.snap == null ? line : { ...line, step: line.snap });

export function snapToTick(px, line, x0, x1) {
  const { ticks, count } = gridOf(line);
  return ticks[nearestIndex(px, count, x0, x1)].text;
}

// Linjens mått i SVG-enheter. Bokstäverna på en avläsningsskärm ritas i SVG:n; chipsen på en
// placeringsskärm ligger ovanpå som HTML och placeras med samma procenttal.
const VBW = 520;
const LINE_X0 = 28;
const LINE_X1 = 484;
const xPercentOf = (t) => ((LINE_X0 + t * (LINE_X1 - LINE_X0)) / VBW) * 100;

// Tallinjen som SVG: streck för varje steg, längre streck vid etiketterna och vid 0, pil åt höger.
// marks ({ a: "8", … }) ritar bokstäverna ovanför linjen, som på bladet. Strecken ritas var line.step;
// line.long ("1") ger ett längre streck vid varje sådant tal, som bladet har vid heltalen.
function drawLine(line, marks) {
  const { ticks, count, keyOf, isLong } = ticksOf(line);
  const withLetters = marks != null;
  const axisY = withLetters ? 40 : 14;
  const height = withLetters ? 82 : 54;
  const svg = svgEl("svg", { viewBox: `0 0 ${VBW} ${height}`, class: "dg-line", role: "img", "aria-label": "Tallinje" });

  svg.append(svgEl("line", { class: "dg-axis", x1: LINE_X0 - 6, x2: LINE_X1 + 14, y1: axisY, y2: axisY }));
  svg.append(svgEl("polygon", { class: "dg-arrow", points: `${LINE_X1 + 26},${axisY} ${LINE_X1 + 12},${axisY - 6} ${LINE_X1 + 12},${axisY + 6}` }));

  const labelled = new Set((line.labels ?? []).map(keyOf));
  const long = line.long == null ? () => false : isLong(line.long);
  ticks.forEach((tick, i) => {
    const x = LINE_X0 + (i / count) * (LINE_X1 - LINE_X0);
    const major = labelled.has(tick.key) || tick.zero || long(tick);
    const half = major ? 10 : 5;
    svg.append(svgEl("line", { class: `dg-tick${major ? " is-major" : ""}`, x1: x, x2: x, y1: axisY - half, y2: axisY + half }));
    if (labelled.has(tick.key)) svg.append(svgEl("text", { class: "dg-tick-label", x, y: axisY + 34, "text-anchor": "middle" }, tick.text));
  });

  for (const [letter, value] of Object.entries(marks ?? {})) {
    const at = numberOf(value);
    if (at === null) continue;
    const t = Math.min(1, Math.max(0, (at - numberOf(line.min)) / (numberOf(line.max) - numberOf(line.min))));
    svg.append(svgEl("text", { class: "dg-mark-letter", x: LINE_X0 + t * (LINE_X1 - LINE_X0), y: axisY - 18, "text-anchor": "middle" }, letter));
  }
  return { svg, count };
}

// ---------- RADER ----------

// Tecknen från parseMarkup som element. boxFor(id) ger det som står där en ruta står. variables är diagnosens
// variabelbokstäver: en följd av bara sådana ritas kursiv (<i class="dg-var">), som KaTeX gör.
function drawTokens(tokens, boxFor, variables = "") {
  return tokens.flatMap((token) => {
    switch (token.t) {
      case "text":
        return splitVariables(token.s, variables).map((part) => (part.variable ? el("i", "dg-var", part.s) : el("span", "dg-t", part.s)));
      case "sup":
        return el("sup", "dg-sup", token.s);
      case "box":
        return boxFor(token.id);
      case "frac": {
        const top = el("span", "bt-frac-top");
        top.append(...drawTokens(token.top, boxFor, variables));
        const bottom = el("span", "bt-frac-bottom");
        bottom.append(...drawTokens(token.bottom, boxFor, variables));
        const frac = el("span", "bt-frac dg-frac");
        frac.append(top, bottom);
        return frac;
      }
      case "mixed": {
        // Hela talet och ett stående bråk bredvid.
        const mixed = el("span", "dg-mixed");
        mixed.append(el("span", "dg-t", token.whole), ...drawTokens([{ t: "frac", top: [{ t: "text", s: token.top }], bottom: [{ t: "text", s: token.bottom }] }], boxFor));
        return mixed;
      }
      case "root": {
        const body = el("span", "dg-radicand");
        body.append(...drawTokens(token.body, boxFor, variables));
        const root = el("span", "dg-root");
        root.append(el("span", "dg-radical", "√"), body);
        return root;
      }
      default:
        throw new Error(`Okänt tecken: ${token.t}`);
    }
  });
}

// KaTeX läses först när en rad ritas: modulen laddas också i node, där window saknas.
const katexLib = () => (typeof window !== "undefined" && typeof window.katex?.render === "function" ? window.katex : null);

// En bit av en rad (layoutRow) som element: en ruta, en formel från KaTeX, eller biten ritad som förut.
function drawPart(part, katex, boxFor, variables) {
  if (part.box !== undefined) {
    if (part.denominator === undefined) return [boxFor(part.box)];
    // Ett bråk med rutan som täljare ritas med HTML (rutan över ett streck), mellan KaTeX-bitarna.
    return drawTokens([{ t: "frac", top: [{ t: "box", id: part.box }], bottom: part.denominator }], boxFor, variables);
  }
  if (part.latex !== null) {
    try {
      const math = el("span", "dg-math");
      katex.render(part.latex, math, KATEX_OPTIONS);
      return [...(part.before ? [el("span", "dg-t", part.before)] : []), math, ...(part.after ? [el("span", "dg-t", part.after)] : [])];
    } catch {
      // KaTeX kunde inte läsa biten: den ritas som förut, så att raden alltid syns.
    }
  }
  return drawTokens(part.tokens, boxFor, variables);
}

function drawRow(markup, boxFor, tag = "div", variables = "") {
  const row = el(tag, "dg-row");
  const tokens = parseMarkup(markup);
  const katex = katexLib();
  let parts = null;
  try {
    parts = katex ? layoutRow(tokens, variables) : null;
  } catch {
    // Ett fel när LaTeX skrivs ska aldrig stoppa raden: den ritas som förut.
  }
  if (parts === null) row.append(...drawTokens(tokens, boxFor, variables));
  else for (const part of parts) row.append(...drawPart(part, katex, boxFor, variables));
  return row;
}

// En rad utan rutor (ett alternativ i ett val) som element; tag är div, eller span inuti en knapp eller en text.
const drawMarkup = (markup, tag) => drawRow(markup, (id) => el("span", "dg-t", `[${id}]`), tag);

// En rad där varje ruta är ersatt av en text: fill[id], eller "–" när den saknas eller är tom. variables som i drawTokens.
export function renderFilledRow(markup, fill = {}, variables = "") {
  const row = drawRow(markup, (id) => el("span", "dg-answer", fill[id] ? String(fill[id]) : "–"), "div", variables);
  row.classList.add("dg-row-filled");
  return row;
}

// En tabell där varje ruta är ersatt av en text, som renderFilledRow.
export function renderFilledTable(table, fill = {}, variables = "") {
  return drawTable(table, (markup) => drawRow(markup, (id) => el("span", "dg-answer", fill[id] ? String(fill[id]) : "–"), "span", variables));
}

const idsIn = (tokens) =>
  tokens.flatMap((t) => (t.t === "box" ? [t.id] : t.t === "frac" ? [...idsIn(t.top), ...idsIn(t.bottom)] : t.t === "root" ? idsIn(t.body) : []));

// En skärm utan rows (AS3, AS6) är en textuppgift med en enda ruta, a: texten och sedan raden "Svar: [ ]".
const TEXT_ROW = "Svar: [a]";
// En skärm med tabell och utan rows har bara tabellens rutor.
export const rowsOf = (screen) => screen.rows ?? (screen.table ? [] : [TEXT_ROW]);
const taskText = (screen) => (screen.rows === undefined ? [el("p", "dg-word-text", screen.text)] : []);

// ---------- SKÄRMEN ----------

const PAPER_LINE = "Räkna på papper. Skriv bara svaret här.";
const PAPER_SCREEN_LINE = "Gör uppgiften på ett löst papper och visa din lärare."; // ritas eller skrivs (SA1 5)
// Hur svaret skrivs när det har flera delar: rötter i två rutor (screen.roots, TAe6) och flera svar i en ruta (set).
// Raden står på varje sådan skärm, så den avslöjar inte hur många rötter eller svar det är.
const ROOTS_LINE = "Skriv en lösning i varje ruta. Har ekvationen bara en lösning lämnar du den andra rutan tom.";
const SET_LINE = "Skriv alla svar i rutan, med och emellan.";
const NO_INPUT_KINDS = ["choose", "pick", "paper", "shade", "plot", "line", "clock", "bars"]; // skärmar utan textrutor: ingen "Räkna på papper"-rad

// En rad med fler tecken än så i markeringen är lång (bara TAt4 4; den längsta raden i en annan diagnos har 38).
const LONG_ROW = 40;
// En koordinat med två rutor: "([a], [b])".
const POINT_ROW = /\(\s*\[[a-z]+\]\s*,\s*\[[a-z]+\]\s*\)/;

// Längsta svar som får skrivas i en ruta. Längre text är aldrig ett svar, och resultatskärmen ska rymma det som skrevs.
const MAX_ANSWER_LENGTH = 80;

// Symbolradens fyra knappar, alltid i den här ordningen. insert är texten som sätts in; raised är det
// läge för upphöjt som knappen lämnar efter sig (true/false), eller "toggle" för knappen som växlar.
const SYMBOLS = [
  { text: "a/b", label: "Bråkstreck", insert: "/", raised: false },
  { text: "xⁿ", label: "Upphöjt", raised: "toggle" },
  { text: "√", label: "Rot", insert: "√", raised: false },
  { text: "·10ⁿ", label: "Gånger tio upphöjt i", insert: "·10", raised: true },
];

// π (Mätning): en diagnos där någon ruta har pi får π sist i symbolraden, på alla skärmar med textrutor, så att knappen
// inte säger vilken uppgift som har π i svaret. Att skriva "pi" går lika bra (pi.js).
const PI_SYMBOL = { text: "π", label: "Pi", insert: "π", raised: false };
const hasPiBox = (diagnosis) => (diagnosis.screens ?? []).some((s) => Object.values(s.boxes ?? {}).some((box) => box.pi !== undefined));

// Symbolradens knappar för en diagnos: de fyra (symbols) och π, eller ingen.
export const symbolsOf = (diagnosis) => [...(diagnosis.symbols ? SYMBOLS : []), ...(hasPiBox(diagnosis) ? [PI_SYMBOL] : [])];

// Sätter in text där markören står i rutan (eller ersätter det markerade), utan att ta bort fokus.
function insertText(input, text) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? start;
  input.setRangeText(text, start, end, "end");
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function chipValue(value) {
  return /^[-−]/.test(value) ? `(${value})` : value;
}

// Bladets bilder, utklippta ur PDF:en. src är relativ till tabelltraning/ och slås upp från den här modulen, så att
// samma data fungerar på diagnoser.html och på förhandsgranskningen i tests/diagnoser/. width är bredden i CSS-pixlar.
function imagesStage(images) {
  const stage = el("div", "dg-images");
  for (const { src, alt, width } of images) {
    const img = el("img", "dg-image");
    img.src = new URL(`../../${src}`, import.meta.url).href;
    img.alt = alt;
    img.width = width;
    stage.append(img);
  }
  return stage;
}

export function renderScreen(diagnosis, screen, { onSubmit = () => {} } = {}) {
  const kind = screen.kind ?? "rows";
  const root = el("div", `dg-screen dg-screen-${kind}`);
  root.append(el("h2", "dg-screen-label", screen.label));
  if (screen.text) root.append(el("p", "dg-prompt", screen.text));
  if (diagnosis.paper && !NO_INPUT_KINDS.includes(kind)) root.append(el("p", "dg-paper", PAPER_LINE));
  if (screen.roots) root.append(el("p", "dg-paper", ROOTS_LINE));
  if (Object.values(screen.boxes ?? {}).some((box) => box.set)) root.append(el("p", "dg-paper", SET_LINE));
  // Bladets bilder (screen.images: kläder, mynt, kortlek …) står under uppgiften, före figur och diagram.
  if (screen.images) root.append(imagesStage(screen.images));
  // Figuren (screen.figure) och grafen att läsa av (screen.chart) står ovanför raderna. I shade, plot och line är
  // figuren respektive rutnätet själva svaret och ritas av skärmen.
  if (screen.figure && kind !== "shade") root.append(figureStage(screen.figure));
  if (screen.chart && kind !== "plot" && kind !== "line") root.append(chartStage(screen.chart));
  // Ett diagram att läsa av (screen.diagram, diagram.js: stapel-, cirkel-, linje- och lådagram) står också ovanför.
  if (screen.diagram) root.append(diagramStage(screen.diagram));
  // En tabell att läsa av där eleven ritar (bars, plot: STd2 5, STd5 4–5) står ovanför ritytan. Den har inga rutor.
  if (screen.table && (kind === "bars" || kind === "plot")) root.append(drawTable(screen.table, (markup) => drawMarkup(markup, "span")));

  // Alla textrutor i skärmens ordning. Enter går vidare mellan dem.
  const inputs = [];
  let lastInput = null;
  let raised = false;
  const symbolButtons = [];

  const setRaised = (on) => {
    raised = on;
    for (const b of symbolButtons) if (b.raised === "toggle") b.node.setAttribute("aria-pressed", String(on));
  };

  function onEnter(input) {
    const i = inputs.indexOf(input);
    if (i === inputs.length - 1) return onSubmit();
    (inputs.slice(i + 1).find((x) => x.value.trim() === "") ?? inputs[i + 1]).focus();
  }

  // Skriver tecken upphöjt så länge läget är på; första tecknet som inte kan vara upphöjt stänger av det.
  function onBeforeInput(e) {
    if (!raised || e.inputType !== "insertText" || !e.data) return;
    let out = "";
    for (const ch of e.data) {
      const sup = raised ? toSuperscript(ch) : null;
      if (sup === null) setRaised(false);
      out += sup ?? ch;
    }
    e.preventDefault();
    insertText(e.target, out);
  }

  function makeInput(label, extraClass = "") {
    const input = el("input", `bt-input dg-input ${extraClass}`.trim());
    input.type = "text";
    input.setAttribute("inputmode", "text");
    input.maxLength = MAX_ANSWER_LENGTH;
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("autocorrect", "off");
    input.setAttribute("aria-label", label);
    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || e.isComposing) return;
      e.preventDefault();
      onEnter(input);
    });
    input.addEventListener("beforeinput", onBeforeInput);
    inputs.push(input);
    return input;
  }

  root.addEventListener("focusin", (e) => {
    if (!inputs.includes(e.target)) return;
    if (e.target !== lastInput) setRaised(false);
    lastInput = e.target;
  });

  let read;
  let focusFirst = () => inputs[0]?.focus();
  let extra = {};

  if (kind === "choose" || kind === "pick") {
    const { keepBlank, ...view } = buildChoice(screen, root, drawMarkup);
    ({ read, focusFirst } = view);
    extra = { keepBlank };
  } else if (kind === "shade" || kind === "plot" || kind === "line" || kind === "clock" || kind === "bars") {
    // Tomt (inget skuggat, inga punkter, inga staplar) är ett svar och fel, som i ett val: bara Hoppa över ger –.
    const { keepBlank, ...view } = ({ shade: buildShade, plot: buildPlot, line: buildLine, clock: buildClock, bars: buildBars })[kind](screen, root);
    ({ read, focusFirst } = view);
    extra = { keepBlank };
  } else if (kind === "paper") {
    // Eleven ritar på papper och trycker Klar. Figuren ovanför (screen.figure) är konturen att rita i.
    root.append(el("p", "dg-paper", PAPER_SCREEN_LINE));
    read = () => ({ done: "1" });
    focusFirst = () => {};
    extra = { nextLabel: "Klar" };
  } else if (kind === "word") {
    const field = (label, extraClass) => {
      const input = makeInput(label, extraClass);
      const wrap = el("label", "dg-field");
      wrap.append(el("span", "dg-field-label", label), input);
      root.append(wrap);
      return input;
    };
    const calc = field("Räkning", "dg-input-calc");
    const answer = field("Svar", "dg-input-answer");
    read = () => ({ calc: calc.value, answer: answer.value });
  } else if (kind === "place") {
    ({ read, focusFirst } = buildPlace(screen, root));
  } else if (kind === "read") {
    const { svg } = drawLine(screen.line, screen.marks);
    const stage = el("div", "dg-stage");
    stage.append(svg);
    const fields = el("div", "dg-letter-boxes");
    const boxes = Object.keys(screen.marks).map((letter) => {
      const input = makeInput(`Tal för ${letter}`);
      const field = el("label", "dg-letter-box");
      field.append(el("span", "dg-letter", letter), el("span", "dg-t", " = "), input);
      fields.append(field);
      return [letter, input];
    });
    root.append(stage, fields);
    read = () => Object.fromEntries(boxes.map(([letter, input]) => [letter, input.value]));
  } else {
    const boxes = new Map();
    const boxFor = (id) => {
      // En ruta för flera ord (set: "Tess och Emma", contains: en mening) är bredare.
      const box = screen.boxes?.[id];
      const input = makeInput(`Svar ${id}`, box?.set || box?.contains ? "dg-input-wide" : "");
      boxes.set(id, input);
      return input;
    };
    if (screen.table) root.append(drawTable(screen.table, (markup) => drawRow(markup, boxFor, "span", diagnosis.variables)));
    const rows = el("div", "dg-rows");
    // En lång rad (TAt4 4: en summa med sex bråk) får en kolumn, så att den inte bryts mitt i.
    if (rowsOf(screen).some((markup) => markup.length > LONG_ROW)) rows.classList.add("dg-rows-long");
    for (const markup of rowsOf(screen)) {
      const row = drawRow(markup, boxFor, "div", diagnosis.variables);
      // En punkt "A = ([a], [b])" (TAg1 1) står på en rad, med smalare rutor.
      if (POINT_ROW.test(markup)) row.classList.add("dg-row-point");
      rows.append(row);
    }
    if (rows.children.length > 0) root.append(rows);
    read = () => Object.fromEntries([...boxes].map(([id, input]) => [id, input.value]));
  }

  inputs.forEach((input, i) => input.setAttribute("enterkeyhint", i === inputs.length - 1 ? "done" : "next"));

  const symbols = symbolsOf(diagnosis);
  if (symbols.length > 0 && inputs.length > 0) {
    const row = el("div", "dg-symbols");
    row.setAttribute("role", "group");
    row.setAttribute("aria-label", "Symboler");
    for (const symbol of symbols) {
      const node = el("button", "bt-symbol-btn dg-symbol-btn", symbol.text);
      node.type = "button";
      node.setAttribute("aria-label", symbol.label);
      if (symbol.raised === "toggle") node.setAttribute("aria-pressed", "false");
      // Knappen får inte ta fokus från rutan, så att markören står kvar där eleven skriver.
      node.addEventListener("mousedown", (e) => e.preventDefault());
      node.addEventListener("click", () => {
        const target = lastInput ?? inputs[0];
        target.focus();
        if (symbol.raised === "toggle") return setRaised(!raised);
        insertText(target, symbol.insert);
        setRaised(symbol.raised);
      });
      symbolButtons.push({ node, raised: symbol.raised });
      row.append(node);
    }
    root.append(row);
  }

  return { el: root, read: () => read(), focusFirst: () => focusFirst(), ...extra };
}

// ---------- PLACERA PÅ TALLINJEN ----------

// Chipsen a–e ligger ovanför linjen, med talet de står för bredvid sig (som på bladet), och dras dit de ska.
// Släpps de över linjen hamnar de på närmaste plats (ett streck, eller en halvstreck-plats med line.snap); släpps de ovanför går de tillbaka till sin plats i
// facket. Talet står kvar i facket hela tiden, så att eleven alltid ser vad bokstaven betyder.
// Pilarna flyttar ett fokuserat chip ett streck.
function buildPlace(screen, root) {
  const { svg } = drawLine(screen.line);
  const { ticks, count } = gridOf(screen.line); // platserna chipsen snäpper till
  const letters = Object.keys(screen.letters);

  const tray = el("div", "dg-tray");
  tray.setAttribute("role", "group");
  tray.setAttribute("aria-label", "Tal att placera");
  const zone = el("div", "dg-zone");
  zone.style.setProperty("--dg-stack", Math.min(3, letters.length));
  const guide = el("div", "dg-guide");
  guide.hidden = true;
  zone.append(guide);
  const stage = el("div", "dg-stage");
  stage.append(zone, svg);
  root.append(tray, stage);

  const chips = letters.map((letter) => {
    const node = el("button", "dg-chip", letter);
    node.type = "button";
    node.setAttribute("aria-label", `${letter}, ${screen.letters[letter]}`);
    const hold = el("span", "dg-hold");
    hold.append(node);
    const slot = el("span", "dg-slot");
    slot.append(hold, el("span", "dg-slot-value", chipValue(screen.letters[letter])));
    tray.append(slot);
    return { letter, node, hold, index: null };
  });

  // Lägger chipsen där de hör hemma: placerade i zonen över sitt streck (på varandra om de delar streck),
  // resten på sin plats i facket.
  function layout(focusChip) {
    const used = new Map();
    for (const chip of chips) {
      chip.node.classList.remove("is-dragging");
      chip.node.style.top = "";
      chip.node.classList.toggle("is-placed", chip.index !== null);
      chip.hold.classList.toggle("is-empty", chip.index !== null);
      if (chip.index === null) {
        chip.node.style.left = "";
        chip.node.style.removeProperty("--dg-k");
        if (chip.node.parentNode !== chip.hold) chip.hold.append(chip.node);
        continue;
      }
      const k = used.get(chip.index) ?? 0;
      used.set(chip.index, k + 1);
      chip.node.style.setProperty("--dg-k", k);
      chip.node.style.left = `${xPercentOf(chip.index / count)}%`;
      if (chip.node.parentNode !== zone) zone.append(chip.node);
    }
    focusChip?.node.focus();
  }

  function indexAt(clientX) {
    const rect = svg.getBoundingClientRect();
    const scale = rect.width / VBW;
    return nearestIndex(clientX, count, rect.left + LINE_X0 * scale, rect.left + LINE_X1 * scale);
  }

  // Chipets mitt avgör: över zonens överkant räknas som över linjen.
  const overLine = (y) => y >= zone.getBoundingClientRect().top - 12;

  let drag = null;
  const place = (e) => {
    const lift = e.pointerType === "touch" ? 40 : 0; // så att fingret inte täcker chipet
    const y = e.clientY - lift;
    drag.chip.node.style.left = `${e.clientX}px`;
    drag.chip.node.style.top = `${y}px`;
    drag.index = overLine(y) ? indexAt(e.clientX) : null;
    guide.hidden = drag.index === null;
    if (drag.index !== null) guide.style.left = `${xPercentOf(drag.index / count)}%`;
  };
  const finish = (cancelled) => {
    const { chip, index } = drag;
    if (!cancelled) chip.index = index;
    drag = null;
    guide.hidden = true;
    layout();
  };

  for (const chip of chips) {
    const { node } = chip;
    node.addEventListener("pointerdown", (e) => {
      if (drag || (e.pointerType === "mouse" && e.button !== 0)) return;
      e.preventDefault();
      try {
        node.setPointerCapture(e.pointerId);
      } catch {
        // Utan fångst följer chipet ändå med så länge pekaren är över det.
      }
      drag = { chip, pointerId: e.pointerId, index: chip.index };
      node.classList.add("is-dragging");
      chip.hold.classList.add("is-empty");
      place(e);
    });
    node.addEventListener("pointermove", (e) => {
      if (drag?.chip === chip && drag.pointerId === e.pointerId) place(e);
    });
    node.addEventListener("pointerup", (e) => {
      if (drag?.chip === chip && drag.pointerId === e.pointerId) finish(false);
    });
    node.addEventListener("pointercancel", (e) => {
      if (drag?.chip === chip && drag.pointerId === e.pointerId) finish(true);
    });
    node.addEventListener("keydown", (e) => {
      // Ett chip i facket hamnar först mitt på linjen; därefter flyttar pilarna det ett streck.
      const placed = chip.index !== null;
      const here = chip.index ?? Math.round(count / 2);
      const to = { ArrowLeft: placed ? here - 1 : here, ArrowRight: placed ? here + 1 : here, Home: 0, End: count }[e.key];
      if (to !== undefined) chip.index = Math.min(count, Math.max(0, to));
      else if (["Escape", "Backspace", "Delete"].includes(e.key)) chip.index = null;
      else return;
      e.preventDefault();
      layout(chip);
    });
  }

  return {
    read: () => Object.fromEntries(chips.map((c) => [c.letter, c.index === null ? null : ticks[c.index].text])),
    focusFirst: () => chips[0]?.node.focus(),
  };
}

// ---------- RESULTATSKÄRMEN ----------

const MARKS = {
  right: ["✓", "Rätt"],
  wrong: ["✗", "Fel"],
  s: ["S", "Rätt svar men räkningen godkändes inte"],
  skipped: ["–", "Överhoppad"],
  paper: ["✎", "Visa läraren"],
};

function formatDate(ms) {
  if (!Number.isFinite(ms)) return "";
  return new Date(ms).toLocaleString("sv-SE", { dateStyle: "long", timeStyle: "short" });
}

export function guideText(time) {
  if (!time) return "";
  const span = time.min === time.max ? `${time.min}` : `${time.min}–${time.max}`;
  // RP5 och RP7 har ingen tid att avbryta efter (stop är null).
  return time.stop == null ? `Diamant: ${span} min` : `Diamant: ${span} min, avbryt efter ca ${time.stop} min`;
}

// Elevens svar som det stod, "–" när rutan var tom, och facits svar bredvid som visas först med knappen.
function answerCell(given, expected, wrong) {
  const cell = el("span", "dg-cell");
  cell.append(el("span", `dg-answer${wrong ? " is-wrong" : ""}`, given === "" || given == null ? "–" : String(given)));
  if (wrong && expected != null) cell.append(el("span", "dg-expected", ` (rätt: ${prettyAnswer(expected)})`));
  return cell;
}

const labelledLine = (label, ...nodes) => {
  const line = el("p", "dg-detail-line");
  line.append(el("span", "dg-detail-label", `${label} `), ...nodes);
  return line;
};

// Raderna (och tabellen, och grafen) där rätt svar står, för en skärm som hoppades över: "–" i varje ruta och facit bredvid.
function expectedRows(screen, variables) {
  const boxFor = (id) => answerCell("", screen.boxes?.[id]?.accept?.[0], true);
  const table = screen.table ? [drawTable(screen.table, (markup) => drawRow(markup, boxFor, "span", variables))] : [];
  const chart = screen.chart ? [chartStage(screen.chart)] : [];
  const figure = screen.figure ? [figureStage(screen.figure)] : [];
  const diagram = screen.diagram ? [diagramStage(screen.diagram)] : [];
  return [...figure, ...chart, ...diagram, ...table, ...rowsOf(screen).map((markup) => drawRow(markup, boxFor, "div", variables))];
}

function wordDetail(screen, row) {
  const wrong = row.wrong[0];
  // Det eleven skrev, även när svaret blev rätt (S): facit visas bara med knappen.
  const answered = row.mark === "s" ? row.answers?.answer ?? "" : wrong?.given ?? "";
  const nodes = [el("p", "dg-word-text", screen.text)];
  nodes.push(labelledLine("Räkning:", answerCell(row.calc ?? "", null, false)));
  nodes.push(labelledLine("Svar:", answerCell(answered, screen.accept[0], row.mark === "wrong")));
  if (screen.facit) nodes.push(el("p", "dg-expected dg-facit", `Facit: ${prettyAnswer(screen.facit)}`));
  return nodes;
}

function lineDetail(screen, row) {
  const values = screen.kind === "place" ? screen.letters : screen.marks;
  return row.wrong.map((w) => {
    const item = el("p", "dg-detail-line");
    if (screen.kind === "place") {
      item.append(el("span", "dg-detail-label", `${w.id} ${chipValue(values[w.id] ?? w.expected)}`));
      // En bokstav som aldrig lades på linjen har ingen plats att visa.
      if (w.given === "" || w.given == null) item.append(el("span", "dg-t", " inte placerad"));
      else item.append(el("span", "dg-t", " placerad vid "), answerCell(w.given, null, true));
    } else {
      item.append(el("span", "dg-detail-label", `${w.id} =`), el("span", "dg-t", " "), answerCell(w.given, w.expected, true));
    }
    return item;
  });
}

function rowsDetail(screen, row, variables) {
  const wrongBy = new Map(row.wrong.map((w) => [w.id, w]));
  const nodes = taskText(screen);
  const hasWrong = (markup) => idsIn(parseMarkup(markup)).some((id) => wrongBy.has(id));
  const boxFor = (id) => {
    const w = wrongBy.get(id);
    // En ruta som blev rätt visar också det eleven skrev (0,04 för 1/25), inte facit.
    return w ? answerCell(w.given, w.expected, true) : answerCell(row.answers?.[id] ?? "", null, false);
  };
  // Figuren som skulle läsas av (screen.figure) ritas om bredvid raderna, så att läraren ser bilden.
  if (screen.figure && row.wrong.length > 0) nodes.push(figureStage(screen.figure));
  // En tabell med en felaktig ruta visas hel, så att läraren ser vad som stod bredvid.
  if (screen.table && cellsOf(screen.table).some(hasWrong)) nodes.push(drawTable(screen.table, (markup) => drawRow(markup, boxFor, "span", variables)));
  for (const markup of rowsOf(screen)) {
    if (!hasWrong(markup)) continue;
    const drawn = drawRow(markup, boxFor, "div", variables);
    for (const w of row.wrong) if (w.note && idsIn(parseMarkup(markup)).includes(w.id)) drawn.append(el("span", "dg-note", w.note));
    nodes.push(drawn);
  }
  // Grafen som skulle läsas av syns igen först med "Visa rätt svar".
  if (screen.chart && row.wrong.length > 0) nodes.push(chartBlock(screen.chart));
  if (screen.diagram && row.wrong.length > 0) nodes.push(diagramBlock(screen.diagram));
  return nodes;
}

// Uttrycken eleven skrev i en skärms uttrycksrutor (RP6 5, 6). Ett uttryck med rätt värde kan vara rätt skrivet eller
// bara en bra gissning, så läraren ska se vad som stod (facit visas inte).
function expressionLines(screen, row) {
  return Object.entries(screen?.boxes ?? {})
    .filter(([, box]) => box.expression)
    .map(([id]) => labelledLine("Svar:", answerCell(row.answers?.[id] ?? "", null, false)));
}

// Det som står under en rad. En rad som är helt rätt har inget under sig, utom en textuppgift: där visas
// elevens räkning ändå, så att läraren ser om eleven adderade där facit subtraherar (facit visas inte). Likadant
// elevens uttryck i en uttrycksruta.
// variables är diagnosens variabelbokstäver (drawTokens).
function detailFor(screen, row, variables) {
  if (row.mark === "paper") return [el("p", "dg-detail-line", "Visa läraren")];
  if (row.mark === "right") return screen?.kind === "word" ? [labelledLine("Räkning:", answerCell(row.calc ?? "", null, false))] : expressionLines(screen, row);
  if (!screen) return row.wrong.map((w) => labelledLine(`${w.id}:`, answerCell(w.given, w.expected, true)));

  if (row.mark === "skipped") {
    const nodes = [el("p", "dg-skipped", "Hoppade över")];
    if (screen.kind === "paper") return nodes; // ingen rättning, inget facit att dölja
    const hidden = el("div", "dg-expected dg-expected-block");
    if (screen.kind === "word") hidden.append(el("p", "dg-facit", `Facit: ${prettyAnswer(screen.facit ?? screen.accept[0])}`));
    else if (screen.kind === "choose" || screen.kind === "pick") hidden.append(...choiceFacit(screen, drawMarkup));
    else if (screen.kind === "shade") hidden.append(...shadeSkipped(screen));
    else if (screen.kind === "plot") hidden.append(...plotSkipped(screen));
    else if (screen.kind === "line") hidden.append(...drawnLineSkipped(screen));
    else if (screen.kind === "clock") hidden.append(...clockSkipped(screen));
    else if (screen.kind === "bars") hidden.append(...barsSkipped(screen));
    else if (screen.kind === "place" || screen.kind === "read") {
      const values = screen.kind === "place" ? screen.letters : screen.marks;
      for (const [id, value] of Object.entries(values)) hidden.append(labelledLine(`${id} =`, el("span", "dg-t", prettyAnswer(value))));
    } else hidden.append(...taskText(screen), ...expectedRows(screen, variables));
    return [...nodes, hidden];
  }

  if (screen.kind === "word") return wordDetail(screen, row);
  if (screen.kind === "choose" || screen.kind === "pick") return choiceDetail(screen, row, drawMarkup);
  if (screen.kind === "shade") return shadeDetail(screen, row);
  if (screen.kind === "plot") return plotDetail(screen, row);
  if (screen.kind === "line") return drawnLineDetail(screen, row);
  if (screen.kind === "clock") return clockDetail(screen, row);
  if (screen.kind === "bars") return barsDetail(screen, row);
  if (screen.kind === "place" || screen.kind === "read") return lineDetail(screen, row);
  return rowsDetail(screen, row, variables);
}

function markCell(row) {
  const cell = el("span", "dg-res-mark");
  const [symbol, name] = MARKS[row.mark] ?? MARKS.skipped;
  // En skärm med flera kolumner visar antal rätt; överhoppad visar alltid –.
  if (row.total > 1 && row.mark !== "skipped") {
    cell.textContent = `${row.right}/${row.total}`;
    cell.setAttribute("aria-label", `${row.right} av ${row.total} rätt`);
  } else {
    cell.textContent = symbol;
    cell.setAttribute("aria-label", name);
  }
  return cell;
}

// Resultatskärmen som läraren läser från en armlängds håll. onBack (valfri) ger knappen "Till listan".
export function renderResult(diagnosis, scored, { onBack } = {}) {
  const root = el("section", "dg-result");

  // En div, inte <header>: styles.css ger alla header-element sidans lila band.
  const head = el("div", "dg-res-head");
  head.append(el("h2", "dg-res-title", `${scored.code} · ${scored.title ?? diagnosis.title}`), el("div", "dg-res-date", formatDate(scored.startedAt)));

  const score = el("div", "dg-res-score");
  score.append(el("span", "dg-res-right", `Rätt: ${scored.right} av ${scored.total}`));
  if (scored.s > 0) score.append(el("span", "dg-res-s", `S: ${scored.s}`));

  // Pappersuppgifterna ger ingen poäng; läraren ska se dem. Överhoppade syns som – på sin rad och är inte med här.
  const paper = scored.screens.filter((row) => row.mark === "paper").map((row) => row.label);
  const showTeacher = paper.length > 0 ? el("div", "dg-res-paper", `Visa läraren: ${paper.join(", ")}`) : null;

  const time = el("div", "dg-res-time");
  time.append(el("span", "dg-res-total", `Tid: ${formatTime(scored.totalMs)}`), el("span", "dg-res-guide", guideText(scored.time ?? diagnosis.time)));

  const list = el("ol", "dg-res-rows");
  for (const row of scored.screens) {
    const item = el("li", "dg-res-row");
    const screen = diagnosis.screens.find((s) => s.label === row.label);
    item.append(el("span", "dg-res-label", row.label), markCell(row), el("span", "dg-res-secs", `${Math.round(row.ms / 1000)} s`));
    const detail = detailFor(screen, row, diagnosis.variables);
    if (detail.length > 0) {
      // Bara en rad som inte är helt rätt får bakgrunden som säger "titta här".
      if (row.mark !== "right") item.classList.add("has-detail");
      const box = el("div", "dg-res-detail");
      box.append(...detail);
      item.append(box);
    }
    list.append(item);
  }

  const toggle = el("button", "dg-reveal", "Visa rätt svar");
  toggle.type = "button";
  toggle.setAttribute("aria-pressed", "false");
  toggle.addEventListener("click", () => {
    const on = !root.classList.contains("dg-show-answers");
    root.classList.toggle("dg-show-answers", on);
    toggle.setAttribute("aria-pressed", String(on));
    toggle.textContent = on ? "Dölj rätt svar" : "Visa rätt svar";
  });

  root.append(head, score, ...(showTeacher ? [showTeacher] : []), time, list, toggle);
  if (onBack) {
    const back = el("button", "start-btn dg-back", "Till listan");
    back.type = "button";
    back.addEventListener("click", onBack);
    root.append(back);
  }
  return root;
}
