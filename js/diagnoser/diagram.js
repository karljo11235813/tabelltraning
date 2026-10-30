// Diagram att läsa av (screen.diagram): stapeldiagram, befolkningspyramid, cirkeldiagram, linjediagram och lådagram
// (Statistik: STd2–STd6, STl1–2). Skilt från koordinatsystemet (screen.chart, graph.js), där eleven läser av en linje i
// ett rutnät. Diagrammet står ovanför raderna som figure och chart. Inget här rör `document` när modulen laddas; allt
// som ritar görs först när en funktion anropas.
//
// Ett diagram är { type, title?, … }. title står överst ("Sverige 1998"). Typerna:
//   bar      { categories, y, x?, values | series, style?, horizontal?, touching? }
//            categories  kategoriernas texter i ordning (["katt", "hund", …]); liggande staplar uppifrån och ned.
//            y           värdeaxeln { min?: 0, max, step, minor?, label? }: siffror och rutnät var step, korta streck var
//                        minor (STd3 2: step 5, minor 1), label är axelns titel ("Antal"). Staplar börjar alltid på 0.
//            x           { label } (valfri): kategoriaxelns titel, under kategorierna ("Kr", "Antal studsbollar").
//            values      en serie: ett värde per kategori (tal, eller text för decimaler: "15,5").
//            series      flera serier bredvid varandra, med förklaring: [{ name: "pojkar", values, fill? }, …].
//            style       "bars" (standard), "sticks" (stolpdiagram, STd3) eller "units" (bilddiagram: en ruta per enhet
//                        staplad, utan y, heltal; STd2 1).
//            horizontal  true: liggande staplar, kategorierna till vänster och värdeaxeln under (STd2 3). y är ändå
//                        värdeaxeln.
//            touching    true: staplarna står kant i kant (histogram).
//   pyramid  { categories, y, series: [vänster, höger] }: liggande staplar åt vänster och höger från mitten, där
//            åldersgrupperna står uppifrån och ned (["90–", "85–89", …, "0–4"]). Båda sidorna har värdeaxeln y (min 0)
//            utåt, och seriens namn ("män", "kvinnor") står över sin sida (STd6 2).
//   pie      { sectors: [{ name, value, fill? }, …] }: sektorerna medurs från klockan tolv i ordning, value är storleken
//            (bara förhållandet räknas: 33, 47, 20). Förklaringen bredvid namnger mönstren (STd4 1–3).
//   line     { categories, y, x?, values | series }: punkter ovanför kategorierna, förenade med linjer. Kategorierna är
//            text ("födseln", "1 år", "8.00"; "" ger ett streck utan text). y får börja över 0 (40 till 170). Två serier
//            har olika markeringar (ring, fyrkant, triangel) och streck (hel, streckad, prickad) och en förklaring (STd5).
//   box      { values: [min, q1, median, q3, max] }: ett lådagram i skala, med de fem talen under (STl2 1).
//
// Mönster (fill) på staplar, serier och sektorer: FILLS = "fylld", "randig", "prickig", "tom", "rutig", "snedrandig".
// Utan fill tar varje serie eller sektor nästa mönster i den ordningen (pyramidens båda sidor är "fylld"). Ingen färg
// bär mening på sidan, så en fråga om en färg skrivs om till mönstret: "Vad visar den ljusgrå delen?" blir "Vad visar
// den randiga delen?". Mönstren ritas i accentfärgen och fungerar i både ljust och mörkt tema.
//
// Rena funktioner (mått, för ritningen och för bars.js om den vill):
//   exactValue    ett tal ur datan (9, "15,5") som exakt tal, eller null.
//   valueAxis     värdeaxelns streck: { min, max, ticks: [{ value, text }], minor: [tal] }. Kastar när axeln inte går
//                 jämnt upp (axisTicks) eller step inte är ett helt antal minor.
//   categorySlots n lika stora platser mellan två lägen: [{ start, center, end }].
//   seriesOf      diagrammets serier som [{ name, values (tal), fill }].
//   textWidth     ungefärlig bredd för en text i en viss storlek.
//   barLayout, unitsLayout, pyramidLayout, pieLayout, lineLayout, boxLayout: allt som ritas, i ritningens koordinater.
//   sectorPath    en cirkelsektor som SVG-stig, vinklar i radianer medurs från klockan tolv.
//
// Ritande funktioner: drawDiagram (SVG), diagramStage (på en skärm) och diagramBlock (igen på resultatskärmen, bakom
// "Visa rätt svar").

