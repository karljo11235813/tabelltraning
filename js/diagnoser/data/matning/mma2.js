// DIAGNOS MMa2, Enhetsbyte, massa.
// Elevbladet är s. 36, lärarsidan s. 35 och facit står på s. 35 i 4_Matning.pdf.
//
// 20 kolumner på resultatblanketten (s. 37): 1a, 1b, 2a–2f, 3a–3f och 4a–4f, en skärm och en kolumn var.
// 1a–b: bladets balansvågar (balance.js), som lutar åt den tyngre vänstra skålen: 26 hg mot 2 kg och 1 kg mot 700 g.
// Svaret är i gram; units räknar om, så "6 hg" är rätt för 600.
// 2–4: bladets rader ("2 kg = [a] g"), en skärm per etikett a–f (på bladet står a och b, c och d, e och f bredvid
// varandra).
// Rutorna har ingen units: raden säger enheten, och data.test.js räknar om varje rad med enhetstabellen.
// 3a: bladets "1/2 hg" skrivs som bråk.
//
// Tryckfel i facit: den femte uppgiften i 3 står som "2e 500 (kg)"; den är 3e.
import { unitsFor } from "../../units.js";
import { balance } from "./balance.js";

const SCALE_A = balance({
  tilt: 12,
  left: [{ ball: 22 }],
  right: [{ ball: 12 }],
  labels: [
    { side: "left", text: "26 hg" },
    { side: "right", text: "2 kg" },
  ],
});

const SCALE_B = balance({
  tilt: 12,
  left: [{ box: [44, 40] }],
  right: [{ box: [16, 42] }],
  labels: [
    { side: "left", text: "1 kg" },
    { side: "right", text: "700 g" },
  ],
});

const BALANCE_TEXT = "Vågen ska väga jämnt. Hur många gram behöver du lägga till i den högra vågskålen?";
const row = (label, markup, answer, text = "Byt enhet.") => ({ label, text, points: "each", rows: [markup], boxes: { a: { accept: [answer] } } });

export default {
  code: "MMa2",
  area: "Mätning",
  sub: "MMa Mätning av massa",
  title: "Enhetsbyte, massa",
  time: { min: 4, max: 5, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1a", text: BALANCE_TEXT, points: "each", figure: SCALE_A, rows: ["Svar: [a] g"], boxes: { a: { accept: ["600"], units: unitsFor("g") } } },
    { label: "1b", text: BALANCE_TEXT, points: "each", figure: SCALE_B, rows: ["Svar: [a] g"], boxes: { a: { accept: ["300"], units: unitsFor("g") } } },
    row("2a", "2 kg = [a] g", "2000"),
    row("2b", "5 kg = [a] hg", "50"),
    row("2c", "4 hg = [a] g", "400"),
    row("2d", "14 hg = [a] g", "1400"),
    row("2e", "3 ton = [a] kg", "3000"),
    row("2f", "8 ton = [a] kg", "8000"),
    row("3a", "{1|2} hg = [a] g", "50"),
    row("3b", "2,5 kg = [a] hg", "25"),
    row("3c", "0,5 kg = [a] hg", "5"),
    row("3d", "6,5 kg = [a] g", "6500"),
    row("3e", "0,5 ton = [a] kg", "500"),
    row("3f", "2,1 ton = [a] kg", "2100"),
    row("4a", "70 g = [a] hg", "0,70"),
    row("4b", "15 hg = [a] kg", "1,5"),
    row("4c", "350 g = [a] hg", "3,5"),
    row("4d", "60 g = [a] kg", "0,06"),
    row("4e", "500 g = [a] kg", "0,5"),
    row("4f", "800 kg = [a] ton", "0,8"),
  ],
};
