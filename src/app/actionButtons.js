import { createRanking } from './ranking';
import vehiclesTemplate from './templates/vehiclesRules.template.js';
import peopleTemplate from './templates/peopleRules.template.js';
import starshipsTemplate from './templates/starshipsRules.template.js';

export default () => {
  const vehiclesButton = document.querySelector('.mode-btn--vehicles');
  const contentContainer = document.querySelector('.content__container');
  const peopleButton = document.querySelector('.mode-btn--people');
  const starshipsButton = document.querySelector('.mode-btn--starships');
  const rankingButton = document.querySelector('.button--ranking');

  vehiclesButton.addEventListener('click', () => {
    contentContainer.innerHTML = vehiclesTemplate;
  });
  peopleButton.addEventListener('click', () => {
    contentContainer.innerHTML = peopleTemplate;
  });
  starshipsButton.addEventListener('click', () => {
    contentContainer.innerHTML = starshipsTemplate;
  });
  rankingButton.addEventListener('click', createRanking);
};
