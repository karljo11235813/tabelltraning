// Vilka diagnoser som har övningar (Öva) och hur bankfilerna laddas: en bank hämtas först när diagnosen övas.

export const PRACTICE_CODES = ["AUn1", "AUn2", "AUn3", "AUn4", "AUp1"];

export function hasPractice(code) {
  return PRACTICE_CODES.includes(code);
}

// Banken för en diagnos: { code, parts: [{ id, title, labels, formNote? }], tasks }.
export async function loadBank(code) {
  if (!hasPractice(code)) throw new Error(`Inga övningar för ${code}`);
  const module = await import(`./bank/${code.toLowerCase()}.js`);
  return module.default;
}
