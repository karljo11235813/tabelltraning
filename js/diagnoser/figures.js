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
// ram (se .dg-piece i diagnoser.css). En del (path) fylls jämnt–udda (fill-rule evenodd), så att en stig med två
// delstigar är en del med hål: en kvadrat minus en cirkel, en ring (MAr6). Bågar (A) går bra i stigarna.
//
// Mätning (MTi, MMa, MLä, MAr, MVo) har fler slags figurdelar. Allt ritas i ordningen kuber, delar, linjaler,
// visartavla, klocka, streck (lines) och beteckningar:
//   cubes   [[x, y, z], …]: enhetskuber (cubesLayout, nedan).
//   rulers  [{ from, to, length, … }]: graderade linjaler längs en sträcka (rulerLayout, nedan), ovanpå delarna som en
//           linjal som ligger på papperet.
//   dial    en visartavla: en urtavla eller en vågs skala (clock.js).
//   clock   "8.15": en vanlig analog klocka med visarna (clock.js).
// view får saknas när figuren bara är kuber (view blir kubernas egen storlek) eller en klocka (200 × 200). pieces får
// saknas när figuren har något annat att rita; en figur att skugga (shade) har alltid delar.

import { parseNumber } from "./parse.js";
import { rat, add, div, equals } from "./value.js";
import { el, svgEl, detailLine } from "./dom.js";
import { drawDial, clockDial, CLOCK_VIEW } from "./clock.js";

// ---------- RÄTTNINGEN ----------

const exact = (x) => parseNumber(String(x));
const sum = (values) => values.reduce((acc, v) => add(acc, v), rat(0));

// Vikterna som exakta tal. En felskriven vikt i datan räknas som 0 (rättningen kastar aldrig; data.test.js fångar den).
export const weightsOf = (figure) => (figure.pieces ?? []).map((piece) => exact(piece.weight ?? 1) ?? rat(0));

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
  const indexes = parsePieces(raw, (figure.pieces ?? []).length);
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
  const n = (figure.pieces ?? []).length;
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

// Figurens mått: view, eller kubernas egen storlek, eller en klockas.
export function viewOf(figure) {
  if (figure.view) return figure.view;
  if (figure.cubes) return cubesLayout(figure.cubes).view;
  return CLOCK_VIEW;
}

// Beteckningarnas storlek i figurens koordinater: en tiondel av bredden. En figur ritas lika bred på skärmen (se
// .dg-fig-stage), så texten blir ungefär lika stor som raderna, hur stor view än är.
export const labelSize = (figure) => Math.round(viewOf(figure)[0]) / 10;

// En beteckning som är en bokstav, eventuellt med siffror efter (s, b, h, A, x1), eller två–tre versaler (AB, ABC: en
// sträcka eller en vinkel) är en variabel eller en punkt och står kursiv. En annan text, som ett mått ("4 cm", "5 kg")
// eller ett ord ("Gul", "röd" i SA1 2:s träddiagram), står rak och mindre.
export const isTextLabel = (text) => !/^(?:[A-Za-zÅÄÖåäö]\d*|[A-ZÅÄÖ]{2,3})$/.test(String(text));
const TEXT_LABEL_SCALE = 0.6;

// ---------- LINJALER ----------

// En linjal (figure.rulers) är { from: [x, y], to: [x, y], length, start?: 0, unit?: "cm", minor?: 1, side?: "right",
// broken?: false }:
//   from, to  mätkanten, från talet start till start + length, i figurens koordinater och i vilken vinkel som helst.
//             En enhet är alltså |to − from| / length, och det som mäts ritas i samma skala (en penna på 13 cm är 13
//             enheter lång).
//   length    antal enheter mellan from och to, ett positivt heltal.
//   start     talet vid from, ett heltal (7 på en avbruten tumstock).
//   unit      "cm", "dm", "m", "tum" eller "mm", skrivs på linjalen mellan de två första talen när det finns plats.
//             Varje hel enhet får ett tal, utom "mm" som numreras var tionde millimeter (0, 10, 20 …).
//   minor     streck per enhet: 10 för millimeter på en cm-linjal, 2 för halva, standard 1. Ett halvt steg mellan två tal
//             får ett mellanlångt streck.
//   side      sidan om mätkanten som linjalen ligger på, sett från from mot to: "right" (standard) lägger en linjal som
//             går åt höger under kanten, "left" ovanför.
//   broken    sågtandade ändar, som en avbruten tumstock (MLä1 3).
// Strecken går från mätkanten in i linjalen och talen står raka under dem, i alla vinklar.

