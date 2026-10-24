// Ritar byggstenarna från pieces.js: rader, staplade bråk, rutor att fylla i och bilder.
import { renderPicture } from "../representationer/pictures.js";
import { fill } from "./pieces.js";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function numberInput(label, className = "") {
  const node = document.createElement("input");
  node.type = "text";
  node.inputMode = "numeric";
  node.autocomplete = "off";
  node.spellcheck = false;
  node.className = `bt-input ${className}`.trim();
  node.setAttribute("aria-label", label);
  return node;
}

function fractionInputs() {
  const top = numberInput("Täljare", "bt-input-top");
  const bottom = numberInput("Nämnare");
  const node = el("span", "bt-frac-input");
  node.append(top, el("span", "bt-frac-line"), bottom);
  return { node, top, bottom };
}

function control(node, inputs, read) {
  node.classList.add("bt-box");
  return { el: node, inputs, read, setWrong: (on) => node.classList.toggle("is-wrong", on) };
}

// En ruta att fylla i. inputs är fälten och knapparna i tabbordning.
function makeControl(b) {
  if (b.kind === "int") {
    const input = numberInput("Svar");
    return control(input, [input], () => input.value);
  }
  if (b.kind === "frac" || b.kind === "brakform") {
    const f = fractionInputs();
    return control(f.node, [f.top, f.bottom], () => ({ num: f.top.value, den: f.bottom.value }));
  }
  if (b.kind === "enklaste") {
    const whole = numberInput("Heltal", "bt-input-whole");
    const f = fractionInputs();
    const node = el("span", "bt-mixed-input");
    node.append(whole, f.node);
    return control(node, [whole, f.top, f.bottom], () => ({ whole: whole.value, num: f.top.value, den: f.bottom.value }));
  }
  if (b.kind === "symbol") {
    const node = el("span", "bt-symbol");
    node.setAttribute("role", "group");
    node.setAttribute("aria-label", "Välj tecken");
    let chosen = null;
    const buttons = ["<", "=", ">"].map((s) => {
      const button = el("button", "bt-symbol-btn", s);
      button.type = "button";
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        chosen = s;
        for (const other of buttons) other.setAttribute("aria-pressed", String(other === button));
      });
      return button;
    });
    node.append(...buttons);
    return control(node, buttons, () => chosen);
  }
  if (b.kind === "shade") {
    const picture = renderPicture(b.picture, { interactive: true });
    const clear = el("button", "bt-small-btn", "Rensa");
    clear.type = "button";
    clear.addEventListener("click", () => picture.clear());
    const node = el("span", "bt-shade");
    node.append(picture.el, clear);
    return control(node, [clear], () => picture.count());
  }
  throw new Error(`Okänd ruta: ${b.kind}`);
}

function renderPiece(p, ctx) {
  if (typeof p === "number") return el("span", "bt-num", String(p));
  switch (p.t) {
    case "text":
      return el("span", "bt-text", p.s);
    case "num":
      return el("span", "bt-num", String(p.n));
    case "op":
      return el("span", "bt-op", p.o);
    case "frac": {
      const node = el("span", "bt-frac");
      const top = el("span", "bt-frac-top");
      const bottom = el("span", "bt-frac-bottom");
      top.append(renderPiece(p.top, ctx));
      bottom.append(renderPiece(p.bottom, ctx));
      node.append(top, bottom);
      return node;
    }
    case "mixed": {
      const node = el("span", "bt-mixed");
      node.append(renderPiece(p.whole, ctx), renderPiece({ t: "frac", top: p.top, bottom: p.bottom }, ctx));
      return node;
    }
    case "pic":
      return renderPicture(p.picture, { shaded: p.picture.shaded }).el;
    case "box": {
      const c = makeControl(ctx.boxes[p.id]);
      ctx.controls[p.id] = c;
      return c.el;
    }
    case "filled": {
      const node = el("span", "bt-filled");
      node.append(renderPiece(p.piece, ctx));
      return node;
    }
    default:
      throw new Error(`Okänd byggsten: ${p.t}`);
  }
}

// En rad delas i led vid =, så att den bryts före ett likhetstecken på smala skärmar.
function renderRow(row, ctx) {
  const line = el("div", "bt-row");
  if (row.some((p) => p.t === "pic")) line.classList.add("bt-row-pictures");
  let seg = el("span", "bt-seg");
  for (const p of row) {
    if (p.t === "op" && p.o === "=" && seg.childNodes.length > 0) {
      line.append(seg);
      seg = el("span", "bt-seg");
    }
    seg.append(renderPiece(p, ctx));
  }
  if (seg.childNodes.length > 0) line.append(seg);
  return line;
}

function renderRows(rows, boxes, className) {
  const ctx = { boxes, controls: {} };
  const node = el("div", className);
  for (const row of rows) node.append(renderRow(row, ctx));
  return { el: node, controls: ctx.controls };
}

// Första textfältet i frågan, eller null. Knappar som Rensa får aldrig fokus från början:
// då skulle Enter efter färgningen klicka på Rensa i stället för att svara.
export function firstField(controls) {
  for (const c of controls) for (const i of c.inputs) if (i.tagName === "INPUT") return i;
  return null;
}

// Vart Enter i ett fält flyttar fokus, eller null för att skicka in svaret.
// Heltalsrutan → tom täljare. Täljare med ett tal → tom nämnare. En helt tom bråkdel stänger rutan.
// Sedan till nästa ruta om den är helt tom.
export function nextFocus(controls, current) {
  const owner = controls.findIndex((c) => c.inputs.includes(current));
  if (owner < 0) return null;
  const isEmpty = (i) => i.value.trim() === "";
  const inputs = controls[owner].inputs;
  const after = inputs[inputs.indexOf(current) + 1];
  if (current.classList.contains("bt-input-whole") && after && isEmpty(after)) return after;
  if (current.classList.contains("bt-input-top") && !isEmpty(current) && after && isEmpty(after)) return after;
  const fields = controls[owner + 1] ? controls[owner + 1].inputs.filter((i) => i.tagName === "INPUT") : [];
  return fields.length > 0 && fields.every(isEmpty) ? fields[0] : null;
}

// Frågan med tomma rutor.
export function renderQuestion(question) {
  return renderRows(question.rows, question.boxes, "bt-rows");
}

// Stegen och sedan frågan med de rätta svaren ifyllda.
export function renderSolution(question) {
  const node = el("div", "bt-solution-body");
  const list = el("ol", "bt-steps");
  for (const step of question.steps) {
    const item = el("li", "bt-step");
    if (step.text) item.append(el("p", "bt-step-text", step.text));
    if (step.row) item.append(renderRows([step.row], {}, "bt-rows bt-rows-step").el);
    list.append(item);
  }
  const filled = renderRows(fill(question.rows, question.boxes), question.boxes, "bt-rows bt-rows-filled").el;
  node.append(list, el("div", "bt-answer-label", "Svar"), filled);
  return node;
}