import { parseNumber } from "./parse.js";
import { axisTicks } from "./graph.js";
import { el, svgEl } from "./dom.js";

export const DIAGRAM_TYPES = ["bar", "pyramid", "pie", "line", "box"];
export const FILLS = ["fylld", "randig", "prickig", "tom", "rutig", "snedrandig"];
export const BAR_STYLES = ["bars", "sticks", "units"];

// ---------- TAL OCH AXLAR ----------

export function exactValue(x) {
  if (typeof x !== "number" && typeof x !== "string") return null;
  const v = parseNumber(String(x));
  return v !== null && v.r === 1n ? v : null;
}
const toNumber = (v) => Number(v.n) / Number(v.d); // bara för att rita
const valueOf = (x) => {
  const v = exactValue(x);
  return v === null ? NaN : toNumber(v);
};

export function valueAxis(axis) {
  const spec = { min: axis?.min ?? 0, max: axis?.max, step: axis?.step };
  const ticks = axisTicks(spec).map((t) => ({ value: toNumber(t.value), text: t.text }));
  let minor = [];
  if (axis?.minor !== undefined) {
    const fine = axisTicks({ ...spec, step: axis.minor });
    const per = (fine.length - 1) / (ticks.length - 1);
    if (!Number.isInteger(per) || per < 2) throw new RangeError("step är inte ett helt antal minor");
    minor = fine.filter((_, i) => i % per !== 0).map((t) => toNumber(t.value));
  }
  return { min: ticks[0].value, max: ticks.at(-1).value, ticks, minor };
}

export function categorySlots(n, from, to) {
  const size = (to - from) / n;
  return Array.from({ length: n }, (_, i) => ({ start: from + i * size, center: from + (i + 0.5) * size, end: from + (i + 1) * size }));
}

export function seriesOf(diagram, defaults = FILLS) {
  const list = diagram.series ?? [{ values: diagram.values ?? [] }];
  return list.map((s, i) => ({ name: s?.name ?? "", values: (s?.values ?? []).map(valueOf), fill: s?.fill ?? defaults[i % defaults.length] }));
}

// ---------- MÅTT ----------

const W = 380;
const PAD = 8;
const NUM = 15; // siffrorna på axlarna
const CAT = 15; // kategoriernas texter och förklaringen
const MIN_CAT = 12; // minsta storlek innan kategorierna ställs snett
const TITLE = 16; // axlarnas titlar och diagrammets rubrik
const SLANT = (40 * Math.PI) / 180;
const SWATCH = 16;

export const textWidth = (text, size) => String(text).length * size * 0.58;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const r2 = (v) => Math.round(v * 100) / 100;

// Förklaringens rader under diagrammet: [{ x, y, item }] med en rad till när raden är full. width är en posts bredd.
function legendRows(items, top, width) {
  const placed = [];
  let x = PAD;
  let y = top;
  for (const item of items) {
    const w = width(item);
    if (x > PAD && x + w > W - PAD) {
      x = PAD;
      y += 26;
    }
    placed.push({ x, y, item });
    x += w + 22;
  }
  // Varje rad centrerad.
  const rowWidth = new Map();
  for (const p of placed) rowWidth.set(p.y, Math.max(rowWidth.get(p.y) ?? 0, p.x + width(p.item) - PAD));
  for (const p of placed) p.x += (W - 2 * PAD - rowWidth.get(p.y)) / 2;
  return { placed, bottom: placed.length === 0 ? top : y + 26 };
}

const legendWidth = (item) => SWATCH + 8 + textWidth(item.name, CAT);
const lineLegendWidth = (item) => 30 + 8 + textWidth(item.name, CAT);

// Kategoriernas texter under en axel med n platser av bredden slot: storlek (mindre när de inte ryms, ner till
// MIN_CAT), snett ställda när de inte ryms ens då, och höjden de tar.
function categoryText(categories, slot) {
  const widest = Math.max(0, ...categories.map((c) => textWidth(c, CAT)));
  const room = slot - 6;
  if (widest <= room) return { size: CAT, slanted: false, height: CAT + 12 };
  const size = (CAT * room) / widest;
  if (size >= MIN_CAT) return { size: r2(size), slanted: false, height: size + 12 };
  const small = CAT - 1;
  return { size: small, slanted: true, height: (widest * small) / CAT * Math.sin(SLANT) + small + 12 };
}

