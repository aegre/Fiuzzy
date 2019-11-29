import stringToDate from 'utils/stringToDate';

describe('utils.stringToDate', () => {
  test('Is converting a string to date', () => {
    const datestr = '17-07-2017T03:34';
    const result = stringToDate(datestr);

    expect(result.toUTCString()).toBe('Mon, 17 Jul 2017 03:34:00 GMT');
  });
});
