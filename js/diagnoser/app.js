// Diamantdiagnoser: listan, diagnosen en skärm i taget och resultatskärmen.
// Rättningen, sessionen och ritandet ligger i mark.js, session.js och render.js, och sidans rena
// hjälpfunktioner (lagringsprovet, listraderna) i page.js. Här sitter bara det som rör `document`.
//
// Under en diagnos visas varken rätt eller fel. Ingenting sparas förrän resultatskärmen visas: den som
// avbryter eller laddar om sidan förlorar omgången.
import { AREAS, DIAGNOSES, getDiagnosis } from "./data/index.js";
import { NCM_LINKS } from "./data/links.js";
import { createSession, formatTime } from "./session.js";
import { loadResults, saveResult } from "./results.js";
import { renderScreen, renderResult, prettyAnswer } from "./render.js";
import { storageWorks, savedList, safeScore, ignoresEnter, ignoresHeldEnter, ignoresResultTap, searchDiagnoses, filterText, latestByCode, scoreLevel } from "./page.js";
import { createStore } from "../sant-falskt/storage.js";

const SECTIONS = ["dgList", "dgRun", "dgResult"];
const CLOCK_TICK_MS = 500; // tätare än en sekund, så att visningen aldrig släpar efter

const $ = (id) => document.getElementById(id);
const store = createStore(() => window.localStorage);

let run = null; // { diagnosis, session, view, startedAt, shownAt, clock }
let resultShownAt = 0; // när resultatskärmen visades senast (performance.now)
// Senaste resultatet per diagnos (latestByCode). Räknas när listan visas, inte vid varje tangent i sökrutan.
let latest = new Map();

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

// Bara diagnoserna som passar sökrutan. Ett delområde eller område utan någon av dem visas inte.
function renderAreas() {
  const shown = new Set(searchDiagnoses(DIAGNOSES, $("dgSearch").value));
  const host = $("dgAreas");
  host.textContent = "";
  for (const { area, logo, subs } of AREAS) {
    const visible = subs.map(({ sub, codes }) => ({ sub, codes: codes.filter((code) => shown.has(code)) })).filter(({ codes }) => codes.length > 0);
    if (visible.length === 0) continue;
    const part = el("section", "bt-part");
    const title = el("h2", "bt-part-title dg-area-title dg-area-head");
    const img = el("img", "dg-area-logo");
    img.src = logo;
    img.alt = "";
    title.append(img, area);
    part.append(title);
    for (const { sub, codes } of visible) {
      part.append(el("h3", "dg-sub-title", sub));
      const stairs = el("div", "bt-stairs");
      for (const code of codes) {
        const button = el("button", "bt-stair");
        button.type = "button";
        button.append(el("span", "bt-stair-title", `${code} · ${getDiagnosis(code).title}`));
        const last = latest.get(code);
        if (last) {
          // Färgen är aldrig ensam: talen står alltid i märket.
          const level = scoreLevel(last.right, last.total);
          const badge = el("span", level ? `dg-stair-score is-${level}` : "dg-stair-score", `${last.right}/${last.total}`);
          badge.title = `Senast: ${last.right} av ${last.total} rätt`;
          button.append(badge);
        }
        button.addEventListener("click", () => startDiagnosis(code));
        const row = el("div", "dg-stair-row");
        row.append(button, moreMenu(code));
        stairs.append(row);
      }
      part.append(stairs);
    }
    host.append(part);
  }
  $("dgSearchEmpty").hidden = shown.size > 0;
  // En filtrerad lista syns tydligt: raden säger vad som visas och har knappen tillbaka till hela listan. Den står
  // kvar högst upp medan man rullar (sticky), så att knappen går att nå också långt ned i listan på en mobil.
  const text = filterText($("dgSearch").value, shown.size, DIAGNOSES.length);
  $("dgFilter").hidden = text === null;
  $("dgFilterText").textContent = text ?? "";
}

// ⋯-menyn bredvid varje diagnos. Varje val är en länk { text, href }; fler val läggs till här.
function moreItems(code) {
  const ncm = NCM_LINKS[code];
  return ncm ? [{ text: "Diagnosen (PDF hos NCM)", href: ncm.diagnos }, { text: "Facit (PDF hos NCM)", href: ncm.facit }] : [];
}

function closeMenus(except = null) {
  for (const menu of document.querySelectorAll(".dg-more-menu")) {
    if (menu === except) continue;
    menu.hidden = true;
    menu.previousElementSibling.setAttribute("aria-expanded", "false");
  }
}

