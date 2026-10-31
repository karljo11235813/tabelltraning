// Vilka diagnoser som har övningar (Öva) och hur bankfilerna laddas: en bank hämtas först när diagnosen övas.

export const PRACTICE_CODES = ["AS1", "AS2", "AS3", "AS4", "AS5", "AS6", "AS7", "AS8", "AS9", "AS10", "AS11", "AUn1", "AUn2", "AUn3", "AUn4", "AUp1", "AUp2", "AUp3", "AUp4", "AUp5", "RB1", "RB2", "RB3", "RB4", "RB5", "RB6", "RB7", "RD1", "RD2", "RD3", "RD4", "RD5", "RD6", "RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7"];

export function hasPractice(code) {
  return PRACTICE_CODES.includes(code);
}

// Banken för en diagnos: { code, parts: [{ id, title, labels, formNote? }], unpracticed?, tasks }. unpracticed är etiketterna som
// inte övas (de hör till ingen del); den finns bara i banker som har några.
export async function loadBank(code) {
  if (!hasPractice(code)) throw new Error(`Inga övningar för ${code}`);
  const module = await import(`./bank/${code.toLowerCase()}.js`);
  return module.default;
}
