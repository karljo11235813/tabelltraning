import { checkDecimalAnswer, num } from './decimal.js';

// Picked letters as a list: "A", "A och D", "A, D och E".
export function letterList(letters) {
  const list = [...letters];
  return list.length < 2 ? list.join('') : list.slice(0, -1).join(', ') + ' och ' + list.at(-1);
}

export function displayAnswer(current) {
  if (current.answerType === 'choice') return current.answer;
  if (current.answerType === 'multi') return letterList(current.answer);
  return '\\(' + num(current.answer) + '\\)';
}

// Under a wrong answer: the right answer, what the student did when the answer is a
// known mistake (Räkneordning: "Du räknade 22 + 12 först."), the sentence as a
// calculation (word problems), and the ladder, each in its own block. A note between
// two steps gets an arrow; a note before the first step introduces it. A multi
// question's ladder is one line per calculation instead, so its notes get no arrows.
export function feedbackHtml(problem, given = '', { skipped = false } = {}) {
  const parts = [`<div class="fb-head">${skipped ? 'Du hoppade över.' : 'Fel.'} Rätt svar är ${displayAnswer(problem)}.</div>`];
  const mistake = given && (problem.mistakes || []).find(({ value }) => checkDecimalAnswer(given, value));
  if (mistake) parts.push(`<div class="fb-text fb-mistake">${mistake.text}</div>`);
  if (problem.intro) parts.push(`<div class="fb-text">${problem.intro}</div>`);
  const chain = problem.answerType !== 'multi';
  problem.ladder.forEach((step, i) => {
    if (step.note) parts.push(`<div class="fb-note">${chain && i > 0 ? '↓ ' : ''}${step.note}</div>`);
    parts.push(`<div class="fb-step">\\(${step.tex}\\)</div>`);
  });
  return parts.join('');
}
