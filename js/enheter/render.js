// Ritar byggstenarna från pieces.js: rader, rutor att fylla i, prefixrutnätet, skaltabellen,
// arbetsbladstabellen, brickorna och bilderna (SVG).
import { dec, formatDecimal } from "./decimal.js";
import { fill } from "./pieces.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const NBSP = " ";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function svg(tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
}

const amountText = (x, unit) => `${formatDecimal(x)}${NBSP}${unit}`;

// ---------- RUTOR ----------

function textInput(label, className, inputMode) {
  const node = document.createElement("input");
  node.type = "text";
  node.inputMode = inputMode;
  node.autocomplete = "off";
  node.spellcheck = false;
  node.className = `bt-input ${className}`.trim();
  node.setAttribute("aria-label", label);
  return node;
}

function control(node, inputs, read) {
  node.classList.add("bt-box");
  return { el: node, inputs, read, setWrong: (on) => node.classList.toggle("is-wrong", on) };
}

// Knappar där en är vald, som tecknen < = > i Bråktrappan.
function choiceButtons(options, label, extraClass = "") {
  const node = el("span", `bt-symbol ${extraClass}`.trim());
  node.setAttribute("role", "group");
  node.setAttribute("aria-label", label);
  let chosen = null;
  const buttons = options.map((option) => {
    const button = el("button", `bt-symbol-btn ${extraClass ? "en-choice-btn" : ""}`.trim(), option);
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      chosen = option;
      for (const other of buttons) other.setAttribute("aria-pressed", String(other === button));
    });
    return button;
  });
  node.append(...buttons);
  return control(node, buttons, () => chosen);
}

function makeControl(b) {
  if (b.kind === "int" || b.kind === "decimal") {
    const input = textInput("Svar", "en-input-wide", b.kind === "int" ? "numeric" : "decimal");
    return control(input, [input], () => input.value);
  }
  if (b.kind === "symbol") return choiceButtons(["<", "=", ">"], "Välj tecken");
  if (b.kind === "choice") return choiceButtons(b.options, "Välj svar", "en-choice");
  if (b.kind === "ratio") {
    const left = textInput("Bild", "en-ratio-left", "numeric");
    const right = textInput("Verklighet", "en-ratio-right", "numeric");
    const node = el("span", "en-ratio");
    node.append(left, el("span", "en-ratio-colon", ":"), right);
    return control(node, [left, right], () => ({ left: left.value, right: right.value }));
  }
  if (b.kind === "pick") {
    const node = el("div", "en-tiles");
    node.setAttribute("role", "group");
    node.setAttribute("aria-label", "Markera alla som är lika stora");
    const buttons = b.tiles.map((tile) => {
      const button = el("button", "en-tile", amountText(tile.amount, tile.unit));
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => button.setAttribute("aria-pressed", String(button.getAttribute("aria-pressed") !== "true")));
      return button;
    });
    node.append(...buttons);
    const read = () => buttons.map((button, i) => (button.getAttribute("aria-pressed") === "true" ? i : -1)).filter((i) => i >= 0);
    return control(node, buttons, read);
  }
  throw new Error(`Okänd ruta: ${b.kind}`);
}

// ---------- PREFIXRUTNÄTET ----------