// Stående diagram (staplar, stolpar, linjediagram): värdeaxeln till vänster, kategorierna under.
function columnFrame(diagram, legendItems, legendWidthOf) {
  const axis = valueAxis(diagram.y);
  const categories = diagram.categories;
  const left = Math.max(34, Math.max(...axis.ticks.map((t) => textWidth(t.text, NUM))) + 14);
  const top = (diagram.title ? 26 : 0) + (diagram.y.label ? 34 : 14);
  const pw = W - left - 14;
  const slots = categorySlots(categories.length, left, left + pw);
  const steps = axis.ticks.length - 1;
  const fine = steps + axis.minor.length;
  const ph = Math.min(320, Math.max(clamp(steps * 32, 180, 280), fine * 9));
  const base = top + ph;
  const text = categoryText(categories, pw / categories.length);
  let y = base + 6 + text.height;
  const xTitle = diagram.x?.label ? y + 6 : null;
  if (xTitle !== null) y += 28;
  const legend = legendItems.length > 1 ? legendRows(legendItems, y + 4, legendWidthOf) : { placed: [], bottom: y };
  const at = (v) => base - ((v - axis.min) / (axis.max - axis.min)) * ph;
  return { W, H: legend.bottom + PAD, axis, left, top, pw, ph, base, slots, text, xTitle, legend: legend.placed, at };
}

// Staplarna i en kategori: en grupp mitt i platsen, en stapel per serie. Stolpar är 8 breda med 6 emellan; staplar
// fyller drygt halva platsen (en serie) eller fyra femtedelar (flera), och hela platsen kant i kant (touching).
function barRects(slot, count, { sticks, touching }) {
  const size = slot.end - slot.start;
  const gap = sticks ? 6 : 0;
  const width = sticks ? 8 : (touching ? size : Math.min(size * (count > 1 ? 0.8 : 0.55), 64 * count)) / count;
  const from = slot.center - (count * width + gap * (count - 1)) / 2;
  return Array.from({ length: count }, (_, k) => ({ from: from + k * (width + gap), width }));
}

export function barLayout(diagram) {
  if (diagram.style === "units") return unitsLayout(diagram);
  if (diagram.horizontal) return rowLayout(diagram);
  const series = seriesOf(diagram);
  const frame = columnFrame(diagram, series, legendWidth);
  const sticks = diagram.style === "sticks";
  const bars = [];
  frame.slots.forEach((slot, i) => {
    barRects(slot, series.length, { sticks, touching: diagram.touching === true }).forEach(({ from, width }, k) => {
      const top = frame.at(series[k].values[i]);
      bars.push({ category: i, series: k, x: from, y: top, width, height: frame.base - top, fill: series[k].fill });
    });
  });
  return { ...frame, kind: "columns", series, bars, sticks };
}

// Liggande staplar (STd2 3): kategorierna uppifrån och ned till vänster, värdeaxeln längs underkanten.
function rowLayout(diagram) {
  const series = seriesOf(diagram);
  const axis = valueAxis(diagram.y);
  const categories = diagram.categories;
  const left = PAD + Math.max(...categories.map((c) => textWidth(c, CAT))) + 12;
  const top = (diagram.title ? 26 : 0) + (diagram.x?.label ? 30 : 14);
  const pw = W - left - 18;
  const slot = clamp(26 + 8 * (series.length - 1), 26, 40);
  const ph = categories.length * slot;
  const base = top + ph;
  const slots = categorySlots(categories.length, top, base);
  const yTitle = diagram.y.label ? base + 46 : null;
  let y = base + (yTitle === null ? 28 : 54);
  const legend = series.length > 1 ? legendRows(series, y, legendWidth) : { placed: [], bottom: y };
  const at = (v) => left + ((v - axis.min) / (axis.max - axis.min)) * pw;
  const bars = [];
  slots.forEach((s, i) => {
    barRects(s, series.length, { sticks: diagram.style === "sticks", touching: diagram.touching === true }).forEach(({ from, width }, k) => {
      bars.push({ category: i, series: k, x: left, y: from, width: at(series[k].values[i]) - left, height: width, fill: series[k].fill });
    });
  });
  return { kind: "rows", W, H: legend.bottom + PAD, axis, left, top, pw, ph, base, slots, yTitle, legend: legend.placed, at, series, bars, sticks: diagram.style === "sticks" };
}

