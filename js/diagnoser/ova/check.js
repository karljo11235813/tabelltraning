// Rättning av en övningsuppgift (Öva): domslutet, en anteckning om felet och texten som visar vad eleven skrev.
// Allt rättas av markScreen och markBox i mark.js, samma rättning som diagnosen; här läggs bara anteckningarna till.

import { markScreen, markBox } from "../mark.js";
import { prettyAnswer } from "../render.js";

const typedIn = (answers) => Object.values(answers ?? {}).some((value) => String(value ?? "").trim() !== "");

// Är raw rätt värde, i vilken form det än är skrivet? Andra anropet känner igen uttryck som 48·10^3 som rätt värde.
function valueRight(accept, raw) {
  return markBox({ accept }, raw) === "right" || markBox({ accept, expression: true }, raw) === "right";
}

// Texten till ett fel: formtexten när varje fel ruta har rätt värde i fel form, annars det första vanliga felet
// där varje ruta i felet har just det värdet, annars ingen.
function noteFor(part, task, answers, wrong) {
  if (part.formNote && wrong.length > 0 && wrong.every(({ id }) => task.boxes?.[id] && valueRight(task.boxes[id].accept, answers[id]))) return part.formNote;
  const mistake = (task.mistakes ?? []).find((m) => Object.entries(m.answers).every(([id, value]) => valueRight([value], answers[id])));
  return mistake?.text ?? null;
}

// { verdict: "right" | "wrong" | null, note: string | null, right, total }. Inget skrivet ger inget domslut.
export function checkTask(diagnosis, part, task, answers) {
  const result = markScreen(diagnosis, task, { label: "", answers, skipped: false, ms: 0 });
  if (!typedIn(answers)) return { verdict: null, note: null, right: 0, total: result.total };
  if (result.mark === "right") return { verdict: "right", note: null, right: result.right, total: result.total };
  return { verdict: "wrong", note: noteFor(part, task, answers, result.wrong), right: result.right, total: result.total };
}

// Elevens svar som text: ett blankt svar är ett streck.
const shown = (raw) => (String(raw ?? "").trim() === "" ? "–" : prettyAnswer(String(raw).trim()));

// "✓ Rätt", eller "✗ Inte rätt." med det eleven skrev; null utan domslut.
export function verdictText(task, result, answers) {
  if (result.verdict === null) return null;
  if (result.verdict === "right") return "✓ Rätt";
  if (task.kind === "place") return `✗ Inte rätt. ${result.right} av ${result.total} bokstäver står rätt.`;
  if (task.kind === "read") {
    return `✗ Inte rätt. Du skrev ${Object.keys(task.marks).map((letter) => `${letter} = ${shown(answers[letter])}`).join(", ")}.`;
  }
  return `✗ Inte rätt. Du skrev ${Object.keys(task.boxes).map((id) => shown(answers[id])).join(", ")}.`;
}

// Facit i rutorna, skrivet som på skärmen (typografiskt minus, upphöjt).
export function answerFill(task) {
  return Object.fromEntries(Object.entries(task.boxes ?? {}).map(([id, box]) => [id, prettyAnswer(box.accept[0])]));
}

// Bokstävernas värden på en tallinje som text: "a = −0,7, b = 0,4".
export function lineValuesText(values) {
  return Object.entries(values).map(([letter, value]) => `${letter} = ${value}`).join(", ");
}
