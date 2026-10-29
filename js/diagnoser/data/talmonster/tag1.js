// DIAGNOS TAg1, Koordinatsystem.
// Elevbladet är s. 73, lärarsidan s. 72 och facit står på s. 72 i 3_Talmonster.pdf.
//
// 2 kolumner på resultatblanketten (s. 74): 1 och 2. 1 är en skärm med alla sex punkterna (tolv rutor, x och y för
// A–F) och en kolumn: allt ska vara rätt (points: "one"). 2 är punkter att sätta ut (plot) i ett tomt rutnät, också en
// kolumn: alla sex punkterna och inga andra. Rutnätet har fyra kvadranter, −7 till 7 på båda axlarna, som på bladet.
// Bladet markerar punkterna med ✕; här är de prickar med bokstaven bredvid.

const GRID7 = { x: { min: -7, max: 7, step: 1 }, y: { min: -7, max: 7, step: 1 } };

export default {
  code: "TAg1",
  area: "Talmönster och algebra",
  sub: "TAg Koordinatsystem och grafer",
  title: "Koordinatsystem",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Vilka punkter är markerade i koordinatsystemet?",
      chart: {
        ...GRID7,
        points: [
          { label: "A", at: [5, 2] },
          { label: "B", at: [1, 5] },
          { label: "C", at: [0, 3] },
          { label: "D", at: [5, -3] },
          { label: "E", at: [-5, 4] },
          { label: "F", at: [-3, -4] },
        ],
      },
      rows: ["A = ([a], [b])", "B = ([c], [d])", "C = ([e], [f])", "D = ([g], [h])", "E = ([i], [j])", "F = ([k], [l])"],
      points: "one",
      boxes: {
        a: { accept: ["5"] }, b: { accept: ["2"] },
        c: { accept: ["1"] }, d: { accept: ["5"] },
        e: { accept: ["0"] }, f: { accept: ["3"] },
        g: { accept: ["5"] }, h: { accept: ["−3"] },
        i: { accept: ["−5"] }, j: { accept: ["4"] },
        k: { accept: ["−3"] }, l: { accept: ["−4"] },
      },
    },
    {
      kind: "plot",
      label: "2",
      text: "Rita ut följande punkter i koordinatsystemet: A = (5, 0), B = (2, 4), C = (6, 3), D = (0, −3), E = (−2, 5) och F = (−3, −5). Klicka på skärningarna i rutnätet.",
      chart: GRID7,
      points: [[5, 0], [2, 4], [6, 3], [0, -3], [-2, 5], [-3, -5]],
    },
  ],
};
