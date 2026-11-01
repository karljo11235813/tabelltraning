// Löpande text i Textproblem: **fetstil** och staplade bråk. Rent: view.js ritar.
// Bara siffror över siffror staplas, så att enheter (gasell/h) och algebra ((b + a/3)/4) står kvar på en rad.

const FRACTION = /(?<![\p{L}\d,/)])(\d+)\/(\d+)(?![\d/])/gu;

function parseFractions(text) {
  const tokens = [];
  let from = 0;
  for (const match of text.matchAll(FRACTION)) {
    if (match.index > from) tokens.push({ t: "text", text: text.slice(from, match.index) });
    tokens.push({ t: "frac", top: match[1], bottom: match[2] });
    from = match.index + match[0].length;
  }
  if (from < text.length) tokens.push({ t: "text", text: text.slice(from) });
  return tokens;
}

export function parseInline(text) {
  return text.split(/\*\*(.+?)\*\*/).flatMap((part, i) =>
    i % 2 === 1 ? [{ t: "bold", tokens: parseFractions(part) }] : parseFractions(part));
}
