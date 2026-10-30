// Stapeldiagram och stolpdiagram som eleven ritar: skärmtypen bars (STd2 5, STd3 3a och 4b). Inget här rör `document`
// när modulen laddas; allt som ritar görs först när en funktion anropas.
//
// Skärmen är { kind: "bars", label, text, categories, y, x?, style?, values, table? }:
//   categories  en kolumn per kategori, med texten under kolumnen (["Mamma", "Pappa", …], ["1", "2", …])
//   y           värdeaxeln { min: 0, max, step, label? }, graderad var step (exakta decimaltal som i graph.js, högst 40
//               steg); label står ovanför axeln ("Frekvens")
//   x           { label } (valfri): axelns titel under kategorierna ("Poäng")
//   style       "bars" (staplar, standard) eller "sticks" (stolpar: stolpdiagram)
//   values      facits höjd för varje kategori i ordning ([9, 4, 3, 6]; text för decimaler, "2,5"); 0 är ingen stapel
//   table       (valfri) en tabell att läsa av ovanför diagrammet, utan rutor (render.js ritar den)
// Eleven klickar eller trycker i en kolumn där stapeln ska sluta: höjden snäpper till närmaste streck på y-axeln, och
// under 0 (också i texten under axeln) blir den 0, så att stapeln försvinner. Medan knappen är nere följer stapeln
// pekaren upp och ned. Med tangentbordet väljer vänster- och högerpilen kolumn, upp- och nedpilen ändrar höjden ett
// streck och Delete tar bort stapeln. Svaret är { heights: "9;4;3;6" }: höjderna i kategoriernas ordning som rå
// decimaltext (punkt som decimaltecken), 0 för en kolumn utan stapel. En kolumn på resultatblanketten.
//
// Rena funktioner (rättningen, mark.js):
//   parseHeights   det eleven ritade ("9;4;3;6") som exakta tal; null för en del som inte är ett tal.
//   heightsText    höjderna i datan ([9, 4, "2,5"]) som det råa svaret ("9;4;2.5").
//   isBarsRight    rätt när varje höjd är facits (values), lika många och i ordning. Allt 0 är fel.
//   markBars       skärmens rättning för mark.js: { mark, right, wrong }.
//   barsGeometry   mått för ritningen; columnAt och heightIndexAt ger kolumnen och y-axelns streck för en pekposition.
//
// Ritande funktioner: barsStage (diagrammet med givna staplar), buildBars (skärmen) och barsDetail/barsSkipped
// (resultatskärmen: elevens staplar, och facits streckade bakom "Visa rätt svar").

import { parseNumber } from "./parse.js";
import { equals } from "./value.js";
import { axisTicks, decimalText } from "./graph.js";
import { el, svgEl, detailLine } from "./dom.js";

// ---------- RÄTTNINGEN ----------

// Ett exakt rationellt tal ur datan eller svaret (9, "2,5", "2.5"), eller null.
function exactValue(x) {
  if (typeof x !== "number" && typeof x !== "string") return null;
  const v = parseNumber(String(x));
  return v !== null && v.r === 1n ? v : null;
}

const toNumber = (v) => Number(v.n) / Number(v.d); // bara för att rita, aldrig för rättning

export function parseHeights(raw) {
  const text = String(raw ?? "").trim();
  return text === "" ? [] : text.split(";").map((part) => exactValue(part.trim()));
}

export function heightsText(values) {
  return (values ?? [])
    .map((v) => {
      const exact = exactValue(v);
      try {
        return exact === null ? String(v) : decimalText(exact, { raw: true });
      } catch {
        return String(v); // en felskriven höjd i datan: rättningen kastar aldrig
      }
    })
    .join(";");
}

export function isBarsRight(screen, raw) {
  const want = (screen.values ?? []).map(exactValue);
  const have = parseHeights(raw);
  if (want.length === 0 || want.length !== (screen.categories ?? []).length || have.length !== want.length) return false;
  if (want.some((w) => w === null) || want.every((w) => w.n === 0n)) return false; // trasig data är aldrig rätt
  return want.every((w, i) => have[i] !== null && equals(w, have[i]));
}

export function markBars(screen, answers) {
  const given = String(answers?.heights ?? "");
  const right = isBarsRight(screen, given);
  return { mark: right ? "right" : "wrong", right: Number(right), wrong: right ? [] : [{ id: "heights", given, expected: heightsText(screen.values), note: null }] };
}

// ---------- MÅTT ----------

