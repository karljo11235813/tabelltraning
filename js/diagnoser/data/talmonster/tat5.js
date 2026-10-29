// DIAGNOS TAt5, Geometriska mönster.
// Elevbladet är s. 23–24, lärarsidan s. 22 och facit står på s. 22 i 3_Talmonster.pdf.
//
// 10 kolumner på resultatblanketten (s. 25): 1a–c, 2a–c och 3a–d, en skärm och en kolumn var. Alla är textuppgifter
// med bara Svar (text och rutan a), och varje nummers inledande text står på alla dess skärmar. Lärarsidan säger
// "cirka 5 minuter", så min och max är båda 5.
//
// 1: bladets två figurer (kvadraten med två diagonaler och femhörningen med fem) står bredvid varandra i en figur.
// 2: bladets prickfigurer för triangeltalen 1, 3, 6 och 10; talen står i texten.
//
// 1c och 3d ber om ett uttryck (algebra: "equivalent"): varje uttryck som är lika med facits för alla n är rätt,
// till exempel (n² − 3n)/2 eller 180n − 360. Gradtecknet i facits (n − 2) · 180° ignoreras.
// 2c är ett ordsvar (contains): rätt när svaret innehåller "kvadrat" (facit "Alla kvadrattal").
// 3a–c rättas på värdet; ett gradtecken efter talet ignoreras (360° och 360 är rätt).
const DIAGONALS = {
  view: [132, 58],
  pieces: [{ path: "M4 6H52V54H4Z" }, { path: "M100 3L126.63 22.35L116.46 53.65L83.54 53.65L73.37 22.35Z" }],
  lines: ["M4 6L52 54M52 6L4 54", "M100 3L116.46 53.65L73.37 22.35L126.63 22.35L83.54 53.65Z"],
};

const TRIANGLE_NUMBERS = {
  view: [122, 34],
  pieces: [
    { circle: [7, 29, 3] },
    { circle: [27, 29, 3] }, { circle: [35, 29, 3] }, { circle: [35, 21, 3] },
    { circle: [55, 29, 3] }, { circle: [63, 29, 3] }, { circle: [71, 29, 3] }, { circle: [63, 21, 3] }, { circle: [71, 21, 3] },
    { circle: [71, 13, 3] },
    { circle: [91, 29, 3] }, { circle: [99, 29, 3] }, { circle: [107, 29, 3] }, { circle: [115, 29, 3] }, { circle: [99, 21, 3] },
    { circle: [107, 21, 3] }, { circle: [115, 21, 3] }, { circle: [107, 13, 3] }, { circle: [115, 13, 3] }, { circle: [115, 5, 3] },
  ],
};

const POLYGON = "I en kvadrat kan man dra två diagonaler. I en pentagon kan man dra fem diagonaler.";
const TRIANGLE = "Tal som kan bilda trianglar kallas för triangeltal. De första fyra triangeltalen är 1, 3, 6 och 10.";
const ANGLES = "Vinkelsumman i en triangel är 180°.";

export default {
  code: "TAt5",
  area: "Talmönster och algebra",
  sub: "TAt Talföljder och talmönster",
  title: "Geometriska mönster",
  time: { min: 5, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  variables: "n",
  screens: [
    {
      label: "1a",
      text: `${POLYGON} Hur många diagonaler kan man dra i en regelbunden sexhörning (hexagon)?`,
      points: "each",
      figure: DIAGONALS,
      boxes: { a: { accept: ["9"] } },
    },
    {
      label: "1b",
      text: `${POLYGON} Hur många diagonaler kan man dra i en regelbunden 10-hörning?`,
      points: "each",
      figure: DIAGONALS,
      boxes: { a: { accept: ["35"] } },
    },
    {
      label: "1c",
      text: `${POLYGON} Skriv ett uttryck för antalet diagonaler i en n-hörning.`,
      points: "each",
      figure: DIAGONALS,
      boxes: { a: { accept: ["n(n − 3)/2"], algebra: "equivalent" } },
    },
    {
      label: "2a",
      text: `${TRIANGLE} Vilket är det femte triangeltalet?`,
      points: "each",
      figure: TRIANGLE_NUMBERS,
      boxes: { a: { accept: ["15"] } },
    },
    {
      label: "2b",
      text: `${TRIANGLE} Vilket är det åttonde triangeltalet?`,
      points: "each",
      figure: TRIANGLE_NUMBERS,
      boxes: { a: { accept: ["36"] } },
    },
    {
      label: "2c",
      text: `${TRIANGLE} Vilka tal är summor av två på varandra följande triangeltal?`,
      points: "each",
      figure: TRIANGLE_NUMBERS,
      boxes: { a: { accept: ["Alla kvadrattal"], contains: ["kvadrat"] } },
    },
    { label: "3a", text: `${ANGLES} Hur stor är vinkelsumman i en rektangel?`, points: "each", boxes: { a: { accept: ["360°"] } } },
    { label: "3b", text: `${ANGLES} Hur stor är vinkelsumman i en femhörning?`, points: "each", boxes: { a: { accept: ["540°"] } } },
    { label: "3c", text: `${ANGLES} Hur stor är vinkelsumman i en sexhörning?`, points: "each", boxes: { a: { accept: ["720°"] } } },
    {
      label: "3d",
      text: `${ANGLES} Skriv ett uttryck för vinkelsumman i en n-hörning.`,
      points: "each",
      boxes: { a: { accept: ["(n − 2) · 180°"], algebra: "equivalent" } },
    },
  ],
};
