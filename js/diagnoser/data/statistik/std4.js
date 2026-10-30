// DIAGNOS STd4, Cirkeldiagram.
// Elevbladet är s. 58–62, lärarsidan s. 57 och facit står på s. 57 i 6_Statistik.pdf.
//
// 11 kolumner på resultatblanketten (s. 63): 1a–c, 2a–c, 3a–c, 4 och 5, en skärm och en kolumn var. 4 och 5 (rita ett
// cirkeldiagram) är pappersuppgifter och räknas inte, så COLUMNS är 9. 4 har bladets cirkel med mittpunkt som kontur, 5
// cirkeln indelad i tio lika stora sektorer (bladet har dessutom en skala 0–95 runt kanten; här står bara tiotalen).
//
// Diagrammen (diagram, type "pie") har andelarna som batch F mätte ur sektorernas ytor: 1 är 33/47/20 %, 2 är
// 51/8/11/30 %, 3 är 50/30/20 %. Färgerna är mönster: gul (ljusgrå på bladet) är randig, grön (mörkgrå) fylld och vit tom.
// Därför står 1b "Vad visar den randiga delen av diagrammet?" i stället för bladets "den ljusgrå delen". 1b rättas som
// ordsvar (contains "gul"), eftersom facit "Hur många som röstade på gul färg" kan skrivas på många sätt.
//
// 2a: facit "Ungefär hälften"; varje tal lika med 1/2 är rätt (0,5, 50 %, "en halv"), och orden står i accept.
// 2b: facit säger "Ungefär en fjärdedel" om övrig mark, men bladet ritar 30 %, och diagrammet här ritar som bladet. Rätt
// är därför allt från en fjärdedel till en tredjedel (range 0,25–1/3 som andel, med % i units: "30 %", "0,3" och "1/4"
// är rätt), plus orden.
// 3b–c: facit "Ungefär 30" och "Ungefär 20 (summan av svaren i b och c bör vara 50)". Rätt är 26–34 i b och 16–24 i c;
// att summan blir 50 kan inte kontrolleras, eftersom b och c är var sin skärm.
// "ungefär", "cirka", "ca" och "ca." före svaret räknas bort av rättningen, så de skrivsätten behöver inte stå i accept.
//
// Lärarsidan: "ca 10 minuter att göra hela diagnosen" (2–3 minuter per uppgift); ingen tid att avbryta efter, så stop
// är null.

const PERCENT = { "%": "1/100", procent: "1/100" };

const VOTES = "Man ska måla om skolans matsal och eleverna har fått rösta på vilken färg de vill ha. Resultatet ser du i det här cirkeldiagrammet.";
const VOTES_PIE = {
  type: "pie",
  sectors: [
    { name: "gul", value: 33, fill: "randig" },
    { name: "grön", value: 47, fill: "fylld" },
    { name: "vit", value: 20, fill: "tom" },
  ],
};

const SWEDEN = "Sveriges yta består av bl.a. skogar, åkrar, sjöar. Så här ser fördelningen ut:";
const SWEDEN_PIE = {
  type: "pie",
  sectors: [
    { name: "skog", value: 51, fill: "prickig" },
    { name: "åker och betesmark", value: 8, fill: "fylld" },
    { name: "sjöar och vattendrag", value: 11, fill: "tom" },
    { name: "övrig mark", value: 30, fill: "randig" },
  ],
};

const SCHOOL = "På Elins skola var det 100 elever i årskurs 5. Man tog reda på hur de tar sig till skolan. Så här såg resultatet ut.";
const SCHOOL_PIE = {
  type: "pie",
  sectors: [
    { name: "Promenerar", value: 50, fill: "randig" },
    { name: "Cyklar", value: 30, fill: "tom" },
    { name: "Åker bil eller buss", value: 20, fill: "fylld" },
  ],
};

// 4: bladets cirkel med ett kryss i mitten.
const CIRCLE = {
  view: [220, 220],
  pieces: [{ circle: [110, 110, 100] }],
  lines: ["M 104 104 L 116 116 M 116 104 L 104 116"],
};

