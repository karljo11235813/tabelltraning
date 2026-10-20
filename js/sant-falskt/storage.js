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

export function recordKey(modeId, chapterIds) {
  const chapters = [...chapterIds].sort((a, b) => a - b).join("-");
  return `sant_falskt_record_${modeId}_${chapters}`;
}

export function readRecord(store, key) {
  const value = store.get(key);
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

// Första omgången räknas som nytt rekord bara om poängen är över 0.
// Går det inte att spara (blockerad lagring) firas inget rekord alls.
export function updateRecord(store, key, score) {
  const previous = readRecord(store, key);
  if (previous === null) {
    const saved = store.set(key, score);
    return { record: score, isNew: saved && score > 0 };
  }
  if (score > previous) {
    const saved = store.set(key, score);
    return { record: score, isNew: saved };
  }
  return { record: previous, isNew: false };
}