// Bilddiagram (STd2 1): en ruta per enhet, staplade i varje kategori, utan värdeaxel.
export function unitsLayout(diagram) {
  const values = seriesOf(diagram)[0].values;
  const categories = diagram.categories;
  const pw = W - 2 * PAD;
  const slots = categorySlots(categories.length, PAD, PAD + pw);
  const cell = Math.min((pw / categories.length) * 0.7, 40);
  const top = (diagram.title ? 26 : 0) + 10;
  const tallest = Math.max(0, ...values);
  const base = top + tallest * cell;
  const text = categoryText(categories, pw / categories.length);
  let y = base + 6 + text.height;
  const xTitle = diagram.x?.label ? y + 6 : null;
  if (xTitle !== null) y += 28;
  const cells = [];
  slots.forEach((slot, i) => {
    for (let k = 0; k < values[i]; k++) cells.push({ category: i, x: slot.center - cell / 2, y: base - (k + 1) * cell, size: cell });
  });
  return { kind: "units", W, H: y + PAD, left: PAD, pw, base, slots, text, xTitle, cells, cell };
}

// Befolkningspyramid (STd6 2): grupperna i en mittkolumn, vänster serie åt vänster och höger serie åt höger.
export function pyramidLayout(diagram) {
  const series = seriesOf(diagram, ["fylld", "fylld"]);
  const axis = valueAxis(diagram.y);
  const groups = diagram.categories;
  const size = NUM - 1;
  const mid = Math.max(...groups.map((g) => textWidth(g, size))) + 18;
  const half = (W - 2 * PAD - mid - 16) / 2;
  const zeroLeft = PAD + 8 + half;
  const zeroRight = zeroLeft + mid;
  const top = (diagram.title ? 26 : 0) + 26;
  const row = clamp(320 / groups.length, 15, 26);
  const base = top + groups.length * row;
  const slots = categorySlots(groups.length, top, base);
  const scale = half / axis.max;
  const bars = [];
  slots.forEach((slot, i) => {
    const thick = row * 0.74;
    const y = slot.center - thick / 2;
    const [l, r] = [series[0].values[i] * scale, series[1].values[i] * scale];
    bars.push({ category: i, series: 0, x: zeroLeft - l, y, width: l, height: thick, fill: series[0].fill });
    bars.push({ category: i, series: 1, x: zeroRight, y, width: r, height: thick, fill: series[1].fill });
  });
  const toLeft = (v) => zeroLeft - v * scale;
  const toRight = (v) => zeroRight + v * scale;
  const H = base + (diagram.y.label ? 50 : 30) + PAD;
  return { kind: "pyramid", W, H, axis, groups, size, mid, half, zeroLeft, zeroRight, top, row, base, slots, bars, series, toLeft, toRight };
}

