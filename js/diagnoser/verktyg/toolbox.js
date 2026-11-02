// Tankeverktygen: en knapp och en panel under den. Panelen står i sidans flöde och skjuter ned innehållet, så att uppgiften alltid syns
// medan eleven använder ett verktyg. Inget verktyg sparar eller skickar något, och det eleven gör med dem räknas inte i resultatet.
// Ett nytt verktyg är en rad i TOOLS: render(host) ritar det.
//
// createToolbox används två gånger: rubrikraden har en, och Öva en egen, eftersom rubrikraden är dold där och en helskärm bara
// visar övningsvyn.
import { el, svgEl } from "../dom.js";
import { renderNumberLine } from "./tallinje.js";

export const TOOLS = [
  { id: "tallinje-20", title: "Tallinje −20 till 20", render: (host) => renderNumberLine(host, { min: -20, max: 20 }) },
];

// Knappens symbol, en glödlampa. Den ärver knappens färg, så att den syns både på rubrikraden och i Öva.
function bulbIcon() {
  const icon = svgEl("svg", { class: "dg-tools-icon", viewBox: "0 0 24 24", "aria-hidden": "true" });
  icon.append(
    svgEl("path", { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }),
    svgEl("path", { d: "M9 18h6" }),
    svgEl("path", { d: "M10 22h4" }),
  );
  return icon;
}

// På en telefon tar tangentbordet ungefär halva skärmen. Medan eleven skriver i en ruta utanför panelen släpper panelen därför sin plats
// överst och rullar bort med sidan, så att uppgiften syns (dg-typing i diagnoser.css). En lyssnare räcker för alla paneler.
let watchingInput = false;
function watchInput() {
  if (watchingInput) return;
  watchingInput = true;
  const update = (e) => {
    const typing = e.type === "focusin" && e.target.matches("input, textarea") && !e.target.closest(".dg-toolbox");
    document.documentElement.classList.toggle("dg-typing", typing);
  };
  document.addEventListener("focusin", update);
  document.addEventListener("focusout", update);
}

export function createToolbox(buttonClass) {
  watchInput();
  const button = el("button", buttonClass);
  button.type = "button";
  button.title = "Tankeverktyg";
  button.setAttribute("aria-label", "Tankeverktyg");
  button.append(bulbIcon());
  button.setAttribute("aria-expanded", "false");
  const panel = el("div", "dg-toolbox");
  panel.hidden = true;
  panel.setAttribute("role", "region");
  panel.setAttribute("aria-label", "Tankeverktyg");

  const tabs = el("div", "dg-tool-tabs");
  const stage = el("div", "dg-tool-stage");
  const closeButton = el("button", "bt-small-btn dg-tool-close", "✕");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Stäng tankeverktygen");
  const top = el("div", "dg-tool-top");
  top.append(tabs, closeButton);
  panel.append(top, stage);

  // Ett verktyg ritas första gången det väljs och behåller sedan sitt läge.
  const drawn = new Map();
  let current = null;

  function choose(tool) {
    current = tool;
    for (const tab of tabs.children) tab.setAttribute("aria-pressed", String(tab.dataset.id === tool.id));
    if (!drawn.has(tool.id)) {
      const node = el("div", "dg-tool");
      tool.render(node);
      drawn.set(tool.id, node);
    }
    stage.replaceChildren(drawn.get(tool.id));
  }

  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    if (open) choose(current ?? TOOLS[0]);
  }

  for (const tool of TOOLS) {
    const tab = el("button", "bt-small-btn dg-tool-tab", tool.title);
    tab.type = "button";
    tab.dataset.id = tool.id;
    tab.addEventListener("click", () => choose(tool));
    tabs.append(tab);
  }

  button.addEventListener("click", () => setOpen(panel.hidden));
  closeButton.addEventListener("click", () => {
    setOpen(false);
    button.focus({ preventScroll: true });
  });
  panel.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    setOpen(false);
    button.focus({ preventScroll: true });
  });
  // Allt som sitter fast överst (filterraden i listan) och scroll-padding räknar med panelens höjd.
  new ResizeObserver(() => document.documentElement.style.setProperty("--dg-tools-h", `${panel.offsetHeight}px`)).observe(panel);

  return { button, panel };
}
