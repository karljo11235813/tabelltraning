// DIAGNOS RP4, Procenträkning.
// Elevbladet är s. 67, lärarsidorna s. 66 och facit står på s. 66 i 2_Rationella_tal.pdf.
//
// Fem textuppgifter (1–5) med bara Svar: texten är uppgiften och rutan a kommer efter "Svar:". Resultatblanketten
// har en kolumn per uppgift: 5 i allt. Läraren anger "cirka 15" minuter (inget spann), så min och max är båda 15.
//
// Procent (D2): accept är talet i procent ("25") och units läser "25 %", "25 procent", "250 ‰" och "250 promille"
// som rätt, men inte "0,25". Uppgift 3 frågar efter promille: accept "40", och 40, 40 ‰ och 4 % är rätt,
// men 40 % är fel (det är 400 ‰).
//
// Bladets tryckfel rättas bara i texten: "en nya blandningen" (2) står som "den nya blandningen" och
// "italienska ." (4) som "italienska.".
export default {
  code: "RP4",
  area: "Rationella tal",
  sub: "RP Proportionalitet och procent",
  title: "Procenträkning",
  time: { min: 15, max: 15, stop: 20 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "För att få en salladsdressing blandar man 3 dl olja och 1 dl vinäger. Hur många procent av blandningen består av vinäger?",
      points: "each",
      boxes: { a: { accept: ["25"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "2",
      text: "Vid ett barnkalas har man blandat 1 liter ren saft och 6 liter vatten. Eftersom saften blev för svag blandade man in ytterligare 5 dl ren saft. Hur många procent av den nya blandningen består av ren saft?",
      points: "each",
      boxes: { a: { accept: ["20"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "3",
      text: "1 liter vatten väger 1 kg. Elsa häller 100 g salt i 24 dl vatten. Hur stor blir salthalten uttryckt i promille?",
      points: "each",
      boxes: { a: { accept: ["40"], units: { "‰": 1, promille: 1, "%": 10, procent: 10 } } },
    },
    {
      label: "4",
      text: "I en by i Schweiz talar 452 personer franska, 800 personer tyska och 748 personer italienska. Hur många procent av alla i byn talar tyska?",
      points: "each",
      boxes: { a: { accept: ["40"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
    {
      label: "5",
      text: "I ett kärl blandar Stina 1,2 liter vatten och 0,4 liter ren ättiksprit. Hur många procent ättiksprit innehåller blandningen?",
      points: "each",
      boxes: { a: { accept: ["25"], units: { "%": 1, procent: 1, "‰": "1/10", promille: "1/10" } } },
    },
  ],
};
