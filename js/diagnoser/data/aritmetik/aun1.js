// DIAGNOS AUn1, Negativa tal, taluppfattning.
// Elevbladet är s. 91–92, lärarsidorna s. 90–93 och facit står på s. 90 i 1_Aritmetik.pdf.
//
// Sex skärmar: 1a och 1b (storleksordning), 2 och 3 (placera på tallinjen), 4 och 5 (läsa av tallinjen).
// Resultatblanketten har 22 kolumner: 1a, 1b och en per bokstav på tallinjerna (2a–2e, 3a–3e, 4a–4e,
// 5a–5e). 1a och 1b är en kolumn var: facit anger hela ordningen, så allt ska stå rätt.
//
// Tallinjerna är mätta på bladet (streckens avstånd) och stämmer med facits bokstäver:
//   2: −8 till 7, steg 1, siffrorna −5 och 5 (0 har ett längre streck).
//   3: −2,4 till 2,4, streck var 0,2 med längre streck vid heltalen (long), siffrorna −1, 0 och 1. Facit
//      sätter a = 0,1 och d = −0,9 mitt emellan två streck ("var observant på indelningen"), så bokstäverna
//      snäpper var 0,1 (snap) men strecken ritas som på bladet.
//   4: −7 till 8, steg 1, siffrorna 0 och 5.
//   5: −2,4 till 2,4, streck var 0,2 med längre streck vid heltalen, siffrorna −1 och 1; alla bokstävers
//      värden ligger på bladets streck.
export default {
  code: "AUn1",
  area: "Aritmetik",
  sub: "AU Utvidgad aritmetik",
  title: "Negativa tal, taluppfattning",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: true,
  notes: [],
  example: null,
  screens: [
    {
      label: "1a",
      text: "Skriv följande tal i storleksordning. Börja med det minsta.",
      points: "one",
      rows: ["(-1)    4    0    (-12)    (-6)", "[a]  [b]  [c]  [d]  [e]"],
      boxes: { a: { accept: ["-12"] }, b: { accept: ["-6"] }, c: { accept: ["-1"] }, d: { accept: ["0"] }, e: { accept: ["4"] } },
    },
    {
      label: "1b",
      text: "Skriv följande tal i storleksordning. Börja med det minsta.",
      points: "one",
      rows: ["(-0,5)    1,2    0    (-2,1)    (-0,1)", "[a]  [b]  [c]  [d]  [e]"],
      boxes: { a: { accept: ["-2,1"] }, b: { accept: ["-0,5"] }, c: { accept: ["-0,1"] }, d: { accept: ["0"] }, e: { accept: ["1,2"] } },
    },
    {
      label: "2",
      kind: "place",
      text: "Placera följande tal på tallinjen.",
      line: { min: -8, max: 7, step: "1", labels: [-5, 5] },
      letters: { a: "−3", b: "0", c: "−1", d: "4", e: "−6" },
    },
    {
      label: "3",
      kind: "place",
      text: "Placera följande tal på tallinjen.",
      line: { min: "-2,4", max: "2,4", step: "0,2", snap: "0,1", long: "1", labels: [-1, 0, 1] },
      letters: { a: "0,1", b: "−0,4", c: "1,2", d: "−0,9", e: "−1,8" },
    },
    {
      label: "4",
      kind: "read",
      text: "Vilka tal på tallinjen står bokstäverna för.",
      line: { min: -7, max: 8, step: "1", labels: [0, 5] },
      marks: { a: "8", b: "0", c: "3", d: "−2", e: "−7" },
    },
    {
      label: "5",
      kind: "read",
      text: "Vilka tal på tallinjen står bokstäverna för.",
      line: { min: "-2,4", max: "2,4", step: "0,2", long: "1", labels: [-1, 1] },
      marks: { a: "0,2", b: "1,4", c: "−0,4", d: "−1,2", e: "−1,8" },
    },
  ],
};
