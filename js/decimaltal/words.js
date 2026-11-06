// Swedish number words for Summa, differens, produkt, kvot.

const ONES = ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio',
  'elva', 'tolv', 'tretton', 'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton'];
const TENS = ['', '', 'tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio', 'sjuttio', 'åttio', 'nittio'];
const PLACE_WORDS = [null, ['tiondel', 'tiondelar'], ['hundradel', 'hundradelar'], ['tusendel', 'tusendelar']];

function wordsBelow1000(n) {
  const hundreds = Math.floor(n / 100), rest = n % 100;
  const parts = [];
  if (hundreds) parts.push(ONES[hundreds] + ' hundra');
  if (rest >= 20) parts.push(TENS[Math.floor(rest / 10)] + (rest % 10 ? ONES[rest % 10] : ''));
  else if (rest) parts.push(ONES[rest]);
  return parts.join(' ');
}

// Each place word on its own, so the words show the places: "fyra hundra åttio tusen".
function wholeWords(n) {
  const thousands = Math.floor(n / 1000), rest = n % 1000;
  const parts = [];
  if (thousands) parts.push(wordsBelow1000(thousands) + ' tusen');
  if (rest) parts.push(wordsBelow1000(rest));
  return parts.join(' ');
}

// A whole number, or a decimal below 1 named by its last place: 0,036 is
// "trettiosex tusendelar". Tiondel is an en-word, so 0,21 is "tjugoen hundradelar".
export function numberWords(x) {
  if (x.d === 0) return wholeWords(x.m);
  const [one, many] = PLACE_WORDS[x.d];
  return x.m === 1 ? 'en ' + one : wholeWords(x.m).replace(/ett$/, 'en') + ' ' + many;
}
