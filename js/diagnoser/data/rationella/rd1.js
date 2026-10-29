// DIAGNOS RD1, Tal i decimalform.
// Elevbladet är s. 35, lärarsidorna s. 34 och facit står på s. 34 i 2_Rationella_tal.pdf.
//
// 23 kolumner på resultatblanketten (s. 36): 1a–d (4), 2a–d (4), 3a–c (3), 4a–c (3), 5a och 5b (2), 6a–c (3) och
// 7a–d (4).
//
// 1 och 2 ber om decimalform ("Skriv som ett decimaltal"), så de rättas med form: "exact": 1/10 och 5/10 för 0,5
// är inte decimaltal. Eftersom 0,50 är lika rätt som 0,5 står de decimalformer som är samma tal i accept.
//
// 3a–c är intervall (D4, range): facit säger "t.ex." och varje tal strikt mellan gränserna är rätt, också
// 0,55 för 3a eller 0,245 för 3b. accept[0] är facits exempel och visas som rätt svar; 3b har två ("0,24 eller 0,25").
//
// 4a–c är val (choose): ett av två tal, en kolumn var. Bladet säger "Ringa in det talet"; här väljer eleven talet.
// Obs 4b, 0,10 mot 0,9: den som läser 0,10 som "noll komma tio" tror att 0,9 är mindre (lärarsidan).
//
// 5 är en tallinje 0 till 1 med streck var 0,1 och siffrorna 0, 0,5 och 1 som på bladet (elva streck). a = 0,6 sitter
// på ett streck, b = 0,25 mitt emellan två (snap 0,05, som AUn1 3). En kolumn per bokstav: 5a och 5b.
export default {
  code: "RD1",
  area: "Rationella tal",
  sub: "RD Tal i decimalform",
  title: "Tal i decimalform",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{1|10} = [a]"],
      boxes: { a: { accept: ["0,1", "0,10"], form: "exact" } },
    },
    {
      label: "1b",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{3|10} = [a]"],
      boxes: { a: { accept: ["0,3", "0,30"], form: "exact" } },
    },
    {
      label: "1c",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{11|10} = [a]"],
      boxes: { a: { accept: ["1,1", "1,10"], form: "exact" } },
    },
    {
      label: "1d",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{3|100} = [a]"],
      boxes: { a: { accept: ["0,03", "0,030"], form: "exact" } },
    },
    {
      label: "2a",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{1|2} = [a]"],
      boxes: { a: { accept: ["0,5", "0,50"], form: "exact" } },
    },
    {
      label: "2b",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{1|4} = [a]"],
      boxes: { a: { accept: ["0,25", "0,250"], form: "exact" } },
    },
    {
      label: "2c",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{1|5} = [a]"],
      boxes: { a: { accept: ["0,2", "0,20"], form: "exact" } },
    },
    {
      label: "2d",
      text: "Skriv som ett decimaltal.",
      points: "each",
      rows: ["{1|50} = [a]"],
      boxes: { a: { accept: ["0,02", "0,020"], form: "exact" } },
    },
    {
      label: "3a",
      text: "Skriv ett tal som ligger mellan följande tal.",
      points: "each",
      rows: ["0,5 < [a] < 0,7"],
      boxes: { a: { accept: ["0,6"], range: { gt: "0,5", lt: "0,7" } } },
    },
    {
      label: "3b",
      text: "Skriv ett tal som ligger mellan följande tal.",
      points: "each",
      rows: ["0,23 < [a] < 0,26"],
      boxes: { a: { accept: ["0,24", "0,25"], range: { gt: "0,23", lt: "0,26" } } },
    },
    {
      label: "3c",
      text: "Skriv ett tal som ligger mellan följande tal.",
      points: "each",
      rows: ["0,4 < [a] < 0,5"],
      boxes: { a: { accept: ["0,45"], range: { gt: "0,4", lt: "0,5" } } },
    },
    {
      kind: "choose",
      label: "4a",
      text: "Vilket tal är störst? Välj det talet.",
      options: [
        { id: "a", markup: "1,0" },
        { id: "b", markup: "0,9" },
      ],
      accept: "a",
    },
    {
      kind: "choose",
      label: "4b",
      text: "Vilket tal är störst? Välj det talet.",
      options: [
        { id: "a", markup: "0,10" },
        { id: "b", markup: "0,9" },
      ],
      accept: "b",
    },
    {
      kind: "choose",
      label: "4c",
      text: "Vilket tal är störst? Välj det talet.",
      options: [
        { id: "a", markup: "0,19" },
        { id: "b", markup: "0,8" },
      ],
      accept: "b",
    },
    {
      kind: "place",
      label: "5",
      text: "Sätt ett a vid talet 0,6 på tallinjen och ett b vid talet 0,25 på tallinjen.",
      line: { min: 0, max: 1, step: "0,1", snap: "0,05", labels: [0, "0,5", 1] },
      letters: { a: "0,6", b: "0,25" },
    },
    {
      label: "6a",
      text: "Beräkna.",
      points: "each",
      rows: ["1 - 0,6 = [a]"],
      boxes: { a: { accept: ["0,4"] } },
    },
    {
      label: "6b",
      text: "Beräkna.",
      points: "each",
      rows: ["2 + 0,7 = [a]"],
      boxes: { a: { accept: ["2,7"] } },
    },
    {
      label: "6c",
      text: "Beräkna.",
      points: "each",
      rows: ["2 - 0,5 = [a]"],
      boxes: { a: { accept: ["1,5"] } },
    },
    {
      label: "7a",
      text: "Beräkna.",
      points: "each",
      rows: ["Hälften av 0,8 = [a]"],
      boxes: { a: { accept: ["0,4"] } },
    },
    {
      label: "7b",
      text: "Beräkna.",
      points: "each",
      rows: ["En tredjedel av 0,9 = [a]"],
      boxes: { a: { accept: ["0,3"] } },
    },
    {
      label: "7c",
      text: "Beräkna.",
      points: "each",
      rows: ["En fjärdedel av 0,16 = [a]"],
      boxes: { a: { accept: ["0,04"] } },
    },
    {
      label: "7d",
      text: "Beräkna.",
      points: "each",
      rows: ["Hälften av 1,6 = [a]"],
      boxes: { a: { accept: ["0,8"] } },
    },
  ],
};
