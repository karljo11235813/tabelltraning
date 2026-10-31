// Svarsblocket i en övningsuppgift (Öva): domslutet med anteckningen om felet, facit som rader eller tallinje och
// lösningen steg för steg. Vyn bestämmer var blocket står och när det syns; här byggs bara innehållet.

import { el } from "../dom.js";
import { renderFilledRow, renderLineMarks } from "../render.js";
import { checkTask, verdictText, answerFill, lineValuesText } from "./check.js";

// Facit under etiketten Svar: raderna med rutorna ifyllda, eller tallinjen med bokstäverna och deras värden.
function keyBlock(diagnosis, task) {
  const key = el("div", "dg-practice-key");
  key.append(el("span", "dg-practice-key-label", "Svar:"));
  if (task.kind === "place") key.append(renderLineMarks(task.line, task.letters), el("p", null, lineValuesText(task.letters)));
  else if (task.kind === "read") key.append(el("p", null, lineValuesText(task.marks)));
  else {
    const fill = answerFill(task);
    for (const row of task.rows ?? []) if (row.includes("[")) key.append(renderFilledRow(row, fill, diagnosis.variables ?? ""));
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
