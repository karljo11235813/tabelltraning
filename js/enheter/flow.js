// Små regler för sidans flöde som går att testa utan webbläsare.

// Egen nyckel: framstegen här blandas aldrig ihop med Bråktrappans.
export const STORAGE_KEY = "enheter.progress";

// De två sista frågorna (nivå 2) i kategorier där rutnätet tonas bort görs utan rutnät.
// Exemplet visar rutnätet, så då döljs "Visa exemplet".
export function exampleHidden(category, level) {
  return category.fadesGrid && level === 2;
}

// Enter som skickar in svaret: på en vald ordknapp, och på en bricka. Chrome ger brickan fokus
// när den klickas, så utan detta skulle Enter klicka på den igen och avmarkera den.
export function enterSubmits(target) {
  if (target.classList.contains("en-tile")) return true;
  return target.classList.contains("bt-symbol-btn") && target.getAttribute("aria-pressed") === "true";
}