// 5: cirkeln indelad i tio sektorer om 10 % var, med tiotalen runt kanten som på bladet.
const TENTHS = {
  view: [260, 260],
  pieces: [{ circle: [130, 130, 100] }],
  lines: [
    "M 130.0 30.0 L 130.0 230.0 M 188.8 49.1 L 71.2 210.9 M 225.1 99.1 L 34.9 160.9 M 225.1 160.9 L 34.9 99.1 M 188.8 210.9 L 71.2 49.1",
  ],
  labels: [
    { at: [130.0, 16.0], text: "0" }, { at: [197.0, 37.8], text: "10" }, { at: [238.4, 94.8], text: "20" },
    { at: [238.4, 165.2], text: "30" }, { at: [197.0, 222.2], text: "40" }, { at: [130.0, 244.0], text: "50" },
    { at: [63.0, 222.2], text: "60" }, { at: [21.6, 165.2], text: "70" }, { at: [21.6, 94.8], text: "80" },
    { at: [63.0, 37.8], text: "90" },
  ],
};

export default {
  code: "STd4",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Cirkeldiagram",
  time: { min: 10, max: 10, stop: null },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: `${VOTES} Vilken färg var minst populär?`,
      diagram: VOTES_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Vit", "vitt", "vit färg"] } },
    },
    {
      label: "1b",
      text: `${VOTES} Vad visar den randiga delen av diagrammet?`,
      diagram: VOTES_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Hur många som röstade på gul färg", "gul", "gul färg"], contains: ["gul"] } },
    },
    {
      label: "1c",
      text: `${VOTES} Vilken färg röstade nästan hälften av eleverna på?`,
      diagram: VOTES_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Grön", "grönt", "grön färg"] } },
    },
    {
      label: "2a",
      text: `${SWEDEN} Ungefär hur stor del av Sveriges yta är täckt av skog?`,
      diagram: SWEDEN_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: {
        a: {
          accept: [
            "Ungefär hälften", "1/2", "hälften", "halva", "halva ytan", "hälften av ytan", "drygt hälften", "lite mer än hälften",
          ],
          units: PERCENT,
        },
      },
    },
    {
      label: "2b",
      text: `${SWEDEN} Ungefär hur stor del av Sveriges yta består av övrig mark?`,
      diagram: SWEDEN_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: {
        a: {
          accept: [
            "Ungefär en fjärdedel", "drygt en fjärdedel", "lite mer än en fjärdedel", "knappt en tredjedel", "lite mindre än en tredjedel",
          ],
          range: { ge: "0,25", le: "1/3" },
          units: PERCENT,
        },
      },
    },
    {
      label: "2c",
      text: `${SWEDEN} Vilken yta är minst: åker och betesmark eller sjöar och vattendrag?`,
      diagram: SWEDEN_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["Åker och betesmark", "åker- och betesmark", "åker och betesmarker", "åkrar och betesmark", "åker", "åkrar", "åkermark"] } },
    },
    {
      label: "3a",
      text: `${SCHOOL} Hur många elever promenerade?`,
      diagram: SCHOOL_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["50"] } },
    },
    {
      label: "3b",
      text: `${SCHOOL} Hur många elever cyklade?`,
      diagram: SCHOOL_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["30"], range: { ge: 26, le: 34 } } },
    },
    {
      label: "3c",
      text: `${SCHOOL} Hur många elever åkte bil eller buss?`,
      diagram: SCHOOL_PIE,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["20"], range: { ge: 16, le: 24 } } },
    },
    {
      kind: "paper",
      label: "4",
      text: "Klassen skulle göra något roligt på klassens dag och hade tre förslag att välja mellan: kanotutflykt, besök i badhuset eller besök på naturhistoriska museet. Man gjorde en omröstning. Så här blev resultatet: Hälften av eleverna röstade på kanotutflykten. En fjärdedel av eleverna röstade på badhuset. Resten av klassen röstade på museet. Visa resultatet av omröstningen i ett cirkeldiagram.",
      figure: CIRCLE,
    },
    {
      kind: "paper",
      label: "5",
      text: "På skolresan kunde man välja mellan fyra rätter till lunch. Det var precis 100 elever som var med på skolresan och de valde så här: köttbullar med potatismos 40 st, korv med pommes frites 30 st, spaghetti med köttfärssås 20 st och pytt i panna 10 st. Gör ett cirkeldiagram som visar hur eleverna valde. Använd figuren.",
      figure: TENTHS,
    },
  ],
};
