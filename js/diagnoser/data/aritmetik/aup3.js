// DIAGNOS AUp3, Potenslagar 2.
// Elevbladet är s. 110, lärarsidorna s. 109–111 och facit står på s. 109 i 1_Aritmetik.pdf.
//
// 12 skärmar, en per etikett på bladet (1a, 1b, …, 6b), var och en med en ruta, a. Uppmaningen står som text
// på varje skärm. Resultatblanketten har en kolumn per etikett: 12 i allt.
//
// "Skriv i potensform med basen 2" (4) och "Förenkla" (5) rättas på formen (form: "exact"): 1/8 ska stå
// som 2^-3, och 4^7 · 4^-5 som 4^2. "Beräkna" (1–3, 6) rättas på värdet, så 1/25 och 0,04 är lika bra.
//
// Facit till 6a och 6b skriver "2^3 = 8" och "3^-1 = 1/3". Svaret är talet efter likhetstecknet:
// Genomförande säger att "Beräkna" betyder att svaret ska ges med ett tal. 2^3 och 3^-1 räknas därför
// inte som svar.
export default {
  code: "AUp3",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Potenslagar 2",
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
      rows: ["(-4)^2 = [a]"],
      boxes: { a: { accept: ["16"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["(-1)^5 = [a]"],
      boxes: { a: { accept: ["-1"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["5^-2 = [a]"],
      boxes: { a: { accept: ["1/25"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["2^-4 = [a]"],
      boxes: { a: { accept: ["1/16"] } },
    },
    {
      label: "3a",
      text: "Beräkna",
      points: "each",
      rows: ["(-3)^-2 = [a]"],
      boxes: { a: { accept: ["1/9"] } },
    },
    {
      label: "3b",
      text: "Beräkna",
      points: "each",
      rows: ["(-1)^-7 = [a]"],
      boxes: { a: { accept: ["-1"] } },
    },
    {
      label: "4a",
      text: "Skriv i potensform med basen 2",
      points: "each",
      rows: ["{1|8} = [a]"],
      boxes: { a: { accept: ["2^-3"], form: "exact" } },
    },
    {
      label: "4b",
      text: "Skriv i potensform med basen 2",
      points: "each",
      rows: ["{1|2} = [a]"],
      boxes: { a: { accept: ["2^-1"], form: "exact" } },
    },
    {
      label: "5a",
      text: "Förenkla",
      points: "each",
      rows: ["4^7 · 4^-5 = [a]"],
      boxes: { a: { accept: ["4^2"], form: "exact" } },
    },
    {
      label: "5b",
      text: "Förenkla",
      points: "each",
      rows: ["2^-3 · 2^-1 = [a]"],
      boxes: { a: { accept: ["2^-4"], form: "exact" } },
    },
    {
      label: "6a",
      text: "Beräkna",
      points: "each",
      rows: ["{1|2^-3} = [a]"],
      boxes: { a: { accept: ["8"] } },
    },
    {
      label: "6b",
      text: "Beräkna",
      points: "each",
      rows: ["{3^-2|3^-1} = [a]"],
      boxes: { a: { accept: ["1/3"] } },
    },
  ],
};
