// DIAGNOS AUp5, Potenser och kvadratrötter.
// Elevbladet är s. 116, lärarsidorna s. 115–117 och facit står på s. 115 i 1_Aritmetik.pdf.
//
// 14 skärmar, en per etikett på bladet (1a, 1b, …, 7b), var och en med en ruta, a. Uppmaningen står som text
// på varje skärm. Resultatblanketten har en kolumn per etikett: 14 i allt.
//
// "Beräkna" (1–3) rättas på värdet; accept skriver facits −12 500 som "-12500", och rutan läser också
// svaret med mellanrum. "Förenkla så långt som möjligt" (4–7) rättas på formen (form: "exact").
//
// 5b, 6a och 7b har facit "Saknar reell lösning": en rot ur ett negativt tal är inget reellt tal. Rutan
// läser också "ingen lösning" och liknande.
//
// På bladet står 5b som √(−(3)²) med rotstrecket över −(3)² (inte √(−3)²), 6a som (√(−3))² och 7b som
// 2√(−3) · √(−3).
export default {
  code: "AUp5",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Potenser och kvadratrötter",
  time: { min: 5, max: 6, stop: 12 },
  paper: false,
  symbols: true,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Beräkna",
      points: "each",
      rows: ["4^3 + 5 = [a]"],
      boxes: { a: { accept: ["69"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["3 + 3^2 = [a]"],
      boxes: { a: { accept: ["12"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["(-5)^3 · 10^2 = [a]"],
      boxes: { a: { accept: ["-12500"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["(-3)^-2 = [a]"],
      boxes: { a: { accept: ["1/9"] } },
    },
    {
      label: "3a",
      text: "Beräkna",
      points: "each",
      rows: ["{4^5 + 4^5|4^5} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "3b",
      text: "Beräkna",
      points: "each",
      rows: ["{5^-5 + 5^-5|5^-5} = [a]"],
      boxes: { a: { accept: ["2"] } },
    },
    {
      label: "4a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{4^5 · 2^7|(-2)^15} = [a]"],
      boxes: { a: { accept: ["-4"], form: "exact" } },
    },
    {
      label: "4b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["{4^5 · (-2)^7|(-2)^15} = [a]"],
      boxes: { a: { accept: ["4"], form: "exact" } },
    },
    {
      label: "5a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["√{(-3)^2} = [a]"],
      boxes: { a: { accept: ["3"], form: "exact" } },
    },
    {
      label: "5b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["√{-(3)^2} = [a]"],
      boxes: { a: { accept: ["Saknar reell lösning"], form: "exact" } },
    },
    {
      label: "6a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["(√{(-3)})^2 = [a]"],
      boxes: { a: { accept: ["Saknar reell lösning"], form: "exact" } },
    },
    {
      label: "6b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["(-√3)^2 = [a]"],
      boxes: { a: { accept: ["3"], form: "exact" } },
    },
    {
      label: "7a",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["2√3 · √3 = [a]"],
      boxes: { a: { accept: ["6"], form: "exact" } },
    },
    {
      label: "7b",
      text: "Förenkla så långt som möjligt",
      points: "each",
      rows: ["2√{-3} · √{-3} = [a]"],
      boxes: { a: { accept: ["Saknar reell lösning"], form: "exact" } },
    },
  ],
};
