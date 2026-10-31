// Svarsblocket i en övningsuppgift (Öva): domslutet med anteckningen om felet, facit och lösningen steg för steg. Vyn
// bestämmer var blocket står och när det syns; här byggs bara innehållet.
//
// renderAnswer     svarsblocket.
// renderPlotReveal uppgiftens eget rutnät i en plot när svaret visas: elevens punkter fyllda och facits som streckade ringar.
//
// Facit under etiketten Svar: beror på uppgiftens slag. Det som uppgiften redan visar (grafen att läsa av, figuren, texten)
// står inte om här.
//   rader         raderna med rutorna ifyllda; "Svar: 40 kr" i en textuppgift blir etiketten Svar: och "40 kr", så att enheten
//                 står efter talet
//   tabell        tabellen med rutorna ifyllda, och raderna efter den om det finns några
//   tallinje      bokstävernas värden (och linjen med bokstäverna för placera)
//   plot          de rätta punkterna som text, "(1; 12), (2; 24)" (rutnätet med dem ritas i uppgiften själv, renderPlotReveal)
//   pick          alla alternativen med Ja eller Nej (choiceFacit)

import { el } from "../dom.js";
import { choiceFacit } from "../choice.js";
import { chartStage, parsePoints, decimalText } from "../graph.js";
import { drawMarkup, prettyAnswer, renderFilledRow, renderFilledTable, renderLineMarks } from "../render.js";
import { checkTask, verdictText, answerFill, lineValuesText } from "./check.js";

// Raden i svaret: en textuppgift har raden "Svar: [a] kr", och etiketten Svar: står redan före facit, så ordet tas bort här.
// Enheten står kvar efter talet ("8 dl").
const withoutLabel = (row) => row.replace(/^\s*Svar:\s*/, "");

// Punkterna som text med decimalkomma och semikolon emellan: (0,5; 12).
const pointText = (value) => prettyAnswer(String(value).replace(".", ","));
const pointsLine = (points) => points.map(([x, y]) => `(${pointText(x)}; ${pointText(y)})`).join(", ");

// Uppgiftens eget rutnät efter svaret: elevens punkter fyllda och facits som streckade ringar (.dg-ghost, som på resultatskärmen
// men synliga här). Ett rutnät som inte går att sätta ut punkter i; vyn byter ut det som eleven använde mot det här.
export function renderPlotReveal(task, answers) {
  const given = parsePoints(answers?.points).map(({ x, y }) => [decimalText(x, { raw: true }), decimalText(y, { raw: true })]);
  const stage = chartStage(task.chart, { points: given, ghost: task.points, label: "Dina punkter (fyllda) och de rätta (streckade ringar)" });
  stage.classList.add("dg-plot-revealed");
  return stage;
}

function keyBlock(diagnosis, task) {
  const key = el("div", "dg-practice-key");
  key.append(el("span", "dg-practice-key-label", "Svar:"));
  if (task.kind === "place") key.append(renderLineMarks(task.line, task.letters), el("p", null, lineValuesText(task.letters)));
  else if (task.kind === "read") key.append(el("p", null, lineValuesText(task.marks)));
  else if (task.kind === "plot") key.append(el("p", null, pointsLine(task.points)));
  else if (task.kind === "pick") {
    // Uppgiftens text står redan ovanför: bara alternativen med Ja och Nej.
    const items = el("div", "dg-practice-key-items");
    items.append(...choiceFacit({ ...task, text: undefined }, drawMarkup));
    key.append(items);
  } else {
    const fill = answerFill(task);
    const variables = diagnosis.variables ?? "";
    if (task.table) key.append(renderFilledTable(task.table, fill, variables));
    for (const row of task.rows ?? []) if (row.includes("[")) key.append(renderFilledRow(withoutLabel(row), fill, variables));
  }
  return key;
}

// Lösningen: en text per { text }, en rad matematik per { math }.
function solutionBlock(task) {
  const solution = el("div", "dg-practice-solution");
  for (const step of task.solution) solution.append(step.math !== undefined ? renderFilledRow(step.math, {}, "") : el("p", "dg-practice-text", step.text));
  return solution;
}

// answers är det eleven skrev ({} när inget är skrivet: då visas facit och lösningen utan domslut).
export function renderAnswer({ diagnosis, part, task, answers }) {
  const body = el("div", "dg-practice-answer-body");
  const result = checkTask(diagnosis, part, task, answers);
  const verdict = verdictText(task, result, answers);
  if (verdict !== null) body.append(el("p", `dg-practice-verdict ${result.verdict === "right" ? "is-right" : "is-wrong"}`, verdict));
  if (result.note !== null) body.append(el("p", "dg-practice-note", result.note));
  body.append(keyBlock(diagnosis, task), solutionBlock(task));
  return body;
}
