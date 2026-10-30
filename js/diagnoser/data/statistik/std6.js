// DIAGNOS STd6, Histogram.
// Elevbladet är s. 73–75, lärarsidan s. 72 och facit står på s. 72 i 6_Statistik.pdf.
//
// 8 kolumner på resultatblanketten (s. 76): 1a, 1b, 2a, 2b, 3, 4a, 4b och 4c, en skärm och en kolumn var. 4b (rita ett
// stam-bladdiagram) är en pappersuppgift och räknas inte, så COLUMNS är 7. 3 och 4a är en frekvenstabell var med flera
// rutor och en kolumn (points "one"): allt ska vara rätt.
//
// 1: stapeldiagram (diagram, type "bar") med mellanrum mellan staplarna, som på bladet (inget touching).
// 2: befolkningspyramid (diagram, type "pyramid") med värdena som batch F mätte ur bladet, axeln 0–40 ‰. Tryckfel: bladet
// har åldersgruppen "84–89"; den ska vara 85–89 och står så här.
// 2a: facit säger 30 ‰ om kvinnor 10–14 år, men bladet ritar stapeln till cirka 25 ‰ (mätt 25,5), och diagrammet här
// ritar som bladet. Rätt är därför 24–30 ‰ (range); "‰" och "promille" står i units, så "25 ‰" är rätt (och "25", eftersom
// frågan gäller promille).
// 2b: mängdsvar (set) "30–34 år och 50–54 år", i vilken ordning som helst, med eller utan "år".
//
// 3 och 4a: bladets frekvenstabeller är liggande med åtta tomma kolumner. Här är de stående (en rad per klass), med
// bladets två första klasser ifyllda och rutor för resten av klasserna och alla frekvenser, så många rader som facit
// har (sex i 3, fem i 4a). Klassrutorna har form "exact" ("50–54"; annars vore "−4" rätt), och "50–54 kg" och
// "9,0–9,9" står i accept. Tryckfel: bladets tabell i 4a har rubriken "Vikt i kg"; facit har "Tid i sekunder", som
// här. Bladets talrutor står i texten, eftersom en skärm bara har en tabell.
// 4c: "9 sekunder eller snabbare" är 7–8,9 (13 st) plus 9,0 (1 st), facit 14.
//
// Lärarsidan: "ca 15 minuter att genomföra diagnosen" och "avbryta diagnosen efter cirka 20 minuter".

const BALLS = "Diagrammet nedan visar hur många studsbollar eleverna i en klass har.";
const BALLS_BAR = {
  type: "bar",
  categories: ["0–9", "10–19", "20–29", "30–39"],
  x: { label: "Antal studsbollar" },
  y: { max: 7, step: 1, label: "Antal elever" },
  values: [5, 4, 7, 3],
};

const SWEDEN = "Diagrammet visar hur stor del av Sveriges befolkning som var män och kvinnor i olika åldrar 1998.";
const PYRAMID = {
  type: "pyramid",
  title: "Sverige 1998",
  categories: ["90–", "85–89", "80–84", "75–79", "70–74", "65–69", "60–64", "55–59", "50–54", "45–49", "40–44", "35–39", "30–34", "25–29", "20–24", "15–19", "10–14", "5–9", "0–4"],
  y: { max: 40, step: 10, minor: 5, label: "‰" },
  series: [
    { name: "män", values: [2, 5, "9,5", 15, 17, "18,5", 21, "26,5", 34, 31, 30, "30,5", 34, 30, "27,5", "26,5", "28,5", 32, "25,5"] },
    { name: "kvinnor", values: ["3,5", 9, "13,5", "19,5", "19,5", "19,5", "20,5", 25, "31,5", "28,5", "27,5", 28, 31, 28, "25,5", "23,5", "25,5", 29, 23] },
  ],
};
const PROMILLE = { "‰": 1, promille: 1 };

const WEIGHTS =
  "Vikten hos 40 elever på en skola framgår av följande tal (kg): 68, 49, 55, 65, 41, 57, 45, 40, 57, 60, 48, 42, 44, 43, 67, 42, 53, 54, 50, 44, 51, 56, 53, 51, 57, 46, 47, 67, 49, 44, 46, 57, 55, 63, 49, 57, 61, 51, 59, 48.";
