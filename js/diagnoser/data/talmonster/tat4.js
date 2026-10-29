// DIAGNOS TAt4, Talmönster 2.
// Elevbladet är s. 19–20, lärarsidan s. 18 och facit står på s. 18 i 3_Talmonster.pdf.
//
// 7 kolumner på resultatblanketten (s. 21): 1a, 1b, 2a, 2b, 3a, 3b och 4, en skärm och en kolumn var. 1–3 är
// textuppgifter med bara Svar (text och rutan a), och varje nummers inledande text står på alla dess skärmar.
//
// 2: bladets svarta cirklar ritas skuggade (figurerna har ingen svart fyllning), så texten säger "skuggad" i stället
// för "svart". Figuren är bladets: tre skuggade cirklar i en rad, var och en omgiven av sex vita, 14 vita i allt.
// 3: bladets två trappmönster, 2 och 4 kvadrater höga.
//
// 3: facit skriver 5² = 25 och 10² = 100, så potensen och facits hela likhet står också i accept: 25, 5², 5^2 och
// "5² = 25" är rätt.
// 4: talföljderna står som rader utan rutor, och den fjärde summan har rutan. Facit 5/4; 1,25 och 1 1/4 är samma värde.
// Bladets "möntret" i 4 skrivs "mönstret", och bladets "följande summa" (raden under texten) blir "den fjärde summan",
// eftersom texten står ovanför alla raderna.
const CIRCLES = {
  view: [128, 64],
  pieces: [
    { circle: [12, 22, 10] }, { circle: [12, 42, 10] }, { circle: [46.6, 22, 10] }, { circle: [46.6, 42, 10] },
    { circle: [81.3, 22, 10] }, { circle: [81.3, 42, 10] }, { circle: [115.9, 22, 10] }, { circle: [115.9, 42, 10] },
    { circle: [29.3, 12, 10] }, { circle: [29.3, 52, 10] }, { circle: [64, 12, 10] }, { circle: [64, 52, 10] },
    { circle: [98.6, 12, 10] }, { circle: [98.6, 52, 10] },
    { circle: [29.3, 32, 10] }, { circle: [64, 32, 10] }, { circle: [98.6, 32, 10] },
  ],
  shaded: [14, 15, 16],
};

const STAIRS = {
  view: [114, 44],
  pieces: [
    { path: "M2 32H12V42H2Z" }, { path: "M12 32H22V42H12Z" }, { path: "M22 32H32V42H22Z" }, { path: "M12 22H22V32H12Z" },
    { path: "M42 32H52V42H42Z" }, { path: "M52 32H62V42H52Z" }, { path: "M62 32H72V42H62Z" }, { path: "M72 32H82V42H72Z" },
    { path: "M82 32H92V42H82Z" }, { path: "M92 32H102V42H92Z" }, { path: "M102 32H112V42H102Z" },
    { path: "M52 22H62V32H52Z" }, { path: "M62 22H72V32H62Z" }, { path: "M72 22H82V32H72Z" }, { path: "M82 22H92V32H82Z" },
    { path: "M92 22H102V32H92Z" },
    { path: "M62 12H72V22H62Z" }, { path: "M72 12H82V22H72Z" }, { path: "M82 12H92V22H82Z" },
    { path: "M72 2H82V12H72Z" },
  ],
};

const HANDS =
  "Om två personer ska skaka hand med varandra blir det 1 handskakning. Om tre personer ska skaka hand med varandra blir det 3 handskakningar. Om fyra personer ska skaka hand med varandra blir det 6 handskakningar. Hur många handskakningar blir det om";
const RING =
  "I följande mönster är varje skuggad cirkel omgiven av sex vita cirklar. Till 3 skuggade cirklar behövs det alltså 14 vita cirklar. Man fortsätter nu att bygga ut raden. Hur många vita cirklar behöver man till";
const STAIR =
  "I figuren ser du två mönster. När mönstret är 2 kvadrater högt, består mönstret av 4 kvadrater. När mönstret är 4 kvadrater högt, består mönstret av 16 kvadrater.";

export default {
  code: "TAt4",
  area: "Talmönster och algebra",
  sub: "TAt Talföljder och talmönster",
  title: "Talmönster 2",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: `${HANDS} fem personer ska skaka hand?`, points: "each", boxes: { a: { accept: ["10"] } } },
    { label: "1b", text: `${HANDS} sex personer ska skaka hand?`, points: "each", boxes: { a: { accept: ["15"] } } },
    { label: "2a", text: `${RING} 4 skuggade cirklar?`, points: "each", figure: CIRCLES, boxes: { a: { accept: ["18"] } } },
    { label: "2b", text: `${RING} 6 skuggade cirklar?`, points: "each", figure: CIRCLES, boxes: { a: { accept: ["26"] } } },
    {
      label: "3a",
      text: `${STAIR} Hur många kvadrater behövs det om mönstret är 5 kvadrater högt?`,
      points: "each",
      figure: STAIRS,
      boxes: { a: { accept: ["25", "5²", "5² = 25"] } },
    },
    {
      label: "3b",
      text: `${STAIR} Hur många kvadrater behövs det om mönstret är 10 kvadrater högt?`,
      points: "each",
      figure: STAIRS,
      boxes: { a: { accept: ["100", "10²", "10² = 100"] } },
    },
    {
      label: "4",
      text: "Här ser du tre talföljder, studera dem och dess summor och leta efter ett mönster. Ser du mönstret så vet du också den fjärde summan.",
      points: "each",
      rows: [
        "1 + {1|2} + {1|4} + {1|8} + {1|16} + {1|32} + {1|64} + … = 2",
        "1 + {1|3} + {1|9} + {1|27} + {1|81} + {1|243} + … = {3|2}",
        "1 + {1|4} + {1|16} + {1|64} + {1|256} + {1|1024} + … = {4|3}",
        "1 + {1|5} + {1|25} + {1|125} + {1|625} + {1|3125} + … = [a]",
      ],
      boxes: { a: { accept: ["5/4"] } },
    },
  ],
};
