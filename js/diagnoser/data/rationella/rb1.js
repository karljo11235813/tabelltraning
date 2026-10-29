// DIAGNOS RB1, En del av en hel.
// Elevbladet är s. 10–11, lärarsidorna s. 9 och facit står på s. 9 i 2_Rationella_tal.pdf.
//
// 23 kolumner på resultatblanketten (s. 12): 1a–c, 2a–d, 3a–c, 4a–c, 5a–d, 6a–c och 7a–c. Pappersuppgifterna
// (4a–c, 7a och 7b, D8) ger ingen poäng på sidan, så de rättade kolumnerna är 18 (COLUMNS i data.test.js):
// 1a–c (3), 2a–d (4, en per figur), 3a–c (3), 5a–d (4), 6a–c (3, en per figur) och 7c (1).
//
// 1a–c ber om "hur stor del" utan form, så rutan rättas på värdet; facit skriver orden ("en fjärdedel"), så de står
// också i accept (D3). 5a–d ber om "bråkform" och rättas med form: "exact": 2/6 är inte en tredjedel skrivet med siffror.
//
// 2 och 6 är val (pick, D6) med figurer, en kolumn per figur: Ja = markerad, Nej = omarkerad. Bladet säger "Ringa in";
// här markeras figurerna. 6b är rektangeln med olika stora delar (1/4 av arean är skuggad), 6c sexhörningen med två
// intilliggande trianglar av sex.
//
// 3a–c och 7c är skuggning (shade, D7): alla delar är lika stora utom i 7c, där de tre trianglarna har arean 1 : 2 : 2
// (vikterna) och bara den lilla är 1/5. 3c: vilka två av sex rutor som helst ger 1/3; facit skuggar en kolumn
// ("3 par"), så facit: [0, 3].
//
// 4a–c, 7a och 7b är pappersuppgifter (paper, D8): figuren är bara konturen att rita i. Lärarsidan: "Det är viktigt att
// eleven delar figurerna i fyra lika stora delar" (läraren ser det på pappret; texten till eleven säger det inte).

// Figurerna ritas ur datan: pieces är delarna som kan skuggas, shaded de som redan är skuggade och lines extra streck.
const CIRCLE_QUARTER = {
  view: [100, 100],
  pieces: [
    { path: "M50 50 L2 50 A48 48 0 0 1 50 2 Z" }, { path: "M50 50 L50 2 A48 48 0 0 1 98 50 Z" },
    { path: "M50 50 L98 50 A48 48 0 0 1 50 98 Z" }, { path: "M50 50 L50 98 A48 48 0 0 1 2 50 Z" },
  ],
  shaded: [0],
};

const THREE_COLUMNS = {
  view: [120, 60],
  pieces: [{ path: "M0 0H40V60H0Z" }, { path: "M40 0H80V60H40Z" }, { path: "M80 0H120V60H80Z" }],
  shaded: [0],
};

const TRIANGLE_HALVES = {
  view: [120, 100],
  pieces: [{ path: "M60 0 L0 100 L60 100 Z" }, { path: "M60 0 L60 100 L120 100 Z" }],
  shaded: [1],
};

const TWO_SQUARES_DIAGONALS = {
  view: [120, 60],
  pieces: [
    { path: "M0 0 L60 0 L60 60 Z" }, { path: "M0 0 L0 60 L60 60 Z" }, { path: "M60 0 L120 0 L120 60 Z" },
    { path: "M60 0 L60 60 L120 60 Z" },
  ],
  shaded: [3],
};

const GRID_3X2_ONE_OF_SIX = {
  view: [120, 80],
  pieces: [
    { path: "M0 0H40V40H0Z" }, { path: "M40 0H80V40H40Z" }, { path: "M80 0H120V40H80Z" }, { path: "M0 40H40V80H0Z" },
    { path: "M40 40H80V80H40Z" }, { path: "M80 40H120V80H80Z" },
  ],
  shaded: [4],
};

const GRID_3X2 = {
  view: [150, 100],
  pieces: [
    { path: "M0 0H50V50H0Z" }, { path: "M50 0H100V50H50Z" }, { path: "M100 0H150V50H100Z" },
    { path: "M0 50H50V100H0Z" }, { path: "M50 50H100V100H50Z" }, { path: "M100 50H150V100H100Z" },
  ],
};

const FOUR_STRIPS = {
  view: [60, 90],
  pieces: [
    { path: "M0 0H15V90H0Z" }, { path: "M15 0H30V90H15Z" }, { path: "M30 0H45V90H30Z" }, { path: "M45 0H60V90H45Z" },
  ],
  shaded: [3],
};

const GRID_2X2_DIAGONAL = {
  view: [100, 80],
  pieces: [
    { path: "M0 0H50V40H0Z" }, { path: "M50 0H100V40H50Z" }, { path: "M0 40H50V80H0Z" },
    { path: "M50 40H100V80H50Z" },
  ],
  shaded: [0, 3],
};

