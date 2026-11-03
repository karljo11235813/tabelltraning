// Dina framsteg i Rätt i rad: en mening om nivån, diagrammet över alla omgångar, några tal och en tabell. Samma
// uppbyggnad och samma .pp-klasser (styles.css) som tabellernas ruta i progress-panel.js, men med sviter i stället för
// rätt per test: varje omgång är en prick och den tjocka linjen är bästa svit hittills (se streak.js om varför inget snitt).
//
// streakChartLevels  y-axelns topp (axeln börjar alltid på 0) och nivålinjerna: Godtagbart, den som passerats och nästa.
// streakProgressHtml rutans HTML; tom sträng utan omgångar. Ren och testad.
// renderStreakProgress ritar rutan i elementet i dess verkliga bredd (anropa när elementet syns) och döljer det utan omgångar.

import { STREAK_LEVELS, plainName, summarizeStreaks } from "./streak.js";

const DEFAULT_WIDTH = 476;
const HEIGHT = 170;
const PAD = { top: 18, right: 10, bottom: 20, left: 28 };
const REFERENCE = 1; // Godtagbart står alltid i diagrammet, som i tabellernas ruta
const LOCALE = "sv-SE";

const px = (v) => v.toFixed(1);
const dateOf = (run) => new Date(run.ts).toLocaleDateString(LOCALE);

export function streakChartLevels(best, levels = STREAK_LEVELS) {
  const next = levels.find((level) => level.min > best);
  const passed = levels.filter((level) => level.min <= best).pop();
  const reference = levels[REFERENCE];
  const highest = Math.max(reference.min, next ? next.min : best);
  return {
    top: Math.ceil((highest + 3) / 5) * 5,
    lines: levels.filter((level) => level === reference || level === passed || level === next),
  };
}

function typicalText({ count, recent, typical }, levels = STREAK_LEVELS) {
  const first = levels[0];
  if (count === 1) {
    return typical >= 0
      ? `Din första omgång nådde ${plainName(levels[typical])}.`
      : `Din första omgång nådde inte ${plainName(first)} (${first.min} i rad).`;
  }
  const rounds = recent === count ? `dina ${recent} omgångar` : `dina ${recent} senaste omgångar`;
  return typical >= 0
    ? `Minst hälften av ${rounds} nådde ${plainName(levels[typical])}.`
    : `Färre än hälften av ${rounds} nådde ${plainName(first)} (${first.min} i rad).`;
}

