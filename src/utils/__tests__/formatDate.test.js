import formatDate from 'utils/formatDate';
import stringToDate from 'utils/stringToDate';

describe('utils.formatDate', () => {
  test('Is formatting with the default format', () => {
    const date = stringToDate('17-07-2017T03:34');
    expect(formatDate(date)).toBe('julio 16, 2017 10:34');
  });
});
