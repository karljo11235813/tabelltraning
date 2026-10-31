// DIAGNOS GFo1, Grundläggande symmetri. Elevbladet är s. 10, lärarsidan och facit s. 9 i 5_Geometri.pdf.
// 1 och 3 är flerval där varje alternativ är en kolumn (1a–1d, 3a–3e). 2 och 4 (rita symmetrilinjer, rita hela figuren)
// görs på papper och visas för läraren. Facit: 1 a, c, d; 3 A, H, M.
import { sheet, letters } from "./sheet.js";

export default {
  code: "GFo1",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Grundläggande symmetri",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "pick",
      label: "1",
      text: "Markera de figurer som är symmetriska.",
      images: [sheet("gfo1-1", 569, "Fyra figurer: a) ett träd, b) bokstaven S, c) ett kuvert, d) en femuddig stjärna.")],
      items: letters(["a", "b", "c", "d"]),
      accept: ["a", "c", "d"],
      points: "each",
    },
    {
      kind: "paper",
      label: "2",
      text: "Rita in alla symmetrilinjer som finns i de här figurerna.",
      images: [sheet("gfo1-2", 521, "Tre figurer: a) en rektangel, b) en triangel, c) en kvadrat som står på ett hörn.")],
    },
    {
      kind: "pick",
      label: "3",
      text: "Markera de bokstäver som är symmetriska.",
      items: [
        { id: "a", markup: "A" },
        { id: "b", markup: "H" },
        { id: "c", markup: "F" },
        { id: "d", markup: "M" },
        { id: "e", markup: "N" },
      ],
      accept: ["a", "b", "d"],
      points: "each",
    },
    {
      kind: "paper",
      label: "4",
      text: "Det vänstra pappret är vikt längs symmetrilinjen. Rita hur hela figuren ser ut.",
      images: [sheet("gfo1-4", 484, "Till vänster ett vikt papper med en halv figur, till höger en ruta delad på mitten där hela figuren ska ritas.")],
    },
  ],
};
