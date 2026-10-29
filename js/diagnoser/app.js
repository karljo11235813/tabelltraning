// Diamantdiagnoser: listan, diagnosen en skärm i taget och resultatskärmen.
// Rättningen, sessionen och ritandet ligger i mark.js, session.js och render.js, och sidans rena
// hjälpfunktioner (lagringsprovet, listraderna) i page.js. Här sitter bara det som rör `document`.
//
// Under en diagnos visas varken rätt eller fel. Ingenting sparas förrän resultatskärmen visas: den som
// avbryter eller laddar om sidan förlorar omgången.
import { AREAS, getDiagnosis } from "./data/index.js";
import { createSession, formatTime } from "./session.js";
import { loadResults, saveResult } from "./results.js";
import { scoreRun } from "./mark.js";
import { renderScreen, renderResult, prettyAnswer } from "./render.js";
import { storageWorks, savedList, ignoresEnter, ignoresResultTap } from "./page.js";
import { createStore } from "../sant-falskt/storage.js";

const SECTIONS = ["dgList", "dgRun", "dgResult"];
const CLOCK_TICK_MS = 500; // tätare än en sekund, så att visningen aldrig släpar efter

const $ = (id) => document.getElementById(id);
const store = createStore(() => window.localStorage);

let run = null; // { diagnosis, session, view, startedAt, shownAt, clock }
let resultShownAt = 0; // när resultatskärmen visades senast (performance.now)

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function showSection(id) {
  for (const section of SECTIONS) $(section).hidden = section !== id;
  window.scrollTo(0, 0);
}

// ---------- LISTAN ----------

function renderAreas() {
  const host = $("dgAreas");
  host.textContent = "";
  for (const { area, subs } of AREAS) {
    const part = el("section", "bt-part");
    part.append(el("h2", "bt-part-title", area));
    for (const { sub, codes } of subs) {
      part.append(el("h3", "dg-sub-title", sub));
      const stairs = el("div", "bt-stairs");
      for (const code of codes) {
        const button = el("button", "bt-stair");
        button.type = "button";
        button.append(el("span", "bt-stair-title", `${code} · ${getDiagnosis(code).title}`));
        button.addEventListener("click", () => startDiagnosis(code));
        stairs.append(button);
      }
      part.append(stairs);
    }
    host.append(part);
  }
}

function renderSaved() {
  const items = savedList(loadResults(store), getDiagnosis);
  const list = $("dgSaved");
  list.textContent = "";
  for (const item of items) {
    const li = el("li");
    const button = el("button", "bt-stair");
    button.type = "button";
    button.append(el("span", "bt-stair-title", item.text));
    button.addEventListener("click", () => showResult(item.diagnosis, item.scored, { saved: true }));
    li.append(button);
    list.append(li);
  }
  // Ett blockerat fönster (privat läge) kan inte spara, och då ska eleven få veta det i stället för "inga resultat".
  const note = $("dgSavedEmpty");
  if (!storageWorks(store)) note.textContent = "Resultaten kan inte sparas i det här fönstret.";
  else if (items.length === 0) note.textContent = "Inga resultat sparade på den här datorn än.";
  else note.textContent = "";
  note.hidden = note.textContent === "";
}

function showList() {
  stopRun();
  renderAreas();
  renderSaved();
  showSection("dgList");
}

// ---------- DIAGNOSEN ----------

function startDiagnosis(code) {
  const diagnosis = getDiagnosis(code);
  if (!diagnosis) return;
  stopRun();
  run = { diagnosis, session: null, view: null, startedAt: 0, shownAt: 0, clock: null };
  $("dgCode").textContent = diagnosis.code;
  $("dgCancelConfirm").hidden = true;
  showSection("dgRun");
  if (diagnosis.example) showExample();
  else begin();
}