// En cirkelsektor från vinkeln a0 till a1 (radianer medurs från klockan tolv). En hel cirkel ritas som två halvor.
export function sectorPath(cx, cy, r, a0, a1) {
  const at = (a) => `${r2(cx + r * Math.sin(a))} ${r2(cy - r * Math.cos(a))}`;
  if (a1 - a0 >= 2 * Math.PI - 1e-9) return `M${at(0)}A${r} ${r} 0 1 1 ${at(Math.PI)}A${r} ${r} 0 1 1 ${at(0)}Z`;
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M${r2(cx)} ${r2(cy)}L${at(a0)}A${r} ${r} 0 ${large} 1 ${at(a1)}Z`;
}

// Cirkeldiagram: sektorerna medurs från klockan tolv och förklaringen till höger, eller under när den inte ryms.
export function pieLayout(diagram) {
  const sectors = diagram.sectors.map((s, i) => ({ name: s.name, value: valueOf(s.value), fill: s.fill ?? FILLS[i % FILLS.length] }));
  const total = sectors.reduce((sum, s) => sum + s.value, 0);
  const r = 100;
  const top = (diagram.title ? 26 : 0) + PAD + 2;
  const widest = Math.max(...sectors.map((s) => legendWidth(s)));
  const beside = 2 * r + 28 + widest <= W - 2 * PAD;
  const item = 30;
  let cx, cy, legendX, legendY, H;
  if (beside) {
    const start = (W - (2 * r + 28 + widest)) / 2;
    cx = start + r;
    cy = top + Math.max(r, (sectors.length * item) / 2);
    legendX = cx + r + 28;
    legendY = cy - (sectors.length * item) / 2;
    H = cy + Math.max(r, (sectors.length * item) / 2) + PAD + 2;
  } else {
    cx = W / 2;
    cy = top + r;
    legendX = Math.max(PAD, (W - widest) / 2);
    legendY = cy + r + 16;
    H = legendY + sectors.length * item + PAD;
  }
  let angle = 0;
  const parts = sectors.map((s) => {
    const a0 = angle;
    angle += total > 0 ? (2 * Math.PI * s.value) / total : 0;
    return { ...s, a0, a1: angle, path: sectorPath(cx, cy, r, a0, angle) };
  });
  const legend = sectors.map((s, i) => ({ x: legendX, y: legendY + i * item, item: s }));
  return { kind: "pie", W, H, cx, cy, r, sectors: parts, legend };
}

// Linjediagram: punkterna mitt över sin kategori, rutnätet lodrätt vid varje kategori och vågrätt vid varje steg.
export function lineLayout(diagram) {
  const series = seriesOf(diagram);
  const frame = columnFrame(diagram, series, lineLegendWidth);
  const lines = series.map((s) => ({ ...s, points: frame.slots.map((slot, i) => [slot.center, frame.at(s.values[i])]) }));
  return { ...frame, kind: "line", series, lines };
}

// Lådagram: lådan från q1 till q3 med medianen, morrhår ut till min och max och de fem talen under, i skala.
// Tal som står för nära varandra flyttas isär, så att de inte skriver över varandra.
export function boxLayout(diagram) {
  const values = diagram.values.map(valueOf);
  const top = (diagram.title ? 26 : 0) + 12;
  const height = 40;
  const x0 = PAD + 24;
  const x1 = W - PAD - 24;
  const [lo, hi] = [values[0], values[4]];
  const at = (v) => x0 + ((v - lo) / (hi - lo)) * (x1 - x0);
  const xs = values.map(at);
  const labels = diagram.values.map((v, i) => ({ text: String(v).replace(".", ","), x: xs[i] }));
  const need = (i) => (textWidth(labels[i - 1].text, NUM) + textWidth(labels[i].text, NUM)) / 2 + 6;
  for (let i = 1; i < labels.length; i++) {
    if (labels[i].x - labels[i - 1].x < need(i)) labels[i].x = labels[i - 1].x + need(i);
  }
  // Har talen knuffats förbi högerkanten (q3 = max: [0, 98, 99, 100, 100]) flyttas de tillbaka åt vänster.
  const last = labels.at(-1);
  last.x = Math.min(last.x, W - PAD - textWidth(last.text, NUM) / 2);
  for (let i = labels.length - 1; i > 0; i--) labels[i - 1].x = Math.min(labels[i - 1].x, labels[i].x - need(i));
  return { kind: "box", W, H: top + height + 34, top, height, mid: top + height / 2, xs, labels };
}

// ---------- RITNINGEN ----------

let patternCount = 0; // varje diagram har sina egna mönster-id, så att flera diagram på en sida inte krockar

// Mönstren (randig, prickig, rutig, snedrandig) som SVG-mönster; fylld och tom är klasser.
function patternNode(name, id) {
  const pattern = svgEl("pattern", { id, patternUnits: "userSpaceOnUse", width: 8, height: 8, ...(name === "snedrandig" ? { patternTransform: "rotate(45)" } : {}) });
  pattern.append(svgEl("rect", { width: 8, height: 8, class: "dg-dia-pat-bg" }));
  if (name === "randig") pattern.append(svgEl("line", { x1: 0, y1: 4, x2: 8, y2: 4, class: "dg-dia-pat-ink" }));
  if (name === "snedrandig") pattern.append(svgEl("line", { x1: 4, y1: 0, x2: 4, y2: 8, class: "dg-dia-pat-ink" }));
  if (name === "rutig") pattern.append(svgEl("path", { d: "M4 0V8M0 4H8", class: "dg-dia-pat-ink is-thin" }));
  if (name === "prickig") pattern.append(svgEl("circle", { cx: 4, cy: 4, r: 1.9, class: "dg-dia-pat-dot" }));
  return pattern;
}

// Ger paint(node, fill): sätter mönstret på en stapel, sektor eller ruta i förklaringen.
function painter(svg) {
  const defs = svgEl("defs");
  svg.append(defs);
  const prefix = `dg-dia-${++patternCount}`;
  const made = new Set();
  return (node, fill) => {
    const name = FILLS.includes(fill) ? fill : "fylld";
    node.setAttribute("class", `dg-dia-shape is-${name}`);
    if (name === "fylld" || name === "tom") return node;
    const id = `${prefix}-${name}`;
    if (!made.has(id)) {
      defs.append(patternNode(name, id));
      made.add(id);
    }
    node.setAttribute("fill", `url(#${id})`);
    return node;
  };
}

