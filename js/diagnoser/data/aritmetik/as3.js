// DIAGNOS AS3, Addition och subtraktion, textuppgifter.
// Elevbladet är s. 58–59, lärarsidorna s. 57–60 och facit står på s. 57 i 1_Aritmetik.pdf.
//
// Sju textuppgifter, en skärm var (1–7). Resultatblanketten har en kolumn per uppgift. Skärmen har ingen
// rows: texten är uppgiften och rutan a kommer efter "Svar:". Eleven räknar på papper och skriver bara
// svaret; om också uträkningen är godkänd (S på blanketten) kan skärmen inte avgöra.
//
// accept är facits svar utan enhet ("72 kr" blir "72", "572 (st)" blir "572"). Facit säger att ett svar
// med enhet ska bedömas som rätt, och rutan läser talet och slänger ett ord efter det.
//
// Bladets titel har ett tryckfel, "Additions och subtraktion"; här står "Addition och subtraktion".
// Uppgift 4 skriver "frimären" på bladet; här står "frimärken".
export default {
  code: "AS3",
  area: "Aritmetik",
  sub: "AS Skriftlig räkning",
  title: "Addition och subtraktion, textuppgifter",
  time: { min: 4, max: 5, stop: 10 },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Lina köper en anteckningsbok för 48 kr och en penna för 24 kr. Hur mycket får hon betala?",
      points: "each",
      boxes: { a: { accept: ["72"] } },
    },
    {
      label: "2",
      text: "Morfar är 63 år och mamma är 37 år. Hur mycket äldre är morfar än mamma?",
      points: "each",
      boxes: { a: { accept: ["26"] } },
    },
    {
      label: "3",
      text: "Nicolas hoppar 528 cm i längdhopp. Hans lillasyster Stina hoppar 376 cm. Hur mycket längre hoppar Nicolas än Stina?",
      points: "each",
      boxes: { a: { accept: ["152"] } },
    },
    {
      label: "4",
      text: "Erik har 325 svenska frimärken och 247 utländska frimärken. Hur många frimärken har han sammanlagt?",
      points: "each",
      boxes: { a: { accept: ["572"] } },
    },
    {
      label: "5",
      text: "Marco köper ett par byxor för 346 kr och en skjorta för 179 kr. Hur mycket kostar det tillsammans?",
      points: "each",
      boxes: { a: { accept: ["525"] } },
    },
    {
      label: "6",
      text: "Malin sparar till en cykel som kostar 525 kr. Hon har nu 378 kr. Hur mycket pengar fattas för att hon ska kunna köpa cykeln?",
      points: "each",
      boxes: { a: { accept: ["147"] } },
    },
    {
      label: "7",
      text: "Ett band är 304 cm långt. Du klipper av 138 cm. Hur mycket är det då kvar av bandet?",
      points: "each",
      boxes: { a: { accept: ["166"] } },
    },
  ],
};