// Rutnätet som ett CSS-grid: varje ruta är 2 · celler kolumner, så att ett hopp kan gå från mitten
// av en ruta till mitten av nästa utan att krocka med grannhoppet.
function renderGrid(model, { useWindow = false } = {}) {
  const { cells } = model;
  const inWindow = (pos) => !useWindow || !model.window || (pos <= model.window.hi && pos >= model.window.lo);
  const squares = model.squares.filter((s) => inWindow(s.pos));
  const index = new Map(squares.map((s, i) => [s.pos, i]));
  const cols = squares.length * 2 * cells;
  const node = el("div", `en-grid en-cells-${cells}`);
  node.style.setProperty("--en-cols", cols);
  node._model = model;
  if (useWindow) node.dataset.windowed = "true";

  const squareStart = (i) => i * 2 * cells + 1;
  const squareMid = (i) => squareStart(i) + cells;
  const literCellMid = (pos, cell) => squareStart(index.get(pos)) + cell * 2 + 1;

  // Varje grupp får en egen rad i CSS-griddet: hopp, rutor, literrad, hopp i literraden.
  let gridRow = 0;
  const hopRow = (hops, mid, className) => {
    gridRow++;
    const row = el("div", `en-grid-row ${className}`);
    hops.forEach((h, i) => {
      const a = mid(h.fromPos);
      const b = mid(h.toPos);
      if (a == null || b == null) return;
      const right = b > a;
      // Varannan etikett lite längre ner, så att två grannar inte krockar i den smala literraden.
      const hop = el("div", `en-hop ${right ? "is-right" : "is-left"}${i % 2 === 1 ? " is-odd" : ""}`);
      hop.style.gridColumn = `${Math.min(a, b)} / ${Math.max(a, b)}`;
      hop.style.gridRow = String(gridRow);
      hop.append(el("span", "en-hop-label", h.label));
      row.append(hop);
    });
    return row;
  };

  const gridHops = model.hops.filter((h) => h.row === "grid");
  if (gridHops.length > 0) node.append(hopRow(gridHops, (pos) => (index.has(pos) ? squareMid(index.get(pos)) : null), "en-hops"));

  gridRow++;
  const row = el("div", "en-grid-row en-squares");
  squares.forEach((s, i) => {
    const isBase = s.pos === 0;
    const label = isBase ? model.baseLabel : s.letter;
    const square = el("div", "en-square");
    square.style.gridColumn = `${squareStart(i)} / span ${2 * cells}`;
    square.style.gridRow = String(gridRow);
    if (isBase) square.classList.add("is-base");
    if (!label && !s.isBlank) square.classList.add("is-empty");
    if (s.isBlank) square.classList.add("is-blank");
    if (s.isFrom) square.classList.add("is-from");
    if (s.isTo) square.classList.add("is-to");
    const letter = el("span", "en-letter", s.isBlank ? "?" : label ?? NBSP);
    if (label && label.length > 3) letter.classList.add("is-word"); // "enhet"
    square.append(letter);
    if (s.name) square.append(el("span", "en-name", s.name));
    if (cells > 1) {
      const slots = el("span", "en-slots");
      for (let c = 0; c < cells; c++) slots.append(el("span", "en-slot"));
      square.append(slots);
    }
    if (s.isFrom) square.append(el("span", "en-pen", "✎"));
    row.append(square);
  });
  node.append(row);

  if (model.literRow) {
    gridRow++;
    const liter = el("div", "en-grid-row en-liter");
    for (const c of model.literRow) {
      if (!index.has(c.pos)) continue;
      const start = squareStart(index.get(c.pos)) + c.cell * 2;
      const cell = el("div", "en-liter-cell", c.label);
      cell.style.gridColumn = `${start} / span 2`;
      cell.style.gridRow = String(gridRow);
      if (c.label === "l") cell.classList.add("is-switch");
      if (c.isFrom) cell.classList.add("is-from");
      if (c.isTo) cell.classList.add("is-to");
      liter.append(cell);
    }
    node.append(liter);
    const literHops = model.hops.filter((h) => h.row === "liter");
    if (literHops.length > 0) {
      const at = (lpos) => {
        const c = model.literRow.find((x) => 3 * x.pos + 3 - x.cell === lpos);
        return c && index.has(c.pos) ? literCellMid(c.pos, c.cell) : null;
      };
      node.append(hopRow(literHops, at, "en-hops en-liter-hops"));
    }
  }
  return node;
}

// Smalare kolumner än så blir oläsliga (volymrutnätet har 42 kolumner).
const MIN_COLUMN_PX = 11;

