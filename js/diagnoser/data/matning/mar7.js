// DIAGNOS MAr7, Begränsningsarea.
// Elevbladet är s. 75, lärarsidan s. 74 och facit står på s. 74 i 4_Matning.pdf.
//
// Sex textuppgifter (1–6) med bara Svar. Resultatblanketten (s. 76) har en kolumn per uppgift: 6 i allt. Eleven får
// ett lösblad och miniräknare (paper: true). units räknar om mellan areaenheterna.
// 2, 3 och 6 är π-rutor: det exakta värdet med π, ett närmevärde eller båda i en kedja ("16π ≈ 50").
// 5 är en intervallruta: 36√3 ≈ 62,35. Rätt är det exakta värdet ("36√3", "36·√3", "√3888") eller ett närmevärde
// från 62 till 62,4. En kedja ("36√3 ≈ 62,4") är rätt bara som den står i accept, eftersom en intervallruta läser
// ett tal.
//
// Tryckfel i facit:
//   2  "60π cm² ≈ 87 cm²": 60π ≈ 188,5 (cylindern har 2 · 9π + 6π · 7 = 60π). 60π är rätt; närmevärdet skrivs 188,5.
//   3  "18π cm² ≈ 56 cm²": 18π ≈ 56,5, så 57 vore avrundat. π-rutan godtar både 56 och 57.
//   5  "10√3 cm²": tetraedern med kanten 6 cm har fyra liksidiga trianglar med arean 9√3, alltså 36√3 ≈ 62,4 cm².
//
// Tid: lärarsidan anger ingen tid. Diagnosen "skall inte göras på tid"; läraren bedömer själv hur lång tid en elev som
// behärskar området behöver och avbryter efter ytterligare tio minuter. time är därför null, och resultatskärmen visar
// ingen riktlinje från Diamant.
import { unitsFor } from "../../units.js";

const AREA = unitsFor("cm²");

export default {
  code: "MAr7",
  area: "Mätning",
  sub: "MAr Mätning av area",
  title: "Begränsningsarea",
  time: null,
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Beräkna begränsningsarean för ett rätblock med kanterna 3, 4 och 5 cm.",
      points: "each",
      boxes: { a: { accept: ["94"], units: AREA } },
    },
    {
      label: "2",
      text: "En cylinder har höjden 7 cm och diametern på den cirkulära bottenytan är 6 cm. Beräkna cylinderns totala begränsningsarea.",
      points: "each",
      boxes: { a: { accept: ["60π cm² ≈ 188,5 cm²"], pi: "60π", units: AREA } },
    },
    {
      label: "3",
      text: "En kons mantelyta är uppbyggd av ett halvt cirkelområde med radien 6 cm. Bestäm konens mantelyta.",
      points: "each",
      boxes: { a: { accept: ["18π cm² ≈ 56 cm²"], pi: "18π", units: AREA } },
    },
    {
      label: "4",
      text: "En pyramid har en kvadratisk basyta med sidan 6 cm. Höjden är 4 cm. Beräkna pyramidens begränsningsarea.",
      points: "each",
      boxes: { a: { accept: ["96"], units: AREA } },
    },
    {
      label: "5",
      text: "Kanten i en tetraeder är 6 cm. Bestäm tetraederns begränsningsarea.",
      points: "each",
      boxes: { a: { accept: ["36√3", "36√3 ≈ 62,4", "36√3 cm² ≈ 62,4 cm²"], range: { ge: "62", le: "62,4" } } },
    },
    {
      label: "6",
      text: "Ett klot är inskrivet i en kub med sidan 4 cm. Bestäm klotets begränsningsarea.",
      points: "each",
      boxes: { a: { accept: ["16π cm² ≈ 50 cm²"], pi: "16π", units: AREA } },
    },
  ],
};
