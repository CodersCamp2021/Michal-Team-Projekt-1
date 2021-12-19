import { jest } from '@jest/globals';
import { getOneById } from '../src/app/api/starwarsApi';

const mockUrl = process.env.SW_API_BASE_URL;
const response = {
  edited: '2014-12-20T21:17:50.311Z',
  name: 'R2-D2',
  created: '2014-12-10T15:11:50.376Z',
  gender: 'n/a',
  skin_color: 'white, blue',
  hair_color: 'n/a',
  height: '96',
  eye_color: 'red',
  mass: '32',
  homeworld: 8,
  birth_year: '33BBY',
  image: 'r2-d2.jpg',
  id: 3,
  vehicles: [],
  starships: [],
  films: [1, 2, 3, 4, 5, 6],
};

beforeEach(() => {
  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => response,
    });
  });
});

afterAll(() => {
  global.fetch.mockClear();
});

it('Should return correct data if the status is ok', async () => {
  const res = await getOneById('people', '3');
  expect(res).toEqual(response);
});

it('Should return an error if the status is not ok', () => {
  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: false,
    });
  });
  const action = async () => {
    await getOneById();
  };
  expect(action()).rejects.toThrowError();
});

it('Should call fetch with correct params', () => {
  getOneById('people', '3');
  expect(global.fetch).toHaveBeenCalledWith(`${mockUrl}/people/3`);
});
