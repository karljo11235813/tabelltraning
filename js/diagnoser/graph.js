// Tabeller och grafer. Inget här rör `document` när modulen laddas; allt som ritar görs först när en funktion anropas.
//
// En tabell (screen.table) är { head: ["kg", "kr"], rows: [["1", "10"], ["5", "[a]"]] }: cellerna är radmarkering med
// rutor, som en rad (drawTable ritar tabellen, cellen ritas av render.js via drawCell).
// Ett koordinatsystem (screen.chart, och chart i plot) är { x: { min, max, step, label }, y: { … }, line?: "10" }: axlarna
// graderas var step, och line är lutningen k på räta linjen y = kx som ritas (läsa av en graf). Utan line är det ett tomt
// rutnät där eleven sätter ut punkter.
//
// Rena funktioner (rättningen, mark.js):
//   decimalText   ett exakt tal som text med komma ("4,5"), eller med punkt för det råa svaret ("4.5").
//   axisTicks     axelns värden, exakta: [{ value, text, raw }]. Kastar när min till max inte är ett helt antal steg.
//   chartGeometry mått och rutnät för ritningen; nearestGrid ger skärningspunkten närmast en pekposition.
//   parsePoints   det eleven satte ut ("1,10;2,20", punkt som decimaltecken) som exakta punkter.
//   isPlotRight   D9: rätt när de utsatta punkterna är precis de punkter som ska vara med; punkterna i optional
//                 (origo) får vara med eller saknas. En punkt för mycket är fel.
//
// Ritande funktioner: drawTable, drawChart, chartStage, buildPlot (skärmen för plot) och plotDetail/plotSkipped
// (resultatskärmen). Sidan ritar bara punkter, ingen linje mellan dem.

import { parseNumber } from "./parse.js";
import { rat, add, sub, div, compare } from "./value.js";
import { el, svgEl, detailLine } from "./dom.js";

// ---------- EXAKTA VÄRDEN ----------

const exact = (x) => parseNumber(String(x));
const toNumber = (r) => Number(r.n) / Number(r.d); // bara för att rita, aldrig för rättning

// Ett tal som decimaltext. Axelns värden är decimaltal, så nämnaren går alltid upp i en tiopotens.
export function decimalText(r, { raw = false } = {}) {
  let k = 0;
  while (k < 12 && (r.n * 10n ** BigInt(k)) % r.d !== 0n) k++;
  if (k === 12) throw new RangeError("Inget decimaltal");
  const scaled = (r.n < 0n ? -r.n : r.n) * 10n ** BigInt(k) / r.d;
  const digits = String(scaled).padStart(k + 1, "0");
  const whole = digits.slice(0, digits.length - k);
  const fraction = k === 0 ? "" : digits.slice(digits.length - k);
  const number = `${whole}${fraction ? `${raw ? "." : ","}${fraction}` : ""}`;
  return r.n < 0n ? `${raw ? "-" : "−"}${number}` : number;
}

const MAX_TICKS = 200;

// Axelns värden från min till max var step, exakta. Kastar om axeln inte är ett helt antal steg.
export function axisTicks({ min, max, step }) {
  const lo = exact(min);
  const hi = exact(max);
  const by = exact(step);
  if (lo === null || hi === null || by === null || compare(by, rat(0)) <= 0 || compare(lo, hi) >= 0) throw new RangeError("Ogiltig axel");
  const steps = div(sub(hi, lo), by);
  if (steps.d !== 1n || steps.n > BigInt(MAX_TICKS)) throw new RangeError("Axeln är inte ett helt antal steg");
  const count = Number(steps.n);
  const ticks = [];
  let value = lo;
  for (let i = 0; i <= count; i++) {
    ticks.push({ value, text: decimalText(value), raw: decimalText(value, { raw: true }) });
    value = add(value, by);
  }
  return ticks;
}

// ---------- PUNKTER ----------

const pairKey = (x, y) => (x === null || y === null ? "?" : `${x.n}/${x.d},${y.n}/${y.d}`);

