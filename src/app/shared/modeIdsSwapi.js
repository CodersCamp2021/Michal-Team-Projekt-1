import { PEOPLE_IDS, STARSHIPS_IDS, VEHICLES_IDS } from '../constants/modeIds';

const base_url = process.env.SW_API_BASE_URL;

export const getAllIds = async (mode) => {
  let nextPage = `${base_url}/${mode}/`;
  let data = [];
  while (nextPage) {
    const res = await fetch(nextPage);
    const { next, results } = await res.json();
    nextPage = next;
    data = [...data, ...results];
  }
  return data.map((d) => getLastSegment(d.url));
};

const getLastSegment = (url) => {
  const paths = url.split('/').filter((entry) => entry !== '');
  const lastPath = paths[paths.length - 1];
  return lastPath;
};

const checkDiffArrays = (first, second) => {
  return first.filter((x) => second.indexOf(x) === -1);
};

/*
*getAllIds('people').then((ids) => console.log('PEOPLE IDS DIFF:' + checkDiffArrays(PEOPLE_IDS, ids)));
getAllIds('vehicles').then((ids) => console.log('VEHICLES IDS DIFF:' + checkDiffArrays(VEHICLES_IDS, ids)));
getAllIds('starships').then((ids) => console.log('STARSHIPS IDS DIFF:' + checkDiffArrays(STARSHIPS_IDS, ids)));
*/
