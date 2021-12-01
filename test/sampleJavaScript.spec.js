import { App } from '../src/app/App';
import { jest } from '@jest/globals';

describe('JavaScript sample test', () => {
  it('works', () => {
    const spy = jest.spyOn(console, 'log');
    App({});
    expect(spy).toHaveBeenCalledWith('Działa!');
  });
});
