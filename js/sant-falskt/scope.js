// Vad en omgång täckte, för rutan ovanför resultatet: läget, kapitlen och antalet påståenden.
// Guld kräver att alla kapitel som har påståenden var med, så en omgång på en del av
// banken aldrig ser ut som hela. Får ett nytt kapitel påståenden ingår det i "alla".

const statements = (n) => `${n} ${n === 1 ? "påstående" : "påståenden"}`;

export function describeScope({ mode, chosen, chapters, counts }) {
  const list = Object.entries(chapters).map(([key, chapter]) => {
    const id = Number(key);
    const count = counts[id] || 0;
    return { id, name: chapter.name, count, included: chosen.includes(id), available: count > 0 };
  });
  const isFull = list.every((c) => !c.available || c.included);
  const total = list.filter((c) => c.included).reduce((sum, c) => sum + c.count, 0);
  return {
    badge: mode.name.toLocaleUpperCase("sv"),
    isFull,
    band: isFull ? `★ ALLA KAPITEL · ${statements(total).toLocaleUpperCase("sv")}` : null,
    countText: statements(total),
    chapters: list,
  };
}
