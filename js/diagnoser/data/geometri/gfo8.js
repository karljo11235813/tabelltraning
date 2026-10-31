// DIAGNOS GFo8, Geometrisk konstruktion. Elevbladet är s. 36–37, lärarsidan och facit s. 35 i 5_Geometri.pdf.
// Alla fyra uppgifterna är konstruktioner med passare och linjal, så alla görs på papper och visas för läraren.
// Resultatskärmen har inga rättade uppgifter.
import { sheet } from "./sheet.js";

export default {
  code: "GFo8",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Geometrisk konstruktion",
  time: { min: 5, max: 5, stop: 7 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { kind: "paper", label: "1", text: "Konstruera med hjälp av passare och linjal mittpunktsnormalen till sträckan AB.", images: [sheet("gfo8-1", 485, "Sträckan AB.")] },
    { kind: "paper", label: "2", text: "Konstruera med hjälp av passare och linjal bisektrisen till vinkeln.", images: [sheet("gfo8-2", 303, "En vinkel med spetsen uppåt.")] },
    { kind: "paper", label: "3", text: "Konstruera en normal från punkten P mot linjen L.", images: [sheet("gfo8-3", 400, "Punkten P ovanför linjen L.")] },
    { kind: "paper", label: "4", text: "Rita ut triangelns medianer. Använd graderad linjal.", images: [sheet("gfo8-4", 521, "En triangel.")] },
  ],
};
