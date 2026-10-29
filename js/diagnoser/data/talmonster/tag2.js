// DIAGNOS TAg2, Räta linjen.
// Elevbladet är s. 76, lärarsidan s. 75 och facit står på s. 75 i 3_Talmonster.pdf.
//
// 8 kolumner på resultatblanketten (s. 77): 1a–d och 2a–d, en skärm och en kolumn per etikett. Rutnäten har fyra
// kvadranter, −7 till 7 på båda axlarna, som på bladet.
//
// 1a–d läser av linjen y = 2x − 3 som är ritad (genom (0, −3) och (2, 1)); rutan står efter "y =" eller "x =" som
// bladets "Svar: för y = ___". Bladets 1d saknar frågetecken; det är tillagt.
//
// 2a–d: på bladet ritar eleven fyra linjer i samma koordinatsystem. Här är varje linje en egen skärm (kind "line"):
// eleven klickar på två punkter på linjen, vilka som helst.

const GRID7 = { x: { min: -7, max: 7, step: 1 }, y: { min: -7, max: 7, step: 1 } };
const GRAPH = { ...GRID7, lines: [[[0, -3], [2, 1]]] };

const read = (label, text, row, accept) => ({ label, text, chart: GRAPH, rows: [row], points: "each", boxes: { a: { accept: [accept] } } });
const draw = (label, p, q, a, b) => ({
  kind: "line",
  label,
  text: `Rita en rät linje som går genom punkterna ${p} och ${q}.`,
  chart: GRID7,
  through: [a, b],
});

export default {
  code: "TAg2",
  area: "Talmönster och algebra",
  sub: "TAg Koordinatsystem och grafer",
  title: "Räta linjen",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  variables: "xy",
  notes: [],
  example: null,
  screens: [
    read("1a", "Bestäm värdet på y om x = 4.", "y = [a]", "5"),
    read("1b", "Bestäm värdet på y om x = −2.", "y = [a]", "−7"),
    read("1c", "För vilket värde på x är y = 3?", "x = [a]", "3"),
    read("1d", "För vilket värde på x är y = −5?", "x = [a]", "−1"),
    draw("2a", "(1, 1)", "(6, 3)", [1, 1], [6, 3]),
    draw("2b", "(−4, 1)", "(2, −1)", [-4, 1], [2, -1]),
    draw("2c", "(0, 0)", "(−2, −6)", [0, 0], [-2, -6]),
    draw("2d", "(3, 2)", "(−3, 2)", [3, 2], [-3, 2]),
  ],
};
