// Figurer: SVG som ritas ur data, och skuggning med klick eller drag. Inget här rör `document` när modulen
// laddas; allt som ritar görs först när en funktion anropas.
//
// En figur är { view: [bredd, höjd], pieces: [{ path: "M … Z" | circle: [cx, cy, r], weight?: 1 }], shaded?: [index],
// lines?: ["M …"], labels?: [{ at: [x, y], text: "s" }] }. Delarna (pieces) är det som kan skuggas; weight är delens
// storlek (standard 1) och lines är extra streck som ritas ovanpå. shaded är de delar som redan är skuggade (att läsa
// av, att välja bland). labels är beteckningar som sidor och höjder (TAu1: s, b, h), kursiva som variabler; at är
// textens mitt i figurens koordinater, och storleken följer figurens bredd (labelSize), så att den är lika stor på varje
// skärm.
//
// Rena funktioner (rättningen, mark.js):
//   parsePieces      det eleven skuggade ("0,3") som en lista med index, utan dubbletter och utan index som inte finns.
//   shadedFraction   skuggad del av figuren som exakt bråk: summan av vikterna delat med alla vikter.
//   isShadeRight     rätt när de skuggade delarnas vikter ger precis målbråket (target), vilka delar det än är.
//   facitPieces      de första delarna (minst antal, lägst index) som ger målet, till facit; null om inga gör det.
//   shadeFacit       facit för en shade-skärm: screen.facit om den finns, annars facitPieces.
//
// Ritande funktioner: drawFigure (en figur, valfritt klickbar), figureStage (en figur på en skärm), buildShade (skärmen
// för shade) och shadeDetail/shadeFacit (resultatskärmen). Skuggade delar syns utan färg: snett streckmönster, tjockare
// ram (se .dg-piece i diagnoser.css).

import { parseNumber } from "./parse.js";
import { rat, add, div, equals } from "./value.js";
import { el, svgEl, detailLine } from "./dom.js";

// ---------- RÄTTNINGEN ----------

const exact = (x) => parseNumber(String(x));
const sum = (values) => values.reduce((acc, v) => add(acc, v), rat(0));

// Vikterna som exakta tal. En felskriven vikt i datan räknas som 0 (rättningen kastar aldrig; data.test.js fångar den).
export const weightsOf = (figure) => figure.pieces.map((piece) => exact(piece.weight ?? 1) ?? rat(0));

export function parsePieces(raw, count) {
  const found = new Set();
  for (const part of String(raw ?? "").split(",")) {
    const text = part.trim();
    if (!/^\d{1,3}$/.test(text)) continue;
    if (Number(text) < count) found.add(Number(text));
  }
  return [...found].sort((a, b) => a - b);
}

export const piecesText = (indexes) => indexes.join(",");

export function shadedFraction(figure, indexes) {
  const weights = weightsOf(figure);
  const total = sum(weights);
  if (total.n === 0n) return null;
  return div(sum(indexes.map((i) => weights[i])), total);
}

export function isShadeRight(figure, target, raw) {
  const indexes = parsePieces(raw, figure.pieces.length);
  if (indexes.length === 0) return false;
  const goal = exact(target);
  const got = shadedFraction(figure, indexes);
  return goal !== null && got !== null && equals(got, goal);
}

const MAX_SEARCH = 12; // delar som facitPieces provar alla kombinationer av (högst 2^12 försök)

// Första kombinationen av size index av n (lägst index först) som ok godkänner.
function firstCombination(n, size, ok, from = 0, chosen = []) {
  if (chosen.length === size) return ok(chosen) ? chosen : null;
  for (let i = from; i <= n - (size - chosen.length); i++) {
    const found = firstCombination(n, size, ok, i + 1, [...chosen, i]);
    if (found) return found;
  }
  return null;
}

export function facitPieces(figure, target) {
  const n = figure.pieces.length;
  if (n > MAX_SEARCH) return null;
  for (let size = 1; size <= n; size++) {
    const found = firstCombination(n, size, (chosen) => isShadeRight(figure, target, piecesText(chosen)));
    if (found) return found;
  }
  return null;
}

export const shadeFacit = (screen) => screen.facit ?? facitPieces(screen.figure, screen.target) ?? [];

// ---------- RITNINGEN ----------

let hatchCount = 0; // varje figur har sitt eget mönster-id, så att flera figurer på en sida inte krockar

// Beteckningarnas storlek i figurens koordinater: en tiondel av bredden. En figur ritas lika bred på skärmen (se
// .dg-fig-stage), så texten blir ungefär lika stor som raderna, hur stor view än är.
export const labelSize = (figure) => Math.round(figure.view[0]) / 10;

function hatchPattern(id) {
  const defs = svgEl("defs");
  const pattern = svgEl("pattern", { id, patternUnits: "userSpaceOnUse", width: 9, height: 9, patternTransform: "rotate(45)" });
  pattern.append(svgEl("rect", { width: 9, height: 9, class: "dg-hatch-bg" }), svgEl("line", { x1: 0, y1: 0, x2: 0, y2: 9, class: "dg-hatch-line" }));
  defs.append(pattern);
  return defs;
}