const sub2 = (a, b) => [a[0] - b[0], a[1] - b[1]];
const add2 = (a, b) => [a[0] + b[0], a[1] + b[1]];
const scale2 = (a, k) => [a[0] * k, a[1] * k];
const r2 = (v) => Math.round(v * 100) / 100;
const pointsText = (points) => points.map((p) => p.map(r2).join(",")).join(" ");

// Linjalens mått och delar i figurens koordinater: { unitLength, font, body (stig), ticks: [{ from, to, size }],
// numbers: [{ at, text }], unitLabel: { at, text } }. size är "long" (vid ett tal), "mid" (halvvägs) eller "short".
export function rulerLayout(ruler, view) {
  const { from, to, length, start = 0, unit = "cm", minor = 1, side = "right", broken = false } = ruler;
  const span = sub2(to, from);
  const distance = Math.hypot(span[0], span[1]);
  const dir = scale2(span, 1 / distance);
  const normal = side === "left" ? [dir[1], -dir[0]] : [-dir[1], dir[0]]; // in i linjalen
  const unitLength = distance / length;
  const every = unit === "mm" ? 10 : 1; // enheter mellan två tal
  const font = Math.min(0.6 * unitLength * every, Math.max(...view) / 26); // två siffror ryms mellan två tal
  const width = 2.9 * font;
  const pad = font; // så att ett tal vid änden ryms, men kort, så att linjaler längs två sidor knappt möts i hörnet
  const along = (value) => add2(from, scale2(dir, (value - start) * unitLength));
  const inward = (p, depth) => add2(p, scale2(normal, depth));

  const ticks = [];
  const numbers = [];
  const period = every * minor; // steg mellan två tal
  for (let i = 0; i <= length * minor; i++) {
    const j = start * minor + i; // strecket räknat från 0, i steg om 1/minor enhet
    const value = j / minor;
    const size = j % period === 0 ? "long" : (2 * j) % period === 0 ? "mid" : "short";
    const depth = { long: 1, mid: 0.72, short: 0.45 }[size] * font;
    const at = along(value);
    ticks.push({ from: at, to: inward(at, depth), size });
    if (size === "long") numbers.push({ at: inward(at, 1.75 * font), text: String(value) });
  }

  const [p0, p1] = [add2(from, scale2(dir, -pad)), add2(to, scale2(dir, pad))];
  const [p2, p3] = [inward(p1, width), inward(p0, width)];
  // En sågtandad ände från a till b (över linjalens bredd), med tänderna ut och in längs linjalen.
  const teeth = (a, b, outward) => [1, 2, 3, 4, 5].map((k) => add2(add2(a, scale2(sub2(b, a), k / 6)), scale2(dir, (k % 2 === 1 ? 0.3 : -0.1) * font * outward)));
  const outline = broken ? [p0, p1, ...teeth(p1, p2, 1), p2, p3, ...teeth(p3, p0, -1)] : [p0, p1, p2, p3];
  const body = `M${outline.map((p) => p.map(r2).join(" ")).join("L")}Z`;
  // Enheten står mellan de två första talen när den ryms där (siffror är ungefär 0,6 tecken breda, enheten är mindre).
  const textWidth = (text, size) => 0.6 * String(text).length * size;
  const room = (textWidth(start, font) + textWidth(start + every, font)) / 2 + textWidth(unit, 0.8 * font) + 0.5 * font;
  const unitLabel = unitLength * every >= room ? { at: inward(along(start + every / 2), 1.75 * font), text: unit } : null;
  return { unitLength, font, body, ticks, numbers, unitLabel };
}

