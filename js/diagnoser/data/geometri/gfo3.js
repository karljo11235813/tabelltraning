// DIAGNOS GFo3, Plana figurer. Elevbladet är s. 18–19, lärarsidan och facit s. 17 i 5_Geometri.pdf.
// 1a–1e är mängdsvar med figurernas nummer (set). 3 (sätt ett x på de parallella sidorna) är ett flerval med sidorna som
// alternativ. 2 och 4 (rita diameter, radie och diagonaler) görs på papper.
// Facit: 1a 1, 3, 6; 1b 2, 8; 1c 1, 6; 1d 1, 4, 6; 1e 1, 3, 4, 5, 6; 3 den övre och den undre sidan.
import { sheet } from "./sheet.js";

const FIGURES = [sheet("gfo3-1", 527, "Åtta numrerade figurer, fyrhörningar och trianglar i olika lägen.")];
const ask = (label, what, answer, items) => ({
  label,
  text: `Vilka av figurerna är ${what}? Skriv numren.`,
  points: "each",
  images: FIGURES,
  rows: ["Svar: [a]"],
  boxes: { a: { accept: [answer], set: items.map((n) => [n]) } },
});

export default {
  code: "GFo3",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Plana figurer",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    ask("1a", "rektanglar", "1, 3 och 6", ["1", "3", "6"]),
    ask("1b", "trianglar", "2 och 8", ["2", "8"]),
    ask("1c", "kvadrater", "1 och 6", ["1", "6"]),
    ask("1d", "romber", "1, 4 och 6", ["1", "4", "6"]),
    ask("1e", "parallellogrammer", "1, 3, 4, 5 och 6", ["1", "3", "4", "5", "6"]),
    {
      kind: "paper",
      label: "2",
      text: "Rita in en diameter i cirkel a och en radie i cirkel b.",
      images: [sheet("gfo3-2", 443, "Två cirklar, a och b, med medelpunkten utmärkt.")],
    },
    {
      kind: "pick",
      label: "3",
      text: "I den här figuren är två sidor parallella. Markera de två sidorna.",
      images: [sheet("gfo3-3", 181, "En fyrhörning som är bredare upptill än nedtill.")],
      items: [
        { id: "a", markup: "den övre sidan" },
        { id: "b", markup: "den undre sidan" },
        { id: "c", markup: "den vänstra sidan" },
        { id: "d", markup: "den högra sidan" },
      ],
      accept: ["a", "b"],
      points: "one",
    },
    {
      kind: "paper",
      label: "4",
      text: "Rita alla diagonaler du kan i de här figurerna.",
      images: [sheet("gfo3-4", 552, "Tre figurer: a) en fyrhörning med två parallella sidor, b) en femhörning, c) en triangel.")],
    },
  ],
};
