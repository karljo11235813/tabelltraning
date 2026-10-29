// DIAGNOS MMa1, Grundläggande mätning, massa.
// Elevbladet är s. 33, lärarsidan s. 32 och facit står på s. 32 i 4_Matning.pdf.
//
// 9 kolumner på resultatblanketten (s. 34): 1, 2 och 3a–3g, en skärm och en kolumn var.
// 1: bladets balansvåg i jämvikt, lådan i den vänstra skålen och vikterna 5 kg, 3 kg och 1 kg i den högra (balance.js).
// 2: hushållsvågens skala 0–10 hg med halva streck och visaren på 7 (figure.dial); äpplena ritas inte.
// 1 och 2 räknar om enheter (units), så "9000 g" och "700 g" är rätt.
// 3a–g: enhetsord, rättas som text (förkortningen eller ordet: "kg", "kilogram", "kilo").
//
// Lärarsidan säger "avbryta diagnosen efter cirka 6–7 minuter"; stop är 7.
import { unitsFor } from "../../units.js";
import { balance } from "./balance.js";

const SCALE = balance({
  left: [{ box: [56, 46] }],
  right: [{ weight: [34, 42], dx: -62 }, { weight: [28, 32] }, { weight: [20, 22], dx: 62 }],
  labels: [
    { side: "right", dx: -62, text: "5 kg" },
    { side: "right", text: "3 kg" },
    { side: "right", dx: 62, text: "1 kg" },
  ],
});

const KITCHEN_SCALE = {
  view: [240, 260],
  dial: {
    center: [120, 250],
    radius: 220,
    sweep: [-28, 28],
    ticks: 20,
    major: 2,
    labels: { from: 0, to: 10, step: 1 },
    labelRadius: 1.07,
    hands: [{ value: 7, of: 10, length: 1, width: 3 }],
  },
};

const KG = ["kg", "kilogram", "kilo"];
const HG = ["hg", "hektogram", "hekto"];
const G = ["g", "gram"];
const TON = ["ton"];
const UNIT_TEXT = "Skriv den enhet som passar. Välj mellan ton, kg, hg och g.";

export default {
  code: "MMa1",
  area: "Mätning",
  sub: "MMa Mätning av massa",
  title: "Grundläggande mätning, massa",
  time: { min: 2, max: 3, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    {
      label: "1",
      text: "Hur mycket väger lådan?",
      points: "each",
      figure: SCALE,
      rows: ["Svar: [a] kg"],
      boxes: { a: { accept: ["9"], units: unitsFor("kg") } },
    },
    {
      label: "2",
      text: "Hur mycket väger äpplena på vågen?",
      points: "each",
      figure: KITCHEN_SCALE,
      rows: ["Svar: [a] hg"],
      boxes: { a: { accept: ["7"], units: unitsFor("hg") } },
    },
    { label: "3a", text: UNIT_TEXT, points: "each", rows: ["Johannes väger 30 [a]"], boxes: { a: { accept: KG } } },
    { label: "3b", text: UNIT_TEXT, points: "each", rows: ["Ett äpple väger 2 [a]"], boxes: { a: { accept: HG } } },
    { label: "3c", text: UNIT_TEXT, points: "each", rows: ["Ett brev väger 20 [a]"], boxes: { a: { accept: G } } },
    { label: "3d", text: UNIT_TEXT, points: "each", rows: ["En hink (spann) med vatten väger 10 [a]"], boxes: { a: { accept: KG } } },
    { label: "3e", text: UNIT_TEXT, points: "each", rows: ["Ett paket russin väger 200 [a]"], boxes: { a: { accept: G } } },
    { label: "3f", text: UNIT_TEXT, points: "each", rows: ["En katt väger 4 [a]"], boxes: { a: { accept: KG } } },
    { label: "3g", text: UNIT_TEXT, points: "each", rows: ["En lastbil väger 8 [a]"], boxes: { a: { accept: TON } } },
  ],
};
