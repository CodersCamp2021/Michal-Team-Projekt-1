import { createRanking } from './ranking';
import { quizView } from './templates/quiz.template.js';
import schoolSvg from '../../static/assets/ui/icon-shool.svg';
import { generateQuestion } from './questionGenerator.js';
import { rulesView } from './templates/rules.template.js';
import { modes } from './constants';

export const actionButtons = () => {
  const vehiclesButton = document.querySelector('.mode-btn--vehicles');
  const contentContainer = document.querySelector('#content__container');

  const peopleButton = document.querySelector('.mode-btn--people');
  const starshipsButton = document.querySelector('.mode-btn--starships');
  const rankingButton = document.querySelector('.button--ranking');
  const actionButton = document.querySelector('.button--action');
  const quizPhoto = document.querySelector('.photo__container img');

  actionButton.setAttribute('title', modes.title.people);
  actionButton.setAttribute('mode', 'people');

  vehiclesButton.addEventListener('click', () => {
    contentContainer.innerHTML = rulesView({
      title: modes.title.vehicles,
      content: modes.content.vehicles,
      imageSrc: schoolSvg,
    });

    actionButton.setAttribute('title', modes.title.vehicles);
    actionButton.setAttribute('mode', 'vehicles');
  });
  peopleButton.addEventListener('click', () => {
    contentContainer.innerHTML = rulesView({
      title: modes.title.people,
      content: modes.content.people,
      imageSrc: schoolSvg,
    });

    actionButton.setAttribute('title', modes.title.people);
    actionButton.setAttribute('mode', 'people');
  });

  starshipsButton.addEventListener('click', async () => {
    contentContainer.innerHTML = rulesView({
      title: modes.title.starships,
      content: modes.content.starships,
      imageSrc: schoolSvg,
    });

    actionButton.setAttribute('title', modes.title.starships);
    actionButton.setAttribute('mode', 'starships');
  });

  rankingButton.addEventListener('click', createRanking);

  actionButton.addEventListener('click', async (event) => {
    const title = event.target.getAttribute('title');
    const questions = await generateQuestion('starships');

    quizPhoto.src = questions.answerImgPath;
    contentContainer.innerHTML = quizView(questions.answers, title);
  });
};