// Alla linjaler: först kropparna, sedan strecken och talen, så att en linjal som når över en annan i ett hörn aldrig
// täcker den andras streck eller tal.
function drawRulers(rulers, view) {
  const g = svgEl("g", { class: "dg-ruler" });
  const layouts = rulers.map((ruler) => rulerLayout(ruler, view));
  for (const layout of layouts) g.append(svgEl("path", { class: "dg-ruler-body", d: layout.body }));
  const text = (className, { at, text: content }, size) => svgEl("text", { class: className, x: r2(at[0]), y: r2(at[1]), "text-anchor": "middle", "dominant-baseline": "central", "font-size": r2(size) }, content);
  for (const layout of layouts) {
    for (const tick of layout.ticks) g.append(svgEl("line", { class: `dg-ruler-tick is-${tick.size}`, x1: r2(tick.from[0]), y1: r2(tick.from[1]), x2: r2(tick.to[0]), y2: r2(tick.to[1]) }));
    for (const number of layout.numbers) g.append(text("dg-ruler-num", number, layout.font));
    if (layout.unitLabel) g.append(text("dg-ruler-unit", layout.unitLabel, 0.8 * layout.font));
  }
  return g;
}

// ---------- KUBER ----------

// figure.cubes är [[x, y, z], …]: enhetskuber med x åt höger, y uppåt och z bakåt, heltal från 0. De ritas som på
// Diamants blad (snett parallellperspektiv): framsidan är en kvadrat och djupet går snett uppåt åt höger med halva
// längden, så att framsidan, ovansidan och högersidan syns. Kuberna ritas bakifrån och fram, nerifrån och upp och från
// vänster till höger (målarens ordning), så att det som skyms täcks av det som ritas senare; en sida som en granne täcker
// helt ritas inte alls. Utan view är figuren kubernas egen storlek (30 per kubsida) och ritas med samma kubstorlek på
// skärmen i alla figurer (48 bildpunkter, mindre om platsen inte räcker); med view skalas kuberna in i den, mitt i.

const CUBE = 30;
const CUBE_PX = 48;
const CUBE_MARGIN = 3;
const DEPTH = 0.5 * Math.SQRT1_2; // en enhet bakåt: så långt åt höger och uppåt, i kubsidor

// En punkt i rummet i kubsidor, med y nedåt som på skärmen.
const project = ([x, y, z]) => [x + DEPTH * z, -(y + DEPTH * z)];

