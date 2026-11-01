// Kapiteltest och sluttest. Ett kapiteltest står sist i varje del och har en fråga från varje nivå i varje steg.
// Sluttestet står allra sist och har en medelsvår och en svår fråga från varje steg i hela trappan.
// Frågorna kommer i slumpad ordning. Ett fel är tillåtet och det andra avslutar testet.
// Rent: app.js ritar, och inget sparas förrän testet är klarat.
import { shuffle } from "../representationer/random.js";
import { CATEGORIES, PARTS, generateQuestion } from "./categories/index.js";

export const ALLOWED_MISTAKES = 1;

// Ett test-id återanvänds aldrig: det sparas bland de klara stegen.
export const TESTS = PARTS.map(({ part, title }) => ({
  id: `kapiteltest-${part}`,
  part,
  title: `Kapiteltest: ${title}`,
  kind: "Kapiteltest",
  source: "stegen i den här delen",
  levels: [0, 1, 2],
}));
export const FINAL_TEST = { id: "sluttest", part: null, title: "Sluttest: Hela Bråktrappan", kind: "Sluttest", source: "alla steg i trappan", levels: [1, 2] };

export const getTest = (id) => [...TESTS, FINAL_TEST].find((t) => t.id === id) ?? null;

const stepsOf = (test) => (test === FINAL_TEST ? CATEGORIES : CATEGORIES.filter((c) => c.part === test.part));

// Hela trappan i ordning: varje dels steg och sist dess test, och allra sist sluttestet.
export const STEP_IDS = [...TESTS.flatMap((t) => [...stepsOf(t).map((c) => c.id), t.id]), FINAL_TEST.id];

// En fråga per nivå, med olika tal, från ett steg.
function questionsFrom(category, levels, rng) {
  const keys = new Set();
  return levels.map((level) => {
    let question = generateQuestion(category, rng, level);
    for (let i = 0; i < 50 && keys.has(question.key); i++) question = generateQuestion(category, rng, level);
    keys.add(question.key);
    return { category, question };
  });
}

export function buildQuestions(test, rng) {
  return shuffle(stepsOf(test).flatMap((category) => questionsFrom(category, test.levels, rng)), rng);
}

export const questionCount = (test) => stepsOf(test).length * test.levels.length;
export const usesFormRule = (test) => stepsOf(test).some((c) => c.formRule);

// Ett försök. Frågorna slumpas när försöket börjar, så att ett nytt försök får nya frågor.
export function createChapterTest(test, rng) {
  const items = buildQuestions(test, rng);
  let index = 0;
  let mistakes = 0;
  let answered = false;
  let over = false;

  return {
    total: items.length,
    current: () => items[index],
    number: () => index + 1,
    mistakes: () => mistakes,
    right: () => items.length - mistakes,
    answer(correct) {
      if (over || answered) return null;
      answered = true;
      if (!correct) mistakes++;
      const failed = mistakes > ALLOWED_MISTAKES;
      const passed = !failed && index === items.length - 1;
      over = failed || passed;
      return { failed, passed, mistakes };
    },
    next() {
      if (over) return;
      index++;
      answered = false;
    },
  };
}
