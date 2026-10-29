// DIAGNOS AUp1, Potenser, grundläggande.
// Elevbladet är s. 104, lärarsidorna s. 103–105 och facit står på s. 103 i 1_Aritmetik.pdf.
//
// 16 skärmar, en per etikett på bladet (1a, 1b, …, 8b), var och en med en ruta, a. Varje nummer har sin egen
// uppmaning på bladet och den står som text på båda skärmarna. Resultatblanketten har en kolumn per etikett:
// 16 i allt.
//
// "Beräkna" (1–2) rättas på värdet. "Skriv som potens med bas 2" (3), "Skriv utan potenser" (4, 5, 7) och
// "Skriv i grundpotensform" (6, 8) rättas på formen (form: "exact"): 8 ska stå som 2^3 och 600 som 6·10^2,
// och 500 för 5 · 10^2, inte uppgiften avskriven. accept skriver facits tal utan tusentalsmellanrum
// ("70 000 000" blir "70000000"); rutan läser också svaret med mellanrum. Bladet skriver 57 000 och
// 0,000 000 013 med mellanrum, och de står så i raderna.
export default {
  code: "AUp1",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Potenser, grundläggande",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: true,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Beräkna",
      points: "each",
      rows: ["3^2 = [a]"],
      boxes: { a: { accept: ["9"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["2^5 = [a]"],
      boxes: { a: { accept: ["32"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["4^1 = [a]"],
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["5^0 = [a]"],
      boxes: { a: { accept: ["1"] } },
    },
    {
      label: "3a",
      text: "Skriv som potens med bas 2",
      points: "each",
      rows: ["8 = [a]"],
      boxes: { a: { accept: ["2^3"], form: "exact" } },
    },
    {
      label: "3b",
      text: "Skriv som potens med bas 2",
      points: "each",
      rows: ["64 = [a]"],
      boxes: { a: { accept: ["2^6"], form: "exact" } },
    },
    {
      label: "4a",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["5 · 10^2 = [a]"],
      boxes: { a: { accept: ["500"], form: "exact" } },
    },
    {
      label: "4b",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["7 · 10^7 = [a]"],
      boxes: { a: { accept: ["70000000"], form: "exact" } },
    },
    {
      label: "5a",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["3,2 · 10^4 = [a]"],
      boxes: { a: { accept: ["32000"], form: "exact" } },
    },
    {
      label: "5b",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["1,435 · 10^2 = [a]"],
      boxes: { a: { accept: ["143,5"], form: "exact" } },
    },
    {
      label: "6a",
      text: "Skriv i grundpotensform",
      points: "each",
      rows: ["600 = [a]"],
      boxes: { a: { accept: ["6·10^2"], form: "exact" } },
    },
    {
      label: "6b",
      text: "Skriv i grundpotensform",
      points: "each",
      rows: ["57 000 = [a]"],
      boxes: { a: { accept: ["5,7·10^4"], form: "exact" } },
    },
    {
      label: "7a",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["4 · 10^-3 = [a]"],
      boxes: { a: { accept: ["0,004"], form: "exact" } },
    },
    {
      label: "7b",
      text: "Skriv utan potenser",
      points: "each",
      rows: ["6,23 · 10^-4 = [a]"],
      boxes: { a: { accept: ["0,000623"], form: "exact" } },
    },
    {
      label: "8a",
      text: "Skriv i grundpotensform",
      points: "each",
      rows: ["0,032 = [a]"],
      boxes: { a: { accept: ["3,2·10^-2"], form: "exact" } },
    },
    {
      label: "8b",
      text: "Skriv i grundpotensform",
      points: "each",
      rows: ["0,000 000 013 = [a]"],
      boxes: { a: { accept: ["1,3·10^-8"], form: "exact" } },
    },
  ],
};
