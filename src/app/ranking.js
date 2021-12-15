import { RANKING_PLACES } from './constants';
import { getRanking } from './localStorageRanking';

const getThreeHighestResults = (ranking) => {
  return (ranking ?? [])
    .sort((a, b) => b.score / b.maxScore - a.score / a.maxScore)
    .filter((score, i) => i < 3 && score);
};

export const createRanking = (mode) => {
  const container = document.querySelector('#content-section');
  const template = document.querySelector('#ranking-template');
  const ranking = template.content.cloneNode(true);
  const rankingArray = getThreeHighestResults(getRanking(mode));
  const rankingBody = ranking.querySelector('.ranking__body');

  rankingBody.innerHTML = rankingArray
    .map(({ player, score, maxScore }, i) => {
      return `
        <div class="ranking__item">
          <div>${RANKING_PLACES[i]}</div>
          <div>${player}</div>
          <div>${score} / ${maxScore}</div>
        </div>
    `;
    })
    .join('');

  container.innerHTML = '';
  container.append(ranking);
};
