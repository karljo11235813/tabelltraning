// DIAGNOS AS4, Skriftlig multiplikation.
// Elevbladet är s. 62, lärarsidorna s. 61–63 och facit står på s. 61 i 1_Aritmetik.pdf.
//
// Fem uppgifter, en skärm var (1–5). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Diamant ber läraren titta efter fel av typen ± 1, ± 10 och ± 100
// och efter att eleven tagit ena faktorn en gång för mycket eller för lite (s. 61); därför har varje
// ruta factors, de två faktorerna, och ett svar som avviker med en av dem får anteckningen
// "Fel med 47 (en faktor)".
export default {
  code: "AS4",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig multiplikation",
  time: { min: 4, max: 5, stop: 10 },
  paper: true,
  symbols: false,
  notes: [1, 10, 100, "faktor"],
  example: null,
  screens: [
    {
      label: "1",
      text: "",
      points: "each",
      rows: ["4 · 27 = [a]"],
      boxes: { a: { accept: ["108"], factors: [4, 27] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["6 · 47 = [a]"],
      boxes: { a: { accept: ["282"], factors: [6, 47] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["7 · 63 = [a]"],
      boxes: { a: { accept: ["441"], factors: [7, 63] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["8 · 67 = [a]"],
      boxes: { a: { accept: ["536"], factors: [8, 67] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["4 · 279 = [a]"],
      boxes: { a: { accept: ["1116"], factors: [4, 279] } },
    },
  ],
};
