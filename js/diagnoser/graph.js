// Tabeller och grafer. Inget här rör `document` när modulen laddas; allt som ritar görs först när en funktion anropas.
//
// En tabell (screen.table) är { head: ["kg", "kr"], rows: [["1", "10"], ["5", "[a]"]] }: cellerna är radmarkering med
// rutor, som en rad (drawTable ritar tabellen, cellen ritas av render.js via drawCell).
// Ett koordinatsystem (screen.chart, och chart i plot och line) är { x: { min, max, step, label, labels? }, y: { … }, line?,
// lines?, curves?, points? }: axlarna graderas var step (x.labels: en text per streck i stället för siffrorna, bara i
// första kvadranten, STd5 4–5), och det som ritas i det är
//   line    lutningen k på räta linjen y = kx ("10"; en graf att läsa av i första kvadranten, RP2),
//   lines   räta linjer genom två punkter, [[[x1, y1], [x2, y2]], …] med exakta tal (lodräta linjer går också),
//   curves  kurvor, [{ expr: "x^2 - 2" }]: ett uttryck i x som räknas exakt punkt för punkt och klipps vid kanten,
//   points  utmärkta punkter med en bokstav, [{ label: "A", at: [5, 2] }] (TAg1 1).
// Utan något av dem är det ett tomt rutnät: där sätter eleven ut punkter (plot) eller ritar en linje (line).
//
// Fyra kvadranter: när någon axel börjar under 0 ritas axlarna genom origo med pil och namn (x och y, eller axelns
// label), siffrorna står längs axlarna (utom 0) och rutnätet har en ruta till på varje sida, som på Diamants blad
// (TAg1–4). Annars (första kvadranten, RP2) står siffrorna och titlarna utanför rutnätet som förut.
//
// Rena funktioner (rättningen, mark.js):
//   decimalText   ett exakt tal som text med komma ("4,5"), eller med punkt för det råa svaret ("4.5").
//   axisTicks     axelns värden, exakta: [{ value, text, raw }]. Kastar när min till max inte är ett helt antal steg.
//   chartGeometry mått och rutnät för ritningen (crossed: fyra kvadranter; frame: hela det ritade rutnätet; at: ett
//                 värde som plats i ritningen); nearestGrid ger skärningspunkten närmast en pekposition.
//   clipLine      linjen (eller sträckan) genom två punkter i ritningen, avklippt mot en rektangel. Bara för att rita.
//   curveValue    kurvans y för ett x, exakt; null där uttrycket inte har något värde.
//   parsePoints   det eleven satte ut ("1,10;2,20", punkt som decimaltecken) som exakta punkter.
//   isPlotRight   D9: rätt när de utsatta punkterna är precis de punkter som ska vara med; punkterna i optional
//                 (origo) får vara med eller saknas. En punkt för mycket är fel.
//   isLineRight   line: rätt när eleven satte ut två olika punkter och båda ligger på linjen genom screen.through
//                 (isOnLine, exakt). Färre eller fler än två är fel. gridPointsOnLine ger rutnätets punkter på linjen.
//
// Ritande funktioner: drawTable, drawChart, chartStage, buildPlot och buildLine (skärmarna för plot och line) och
// plotDetail/plotSkipped och drawnLineDetail/drawnLineSkipped (resultatskärmen). I plot ritar sidan bara punkter, ingen
// linje mellan dem; i line dras linjen genom elevens två punkter över hela rutnätet.

import { parseNumber, parseExpr } from "./parse.js";
import { rat, add, sub, mul, div, compare, equals } from "./value.js";
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

// Ett tal ur ett sparat svar som rå text. Ett svar från sidan är alltid ett decimaltal; en trasig post ("1/3") ritas
// som bråk i stället för att stoppa resultatskärmen.
const answerText = (v) => {
  try {
    return decimalText(v, { raw: true });
  } catch {
    return `${v.n}/${v.d}`;
  }
};

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

// ---------- RÄTA LINJER OCH KURVOR ----------

// En punkt i datan ([1, 10], ["-1,5", 2]) som exakta tal { x, y }, eller null när den inte är två rationella tal.
function exactPoint(point) {
  if (!Array.isArray(point) || point.length !== 2) return null;
  const [x, y] = point.map(exact);
  return x && y && x.r === 1n && y.r === 1n ? { x, y } : null;
}

