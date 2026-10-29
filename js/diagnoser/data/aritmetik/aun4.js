// DIAGNOS AUn4, Negativa tal.
// Elevbladet är s. 101, lärarsidorna s. 100–102 och facit står på s. 100 i 1_Aritmetik.pdf.
//
// Åtta skärmar, en per etikett på bladet (1a, 1b, …, 4b), var och en med en ruta, a. Resultatblanketten har en
// kolumn per etikett: 8 i allt.
//
// På bladet står mellanrum i några paranteser, "(− 3)"; här står de utan mellanrum.
//
// Facit till 4a är "−10 1/2" (blandat tal); rutan godtar också −10,5 och −21/2 som samma värde.
//
// Bladets 2b är tryckt som "(−2)[(3 − (−5)]", där en parentes saknar sin pardel. Här står den som
// "(−2)[(3 − (−5))]", samma tecken med den saknade parentesen tillagd; svaret −16 är detsamma.
export default {
  code: "AUn4",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Negativa tal",
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
      rows: ["3 + (2 - 4) = [a]"],
      boxes: { a: { accept: ["1"] } },
    },
    {
      label: "1b",
      text: "Beräkna",
      points: "each",
      rows: ["6 - (4 - 2) = [a]"],
      boxes: { a: { accept: ["4"] } },
    },
    {
      label: "2a",
      text: "Beräkna",
      points: "each",
      rows: ["3(1 - 5) = [a]"],
      boxes: { a: { accept: ["-12"] } },
    },
    {
      label: "2b",
      text: "Beräkna",
      points: "each",
      rows: ["(-2)[(3 - (-5))] = [a]"],
      boxes: { a: { accept: ["-16"] } },
    },
    {
      label: "3a",
      text: "Beräkna",
      points: "each",
      rows: ["(-7) + (-3) - (-2) = [a]"],
      boxes: { a: { accept: ["-8"] } },
    },
    {
      label: "3b",
      text: "Beräkna",
      points: "each",
      rows: ["(-3) + (-4) - 3 = [a]"],
      boxes: { a: { accept: ["-10"] } },
    },
    {
      label: "4a",
      text: "Beräkna",
      points: "each",
      rows: ["(-3)(2 - {3|(-2)}) = [a]"],
      boxes: { a: { accept: ["-10 1/2"] } },
    },
    {
      label: "4b",
      text: "Beräkna",
      points: "each",
      rows: ["(-0,5)(2 + (-3) - {(-0,4)|0,2}) = [a]"],
      boxes: { a: { accept: ["-0,5"] } },
    },
  ],
};