function chartSvg(runs, summary, width) {
  const { top, lines } = streakChartLevels(summary.best);
  const n = runs.length;
  const plotW = width - PAD.left - PAD.right;
  const plotH = HEIGHT - PAD.top - PAD.bottom;
  const right = width - PAD.right;
  const baseline = HEIGHT - PAD.bottom;
  const x = (i) => PAD.left + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
  const y = (v) => PAD.top + plotH * (1 - Math.min(v, top) / top);

  const parts = [];
  const axisNumber = (value) => `<text class="pp-axis" x="${PAD.left - 6}" y="${px(y(value) + 4)}" text-anchor="end">${value}</text>`;
  parts.push(`<line class="pp-base" x1="${PAD.left}" x2="${right}" y1="${baseline}" y2="${baseline}"/>`, axisNumber(0));
  for (const level of lines) {
    const ly = px(y(level.min));
    parts.push(`<line class="pp-goal" x1="${PAD.left}" x2="${right}" y1="${ly}" y2="${ly}"/>`, axisNumber(level.min));
  }

  const axisText = (i, anchor) => `<text class="pp-axis" x="${px(x(i))}" y="${HEIGHT - 4}" text-anchor="${anchor}">Omgång ${i + 1}</text>`;
  parts.push(n === 1 ? axisText(0, "middle") : axisText(0, "start") + axisText(n - 1, "end"));

  if (n > 1) parts.push(`<polyline class="pp-runs" points="${runs.map((run, i) => `${px(x(i))},${px(y(run.streak))}`).join(" ")}"/>`);

  const dotRadius = n > 100 ? 2 : n > 40 ? 3 : 4;
  const bestIndex = runs.map((run) => run.streak).lastIndexOf(summary.best);
  runs.forEach((run, i) => {
    const cx = px(x(i));
    const cy = px(y(run.streak));
    parts.push(`<g><title>Omgång ${i + 1}, ${dateOf(run)}: ${run.streak} i rad</title><circle class="pp-hit" cx="${cx}" cy="${cy}" r="12"/>`
      + `<circle class="pp-dot${i === bestIndex ? " pp-dot-best" : ""}" cx="${cx}" cy="${cy}" r="${dotRadius}"/></g>`);
  });

  // Bästa hittills som en trappa: linjen går rakt fram tills en omgång slår rekordet och kliver då upp till den.
  if (n > 1) {
    const stairs = [];
    let best = -1;
    runs.forEach((run, i) => {
      if (run.streak > best) {
        if (best >= 0) stairs.push(`${px(x(i))},${px(y(best))}`);
        best = run.streak;
      }
      stairs.push(`${px(x(i))},${px(y(best))}`);
    });
    parts.push(`<polyline class="pp-line" points="${stairs.join(" ")}"/>`);
  }

  for (const level of lines) parts.push(`<text class="pp-goal-name" x="${PAD.left + 6}" y="${px(y(level.min) - 4)}">${plainName(level)}</text>`);
  parts.push(`<text class="pp-best" x="${px(x(bestIndex))}" y="${px(y(summary.best) - 8)}" text-anchor="middle">${summary.best}</text>`);

  const aria = `${summary.count} ${summary.count === 1 ? "omgång" : "omgångar"}. Bäst ${summary.best} i rad.`;
  return `<svg class="pp-chart" role="img" aria-label="${aria}" viewBox="0 0 ${width} ${HEIGHT}">${parts.join("")}</svg>`;
}

function legendHtml() {
  const item = (key, text) => `<span><i class="pp-key pp-key-${key}"></i>${text}</span>`;
  return `<div class="pp-legend">${item("run", "En omgång")}${item("line", "Bäst hittills")}</div>`;
}

function tilesHtml(summary) {
  const tile = (value, label) => `<div class="pp-tile"><b>${value}</b><span>${label}</span></div>`;
  return `<div class="pp-tiles rp-pp-tiles">${tile(summary.best, "Bäst")}${tile(summary.latest, "Senaste")}${tile(summary.count, "Omgångar")}</div>`;
}

function tableHtml(runs) {
  const rows = runs.map((run, i) => `<tr><td>${i + 1}</td><td>${dateOf(run)}</td><td>${run.streak}</td></tr>`).reverse().join("");
  return '<details class="pp-table"><summary>Visa alla omgångar</summary><div class="pp-table-scroll"><table>'
    + "<thead><tr><th>Omgång</th><th>Datum</th><th>I rad</th></tr></thead>"
    + `<tbody>${rows}</tbody></table></div></details>`;
}

export function streakProgressHtml(runs, { width = DEFAULT_WIDTH } = {}) {
  if (runs.length === 0) return "";
  const summary = summarizeStreaks(runs);
  return "<h2>Dina framsteg i Rätt i rad</h2>"
    + `<p class="pp-verdict">${typicalText(summary)}</p>`
    + '<p class="pp-chart-title">I rad per omgång</p>'
    + chartSvg(runs, summary, width)
    + (runs.length > 1 ? legendHtml() : "")
    + tilesHtml(summary)
    + tableHtml(runs);
}

export function renderStreakProgress(el, runs) {
  el.hidden = runs.length === 0;
  el.innerHTML = el.hidden ? "" : streakProgressHtml(runs, el.clientWidth ? { width: el.clientWidth } : {});
}