const RUNS =
  "40 elever på en skola har sprungit 60 meter på följande tider i sekunder: 10,2; 7,8; 9,3; 10,0; 8,3; 7,9; 11,0; 8,0; 9,2; 9,0; 10,6; 8,0; 9,1; 11,6; 8,2; 10,2; 7,9; 9,6; 10,4; 8,4; 9,6; 10,6; 9,4; 11,2; 8,5; 9,7; 9,9; 10,6; 9,4; 10,1; 11,8; 8,4; 9,2; 9,1; 10,2; 8,7; 10,1; 8,1; 8,3; 9,4.";

export default {
  code: "STd6",
  area: "Sannolikhet och statistik",
  sub: "STd Statistik Diagram",
  title: "Histogram",
  time: { min: 15, max: 15, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: `${BALLS} Hur många elever har mellan 10 och 19 bollar?`,
      diagram: BALLS_BAR,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "1b",
      text: `${BALLS} Hur många elever är det totalt?`,
      diagram: BALLS_BAR,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["19"] } },
    },
    {
      label: "2a",
      text: `${SWEDEN} Ungefär hur många promille av befolkningen var kvinnor mellan 10 och 14 år?`,
      diagram: PYRAMID,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["30"], units: PROMILLE, range: { ge: 24, le: 30 } } },
    },
    {
      label: "2b",
      text: `${SWEDEN} Vilka två åldersgrupper av män var det flest personer i?`,
      diagram: PYRAMID,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["30–34 år och 50–54 år"], set: [["30–34 år", "30–34"], ["50–54 år", "50–54"]] } },
    },
    {
      label: "3",
      text: `${WEIGHTS} Gör färdig frekvenstabellen.`,
      table: {
        head: ["Vikt i kg", "Frekvens"],
        rows: [["40–44", "[a]"], ["45–49", "[b]"], ["[c]", "[d]"], ["[e]", "[f]"], ["[g]", "[h]"], ["[i]", "[j]"]],
      },
      points: "one",
      boxes: {
        a: { accept: ["8"] },
        b: { accept: ["9"] },
        c: { accept: ["50–54", "50–54 kg"], form: "exact" },
        d: { accept: ["7"] },
        e: { accept: ["55–59", "55–59 kg"], form: "exact" },
        f: { accept: ["9"] },
        g: { accept: ["60–64", "60–64 kg"], form: "exact" },
        h: { accept: ["3"] },
        i: { accept: ["65–69", "65–69 kg"], form: "exact" },
        j: { accept: ["4"] },
      },
    },
    {
      label: "4a",
      text: `${RUNS} Gör färdig frekvenstabellen.`,
      table: {
        head: ["Tid i sekunder", "Frekvens"],
        rows: [["7–7,9", "[a]"], ["8–8,9", "[b]"], ["[c]", "[d]"], ["[e]", "[f]"], ["[g]", "[h]"]],
      },
      points: "one",
      boxes: {
        a: { accept: ["3"] },
        b: { accept: ["10"] },
        c: { accept: ["9–9,9", "9,0–9,9", "9–9,9 s"], form: "exact" },
        d: { accept: ["13"] },
        e: { accept: ["10–10,9", "10,0–10,9", "10–10,9 s"], form: "exact" },
        f: { accept: ["10"] },
        g: { accept: ["11–11,9", "11,0–11,9", "11–11,9 s"], form: "exact" },
        h: { accept: ["4"] },
      },
    },
    {
      kind: "paper",
      label: "4b",
      text: `${RUNS} Rita ett stam-bladdiagram med sekunderna (7, 8, 9, 10 och 11) som stam och tiondels sekunder som blad.`,
    },
    {
      label: "4c",
      text: `${RUNS} Hur många sprang på 9 sekunder eller snabbare?`,
      points: "each",
      rows: ["Svar: [a]"],
      boxes: { a: { accept: ["14"] } },
    },
  ],
};
