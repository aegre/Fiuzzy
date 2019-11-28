import { isObject } from 'util';
import { removeCharAt } from 'utils';

describe('utils', () => {
  test('isObject with object', () => {
    expect(isObject({})).toBe(true);
  });

  test('isObject with null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('isObject with number', () => {
    expect(isObject(2)).toBe(false);
  });

  test('removeCharAt with 0', () => {
    expect(removeCharAt('pusheen', 0)).toBe('usheen');
  });

  test('removeCharAt with 2', () => {
    expect(removeCharAt('pusheen', 1)).toBe('psheen');
  });

  test('removeCharAt with 50', () => {
    expect(removeCharAt('pusheen', 50)).toBe('pusheen');
  });
});