// Det eleven satte ut: "x,y;x,y" med punkt som decimaltecken ("0.5,10"). Det som inte är en punkt hoppas över, och
// en punkt som står två gånger räknas en gång.
export function parsePoints(raw) {
  const found = new Map();
  for (const part of String(raw ?? "").split(";")) {
    const bits = part.split(",");
    if (bits.length !== 2) continue;
    const x = exact(bits[0]);
    const y = exact(bits[1]);
    if (x === null || y === null || x.r !== 1n || y.r !== 1n) continue;
    found.set(pairKey(x, y), { x, y });
  }
  return [...found.values()];
}

// Punkterna i datan ([[1, 10], …]) som det råa svaret: "1,10;2,20".
export function pointsText(points) {
  const rawText = (v) => {
    try {
      return decimalText(exact(v), { raw: true });
    } catch {
      return String(v); // en felskriven punkt i datan: rättningen kastar aldrig
    }
  };
  return (points ?? []).map(([x, y]) => `${rawText(x)},${rawText(y)}`).join(";");
}

export function isPlotRight(screen, raw) {
  const keyOf = ([x, y]) => pairKey(exact(x), exact(y));
  const need = (screen.points ?? []).map(keyOf);
  const allowed = new Set([...need, ...(screen.optional ?? []).map(keyOf)]);
  const have = new Set(parsePoints(raw).map(({ x, y }) => pairKey(x, y)));
  return need.every((key) => have.has(key)) && [...have].every((key) => allowed.has(key));
}

// ---------- RUTNÄTET ----------

const W = 520;
const MARGIN = { left: 56, right: 24, top: 30, bottom: 48 };
const MAX_PLOT_HEIGHT = 440;
const MIN_PLOT_HEIGHT = 200;

// Mått för ritningen: rutnätet får lika breda och höga rutor när det ryms.
export function chartGeometry(chart) {
  const xs = axisTicks(chart.x);
  const ys = axisTicks(chart.y);
  const xn = xs.length - 1;
  const yn = ys.length - 1;
  const pw = W - MARGIN.left - MARGIN.right;
  const cellX = pw / xn;
  const ph = Math.min(MAX_PLOT_HEIGHT, Math.max(MIN_PLOT_HEIGHT, cellX * yn));
  const cellY = ph / yn;
  const left = MARGIN.left;
  const top = MARGIN.top;
  return { W, H: top + ph + MARGIN.bottom, xs, ys, xn, yn, left, top, pw, ph, cellX, cellY, px: (i) => left + i * cellX, py: (j) => top + ph - j * cellY };
}

// Skärningspunkten (index i i x och j i y) närmast en position i ritningens koordinater, eller null när positionen är
// mer än en halv ruta utanför rutnätet.
export function nearestGrid(geometry, sx, sy) {
  const { left, top, ph, cellX, cellY, xn, yn } = geometry;
  const fi = (sx - left) / cellX;
  const fj = (top + ph - sy) / cellY;
  if (fi < -0.5 || fi > xn + 0.5 || fj < -0.5 || fj > yn + 0.5) return null;
  return { i: Math.min(xn, Math.max(0, Math.round(fi))), j: Math.min(yn, Math.max(0, Math.round(fj))) };
}

// Linjen y = kx som ändpunkter i ritningens koordinater, avklippt mot axlarna; null när k inte är ett positivt tal.
export function lineEnds(geometry, chart) {
  const k = exact(chart.line);
  if (k === null || k.n <= 0n) return null;
  const slope = toNumber(k);
  const { xs, ys } = geometry;
  const [x0, x1, y0, y1] = [xs[0], xs.at(-1), ys[0], ys.at(-1)].map((t) => toNumber(t.value));
  const from = Math.max(x0, y0 / slope);
  const to = Math.min(x1, y1 / slope);
  if (from > to) return null;
  const at = (x, lo, hi, size) => ((x - lo) / (hi - lo)) * size;
  const point = (x) => [geometry.left + at(x, x0, x1, geometry.pw), geometry.top + geometry.ph - at(slope * x, y0, y1, geometry.ph)];
  return [point(from), point(to)];
}

