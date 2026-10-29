// DIAGNOS TAg3, Räta linjens ekvation.
// Elevbladet är s. 79–80, lärarsidan s. 78 och facit står på s. 78 i 3_Talmonster.pdf.
//
// 4 kolumner på resultatblanketten (s. 81): 1–4, en skärm och en kolumn per uppgift. Rutnäten har fyra kvadranter,
// −4 till 4 på båda axlarna, som på bladet. Lärarsidan säger "cirka 10 minuter" (min = max) och avbryt efter cirka 20.
//
// 1–2: eleven ritar grafen (kind "line") genom att klicka på två punkter på den. 1 är y = x − 2 (genom (0, −2) och
// (2, 0)), 2 är 3x + y − 1 = 0, alltså y = −3x + 1 (genom (0, 1) och (1, −2)). Lärarsidans råd om en värdetabell gäller
// lösbladet.
//
// 3–4: eleven tecknar ekvationen för den ritade linjen (3 genom (2, 0) och (0, −4), 4 genom (0, 2) och (2, 0)). Facit
// y = 2x − 4 och y = −x + 2; rutan rättas som algebra (algebra: "equivalent"), så "y =" får stå eller saknas och varje
// lika uttryck godtas (2x − 4, −4 + 2x).

const GRID4 = { x: { min: -4, max: 4, step: 1 }, y: { min: -4, max: 4, step: 1 } };

export default {
  code: "TAg3",
  area: "Talmönster och algebra",
  sub: "TAg Koordinatsystem och grafer",
  title: "Räta linjens ekvation",
  time: { min: 10, max: 10, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { kind: "line", label: "1", text: "Rita grafen till y = x − 2.", chart: GRID4, through: [[0, -2], [2, 0]] },
    { kind: "line", label: "2", text: "Rita grafen till 3x + y − 1 = 0.", chart: GRID4, through: [[0, 1], [1, -2]] },
    {
      label: "3",
      text: "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      chart: { ...GRID4, lines: [[[2, 0], [0, -4]]] },
      rows: ["[a]"],
      points: "each",
      boxes: { a: { accept: ["y = 2x − 4"], algebra: "equivalent" } },
    },
    {
      label: "4",
      text: "Teckna ekvationen för linjen i figuren på formen y = kx + m.",
      chart: { ...GRID4, lines: [[[0, 2], [2, 0]]] },
      rows: ["[a]"],
      points: "each",
      boxes: { a: { accept: ["y = −x + 2"], algebra: "equivalent" } },
    },
  ],
};