const text = (className, x, y, content, attrs = {}) => svgEl("text", { class: className, x: r2(x), y: r2(y), ...attrs }, content);
const line = (className, x1, y1, x2, y2) => svgEl("line", { class: className, x1: r2(x1), y1: r2(y1), x2: r2(x2), y2: r2(y2) });
const rect = (x, y, width, height) => svgEl("rect", { x: r2(x), y: r2(y), width: r2(Math.max(0, width)), height: r2(Math.max(0, height)) });

function drawTitle(svg, diagram) {
  if (diagram.title) svg.append(text("dg-dia-title", W / 2, 18, diagram.title, { "text-anchor": "middle", "font-size": TITLE }));
}

// Kategoriernas texter under platserna, raka eller snett ställda.
function drawCategories(svg, categories, slots, y, spec) {
  categories.forEach((name, i) => {
    const x = slots[i].center;
    const attrs = spec.slanted
      ? { "text-anchor": "end", "font-size": spec.size, transform: `rotate(-40 ${r2(x + 4)} ${r2(y + spec.size)})` }
      : { "text-anchor": "middle", "font-size": spec.size };
    svg.append(text("dg-dia-cat", spec.slanted ? x + 4 : x, y + spec.size, name, attrs));
  });
}

// Värdeaxeln till vänster med rutnät, siffror och korta streck, axlarna och titlarna (stående diagram).
function drawColumnFrame(svg, g, diagram, { verticalGrid = false } = {}) {
  const right = g.left + g.pw;
  for (const tick of g.axis.ticks) {
    const y = g.at(tick.value);
    if (tick.value !== g.axis.min) svg.append(line("dg-grid", g.left, y, right, y));
    svg.append(text("dg-dia-num", g.left - 8, y + 5, tick.text, { "text-anchor": "end", "font-size": NUM }));
  }
  for (const value of g.axis.minor) svg.append(line("dg-dia-minor", g.left - 5, g.at(value), g.left, g.at(value)));
  if (verticalGrid) for (const slot of g.slots) svg.append(line("dg-grid", slot.center, g.top, slot.center, g.base));
  svg.append(line("dg-grid dg-grid-axis", g.left, g.top - 6, g.left, g.base), line("dg-grid dg-grid-axis", g.left, g.base, right, g.base));
  drawCategories(svg, diagram.categories, g.slots, g.base + 6, g.text);
  if (diagram.y.label) svg.append(text("dg-dia-axis-title", PAD, g.top - 14, diagram.y.label, { "font-size": TITLE }));
  if (g.xTitle !== null) svg.append(text("dg-dia-axis-title", g.left + g.pw / 2, g.xTitle + TITLE, diagram.x.label, { "text-anchor": "middle", "font-size": TITLE }));
}

function drawLegend(svg, placed, paint, { lines = false } = {}) {
  for (const { x, y, item } of placed) {
    if (lines) svg.append(lineSample(x, y + 9, item));
    else svg.append(paint(rect(x, y + 1, SWATCH, SWATCH), item.fill));
    svg.append(text("dg-dia-legend", x + (lines ? 30 : SWATCH) + 8, y + 14, item.name, { "font-size": CAT }));
  }
}

function drawColumns(svg, g, diagram, paint) {
  drawColumnFrame(svg, g, diagram);
  for (const bar of g.bars) {
    if (!(bar.height > 0)) continue;
    svg.append(paint(rect(bar.x, bar.y, bar.width, bar.height), bar.fill));
  }
  drawLegend(svg, g.legend, paint);
}

