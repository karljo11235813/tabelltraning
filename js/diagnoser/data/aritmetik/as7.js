// DIAGNOS AS7, Skriftlig multiplikation, flersiffriga faktorer.
// Elevbladet är s. 72–73, lärarsidorna s. 71–74 och facit står på s. 71 i 1_Aritmetik.pdf.
//
// Sex uppgifter, en skärm var (1–6). Resultatblanketten har en kolumn per uppgift. Eleven räknar på
// papper och skriver bara svaret. Diamant ber läraren titta efter fel av typen ± 1, ± 10 och ± 100
// och efter att eleven tagit ena faktorn en gång för mycket eller för lite (s. 71; sidan skriver "den
// ensiffriga faktorn", men uppgifterna har två flersiffriga). Därför har varje ruta factors, de två
// faktorerna, och ett svar som avviker med en av dem får anteckningen "Fel med 36 (en faktor)".
export default {
  code: "AS7",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Skriftlig multiplikation, flersiffriga faktorer",
  time: { min: 5, max: 6, stop: 12 },
  paper: true,
  symbols: false,
  notes: [1, 10, 100, "faktor"],
  example: null,
  screens: [
    {
      label: "1",
      text: "",
      points: "each",
      rows: ["36 · 20 = [a]"],
      boxes: { a: { accept: ["720"], factors: [36, 20] } },
    },
    {
      label: "2",
      text: "",
      points: "each",
      rows: ["40 · 27 = [a]"],
      boxes: { a: { accept: ["1080"], factors: [40, 27] } },
    },
    {
      label: "3",
      text: "",
      points: "each",
      rows: ["42 · 61 = [a]"],
      boxes: { a: { accept: ["2562"], factors: [42, 61] } },
    },
    {
      label: "4",
      text: "",
      points: "each",
      rows: ["47 · 36 = [a]"],
      boxes: { a: { accept: ["1692"], factors: [47, 36] } },
    },
    {
      label: "5",
      text: "",
      points: "each",
      rows: ["87 · 69 = [a]"],
      boxes: { a: { accept: ["6003"], factors: [87, 69] } },
    },
    {
      label: "6",
      text: "",
      points: "each",
      rows: ["23 · 154 = [a]"],
      boxes: { a: { accept: ["3542"], factors: [23, 154] } },
    },
  ],
};
