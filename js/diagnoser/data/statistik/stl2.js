// DIAGNOS STl2, Lägesmått.
// Elevbladet är s. 84–85, lärarsidan s. 83 och facit står på s. 83 i 6_Statistik.pdf.
//
// 8 kolumner på resultatblanketten (s. 86): 1a–c, 2a, 2b, 3, 4 och 5, en skärm och en kolumn var. 2b (rita ett
// lådagram; facit 21, 24, 26,5, 29 och 32) är en pappersuppgift och räknas inte, så COLUMNS är 7.
//
// Tryckfel: bladets uppgift 1 säger "ett statiskt material"; här står "ett statistiskt material".
// 1: lådagram (diagram, type "box"). 1b och 1c frågar efter procent: "50" och "50 %" är rätt (units).
// 2a: bladets frekvenstabell är liggande med tolv kolumner (Obs 21–32, frekv). Här är den stående, en rad per värde,
// med en kolumn (points "one"): allt ska vara rätt. Bladets data står i texten, eftersom en skärm bara har en tabell.
// 5: flera svar är rätt. Med talen 1, 3, 7, 9 och x är medelvärdet lika med medianen för x = 5 (medianen x), x = −5
// (medianen 3) och x = 15 (medianen 7). Facit ger 5; alla tre är rätt här. Ett svar med flera tal ("5 eller 15") är fel.
//
// Lärarsidan: "ca 20 minuter att genomföra diagnosen"; ingen tid att avbryta efter, så stop är null.

const PERCENT = { "%": 1, procent: 1 };

const BOX_PLOT = { type: "box", values: [3, 11, 15, 20, 31] };
const BOX = "Följande lådagram visar fördelningen av ett statistiskt material.";

const DATA =
  "Utgå från följande data: 32, 21, 27, 29, 24, 28, 22, 30, 26, 23, 27, 25, 27, 26, 26, 22, 31, 26, 24, 23, 27, 30, 25, 32, 22, 28, 31, 24, 27, 29.";
const FREQUENCIES = [1, 3, 2, 3, 2, 4, 5, 2, 2, 2, 2, 2]; // för 21, 22, … 32
const IDS = "abcdefghijkl";

export default {
  code: "STl2",
  area: "Sannolikhet och statistik",
  sub: "STl Lägesmått",
  title: "Lägesmått",
  time: { min: 20, max: 20, stop: null },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: `${BOX} Bestäm medianen.`,
      diagram: BOX_PLOT,
      points: "each",
      rows: ["Medianen är: [a]"],
      boxes: { a: { accept: ["15"] } },
    },
    {
      label: "1b",
      text: `${BOX} Bestäm hur många procent av observationerna som ligger mellan 11 och 20.`,
      diagram: BOX_PLOT,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["50"], units: PERCENT } },
    },
    {
      label: "1c",
      text: `${BOX} Bestäm hur många procent av observationerna som är större än 11.`,
      diagram: BOX_PLOT,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["75"], units: PERCENT } },
    },
    {
      label: "2a",
      text: `${DATA} Överför data till följande frekvenstabell:`,
      table: { head: ["Obs", "Frekvens"], rows: FREQUENCIES.map((_, i) => [String(21 + i), `[${IDS[i]}]`]) },
      points: "one",
      boxes: Object.fromEntries(FREQUENCIES.map((f, i) => [IDS[i], { accept: [String(f)] }])),
    },
    { kind: "paper", label: "2b", text: `${DATA} Rita ett lådagram.` },
    {
      label: "3",
      text: "När man mätte hastigheten för de bilar som passerade en skola beräknade man att medianhastigheten var för hög. 23 bilförare höll under tillåten hastighet. Minst hur många bilförare körde för fort?",
      points: "each",
      boxes: { a: { accept: ["24"] } },
    },
    {
      label: "4",
      text: "Sofia, som är 41 år, går med i en fotoklubb på Facebook. Då ökar medlemmarnas medelålder från 24 år till 25 år. Hur många medlemmar har fotoklubben efter att Sofia har gått med?",
      points: "each",
      boxes: { a: { accept: ["17"] } },
    },
    {
      label: "5",
      text: "En grupp med fem tal har samma medelvärde och medianvärde. Fyra av talen är 1, 9, 7, 3. Vilket kan det femte talet vara?",
      points: "each",
      boxes: { a: { accept: ["5", "−5", "15"] } },
    },
  ],
};