function drawRows(svg, g, diagram, paint) {
  const bottom = g.base;
  for (const tick of g.axis.ticks) {
    const x = g.at(tick.value);
    if (tick.value !== g.axis.min) svg.append(line("dg-grid", x, g.top, x, bottom));
    svg.append(text("dg-dia-num", x, bottom + 20, tick.text, { "text-anchor": "middle", "font-size": NUM }));
  }
  for (const value of g.axis.minor) svg.append(line("dg-dia-minor", g.at(value), bottom, g.at(value), bottom + 5));
  svg.append(line("dg-grid dg-grid-axis", g.left, g.top - 4, g.left, bottom), line("dg-grid dg-grid-axis", g.left, bottom, g.left + g.pw, bottom));
  diagram.categories.forEach((name, i) => svg.append(text("dg-dia-cat", g.left - 8, g.slots[i].center + 5, name, { "text-anchor": "end", "font-size": CAT })));
  if (diagram.x?.label) svg.append(text("dg-dia-axis-title", PAD, g.top - 12, diagram.x.label, { "font-size": TITLE }));
  if (g.yTitle !== null) svg.append(text("dg-dia-axis-title", g.left + g.pw / 2, g.yTitle, diagram.y.label, { "text-anchor": "middle", "font-size": TITLE }));
  for (const bar of g.bars) if (bar.width > 0) svg.append(paint(rect(bar.x, bar.y, bar.width, bar.height), bar.fill));
  drawLegend(svg, g.legend, paint);
}

function drawUnits(svg, g, diagram) {
  for (const c of g.cells) {
    svg.append(svgEl("rect", { class: "dg-dia-cell", x: r2(c.x), y: r2(c.y), width: r2(c.size), height: r2(c.size) }));
    svg.append(svgEl("circle", { class: "dg-dia-unit", cx: r2(c.x + c.size / 2), cy: r2(c.y + c.size / 2), r: r2(c.size * 0.3) }));
  }
  drawCategories(svg, diagram.categories, g.slots, g.base + 6, g.text);
  if (g.xTitle !== null) svg.append(text("dg-dia-axis-title", g.left + g.pw / 2, g.xTitle + TITLE, diagram.x.label, { "text-anchor": "middle", "font-size": TITLE }));
}

function drawPyramid(svg, g, diagram, paint) {
  const numY = g.base + 20;
  for (const tick of g.axis.ticks) {
    for (const x of [g.toLeft(tick.value), g.toRight(tick.value)]) {
      if (tick.value !== 0) svg.append(line("dg-grid", x, g.top, x, g.base));
      svg.append(text("dg-dia-num", x, numY, tick.text, { "text-anchor": "middle", "font-size": NUM }));
    }
  }
  for (const value of g.axis.minor) for (const x of [g.toLeft(value), g.toRight(value)]) svg.append(line("dg-dia-minor", x, g.base, x, g.base + 5));
  for (const x of [g.zeroLeft, g.zeroRight]) svg.append(line("dg-grid dg-grid-axis", x, g.top - 4, x, g.base));
  svg.append(line("dg-grid dg-grid-axis", g.toLeft(g.axis.max), g.base, g.zeroLeft, g.base), line("dg-grid dg-grid-axis", g.zeroRight, g.base, g.toRight(g.axis.max), g.base));
  g.groups.forEach((name, i) => svg.append(text("dg-dia-cat", (g.zeroLeft + g.zeroRight) / 2, g.slots[i].center + g.size / 2 - 1, name, { "text-anchor": "middle", "font-size": g.size })));
  const nameY = g.top - 10;
  svg.append(text("dg-dia-axis-title", (g.zeroLeft + g.toLeft(g.axis.max)) / 2, nameY, g.series[0].name, { "text-anchor": "middle", "font-size": TITLE }));
  svg.append(text("dg-dia-axis-title", (g.zeroRight + g.toRight(g.axis.max)) / 2, nameY, g.series[1].name, { "text-anchor": "middle", "font-size": TITLE }));
  if (diagram.y.label) {
    for (const x of [(g.zeroLeft + g.toLeft(g.axis.max)) / 2, (g.zeroRight + g.toRight(g.axis.max)) / 2]) svg.append(text("dg-dia-axis-title", x, numY + 24, diagram.y.label, { "text-anchor": "middle", "font-size": TITLE }));
  }
  for (const bar of g.bars) if (bar.width > 0) svg.append(paint(rect(bar.x, bar.y, bar.width, bar.height), bar.fill));
}

function drawPie(svg, g, paint) {
  for (const s of g.sectors) if (s.a1 > s.a0) svg.append(paint(svgEl("path", { d: s.path }), s.fill));
  for (const { x, y, item } of g.legend) {
    svg.append(paint(rect(x, y + 4, SWATCH + 4, SWATCH + 4), item.fill));
    svg.append(text("dg-dia-legend", x + SWATCH + 12, y + 19, item.name, { "font-size": CAT }));
  }
}

