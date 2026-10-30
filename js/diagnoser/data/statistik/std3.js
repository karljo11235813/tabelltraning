// DIAGNOS STd3, Stolpdiagram.
// Elevbladet är s. 52–55, lärarsidan s. 51 och facit står på s. 51 i 6_Statistik.pdf.
//
// 16 kolumner på resultatblanketten (s. 56): 1a–1e, 2a–2e, 3a–3d, 4a och 4b, en skärm och en kolumn var. Varje
// nummers inledande text, diagram och tabell står på alla dess skärmar.
// 1 och 2 är stolpdiagram att läsa av (diagram, mätta ur PDF:en): 1 veckopeng 10, 20, 30, 40 kr med 2, 4, 8, 4 barn;
//   2 åldrarna 10–13 år med 8, 15, 18, 9 barn (siffror var 5 och streck var 1, som på bladet).
// 2e: facit "11,5 år", men stolparna ger medelvärdet 578/50 = 11,56. Rutan godtar allt från 11,5 till 11,6 (range):
//   11,56, avrundat 11,6 och facits 11,5.
// 3a och 4b ritar eleven (kind "bars", style "sticks"). 4b har en kolumn per poäng 1–11 som på bladet, med 0 där ingen
//   fick den poängen.
// 3b–d visar frekvenstabellen ovanför raderna, som 3a.
// 4a: bladets tabell har åtta tomma rader och facit har en rad per poäng 4–11. Eleven skriver både poängen och
//   frekvensen, och en kolumn (points "one"). Raderna rättas en och en, så texten har fått "Skriv antalet poäng i
//   storleksordning, med det lägsta först."
//
// Tid: lärarsidan säger "ca 8–10 minuter att göra hela diagnosen" och "avbryta diagnosen efter ca 20 minuter".

const POCKET_MONEY = {
  type: "bar",
  style: "sticks",
  categories: ["10", "20", "30", "40"],
  x: { label: "Kr" },
  y: { max: 8, step: 1, label: "Antal barn" },
  values: [2, 4, 8, 4],
};
const INTRO_1 = "Några elever fick frågan hur mycket de fick i veckopeng. Resultatet visas i diagrammet nedan.";

const AGES = {
  type: "bar",
  style: "sticks",
  categories: ["10", "11", "12", "13"],
  x: { label: "År" },
  y: { max: 25, step: 5, minor: 1 },
  values: [8, 15, 18, 9],
};
const INTRO_2 = "Diagrammet visar åldern på de barn som är på ett seglingsläger.";

const DARTS = {
  head: ["Antal poäng", "Frekvens, f"],
  rows: [["1", "2"], ["2", "4"], ["3", "1"], ["4", "2"], ["5", "3"]],
};
const INTRO_3 = "Sofia kastar pilar på en piltavla. Frekvenstabellen visar hur många gånger hon får 1, 2, 3, 4 eller 5 poäng.";

const INTRO_4 = "Eleverna i en 5:e klass hade följande antal poäng på ett matematikprov: 5, 6, 11, 9, 6, 10, 4, 9, 8, 9, 7, 5, 11, 6, 7, 9, 9, 10, 7.";

// 4a: poängen 4–11 och deras frekvenser, en rad per poäng.
const SCORES = [
  ["4", "1"],
  ["5", "2"],
  ["6", "3"],
  ["7", "3"],
  ["8", "1"],
  ["9", "5"],
  ["10", "2"],
  ["11", "2"],
];

export default {
  code: "STd3",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Stolpdiagram",
  time: { min: 8, max: 10, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: `${INTRO_1} Hur många barn får 10 kronor i veckan?`, points: "each", diagram: POCKET_MONEY, rows: ["Svar: [a]"], boxes: { a: { accept: ["2"] } } },
    {
      label: "1b",
      text: `${INTRO_1} Vilken veckopeng är vanligast bland dessa elever?`,
      points: "each",
      diagram: POCKET_MONEY,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["30"] } },
    },
    { label: "1c", text: `${INTRO_1} Hur många barn svarade på frågan?`, points: "each", diagram: POCKET_MONEY, rows: ["Svar: [a]"], boxes: { a: { accept: ["18"] } } },
    {
      label: "1d",
      text: `${INTRO_1} Hur många barn får 20 kronor eller mer i veckan?`,
      points: "each",
      diagram: POCKET_MONEY,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["16"] } },
    },
    {
      label: "1e",
      text: `${INTRO_1} Hur mycket pengar får dessa elever sammanlagt varje vecka i veckopeng?`,
      points: "each",
      diagram: POCKET_MONEY,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["500"] } },
    },
    { label: "2a", text: `${INTRO_2} Hur gamla är de yngsta barnen som är med på lägret?`, points: "each", diagram: AGES, rows: ["Svar: [a]"], boxes: { a: { accept: ["10"] } } },
    { label: "2b", text: `${INTRO_2} Hur många är de barn som är äldst?`, points: "each", diagram: AGES, rows: ["Svar: [a]"], boxes: { a: { accept: ["9"] } } },
    { label: "2c", text: `${INTRO_2} Hur många barn är med på lägret?`, points: "each", diagram: AGES, rows: ["Svar: [a]"], boxes: { a: { accept: ["50"] } } },
    { label: "2d", text: `${INTRO_2} Bestäm medianvärdet.`, points: "each", diagram: AGES, rows: ["Svar: [a]"], boxes: { a: { accept: ["12"] } } },
    {
      label: "2e",
      text: `${INTRO_2} Bestäm medelvärdet.`,
      points: "each",
      diagram: AGES,
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["11,56", "11,6", "11,5"], range: { ge: "11,5", le: "11,6" } } },
    },
    {
      label: "3a",
      kind: "bars",
      style: "sticks",
      text: `${INTRO_3} Rita ett stolpdiagram.`,
      table: DARTS,
      categories: ["1", "2", "3", "4", "5"],
      x: { label: "Poäng" },
      y: { min: 0, max: 6, step: 1, label: "Frekvens" },
      values: [2, 4, 1, 2, 3],
    },
    { label: "3b", text: `${INTRO_3} Hur många pilar kastade Sofia?`, points: "each", table: DARTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["12"] } } },
    { label: "3c", text: `${INTRO_3} Bestäm medianvärdet.`, points: "each", table: DARTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["2,5"] } } },
    { label: "3d", text: `${INTRO_3} Bestäm medelvärdet.`, points: "each", table: DARTS, rows: ["Svar: [a]"], boxes: { a: { accept: ["3"] } } },
    {
      label: "4a",
      text: `${INTRO_4} För in värdena i en frekvenstabell. Skriv antalet poäng i storleksordning, med det lägsta först.`,
      points: "one",
      table: { head: ["Antal poäng", "Frekvens, f"], rows: SCORES.map((_, i) => [`[p${i + 1}]`, `[f${i + 1}]`]) },
      boxes: Object.fromEntries(SCORES.flatMap(([p, f], i) => [[`p${i + 1}`, { accept: [p] }], [`f${i + 1}`, { accept: [f] }]])),
    },
    {
      label: "4b",
      kind: "bars",
      style: "sticks",
      text: `${INTRO_4} Rita ett stolpdiagram över resultaten.`,
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      x: { label: "Poäng" },
      y: { min: 0, max: 5, step: 1, label: "Frekvens" },
      values: [0, 0, 0, 1, 2, 3, 3, 1, 5, 2, 2],
    },
  ],
};
