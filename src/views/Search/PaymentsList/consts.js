import PropTypes from 'prop-types';

export const paymentPropTypes = PropTypes.shape({
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  cardLastFour: PropTypes.string.isRequired,
});

export default {
  paymentPropTypes,
};
