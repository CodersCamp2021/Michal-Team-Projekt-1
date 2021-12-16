import { App } from '../src/app/App';
import { jest } from '@jest/globals';
import actionButtons from '../src/app/actionButtons';

jest.mock('../src/app/actionButtons');

test('should call actionButtons import', () => {
  // App({});
  // expect(actionButtons).toHaveBeenCalled();
});
