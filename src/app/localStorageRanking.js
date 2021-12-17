export const getRanking = (mode) => JSON.parse(localStorage.getItem(mode)) || [];

export const addScoreToRanking = (mode, userResult) => {
  const ranking = getRanking(mode);
  ranking.push(userResult);
  localStorage.setItem(mode, JSON.stringify(ranking));
};
