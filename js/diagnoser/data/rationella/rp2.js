// DIAGNOS RP2, Proportionalitet i grafform.
// Elevbladet är s. 59–61, lärarsidorna s. 58 och facit står på s. 58 i 2_Rationella_tal.pdf.
//
// 9 kolumner på resultatblanketten (s. 62): 1a–c, 2a–c och 3a–c. 2b är en pappersuppgift (D8) och ger ingen poäng på
// sidan, så de rättade kolumnerna är 8 (COLUMNS i data.test.js). 1a och 2a är tabeller (table) med en kolumn var:
// alla rutor i tabellen ska vara rätta (points: "one").
//
// 1b är punkter i ett koordinatsystem (plot, D9): eleven klickar på skärningarna för (1, 10), (2, 20), (4, 40), (5, 50)
// och (6, 60); origo får vara med eller saknas, och sidan ritar bara punkterna, ingen linje. Bladet ber också om grafen
// ("rita en graf"); här är det punkterna som rättas. Eftersom det inte går att gå tillbaka står tabellens värden i
// uppgiftens text.
//
// 1c läser av grafen y = 10x (D10). Facit trycker "36 kr", men 4,5 kg à 10 kr/kg är 45 kr och grafen f(x) = 10x ger
// 45: svaret är 45. Tryckfelet i facit rättas här, inte i något tal på bladet. Grafen visas på skärmen, så eleven
// behöver inte sin egen graf från 1b.
//
// 2b: eleven graderar axlarna själv i ett tomt rutnät (10 x 10 rutor; facit har x 0–10 med steg 1 och y 0–200 med steg
// 20) och ritar grafen på ett löst papper (rutnätet är konturen). 2c (D11) är en vanlig talruta: 140. Sidan ser inte
// elevens egen graf.
//
// 3a–c läser av grafen f(x) = 7x (x är tid i timmar, y avstånd i mil). 3a facit är "Efter 5 timmar": talet 5, enheten
// ignoreras.

const PRICE_GRID = {
  x: { min: "0", max: "6,5", step: "0,5", label: "Vikt (kg)" },
  y: { min: "0", max: "65", step: "5", label: "Pris (kr)" },
};

const PRICE_GRAPH = {
  x: { min: "0", max: "6,5", step: "0,5", label: "Vikt (kg)" },
  y: { min: "0", max: "65", step: "5", label: "Pris (kr)" },
  line: "10",
};

const CAR_GRAPH = {
  x: { min: "0", max: "6,5", step: "0,5", label: "Tid (timmar)" },
  y: { min: "0", max: "50", step: "5", label: "Avstånd (mil)" },
  line: "7",
};

// Figurerna ritas ur datan: pieces är delarna som kan skuggas, shaded de som redan är skuggade och lines extra streck.
const EMPTY_GRID = {
  view: [120, 115],
  pieces: [{ path: "M10 5H110V105H10Z" }],
  lines: [
    "M10 5V105M20 5V105M30 5V105M40 5V105M50 5V105M60 5V105M70 5V105M80 5V105M90 5V105M100 5V105M110 5V105",
    "M10 5H110M10 15H110M10 25H110M10 35H110M10 45H110M10 55H110M10 65H110M10 75H110M10 85H110M10 95H110M10 105H110",
    "M6.5 9L10 3L13.5 9",
    "M106 101.5L113 105L106 108.5",
  ],
};

export default {
  code: "RP2",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Proportionalitet i grafform",
  time: { min: 6, max: 7, stop: 15 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Tabellen visar hur mycket det kostar att köpa äpplen som kostar 10 kr/kg. Fyll i tabellen vad det kostar att köpa 5 kg och 6 kg äpplen.",
      table: {
        head: ["Vikt (kg)", "Pris (kr)"],
        rows: [["1", "10"], ["2", "20"], ["4", "40"], ["5", "[a]"], ["6", "[b]"]],
      },
      points: "one",
      boxes: { a: { accept: ["50"] }, b: { accept: ["60"] } },
    },
    {
      kind: "plot",
      label: "1b",
      text: "Äpplen kostar 10 kr/kg: 1 kg kostar 10 kr, 2 kg 20 kr, 4 kg 40 kr, 5 kg 50 kr och 6 kg 60 kr. Pricka in värdena i koordinatsystemet. Klicka på skärningarna i rutnätet.",
      chart: PRICE_GRID,
      points: [[1, 10], [2, 20], [4, 40], [5, 50], [6, 60]],
      optional: [[0, 0]],
    },
    {
      label: "1c",
      text: "Använd grafen för att läsa av hur mycket 4,5 kg äpplen kostar.",
      chart: PRICE_GRAPH,
      points: "each",
      boxes: { a: { accept: ["45"] } },
    },
    {
      label: "2a",
      text: "Att hyra film i en butik kostar 20 kronor/film. Fyll i tabellen som visar vad det kostar att hyra olika antal filmer.",
      table: {
        head: ["Antal filmer", "Pris (kr)"],
        rows: [["1", "20"], ["2", "[a]"], ["4", "[b]"], ["10", "[c]"]],
      },
      points: "one",
      boxes: { a: { accept: ["40"] }, b: { accept: ["80"] }, c: { accept: ["200"] } },
    },
    {
      kind: "paper",
      label: "2b",
      text: "Gradera axlarna i koordinatsystemet (y-axeln: Pris (kr), x-axeln: Antal filmer) och rita ut grafen till tabellen: 1 film kostar 20 kr, 2 filmer 40 kr, 4 filmer 80 kr och 10 filmer 200 kr.",
      figure: EMPTY_GRID,
    },
    {
      label: "2c",
      text: "Avläs ur grafen vad det kostar att hyra 7 filmer.",
      points: "each",
      boxes: { a: { accept: ["140"] } },
    },
    {
      label: "3a",
      text: "En bil kör hela tiden med samma hastighet. I diagrammet ser du hur långt bilen kommer på en viss tid (f(x) = 7x). Efter hur lång tid har bilen kört 35 mil?",
      chart: CAR_GRAPH,
      points: "each",
      boxes: { a: { accept: ["5"] } },
    },
    {
      label: "3b",
      text: "En bil kör hela tiden med samma hastighet. I diagrammet ser du hur långt bilen kommer på en viss tid (f(x) = 7x). Hur långt kommer bilen på 3 timmar?",
      chart: CAR_GRAPH,
      points: "each",
      boxes: { a: { accept: ["21"] } },
    },
    {
      label: "3c",
      text: "En bil kör hela tiden med samma hastighet. I diagrammet ser du hur långt bilen kommer på en viss tid (f(x) = 7x). Hur långt kommer en bil som kör hälften så fort på 5 timmar?",
      chart: CAR_GRAPH,
      points: "each",
      boxes: { a: { accept: ["17,5"] } },
    },
  ],
};
