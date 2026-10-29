// DIAGNOS AUp2, Potenslagar 1.
// Elevbladet är s. 107, lärarsidorna s. 106–108 och facit står på s. 106 i 1_Aritmetik.pdf.
//
// Tio skärmar, en per etikett på bladet (1a, 1b, …, 5b), var och en med en ruta, a. Uppmaningen (Förenkla,
// Beräkna) står som text på varje skärm. Resultatblanketten har en kolumn per etikett: 10 i allt.
//
// "Förenkla" (1–3) ska ge en potens, så de rutorna rättas på formen (form: "exact"): 3^5, inte 243.
// "Beräkna" (4–5) rättas på värdet.
export default {
  code: "AUp2",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Potenslagar 1",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: true,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Förenkla",
      points: "each",
      rows: ["3^2 · 3^3 = [a]"],
      boxes: { a: { accept: ["3^5"], form: "exact" } },
    },
    {
      label: "1b",
      text: "Förenkla",
      points: "each",
      rows: ["5^12 · 5^7 = [a]"],
      boxes: { a: { accept: ["5^19"], form: "exact" } },
    },
    {
      label: "2a",
      text: "Förenkla",
      points: "each",
      rows: ["3 · 3^2 = [a]"],
      boxes: { a: { accept: ["3^3"], form: "exact" } },
    },
    {
      label: "2b",
      text: "Förenkla",
      points: "each",
      rows: ["3^0 · 3^2 = [a]"],
      boxes: { a: { accept: ["3^2"], form: "exact" } },
    },
    {
      label: "3a",
      text: "Förenkla",
      points: "each",
      rows: ["{4^35|4^25} = [a]"],
      boxes: { a: { accept: ["4^10"], form: "exact" } },
    },
    {
      label: "3b",
      text: "Förenkla",
      points: "each",
      rows: ["{12^18|12^10} = [a]"],
      boxes: { a: { accept: ["12^8"], form: "exact" } },
    },
    {
      label: "4a",
      text: "Beräkna",
      points: "each",
      rows: ["{4^4 · 3^7|4^3 · 3^5} = [a]"],
      boxes: { a: { accept: ["36"] } },
    },
    {
      label: "4b",
      text: "Beräkna",
      points: "each",
      rows: ["{7^4 · 5^5|7^3 · 5^4} = [a]"],
      boxes: { a: { accept: ["35"] } },
    },
    {
      label: "5a",
      text: "Beräkna",
      points: "each",
      rows: ["{6^4|3^4} = [a]"],
      boxes: { a: { accept: ["16"] } },
    },
    {
      label: "5b",
      text: "Beräkna",
      points: "each",
      rows: ["{6^5 · 3^4|4^2 · 3^6} = [a]"],
      boxes: { a: { accept: ["54"] } },
    },
  ],
};
