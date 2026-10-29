// DIAGNOS AUp4, Kvadratrötter.
// Elevbladet är s. 113, lärarsidorna s. 112–114 och facit står på s. 112 i 1_Aritmetik.pdf.
//
// 14 skärmar, en per etikett på bladet (1a, 1b, …, 7b), var och en med en ruta, a. Uppmaningen står som text
// på varje skärm. Resultatblanketten har en kolumn per etikett: 14 i allt.
//
// "Beräkna" (1–4) rättas på värdet. "Förenkla" (5–7) rättas på formen (form: "exact"): √32 ska stå som
// 4√2 och √27 som 3√3. Facit till 7b är √3/2 (efter √(3/4) = √3/2); 1/2√3 och 0,5√3 är samma tal i
// lika enkel form och godtas också. På bladet är 4a och 4b √(16 + 9) och √(4 + 5), med rotstrecket över
// hela summan; bladet skriver 4b som "√4 +5", här med vanligt mellanrum.
export default {
  code: "AUp4",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Kvadratrötter",
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
      rows: ["√16 = [a]"],
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["√49 = [a]"],
      boxes: { a: { accept: ["7"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["√{5^2} = [a]"],
      boxes: { a: { accept: ["5"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["(√3)^2 = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "3a",
      text: "Beräkna",
      points: "each",
      rows: ["√16 + √9 = [a]"],
      boxes: { a: { accept: ["7"] } },
    },
    {
      label: "3b",
      text: "Beräkna",
      points: "each",
      rows: ["√12 · √3 = [a]"],
      boxes: { a: { accept: ["6"] } },
    },
    {
      label: "4a",
      text: "Beräkna",
      points: "each",
      rows: ["√{16 + 9} = [a]"],
      boxes: { a: { accept: ["5"] } },
    },
    {
      label: "4b",
      text: "Beräkna",
      points: "each",
      rows: ["√{4 + 5} = [a]"],
      boxes: { a: { accept: ["3"] } },
    },
    {
      label: "5a",
      text: "Förenkla",
      points: "each",
      rows: ["√32 = [a]"],
      boxes: { a: { accept: ["4√2"], form: "exact" } },
    },
    {
      label: "5b",
      text: "Förenkla",
      points: "each",
      rows: ["√27 = [a]"],
      boxes: { a: { accept: ["3√3"], form: "exact" } },
    },
    {
      label: "6a",
      text: "Förenkla",
      points: "each",
      rows: ["√3 + √27 = [a]"],
      boxes: { a: { accept: ["4√3"], form: "exact" } },
    },
    {
      label: "6b",
      text: "Förenkla",
      points: "each",
      rows: ["√18 · √6 = [a]"],
      boxes: { a: { accept: ["6√3"], form: "exact" } },
    },
    {
      label: "7a",
      text: "Förenkla",
      points: "each",
      rows: ["√{{1|9}} = [a]"],
      boxes: { a: { accept: ["1/3"], form: "exact" } },
    },
    {
      label: "7b",
      text: "Förenkla",
      points: "each",
      rows: ["{√12|√16} = [a]"],
      boxes: { a: { accept: ["√3/2", "1/2√3", "0,5√3"], form: "exact" } },
    },
  ],
};