const W = 520;
const LEFT = 56;
const RIGHT = 16;
const TOP = 36;
const CELL = 32; // önskad höjd för ett steg på y-axeln
const MIN_PLOT_HEIGHT = 200;
const MAX_PLOT_HEIGHT = 400;
const CATEGORY_ROW = 40; // kategoriernas texter under axeln
const TITLE_ROW = 26; // x-axelns titel

// Diagrammets mått: kolumnerna delar bredden lika, y-axeln från 0 (base) uppåt. colX(i) är kolumnens mitt och py(j)
// y-axelns j:te streck. Kastar när y-axeln inte går jämnt upp (axisTicks).
export function barsGeometry(screen) {
  const ys = axisTicks(screen.y);
  const yn = ys.length - 1;
  const n = Math.max(1, (screen.categories ?? []).length);
  const pw = W - LEFT - RIGHT;
  const colW = pw / n;
  const ph = Math.min(MAX_PLOT_HEIGHT, Math.max(MIN_PLOT_HEIGHT, yn * CELL));
  const cellY = ph / yn;
  const base = TOP + ph;
  const H = base + CATEGORY_ROW + (screen.x?.label ? TITLE_ROW : 0);
  const [y0, y1] = [ys[0], ys.at(-1)].map((t) => toNumber(t.value));
  return {
    W, H, ys, yn, n, left: LEFT, top: TOP, pw, ph, colW, cellY, base,
    colX: (i) => LEFT + (i + 0.5) * colW,
    py: (j) => base - j * cellY,
    at: (value) => base - ((value - y0) / (y1 - y0)) * ph, // ett värde som höjd i ritningen
  };
}

// Kolumnen (0 …) för en position i ritningens koordinater, eller null utanför kolumnerna.
export function columnAt(g, sx) {
  const i = Math.floor((sx - g.left) / g.colW);
  return i >= 0 && i < g.n ? i : null;
}

// Strecket på y-axeln (0 … yn) närmast en höjd i ritningens koordinater: under axeln 0, över diagrammet det översta.
export function heightIndexAt(g, sy) {
  return Math.min(g.yn, Math.max(0, Math.round((g.base - sy) / g.cellY)));
}

// ---------- RITNINGEN ----------

const isSticks = (screen) => screen.style === "sticks";
const BAR_WIDTH = (g) => Math.min(0.6 * g.colW, 72);
const GHOST_STICK_WIDTH = 16;
const round = (v) => Math.round(v * 100) / 100;

// En stapel (rect) eller stolpe (line) med höjden value (ett tal), eller null för 0 och mindre.
function barNode(g, sticks, i, value, className) {
  const top = Math.max(g.top, g.at(value));
  if (!(value > 0) || !(top < g.base)) return null;
  const x = g.colX(i);
  if (sticks) return svgEl("line", { class: className, x1: round(x), x2: round(x), y1: round(g.base), y2: round(top) });
  const w = BAR_WIDTH(g);
  return svgEl("rect", { class: className, x: round(x - w / 2), y: round(top), width: round(w), height: round(g.base - top) });
}

// Facits stapel streckad: en ram runt stapeln, eller runt stolpen (lite bredare än den).
function ghostNode(g, sticks, i, value) {
  const top = Math.max(g.top, g.at(value));
  if (!(value > 0) || !(top < g.base)) return null;
  const w = sticks ? GHOST_STICK_WIDTH : BAR_WIDTH(g);
  return svgEl("rect", { class: "dg-ghost-bar", x: round(g.colX(i) - w / 2), y: round(top), width: round(w), height: round(g.base - top) });
}

