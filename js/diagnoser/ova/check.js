// Rättning av en övningsuppgift (Öva): domslutet, en anteckning om felet och texten som visar vad eleven skrev.
// Allt rättas av markScreen och markBox i mark.js, samma rättning som diagnosen; här läggs bara anteckningarna till.
//
// En uppgift är en diagnosskärm av något av slagen: rader med rutor (också en textuppgift med raden "Svar: [a] kr" och en
// tabell med rutor i cellerna), en tallinje (place, read), punkter att sätta ut (plot) eller ett flerval (pick). Inget skrivet
// ger inget domslut för något av dem: inga rutor ifyllda, inga punkter utsatta, inget alternativ markerat.
//
// checkTask    { verdict: "right" | "wrong" | null, note, right, total }.
// verdictText  "✓ Rätt" eller "✗ Inte rätt." med det eleven skrev (rutor), valde (flerval) eller satte ut (punkter).
// answerFill   facit i rutorna, skrivet som på skärmen.
// lineValuesText  bokstävernas värden på en tallinje som text.

import { markScreen, markBox } from "../mark.js";
import { parsePoints, pointsText, pairKey } from "../graph.js";
import { prettyAnswer } from "../render.js";

const typedIn = (answers) => Object.values(answers ?? {}).some((value) => String(value ?? "").trim() !== "");

// Punkterna som exakta nycklar (pairKey i graph.js): 0,5 och 1/2 är samma punkt. Elevens svar och datans punkter ([[1, 10], …])
// jämförs så.
const pointSet = (raw) => new Set(parsePoints(raw).map(({ x, y }) => pairKey(x, y)));
const sameSet = (a, b) => a.size === b.size && [...a].every((key) => b.has(key));

// Hur många av elevens punkter som är facits, och hur många som är för mycket (varken facits eller de som får saknas).
function plotCounts(task, raw) {
  const given = pointSet(raw);
  const need = pointSet(pointsText(task.points));
  const optional = pointSet(pointsText(task.optional));
  return {
    hit: [...given].filter((key) => need.has(key)).length,
    extra: [...given].filter((key) => !need.has(key) && !optional.has(key)).length,
  };
}

// Är raw rätt värde, i vilken form det än är skrivet? Andra anropet känner igen uttryck som 48·10^3 som rätt värde. units är
// rutans enhetstabell: utan den är "25 %" fel för 25 (procent och promille är aldrig bara utsmyckning), så ett vanligt fel som
// 25 skulle inte kännas igen när eleven skriver enheten, som rutan själv godtar.
function valueRight(accept, raw, units) {
  const box = units === undefined ? { accept } : { accept, units };
  return markBox(box, raw) === "right" || markBox({ ...box, expression: true }, raw) === "right";
}

// Texten till ett fel: formtexten när varje fel ruta har rätt värde i fel form, annars det första vanliga felet
// där varje ruta i felet har just det värdet, annars ingen. Ett flerval och punkter har inga rutor: där är ett vanligt
// fel ett helt svar, { a: "1", b: "", … } (alla alternativ; ett som saknas är omarkerat) respektive { points: "1,10;2,20" }
// (punkterna i vilken ordning och skrivsätt som helst), och det gäller bara när elevens svar är precis det.
function noteFor(part, task, answers, wrong) {
  if (task.kind === "pick") {
    const same = (m) => task.items.every((item) => (m.answers[item.id] === "1") === (answers?.[item.id] === "1"));
    return (task.mistakes ?? []).find(same)?.text ?? null;
  }
  if (task.kind === "plot") {
    const given = pointSet(answers?.points);
    return (task.mistakes ?? []).find((m) => sameSet(pointSet(m.answers.points), given))?.text ?? null;
  }
  if (part.formNote && wrong.length > 0 && wrong.every(({ id }) => task.boxes?.[id] && valueRight(task.boxes[id].accept, answers[id], task.boxes[id].units))) return part.formNote;
  const mistake = (task.mistakes ?? []).find((m) => Object.entries(m.answers).every(([id, value]) => valueRight([value], answers[id], task.boxes?.[id]?.units)));
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

// Radmarkeringen som löpande text: {3|4} blir 3/4, {2|3|4} blir 2 3/4 och √{x} blir √x; en del som inte är ett ensamt tal
// står inom parentes ({a + b|c} blir (a + b)/c). Resten som prettyAnswer (upphöjt, − för bindestreck).
function plainMarkup(markup) {
  const part = (text) => (/^-?[\w,.]+$/.test(text) ? text : `(${text})`);
  let text = String(markup);
  let before;
  do {
    before = text; // det innersta först: ett bråk i ett bråk blir klart efter ett varv till
    text = text
      .replace(/\{([^{}|]*)\|([^{}|]*)\|([^{}|]*)\}/, (_, whole, top, bottom) => `${whole} ${part(top)}/${part(bottom)}`)
      .replace(/\{([^{}|]*)\|([^{}|]*)\}/, (_, top, bottom) => `${part(top)}/${part(bottom)}`)
      .replace(/√\{([^{}|]*)\}/, (_, body) => `√${part(body)}`);
  } while (text !== before);
  return prettyAnswer(text);
}

// Alternativet i ett flerval som text: markeringen, eller "Figur 2" för en figur (som skärmläsaren säger).
const itemText = (item, index) => (item.markup !== undefined ? plainMarkup(item.markup) : `Figur ${index + 1}`);

// "✓ Rätt", eller "✗ Inte rätt." med det eleven skrev; null utan domslut.
export function verdictText(task, result, answers) {
  if (result.verdict === null) return null;
  if (result.verdict === "right") return "✓ Rätt";
  if (task.kind === "pick") {
    const chosen = task.items.map((item, i) => [item, i]).filter(([item]) => answers?.[item.id] === "1").map(([item, i]) => itemText(item, i));
    return `✗ Inte rätt. ${chosen.length === 0 ? "Du valde inget." : `Du valde ${chosen.join(", ")}.`}`;
  }
  if (task.kind === "plot") {
    const { hit, extra } = plotCounts(task, answers?.points);
    const over = extra === 0 ? "" : extra === 1 ? " (en punkt för mycket)" : ` (${extra} punkter för mycket)`;
    return `✗ Inte rätt. ${hit} av ${task.points.length} punkter stämmer${over}.`;
  }
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
