// Valskärmar: choose (ett alternativ) och pick (markera allt som stämmer), och deras plats på resultatskärmen.
// Matematiken i alternativen ritas av radritaren i render.js, som skickas in som draw(markup, tag): då ritas
// KaTeX, eller reservritningen utan KaTeX, precis som i en rad. Modulen rör inte `document` när den laddas.
//
// itemContent   innehållet i ett alternativ (en bricka): markup ritas som en rad, en figure ritas av figures.js
//               (med den skuggning figuren själv har).
// buildChoice   skärmens bricka; ger { read, focusFirst, keepBlank }. Brickorna har aria-pressed och skärmen säger
//               aldrig hur många som ska väljas. Svaren: choose { choice: id | "" }, pick { <id>: "1" | "" }.
// choiceDetail  det som står under raden på resultatskärmen: elevens val, med rätt svar bara i .dg-expected (syns
//               först med knappen "Visa rätt svar"). Rätt och fel visas med symboler (✓ och ✗), aldrig bara med färg.
// choiceFacit   facit som rader, för en skärm som hoppades över.

import { drawFigure } from "./figures.js";
import { el } from "./dom.js";

// index (alternativets plats i listan) ger figuren dess namn för skärmläsare: "Figur 1", "Figur 2" …
export function itemContent(item, draw, index) {
  if (item.figure !== undefined) return drawFigure(item.figure, { label: index === undefined ? "Figur" : `Figur ${index + 1}` }).el;
  return draw(item.markup, "span");
}

// ---------- SKÄRMEN ----------

export function buildChoice(screen, root, draw) {
  const single = screen.kind === "choose";
  const options = single ? screen.options : screen.items;
  const selected = new Set();

  const group = el("div", `dg-tiles dg-tiles-${screen.kind}`);
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", "Alternativ"); // samma för choose och pick: inget om hur många som ska väljas

  const tiles = options.map((option, i) => {
    const node = el("button", "dg-tile");
    node.type = "button";
    node.setAttribute("aria-pressed", "false");
    node.append(itemContent(option, draw, i));
    node.addEventListener("click", () => {
      const was = selected.has(option.id);
      // Ett val (choose) har ett alternativ i taget; ett nytt tryck på det valda tar bort valet.
      if (single) selected.clear();
      if (was) selected.delete(option.id);
      else selected.add(option.id);
      paint();
    });
    group.append(node);
    return { id: option.id, node };
  });

  function paint() {
    for (const { id, node } of tiles) node.setAttribute("aria-pressed", String(selected.has(id)));
  }

  root.append(group);

  const read = single
    ? () => ({ choice: options.find((o) => selected.has(o.id))?.id ?? "" })
    : () => Object.fromEntries(options.map((o) => [o.id, selected.has(o.id) ? "1" : ""]));

  // Tomt är ett svar här (fel i choose, "Nej" i pick): bara Hoppa över hoppar över skärmen.
  return { read, focusFirst: () => tiles[0]?.node.focus(), keepBlank: true };
}

// ---------- RESULTATSKÄRMEN ----------

const line = (label, ...nodes) => {
  const p = el("p", "dg-detail-line");
  p.append(el("span", "dg-detail-label", `${label} `), ...nodes);
  return p;
};

// Innehållet i ett alternativ som en markering i resultatet: elevens val med ram när det är fel (som en ruta).
function chosenCell(item, draw, wrong, index) {
  const cell = el("span", `dg-answer dg-choice-cell${wrong ? " is-wrong" : ""}`);
  cell.append(item ? itemContent(item, draw, index) : "–");
  return cell;
}

const expectedSpan = (...nodes) => {
  const span = el("span", "dg-expected");
  span.append(" (rätt: ", ...nodes, ")");
  return span;
};

// "Ja" eller "Nej" för ett alternativ i pick.
const yesNo = (on) => (on ? "Ja" : "Nej");

// Ett alternativ i pick: symbolen, innehållet och elevens Ja eller Nej. Rätt svar står i .dg-expected.
function pickLine(item, index, selected, shouldBe, draw) {
  const right = selected === shouldBe;
  const p = el("p", "dg-pick-line");
  const mark = el("span", "dg-pick-mark", right ? "✓" : "✗");
  mark.setAttribute("aria-label", right ? "Rätt" : "Fel");
  p.append(mark, " ", chosenCell(item, draw, !right, index), el("span", "dg-pick-answer", ` ${yesNo(selected)}`));
  if (!right) p.append(expectedSpan(yesNo(shouldBe)));
  return p;
}

export function choiceDetail(screen, row, draw) {
  const nodes = [];
  if (screen.text) nodes.push(el("p", "dg-word-text", screen.text));
  if (screen.kind === "choose") {
    const chosen = screen.options.find((o) => o.id === row.answers?.choice);
    const wrong = row.mark !== "right";
    const indexOf = (item) => screen.options.indexOf(item);
    const shown = line("Valde:", chosenCell(chosen, draw, wrong, indexOf(chosen)));
    const facit = screen.options.find((o) => o.id === screen.accept);
    if (wrong) shown.append(expectedSpan(chosenCell(facit, draw, false, indexOf(facit))));
    nodes.push(shown);
  } else {
    const accepted = new Set(screen.accept);
    screen.items.forEach((item, i) => nodes.push(pickLine(item, i, row.answers?.[item.id] === "1", accepted.has(item.id), draw)));
  }
  return nodes;
}

export function choiceFacit(screen, draw) {
  const nodes = [];
  if (screen.text) nodes.push(el("p", "dg-word-text", screen.text));
  if (screen.kind === "choose") {
    const facit = screen.options.find((o) => o.id === screen.accept);
    nodes.push(line("Rätt:", chosenCell(facit, draw, false, screen.options.indexOf(facit))));
  } else {
    const accepted = new Set(screen.accept);
    for (const item of screen.items) {
      const p = el("p", "dg-pick-line");
      p.append(chosenCell(item, draw, false, screen.items.indexOf(item)), el("span", "dg-pick-answer", ` ${yesNo(accepted.has(item.id))}`));
      nodes.push(p);
    }
  }
  return nodes;
}