// En tabell med cellerna ritade av drawCell(markup).
export function drawTable(table, drawCell) {
  const node = el("table", "dg-table");
  const head = el("tr");
  for (const text of table.head ?? []) head.append(el("th", null, text));
  const thead = el("thead");
  thead.append(head);
  const body = el("tbody");
  for (const cells of table.rows) {
    const tr = el("tr");
    for (const markup of cells) {
      const td = el("td");
      td.append(drawCell(markup));
      tr.append(td);
    }
    body.append(tr);
  }
  node.append(thead, body);
  return node;
}

export const cellsOf = (table) => (table?.rows ?? []).flat();

// Koordinatsystemet som SVG. points (och ghost: facits punkter, dolda tills "Visa rätt svar") är [x, y] med exakta
// värden som tal eller text. Med interactive sätter eleven ut och tar bort punkter på rutnätets skärningar med
// klick eller tryck. Ger { el, read } där read() är punkterna som "x,y;x,y".
export function drawChart(chart, { points = [], ghost = [], interactive = false, onChange = () => {}, label = "Koordinatsystem" } = {}) {
  const g = chartGeometry(chart);
  const svg = svgEl("svg", { viewBox: `0 0 ${g.W} ${g.H}`, class: `dg-chart${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });

  // Rutnät, axlar och siffror. Siffrorna står glesare när rutorna är smala.
  const everyX = Math.max(1, Math.ceil(30 / g.cellX));
  const everyY = Math.max(1, Math.ceil(16 / g.cellY));
  g.xs.forEach((tick, i) => {
    svg.append(svgEl("line", { class: i === 0 ? "dg-grid dg-grid-axis" : "dg-grid", x1: g.px(i), x2: g.px(i), y1: g.top, y2: g.top + g.ph }));
    if (i % everyX === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: g.px(i), y: g.top + g.ph + 20, "text-anchor": "middle" }, tick.text));
  });
  g.ys.forEach((tick, j) => {
    svg.append(svgEl("line", { class: j === 0 ? "dg-grid dg-grid-axis" : "dg-grid", x1: g.left, x2: g.left + g.pw, y1: g.py(j), y2: g.py(j) }));
    if (j % everyY === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: g.left - 8, y: g.py(j) + 5, "text-anchor": "end" }, tick.text));
  });
  if (chart.x.label) svg.append(svgEl("text", { class: "dg-chart-title", x: g.left + g.pw / 2, y: g.H - 6, "text-anchor": "middle" }, chart.x.label));
  if (chart.y.label) svg.append(svgEl("text", { class: "dg-chart-title", x: g.left, y: g.top - 10, "text-anchor": "middle" }, chart.y.label));

  const ends = chart.line === undefined ? null : lineEnds(g, chart);
  if (ends) svg.append(svgEl("line", { class: "dg-graph-line", x1: ends[0][0], y1: ends[0][1], x2: ends[1][0], y2: ends[1][1] }));

  // Punkter ritas efter värde, så att också facits punkter och elevens sparade punkter hamnar rätt.
  const [x0, x1, y0, y1] = [g.xs[0], g.xs.at(-1), g.ys[0], g.ys.at(-1)].map((t) => toNumber(t.value));
  const place = ([x, y]) => {
    const vx = exact(x);
    const vy = exact(y);
    return vx && vy ? [g.left + ((toNumber(vx) - x0) / (x1 - x0)) * g.pw, g.top + g.ph - ((toNumber(vy) - y0) / (y1 - y0)) * g.ph] : null;
  };
  const ghosts = svgEl("g", { class: "dg-ghost" });
  for (const point of ghost) {
    const at = place(point);
    if (at) ghosts.append(svgEl("circle", { cx: at[0], cy: at[1], r: 10, class: "dg-ghost-point" }));
  }
  svg.append(ghosts);

  const layer = svgEl("g");
  svg.append(layer);
  const on = new Map(); // "i,j" -> { i, j, node }
  function addPoint(at, key, i, j) {
    const node = svgEl("circle", { cx: at[0], cy: at[1], r: 7, class: "dg-point" });
    layer.append(node);
    if (key !== null) on.set(key, { i, j, node });
  }
  function toggle(i, j) {
    const key = `${i},${j}`;
    const was = on.get(key);
    if (was) {
      was.node.remove();
      on.delete(key);
    } else {
      addPoint([g.px(i), g.py(j)], key, i, j);
    }
    onChange();
  }
  for (const point of points) {
    const at = place(point);
    if (at) addPoint(at, null);
  }

  if (interactive) {
    svg.setAttribute("tabindex", "-1"); // kan få fokus (buildPlot) utan att vara ett tabbstopp
    const hover = svgEl("circle", { r: 10, class: "dg-hover" });
    hover.setAttribute("display", "none");
    svg.append(hover);
    const gridAt = (event) => {
      const rect = svg.getBoundingClientRect();
      const scale = g.W / rect.width;
      return nearestGrid(g, (event.clientX - rect.left) * scale, (event.clientY - rect.top) * scale);
    };
    svg.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const at = gridAt(event);
      if (at === null) return;
      event.preventDefault();
      toggle(at.i, at.j);
    });
    svg.addEventListener("pointermove", (event) => {
      const at = event.pointerType === "mouse" ? gridAt(event) : null;
      if (at === null) return hover.setAttribute("display", "none");
      hover.setAttribute("cx", g.px(at.i));
      hover.setAttribute("cy", g.py(at.j));
      hover.removeAttribute("display");
    });
    svg.addEventListener("pointerleave", () => hover.setAttribute("display", "none"));
  }

  const read = () =>
    [...on.values()]
      .sort((a, b) => a.i - b.i || a.j - b.j)
      .map(({ i, j }) => `${g.xs[i].raw},${g.ys[j].raw}`)
      .join(";");
  return { el: svg, read };
}

// Ett koordinatsystem på en skärm (en graf att läsa av) eller i ett resultat.
export function chartStage(chart, options) {
  const stage = el("div", "dg-chart-stage");
  stage.append(drawChart(chart, options).el);
  return stage;
}

// Skärmen för plot: ett tomt rutnät där eleven sätter ut punkter. Svaret är { points: "1,10;2,20" }. Tomt (inga
// punkter) är ett svar och fel (keepBlank), som ett val utan något valt: bara Hoppa över ger –.
// Fokus går till koordinatsystemet, inte till Nästa: ett vanemässigt Enter skulle annars skicka in ett tomt svar.
export function buildPlot(screen, root) {
  const chart = drawChart(screen.chart, { interactive: true, label: "Sätt ut punkterna" });
  const stage = el("div", "dg-chart-stage");
  stage.append(chart.el);
  root.append(stage);
  return { read: () => ({ points: chart.read() }), focusFirst: () => chart.el.focus({ preventScroll: true }), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const textLine = (screen) => (screen.text ? [el("p", "dg-word-text", screen.text)] : []);

// Det eleven satte ut som punkter i koordinatsystemet; facits punkter är ringar som syns först med "Visa rätt svar".
export function plotDetail(screen, row) {
  const given = parsePoints(row.answers?.points).map(({ x, y }) => [x, y].map((v) => decimalText(v, { raw: true })));
  const shown = chartStage(screen.chart, { points: given, ghost: screen.points, label: "Elevens punkter" });
  return [...textLine(screen), detailLine(given.length === 0 ? "Inga punkter utsatta" : "Utsatta punkter:", shown)];
}

// En överhoppad skärm: uppgiften och facits punkter, som läggs i det dolda facitblocket.
export function plotSkipped(screen) {
  return [...textLine(screen), detailLine("Rätt:", chartStage(screen.chart, { points: screen.points, label: "Rätta punkter" }))];
}

// Grafen igen på resultatskärmen (en skärm där man läser av en graf), som läggs i det dolda facitblocket.
export function chartBlock(chart) {
  const block = el("div", "dg-expected dg-expected-block");
  block.append(chartStage(chart, { label: "Grafen" }));
  return block;
}
