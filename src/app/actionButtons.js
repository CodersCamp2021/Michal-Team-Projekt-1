import { createRanking } from './ranking.js';
import { mode } from './mode';
import { nextQuestion } from './nextQuestion';

export const actionButtons = () => {
  const vehiclesButton = document.querySelector('.mode-btn--vehicles');

  const peopleButton = document.querySelector('.mode-btn--people');
  const starshipsButton = document.querySelector('.mode-btn--starships');
  const rankingButton = document.querySelector('.button--ranking');
  const actionButton = document.querySelector('.button--action');

  vehiclesButton.addEventListener('click', () => mode.setMode('vehicles'));
  peopleButton.addEventListener('click', () => mode.setMode('people'));
  starshipsButton.addEventListener('click', () => mode.setMode('starships'));

  rankingButton.addEventListener('click', createRanking);
  actionButton.addEventListener('click', nextQuestion);
};
