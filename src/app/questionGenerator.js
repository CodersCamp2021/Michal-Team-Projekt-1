import {
  PEOPLE_IDS,
  STARSHIPS_IDS,
  VEHICLES_IDS,
  PEOPLE_IMAGES,
  STARSHIPS_IMAGES,
  VEHICLES_IMAGES,
} from './constants/modeIds';
import { getOneById } from './api/starwarsApi';
import { generateRandomId, generateRandomIds } from './shared/random';

const getModeIds = (mode) => {
  switch (mode) {
    case 'people':
      return [PEOPLE_IDS, PEOPLE_IMAGES];
    case 'vehicles':
      return [VEHICLES_IDS, VEHICLES_IMAGES];
    case 'starships':
      return [STARSHIPS_IDS, STARSHIPS_IMAGES];
  }
};

export const generateQuestion = async (mode) => {
  const [modeIdsArray, modeImages] = getModeIds(mode);
  const answersIds = generateRandomIds(modeIdsArray);
  const rightAnswerId = generateRandomId(answersIds);
  const answers = await Promise.all(
    answersIds.map(async (id) => {
      const answersData = await getOneById(mode, id);
      return {
        id,
        ...answersData,
      };
    }),
  );
  const rightAnswer = answers.find((answer) => answer.id === rightAnswerId);
  const answerImgPath = modeImages[rightAnswerId];

  return { answers, answerImgPath, rightAnswer };
};
