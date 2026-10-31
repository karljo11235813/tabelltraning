// DIAGNOS GFo5, Likformighet, begrepp. Elevbladet är s. 26–27, lärarsidan och facit s. 25 i 5_Geometri.pdf.
// 1, 2, 3, 5 och 6 är flerval med en kolumn var (rätt när de markerade är precis facits). Facit: 1 a, c, d; 2 c, d;
// 3 a, c; 4a 3,5 cm (står inte i facit: D är mittpunkt på AC, så CD = 7 / 2), 4b 60°, 4c 10,5 cm; 5 a, c, e, f;
// 6 a, b, d, e. "Sätt X för" och "Ringa in" skrivs "Markera".
import { sheet, letters } from "./sheet.js";

const statements = (list) => list.map((markup, i) => ({ id: "abcdef"[i], markup }));
const TRIANGLE = [sheet("gfo5-4", 200, "En liksidig triangel ABC med sträckan DE parallell med AB, D på AC och E på BC.")];
const four = (label, row, answer) => ({
  label,
  text: "I den liksidiga triangeln ABC har man ritat en sträcka DE som är parallell med AB och hälften så lång som AB. Sträckan AB är 7 cm.",
  points: "each",
  images: TRIANGLE,
  rows: [row],
  boxes: { a: { accept: [answer] } },
});

export default {
  code: "GFo5",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Likformighet, begrepp",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      kind: "pick",
      label: "1",
      text: "Markera de figurer som är likformiga med den första triangeln.",
      images: [sheet("gfo5-1-ref", 88, "Triangeln att jämföra med."), sheet("gfo5-1", 581, "Fyra trianglar märkta a till d.")],
      items: letters(["a", "b", "c", "d"]),
      accept: ["a", "c", "d"],
      points: "one",
    },
    {
      kind: "pick",
      label: "2",
      text: "Två likformiga plana figurer har alltid … Markera de påståenden som är sanna.",
      items: statements(["samma omkrets", "samma area", "samma vinkelsumma", "lika många hörn"]),
      accept: ["c", "d"],
      points: "one",
    },
    {
      kind: "pick",
      label: "3",
      text: "Tänk dig att romben förstoras i skala 2:1. Markera de påståenden som är sanna.",
      images: [sheet("gfo5-3", 147, "En romb.")],
      items: statements(["Romberna är likformiga.", "Romberna har samma area.", "Romberna har samma vinkelsumma.", "Romberna har samma omkrets."]),
      accept: ["a", "c"],
      points: "one",
    },
    four("4a", "Sträckan CD är [a] cm", "3,5"),
    four("4b", "Vinkeln CDE är [a] grader", "60"),
    four("4c", "Omkretsen av triangeln CDE är [a] cm", "10,5"),
    {
      kind: "pick",
      label: "5",
      text: "Markera de påståenden som är sanna.",
      items: statements([
        "Alla liksidiga trianglar är likformiga.",
        "Alla likbenta trianglar är likformiga.",
        "Alla kvadrater är likformiga.",
        "Alla rektanglar är likformiga.",
        "Alla regelbundna femhörningar är likformiga.",
        "Alla cirklar är likformiga.",
      ]),
      accept: ["a", "c", "e", "f"],
      points: "one",
    },
    {
      kind: "pick",
      label: "6",
      text: "I fyrhörningen ABCD är sidorna AB och DC parallella och AD = BC. Diagonalerna skär varandra i E. Markera de påståenden som är sanna.",
      images: [sheet("gfo5-6", 241, "Fyrhörningen ABCD med diagonalerna AC och BD, som skär varandra i E.")],
      items: statements(["ABE är likformig med CDE.", "AED är likformig med BEC.", "ABE är kongruent med CDE.", "AED är kongruent med BEC.", "Triangeln ABE är likbent."]),
      accept: ["a", "b", "d", "e"],
      points: "one",
    },
  ],
};