// Hur ett rutnät med columns kolumner ska visas i width pixlar: helt, som ett fönster runt de rutor
// frågan gäller, eller tätt (utan prefixnamn) när det inte finns något fönster, som när
// Mikro, Mega och Giga visar alla 16 rutor på en telefon.
export function fitMode(width, columns, hasWindow) {
  if (width / columns >= MIN_COLUMN_PX) return "full";
  return hasWindow ? "window" : "tight";
}

// Anpassar rutnäten efter bredden. Ett fönster byts tillbaka när det finns plats igen (telefonen vrids).
export function fitGrids(root) {
  for (const grid of root.querySelectorAll(".en-grid")) {
    const model = grid._model;
    if (!model) continue;
    const full = model.squares.length * 2 * model.cells;
    const width = grid.dataset.windowed ? grid.parentElement.clientWidth : grid.clientWidth;
    let mode = fitMode(width, full, !!model.window);
    if (mode === "full" && model.window && !grid.dataset.windowed && grid.scrollWidth > grid.clientWidth + 1) mode = "window";
    grid.classList.toggle("is-tight", mode === "tight");
    if ((mode === "window") !== !!grid.dataset.windowed) grid.replaceWith(renderGrid(model, { useWindow: mode === "window" }));
  }
}

// ---------- TABELLER ----------

function renderScaleTable(model) {
  const table = el("table", "en-scale");
  const head = el("tr");
  head.append(el("th"), el("th", null, "bild"), el("th"), el("th", null, "verklighet"));
  const arrows = () => {
    const td = el("td", "en-scale-arrows");
    td.append(el("span", "en-scale-arrow", `${model.toReal} →`), el("span", "en-scale-arrow", `← ${model.toImage}`));
    return td;
  };
  const top = el("tr");
  top.append(el("th", null, "skalan"), el("td", null, formatDecimal(dec(model.top[0]))), arrows(), el("td", null, formatDecimal(dec(model.top[1]))));
  const thead = el("thead");
  thead.append(head);
  const tbody = el("tbody");
  tbody.append(top);
  if (model.bottom.some((x) => x)) {
    const value = (x) => (x ? amountText(x, model.unit) : "?");
    const bottom = el("tr");
    bottom.append(el("th", null, "uppgiften"), el("td", null, value(model.bottom[0])), arrows(), el("td", null, value(model.bottom[1])));
    tbody.append(bottom);
  }
  table.append(thead, tbody);
  return table;
}

function renderSheet(p, ctx) {
  const table = el("table", "en-sheet");
  const head = el("tr");
  for (const h of p.head) head.append(el("th", null, h));
  const thead = el("thead");
  thead.append(head);
  const tbody = el("tbody");
  for (const row of p.rows) {
    const tr = el("tr");
    for (const cell of row) {
      const td = el("td");
      for (const piece of cell) td.append(renderPiece(piece, ctx));
      tr.append(td);
    }
    tbody.append(tr);
  }
  table.append(thead, tbody);
  return table;
}

// ---------- BILDER ----------

const UNIT = 26; // en ruta på 1 cm i bilden