// Rutnätet, axlarna, siffrorna, kategorierna och titlarna. Staplar har kolumnernas gränser som lodräta streck,
// stolpar har strecket mitt i kolumnen, där stolpen står (som på bladen, STd2 5 och STd3 3a).
function drawFrame(svg, g, screen) {
  const sticks = isSticks(screen);
  for (let j = 1; j <= g.yn; j++) svg.append(svgEl("line", { class: "dg-grid", x1: g.left, x2: g.left + g.pw, y1: round(g.py(j)), y2: round(g.py(j)) }));
  for (let i = 0; i < g.n; i++) {
    const x = round(sticks ? g.colX(i) : g.left + (i + 1) * g.colW);
    svg.append(svgEl("line", { class: "dg-grid", x1: x, x2: x, y1: g.top, y2: g.base }));
  }
  svg.append(
    svgEl("line", { class: "dg-grid dg-grid-axis", x1: g.left, x2: g.left, y1: g.top - 6, y2: g.base }),
    svgEl("line", { class: "dg-grid dg-grid-axis", x1: g.left, x2: g.left + g.pw, y1: g.base, y2: g.base }),
  );
  const everyY = Math.max(1, Math.ceil(16 / g.cellY));
  g.ys.forEach((tick, j) => {
    if (j % everyY === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: g.left - 8, y: round(g.py(j) + 5), "text-anchor": "end" }, tick.text));
  });
  (screen.categories ?? []).forEach((name, i) => {
    svg.append(svgEl("text", { class: "dg-bars-cat", x: round(g.colX(i)), y: g.base + 24, "text-anchor": "middle" }, String(name)));
  });
  if (screen.y?.label) svg.append(svgEl("text", { class: "dg-chart-title", x: 8, y: g.top - 14, "text-anchor": "start" }, screen.y.label));
  if (screen.x?.label) svg.append(svgEl("text", { class: "dg-chart-title", x: round(g.left + g.pw / 2), y: g.H - 8, "text-anchor": "middle" }, screen.x.label));
}

