// localStorage kan saknas eller kasta fel (privat läge, blockerad lagring).
// Sidan ska fungera ändå, bara utan sparade val och rekord.

export function createStore(getStorage) {
  function storage() {
    try {
      return getStorage() || null;
    } catch {
      return null;
    }
  }
  return {
    get(key) {
      try {
        const raw = storage()?.getItem(key);
        return raw == null ? null : JSON.parse(raw);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        const s = storage();
        if (!s) return false;
        s.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
  };
}

function chapterPart(chapterIds) {
  return [...chapterIds].sort((a, b) => a - b).join("-");
}

export function recordKey(modeId, chapterIds) {
  return `sant_falskt_record_${modeId}_${chapterPart(chapterIds)}`;
}

export function latestKey(modeId, chapterIds) {
  return `sant_falskt_latest_${modeId}_${chapterPart(chapterIds)}`;
}

// En sparad omgång: { score, correct, wrong, at }, där at är Date.now() när den tog slut.
// Äldre versioner av sidan sparade rekordet som bara poängen; då är resten null.
function readRun(store, key) {
  const value = store.get(key);
  if (typeof value === "number") return Number.isFinite(value) ? { score: value, correct: null, wrong: null, at: null } : null;
  if (!value || typeof value !== "object" || !Number.isFinite(value.score)) return null;
  const count = (n) => (Number.isInteger(n) && n >= 0 ? n : null);
  return {
    score: value.score,
    correct: count(value.correct),
    wrong: count(value.wrong),
    at: Number.isFinite(value.at) ? value.at : null,
  };
}

export function readRecord(store, key) {
  return readRun(store, key);
}

export function readLatest(store, key) {
  return readRun(store, key);
}

// Första omgången räknas som nytt rekord bara om poängen är över 0.
// Lika många poäng som rekordet ersätter det inte, så rekordet behåller sitt datum.
// Går det inte att spara (blockerad lagring) firas inget rekord alls.
export function updateRecord(store, key, run) {
  const previous = readRecord(store, key);
  if (previous === null) {
    const saved = store.set(key, run);
    return { record: run, isNew: saved && run.score > 0 };
  }
  if (run.score > previous.score) {
    const saved = store.set(key, run);
    return { record: run, isNew: saved };
  }
  return { record: previous, isNew: false };
}

export function saveLatest(store, key, run) {
  return store.set(key, run);
}
