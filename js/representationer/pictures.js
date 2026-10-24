// Ritar bildmodellerna som SVG. Interaktiva bilder: klicka eller dra för att färga delar.
// Delarnas ordning är densamma som i models.js: radvis, eller medurs från kl. 12 för cirkeln.
import { range } from "./random.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const round = (x) => Number(x.toFixed(3));

function svgEl(name, attrs = {}) {
  const node = document.createElementNS(SVG_NS, name);
  for (const [k, value] of Object.entries(attrs)) node.setAttribute(k, String(value));
  return node;
}

function drawGrid(rows, cols, cellW, cellH, withRowHandles) {
  const handleSpace = withRowHandles ? cellW * 1.3 : 0;
  const width = cols * cellW + handleSpace;
  const height = rows * cellH;
  const svg = svgEl("svg", { viewBox: `-2 -2 ${round(width + 4)} ${round(height + 4)}` });
  const parts = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rect = svgEl("rect", { x: round(c * cellW), y: round(r * cellH), width: round(cellW), height: round(cellH), class: "rp-part" });
      svg.appendChild(rect);
      parts.push(rect);
    }
  }
  if (withRowHandles) {
    for (let r = 0; r < rows; r++) {
      const handle = svgEl("rect", {
        x: round(cols * cellW + cellW * 0.35), y: round(r * cellH + cellH * 0.15),
        width: round(cellW * 0.8), height: round(cellH * 0.7), rx: round(cellW * 0.2),
        class: "rp-row-handle",
      });
      handle.dataset.row = String(r);
      svg.appendChild(handle);
    }
  }
  return { svg, parts };
}

function drawCircle(n) {
  const r = 100;
  const svg = svgEl("svg", { viewBox: "-104 -104 208 208" });
  const parts = [];
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * 2 * Math.PI - Math.PI / 2;
    const a1 = ((i + 1) / n) * 2 * Math.PI - Math.PI / 2;
    const d = `M 0 0 L ${round(r * Math.cos(a0))} ${round(r * Math.sin(a0))} A ${r} ${r} 0 0 1 ${round(r * Math.cos(a1))} ${round(r * Math.sin(a1))} Z`;
    const path = svgEl("path", { d, class: "rp-part" });
    svg.appendChild(path);
    parts.push(path);
  }
  return { svg, parts };
}

function drawDots(n, rows, cols) {
  const gap = 40;
  const svg = svgEl("svg", { viewBox: `0 0 ${cols * gap} ${rows * gap}` });
  const parts = [];
  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / cols);
    const inRow = Math.min(cols, n - row * cols);
    const offset = ((cols - inRow) * gap) / 2; // sista raden centreras
    const dot = svgEl("circle", {
      cx: offset + (i % cols) * gap + gap / 2, cy: row * gap + gap / 2, r: 14, class: "rp-part rp-dot",
    });
    svg.appendChild(dot);
    parts.push(dot);
  }
  return { svg, parts };
}

function draw(picture, interactive) {
  if (picture.model === "hundraruta") return drawGrid(10, 10, 24, 24, interactive);
  if (picture.model === "cirkel") return drawCircle(picture.parts);
  if (picture.model === "prickar") return drawDots(picture.parts, picture.rows, picture.cols);
  if (picture.rows === 1) return drawGrid(1, picture.cols, 360 / picture.cols, 70, false);
  const cell = 240 / picture.cols;
  return drawGrid(picture.rows, picture.cols, cell, cell, false);
}

export function renderPicture(picture, { interactive = false, shaded = [] } = {}) {
  const { svg, parts } = draw(picture, interactive);
  svg.classList.add("rp-svg");
  parts.forEach((part, i) => {
    part.dataset.index = String(i);
  });

  const wrap = document.createElement("div");
  wrap.className = `rp-picture rp-picture-${picture.model}${interactive ? " is-interactive" : ""}`;
  wrap.appendChild(svg);

  const on = new Set();
  const counter = interactive && picture.model === "hundraruta" ? document.createElement("div") : null;
  if (counter) {
    counter.className = "rp-counter";
    wrap.appendChild(counter);
  }

  function paint(i, value) {
    if (value) on.add(i);
    else on.delete(i);
    parts[i].classList.toggle("is-on", value);
  }
  function refresh() {
    if (counter) counter.textContent = `Markerade: ${on.size}`;
  }
  for (const i of shaded) paint(i, true);
  refresh();

  if (!interactive) {
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `${on.size} av ${picture.parts} delar är färgade`);
  } else {
    let painting = null; // true = färgar, false = suddar, null = ingen knapp nedtryckt
    const partAt = (x, y) => {
      const node = document.elementFromPoint(x, y);
      return node && svg.contains(node) && node.dataset.index !== undefined ? Number(node.dataset.index) : null;
    };
    const toggleRow = (row) => {
      const indices = range(row * picture.cols, row * picture.cols + picture.cols - 1);
      const fill = !indices.every((i) => on.has(i));
      for (const i of indices) paint(i, fill);
      refresh();
    };
    svg.addEventListener("pointerdown", (event) => {
      if (event.target.dataset.row !== undefined) {
        event.preventDefault();
        toggleRow(Number(event.target.dataset.row));
        return;
      }
      const i = partAt(event.clientX, event.clientY);
      if (i === null) return;
      event.preventDefault();
      painting = !on.has(i);
      paint(i, painting);
      refresh();
      svg.setPointerCapture?.(event.pointerId);
    });
    svg.addEventListener("pointermove", (event) => {
      if (painting === null) return;
      const i = partAt(event.clientX, event.clientY);
      if (i !== null && on.has(i) !== painting) {
        paint(i, painting);
        refresh();
      }
    });
    const stop = () => {
      painting = null;
    };
    for (const type of ["pointerup", "pointercancel", "lostpointercapture"]) svg.addEventListener(type, stop);
  }

  return {
    el: wrap,
    count: () => on.size,
    clear() {
      for (const i of [...on]) paint(i, false);
      refresh();
    },
  };
}
