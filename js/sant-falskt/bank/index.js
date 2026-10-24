// Samlar alla påståendefiler, validerar dem och exporterar en gemensam lista.
// Ny fil med påståenden: importera den här och lägg till den i SOURCES.
import { CHAPTERS } from "./topics.js";
import { validateStatements } from "./validate.js";
import procent from "./procent.js";
import talBegrepp from "./tal-begrepp.js";
import tal1 from "./tal-1.js";
import tal2Kontroll from "./tal-2-kontroll.js";
import talRaknesatt from "./tal-raknesatt.js";
import andringar from "./andringar.js";
// Tvillingar: liknar ett original (twinOf) på ytan men har ett annat svar.
import tvProcent from "./tvillingar-procent.js";
import tvTalBegrepp from "./tvillingar-tal-begrepp.js";
import tvTal1 from "./tvillingar-tal-1.js";
import tvTal2Kontroll from "./tvillingar-tal-2-kontroll.js";
import tvTalRaknesatt from "./tvillingar-tal-raknesatt.js";
import tvAndringar from "./tvillingar-andringar.js";

const SOURCES = [
  procent, talBegrepp, tal1, tal2Kontroll, talRaknesatt, andringar,
  tvProcent, tvTalBegrepp, tvTal1, tvTal2Kontroll, tvTalRaknesatt, tvAndringar,
];

export { CHAPTERS, SOURCES };
export const STATEMENTS = validateStatements(SOURCES.flat(), CHAPTERS);
