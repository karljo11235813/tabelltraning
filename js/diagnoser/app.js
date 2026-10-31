// Diamantdiagnoser: listan, diagnosen en skärm i taget och resultatskärmen.
// Rättningen, sessionen och ritandet ligger i mark.js, session.js och render.js, och sidans rena
// hjälpfunktioner (lagringsprovet, listraderna) i page.js. Här sitter bara det som rör `document`.
// Öva (övningsvyn för några diagnoser) ritas av ova/view.js; här finns bara knappen i listan och vägen dit och tillbaka.
//
// Under en diagnos visas varken rätt eller fel. Ingenting sparas förrän resultatskärmen visas: den som
// avbryter eller laddar om sidan förlorar omgången.
import { AREAS, DIAGNOSES, getDiagnosis, iconOf } from "./data/index.js";
import { NCM_LINKS } from "./data/links.js";
import { createSession, formatTime } from "./session.js";
import { loadResults, saveResult } from "./results.js";
import { renderScreen, renderResult, prettyAnswer } from "./render.js";
import { storageWorks, formatStamp, savedList, safeScore, ignoresEnter, ignoresHeldEnter, ignoresResultTap, searchDiagnoses, filterText, latestByCode, scoreLevel } from "./page.js";
import { createStore } from "../sant-falskt/storage.js";
import { hasPractice, loadBank } from "./ova/banks.js";
import { missedLabels, partsForLabels } from "./ova/pool.js";
import { openPractice } from "./ova/view.js";

const SECTIONS = ["dgList", "dgRun", "dgResult", "dgPractice"];
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

// Diagnosens lilla bild först i knappen. Den är bara utsmyckning (alt ""): koden och titeln står bredvid.
function stairIcon(code) {
  const img = el("img", "dg-stair-icon");
  img.src = iconOf(code);
  img.alt = "";
  img.width = 32;
  img.height = 32;
  img.loading = "lazy";
  return img;
}

// Bara diagnoserna som passar sökrutan. Ett delområde eller område utan någon av dem visas inte.
// Ett delområde visar från början tre rader: två hela och en som tonar bort, så att det syns att det finns mer. Ett område visar
// från början bara sitt första delområde. Det som öppnats står öppet medan sidan är öppen, och en sökning visar alltid alla sina träffar.
const PREVIEW_ROWS = 3;
const openFolds = new Set();

// Färgen är aldrig ensam: talen står alltid i märket.
function scoreBadge({ right, total }) {
  const level = scoreLevel(right, total);
  const badge = el("span", level ? `dg-stair-score is-${level}` : "dg-stair-score", `${right}/${total}`);
  badge.title = `Senast: ${right} av ${total} rätt`;
  return badge;
}

// Rubriken är en knapp när den fäller ihop något, annars text.
const foldHead = (folds) => el(folds ? "button" : "span", folds ? "dg-area-head dg-area-toggle" : "dg-area-head");

function renderAreas() {
  const shown = new Set(searchDiagnoses(DIAGNOSES, $("dgSearch").value));
  const filtered = filterText($("dgSearch").value, shown.size, DIAGNOSES.length);
  const host = $("dgAreas");
  host.textContent = "";
  for (const { area, logo, subs } of AREAS) {
    const visible = subs.map(({ sub, codes }) => ({ sub, codes: codes.filter((code) => shown.has(code)) })).filter(({ codes }) => codes.length > 0);
    if (visible.length === 0) continue;
    const part = el("section", "bt-part dg-area");
    const areaFolds = filtered === null && visible.length > 1;
    const title = el("h2", "bt-part-title dg-area-title");
    const head = foldHead(areaFolds);
    const img = el("img", "dg-area-logo");
    img.src = logo;
    img.alt = "";
    head.append(img, area);
    title.append(head);
    part.append(title);
    for (const { sub, codes } of visible) {
      const box = el("div", sub === visible[0].sub ? "dg-sub" : "dg-sub dg-sub-more");
      const subFolds = filtered === null && codes.length > PREVIEW_ROWS;
      const subHead = foldHead(subFolds);
      subHead.append(sub);
      const subTitle = el("h3", "dg-sub-title");
      subTitle.append(subHead);
      const stairs = el("div", "bt-stairs");
      let rows = 0;
      let fading = null;
      for (const code of codes) {
        const button = el("button", "bt-stair");
        button.type = "button";
        button.append(stairIcon(code), el("span", "bt-stair-title", `${code} · ${getDiagnosis(code).title}`));
        const last = latest.get(code);
        if (last) button.append(scoreBadge(last));
        button.addEventListener("click", () => openSheet(code));
        const row = el("div", "dg-stair-row");
        row.append(button);
        if (rows === PREVIEW_ROWS - 1) {
          fading = row;
          row.classList.add("dg-row-fade");
        } else if (rows >= PREVIEW_ROWS) {
          row.classList.add("dg-row-more");
        }
        rows += 1;
        stairs.append(row);
      }
      box.append(subTitle, stairs);
      if (subFolds) box.append(foldToggle(box, subHead, fading, `${area}/${sub}`, `Visa alla ${codes.length} diagnoser`));
      part.append(box);
    }
    if (areaFolds) part.append(foldToggle(part, head, null, area, `Visa alla ${visible.length} delområden`));
    host.append(part);
  }
  $("dgSearchEmpty").hidden = shown.size > 0;
  // En filtrerad lista syns tydligt: raden säger vad som visas och har knappen tillbaka till hela listan. Den står
  // kvar högst upp medan man rullar (sticky), så att knappen går att nå också långt ned i listan på en mobil.
  $("dgFilter").hidden = filtered === null;
  $("dgFilterText").textContent = filtered ?? "";
}

