// Decimaltal's texts: the tables' Swedish texts (levels and progress panel), with
// what differs here. The page is Swedish only.

import { I18N } from '../i18n.js';

export const S = {
  ...I18N.sv,
  levelsHeading: 'Nivåer',
  // Soft hyphens so that long names break nicely in the narrow level boxes.
  levelNames: ['Nästan god­tagbart', 'God­tagbart', 'Mer än god­tagbart', 'Pro'],
  notYet: 'Inte godtagbart än',
  onlyFull: 'Nivåerna gäller bara test med alla kategorier.',
  notSaved: 'Testet kunde inte sparas i den här webbläsaren.',
  wrongIn: 'Fel i',
  wrongOf: '{w} fel av {n}',
  noWrong: 'Inga fel!',
  practiceMissed: 'Öva på det du missade',
  showMissed: 'Visa dina fel ({n})',
  youWrote: 'Du skrev',
  testCard: 'Bäst {best} poäng · Senast: {level}',
  progressEmpty: 'Här ser du hur det går när du har gjort ditt första test med alla kategorier.',
  progressWait: 'Gör {n} test till så ser vi om du blir bättre.',
  progressWaitOne: 'Gör 1 test till så ser vi om du blir bättre.',
  progressUp: 'Du blir bättre: i snitt {n} poäng mer än tidigare.',
  progressDown: 'Lite färre poäng än tidigare.',
  progressLevel: 'Ditt snitt just nu: {mean} poäng (mellan {low} och {high} med 95\u00a0% säkerhet)',
  progressLevelShort: 'Ditt snitt just nu: {mean} poäng',
  progressChartTitle: 'Poäng per test',
  progressChartAria: '{count} test. Bäst {best} poäng, lägst {worst} poäng.',
  progressRunTitle: 'Test {n}, {date}: {score} poäng ({correct} rätt, {wrong} fel)',
};

// "Test 2 min", or "Test 90 s" for a length that is not whole minutes.
export function testName(seconds) {
  return seconds % 60 === 0 ? `Test ${seconds / 60} min` : `Test ${seconds} s`;
}
