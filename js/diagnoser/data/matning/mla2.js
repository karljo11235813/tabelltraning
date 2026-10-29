// DIAGNOS MLä2, Mätning av omkrets.
// Elevbladet är s. 45, lärarsidan s. 44 och facit står på s. 44 i 4_Matning.pdf.
//
// 3 kolumner på resultatblanketten (s. 46): 1–3, en skärm och en kolumn var.
// 1: bladets femhörning med sidorna 4 cm utskrivna. 2 och 3 ("Mät sidorna"): eleven kan inte mäta skärmen med en
// linjal, så linjaler är ritade längs sidorna (figure.rulers), i samma skala som figuren. 2 är bladets rektangel 7 × 4 cm
// med linjaler längs två sidor (de andra två är lika långa; lärarsidan frågar just om eleven mäter alla sidor eller bara
// två). 3 är bladets rätvinkliga triangel 6, 8 och 10 cm med en linjal längs varje sida.
// Svaren är i cm; units räknar om, så "220 mm" och "2,2 dm" är rätt för 22.
import { unitsFor } from "../../units.js";

const PENTAGON = {
  view: [300, 260],
  pieces: [{ path: "M150 25L254.6 101L214.7 224H85.3L45.4 101Z" }],
  labels: [
    { at: [215.3, 45.2], text: "4 cm" },
    { at: [255.6, 169.3], text: "4 cm" },
    { at: [150, 246], text: "4 cm" },
    { at: [44.4, 169.3], text: "4 cm" },
    { at: [84.8, 45.2], text: "4 cm" },
  ],
};

// 40 enheter per cm.
const RECTANGLE = {
  view: [400, 270],
  pieces: [{ path: "M50 60H330V220H50Z" }],
  rulers: [
    { from: [50, 60], to: [330, 60], length: 7, side: "left", minor: 2 },
    { from: [330, 60], to: [330, 220], length: 4, side: "left", minor: 2 },
  ],
};

// 35 enheter per cm.
const TRIANGLE = {
  view: [400, 315],
  pieces: [{ path: "M70 55V265H350Z" }],
  rulers: [
    { from: [70, 55], to: [70, 265], length: 6, side: "right" },
    { from: [70, 265], to: [350, 265], length: 8 },
    { from: [70, 55], to: [350, 265], length: 10, side: "left" },
  ],
};

const CM = unitsFor("cm");

export default {
  code: "MLä2",
  area: "Mätning",
  sub: "MLä Mätning av längd",
  title: "Mätning av omkrets",
  time: { min: 2, max: 3, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { label: "1", text: "Bestäm omkretsen av figuren.", points: "each", figure: PENTAGON, boxes: { a: { accept: ["20"], units: CM } } },
    {
      label: "2",
      text: "Mät sidorna med linjalerna och bestäm omkretsen av figuren.",
      points: "each",
      figure: RECTANGLE,
      boxes: { a: { accept: ["22"], units: CM } },
    },
    {
      label: "3",
      text: "Mät sidorna med linjalerna och bestäm omkretsen av figuren.",
      points: "each",
      figure: TRIANGLE,
      boxes: { a: { accept: ["24"], units: CM } },
    },
  ],
};
