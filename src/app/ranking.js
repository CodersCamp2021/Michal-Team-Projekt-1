import { RANKING_PLACES } from './constants';
import { getRanking } from './localStorageRanking';
import { rankingView } from './templates/ranking.template';
import statsSvg from '../../static/assets/ui/icon-stats.svg';

const getThreeHighestResults = (ranking) => {
  return (ranking ?? []).sort((a, b) => b.score / b.maxScore - a.score / a.maxScore).slice(0, 3);
};

const renderRankingArray = (rankingArray) => {
  if (!rankingArray.length) return `Leaderboard is empty`;

  return rankingArray
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
};

export const createRanking = (mode) => {
  const container = document.querySelector('#content-section');
  const rankingArray = getThreeHighestResults(getRanking(mode));
  container.innerHTML = rankingView({
    title: 'Ranking mode',
    imageSrc: statsSvg,
    ranking: renderRankingArray(rankingArray),
  });
};