// Kubernas synliga sidor i ritordning: [{ kind: "front" | "top" | "side", cube: [x, y, z], points: [[x, y] × 4] }] i
// figurens koordinater, och figurens view.
export function cubesLayout(cubes, view = null) {
  const key = ([x, y, z]) => `${x},${y},${z}`;
  const filled = new Set(cubes.map(key));
  const order = [...cubes].sort((a, b) => b[2] - a[2] || a[1] - b[1] || a[0] - b[0]);
  const raw = [];
  for (const [x, y, z] of order) {
    if (!filled.has(key([x, y, z - 1]))) raw.push({ kind: "front", cube: [x, y, z], corners: [[x, y, z], [x + 1, y, z], [x + 1, y + 1, z], [x, y + 1, z]] });
    if (!filled.has(key([x, y + 1, z]))) raw.push({ kind: "top", cube: [x, y, z], corners: [[x, y + 1, z], [x + 1, y + 1, z], [x + 1, y + 1, z + 1], [x, y + 1, z + 1]] });
    if (!filled.has(key([x + 1, y, z]))) raw.push({ kind: "side", cube: [x, y, z], corners: [[x + 1, y, z], [x + 1, y, z + 1], [x + 1, y + 1, z + 1], [x + 1, y + 1, z]] });
  }
  const flat = raw.flatMap((f) => f.corners.map(project));
  const [minX, maxX] = [Math.min(...flat.map((p) => p[0])), Math.max(...flat.map((p) => p[0]))];
  const [minY, maxY] = [Math.min(...flat.map((p) => p[1])), Math.max(...flat.map((p) => p[1]))];
  const [w, h] = [maxX - minX, maxY - minY];
  const size = view ? Math.min((view[0] - 2 * CUBE_MARGIN) / w, (view[1] - 2 * CUBE_MARGIN) / h) : CUBE;
  const out = view ?? [w * CUBE + 2 * CUBE_MARGIN, h * CUBE + 2 * CUBE_MARGIN].map(r2);
  const [ox, oy] = [(out[0] - w * size) / 2 - minX * size, (out[1] - h * size) / 2 - minY * size];
  const faces = raw.map(({ kind, cube, corners }) => ({ kind, cube, points: corners.map((c) => project(c)).map(([px, py]) => [ox + px * size, oy + py * size]) }));
  return { view: out, faces };
}

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
  const view = viewOf(figure);
  const [width, height] = view;
  const svg = svgEl("svg", { viewBox: `0 0 ${width} ${height}`, class: `dg-fig${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });
  const hatch = `dg-hatch-${++hatchCount}`;
  svg.append(hatchPattern(hatch));

  if (figure.cubes) {
    for (const face of cubesLayout(figure.cubes, figure.view ?? null).faces) svg.append(svgEl("polygon", { class: `dg-cube dg-cube-${face.kind}`, points: pointsText(face.points) }));
    // Kuber utan view ritas lika stora i alla figurer (CUBE_PX bildpunkter per kubsida), högst så breda som platsen.
    if (!figure.view) {
      svg.classList.add("is-cubes");
      svg.style.maxWidth = `${Math.round((width * CUBE_PX) / CUBE)}px`;
    }
  }
  const parts = (figure.pieces ?? []).map((piece, i) => {
    const node = piece.circle ? svgEl("circle", { cx: piece.circle[0], cy: piece.circle[1], r: piece.circle[2] }) : svgEl("path", { d: piece.path, "fill-rule": "evenodd" });
    node.setAttribute("class", "dg-piece");
    node.dataset.index = String(i);
    svg.append(node);
    return node;
  });
  if (figure.rulers) svg.append(drawRulers(figure.rulers, view));
  if (figure.dial) svg.append(drawDial(figure.dial).el);
  if (figure.clock !== undefined) svg.append(drawDial(clockDial(figure.clock, view)).el);
  for (const d of figure.lines ?? []) svg.append(svgEl("path", { d, class: "dg-fig-line" }));
  for (const { at, text } of figure.labels ?? []) {
    const plain = isTextLabel(text);
    const size = plain ? r2(labelSize(figure) * TEXT_LABEL_SCALE) : labelSize(figure);
    svg.append(svgEl("text", { class: `dg-fig-label${plain ? " is-text" : ""}`, x: at[0], y: at[1], "text-anchor": "middle", "dominant-baseline": "central", "font-size": size }, text));
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
// En figur med linjaler får vara bredare (30rem), så att millimeterstrecken går att läsa; en klocka är smalare.
export function figureStage(figure, options) {
  const stage = el("div", `dg-fig-stage${figure.rulers ? " has-rulers" : ""}${figure.clock !== undefined && !figure.view ? " dg-clock-stage" : ""}`);
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
  const given = parsePieces(row.answers?.pieces, (screen.figure.pieces ?? []).length);
  const shown = given.length === 0 ? el("span", "dg-t", "inget skuggat") : figureStage(screen.figure, { shaded: given, label: "Elevens skuggning" });
  const facit = el("div", "dg-expected dg-expected-block");
  facit.append(facitLine(screen));
  return [...textLine(screen), detailLine("Skuggade:", shown), facit];
}

// En överhoppad skärm: uppgiften och facit, som läggs i det dolda facitblocket.
export function shadeSkipped(screen) {
  return [...textLine(screen), facitLine(screen)];
}
