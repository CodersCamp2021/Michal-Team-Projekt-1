import { PEOPLE_IDS, STARSHIPS_IDS, VEHICLES_IDS } from './constants/modeIds';
import { getOneById } from './api/starwarsApi';
import { generateRandomId, generateRandomIds } from './shared/random';

const getModeIds = (mode) => {
  switch (mode) {
    case 'people':
      return PEOPLE_IDS;
    case 'vehicles':
      return VEHICLES_IDS;
    case 'starships':
      return STARSHIPS_IDS;
  }
};

export const generateQuestion = async (mode) => {
  const modeIdsArray = getModeIds(mode);
  const answersIds = generateRandomIds(modeIdsArray);
  const rightAnswerId = generateRandomId(answersIds);
  const answers = await Promise.all(answersIds.map((questionId) => getOneById(mode, questionId)));
  const rightAnswer = answers.find((answer) => answer.id === rightAnswerId);
  const answerImgPath = `static/assets/img/modes/${mode}/${rightAnswerId}.jpg`;

  return { answers, answerImgPath, rightAnswer };
};