function squaredFigure(cellsIn) {
  const xs = cellsIn.map(([x]) => x);
  const ys = cellsIn.map(([, y]) => y);
  const w = Math.max(...xs) + 1;
  const h = Math.max(...ys) + 1;
  const pad = 22;
  // Samma storlek på varje ruta i alla frågor: bredden följer antalet rutor.
  const W = w * UNIT + 2 * pad;
  const H = h * UNIT + 2 * pad;
  const root = svg("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: "en-pic en-pic-flat", role: "img" });
  for (let x = 0; x <= w + 1; x++) root.append(svg("line", { x1: pad + (x - 0.5) * UNIT, y1: pad - UNIT / 2, x2: pad + (x - 0.5) * UNIT, y2: pad + (h + 0.5) * UNIT, class: "en-paper" }));
  for (let y = 0; y <= h + 1; y++) root.append(svg("line", { x1: pad - UNIT / 2, y1: pad + (y - 0.5) * UNIT, x2: pad + (w + 0.5) * UNIT, y2: pad + (y - 0.5) * UNIT, class: "en-paper" }));
  for (const [x, y] of cellsIn) root.append(svg("rect", { x: pad + x * UNIT, y: pad + y * UNIT, width: UNIT, height: UNIT, class: "en-fill" }));
  // Kanten runt figuren: varje cellkant som inte delas med en annan cell.
  const has = new Set(cellsIn.map(([x, y]) => `${x},${y}`));
  for (const [x, y] of cellsIn) {
    const X = pad + x * UNIT;
    const Y = pad + y * UNIT;
    if (!has.has(`${x},${y - 1}`)) root.append(svg("line", { x1: X, y1: Y, x2: X + UNIT, y2: Y, class: "en-edge" }));
    if (!has.has(`${x},${y + 1}`)) root.append(svg("line", { x1: X, y1: Y + UNIT, x2: X + UNIT, y2: Y + UNIT, class: "en-edge" }));
    if (!has.has(`${x - 1},${y}`)) root.append(svg("line", { x1: X, y1: Y, x2: X, y2: Y + UNIT, class: "en-edge" }));
    if (!has.has(`${x + 1},${y}`)) root.append(svg("line", { x1: X + UNIT, y1: Y, x2: X + UNIT, y2: Y + UNIT, class: "en-edge" }));
  }
  const label = svg("text", { x: pad + UNIT / 2, y: pad + (h + 1) * UNIT - 4, class: "en-pic-label", "text-anchor": "middle" });
  label.textContent = "1 cm";
  root.append(label);
  return root;
}

// Lådor av kuber i snedbild: x åt höger, y bakåt, z uppåt.
function cubesFigure({ w, d, layers }) {
  const s = 22;
  const ox = s * 0.6;
  const oy = s * 0.45;
  const width = w * s + d * ox + 4;
  const height = layers * s + d * oy + 4;
  const root = svg("svg", { viewBox: `0 0 ${width} ${height}`, width: Math.round(width * 1.4), height: Math.round(height * 1.4), class: "en-pic en-pic-cubes", role: "img" });
  // Främre nedre vänstra hörnet av kuben (x, y, z); y = 0 är främsta raden.
  const at = (x, y, z) => [2 + x * s + y * ox, height - 2 - z * s - y * oy];
  // Målarordning: bakifrån och fram, nerifrån och upp, vänster till höger.
  for (let y = d - 1; y >= 0; y--) {
    for (let z = 0; z < layers; z++) {
      for (let x = 0; x < w; x++) {
        const [px, py] = at(x, y, z);
        const front = `${px},${py} ${px + s},${py} ${px + s},${py - s} ${px},${py - s}`;
        const top = `${px},${py - s} ${px + s},${py - s} ${px + s + ox},${py - s - oy} ${px + ox},${py - s - oy}`;
        const side = `${px + s},${py} ${px + s + ox},${py - oy} ${px + s + ox},${py - s - oy} ${px + s},${py - s}`;
        root.append(svg("polygon", { points: side, class: "en-cube-side" }), svg("polygon", { points: top, class: "en-cube-top" }), svg("polygon", { points: front, class: "en-cube-front" }));
      }
    }
  }
  return root;
}

function objectFigure(name) {
  const root = svg("svg", { viewBox: "0 0 200 120", class: "en-pic en-pic-object", role: "img" });
  if (name === "pool") {
    root.append(svg("rect", { x: 20, y: 25, width: 160, height: 70, rx: 8, class: "en-water" }));
    for (const y of [48, 72]) root.append(svg("line", { x1: 26, y1: y, x2: 174, y2: y, class: "en-lane" }));
    root.append(svg("rect", { x: 20, y: 25, width: 160, height: 70, rx: 8, class: "en-outline" }));
  } else if (name === "akvarium") {
    root.append(svg("rect", { x: 45, y: 40, width: 110, height: 65, class: "en-water" }));
    root.append(svg("ellipse", { cx: 95, cy: 72, rx: 14, ry: 8, class: "en-fish" }), svg("polygon", { points: "109,72 121,64 121,80", class: "en-fish" }));
    root.append(svg("polygon", { points: "45,40 75,22 185,22 155,40", class: "en-glass" }), svg("polygon", { points: "155,40 185,22 185,87 155,105", class: "en-glass" }));
    root.append(svg("rect", { x: 45, y: 40, width: 110, height: 65, class: "en-outline" }));
  } else {
    root.append(svg("polygon", { points: "30,35 60,15 180,15 150,35", class: "en-floor" }));
    root.append(svg("polygon", { points: "30,35 150,35 150,105 30,105", class: "en-wall" }), svg("polygon", { points: "150,35 180,15 180,85 150,105", class: "en-wall-side" }));
    root.append(svg("rect", { x: 70, y: 58, width: 26, height: 47, class: "en-door" }));
  }
  return root;
}

function dm2Figure() {
  const s = 14;
  const pad = 24;
  const root = svg("svg", { viewBox: `0 0 ${10 * s + 2 * pad} ${10 * s + 2 * pad}`, class: "en-pic en-pic-dm2", role: "img" });
  for (let i = 0; i < 10; i++) for (let j = 0; j < 10; j++) root.append(svg("rect", { x: pad + i * s, y: pad + j * s, width: s, height: s, class: i === 0 && j === 0 ? "en-fill-strong" : "en-fill" }));
  root.append(svg("rect", { x: pad, y: pad, width: 10 * s, height: 10 * s, class: "en-outline" }));
  const top = svg("text", { x: pad + 5 * s, y: pad - 8, class: "en-pic-label", "text-anchor": "middle" });
  top.textContent = "1 dm = 10 cm";
  const corner = svg("text", { x: pad + s + 4, y: pad + s - 3, class: "en-pic-label en-pic-small" });
  corner.textContent = "1 cm²";
  root.append(top, corner);
  return root;
}

function renderPicture(p) {
  const holder = el("span", "en-pic-holder");
  if (p.type === "rect" || p.type === "L") {
    const cellsIn = [];
    for (let y = 0; y < p.h; y++) {
      for (let x = 0; x < p.w; x++) {
        const cut = p.type === "L" && x >= p.w - p.cutW && y < p.cutH;
        if (!cut) cellsIn.push([x, y]);
      }
    }
    holder.append(squaredFigure(cellsIn));
  } else if (p.type === "cubes") holder.append(cubesFigure(p));
  else if (p.type === "object") holder.append(objectFigure(p.object));
  else if (p.type === "dm2") holder.append(dm2Figure());
  else throw new Error(`Okänd bild: ${p.type}`);
  return holder;
}

// ---------- RADER ----------

function renderTiles(p) {
  const node = el("div", "en-tiles is-filled");
  p.tiles.forEach((tile, i) => node.append(el("span", `en-tile${p.marked.includes(i) ? " is-marked" : ""}`, amountText(tile.amount, tile.unit))));
  return node;
}

function renderPiece(p, ctx) {
  if (typeof p === "number") return el("span", "bt-num", String(p));
  switch (p.t) {
    case "text":
      return el("span", "bt-text", p.s);
    case "num":
      return el("span", "bt-num", formatDecimal(p.x));
    case "qty":
      return el("span", "bt-num en-qty", amountText(p.x, p.unit));
    case "unit":
      return el("span", "en-unit", p.unit);
    case "op":
      return el("span", "bt-op", p.o);
    case "ratio":
      return el("span", "bt-num en-ratio-shown", `${formatDecimal(dec(p.a))} : ${formatDecimal(dec(p.b))}`);
    case "table":
      return renderSheet(p, ctx);
    case "grid":
      return renderGrid(p.model);
    case "scaletable":
      return renderScaleTable(p.model);
    case "pic":
      return renderPicture(p.picture);
    case "tiles":
      return renderTiles(p);
    case "box": {
      const c = makeControl(ctx.boxes[p.id]);
      ctx.controls[p.id] = c;
      return c.el;
    }
    case "filled": {
      const node = el("span", "bt-filled");
      node.append(renderPiece(p.piece, ctx));
      return node;
    }
    default:
      throw new Error(`Okänd byggsten: ${p.t}`);
  }
}

const WIDE = ["grid", "scaletable", "table", "pic", "tiles", "box"];

// En rad delas i led vid = och →, så att den bryts före tecknet på smala skärmar.
// Rutnät, tabeller, bilder och brickor står ensamma på sin rad.
function renderRow(row, ctx) {
  const line = el("div", "bt-row");
  const only = row.length === 1 && WIDE.includes(row[0].t) && (row[0].t !== "box" || ["pick"].includes(ctx.boxes[row[0].id]?.kind));
  if (only) {
    line.classList.add("en-row-block");
    line.append(renderPiece(row[0], ctx));
    return line;
  }
  let seg = el("span", "bt-seg");
  for (const p of row) {
    if (p.t === "op" && (p.o === "=" || p.o === "→") && seg.childNodes.length > 0) {
      line.append(seg);
      seg = el("span", "bt-seg");
    }
    seg.append(renderPiece(p, ctx));
  }
  if (seg.childNodes.length > 0) line.append(seg);
  return line;
}

function renderRows(rows, boxes, className) {
  const ctx = { boxes, controls: {} };
  const node = el("div", className);
  for (const row of rows) node.append(renderRow(row, ctx));
  return { el: node, controls: ctx.controls };
}

// Första textfältet i frågan, eller null (bara knappar: då skickar Enter in svaret via dokumentet).
export function firstField(controls) {
  for (const c of controls) for (const i of c.inputs) if (i.tagName === "INPUT") return i;
  return null;
}

// Vart Enter i ett fält flyttar fokus, eller null för att skicka in svaret.
// Vänstra skalfältet med ett tal → ett tomt högerfält. Sedan till nästa ruta om den är helt tom.
export function nextFocus(controls, current) {
  const owner = controls.findIndex((c) => c.inputs.includes(current));
  if (owner < 0) return null;
  const isEmpty = (i) => i.value.trim() === "";
  const inputs = controls[owner].inputs;
  const after = inputs[inputs.indexOf(current) + 1];
  if (current.classList.contains("en-ratio-left") && !isEmpty(current) && after && isEmpty(after)) return after;
  const fields = controls[owner + 1] ? controls[owner + 1].inputs.filter((i) => i.tagName === "INPUT") : [];
  return fields.length > 0 && fields.every(isEmpty) ? fields[0] : null;
}

export function renderQuestion(question) {
  return renderRows(question.rows, question.boxes, "bt-rows");
}

// Stegen och sedan frågan med de rätta svaren ifyllda.
export function renderSolution(question) {
  const node = el("div", "bt-solution-body");
  const list = el("ol", "bt-steps");
  for (const step of question.steps) {
    const item = el("li", "bt-step");
    if (step.text) item.append(el("p", "bt-step-text", step.text));
    if (step.row) item.append(renderRows([step.row], {}, "bt-rows bt-rows-step").el);
    list.append(item);
  }
  // Svaret utan rutnätet: det står redan med hoppen i lösningen.
  const answerRows = fill(question.rows, question.boxes).filter((row) => !(row.length === 1 && row[0].t === "grid"));
  const filled = renderRows(answerRows, question.boxes, "bt-rows bt-rows-filled").el;
  node.append(list, el("div", "bt-answer-label", "Svar"), filled);
  return node;
}
