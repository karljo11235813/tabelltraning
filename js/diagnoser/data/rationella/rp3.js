// DIAGNOS RP3, Grundläggande procenträkning.
// Elevbladet är s. 64, lärarsidorna s. 63 och facit står på s. 63 i 2_Rationella_tal.pdf.
//
// 12 kolumner på resultatblanketten (s. 65): 1a, 1b, 2a, 2b, 3a, 3b, 4a–c och 5a–c, en skärm och en kolumn var.
//
// Procent (D2): accept är talet i procent ("43") och units läser "43 %", "43 procent", "430 ‰" och "430 promille" som
// rätt, men inte "0,43". Bladet skriver "%" efter rutan i 1, 2 och 4, så "%" står efter rutan i raden.
//
// 3a och 3b har nämnaren tryckt under rutan (bladets egen ledtråd): rutan är täljaren, så svaret kommer i rätt form
// (35/100, inte 7/20; 4/10, inte 2/5). 4a–c är figurer att läsa av. 5 är textuppgifter med bara Svar (enhet ignoreras).

// Figurerna ritas ur datan: pieces är delarna som kan skuggas, shaded de som redan är skuggade och lines extra streck.
const CIRCLE_QUARTER_P = {
  view: [100, 100],
  pieces: [
    { path: "M50 50 L2 50 A48 48 0 0 1 50 2 Z" }, { path: "M50 50 L50 2 A48 48 0 0 1 98 50 Z" },
    { path: "M50 50 L98 50 A48 48 0 0 1 50 98 Z" }, { path: "M50 50 L50 98 A48 48 0 0 1 2 50 Z" },
  ],
  shaded: [0],
};

const PENTAGON_FIFTH = {
  view: [133.1, 126.6],
  pieces: [
    { path: "M66.6 70 L66.6 0 L133.1 48.4 Z" }, { path: "M66.6 70 L133.1 48.4 L107.7 126.6 Z" },
    { path: "M66.6 70 L107.7 126.6 L25.4 126.6 Z" }, { path: "M66.6 70 L25.4 126.6 L0 48.4 Z" },
    { path: "M66.6 70 L0 48.4 L66.6 0 Z" },
  ],
  shaded: [2],
};

const GRID_2X2_P = {
  view: [120, 120],
  pieces: [
    { path: "M0 0H60V60H0Z" }, { path: "M60 0H120V60H60Z" }, { path: "M0 60H60V120H0Z" },
    { path: "M60 60H120V120H60Z" },
  ],
  shaded: [0, 1, 3],
};

export default {
  code: "RP3",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Grundläggande procenträkning",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Skriv andelen som procent.",
      points: "each",
      rows: ["{43|100} = [a] %"],
      boxes: { a: { accept: ["43"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "1b",
      text: "Skriv andelen som procent.",
      points: "each",
      rows: ["{3|10} = [a] %"],
      boxes: { a: { accept: ["30"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "2a",
      text: "Skriv andelen som procent.",
      points: "each",
      rows: ["{1|5} = [a] %"],
      boxes: { a: { accept: ["20"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "2b",
      text: "Skriv andelen som procent.",
      points: "each",
      rows: ["{1|20} = [a] %"],
      boxes: { a: { accept: ["5"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "3a",
      text: "Skriv andelen 35 % som hundradelar.",
      points: "each",
      rows: ["{[a]|100}"],
      boxes: { a: { accept: ["35"] } },
    },
    {
      label: "3b",
      text: "Skriv andelen 40 % som tiondelar.",
      points: "each",
      rows: ["{[a]|10}"],
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "4a",
      text: "Hur många procent av figuren är skuggad?",
      figure: CIRCLE_QUARTER_P,
      points: "each",
      rows: ["[a] %"],
      boxes: { a: { accept: ["25"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "4b",
      text: "Hur många procent av figuren är skuggad?",
      figure: PENTAGON_FIFTH,
      points: "each",
      rows: ["[a] %"],
      boxes: { a: { accept: ["20"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "4c",
      text: "Hur många procent av figuren är skuggad?",
      figure: GRID_2X2_P,
      points: "each",
      rows: ["[a] %"],
      boxes: { a: { accept: ["75"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "5a",
      text: "Hur mycket är 5 % av 160 kr?",
      points: "each",
      boxes: { a: { accept: ["8"] } },
    },
    {
      label: "5b",
      text: "Hur mycket är 25 % av 480 kr?",
      points: "each",
      boxes: { a: { accept: ["120"] } },
    },
    {
      label: "5c",
      text: "Hur mycket är 20 % av 40 kr?",
      points: "each",
      boxes: { a: { accept: ["8"] } },
    },
  ],
};
