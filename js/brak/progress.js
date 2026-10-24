// Upplåsning och svit i Bråktrappan. Rent: app.js sparar toStored() med createStore.
// Sviten sparas inte — den som lämnar mitt i en kategori börjar om på 0 av 6.
export const STORAGE_KEY = "braktrappan.progress";
export const STREAK_TO_MASTER = 6;
// Nivåerna 0–2 får två frågor var: 0, 0, 1, 1, 2, 2.
const QUESTIONS_PER_LEVEL = 2;

export function createProgress(stored, ids) {
  const known = new Set(ids);
  const saved = Array.isArray(stored?.mastered) ? stored.mastered : [];
  const mastered = new Set(saved.filter((id) => known.has(id)));
  let active = null; // { id, streak, review, done }

  const current = () => ids.find((id) => !mastered.has(id)) ?? null;
  const statusOf = (id) => {
    if (mastered.has(id)) return "mastered";
    return id === current() ? "current" : "locked";
  };

  return {
    statusOf,
    current,
    masteredCount: () => mastered.size,
    allMastered: () => mastered.size === ids.length,
    start(id) {
      if (!known.has(id) || statusOf(id) === "locked") return false;
      active = { id, streak: 0, review: mastered.has(id), done: false };
      return true;
    },
    active: () => (active ? { ...active } : null),
    level: () => (active ? Math.min(Math.floor(active.streak / QUESTIONS_PER_LEVEL), 2) : 0),
    answer(correct) {
      if (!active || active.done) return null;
      active.streak = correct ? active.streak + 1 : 0;
      if (active.streak < STREAK_TO_MASTER) return { streak: active.streak, done: false, unlocked: null };
      active.done = true;
      if (active.review) return { streak: active.streak, done: true, unlocked: null };
      mastered.add(active.id);
      return { streak: active.streak, done: true, unlocked: current() };
    },
    toStored: () => ({ mastered: ids.filter((id) => mastered.has(id)) }),
    reset() {
      mastered.clear();
      active = null;
    },
  };
}