// Ligger p på linjen genom a och b? Exakt: (b − a) × (p − a) = 0. Punkterna är { x, y } med exakta tal.
export function isOnLine(a, b, p) {
  return equals(mul(sub(b.x, a.x), sub(p.y, a.y)), mul(sub(b.y, a.y), sub(p.x, a.x)));
}

// Linjen i datan ([[x1, y1], [x2, y2]]) som två exakta punkter, eller null när den inte är två olika punkter.
function throughOf(through) {
  const [a, b] = Array.isArray(through) && through.length === 2 ? through.map(exactPoint) : [];
  return a && b && !(equals(a.x, b.x) && equals(a.y, b.y)) ? [a, b] : null;
}

// Rutnätets skärningar (min till max på båda axlarna) som ligger på linjen genom through, i ordning efter x och sedan y,
// som rå text: [["0", "-2"], ["1", "-1"], …]. Tom när datan inte är en linje eller axlarna inte går att läsa.
export function gridPointsOnLine(chart, through) {
  const line = throughOf(through);
  if (line === null) return [];
  let xs;
  let ys;
  try {
    xs = axisTicks(chart.x);
    ys = axisTicks(chart.y);
  } catch {
    return [];
  }
  return xs.flatMap((tx) => ys.filter((ty) => isOnLine(line[0], line[1], { x: tx.value, y: ty.value })).map((ty) => [tx.raw, ty.raw]));
}

// line: rätt när eleven satte ut precis två olika punkter och båda ligger på linjen genom screen.through. En punkt, tre
// punkter eller en punkt bredvid linjen är fel; vilka två punkter på linjen det är spelar ingen roll. En felskriven
// linje i datan är aldrig rätt (data.test.js fångar den).
export function isLineRight(screen, raw) {
  const line = throughOf(screen.through);
  const given = parsePoints(raw);
  return line !== null && given.length === 2 && given.every((p) => isOnLine(line[0], line[1], p));
}

// Kurvans y för x (ett exakt tal eller text): uttrycket med x ersatt av talet inom parentes, räknat exakt av parseExpr
// ("x^2 - 2" för x = −3/2 är "(-3/2)^2 - 2"). null där uttrycket saknar värde (division med noll), inte går att läsa
// eller inte ger ett rationellt tal.
export function curveValue(expr, x) {
  const at = typeof x === "object" && x !== null ? x : exact(x);
  if (at === null || at.r !== 1n) return null;
  const value = parseExpr(String(expr).replaceAll("x", `(${at.n}/${at.d})`));
  return value === null || value.none === true || value.r !== 1n ? null : value;
}

// Linjen genom a och b ([x, y] i ritningens koordinater) avklippt mot rektangeln { x0, x1, y0, y1 } (Liang–Barsky).
// Med segment bara sträckan från a till b. Ger två ändpunkter, eller null när inget av linjen ligger i rektangeln
// eller a och b är samma punkt.
export function clipLine(rect, [ax, ay], [bx, by], { segment = false } = {}) {
  const dx = bx - ax;
  const dy = by - ay;
  if (dx === 0 && dy === 0) return null;
  let t0 = segment ? 0 : -Infinity;
  let t1 = segment ? 1 : Infinity;
  for (const [p, q] of [[-dx, ax - rect.x0], [dx, rect.x1 - ax], [-dy, ay - rect.y0], [dy, rect.y1 - ay]]) {
    if (p === 0) {
      if (q < 0) return null; // parallell med kanten och utanför den
      continue;
    }
    const t = q / p;
    if (p < 0) t0 = Math.max(t0, t);
    else t1 = Math.min(t1, t);
  }
  if (!(t0 < t1)) return null;
  return [[ax + t0 * dx, ay + t0 * dy], [ax + t1 * dx, ay + t1 * dy]];
}

// ---------- RUTNÄTET ----------

const W = 520;
const MARGIN = { left: 56, right: 24, top: 30, bottom: 48 };
const MAX_PLOT_HEIGHT = 440;
const MIN_PLOT_HEIGHT = 200;
const CROSSED_MARGIN = 16; // runt rutnätet med fyra kvadranter: plats för pilarna

