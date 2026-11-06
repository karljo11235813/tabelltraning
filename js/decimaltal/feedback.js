import { num } from './decimal.js';

export function displayAnswer(current) {
  return current.answerType === 'choice' ? current.answer : '\\(' + num(current.answer) + '\\)';
}

// Under a wrong answer: the right answer, the sentence as a calculation (word
// problems), and the ladder, each in its own block. A note between two steps gets
// an arrow; a note before the first step introduces it.
export function feedbackHtml(problem) {
  const parts = [`<div class="fb-head">Fel. Rätt svar är ${displayAnswer(problem)}.</div>`];
  if (problem.intro) parts.push(`<div class="fb-text">${problem.intro}</div>`);
  problem.ladder.forEach((step, i) => {
    if (step.note) parts.push(`<div class="fb-note">${i > 0 ? '↓ ' : ''}${step.note}</div>`);
    parts.push(`<div class="fb-step">\\(${step.tex}\\)</div>`);
  });
  return parts.join('');
}
