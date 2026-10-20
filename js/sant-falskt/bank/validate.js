// Kontrollerar varje påstående när banken laddas. Felaktiga påståenden loggas
// och hoppas över så att ett skrivfel aldrig stoppar hela sidan.
import { ANSWERS } from "./topics.js";

export function validateStatements(list, chapters, log = console.error) {
  const seen = new Set();
  const valid = [];
  for (const statement of list) {
    const problem = findProblem(statement, chapters, seen);
    if (problem) {
      const id = statement && statement.id ? statement.id : "(utan id)";
      log(`[sant-falskt] Hoppar över ${id}: ${problem}`);
      continue;
    }
    seen.add(statement.id);
    valid.push(statement);
  }
  return valid;
}

function findProblem(s, chapters, seen) {
  if (!s || typeof s.id !== "string" || s.id === "") return "saknar id";
  if (seen.has(s.id)) return "id finns redan";
  const chapter = chapters[s.chapter];
  if (!chapter) return `okänt kapitel ${s.chapter}`;
  if (!chapter.topics.includes(s.topic)) return `okänt ämne "${s.topic}" i kapitel ${s.chapter}`;
  if (!ANSWERS.includes(s.answer)) return `ogiltigt svar "${s.answer}"`;
  if (typeof s.text !== "string" || s.text.trim() === "") return "tom text";
  if (typeof s.explanation !== "string" || s.explanation.trim() === "") return "tom förklaring";
  return null;
}
