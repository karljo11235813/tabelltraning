// Övningsvyn (Öva): startskärmen med valet av delar, en uppgift i taget stor på ytan, svaret med lösningen och slutet
// på omgången. Det enda här som rör `document`; vad som händer vid ett tryck ligger i deck.js (visningsföljden,
// tangenterna, klicken) och vilka uppgifter som kommer i pool.js. Här sitter bara att rita, lyssna och flytta fokus.
//
// openPractice  öppnar vyn i `host` och ger { close() }. Utan partIds visas startskärmen, annars startar en omgång
//               direkt med de delarna. Avsluta (och ← Tillbaka) stänger vyn och anropar onExit; close() stänger bara.
//               En ny vy stänger den som är öppen, så att inga lyssnare blir kvar. Köerna med uppgifter (pools) ligger kvar
//               medan sidan är öppen, så att en avslutad och återupptagen övning inte upprepar uppgifter.
//
// Uppgiften är en vanlig diagnosskärm (renderScreen) och svaret ritas av renderAnswer. Båda sparas per plats i omgången,
// så att Föregående visar uppgiften precis som den lämnades. Tangentlyssnaren på `document` (capture) finns bara medan
// en uppgift visas.

import { el } from "../dom.js";
import { renderScreen } from "../render.js";
import { loadBank } from "./banks.js";
import { BATCH_SIZE, createPool } from "./pool.js";
import { PRACTICE_GUARD_MS, createDeck, routeKey, routeClick, promptScale } from "./deck.js";
import { renderAnswer, renderPlotReveal } from "./answer.js";

let active = null; // vyn som är öppen just nu

// Omgångarnas köer lever medan sidan är öppen: ingen uppgift kommer tillbaka förrän de valda delarnas banker är genomgångna,
// också om man avslutar och öppnar Öva igen. En pool per diagnos och val av delar (ett annat val är en annan pool).
// Ingenting sparas; en omladdning börjar om.
const pools = new Map();
function poolFor(diagnosis, bank, partIds) {
  const key = `${diagnosis.code}:${[...partIds].sort().join(",")}`;
  if (!pools.has(key)) pools.set(key, createPool(bank, partIds));
  return pools.get(key);
}

// Det som ett klick på uppgiftsytan inte ska räknas som ett klick på: knappar (också alternativen i ett flerval), rutor,
// tallinjen, facket, symbolraden, koordinatsystemet där eleven sätter ut punkter (ett tryck där sätter ut en punkt och ska aldrig
// visa svaret) och plotens rutnät efter svaret (ett tryck där ändrar ingenting och går inte vidare).
const CONTROLS = "button, input, label, a, .dg-stage, .dg-tray, .dg-symbols, .dg-chart.is-interactive, .dg-plot-revealed";

function button(className, text, onClick) {
  const node = el("button", className, text);
  node.type = "button";
  node.addEventListener("click", onClick);
  return node;
}

// Vad en tangent träffar, i deck.js ord. Ett bokstavschip tar pilarna själv (de flyttar chipet), som en ruta. En ruta som
// har blivit skrivskyddad (svaret visas) tar inget mer: ett klick i den lämnar fokus där, och mellanslag och pilar ska ändå gå vidare.
function keyTarget(node, mainButton) {
  if (node.matches("input[readonly]")) return "other";
  if (node.matches("input, textarea, .dg-chip")) return "input";
  if (node === mainButton) return "main";
  return node.matches("button, a, label, select") ? "control" : "other";
}

