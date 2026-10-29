// DIAGNOS RP7, Ränta.
// Elevbladet är s. 77, lärarsidorna s. 76 och facit står på s. 76 i 2_Rationella_tal.pdf.
//
// Sju textuppgifter (1–7) med bara Svar: texten är uppgiften och rutan a kommer efter "Svar:". Resultatblanketten
// har en kolumn per uppgift: 7 i allt. Eleven får ett lösblad (paper: true) och läraren ger gärna miniräknare.
// Läraren anger bara "15–20 minuter" och ingen tid att avbryta efter, så stop är null.
//
// Uppgift 1, 3 och 4 frågar efter räntesatsen: accept är talet i procent ("5,4") och units läser "5,4 %" som
// rätt men inte "0,054" (D2). Uppgift 6: facits 82 193 kr är avrundat (100 000 / 1,04^5 = 82 192,71…), så
// 82 193, 82 192,7 och 82 192,71 är rätt (D12).
// Läraren ber läsaren studera de redovisade lösningarna, eftersom eleven ofta utgår från fel helhet.
//
// Bladets tryckfel rättas bara i texten: "5 %.Varje" (2) står som "5 %. Varje" och "sätt in" (6) som "sätta in".
export default {
  code: "RP7",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Ränta",
  time: { min: 15, max: 20, stop: null },
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Mette lånar i början av ett år 60 000 kr till rörlig ränta. Efter ett år har lånet vuxit till 63 240 kr. Hur stor har den genomsnittliga räntesatsen varit?",
      points: "each",
      boxes: { a: { accept: ["5,4"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "2",
      text: "Du har lånat 80 000 till räntesatsen 5 %. Varje år betalar du tillbaka 10 000 plus räntan. Hur mycket betalar du tillbaka efter det andra året?",
      points: "each",
      boxes: { a: { accept: ["13 500"] } },
    },
    {
      label: "3",
      text: "Erik har två lån ett på 120 000 kr till 4 % ränta och ett annat på 80 000 kr till 5 % ränta. Hur stor är räntesatsen i genomsnitt på de 200 000 kr han lånat?",
      points: "each",
      boxes: { a: { accept: ["4,4"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "4",
      text: "Nora har lånat 60 000 kr. Efter 3 månader betalar hon tillbaka lånet med ränta. Hon betalar då 60 900 kr. Bestäm räntesatsen.",
      points: "each",
      boxes: { a: { accept: ["6"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "5",
      text: "Till hur mycket växer ett kapital på 650 000 kr med ränta på ränta under 2 år om räntesatsen är 6 %?",
      points: "each",
      boxes: { a: { accept: ["730 340"] } },
    },
    {
      label: "6",
      text: "Märtas farmor vill att Märta skall ha 100 000 kr på banken när hon fyller 20 år. Hur mycket skall hon sätta in på banken på Märtas 15-årsdag om räntesatsen beräknas vara 4 %.",
      points: "each",
      boxes: { a: { accept: ["82 193", "82 192,7", "82 192,71"] } },
    },
    {
      label: "7",
      text: "Under 3 år i rad sätter Egil in 10 000 kr i början av året. Hur mycket har Egil på banken i början av det tredje året om räntan varit 3 %?",
      points: "each",
      boxes: { a: { accept: ["30 909"] } },
    },
  ],
};