// Mått för ritningen. Första kvadranten: rutnätet får lika breda och höga rutor när det ryms. Fyra kvadranter (crossed):
// alltid kvadratiska rutor och en ruta till på varje sida. frame är hela det ritade rutnätet, som linjer och kurvor
// klipps mot; left, top, pw och ph är delen från min till max, där eleven kan sätta ut punkter.
export function chartGeometry(chart) {
  const xs = axisTicks(chart.x);
  const ys = axisTicks(chart.y);
  const xn = xs.length - 1;
  const yn = ys.length - 1;
  const crossed = xs[0].value.n < 0n || ys[0].value.n < 0n;
  let left, top, pw, ph, cellX, cellY, H, frame;
  if (crossed) {
    const m = CROSSED_MARGIN;
    cellX = (W - 2 * m) / (xn + 2);
    cellY = cellX;
    left = m + cellX;
    top = m + cellY;
    pw = xn * cellX;
    ph = yn * cellY;
    frame = { x0: m, x1: W - m, y0: m, y1: m + (yn + 2) * cellY };
    H = frame.y1 + m;
  } else {
    pw = W - MARGIN.left - MARGIN.right;
    cellX = pw / xn;
    ph = Math.min(MAX_PLOT_HEIGHT, Math.max(MIN_PLOT_HEIGHT, cellX * yn));
    cellY = ph / yn;
    left = MARGIN.left;
    top = MARGIN.top;
    frame = { x0: left, x1: left + pw, y0: top, y1: top + ph };
    H = top + ph + MARGIN.bottom;
  }
  const [x0, x1, y0, y1] = [xs[0], xs.at(-1), ys[0], ys.at(-1)].map((t) => toNumber(t.value));
  const at = (x, y) => [left + ((x - x0) / (x1 - x0)) * pw, top + ph - ((y - y0) / (y1 - y0)) * ph];
  return { W, H, xs, ys, xn, yn, left, top, pw, ph, cellX, cellY, crossed, frame, at, px: (i) => left + i * cellX, py: (j) => top + ph - j * cellY };
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

// En linje i datan ([[x1, y1], [x2, y2]], exakta tal) som ändpunkter i ritningen, över hela rutnätet; null när den inte
// syns eller datan inte är två olika punkter.
export function lineThrough(geometry, through) {
  const line = throughOf(through);
  if (line === null) return null;
  const [a, b] = line.map((p) => geometry.at(toNumber(p.x), toNumber(p.y)));
  return clipLine(geometry.frame, a, b);
}

const CURVE_SAMPLES = 10; // punkter per ruta i x-led
const near = (p, q) => Math.abs(p[0] - q[0]) < 1e-6 && Math.abs(p[1] - q[1]) < 1e-6;

// Kurvan som brutna linjer i ritningens koordinater, avklippta mot rutnätets kant: [[[x, y], …], …]. En del slutar där
// kurvan lämnar rutnätet eller saknar värde. Tom när inget av kurvan syns. x-värdena är exakta (axelns steg delat i tio).
export function curvePaths(geometry, expr) {
  const { xs, frame } = geometry;
  const by = div(sub(xs[1].value, xs[0].value), rat(CURVE_SAMPLES));
  const pad = geometry.crossed ? CURVE_SAMPLES : 0; // en ruta utanför min och max, där rutnätet fortsätter
  let x = sub(xs[0].value, mul(by, rat(pad)));
  const samples = [];
  for (let k = 0; k <= geometry.xn * CURVE_SAMPLES + 2 * pad; k++) {
    const y = curveValue(expr, x);
    samples.push(y === null ? null : geometry.at(toNumber(x), toNumber(y)));
    x = add(x, by);
  }
  const paths = [];
  let current = null;
  for (let k = 1; k < samples.length; k++) {
    const [p, q] = [samples[k - 1], samples[k]];
    const piece = p && q ? clipLine(frame, p, q, { segment: true }) : null;
    if (piece === null) {
      current = null;
      continue;
    }
    if (current === null || !near(piece[0], p)) {
      current = [piece[0]];
      paths.push(current);
    }
    current.push(piece[1]);
    if (!near(piece[1], q)) current = null; // kurvan lämnade rutnätet
  }
  return paths;
}

const round = (v) => Math.round(v * 100) / 100;
const pathText = (points) => points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${round(x)} ${round(y)}`).join(" ");
const lineEl = (className, [[x1, y1], [x2, y2]]) => svgEl("line", { class: className, x1, y1, x2, y2 });

// ---------- RITNINGEN ----------

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

// Första kvadranten: rutnätet med axlarna längs vänster- och underkanten, siffrorna utanför och titlarna under och
// ovanför (RP2). Siffrorna står glesare när rutorna är smala. chart.x.labels (STd5 4–5: månader) är en text per streck
// i stället för siffrorna; "" lämnar strecket utan text, och alla texter ritas (data.test.js kontrollerar att de ryms).
function drawQuadrantGrid(svg, g, chart) {
  const everyX = Math.max(1, Math.ceil(30 / g.cellX));
  const everyY = Math.max(1, Math.ceil(16 / g.cellY));
  const labels = Array.isArray(chart.x.labels) ? chart.x.labels : null;
  g.xs.forEach((tick, i) => {
    svg.append(svgEl("line", { class: i === 0 ? "dg-grid dg-grid-axis" : "dg-grid", x1: g.px(i), x2: g.px(i), y1: g.top, y2: g.top + g.ph }));
    const text = labels ? String(labels[i] ?? "") : tick.text;
    if ((labels || i % everyX === 0) && text !== "") svg.append(svgEl("text", { class: "dg-chart-num", x: g.px(i), y: g.top + g.ph + 20, "text-anchor": "middle" }, text));
  });
  g.ys.forEach((tick, j) => {
    svg.append(svgEl("line", { class: j === 0 ? "dg-grid dg-grid-axis" : "dg-grid", x1: g.left, x2: g.left + g.pw, y1: g.py(j), y2: g.py(j) }));
    if (j % everyY === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: g.left - 8, y: g.py(j) + 5, "text-anchor": "end" }, tick.text));
  });
  if (chart.x.label) svg.append(svgEl("text", { class: "dg-chart-title", x: g.left + g.pw / 2, y: g.H - 6, "text-anchor": "middle" }, chart.x.label));
  if (chart.y.label) svg.append(svgEl("text", { class: "dg-chart-title", x: g.left, y: g.top - 10, "text-anchor": "middle" }, chart.y.label));
}

// Fyra kvadranter, som på bladet: rutnätet med en ruta till på varje sida och axlarna genom origo med pil och namn.
// Rutnätet har en bakgrund (dg-chart-paper). Ger en funktion som ritar siffrorna längs axlarna (inte 0); den anropas
// efter graferna, så att siffrornas kant i bakgrundens färg håller dem läsbara också där en linje går förbi.
function drawCrossedGrid(svg, g, chart) {
  const { frame } = g;
  svg.append(svgEl("rect", { class: "dg-chart-paper", x: frame.x0, y: frame.y0, width: frame.x1 - frame.x0, height: frame.y1 - frame.y0 }));
  const zeroOf = (ticks) => Math.max(0, ticks.findIndex((t) => t.value.n === 0n));
  const i0 = zeroOf(g.xs);
  const j0 = zeroOf(g.ys);
  for (let i = -1; i <= g.xn + 1; i++) if (i !== i0) svg.append(svgEl("line", { class: "dg-grid", x1: g.px(i), x2: g.px(i), y1: frame.y0, y2: frame.y1 }));
  for (let j = -1; j <= g.yn + 1; j++) if (j !== j0) svg.append(svgEl("line", { class: "dg-grid", x1: frame.x0, x2: frame.x1, y1: g.py(j), y2: g.py(j) }));

  const ax = g.px(i0);
  const ay = g.py(j0);
  svg.append(
    svgEl("line", { class: "dg-grid dg-grid-axis", x1: frame.x0, x2: frame.x1, y1: ay, y2: ay }),
    svgEl("line", { class: "dg-grid dg-grid-axis", x1: ax, x2: ax, y1: frame.y0, y2: frame.y1 }),
    svgEl("polygon", { class: "dg-chart-arrow", points: `${frame.x1 + 12},${ay} ${frame.x1},${ay - 5} ${frame.x1},${ay + 5}` }),
    svgEl("polygon", { class: "dg-chart-arrow", points: `${ax},${frame.y0 - 12} ${ax - 5},${frame.y0} ${ax + 5},${frame.y0}` }),
    svgEl("text", { class: "dg-axis-name", x: frame.x1 - 6, y: ay - 9, "text-anchor": "end" }, chart.x.label ?? "x"),
    svgEl("text", { class: "dg-axis-name", x: ax + 9, y: frame.y0 + 18, "text-anchor": "start" }, chart.y.label ?? "y"),
  );

  const everyX = Math.max(1, Math.ceil(24 / g.cellX));
  const everyY = Math.max(1, Math.ceil(16 / g.cellY));
  return () => {
    g.xs.forEach((tick, i) => {
      if (i !== i0 && (i - i0) % everyX === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: g.px(i), y: ay + 19, "text-anchor": "middle" }, tick.text));
    });
    g.ys.forEach((tick, j) => {
      if (j !== j0 && (j - j0) % everyY === 0) svg.append(svgEl("text", { class: "dg-chart-num", x: ax - 7, y: g.py(j) + 5, "text-anchor": "end" }, tick.text));
    });
  };
}

// Koordinatsystemet som SVG, med det som chart ritar (line, lines, curves, points). points (och ghost: facits punkter,
// dolda tills "Visa rätt svar") är [x, y] med exakta värden som tal eller text; ghostLine är facits linje
// ([[x1, y1], [x2, y2]]), streckad bland ghost. Med interactive sätter eleven ut och tar bort punkter på rutnätets
// skärningar med klick eller tryck. Med mode "line" är det högst två punkter (en tredje ersätter den äldsta) och linjen
// genom dem dras över hela rutnätet; det gäller också punkterna i points. Ger { el, read } där read() är punkterna som
// "x,y;x,y".
export function drawChart(chart, { points = [], ghost = [], ghostLine = null, mode = "points", interactive = false, onChange = () => {}, label = "Koordinatsystem" } = {}) {
  const g = chartGeometry(chart);
  const svg = svgEl("svg", { viewBox: `0 0 ${g.W} ${g.H}`, class: `dg-chart${g.crossed ? " is-crossed" : ""}${interactive ? " is-interactive" : ""}`, role: interactive ? "group" : "img", "aria-label": label });
  const numbers = g.crossed ? drawCrossedGrid(svg, g, chart) : drawQuadrantGrid(svg, g, chart);

  const ends = chart.line === undefined ? null : lineEnds(g, chart);
  if (ends) svg.append(lineEl("dg-graph-line", ends));
  for (const through of chart.lines ?? []) {
    const seg = lineThrough(g, through);
    if (seg) svg.append(lineEl("dg-graph-line", seg));
  }
  for (const curve of chart.curves ?? []) {
    for (const path of curvePaths(g, curve?.expr)) svg.append(svgEl("path", { class: "dg-graph-line dg-graph-curve", d: pathText(path) }));
  }
  numbers?.();

  // Punkter ritas efter värde, så att också facits punkter och elevens sparade punkter hamnar rätt.
  const place = (point) => {
    const p = exactPoint(point);
    return p ? g.at(toNumber(p.x), toNumber(p.y)) : null;
  };
  for (const { label: name, at } of chart.points ?? []) {
    const spot = place(at);
    if (spot) svg.append(svgEl("circle", { class: "dg-chart-mark", cx: spot[0], cy: spot[1], r: 5 }), svgEl("text", { class: "dg-chart-letter", x: spot[0] + 8, y: spot[1] - 8 }, name));
  }

  const ghosts = svgEl("g", { class: "dg-ghost" });
  const facitLine = ghostLine === null ? null : lineThrough(g, ghostLine);
  if (facitLine) ghosts.append(lineEl("dg-ghost-line", facitLine));
  for (const point of ghost) {
    const at = place(point);
    if (at) ghosts.append(svgEl("circle", { cx: at[0], cy: at[1], r: 10, class: "dg-ghost-point" }));
  }
  svg.append(ghosts);

  // Elevens linje (mode "line"): genom två punkter, över hela rutnätet. Dold så länge det inte finns två.
  const drawn = mode === "line" ? svgEl("line", { class: "dg-drawn-line" }) : null;
  const showLine = (spots) => {
    const seg = spots.length === 2 ? clipLine(g.frame, spots[0], spots[1]) : null;
    if (seg === null) return drawn.setAttribute("display", "none");
    for (const [name, value] of [["x1", seg[0][0]], ["y1", seg[0][1]], ["x2", seg[1][0]], ["y2", seg[1][1]]]) drawn.setAttribute(name, String(value));
    drawn.removeAttribute("display");
  };
  if (drawn) svg.append(drawn);

  const layer = svgEl("g");
  svg.append(layer);
  const on = new Map(); // "i,j" -> { i, j, node }, i den ordning de sattes ut
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
      // En linje har två punkter: en tredje ersätter den som sattes ut först.
      if (mode === "line" && on.size >= 2) {
        const [oldest] = on.keys();
        on.get(oldest).node.remove();
        on.delete(oldest);
      }
      addPoint([g.px(i), g.py(j)], key, i, j);
    }
    if (drawn) showLine([...on.values()].map((p) => [g.px(p.i), g.py(p.j)]));
    onChange();
  }
  const fixed = points.map(place).filter(Boolean);
  for (const at of fixed) addPoint(at, null);
  if (drawn) showLine(fixed);

  if (interactive) {
    svg.setAttribute("tabindex", "-1"); // kan få fokus (buildPlot, buildLine) utan att vara ett tabbstopp
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

export const LINE_HINT = "Klicka på två punkter som linjen går genom. Klicka på en punkt igen för att ta bort den.";

// Skärmen för line (TAg2 2, TAg3 1–2): ett tomt rutnät där eleven klickar på två skärningar och linjen dras genom dem.
// Svaret är { points: "1,1;6,3" }. Som i plot är tomt (och en enda punkt) ett svar och fel; fokus går till rutnätet.
export function buildLine(screen, root) {
  const chart = drawChart(screen.chart, { interactive: true, mode: "line", label: "Rita linjen" });
  const stage = el("div", "dg-chart-stage");
  stage.append(chart.el);
  root.append(el("p", "dg-chart-hint", LINE_HINT), stage);
  return { read: () => ({ points: chart.read() }), focusFirst: () => chart.el.focus({ preventScroll: true }), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const textLine = (screen) => (screen.text ? [el("p", "dg-word-text", screen.text)] : []);
const givenPoints = (row) => parsePoints(row.answers?.points).map(({ x, y }) => [answerText(x), answerText(y)]);

// Det eleven satte ut som punkter i koordinatsystemet; facits punkter är ringar som syns först med "Visa rätt svar".
export function plotDetail(screen, row) {
  const given = givenPoints(row);
  const shown = chartStage(screen.chart, { points: given, ghost: screen.points, label: "Elevens punkter" });
  return [...textLine(screen), detailLine(given.length === 0 ? "Inga punkter utsatta" : "Utsatta punkter:", shown)];
}

// En överhoppad skärm: uppgiften och facits punkter, som läggs i det dolda facitblocket.
export function plotSkipped(screen) {
  return [...textLine(screen), detailLine("Rätt:", chartStage(screen.chart, { points: screen.points, label: "Rätta punkter" }))];
}

// Elevens linje genom de två punkterna; facits linje är streckad och syns först med "Visa rätt svar".
export function drawnLineDetail(screen, row) {
  const given = givenPoints(row);
  const shown = chartStage(screen.chart, { points: given, mode: "line", ghostLine: screen.through, label: "Elevens linje" });
  const title = given.length === 0 ? "Inga punkter utsatta" : given.length === 1 ? "Bara en punkt utsatt:" : "Elevens linje:";
  return [...textLine(screen), detailLine(title, shown)];
}

// En överhoppad skärm: uppgiften och facits linje, som läggs i det dolda facitblocket.
export function drawnLineSkipped(screen) {
  return [...textLine(screen), detailLine("Rätt:", chartStage(screen.chart, { points: screen.through, mode: "line", label: "Rätt linje" }))];
}

// Grafen igen på resultatskärmen (en skärm där man läser av en graf), som läggs i det dolda facitblocket.
export function chartBlock(chart) {
  const block = el("div", "dg-expected dg-expected-block");
  block.append(chartStage(chart, { label: "Grafen" }));
  return block;
}