// AG5 och AG9 börjar med bladets exempel utan poäng. Klockan startar först när eleven trycker Börja.
function showExample() {
  const { example } = run.diagnosis;
  const root = el("div", "dg-screen dg-screen-example");
  root.append(el("h2", "dg-screen-label", "Exempel"), el("p", "bt-intro", "Så här kan det se ut. Exemplet ger inga poäng."), el("p", "dg-prompt", example.text));
  for (const [label, text] of [["Räkning:", example.calc], ["Svar:", example.answer]]) {
    const line = el("p", "dg-detail-line");
    line.append(el("span", "dg-detail-label", `${label} `), document.createTextNode(prettyAnswer(text)));
    root.append(line);
  }
  $("dgScreenHost").replaceChildren(root);
  $("dgProgress").textContent = "";
  $("dgClock").textContent = "";
  $("dgActions").hidden = true;
  $("dgStartRow").hidden = false;
  $("dgStart").focus();
}

function begin() {
  if (!run || run.session) return; // ett andra tryck på Börja ska inte starta en ny omgång
  run.session = createSession(run.diagnosis);
  run.startedAt = run.session.run().startedAt;
  $("dgClock").textContent = formatTime(0);
  run.clock = setInterval(tick, CLOCK_TICK_MS);
  $("dgStartRow").hidden = true;
  $("dgActions").hidden = false;
  showCurrent();
}

function tick() {
  if (run?.session) $("dgClock").textContent = formatTime(Date.now() - run.startedAt);
}

function showCurrent() {
  const { diagnosis, session } = run;
  run.view = renderScreen(diagnosis, session.screen, { onSubmit: next });
  $("dgScreenHost").replaceChildren(run.view.el);
  window.scrollTo(0, 0); // en ny skärm börjar överst, också när den förra var scrollad
  run.shownAt = performance.now();
  $("dgProgress").textContent = `${session.index + 1} / ${session.total}`;
  run.view.focusFirst();
}

// Sessionen ignorerar ett tryck strax efter att skärmen visades (dubbeltryck på Enter): då görs inget alls.
function next() {
  if (!run?.session || run.session.done) return;
  if (run.session.submit(run.view.read())) advance();
}

function skip() {
  if (!run?.session || run.session.done) return;
  if (run.session.skip()) advance();
}

function advance() {
  $("dgCancelConfirm").hidden = true;
  if (run.session.done) finish();
  else showCurrent();
}

function finish() {
  const { diagnosis, session } = run;
  const finished = session.run();
  const saved = saveResult(store, finished);
  stopRun();
  showResult(diagnosis, scoreRun(diagnosis, finished), { saved });
}

function stopRun() {
  if (run?.clock) clearInterval(run.clock);
  run = null;
}

// ---------- AVBRYT ----------

function askCancel() {
  $("dgCancelConfirm").hidden = false;
  $("dgCancelNo").focus();
}

function keepGoing() {
  $("dgCancelConfirm").hidden = true;
  if (run?.session) run.view.focusFirst();
  else $("dgStart").focus();
}

// ---------- RESULTATET ----------

function showResult(diagnosis, scored, { saved }) {
  $("dgSaveNote").hidden = saved;
  $("dgResultHost").replaceChildren(renderResult(diagnosis, scored, { onBack: showList }));
  showSection("dgResult");
  resultShownAt = performance.now();
}

// Före skärmens egen hantering (capture): ett dubbeltryck eller nedhållet Enter ska inte flytta fokus på nästa skärm.
$("dgScreenHost").addEventListener("keydown", (e) => {
  if (e.key !== "Enter" || !run?.session) return;
  if (ignoresEnter({ repeat: e.repeat, shownAt: run.shownAt, now: performance.now() })) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);
// Ett dubbelklick på sista "Nästa" ger ett andra klick som träffar resultatskärmen, där "Visa rätt svar" eller
// "Till listan" kan ligga på samma plats. Knapparna där ignoreras en stund (före deras egen hantering, capture).
$("dgResultHost").addEventListener("click", (e) => {
  if (!e.target.closest(".dg-reveal, .dg-back")) return;
  if (ignoresResultTap({ shownAt: resultShownAt, now: performance.now() })) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);
$("dgStart").addEventListener("click", begin);
$("dgNext").addEventListener("click", next);
$("dgSkip").addEventListener("click", skip);
$("dgCancel").addEventListener("click", askCancel);
$("dgCancelNo").addEventListener("click", keepGoing);
$("dgCancelYes").addEventListener("click", showList);

showList();
