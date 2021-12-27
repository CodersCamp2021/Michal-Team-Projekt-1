import { generateRandomIds } from '../src/app/shared/random';

const ids = [1, 2, 3, 4, 5, 6, 7, 8];

it('Should generate random unique ids with default len', () => {
  const randomIds = generateRandomIds(ids);
  expect(randomIds.length).toEqual(4);
  expect(randomIds).toEqual([...new Set(randomIds)]);
});

it('Should generate random unique ids with given len', () => {
  const randomIds = generateRandomIds(ids, 6);
  expect(randomIds.length).toEqual(6);
  expect(randomIds).toEqual([...new Set(randomIds)]);
});
