import formatMoney from 'utils/formatMoney';


describe('utils.formatMoney', () => {
  test('It returns 0', () => {
    expect(formatMoney(0)).toBe('MX$0.00');
  });
  test('It returns a value', () => {
    expect(formatMoney(1599.399)).toBe('MX$1,599.40');
  });
});