// En markering för serie k: ring, fyrkant eller triangel.
function marker(k, x, y) {
  const kind = k % 3;
  if (kind === 0) return svgEl("circle", { class: `dg-dia-marker is-${k}`, cx: r2(x), cy: r2(y), r: 5 });
  if (kind === 1) return svgEl("rect", { class: `dg-dia-marker is-${k}`, x: r2(x - 4.5), y: r2(y - 4.5), width: 9, height: 9 });
  return svgEl("polygon", { class: `dg-dia-marker is-${k}`, points: `${r2(x)},${r2(y - 6)} ${r2(x + 5.5)},${r2(y + 4)} ${r2(x - 5.5)},${r2(y + 4)}` });
}

function lineSample(x, y, item) {
  const group = svgEl("g");
  group.append(line(`dg-dia-line is-${item.index}`, x, y, x + 30, y), marker(item.index, x + 15, y));
  return group;
}

function drawLines(svg, g, diagram) {
  drawColumnFrame(svg, g, diagram, { verticalGrid: true });
  g.lines.forEach((s, k) => {
    const d = s.points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${r2(x)} ${r2(y)}`).join(" ");
    svg.append(svgEl("path", { class: `dg-dia-line is-${k}`, d }));
  });
  g.lines.forEach((s, k) => {
    for (const [x, y] of s.points) svg.append(marker(k, x, y));
  });
  drawLegend(svg, g.legend.map((p) => ({ ...p, item: { ...p.item, index: g.series.indexOf(p.item) } })), null, { lines: true });
}

function drawBox(svg, g) {
  const [lo, q1, median, q3, hi] = g.xs;
  const { top, height, mid } = g;
  svg.append(
    line("dg-dia-box", lo, mid, q1, mid),
    line("dg-dia-box", q3, mid, hi, mid),
    line("dg-dia-box", lo, top, lo, top + height),
    line("dg-dia-box", hi, top, hi, top + height),
    svgEl("rect", { class: "dg-dia-box is-box", x: r2(q1), y: r2(top), width: r2(q3 - q1), height }),
    line("dg-dia-box", median, top, median, top + height),
  );
  for (const label of g.labels) svg.append(text("dg-dia-num", label.x, top + height + 24, label.text, { "text-anchor": "middle", "font-size": NUM }));
}

const NAMES = { bar: "Stapeldiagram", sticks: "Stolpdiagram", units: "Bilddiagram", pyramid: "Befolkningspyramid", pie: "Cirkeldiagram", line: "Linjediagram", box: "Lådagram" };

export function layoutOf(diagram) {
  if (diagram.type === "bar") return barLayout(diagram);
  if (diagram.type === "pyramid") return pyramidLayout(diagram);
  if (diagram.type === "pie") return pieLayout(diagram);
  if (diagram.type === "line") return lineLayout(diagram);
  if (diagram.type === "box") return boxLayout(diagram);
  throw new RangeError(`Okänd diagramtyp: ${diagram.type}`);
}

// Diagrammet som SVG (role img). label är det en skärmläsare säger, annars diagramtypens namn.
export function drawDiagram(diagram, { label } = {}) {
  const g = layoutOf(diagram);
  const name = diagram.type === "bar" && diagram.style && diagram.style !== "bars" ? diagram.style : diagram.type;
  const svg = svgEl("svg", { viewBox: `0 0 ${W} ${r2(g.H)}`, class: `dg-diagram is-${g.kind}`, role: "img", "aria-label": label ?? NAMES[name] ?? "Diagram" });
  const paint = painter(svg);
  drawTitle(svg, diagram);
  if (g.kind === "columns") drawColumns(svg, g, diagram, paint);
  else if (g.kind === "rows") drawRows(svg, g, diagram, paint);
  else if (g.kind === "units") drawUnits(svg, g, diagram);
  else if (g.kind === "pyramid") drawPyramid(svg, g, diagram, paint);
  else if (g.kind === "pie") drawPie(svg, g, paint);
  else if (g.kind === "line") drawLines(svg, g, diagram);
  else if (g.kind === "box") drawBox(svg, g);
  return svg;
}

// Ett diagram på en skärm, ovanför raderna, eller i ett resultat.
export function diagramStage(diagram, options) {
  const stage = el("div", `dg-diagram-stage is-${diagram.type}`);
  stage.append(drawDiagram(diagram, options));
  return stage;
}

// Diagrammet igen på resultatskärmen (en skärm där man läser av ett diagram), i det dolda facitblocket.
export function diagramBlock(diagram) {
  const block = el("div", "dg-expected dg-expected-block");
  block.append(diagramStage(diagram));
  return block;
}