// Rubriken och knappen under gör samma sak. I ett delområde ligger knappen över raden som tonar bort, så ett tryck där öppnar
// delområdet i stället för att starta en diagnos eleven knappt ser; raden är `inert` så länge, så att Tab inte hamnar på den.
function foldToggle(box, head, fading, key, closedText) {
  const more = el("button", "dg-area-more");
  more.type = "button";
  head.type = "button";
  const setOpen = (open) => {
    box.classList.toggle("is-preview", !open);
    if (fading) fading.inert = !open;
    head.setAttribute("aria-expanded", String(open));
    more.setAttribute("aria-expanded", String(open));
    more.textContent = open ? "▴ Visa färre" : `▾ ${closedText}`;
    if (open) openFolds.add(key);
    else openFolds.delete(key);
  };
  const toggle = () => {
    const open = box.classList.contains("is-preview");
    setOpen(open);
    if (!open) head.scrollIntoView({ block: "nearest" }); // listan blir kortare, så att rubriken inte hamnar ovanför skärmen
  };
  head.addEventListener("click", toggle);
  more.addEventListener("click", toggle);
  setOpen(openFolds.has(key));
  return more;
}

// ---------- KORTET ----------

// Facit är lärarens: länken syns först när ordet har skrivits i sökrutan, och bara tills sidan laddas om. Inget på sidan säger att
// den finns. Det är ingen säkerhet (PDF:erna är öppna hos NCM), bara så att facit inte ligger ett klick bort för eleven.
const FACIT_WORD = "1123581321";
let facitUnlocked = false;

// Länkarna på kortet, { text, href }; fler läggs till här.
function moreItems(code) {
  const ncm = NCM_LINKS[code];
  if (!ncm) return [];
  const diagnos = { text: "Diagnosen (PDF hos NCM)", href: ncm.diagnos };
  return facitUnlocked ? [diagnos, { text: "Facit (PDF hos NCM)", href: ncm.facit }] : [diagnos];
}

// Ett klick på en diagnos tar upp kortet nedtill: Testa, Öva (gråtonad utan övningar), senaste resultatet och länkarna.
// <dialog> ger fokus på kortet, Escape och fokus tillbaka till raden när det stängs.
function openSheet(code) {
  const sheet = $("dgSheet");
  const leaveFor = (action) => () => {
    sheet.close();
    action();
  };
  const close = el("button", "dg-sheet-close", "✕");
  close.type = "button";
  close.setAttribute("aria-label", "Stäng");
  close.addEventListener("click", () => sheet.close());
  const title = el("h2", "dg-sheet-title", `${code} · ${getDiagnosis(code).title}`);
  title.id = "dgSheetTitle";
  const head = el("div", "dg-sheet-head");
  head.append(stairIcon(code), title, close);

  const test = el("button", "start-btn", "Testa");
  test.type = "button";
  test.autofocus = true;
  test.addEventListener("click", leaveFor(() => startDiagnosis(code)));
  const practice = el("button", "bt-secondary-btn", "Öva");
  practice.type = "button";
  practice.disabled = !hasPractice(code);
  if (practice.disabled) practice.title = "Den här diagnosen har inga övningar än";
  practice.addEventListener("click", leaveFor(() => startPractice(code, null, showList)));
  const actions = el("div", "dg-sheet-actions");
  actions.append(test, practice);

  const body = el("div", "dg-sheet-body");
  body.append(head, actions, lastResult(code, leaveFor));
  const links = el("div", "dg-sheet-links");
  for (const { text, href } of moreItems(code)) {
    const link = el("a", null, text);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    links.append(link);
  }
  if (links.childElementCount > 0) body.append(links);
  sheet.replaceChildren(body);
  sheet.showModal();
}

