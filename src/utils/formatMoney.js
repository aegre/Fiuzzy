const formatMoney = (value, { locale = 'es-MXN', currency = 'MXN', digits = 2 } = {}) => (
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency,
    minimumFractionDigits: digits,
  }).format(value)
);

export default formatMoney;
