import { updateScore } from '../index';

test('updateScore', () => {
  expect(updateScore(0)).toBe(0);
  expect(() => updateScore(2)).toThrowError();
  expect(() => updateScore(-1)).toThrowError();
  expect(() => updateScore(NaN)).toThrowError();
});
