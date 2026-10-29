// DIAGNOS MVo5, Volymberäkning 1.
// Elevbladet är s. 93, lärarsidan s. 92 och facit står på s. 92 i 4_Matning.pdf.
//
// Sju textuppgifter (1–7) med bara Svar. Resultatblanketten (s. 94) har en kolumn per uppgift: 7 i allt. Eleven får
// ett lösblad och miniräknare (paper: true). units räknar om mellan volymenheterna (också liter).
// 1: bladets figur behövs, eftersom "basytan" är den skuggade rektangulära sidan som prismat ligger på, och höjden
//    3,5 cm är triangelns höjd: volymen är hälften av det omskrivna rätblockets, 60 · 3,5 / 2 = 105 cm³.
// 4–6 är π-rutor: det exakta värdet med π, ett närmevärde eller båda i en kedja. Facit 4 "240π cm³ ≈ 753 cm³"
// (240π ≈ 754,0; π-rutan godtar 753 och 754) och 6 "4/3 π·4³ cm³ ≈ 268 cm³".
//
// Tryckfel i facit:
//   5  "480π cm³ ≈ 1512 cm³" räknar med radien 12 cm, men bladet säger att basytan har diametern 12 cm: radien är
//      6 cm och volymen π · 6² · 10 / 3 = 120π ≈ 377 cm³. Rutan godtar 120π.
//
// Tolkning: 2 "I ett prisma har basytan sidorna 1,5 m och 2,0 m" har facit 1,8 m³, alltså en rätvinklig triangel med
// kateterna 1,5 och 2,0 m som basyta (1,5 m² · 1,2 m). Bladet säger inte att basytan är en triangel och 2 har ingen
// figur; läser eleven den som en rektangel blir svaret 3,6 m³, som därför också är rätt.
//
// Tid: lärarsidan anger ingen tid. Diagnosen "skall inte göras på tid"; läraren bedömer själv hur lång tid en elev som
// behärskar området behöver och avbryter efter ytterligare tio minuter. time är därför null, och resultatskärmen visar
// ingen riktlinje från Diamant.
import { unitsFor } from "../../units.js";

const VOLUME = unitsFor("cm³");

// Det liggande tresidiga prismat med den skuggade undersidan, som på bladet.
const PRISM = {
  view: [262, 165],
  pieces: [{ path: "M19 140L89 157L252 87L182 72Z" }],
  shaded: [0],
  lines: ["M19 140L72 67L89 157", "M72 67L220 10", "M182 72L220 10L252 87"],
};

export default {
  code: "MVo5",
  area: "Mätning",
  sub: "MVo Mätning av volym",
  title: "Volymberäkning 1",
  time: null,
  paper: true,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Ett paket med choklad ser ut så här. Den skuggade basytan är 60 cm² och höjden är 3,5 cm. Bestäm volymen.",
      points: "each",
      figure: PRISM,
      boxes: { a: { accept: ["105"], units: VOLUME } },
    },
    {
      label: "2",
      text: "I ett prisma har basytan sidorna 1,5 m och 2,0 m. Prismat är 1,2 m högt. Bestäm volymen.",
      points: "each",
      boxes: { a: { accept: ["1,8", "3,6"], units: unitsFor("m³") } },
    },
    {
      label: "3",
      text: "En pyramid har en kvadratisk basyta med sidan 5 cm. Pyramiden är 6 cm hög. Bestäm pyramidens volym.",
      points: "each",
      boxes: { a: { accept: ["50"], units: VOLUME } },
    },
    {
      label: "4",
      text: "En cylinder har en cirkulär basyta med radien 4 cm. Cylindern är 15 cm hög. Hur stor är cylinderns volym?",
      points: "each",
      boxes: { a: { accept: ["240π cm³ ≈ 753 cm³"], pi: "240π", units: VOLUME } },
    },
    {
      label: "5",
      text: "Basytan till en kon har diametern 12 cm. Konen är 10 cm hög. Bestäm konens volym.",
      points: "each",
      boxes: { a: { accept: ["120π cm³ ≈ 377 cm³"], pi: "120π", units: VOLUME } },
    },
    {
      label: "6",
      text: "Ett klot har radien 4 cm. Bestäm klotets volym.",
      points: "each",
      boxes: { a: { accept: ["4/3 · π · 4³ cm³ ≈ 268 cm³"], pi: "4/3·π·4^3", units: VOLUME } },
    },
    {
      label: "7",
      text: "Runt om ett ömtåligt rätblock av glas med kanterna 20 cm, 25 cm och 30 cm lägger man ett 5 cm tjockt lager av frigolit. Hur stor volym utgörs då av frigolit?",
      points: "each",
      boxes: { a: { accept: ["27 000"], units: VOLUME } },
    },
  ],
};