// Diagrammet som SVG med staplarna values (exakta tal eller null, i kategoriernas ordning) och facits staplar ghost
// (streckade, i en grupp som syns först med "Visa rätt svar"). Ger { el, g, show } där show(values) ritar om elevens
// staplar.
function drawBars(screen, { values = [], ghost = null, interactive = false, label = "Stapeldiagram" } = {}) {
  const g = barsGeometry(screen);
  const sticks = isSticks(screen);
  const svg = svgEl("svg", { viewBox: `0 0 ${g.W} ${g.H}`, class: `dg-chart dg-bars${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });
  drawFrame(svg, g, screen);
  const layer = svgEl("g");
  svg.append(layer);
  const show = (heights) => {
    for (const node of [...layer.children]) node.remove();
    heights.forEach((v, i) => {
      const node = v === null || i >= g.n ? null : barNode(g, sticks, i, toNumber(v), sticks ? "dg-stick" : "dg-bar");
      if (node) layer.append(node);
    });
  };
  show(values);
  if (ghost !== null) {
    const ghosts = svgEl("g", { class: "dg-ghost" });
    ghost.forEach((v, i) => {
      const node = v === null || i >= g.n ? null : ghostNode(g, sticks, i, toNumber(v));
      if (node) ghosts.append(node);
    });
    svg.append(ghosts);
  }
  return { el: svg, g, show };
}

// Diagrammet i en ram som på en skärm eller i ett resultat. values är exakta tal eller tal och text som i datan.
export function barsStage(screen, { values = [], ghost = null, label } = {}) {
  const stage = el("div", "dg-chart-stage");
  stage.append(drawBars(screen, { values: values.map(exactValue), ghost: ghost === null ? null : ghost.map(exactValue), label }).el);
  return stage;
}

// ---------- SKÄRMEN ----------

export const BARS_HINT = "Klicka där stapeln ska sluta, eller dra den upp eller ned. Klicka vid 0 för att ta bort en stapel.";
export const STICKS_HINT = "Klicka där stolpen ska sluta, eller dra den upp eller ned. Klicka vid 0 för att ta bort en stolpe.";

// Skärmen för bars: ett tomt diagram där eleven ritar staplarna. Svaret är { heights: "9;4;3;6" }, alla 0 från början.
// Tomt (inga staplar) är ett svar och fel (keepBlank): bara Hoppa över ger –. Fokus går till diagrammet, inte till
// Nästa: ett vanemässigt Enter skulle annars skicka in ett tomt svar.
export function buildBars(screen, root) {
  const sticks = isSticks(screen);
  const view = drawBars(screen, { interactive: true, label: sticks ? "Rita stolpdiagrammet" : "Rita stapeldiagrammet" });
  const { el: svg, g } = view;
  svg.setAttribute("tabindex", "0");
  const marks = (screen.categories ?? []).map(() => 0); // y-axelns streck för varje kolumn
  let selected = 0;
  let dragging = null; // kolumnen som dras

  // Den valda kolumnen har en ram när diagrammet har tangentbordsfokus (CSS: :focus-visible).
  const focus = svgEl("rect", { class: "dg-bars-focus", y: g.top - 4, height: g.base - g.top + 8, width: round(g.colW - 6) });
  const hover = svgEl("rect", { class: "dg-bars-hover" });
  hover.setAttribute("display", "none");
  svg.append(focus, hover);

  const names = screen.categories ?? [];
  function paint() {
    view.show(marks.map((j) => g.ys[j].value));
    focus.setAttribute("x", String(round(g.left + selected * g.colW + 3)));
    const heights = names.map((name, i) => `${name} ${g.ys[marks[i]].text}`).join(", ");
    svg.setAttribute("aria-label", `${sticks ? "Rita stolpdiagrammet" : "Rita stapeldiagrammet"}. ${heights}. Vald: ${names[selected] ?? ""}.`);
  }

  const spot = (event) => {
    const rect = svg.getBoundingClientRect();
    const scale = g.W / rect.width;
    return [(event.clientX - rect.left) * scale, (event.clientY - rect.top) * scale];
  };
  const hideHover = () => hover.setAttribute("display", "none");
  function showHover(i, j) {
    const value = toNumber(g.ys[j].value);
    const w = sticks ? GHOST_STICK_WIDTH : BAR_WIDTH(g);
    const top = j === 0 ? g.base - 2 : g.at(value); // vid 0: ett streck längs axeln
    for (const [name, v] of [["x", g.colX(i) - w / 2], ["y", top], ["width", w], ["height", Math.max(2, g.base - top)]]) hover.setAttribute(name, String(round(v)));
    hover.removeAttribute("display");
  }

  svg.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const [sx, sy] = spot(event);
    const i = columnAt(g, sx);
    if (i === null) return;
    event.preventDefault();
    selected = i;
    dragging = i;
    marks[i] = heightIndexAt(g, sy);
    hideHover();
    paint();
    try {
      svg.setPointerCapture?.(event.pointerId); // draget fortsätter utanför diagrammet
    } catch {
      // en pekare som redan är släppt kan inte fångas; klicket räknas ändå
    }
  });
  svg.addEventListener("pointermove", (event) => {
    if (dragging !== null) {
      if (event.buttons === 0) return void (dragging = null); // knappen släpptes utanför sidan
      marks[dragging] = heightIndexAt(g, spot(event)[1]);
      return paint();
    }
    if (event.pointerType !== "mouse") return hideHover();
    const [sx, sy] = spot(event);
    const i = columnAt(g, sx);
    if (i === null) return hideHover();
    showHover(i, heightIndexAt(g, sy));
  });
  const stop = () => {
    dragging = null;
  };
  for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) svg.addEventListener(type, stop);
  svg.addEventListener("pointerleave", hideHover);
  svg.addEventListener("keydown", (event) => {
    const last = marks.length - 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") selected = Math.min(last, Math.max(0, selected + (event.key === "ArrowLeft" ? -1 : 1)));
    else if (event.key === "ArrowUp" || event.key === "ArrowDown") marks[selected] = Math.min(g.yn, Math.max(0, marks[selected] + (event.key === "ArrowUp" ? 1 : -1)));
    else if (event.key === "Delete" || event.key === "Backspace") marks[selected] = 0;
    else return;
    event.preventDefault();
    paint();
  });

  paint();
  const stage = el("div", "dg-chart-stage");
  stage.append(svg);
  root.append(el("p", "dg-chart-hint", sticks ? STICKS_HINT : BARS_HINT), stage);
  const read = () => ({ heights: marks.map((j) => g.ys[j].raw).join(";") });
  return { read, focusFirst: () => svg.focus({ preventScroll: true }), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const textLine = (screen) => (screen.text ? [el("p", "dg-word-text", screen.text)] : []);

// Elevens staplar; facits är streckade och syns först med "Visa rätt svar". Ett trasigt svar ritas så långt det går.
export function barsDetail(screen, row) {
  const given = parseHeights(row.answers?.heights);
  const sticks = isSticks(screen);
  const drawn = given.some((v) => v !== null && v.n > 0n);
  const stage = el("div", "dg-chart-stage");
  stage.append(drawBars(screen, { values: given, ghost: (screen.values ?? []).map(exactValue), label: sticks ? "Elevens stolpar" : "Elevens staplar" }).el);
  const title = drawn ? (sticks ? "Elevens stolpar:" : "Elevens staplar:") : sticks ? "Inga stolpar ritade:" : "Inga staplar ritade:";
  return [...textLine(screen), detailLine(title, stage)];
}

// En överhoppad skärm: uppgiften och facits staplar, som läggs i det dolda facitblocket.
export function barsSkipped(screen) {
  return [...textLine(screen), detailLine("Rätt:", barsStage(screen, { values: screen.values ?? [], label: "Rätt diagram" }))];
}
