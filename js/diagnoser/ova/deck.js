// Visningsföljden i Öva: en uppgift i taget, svaret först och sedan nästa. Rent, utan `document`.
//
// PRACTICE_GUARD_MS  så snart efter en ändring är ett nytt tryck ett dubbeltryck och gör ingenting.
// createDeck         uppgifterna i ordning; activate() visar svaret eller går till nästa, back() går tillbaka.
// routeKey           vad en tangent ska göra (visa svaret, gå vidare, gå tillbaka), med hänsyn till var fokus står.
// routeClick         vad ett klick på uppgiftsytan ska göra.
//
// Läraren visar detta på tavlan och klickar sig fram framför klassen. Ett dubbelklick eller en nedhållen tangent får
// därför aldrig hoppa över ett svar, en elev som skriver i svarsrutan får aldrig flytta uppgiften med mellanslag eller
// pil, och ett tryck på ytan för att stänga tangentbordet på en telefon får aldrig visa svaret. De flesta presentationsfjärrar
// skickar PageDown och PageUp: PageDown gör som pil höger, och PageUp och pil vänster går tillbaka som Föregående.

// En halv sekund: längre än ett dubbelklick (ofta 300–400 ms) och ungefär så lång som det tar innan en nedhållen
// tangent börjar upprepas, så att båda fångas även om `repeat` skulle saknas. Gränsen räknas från start, så att ett klick som
// råkar följa på knappen som öppnade omgången inte visar svaret direkt.
export const PRACTICE_GUARD_MS = 500;

export function createDeck(tasks, now = () => performance.now()) {
  let index = 0;
  let lastChange = now();
  const shown = tasks.map(() => false);
  return {
    get index() { return index; },
    get total() { return tasks.length; },
    get task() { return tasks[index]; },
    get revealed() { return shown[index]; },
    activate({ repeat = false } = {}) {
      const t = now();
      if (repeat || t - lastChange < PRACTICE_GUARD_MS) return "ignored";
      lastChange = t;
      if (!shown[index]) {
        shown[index] = true;
        return "revealed";
      }
      if (index < tasks.length - 1) {
        index += 1;
        return "next";
      }
      return "end";
    },
    // Svaret som lämnades står kvar, så att läraren ser uppgiften och svaret igen.
    back() {
      if (index === 0) return false;
      index -= 1;
      lastChange = now();
      return true;
    },
  };
}

// Tangenterna som visar svaret eller går vidare, och de som går tillbaka.
const ACTIVATING = [" ", "Enter", "ArrowRight", "PageDown"];
const BACKING = ["PageUp", "ArrowLeft"];

// target: "input" (svarsrutan), "main" (uppgiftsytan själv), "control" (en knapp eller länk) eller "other".
// Ger "activate" (visa svaret eller gå vidare), "back" (föregående uppgift), "block" (gör ingenting och stoppa tangenten)
// eller "native" (tangentens egen verkan).
// - Ett nedhållet Enter är inget nytt tryck: "block" var fokus än står, också i svarsrutan, där sidan annars skickar
//   in svaret om och om igen och 500 ms-gränsen ensam skulle släppa igenom ett svar var halv sekund.
// - Andra tangenter än de som är nämnda här, och allt annat i svarsrutan, är elevens eget: "native". Ett nedhållet
//   mellanslag, en pil eller en bokstav där ska fortsätta skriva, och pil vänster och PageUp flyttar markören.
// - Utanför svarsrutan blockeras också ett nedhållet mellanslag, en nedhållen pil och en nedhållen PageDown eller PageUp,
//   så att de inte heller klickar en knapp eller hoppar flera uppgifter om och om igen.
// - Utanför svarsrutan går pil höger och PageDown alltid vidare, och pil vänster och PageUp alltid tillbaka. Mellanslag och
//   Enter går bara vidare utanför knappar och uppgiftsytan, där de redan har en egen verkan (knappens klick, att rulla en
//   lång lösning): "native".
export function routeKey({ key, repeat, target }) {
  if (repeat && key === "Enter") return "block";
  if (BACKING.includes(key)) {
    if (target === "input") return "native";
    return repeat ? "block" : "back";
  }
  if (!ACTIVATING.includes(key) || target === "input") return "native";
  if (repeat) return "block";
  if (key === "ArrowRight" || key === "PageDown") return "activate";
  return target === "other" ? "activate" : "native";
}

// target: "control" (en knapp eller länk, som har sin egen klickhantering) eller "other".
// - Ett klick på en knapp hör till knappen: "ignore".
// - Andra klicket i ett dubbelklick (detail 2 eller mer) räknas inte: "ignore".
// - Står fokus i svarsrutan stänger klicket bara tangentbordet: "blur".
export function routeClick({ target, inputFocused, detail }) {
  if (target === "control" || detail > 1) return "ignore";
  return inputFocused ? "blur" : "activate";
}
