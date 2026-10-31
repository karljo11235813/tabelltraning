// DIAGNOS GFo2, Avbildning. Elevbladet är s. 13–15, lärarsidan och facit s. 12 i 5_Geometri.pdf.
// Alla fem uppgifterna är att rita (spegla och vrida på rutat papper), så alla görs på papper och visas för läraren.
// Resultatskärmen har inga rättade uppgifter.
import { sheet } from "./sheet.js";

const GRID = "på rutat papper";

export default {
  code: "GFo2",
  area: "Geometri",
  sub: "GFo Geometriska former",
  title: "Avbildning",
  time: { min: 5, max: 6, stop: 10 },
  paper: false,
  symbols: false,
  notes: [],
  example: null,
  screens: [
    { kind: "paper", label: "1", text: "Spegla figuren i linjen.", images: [sheet("gfo2-1", 549, `En triangel och en lodrät linje till höger om den, ${GRID}.`)] },
    { kind: "paper", label: "2", text: "Spegla figuren i linjen.", images: [sheet("gfo2-2", 549, `En figur av rutor och en lodrät linje till höger om den, ${GRID}.`)] },
    { kind: "paper", label: "3", text: "Spegla figuren i linjen.", images: [sheet("gfo2-3", 549, `En kvadrat och en sned linje, ${GRID}.`)] },
    { kind: "paper", label: "4", text: "Vrid figuren 90° medurs runt punkten P.", images: [sheet("gfo2-4", 549, `En L-formad figur och punkten P, ${GRID}.`)] },
    { kind: "paper", label: "5", text: "Vrid figuren 180° runt punkten P.", images: [sheet("gfo2-5", 551, `En triangel och punkten P, ${GRID}.`)] },
  ],
};
