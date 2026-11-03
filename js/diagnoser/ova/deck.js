// Visningsföljden i Öva: en uppgift i taget, svaret först och sedan nästa. Rent, utan `document`.
//
// PRACTICE_GUARD_MS  så snart efter en ändring är ett nytt tryck ett dubbeltryck och gör ingenting.
// createDeck         uppgifterna i ordning; activate() visar svaret eller går till nästa, skip() går till nästa utan att visa
//                    svaret, back() går tillbaka.
// routeKey           vad en tangent ska göra (visa svaret, hoppa vidare, gå tillbaka), med hänsyn till var fokus står.
// routeClick         vad ett klick på uppgiftsytan ska göra.
// promptScale        hur stor uppgiftens text är, som andel av uppgiftsytans grundstorlek.
//
// Läraren visar detta på tavlan och klickar sig fram framför klassen. Ett dubbelklick eller en nedhållen tangent får
// därför aldrig hoppa över ett svar, en elev som skriver i svarsrutan får aldrig flytta uppgiften med mellanslag eller
// pil, och ett tryck på ytan för att stänga tangentbordet på en telefon får aldrig visa svaret. Pilarna bläddrar bara: pil höger
// gör som Nästa och pil vänster som Föregående, och ingen av dem visar svaret. De flesta presentationsfjärrar skickar PageDown och
// PageUp, och en fjärr har inget annat sätt att visa svaret: PageDown gör som huvudknappen, och PageUp gör som pil vänster.

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
    // Nästa utan svaret: uppgiften står kvar med Visa svar, om man kommer tillbaka till den.
    skip() {
      lastChange = now();
      if (index === tasks.length - 1) return "end";
      index += 1;
      return "next";
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

// Tangenterna som går framåt, och de som går tillbaka.
const FORWARD = [" ", "Enter", "ArrowRight", "PageDown"];
const BACKING = ["PageUp", "ArrowLeft"];

// target: "input" (svarsrutan med något skrivet), "empty" (en tom svarsruta), "main" (huvudknappen), "control" (en annan knapp
// eller länk) eller "other".
// Ger "activate" (visa svaret eller gå vidare), "skip" (nästa uppgift utan svaret), "back" (föregående uppgift), "block" (gör
// ingenting och stoppa tangenten) eller "native" (tangentens egen verkan).
// - Ett nedhållet Enter är inget nytt tryck: "block" var fokus än står, också i svarsrutan, där sidan annars skickar
//   in svaret om och om igen och 500 ms-gränsen ensam skulle släppa igenom ett svar var halv sekund.
// - Andra tangenter än de som är nämnda här, och allt annat i en svarsruta med något skrivet, är elevens eget: "native". Ett
//   nedhållet mellanslag, en pil eller en bokstav där ska fortsätta skriva, och pil vänster och PageUp flyttar markören.
// - En ny uppgift börjar med fokus i en tom ruta, och där finns ingenting för mellanslag och pilar att göra: de gör som utanför
//   rutan, så att man kan bläddra och visa svaret utan att först lämna den. Enter är rutans eget (nästa ruta, eller visa svaret).
// - Utanför svarsrutan blockeras också ett nedhållet mellanslag, en nedhållen pil och en nedhållen PageDown eller PageUp,
//   så att de inte heller klickar en knapp eller hoppar flera uppgifter om och om igen.
// - Utanför en ruta med något skrivet hoppar pil höger alltid vidare, PageDown går alltid vidare, och pil vänster och PageUp går
//   alltid tillbaka. Mellanslag och Enter går bara vidare utanför knappar, där de redan har en egen verkan (knappens klick): "native".
export function routeKey({ key, repeat, target }) {
  if (repeat && key === "Enter") return "block";
  if (BACKING.includes(key)) {
    if (target === "input") return "native";
    return repeat ? "block" : "back";
  }
  if (!FORWARD.includes(key) || target === "input") return "native";
  if (repeat) return "block";
  if (key === "ArrowRight") return "skip";
  if (key === "PageDown" || target === "other") return "activate";
  return key === " " && target === "empty" ? "activate" : "native";
}

// target: "control" (en knapp eller länk, som har sin egen klickhantering) eller "other".
// - Ett klick på en knapp hör till knappen: "ignore".
// - Andra klicket i ett dubbelklick (detail 2 eller mer) räknas inte: "ignore".
// - Står fokus i svarsrutan stänger klicket bara tangentbordet: "blur".
export function routeClick({ target, inputFocused, detail }) {
  if (target === "control" || detail > 1) return "ignore";
  return inputFocused ? "blur" : "activate";
}

// En rad att räkna på: en siffra utanför en ruta över en tryckt nämnare ("{[a]|100}" säger bara hur svaret skrivs).
const hasMathRow = (rows) => (rows ?? []).some((row) => /\d/.test(row.replace(/\{\[\w+\]\|\d+\}/g, "")));

// Uppgiftens texts storlek som andel av --dg-practice-size. Står texten över stor matematik (en rad att räkna på, eller en tallinje)
// och är kort ("Beräkna", "Skriv i grundpotensform", högst 52 tecken i de första sex bankerna) är den liten. Annars är texten själva
// uppgiften (en textuppgift, en tabell, en graf, ett flerval) och läses från bakre raden: den är större ju kortare den är, och den
// längsta berättelsen blir minst, så att den ryms.
export function promptScale(task) {
  const length = String(task.text ?? "").length;
  const instruction = task.kind === "place" || task.kind === "read" || hasMathRow(task.rows);
  if (instruction && length <= 52) return 0.55;
  if (length <= 100) return 0.9;
  if (length <= 160) return 0.8;
  if (length <= 240) return 0.68;
  return 0.58;
}