// En figur som SVG. shaded är de skuggade delarna från början. Med interactive kan delarna skuggas: tryck eller klicka
// på en del för att växla den, och dra över flera för att skugga (eller sudda) alla med samma val som första delen fick.
// Med tangentbordet: Tab till en del och Enter eller mellanslag växlar den. onChange anropas efter varje ändring.
// Ger { el, read } där read() är de skuggade delarna som "0,3".
export function drawFigure(figure, { shaded = figure.shaded ?? [], interactive = false, onChange = () => {}, label = "Figur" } = {}) {
  const [width, height] = figure.view;
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, class: `dg-fig${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });
  const hatch = `dg-hatch-${++hatchCount}`;
  svg.append(hatchPattern(hatch));

  const parts = figure.pieces.map((piece, i) => {
    const node = piece.circle ? svgEl("circle", { cx: piece.circle[0], cy: piece.circle[1], r: piece.circle[2] }) : svgEl("path", { d: piece.path });
    node.setAttribute("class", "dg-piece");
    node.dataset.index = String(i);
    svg.append(node);
    return node;
  });
  for (const d of figure.lines ?? []) svg.append(svgEl("path", { d, class: "dg-fig-line" }));
  for (const { at, text } of figure.labels ?? []) {
    svg.append(svgEl("text", { class: "dg-fig-label", x: at[0], y: at[1], "text-anchor": "middle", "dominant-baseline": "central", "font-size": labelSize(figure) }, text));
  }

  const on = new Set();
  function paint(i, value) {
    if (value) on.add(i);
    else on.delete(i);
    parts[i].classList.toggle("is-on", value);
    parts[i].style.fill = value ? `url(#${hatch})` : "";
    if (interactive) parts[i].setAttribute("aria-checked", String(value));
  }
  for (const i of shaded) if (i >= 0 && i < parts.length) paint(i, true);

  if (interactive) {
    svg.setAttribute("tabindex", "-1"); // kan få fokus utan att vara ett tabbstopp: delarna är stoppen (buildShade)
    let painting = null; // true = skuggar, false = suddar, null = ingen knapp nedtryckt
    const partAt = (x, y) => {
      const node = document.elementFromPoint(x, y);
      return node && svg.contains(node) && node.dataset?.index !== undefined ? Number(node.dataset.index) : null;
    };
    svg.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const i = partAt(event.clientX, event.clientY);
      if (i === null) return;
      event.preventDefault();
      painting = !on.has(i);
      paint(i, painting);
      onChange();
      svg.setPointerCapture?.(event.pointerId);
    });
    svg.addEventListener("pointermove", (event) => {
      if (painting === null) return;
      if (event.buttons === 0) return void (painting = null); // knappen släpptes utanför sidan: ingen mer målning
      const i = partAt(event.clientX, event.clientY);
      if (i !== null && on.has(i) !== painting) {
        paint(i, painting);
        onChange();
      }
    });
    const stop = () => {
      painting = null;
    };
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) svg.addEventListener(type, stop);

    parts.forEach((node, i) => {
      node.setAttribute("tabindex", "0");
      node.setAttribute("role", "checkbox");
      node.setAttribute("aria-checked", String(on.has(i)));
      node.setAttribute("aria-label", `Del ${i + 1}`);
      node.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        paint(i, !on.has(i));
        onChange();
      });
    });
  }

  return { el: svg, read: () => piecesText([...on].sort((a, b) => a - b)) };
}

// En figur på en skärm, ovanför raderna (screen.figure) eller i en bricka.
export function figureStage(figure, options) {
  const stage = el("div", "dg-fig-stage");
  stage.append(drawFigure(figure, options).el);
  return stage;
}

// Skärmen för shade: figuren är klickbar och börjar utan skuggning. Svaret är { pieces: "0,3" }. Tomt (inget skuggat)
// är ett svar och fel (keepBlank), som ett val utan något valt: bara Hoppa över ger –.
// Fokus går till figuren, inte till Nästa (ett vanemässigt Enter skulle skicka in ett tomt svar) och inte till första
// delen (Enter växlar den): Enter på figuren gör ingenting, och Tab leder till första delen.
export function buildShade(screen, root) {
  const figure = drawFigure(screen.figure, { interactive: true, shaded: [], label: "Skugga delar av figuren" });
  const stage = el("div", "dg-fig-stage");
  stage.append(figure.el);
  root.append(stage);
  return { read: () => ({ pieces: figure.read() }), focusFirst: () => figure.el.focus({ preventScroll: true }), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const textLine = (screen) => (screen.text ? [el("p", "dg-word-text", screen.text)] : []);

const facitLine = (screen) => detailLine("Rätt:", figureStage(screen.figure, { shaded: shadeFacit(screen), label: "Rätt skuggning" }));

// Det eleven skuggade, och facit bakom "Visa rätt svar". Rätt och fel syns på radens symbol, inte på figuren.
export function shadeDetail(screen, row) {
  const given = parsePieces(row.answers?.pieces, screen.figure.pieces.length);
  const shown = given.length === 0 ? el("span", "dg-t", "inget skuggat") : figureStage(screen.figure, { shaded: given, label: "Elevens skuggning" });
  const facit = el("div", "dg-expected dg-expected-block");
  facit.append(facitLine(screen));
  return [...textLine(screen), detailLine("Skuggade:", shown), facit];
}

// En överhoppad skärm: uppgiften och facit, som läggs i det dolda facitblocket.
export function shadeSkipped(screen) {
  return [...textLine(screen), facitLine(screen)];
}
