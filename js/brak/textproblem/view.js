// Textproblem: listan under Bråktrappan och uppgiften stor på skärmen, för projektor.
// Eleven löser uppgiften med penna och papper och jämför sedan med lösningen, så inget rättas och inget sparas.
import { PROBLEMS, SECTIONS } from "./problems.js";
import { parseInline } from "./inline.js";

const MIN_SIZE = 17;
// En del är hopfälld till två rader: en hel och en som tonar bort. Alla delar har minst två uppgifter.
const PREVIEW_ROWS = 2;
const $ = (id) => document.getElementById(id);

let current = null;
let showScreen = null;
const openers = new Map(); // avsnitt → funktion som öppnar det

const sectionOf = (problem) => SECTIONS.find((s) => s.problems.includes(problem));

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function image(problem, className, size) {
  const node = el("img", className);
  node.src = `img/textproblem/${problem.image}.webp`;
  node.alt = "";
  node.width = size;
  node.height = size;
  return node;
}

function appendTokens(parent, tokens) {
  for (const token of tokens) {
    if (token.t === "text") parent.append(token.text);
    if (token.t === "bold") parent.append(appendTokens(el("strong"), token.tokens));
    if (token.t === "frac") {
      const frac = el("span", "bt-frac");
      frac.append(el("span", "bt-frac-top", token.top), el("span", "bt-frac-bottom", token.bottom));
      parent.append(frac);
    }
  }
  return parent;
}

const inline = (tag, className, text) => appendTokens(el(tag, className), parseInline(text));

// ---------- LISTAN ----------

function problemRow(problem) {
  const button = el("button", "bt-stair bt-tp-row");
  button.type = "button";
  button.id = `btProblemRow${problem.n}`;
  const thumb = image(problem, "bt-tp-row-image", 44);
  thumb.loading = "lazy";
  button.append(el("span", "bt-stair-number", String(problem.n)), el("span", "bt-stair-title", problem.title), thumb);
  button.addEventListener("click", () => openProblem(problem));
  return button;
}

// Rubriken och knappen under gör samma sak. Knappen ligger över raden som tonar bort, så ett tryck där öppnar delen i
// stället för att starta en uppgift eleven knappt ser; raden är `inert` så länge, så att Tab inte hamnar på den.
function fold(box, head, fading, section) {
  const more = el("button", "bt-tp-more");
  more.type = "button";
  const setOpen = (open) => {
    box.classList.toggle("is-preview", !open);
    fading.inert = !open;
    head.setAttribute("aria-expanded", String(open));
    more.setAttribute("aria-expanded", String(open));
    more.textContent = open ? "▴ Visa färre" : `▾ Visa alla ${section.problems.length} uppgifter`;
  };
  const toggle = () => {
    const open = box.classList.contains("is-preview");
    setOpen(open);
    if (!open) head.scrollIntoView({ block: "nearest" }); // listan blir kortare, så att rubriken inte hamnar ovanför skärmen
  };
  head.addEventListener("click", toggle);
  more.addEventListener("click", toggle);
  openers.set(section, () => setOpen(true));
  setOpen(false);
  return more;
}

function renderList() {
  for (const section of SECTIONS) {
    const box = el("section", "bt-part");
    const head = el("button", "bt-tp-toggle", section.title);
    head.type = "button";
    const title = el("h3", "bt-part-title");
    title.append(head);
    box.append(title);
    if (section.note) box.append(el("p", "bt-tp-section-note", section.note));
    const rows = section.problems.map(problemRow);
    rows[PREVIEW_ROWS - 1].classList.add("bt-tp-row-fade");
    for (const row of rows.slice(PREVIEW_ROWS)) row.classList.add("bt-tp-row-more");
    const list = el("div", "bt-stairs");
    list.append(...rows);
    box.append(list, fold(box, head, rows[PREVIEW_ROWS - 1], section));
    $("btProblems").append(box);
  }
}

// ---------- LÖSNINGEN ----------

function renderTable({ head, rows }) {
  const table = el("table", "bt-tp-table");
  const top = el("tr");
  top.append(...head.map((cell) => inline("th", "", cell)));
  table.append(top);
  for (const row of rows) {
    const line = el("tr");
    line.append(...row.map((cell, i) => inline(i === 0 ? "th" : "td", "", cell)));
    table.append(line);
  }
  const wrap = el("div", "bt-tp-table-wrap");
  wrap.append(table);
  return wrap;
}

