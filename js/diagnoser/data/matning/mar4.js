// DIAGNOS MAr4, Areaberäkning.
// Elevbladet är s. 66, lärarsidan s. 65 och facit står på s. 65 i 4_Matning.pdf.
//
// Sex textuppgifter (1–6) med bara Svar: texten är uppgiften och rutan a är svaret. Resultatblanketten (s. 67) har
// en kolumn per uppgift: 6 i allt. units räknar om mellan areaenheterna ("0,18 dm²" är rätt för 18 cm²).
// 3 och 5 är π-rutor: det exakta värdet med π (25π, 12π), ett närmevärde eller båda i en kedja ("25π ≈ 78,5").
//
// Tryckfel i facit: 6 säger "56π cm² ≈ 174 cm²", men bladets sektor har radien 8 cm och båglängden 42 cm, så arean
// är båglängden · radien / 2 = 42 · 8 / 2 = 168 cm² (inget π: båglängden är given i cm). 56π ≈ 175,9 stämmer inte heller
// med 174. Rutan godtar 168.
//
// Bladets "medelpunktsvinklen" (5) skrivs "medelpunktsvinkeln".
import { unitsFor } from "../../units.js";

const AREA = unitsFor("cm²");

export default {
  code: "MAr4",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Areaberäkning",
  time: { min: 6, max: 8, stop: 15 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "I en rätvinklig triangel är två av sidorna 6 cm. Bestäm triangelns area.",
      points: "each",
      boxes: { a: { accept: ["18"], units: AREA } },
    },
    {
      label: "2",
      text: "Diagonalerna i en romb är 12 cm och 8 cm. Bestäm rombens area.",
      points: "each",
      boxes: { a: { accept: ["48"], units: AREA } },
    },
    {
      label: "3",
      text: "En cirkel är inskriven i en kvadrat med sidan 10 cm. Bestäm cirkelområdets area.",
      points: "each",
      boxes: { a: { accept: ["25π cm² ≈ 78,5 cm²"], pi: "25π", units: AREA } },
    },
    {
      label: "4",
      text: "De parallella sidorna i ett parallelltrapets är 6 cm och 8 cm. Höjden mot dessa sidor är 5 cm. Bestäm parallelltrapetsets area.",
      points: "each",
      boxes: { a: { accept: ["35"], units: AREA } },
    },
    {
      label: "5",
      text: "Ur ett cirkelområde med radien 6 cm, klipper man ut en cirkelsektor med medelpunktsvinkeln 120°. Bestäm cirkelsektorns area.",
      points: "each",
      boxes: { a: { accept: ["12π cm²"], pi: "12π", units: AREA } },
    },
    {
      label: "6",
      text: "Ur ett cirkelområde med radien 8 cm klipper man ut en cirkelsektor med båglängden 42 cm. Bestäm cirkelsektorns area.",
      points: "each",
      boxes: { a: { accept: ["168"], units: AREA } },
    },
  ],
};