const GRID_2X2 = {
  view: [150, 100],
  pieces: [
    { path: "M0 0H75V50H0Z" }, { path: "M75 0H150V50H75Z" }, { path: "M0 50H75V100H0Z" },
    { path: "M75 50H150V100H75Z" },
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

const OUTLINE_TWO_SQUARES = {
  view: [150, 126],
  pieces: [{ path: "M0 0H75V63H0Z" }, { path: "M75 63H150V126H75Z" }],
};

const TRAPEZOID_THIRDS_UP = {
  view: [150, 125],
  pieces: [
    { path: "M0 125 L37.5 0 L75 125 Z" }, { path: "M37.5 0 L112.5 0 L75 125 Z" },
    { path: "M112.5 0 L150 125 L75 125 Z" },
  ],
  shaded: [1],
};

const RECTANGLE_UNEQUAL = {
  view: [100, 150],
  pieces: [{ path: "M0 0H50V75H0Z" }, { path: "M50 0H100V75H50Z" }, { path: "M0 75H100V150H0Z" }],
  shaded: [0],
};

const HEXAGON_TWO = {
  view: [150, 129.9],
  pieces: [
    { path: "M75 65 L150 65 L112.5 129.9 Z" }, { path: "M75 65 L112.5 129.9 L37.5 129.9 Z" },
    { path: "M75 65 L37.5 129.9 L0 65 Z" }, { path: "M75 65 L0 65 L37.5 0 Z" }, { path: "M75 65 L37.5 0 L112.5 0 Z" },
    { path: "M75 65 L112.5 0 L150 65 Z" },
  ],
  shaded: [0, 1],
};

const OUTLINE_PENTAGON = {
  view: [133.1, 126.6],
  pieces: [{ path: "M66.6 0 L133.1 48.4 L107.7 126.6 L25.4 126.6 L0 48.4 Z" }],
};

const TRAPEZOID_FIFTH = {
  view: [150, 112],
  pieces: [
    { path: "M0 0 L0 112 L50 112 Z", weight: 1 }, { path: "M0 0 L100 0 L50 112 Z", weight: 2 },
    { path: "M100 0 L150 112 L50 112 Z", weight: 2 },
  ],
};

export default {
  code: "RB1",
  area: "Rationella tal",
  sub: "RB Tal i bråkform",
  title: "En del av en hel",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Hur stor del av figuren är skuggad?",
      figure: CIRCLE_QUARTER,
      points: "each",
      boxes: { a: { accept: ["1/4", "en fjärdedel"] } },
    },
    {
      label: "1b",
      text: "Hur stor del av figuren är skuggad?",
      figure: THREE_COLUMNS,
      points: "each",
      boxes: { a: { accept: ["1/3", "en tredjedel"] } },
    },
    {
      label: "1c",
      text: "Hur stor del av figuren är skuggad?",
      figure: TRIANGLE_HALVES,
      points: "each",
      boxes: { a: { accept: ["1/2", "en halv"] } },
    },
    {
      kind: "pick",
      label: "2",
      text: "Markera alla figurer där en fjärdedel är skuggad.",
      items: [
        { id: "a", figure: TWO_SQUARES_DIAGONALS },
        { id: "b", figure: GRID_3X2_ONE_OF_SIX },
        { id: "c", figure: FOUR_STRIPS },
        { id: "d", figure: GRID_2X2_DIAGONAL },
      ],
      accept: ["a", "c"],
      points: "each",
    },
    {
      kind: "shade",
      label: "3a",
      text: "Skugga (måla) en sjättedel av figuren. Klicka på delarna.",
      figure: GRID_3X2,
      target: "1/6",
    },
    {
      kind: "shade",
      label: "3b",
      text: "Skugga (måla) en fjärdedel av figuren. Klicka på delarna.",
      figure: GRID_2X2,
      target: "1/4",
    },
    {
      kind: "shade",
      label: "3c",
      text: "Skugga (måla) en tredjedel av figuren. Klicka på delarna.",
      figure: GRID_3X2,
      target: "1/3",
      facit: [0, 3],
    },
    {
      kind: "paper",
      label: "4a",
      text: "Skugga en fjärdedel av figuren.",
      figure: OUTLINE_RECTANGLE,
    },
    {
      kind: "paper",
      label: "4b",
      text: "Skugga en fjärdedel av figuren.",
      figure: OUTLINE_CIRCLE,
    },
    {
      kind: "paper",
      label: "4c",
      text: "Skugga en fjärdedel av figurerna.",
      figure: OUTLINE_TWO_SQUARES,
    },
    {
      label: "5a",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["en tredjedel [a]"],
      boxes: { a: { accept: ["1/3"], form: "exact" } },
    },
    {
      label: "5b",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["en halv [a]"],
      boxes: { a: { accept: ["1/2"], form: "exact" } },
    },
    {
      label: "5c",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["en sjättedel [a]"],
      boxes: { a: { accept: ["1/6"], form: "exact" } },
    },
    {
      label: "5d",
      text: "Skriv med siffror (i bråkform).",
      points: "each",
      rows: ["en fjärdedel [a]"],
      boxes: { a: { accept: ["1/4"], form: "exact" } },
    },
    {
      kind: "pick",
      label: "6",
      text: "Markera alla figurer där 1/3 är skuggad.",
      items: [
        { id: "a", figure: TRAPEZOID_THIRDS_UP },
        { id: "b", figure: RECTANGLE_UNEQUAL },
        { id: "c", figure: HEXAGON_TWO },
      ],
      accept: ["a", "c"],
      points: "each",
    },
    {
      kind: "paper",
      label: "7a",
      text: "Skugga 1/5 av figuren.",
      figure: OUTLINE_RECTANGLE,
    },
    {
      kind: "paper",
      label: "7b",
      text: "Skugga 1/5 av figuren.",
      figure: OUTLINE_PENTAGON,
    },
    {
      kind: "shade",
      label: "7c",
      text: "Skugga (måla) 1/5 av figuren. Klicka på delarna.",
      figure: TRAPEZOID_FIFTH,
      target: "1/5",
    },
  ],
};