function renderGrid({ grid, caption }) {
  const cells = el("span", "bt-tp-grid");
  cells.style.setProperty("--cols", grid.cols);
  cells.setAttribute("aria-hidden", "true");
  for (let i = 0; i < grid.cols * grid.rows; i++) cells.append(el("span", i < grid.filled ? "is-filled" : ""));
  const figure = el("div", "bt-tp-figure");
  figure.append(cells, inline("p", "", caption));
  return figure;
}

function renderBlock(block) {
  if (typeof block === "string") return inline("p", block.startsWith("**") ? "bt-tp-lead" : "", block);
  if (block.eq) return inline("p", "bt-tp-eq", block.eq);
  return block.table ? renderTable(block.table) : renderGrid(block);
}

function renderSolution(problem) {
  const answer = el("div", "bt-tp-answer");
  answer.append(el("div", "bt-tp-answer-label", "Svar"), ...problem.answer.map((line) => inline("p", "", line)));
  const steps = el("div", "bt-tp-steps");
  steps.append(...problem.solution.map(renderBlock));
  $("btProblemSolution").replaceChildren(el("h2", "bt-tp-solution-title", `Lösning till uppgift ${problem.n}`), answer, steps);
}

function setSolution(open) {
  $("btProblemSolution").hidden = !open;
  $("btProblemReveal").textContent = open ? "Dölj lösningen" : "Visa lösningen";
  $("btProblemReveal").setAttribute("aria-expanded", String(open));
}

function toTop() {
  window.scrollTo(0, 0);
  $("btProblem").scrollTo(0, 0);
}

function toggleSolution() {
  const open = $("btProblemSolution").hidden;
  setSolution(open);
  if (open) $("btProblemSolution").scrollIntoView({ block: "start" });
  else toTop();
}

// ---------- UPPGIFTEN ----------

// Uppgiften blir så stor som ryms på skärmen. På en telefon går det inte, och då rullar sidan i stället.
function fitQuestion() {
  if ($("btProblem").hidden) return;
  const free = window.innerHeight - $("btProblemTop").offsetHeight - $("btProblemActions").offsetHeight - 48;
  let size = Math.max(MIN_SIZE + 3, Math.min(window.innerWidth / 26, window.innerHeight / 14));
  do {
    $("btProblem").style.setProperty("--tp-size", `${size}px`);
    size -= 1;
  } while (size >= MIN_SIZE && $("btProblemContent").offsetHeight > free);
}

function renderQuestion(problem) {
  const section = sectionOf(problem);
  const host = $("btProblemText");
  host.replaceChildren(el("p", "bt-tp-title", problem.title));
  host.append(...problem.text.map((text) => inline("p", "", text)));
  if (section.note) host.append(el("p", "bt-tp-note", section.note));
  $("btProblemPicture").replaceChildren(image(problem, "bt-tp-image", 192));
  $("btProblemCount").textContent = `Uppgift ${problem.n} av ${PROBLEMS.length}`;
  const index = PROBLEMS.indexOf(problem);
  $("btProblemPrev").disabled = index === 0;
  $("btProblemNext").disabled = index === PROBLEMS.length - 1;
}

function openProblem(problem) {
  current = problem;
  renderQuestion(problem);
  renderSolution(problem);
  setSolution(false);
  showScreen("btProblem");
  toTop();
  fitQuestion();
  $("btProblemReveal").focus({ preventScroll: true });
}

function move(step) {
  const next = PROBLEMS[PROBLEMS.indexOf(current) + step];
  if (next) openProblem(next);
}

// Tillbaka till raden i listan, inte högst upp på sidan: nästa uppgift står oftast bredvid.
// Delen öppnas, eftersom Nästa kan ha gått vidare till en del som är hopfälld.
function leave() {
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  showScreen("btMap");
  openers.get(sectionOf(current))();
  const row = $(`btProblemRow${current.n}`);
  row.scrollIntoView({ block: "center" });
  row.focus({ preventScroll: true });
  current = null;
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  else $("btProblem").requestFullscreen().catch(() => {});
}

function onFullscreenChange() {
  $("btProblemFull").textContent = document.fullscreenElement ? "Lämna helskärm" : "Helskärm";
  fitQuestion();
}

export function setupTextproblem(show) {
  showScreen = show;
  renderList();
  $("btProblemBack").addEventListener("click", leave);
  $("btProblemReveal").addEventListener("click", toggleSolution);
  $("btProblemPrev").addEventListener("click", () => move(-1));
  $("btProblemNext").addEventListener("click", () => move(1));
  $("btProblemFull").hidden = !document.fullscreenEnabled;
  $("btProblemFull").addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", onFullscreenChange);
  window.addEventListener("resize", fitQuestion);
  document.addEventListener("keydown", (event) => {
    if ($("btProblem").hidden || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });
}