export async function openPractice({ host, diagnosis, partIds = null, onExit }) {
  active?.close();
  host.replaceChildren();
  let closed = false;
  let bank = null;
  let pool = null;
  let batch = []; // uppgifterna i omgången
  let deck = null;
  let entries = []; // { task, view, answer } per plats i omgången, ritade första gången de visas
  let mainButton = null;
  let counter = null;
  let prevButton = null;
  let fullscreenButton = null;
  let stage = null;

  const handle = {
    close() {
      if (closed) return;
      closed = true;
      stopKeys();
      host.removeEventListener("click", ignoreDoubleClick, true);
      document.removeEventListener("fullscreenchange", syncFullscreen);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      host.replaceChildren();
      if (active === handle) active = null;
    },
  };
  active = handle;
  const exit = () => {
    handle.close();
    onExit();
  };

  // ---------- TANGENTER OCH KLICK ----------

  // Capture på `document`: ett nedhållet Enter ska stoppas innan svarsrutans egen hantering ser det.
  function onKeydown(e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return; // Alt + pil är webbläsarens egen
    const action = routeKey({ key: e.key, repeat: e.repeat, target: keyTarget(e.target, mainButton) });
    if (action === "native") return;
    e.preventDefault();
    if (action === "block") e.stopPropagation();
    else if (action === "back") goBack();
    else activate();
  }

  // Andra klicket i ett dubbelklick (detail 2 eller mer) räknas aldrig, var i vyn det än hamnar: ett dubbelklick på Öva i listan
  // ger annars ett klick på startskärmen, och ett dubbelklick på Föregående går två uppgifter tillbaka. Det andra tryckets
  // mousedown har då redan tagit fokus från huvudknappen, så den får det tillbaka.
  const ignoreDoubleClick = (e) => {
    if (e.detail < 2) return;
    e.preventDefault();
    e.stopPropagation();
    if (running) mainButton.focus({ preventScroll: true });
  };
  host.addEventListener("click", ignoreDoubleClick, true);
  let running = false; // en uppgift visas: tangentlyssnaren är på
  function startKeys() {
    running = true;
    document.addEventListener("keydown", onKeydown, true);
  }
  function stopKeys() {
    running = false;
    document.removeEventListener("keydown", onKeydown, true);
  }

  // Chrome tar fokus från en ruta redan när trycket börjar (mousedown), före klicket: därför noteras fokus vid pointerdown.
  const inputFocused = () => document.activeElement instanceof HTMLInputElement && stage.contains(document.activeElement);
  let focusedAtPress = false;
  const onStagePress = () => {
    focusedAtPress = inputFocused();
  };

  function onStageClick(e) {
    const hit = e.target.closest(CONTROLS);
    const wasFocused = focusedAtPress || inputFocused();
    focusedAtPress = false;
    const action = routeClick({
      target: hit !== null && stage.contains(hit) ? "control" : "other",
      inputFocused: wasFocused,
      detail: e.detail,
    });
    if (action === "blur") {
      document.activeElement.blur();
      mainButton.focus({ preventScroll: true });
    } else if (action === "activate") {
      activate();
    }
  }

  // ---------- OMGÅNGEN ----------

  function activate() {
    const result = deck.activate();
    if (result === "revealed") reveal();
    else if (result === "next") showTask();
    else if (result === "end") showEnd();
  }

  function entryAt(index) {
    if (entries[index]) return entries[index];
    const task = batch[index];
    const view = renderScreen(diagnosis, task, { onSubmit: () => activate() });
    view.el.style.setProperty("--dg-prompt-scale", String(promptScale(task))); // en textuppgift har större text än en rad som "Beräkna"
    // En graf är högst en viss andel av skärmens höjd (33 %, och 36 % för ett nästan kvadratiskt rutnät): CSS räknar bredden ur ritningens
    // bredd / höjd (--dg-chart-ratio), som är olika för ett lågt och ett kvadratiskt rutnät. Samma värden gäller rutnätet som byter plats
    // med det interaktiva efter svaret (renderPlotReveal), så uppgiften flyttar sig inte.
    const chart = view.el.querySelector("svg.dg-chart");
    if (chart) {
      const { width, height } = chart.viewBox.baseVal;
      if (height > 0) {
        view.el.style.setProperty("--dg-chart-ratio", String(width / height));
        view.el.style.setProperty("--dg-chart-h", width / height < 1.3 ? "36vh" : "33vh");
      }
    }
    // En uttrycksruta (RP6 5–6) rymmer "30 000 · 1,04 · 1,03" medan eleven skriver.
    for (const [id, box] of Object.entries(task.boxes ?? {})) if (box.expression) view.el.querySelector(`input[aria-label="Svar ${id}"]`)?.classList.add("dg-input-expression");
    const answer = el("div", "dg-practice-answer");
    answer.setAttribute("aria-live", "polite");
    entries[index] = { task, view, answer };
    return entries[index];
  }

  // Räknaren, Föregående och huvudknappen följer visningsföljden; fokus står alltid på huvudknappen efteråt, så att
  // mellanslag och → fortsätter genom klassen.
  function refresh() {
    const count = `Uppgift ${deck.index + 1} av ${deck.total}`;
    if (counter.textContent !== count) counter.textContent = count; // samma text om igen (svaret visas) läses inte upp på nytt
    prevButton.disabled = deck.index === 0;
    mainButton.textContent = !deck.revealed ? "Visa svar" : deck.index === deck.total - 1 ? "Klar" : "Nästa uppgift";
    mainButton.focus({ preventScroll: true });
  }

  function showTask() {
    const entry = entryAt(deck.index);
    stage.replaceChildren(entry.view.el, entry.answer);
    host.scrollTop = 0;
    window.scrollTo(0, 0); // en ny uppgift börjar överst, också när den förra var scrollad
    refresh();
  }

  function reveal() {
    const entry = entryAt(deck.index);
    const part = bank.parts.find((p) => p.id === entry.task.part);
    const answers = entry.view.read();
    entry.answer.replaceChildren(renderAnswer({ diagnosis, part, task: entry.task, answers }));
    // Uppgiften står kvar som eleven lämnade den: rutorna går inte att ändra, chipsen går inte att flytta och alternativen i ett
    // flerval (knappar) går inte att växla. Rutnätet i en plot byts mot samma rutnät utan något att sätta ut punkter med, där
    // elevens punkter står kvar och facits är streckade ringar; ett tryck på det gör ingenting (CONTROLS).
    for (const input of entry.view.el.querySelectorAll("input")) input.readOnly = true;
    for (const control of entry.view.el.querySelectorAll("button")) control.disabled = true;
    if (entry.task.kind === "plot") entry.view.el.querySelector(".dg-chart-stage")?.replaceWith(renderPlotReveal(entry.task, answers));
    entry.view.el.classList.add("is-revealed");
    refresh();
    // Uppgiften flyttar sig inte när svaret kommer. Först när svaret börjar under skärmens kant (ovanför huvudknappen) rullar sidan,
    // och då precis så mycket att svaret syns (scroll-margin i CSS).
    if (entry.answer.getBoundingClientRect().top > window.innerHeight - mainButton.offsetHeight - 16) entry.answer.scrollIntoView({ block: "nearest" });
  }

  function goBack() {
    if (deck.back()) showTask();
    else mainButton.focus({ preventScroll: true });
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else host.requestFullscreen().catch(() => {});
    mainButton.focus({ preventScroll: true });
  }

  function syncFullscreen() {
    if (fullscreenButton) fullscreenButton.textContent = document.fullscreenElement === host ? "Lämna helskärm" : "Helskärm";
  }

  // ---------- SKÄRMARNA ----------

  function showRun() {
    const top = el("div", "dg-practice-top");
    const tools = el("div", "dg-practice-tools");
    counter = el("span", "dg-practice-count");
    counter.setAttribute("aria-live", "polite"); // en skärmläsare säger "Uppgift 4 av 20" för varje ny uppgift
    prevButton = button("bt-small-btn dg-practice-tool", "Föregående", goBack);
    tools.append(prevButton);
    fullscreenButton = null;
    if (document.fullscreenEnabled) {
      fullscreenButton = button("bt-small-btn dg-practice-tool", "Helskärm", toggleFullscreen);
      tools.append(fullscreenButton);
      syncFullscreen();
    }
    tools.append(button("bt-small-btn dg-practice-tool", "Avsluta", exit));
    top.append(el("span", "dg-practice-code", `${diagnosis.code} · Öva`), counter, tools);
    stage = el("div", "dg-practice-stage");
    stage.addEventListener("pointerdown", onStagePress, true);
    stage.addEventListener("click", onStageClick);
    mainButton = button("start-btn dg-practice-main", "Visa svar", () => activate());
    host.replaceChildren(top, stage, mainButton);
    startKeys();
    showTask();
  }

  // Ett dubbelklick på sista "Klar" ger ett andra klick som träffar slutskärmen: knapparna där väntar en stund.
  function afterGuard(action) {
    const shownAt = performance.now();
    return () => {
      if (performance.now() - shownAt >= PRACTICE_GUARD_MS) action();
    };
  }

  function showEnd() {
    stopKeys();
    const done = el("div", "dg-practice-end");
    const message = el("p", "dg-practice-done", `Omgången är klar: ${deck.total} uppgifter.`);
    const more = button("start-btn", `${pool.nextSize()} till`, afterGuard(startBatch));
    const stop = button("bt-secondary-btn", "Avsluta", afterGuard(exit));
    done.append(message, more, stop);
    host.replaceChildren(done);
    // Fokus på texten och inte på en knapp: ett nedhållet mellanslag eller Enter från sista uppgiften ska inte starta nästa omgång.
    message.tabIndex = -1;
    message.focus({ preventScroll: true });
  }

  function startBatch() {
    batch = pool.nextBatch();
    deck = createDeck(batch);
    entries = [];
    showRun();
  }

  function showStart() {
    stopKeys();
    const all = checkbox("Alla delar", true);
    const parts = bank.parts.map((part) => ({ id: part.id, ...checkbox(part.title, false) }));
    // Alla delar eller en del i taget: att välja en del släcker Alla delar, och när den sista delen släcks är det Alla delar igen.
    all.input.addEventListener("change", () => {
      all.input.checked = true;
      for (const part of parts) part.input.checked = false;
    });
    for (const part of parts) {
      part.input.addEventListener("change", () => {
        all.input.checked = !parts.some((p) => p.input.checked);
      });
    }
    const legend = el("legend", null, "Delar");
    const set = el("fieldset", "dg-practice-parts");
    set.append(legend, all.label, ...parts.map((part) => part.label));
    const start = button("start-btn", "Starta", () => {
      const chosen = all.input.checked ? bank.parts.map((part) => part.id) : parts.filter((part) => part.input.checked).map((part) => part.id);
      pool = poolFor(diagnosis, bank, chosen);
      startBatch();
    });
    const root = el("div", "dg-practice-start");
    root.append(
      button("back-link", "← Tillbaka", exit),
      el("h2", "dg-practice-title", `${diagnosis.code} · ${diagnosis.title}`),
      el("p", "bt-intro", `Välj vad ni ska öva på. En omgång är ${BATCH_SIZE} uppgifter.`),
      set,
      start,
    );
    host.replaceChildren(root);
    start.focus({ preventScroll: true });
  }

  function showError() {
    stopKeys();
    const back = button("start-btn", "Tillbaka", exit);
    const root = el("div", "dg-practice-start");
    root.append(el("p", "bt-intro", "Övningarna gick inte att ladda."), back);
    host.replaceChildren(root);
    back.focus({ preventScroll: true });
  }

  // ---------- START ----------

  document.addEventListener("fullscreenchange", syncFullscreen);
  try {
    bank = await loadBank(diagnosis.code);
    if (closed) return handle;
    const chosen = partIds?.filter((id) => bank.parts.some((part) => part.id === id)) ?? [];
    if (chosen.length > 0) {
      pool = poolFor(diagnosis, bank, chosen);
      startBatch();
    } else {
      showStart();
    }
  } catch (error) {
    // Banken saknas eller första skärmen gick inte att rita: en väg tillbaka i stället för en tom sida.
    console.error("Öva: övningarna gick inte att öppna", error);
    if (!closed) showError();
  }
  return handle;
}

// En kryssruta med etikett: { label, input }.
function checkbox(text, checked) {
  const label = el("label", "dg-practice-check");
  const input = el("input");
  input.type = "checkbox";
  input.checked = checked;
  label.append(input, el("span", null, text));
  return { label, input };
}
