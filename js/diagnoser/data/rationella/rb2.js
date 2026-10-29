// DIAGNOS RB2, Flera delar av en hel.
// Elevbladet är s. 14, lärarsidorna s. 13 och facit står på s. 13 i 2_Rationella_tal.pdf.
//
// 13 kolumner på resultatblanketten (s. 15): 1a–c, 2a–d, 3a–c och 4a–c. Pappersuppgifterna 4a–c (D8) ger ingen poäng
// på sidan, så de rättade kolumnerna är 10 (COLUMNS i data.test.js): 1a–c, 2a–d och 3a–c.
//
// 1a–c ber om "hur stor del" utan form, så rutan rättas på värdet; facit skriver både orden och bråket
// ("två femtedelar (2/5)"), så båda står i accept (D3). 2a–d ber om "bråkform" och rättas med form: "exact".
// Lärarsidan: se om eleven förstår att 2:an och 3:an i 2/3 har helt olika funktion.
//
// 3a–c är skuggning (shade, D7): vilka delar som helst som ger målbråket. 4a–c är pappersuppgifter (paper, D8) med
// konturen; lärarsidan: "Det är viktigt att eleven ritar ut lika stora delar".

// Figurerna ritas ur datan: pieces är delarna som kan skuggas, shaded de som redan är skuggade och lines extra streck.
const FIVE_COLUMNS_TWO = {
  view: [100, 120],
  pieces: [
    { path: "M0 0H20V120H0Z" }, { path: "M20 0H40V120H20Z" }, { path: "M40 0H60V120H40Z" },
    { path: "M60 0H80V120H60Z" }, { path: "M80 0H100V120H80Z" },
  ],
  shaded: [0, 1],
};

const FIVE_COLUMNS = {
  view: [150, 105],
  pieces: [
    { path: "M0 0H30V105H0Z" }, { path: "M30 0H60V105H30Z" }, { path: "M60 0H90V105H60Z" },
    { path: "M90 0H120V105H90Z" }, { path: "M120 0H150V105H120Z" },
  ],
};

const TRAPEZOID_DOWN_OUTER = {
  view: [150, 120],
  pieces: [
    { path: "M0 0 L75 0 L37.5 120 Z" }, { path: "M75 0 L112.5 120 L37.5 120 Z" },
    { path: "M75 0 L150 0 L112.5 120 Z" },
  ],
  shaded: [0, 2],
};

const GRID_2X2_THREE = {
  view: [100, 75],
  pieces: [
    { path: "M0 0H50V37.5H0Z" }, { path: "M50 0H100V37.5H50Z" }, { path: "M0 37.5H50V75H0Z" },
    { path: "M50 37.5H100V75H50Z" },
  ],
  shaded: [0, 1, 2],
};

const GRID_2X2_B = {
  view: [150, 105],
  pieces: [
    { path: "M0 0H75V52.5H0Z" }, { path: "M75 0H150V52.5H75Z" }, { path: "M0 52.5H75V105H0Z" },
    { path: "M75 52.5H150V105H75Z" },
  ],
};

const GRID_3X2_B = {
  view: [150, 105],
  pieces: [
    { path: "M0 0H50V52.5H0Z" }, { path: "M50 0H100V52.5H50Z" }, { path: "M100 0H150V52.5H100Z" },
    { path: "M0 52.5H50V105H0Z" }, { path: "M50 52.5H100V105H50Z" }, { path: "M100 52.5H150V105H100Z" },
  ],
};

const OUTLINE_RECTANGLE = {
  view: [120, 90],
  pieces: [{ path: "M0 0H120V90H0Z" }],
};

const OUTLINE_CIRCLE = {
  view: [100, 100],
  pieces: [{ circle: [50, 50, 48] }],
};

const OUTLINE_TRAPEZOID_DOWN = {
  view: [150, 120],
  pieces: [{ path: "M0 0 L150 0 L112.5 120 L37.5 120 Z" }],
};

export default {
  code: "RB2",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Flera delar av en hel",
  time: { min: 3, max: 4, stop: 8 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Hur stor del av figuren är skuggad?",
      figure: FIVE_COLUMNS_TWO,
      points: "each",
      boxes: { a: { accept: ["2/5", "två femtedelar"] } },
    },
    {
      label: "1b",
      text: "Hur stor del av figuren är skuggad?",
      figure: TRAPEZOID_DOWN_OUTER,
      points: "each",
      boxes: { a: { accept: ["2/3", "två tredjedelar"] } },
    },
    {
      label: "1c",
      text: "Hur stor del av figuren är skuggad?",
      figure: GRID_2X2_THREE,
      points: "each",
      boxes: { a: { accept: ["3/4", "tre fjärdedelar"] } },
    },
    {
      label: "2a",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["två tredjedelar [a]"],
      boxes: { a: { accept: ["2/3"], form: "exact" } },
    },
    {
      label: "2b",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["tre femtedelar [a]"],
      boxes: { a: { accept: ["3/5"], form: "exact" } },
    },
    {
      label: "2c",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["tre fjärdedelar [a]"],
      boxes: { a: { accept: ["3/4"], form: "exact" } },
    },
    {
      label: "2d",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["fem sjättedelar [a]"],
      boxes: { a: { accept: ["5/6"], form: "exact" } },
    },
    {
      kind: "shade",
      label: "3a",
      text: "Skugga (måla) 2/5 av figuren. Klicka på delarna.",
      figure: FIVE_COLUMNS,
      target: "2/5",
    },
    {
      kind: "shade",
      label: "3b",
      text: "Skugga (måla) 3/4 av figuren. Klicka på delarna.",
      figure: GRID_2X2_B,
      target: "3/4",
    },
    {
      kind: "shade",
      label: "3c",
      text: "Skugga (måla) 5/6 av figuren. Klicka på delarna.",
      figure: GRID_3X2_B,
      target: "5/6",
    },
    {
      kind: "paper",
      label: "4a",
      text: "Skugga 2/3 av figuren.",
      figure: OUTLINE_RECTANGLE,
    },
    {
      kind: "paper",
      label: "4b",
      text: "Skugga 2/3 av figuren.",
      figure: OUTLINE_CIRCLE,
    },
    {
      kind: "paper",
      label: "4c",
      text: "Skugga 2/3 av figuren.",
      figure: OUTLINE_TRAPEZOID_DOWN,
    },
  ],
};
