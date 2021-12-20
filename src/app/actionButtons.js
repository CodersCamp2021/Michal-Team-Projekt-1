import { createRanking } from './ranking';
import { rulesView } from './templates/rules.template.js';
import schoolSvg from '../../static/assets/ui/icon-shool.svg';

export const actionButtons = () => {
  const vehiclesButton = document.querySelector('.mode-btn--vehicles');
  const contentContainer = document.querySelector('#content__container');
  const peopleButton = document.querySelector('.mode-btn--people');
  const starshipsButton = document.querySelector('.mode-btn--starships');
  const rankingButton = document.querySelector('.button--ranking');

  vehiclesButton.addEventListener('click', () => {
    contentContainer.innerHTML = rulesView({
      title: 'Do you recognize this vehicle?',
      content:
        'You have two minute (2m) to answer as many questions as possible. During the game on each question you need to select which vehicle from Star Wars is showed on the left.',
      imageSrc: schoolSvg,
    });
  });
  peopleButton.addEventListener('click', () => {
    contentContainer.innerHTML = rulesView({
      title: 'Who is this character?',
      content:
        'You have two minutes (2m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options.',
      imageSrc: schoolSvg,
    });
  });
  starshipsButton.addEventListener('click', () => {
    contentContainer.innerHTML = rulesView({
      title: 'Do you recognize this starship?',
      content:
        'You have two minutes (2m) to answer as many questions as possible. During the game on each question you need to select which starship from Star Wars is showed on the left.',
      imageSrc: schoolSvg,
    });
  });
  rankingButton.addEventListener('click', createRanking);
};
