// DIAGNOS RB3, Del av ett antal.
// Elevbladet är s. 17–18, lärarsidorna s. 16 och facit står på s. 16 i 2_Rationella_tal.pdf.
//
// 16 kolumner på resultatblanketten (s. 19): 1a–c, 2a–c, 3a–d, 4a–d, 5 och 6. Blanketten trycker de två sista som
// "5, 5", men bladet har uppgift 5 och uppgift 6: etiketterna här är 5 och 6 (D13).
//
// 1a–c är figurer att läsa av. Bladet säger "Svara i bråkform", så rutan rättas med form: "exact" (4/9, inte 0,44).
// 1c har två facitsvar, "1/3 eller 2/6" (båda i accept).
//
// 2a–c är skuggning (shade, D7) av cirklar: vilka 3, 3 och 6 cirklar som helst är rätt. Facit visar "ett av tre tretal"
// (2b) och "tre av fyra par" (2c), så 2c har facit: tre kolumner om två.
//
// 3 och 4 är textuppgifter med bara Svar. 5 och 6 likaså (bitar och karameller; enheten efter svaret ignoreras).
// Lärarsidan: uppgifterna 3 och 4 är lättare med material eller figurer, och i 6 ändras antalet man tar en del av.

// Figurerna ritas ur datan: pieces är delarna som kan skuggas, shaded de som redan är skuggade och lines extra streck.
const DOTS_3X3_CORNERS = {
  view: [120, 120],
  pieces: [
    { circle: [20, 20, 15] }, { circle: [60, 20, 15] }, { circle: [100, 20, 15] }, { circle: [20, 60, 15] },
    { circle: [60, 60, 15] }, { circle: [100, 60, 15] }, { circle: [20, 100, 15] }, { circle: [60, 100, 15] },
    { circle: [100, 100, 15] },
  ],
  shaded: [0, 2, 6, 8],
};

const DOTS_3X3 = {
  view: [120, 120],
  pieces: [
    { circle: [20, 20, 15] }, { circle: [60, 20, 15] }, { circle: [100, 20, 15] }, { circle: [20, 60, 15] },
    { circle: [60, 60, 15] }, { circle: [100, 60, 15] }, { circle: [20, 100, 15] }, { circle: [60, 100, 15] },
    { circle: [100, 100, 15] },
  ],
};

const DOTS_FIVE_TWO = {
  view: [120, 80],
  pieces: [
    { circle: [20, 20, 15] }, { circle: [60, 20, 15] }, { circle: [100, 20, 15] }, { circle: [40, 60, 15] },
    { circle: [80, 60, 15] },
  ],
  shaded: [0, 3],
};

const DOTS_FIVE = {
  view: [120, 80],
  pieces: [
    { circle: [20, 20, 15] }, { circle: [60, 20, 15] }, { circle: [100, 20, 15] }, { circle: [40, 60, 15] },
    { circle: [80, 60, 15] },
  ],
};

const DOTS_2X3_TOP = {
  view: [120, 120],
  pieces: [
    { circle: [40, 20, 15] }, { circle: [80, 20, 15] }, { circle: [40, 60, 15] }, { circle: [80, 60, 15] },
    { circle: [40, 100, 15] }, { circle: [80, 100, 15] },
  ],
  shaded: [0, 1],
};

const DOTS_4X2 = {
  view: [160, 80],
  pieces: [
    { circle: [20, 20, 15] }, { circle: [60, 20, 15] }, { circle: [100, 20, 15] }, { circle: [140, 20, 15] },
    { circle: [20, 60, 15] }, { circle: [60, 60, 15] }, { circle: [100, 60, 15] }, { circle: [140, 60, 15] },
  ],
};

export default {
  code: "RB3",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "Del av ett antal",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      figure: DOTS_3X3_CORNERS,
      points: "each",
      boxes: { a: { accept: ["4/9"], form: "exact" } },
    },
    {
      label: "1b",
      text: "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      figure: DOTS_FIVE_TWO,
      points: "each",
      boxes: { a: { accept: ["2/5"], form: "exact" } },
    },
    {
      label: "1c",
      text: "Hur stor andel av cirklarna är skuggade? Svara i bråkform.",
      figure: DOTS_2X3_TOP,
      points: "each",
      boxes: { a: { accept: ["1/3", "2/6"], form: "exact" } },
    },
    {
      kind: "shade",
      label: "2a",
      text: "Skugga 3/5 av cirklarna. Klicka på cirklarna.",
      figure: DOTS_FIVE,
      target: "3/5",
    },
    {
      kind: "shade",
      label: "2b",
      text: "Skugga 1/3 av cirklarna. Klicka på cirklarna.",
      figure: DOTS_3X3,
      target: "1/3",
    },
    {
      kind: "shade",
      label: "2c",
      text: "Skugga 3/4 av cirklarna. Klicka på cirklarna.",
      figure: DOTS_4X2,
      target: "3/4",
      facit: [0, 1, 2, 4, 5, 6],
    },
    {
      label: "3a",
      text: "Hur mycket är hälften av 12?",
      points: "each",
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "3b",
      text: "Hur mycket är en tredjedel av 6?",
      points: "each",
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "3c",
      text: "Hur mycket är en femtedel av 10?",
      points: "each",
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "3d",
      text: "Hur mycket är en fjärdedel av 8?",
      points: "each",
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "4a",
      text: "Hur mycket är två tredjedelar av 6?",
      points: "each",
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "4b",
      text: "Hur mycket är två tredjedelar av 9?",
      points: "each",
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "4c",
      text: "Hur mycket är två femtedelar av 10?",
      points: "each",
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "4d",
      text: "Hur mycket är tre fjärdedelar av 8?",
      points: "each",
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "5",
      text: "En pizza är delad i 6 bitar. Markus åt upp en tredjedel av pizzan. Hur många bitar åt Markus?",
      points: "each",
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "6",
      text: "I en skål låg det 12 karameller. Först åt Ola upp en tredjedel av karamellerna. Sedan åt Lisa upp hälften av de karameller som var kvar. Hur många karameller låg det sedan i skålen?",
      points: "each",
      boxes: { a: { accept: ["4"] } },
    },
  ],
};
