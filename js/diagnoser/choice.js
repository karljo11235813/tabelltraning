// Valskärmar: choose (ett alternativ) och pick (markera allt som stämmer), och deras plats på resultatskärmen.
// Matematiken i alternativen ritas av radritaren i render.js, som skickas in som draw(markup, tag): då ritas
// KaTeX, eller reservritningen utan KaTeX, precis som i en rad. Modulen rör inte `document` när den laddas.
//
// itemContent   innehållet i ett alternativ (en bricka): markup ritas som en rad, en figure ritas av figures.js
//               (med den skuggning figuren själv har).
// buildChoice   skärmens bricka; ger { read, focusFirst, keepBlank }. Brickorna har aria-pressed och skärmen säger
//               aldrig hur många som ska väljas. Svaren: choose { choice: id | "" }, pick { <id>: "1" | "" }.
// choiceDetail  det som står under raden på resultatskärmen: elevens val, med rätt svar bara i .dg-expected (visas
//               från början, och knappen på resultatskärmen döljer dem). Ett pick är en tabell med en kolumn för
//               varje, se pickTable.
// choiceFacit   facit som rader, för Övas svar.
// choiceSkipped facit för en skärm som hoppades över på resultatskärmen.
// setTable      ett mängdsvar (flera svar i en ruta) i samma tabell som ett pick.

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

// En kryssruta i tabellen: ikryssad eller tom, med Ja eller Nej för skärmläsare under kolumnens rubrik.
function pickBox(on) {
  const box = el("span", `dg-pick-box${on ? " is-on" : ""}`);
  box.setAttribute("role", "img");
  box.setAttribute("aria-label", yesNo(on));
  return box;
}

function pickCell(on, className) {
  const cell = el("td", className);
  cell.append(pickBox(on));
  return cell;
}

function pickHead(text, className) {
  const head = el("th", `dg-pick-head${className ? ` ${className}` : ""}`, text);
  head.setAttribute("scope", "col");
  return head;
}

// Tabellen på resultatskärmen: en kolumn för det eleven svarade och en för facit. En rad är rätt (grön) när kolumnerna
// stämmer, också för ett alternativ som rätteligen inte valdes, och annars fel (röd, med ram så att färgen inte bär ensam),
// precis som i markPick. Färgerna syns bara tillsammans med facit. Alternativen får inget ✓ eller ✗: det läses som ett
// omdöme om alternativet, så att det enda rätta uttrycket får ett ✗ om eleven inte valde det.
// rows är [{ content, mine, shouldBe, secret }]. Utan mineHead (en skärm som hoppades över) finns ingen kolumn för eleven
// och inget att rätta. secret: raden avslöjar facit och syns bara tillsammans med det.
function gradedTable(firstHead, mineHead, rows) {
  const table = el("table", "dg-pick-table");
  const headRow = el("tr");
  headRow.append(pickHead(firstHead), ...(mineHead ? [pickHead(mineHead)] : []), pickHead("Rätt svar", "dg-expected"));
  const thead = el("thead");
  thead.append(headRow);
  const tbody = el("tbody");
  for (const { content, mine, shouldBe, secret } of rows) {
    const graded = mineHead ? (mine === shouldBe ? " dg-pick-right" : " dg-pick-wrong") : "";
    const row = el("tr", `dg-pick-row${graded}${secret ? " dg-expected" : ""}`);
    const first = el("td");
    first.append(content);
    row.append(first, ...(mineHead ? [pickCell(mine)] : []), pickCell(shouldBe, "dg-expected"));
    tbody.append(row);
  }
  table.append(thead, tbody);
  return table;
}

// selectedOf(id) saknas för en skärm som hoppades över.
function pickTable(screen, draw, selectedOf) {
  const accepted = new Set(screen.accept);
  const rows = screen.items.map((item, i) => ({ content: chosenCell(item, draw, false, i), mine: selectedOf?.(item.id), shouldBe: accepted.has(item.id) }));
  return gradedTable("Alternativ", selectedOf ? "Du valde" : null, rows);
}

// parts är setBreakdown i mark.js. En sak som eleven missade är facit, så den raden döljs med facit.
export function setTable(parts) {
  const rows = parts.map(({ text, given, expected }) => ({ content: el("span", "dg-answer dg-choice-cell", text), mine: given, shouldBe: expected, secret: expected && !given }));
  return gradedTable("Svar", "Du skrev", rows);
}

// images är bladets bilder, ritade av render.js: alternativen är ofta bara bokstäver i bilden (GFo5 1, GVi1 1a).
const taskNodes = (screen, images) => [...(screen.text ? [el("p", "dg-word-text", screen.text)] : []), ...images];

export function choiceDetail(screen, row, draw, images = []) {
  const nodes = taskNodes(screen, images);
  if (screen.kind === "choose") {
    const chosen = screen.options.find((o) => o.id === row.answers?.choice);
    const wrong = row.mark !== "right";
    const indexOf = (item) => screen.options.indexOf(item);
    const shown = line("Valde:", chosenCell(chosen, draw, wrong, indexOf(chosen)));
    const facit = screen.options.find((o) => o.id === screen.accept);
    if (wrong) shown.append(expectedSpan(chosenCell(facit, draw, false, indexOf(facit))));
    nodes.push(shown);
  } else {
    nodes.push(pickTable(screen, draw, (id) => row.answers?.[id] === "1"));
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

export function choiceSkipped(screen, draw, images = []) {
  const answer = screen.kind === "pick" ? [pickTable(screen, draw)] : choiceFacit({ ...screen, text: undefined }, draw);
  return [...taskNodes(screen, images), ...answer];
}
