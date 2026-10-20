// Samlar alla påståendefiler, validerar dem och exporterar en gemensam lista.
// Ny fil med påståenden: importera den här och lägg till den i SOURCES.
import { CHAPTERS } from "./topics.js";
import { validateStatements } from "./validate.js";
import procent from "./procent.js";
import talBegrepp from "./tal-begrepp.js";
import tal1 from "./tal-1.js";
import tal2Kontroll from "./tal-2-kontroll.js";
import talRaknesatt from "./tal-raknesatt.js";

const SOURCES = [procent, talBegrepp, tal1, tal2Kontroll, talRaknesatt];

export { CHAPTERS, SOURCES };
export const STATEMENTS = validateStatements(SOURCES.flat(), CHAPTERS);
