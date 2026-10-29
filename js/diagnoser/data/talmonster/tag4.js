// DIAGNOS TAg4, Ekvationssystem, grafisk lösning.
// Elevbladet är s. 83–84, lärarsidan s. 82 och facit står på s. 82 i 3_Talmonster.pdf.
//
// 5 kolumner på resultatblanketten (s. 85): 1–5, en skärm per system och en kolumn per skärm: alla rutor ska vara
// rätta (points: "one"). Rutnäten har fyra kvadranter, −4 till 4 (y till 5 i uppgift 5), som på bladet. Eleven löser
// systemet med hjälp av rutnätet (på bladet ritar eleven graferna i det; här kan eleven inte rita, och rutnätet visas
// att räkna i). 1 och 5 har den ena grafen redan ritad, som på bladet. Bladets klammer runt systemet ritas inte; de två
// ekvationerna står på var sin rad. Lärarsidan säger "cirka 10 minuter" (min = max) och avbryt efter cirka 20.
//
// Tryckfel i facit: 2 är x + y = 0 och x + 2y − 2 = 0, med lösningen x = −2, y = 2. Facit säger "x = 2 och y = −2",
// som inte uppfyller den andra ekvationen (2 − 4 − 2 = −4); det skulle gälla för x + 2y + 2 = 0. Ekvationerna står
// kvar som på bladet och svaret är det som stämmer för dem: x = −2, y = 2.
//
// 4 saknar lösning (två parallella linjer, facit "Lösning saknas"): orden ska stå i x-rutan, och y-rutan får vara tom
// eller ha samma ord.
//
// Tryckfel på bladet: 5 skriver "y = x² – 4 = 0" (två gånger), men den ritade parabeln har sin spets i (0, −2) och
// går genom (−2, 2) och (2, 2), och facit (x = −1, y = −1 eller x = 2, y = 2) passar y = x² − 2. Här står y = x² − 2,
// både i texten och i grafen. 5 har två lösningar, som får skrivas i vilken ordning som helst (pairs).

const GRID4 = { x: { min: -4, max: 4, step: 1 }, y: { min: -4, max: 4, step: 1 } };
const GRID45 = { x: { min: -4, max: 4, step: 1 }, y: { min: -4, max: 5, step: 1 } };

const screen = (label, text, chart, first, second, x, y) => ({
  label,
  text,
  chart,
  rows: [first, second, "x = [a]", "y = [b]"],
  points: "one",
  boxes: { a: { accept: x }, b: { accept: y } },
});

export default {
  code: "TAg4",
  area: "Talmönster och algebra",
  sub: "TAg Koordinatsystem och grafer",
  title: "Ekvationssystem, grafisk lösning",
  time: { min: 10, max: 10, stop: 20 },
  paper: false,
  symbols: false,
  variables: "xy",
  notes: [],
  example: null,
  screens: [
    screen(
      "1",
      "Lös ekvationssystemet grafiskt. Grafen till 2x + 3y − 5 = 0 är redan ritad.",
      { ...GRID4, lines: [[[1, 1], [-2, 3]]] },
      "2x + 3y − 5 = 0",
      "x − y = 0",
      ["1"],
      ["1"],
    ),
    screen("2", "Lös ekvationssystemet grafiskt.", GRID4, "x + y = 0", "x + 2y − 2 = 0", ["−2"], ["2"]),
    screen("3", "Lös ekvationssystemet grafiskt.", GRID4, "2x − y + 1 = 0", "x + y − 4 = 0", ["1"], ["3"]),
    screen("4", "Lös ekvationssystemet grafiskt.", GRID4, "3x − 2y = 1", "y = 1,5x + 2", ["Lösning saknas"], ["Lösning saknas", ""]),
    {
      label: "5",
      text: "Lös ekvationssystemet grafiskt. Grafen till y = x² − 2 är redan ritad.",
      chart: { ...GRID45, curves: [{ expr: "x^2 - 2" }] },
      rows: ["y = x^2 − 2", "y = x", "x = [a]", "y = [b]", "eller", "x = [c]", "y = [d]"],
      points: "one",
      pairs: [["a", "b"], ["c", "d"]],
      boxes: { a: { accept: ["−1"] }, b: { accept: ["−1"] }, c: { accept: ["2"] }, d: { accept: ["2"] } },
    },
  ],
};
