// Vilka diagnoser som har övningar (Öva) och hur bankfilerna laddas: en bank hämtas först när diagnosen övas.

export const PRACTICE_CODES = ["AG1", "AG2", "AG3", "AG4", "AG5", "AG6", "AG7", "AG8", "AG9", "AS1", "AS2", "AS3", "AS4", "AS5", "AS6", "AS7", "AS8", "AS9", "AS10", "AS11", "AUn1", "AUn2", "AUn3", "AUn4", "AUp1", "AUp2", "AUp3", "AUp4", "AUp5", "RB1", "RB2", "RB3", "RB4", "RB5", "RB6", "RB7", "RD1", "RD2", "RD3", "RD4", "RD5", "RD6", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7", "TAt1", "TAt2", "TAt3", "TAt4", "TAt5", "TAu1", "TAu2", "TAu3", "TAu4", "TAu5", "TAe1", "TAe2", "TAe3", "TAe4", "TAe5", "TAe6", "TAe7", "MMa1", "MMa2", "MLä1", "MLä2", "MLä3", "MLä4", "MAr1", "MAr2", "MAr3", "MAr4", "MAr5", "MAr6", "MAr7", "MVo1", "MVo2", "MVo3", "MVo4", "MVo5", "MVo6", "MVo7"];

// Bankens filnamn: koden med gemener och ä som a (MLä1 → mla1.js), som datafilerna och ikonerna.
export function bankFile(code) {
  return `${code.toLowerCase().replace("ä", "a")}.js`;
}

export function hasPractice(code) {
  return PRACTICE_CODES.includes(code);
}

// Banken för en diagnos: { code, parts: [{ id, title, labels, formNote? }], unpracticed?, tasks }. unpracticed är etiketterna som
// inte övas (de hör till ingen del); den finns bara i banker som har några.
export async function loadBank(code) {
  if (!hasPractice(code)) throw new Error(`Inga övningar för ${code}`);
  const module = await import(`./bank/${bankFile(code)}`);
  return module.default;
}