function moreMenu(code) {
  const wrap = el("div", "dg-more");
  const items = moreItems(code);
  if (items.length === 0) return wrap;
  const toggle = el("button", "dg-more-btn", "⋯");
  toggle.type = "button";
  toggle.setAttribute("aria-label", `Mer om ${code}`);
  toggle.setAttribute("aria-haspopup", "true");
  toggle.setAttribute("aria-expanded", "false");
  const menu = el("div", "dg-more-menu");
  menu.hidden = true;
  for (const { text, href } of items) {
    const link = el("a", "dg-more-item", text);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    menu.append(link);
  }
  toggle.addEventListener("click", () => {
    const open = menu.hidden;
    closeMenus(menu);
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    if (open) menu.querySelector("a").focus();
  });
  wrap.append(toggle, menu);
  return wrap;
}

// En öppen meny stängs med ett klick utanför eller Escape (fokus tillbaka till knappen).
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dg-more")) closeMenus();
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const open = document.querySelector(".dg-more-menu:not([hidden])");
  if (!open) return;
  closeMenus();
  open.previousElementSibling.focus();
});

function renderSaved(items) {
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
  const items = savedList(loadResults(store), getDiagnosis);
  latest = latestByCode(items);
  renderAreas();
  renderSaved(items);
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
  $("dgNext").textContent = run.view.nextLabel ?? "Nästa"; // en pappersuppgift avslutas med Klar
  window.scrollTo(0, 0); // en ny skärm börjar överst, också när den förra var scrollad
  run.shownAt = performance.now();
  $("dgProgress").textContent = `${session.index + 1} / ${session.total}`;
  focusScreen();
}

// Fokus på första rutan eller brickan. En pappersuppgift har ingen: där är Klar det som ska träffas av Enter.
function focusScreen() {
  run.view.focusFirst();
  if (run.view.nextLabel) $("dgNext").focus();
}

// Sessionen ignorerar ett tryck strax efter att skärmen visades (dubbeltryck på Enter): då görs inget alls.
function next() {
  if (!run?.session || run.session.done) return;
  // Ett val utan något valt är ett svar (keepBlank), inte en överhoppad skärm.
  if (run.session.submit(run.view.read(), { keepBlank: run.view.keepBlank === true })) advance();
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
  // Ett datafel i rättningen ska aldrig lämna en död skärm: då visas ett kort besked och en väg tillbaka.
  const scored = safeScore(diagnosis, finished);
  if (scored === null) showScoreError(diagnosis);
  else showResult(diagnosis, scored, { saved });
}

function showScoreError(diagnosis) {
  const root = el("section", "dg-result");
  const back = el("button", "start-btn dg-back", "Till listan");
  back.type = "button";
  back.addEventListener("click", showList);
  root.append(el("h2", "dg-res-title", `${diagnosis.code} · ${diagnosis.title}`), el("p", "bt-intro", "Resultatet gick inte att rätta. Säg till läraren."), back);
  $("dgSaveNote").hidden = true;
  $("dgResultHost").replaceChildren(root);
  showSection("dgResult");
  resultShownAt = performance.now();
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
  if (run?.session) focusScreen();
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
// Samma för knapparna under skärmen (Nästa, Klar, Hoppa över): ett nedhållet Enter på en pappersuppgift är ett klick på
// Klar om och om igen, som annars rusar genom 4a, 4b, 4c. Bara repeat, inte tiden: ett första tryck är ett riktigt svar.
$("dgActions").addEventListener("keydown", (e) => {
  if (!ignoresHeldEnter({ key: e.key, repeat: e.repeat })) return;
  e.preventDefault();
  e.stopPropagation();
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
$("dgSearch").addEventListener("input", renderAreas);
$("dgFilterReset").addEventListener("click", () => {
  $("dgSearch").value = "";
  renderAreas();
  $("dgSearch").scrollIntoView({ block: "nearest" });
});
$("dgStart").addEventListener("click", begin);
$("dgNext").addEventListener("click", next);
$("dgSkip").addEventListener("click", skip);
$("dgCancel").addEventListener("click", askCancel);
$("dgCancelNo").addEventListener("click", keepGoing);
$("dgCancelYes").addEventListener("click", showList);
// Tillbaka till listan med ett klick, både under diagnosen och på resultatskärmen. Som "Ja, avbryt": inget sparas.
$("dgRunBack").addEventListener("click", showList);
$("dgResultBack").addEventListener("click", showList);

showList();