function lastResult(code, leaveFor) {
  const last = latest.get(code);
  if (!last) return el("p", "dg-sheet-none", "Inget resultat än.");
  const button = el("button", "bt-stair dg-sheet-result");
  button.type = "button";
  button.append(el("span", "bt-stair-title", `Senaste resultat · ${formatStamp(last.item.run.startedAt)}`), scoreBadge(last));
  button.addEventListener("click", leaveFor(() => showResult(last.item.diagnosis, last.item.scored, { saved: true })));
  return button;
}

// Ett klick utanför stänger kortet. Andra klicket i ett dubbelklick på en diagnos landar på samma ställe, där kortet nu kan ligga, och
// ett nedhållet Enter skulle trycka på Testa: inget av dem räknas.
$("dgSheet").addEventListener("click", (e) => {
  if (e.detail > 1) {
    e.preventDefault();
    e.stopPropagation();
  } else if (e.target === e.currentTarget) {
    e.currentTarget.close();
  }
}, true);
$("dgSheet").addEventListener("keydown", (e) => {
  if (e.repeat && (e.key === "Enter" || e.key === " ")) e.preventDefault();
}, true);

function renderSaved(items) {
  const list = $("dgSaved");
  list.textContent = "";
  for (const item of items) {
    const li = el("li");
    const button = el("button", "bt-stair");
    button.type = "button";
    button.append(stairIcon(item.diagnosis.code), el("span", "bt-stair-title", item.text));
    button.addEventListener("click", () => showResult(item.diagnosis, item.scored, { saved: true }));
    li.append(button);
    list.append(li);
  }
  // Rubriken visar antalet, så att det syns också när avsnittet är hopfällt (det är det från början).
  $("dgSavedCount").textContent = items.length > 0 ? `(${items.length})` : "";
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

// ---------- ÖVA ----------

// partIds null ger startskärmen; annars startar en omgång direkt med de delarna. back anropas när vyn avslutas.
function startPractice(code, partIds, back) {
  stopRun();
  showSection("dgPractice");
  openPractice({ host: $("dgPractice"), diagnosis: getDiagnosis(code), partIds, onExit: back });
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
  if (hasPractice(scored.code) && missedLabels(scored).length > 0) $("dgResultHost").append(missedPracticeButton(scored));
  showSection("dgResult");
  resultShownAt = performance.now();
}

// Öva på det du missade: en omgång med bara de delar som de felaktiga eller överhoppade skärmarna hör till. Knappen finns
// också på ett sparat resultat från Mina resultat. Går banken inte att ladda visar vyn sitt eget besked med en väg tillbaka.
function missedPracticeButton(scored) {
  const button = el("button", "start-btn dg-practice-missed", "Öva på det du missade");
  button.type = "button";
  button.addEventListener("click", async () => {
    const back = () => showSection("dgResult");
    let partIds = null;
    try {
      partIds = partsForLabels(await loadBank(scored.code), missedLabels(scored));
    } catch (error) {
      // partIds null: vyn laddar banken själv, misslyckas igen och visar felet.
      console.error("Öva: banken gick inte att ladda", error);
    }
    startPractice(scored.code, partIds, back);
  });
  return button;
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
  if (!e.target.closest(".dg-reveal, .dg-back, .dg-practice-missed")) return;
  if (ignoresResultTap({ shownAt: resultShownAt, now: performance.now() })) {
    e.preventDefault();
    e.stopPropagation();
  }
}, true);
$("dgSearch").addEventListener("input", (e) => {
  if (e.target.value.trim() === FACIT_WORD) {
    facitUnlocked = true;
    e.target.value = "";
  }
  renderAreas();
});
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
