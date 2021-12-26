import { randomComputerAnswer } from '../src/app/randomComputerAnswer';

describe('randomComputerAnswer', () => {
  it('should return random answer from array', () => {
    const mockAnswers = [
      {
        birth_year: 'unknown',
        created: '2014-12-10T15:57:50.959000Z',
        edited: '2014-12-20T21:17:50.321000Z',
        eye_color: 'red',
        films: ['https://swapi.dev/api/films/1/'],
        gender: 'n/a',
        hair_color: 'n/a',
        height: '97',
        homeworld: 'https://swapi.dev/api/planets/1/',
        id: 8,
        mass: '32',
        name: 'R5-D4',
        skin_color: 'white, red',
        species: ['https://swapi.dev/api/species/2/'],
        starships: [],
        url: 'https://swapi.dev/api/people/8/',
        vehicles: [],
      },
      {
        birth_year: '64BBY',
        created: '2014-12-10T16:26:56.138000Z',
        edited: '2014-12-20T21:17:50.330000Z',
        eye_color: 'blue',
        films: (2)[('https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/')],
        gender: 'male',
        hair_color: 'auburn, grey',
        height: '180',
        homeworld: 'https://swapi.dev/api/planets/21/',
        id: 12,
        mass: 'unknown',
        name: 'Wilhuff Tarkin',
        skin_color: 'fair',
        species: [],
        starships: [],
        url: 'https://swapi.dev/api/people/12/',
        vehicles: [],
      },
      {
        birth_year: 'unknown',
        created: '2014-12-20T11:10:10.381000Z',
        edited: '2014-12-20T21:17:50.445000Z',
        eye_color: 'brown',
        films: ['https://swapi.dev/api/films/5/'],
        gender: 'male',
        hair_color: 'black',
        height: '185',
        homeworld: 'https://swapi.dev/api/planets/8/',
        id: 60,
        mass: '85',
        name: 'Gregar Typho',
        skin_color: 'dark',
        species: [],
        starships: ['https://swapi.dev/api/starships/39/'],
        url: 'https://swapi.dev/api/people/60/',
        vehicles: [],
      },
      {
        birth_year: 'unknown',
        created: '2014-12-20T10:53:26.457000Z',
        edited: '2014-12-20T21:17:50.442000Z',
        eye_color: 'blue',
        films: ['https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/'],
        gender: 'male',
        hair_color: 'none',
        height: '196',
        homeworld: 'https://swapi.dev/api/planets/50/',
        id: 59,
        mass: 'unknown',
        name: 'Mas Amedda',
        skin_color: 'blue',
        species: ['https://swapi.dev/api/species/27/'],
        starships: [],
        url: 'https://swapi.dev/api/people/59/',
        vehicles: [],
      },
    ];

    const randomAnswerFn = randomComputerAnswer(mockAnswers);
    expect(mockAnswers).toContainEqual(randomAnswerFn);
  });
});
