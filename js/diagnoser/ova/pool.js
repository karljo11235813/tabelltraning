// Omgången i Öva: vilka uppgifter som kommer, och vilka delar en diagnos missade. Rent, utan `document`.
//
// BATCH_SIZE      antal uppgifter i en omgång.
// shares          hur många uppgifter varje del bidrar med, när delarna har så många kvar.
// createPool      en kö per vald del; nextBatch() ger nästa omgång, nextSize() hur lång den blir.
// missedLabels    etiketterna på skärmarna som blev fel eller överhoppade i en rättad diagnos.
// partsForLabels  delarna i banken som täcker de etiketterna, i bankens ordning.

import { shuffle } from "../../representationer/random.js";

// En omgång är en lektionsstart på några minuter: tillräckligt för att varje del kommer med flera gånger.
export const BATCH_SIZE = 20;

// Delar upp `total` på delarna: lika många till varje del som har något kvar, resten av delningen till de första,
// ingen del över sitt eget antal. Det som en del inte kan ge går vidare till de andra, en i taget i delarnas ordning.
// Räcker inte det som finns kvar blir det färre än `total`.
export function shares(available, total = BATCH_SIZE) {
  const open = available.filter((n) => n > 0).length;
  if (open === 0) return available.map(() => 0);
  const base = Math.floor(total / open);
  let extra = total % open;
  const given = available.map((n) => {
    if (n <= 0) return 0;
    const want = base + (extra > 0 ? 1 : 0);
    if (extra > 0) extra -= 1;
    return Math.min(want, n);
  });
  let left = total - given.reduce((sum, n) => sum + n, 0);
  while (left > 0 && given.some((n, i) => n < available[i])) {
    for (let i = 0; i < given.length && left > 0; i++) {
      if (given[i] < available[i]) { given[i] += 1; left -= 1; }
    }
  }
  return given;
}

// Varje vald del har en blandad kö med sina uppgifter. En omgång tar `shares` från fronten av köerna, delarna i
// bankens ordning, så att en smal del inte upprepas förrän allt valt är använt. När alla köer är tomma fylls de på igen.
export function createPool(bank, partIds, rng = Math.random) {
  const parts = bank.parts.filter((part) => partIds.includes(part.id));
  const tasksOf = (part) => bank.tasks.filter((task) => task.part === part.id);
  const counts = parts.map((part) => tasksOf(part).length);
  const fresh = () => parts.map((part) => shuffle(tasksOf(part), rng));
  let queues = fresh();
  const exhausted = () => queues.every((queue) => queue.length === 0);
  return {
    nextBatch() {
      if (exhausted()) queues = fresh();
      const taken = shares(queues.map((queue) => queue.length));
      return queues.flatMap((queue, i) => queue.splice(0, taken[i]));
    },
    nextSize() {
      // Är allt använt räknas storleken på de fyllda köerna; de blandas först när omgången tas.
      return shares(exhausted() ? counts : queues.map((queue) => queue.length)).reduce((sum, n) => sum + n, 0);
    },
  };
}

export function missedLabels(scored) {
  return scored.screens.filter((screen) => screen.mark === "wrong" || screen.mark === "skipped").map((screen) => screen.label);
}

export function partsForLabels(bank, labels) {
  return bank.parts.filter((part) => part.labels.some((label) => labels.includes(label))).map((part) => part.id);
}
