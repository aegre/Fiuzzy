import fuzzySearch from 'utils/fuzzySearch';

describe('utils.fuzzySearch', () => {
  test('Is returning true result for a whole object', () => {
    expect(
      fuzzySearch({
        date: '2019-02-12',
        name: 'pusheen',
      }, 'pushn'),
    ).toBe(true);
  });

  test('Is returning false result for a whole object', () => {
    expect(
      fuzzySearch({
        date: '2019-02-12',
        name: 'pusheen',
      }, 'pushns'),
    ).toBe(false);
  });

  test('Is returning true result for a whole multilevel object', () => {
    expect(
      fuzzySearch({
        date: '2019-02-12',
        personalData: { name: 'pusheen' },
      }, 'pushn'),
    ).toBe(true);
  });

  test('Is returning false result for a whole multilevel object', () => {
    expect(
      fuzzySearch({
        date: '2019-02-12',
        personalData: { name: 'pusheen' },
      }, 'pushns'),
    ).toBe(false);
  });

  test('Is returning true for a string', () => {
    expect(
      fuzzySearch('pusheen', 'pushn'),
    ).toBe(true);
  });

  test('Is returning true for a string case insensitive', () => {
    expect(
      fuzzySearch('PUSHEEN', 'puShn'),
    ).toBe(true);
  });

  test('Is returning false result for a string', () => {
    expect(
      fuzzySearch('pusheeen', 'pushns'),
    ).toBe(false);
  });

  test('Is returning false result for a string case insensitive', () => {
    expect(
      fuzzySearch('PUSHEEEN', 'puShns'),
    ).toBe(false);
  });
});
