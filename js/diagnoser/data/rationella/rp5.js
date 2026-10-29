// DIAGNOS RP5, Procent, problemlösning.
// Elevbladet är s. 70, lärarsidorna s. 69 och facit står på s. 69 i 2_Rationella_tal.pdf.
//
// Fem textuppgifter (1–5) med bara Svar: texten är uppgiften och rutan a kommer efter "Svar:". Resultatblanketten
// har en kolumn per uppgift: 5 i allt. Eleven får ett lösblad (paper: true) och läraren bestämmer själv om
// miniräknare får användas. Läraren anger bara "ca 15–20 minuter" och ingen tid att avbryta efter, så stop är null.
//
// Uppgift 2 frågar efter procent: accept "16" och units läser "16 %" som rätt men inte "0,16" (D2).
// Läraren ber läsaren studera de redovisade lösningarna, eftersom eleven ofta utgår från fel helhet.
export default {
  code: "RP5",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Procent, problemlösning",
  time: { min: 15, max: 20, stop: null },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Ett par jeans kostar 720 kr. Man får 15 % rabatt. Hur mycket får man då betala?",
      points: "each",
      boxes: { a: { accept: ["612"] } },
    },
    {
      label: "2",
      text: "Lisas månadslön är 25 000 kr. När skatten är dragen har Lisa 21 000 kr kvar. Hur många procent av lönen betalar hon i skatt?",
      points: "each",
      boxes: { a: { accept: ["16"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "3",
      text: "En dator kostar 8 400 kr utan moms. Man får också betala 25 % moms. Hur mycket kostar datorn när momsen är inräknad?",
      points: "each",
      boxes: { a: { accept: ["10 500"] } },
    },
    {
      label: "4",
      text: "Priset på en skjorta som tidigare kostat 400 kr höjs med 15 %. På det priset får Erik 15 % rabatt. Hur mycket får Erik betala?",
      points: "each",
      boxes: { a: { accept: ["391"] } },
    },
    {
      label: "5",
      text: "Vid en rea har man sänkt alla priser med 20 %. Stina har där handlat kläder för 720 kr. Hur mycket skulle hon fått betala om det inte varit rea?",
      points: "each",
      boxes: { a: { accept: ["900"] } },
    },
  ],
};
