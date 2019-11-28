// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import LOADING_STATES from 'consts/loadingStates';
import { paymentPropTypes } from './consts';

const PaymentsList = ({ payments, loading }) => {
  if (loading === LOADING_STATES.initial || loading === LOADING_STATES.loading) {
    return <span>Cargando</span>;
  }
  return (
    <ul>
      {
        payments.map((payment) => (
          <li key={payment.date}>{payment.amount}</li>
        ))
      }
    </ul>
  );
};

PaymentsList.defaultProps = {
  payments: [],
  loading: LOADING_STATES.initial,
};

PaymentsList.propTypes = {
  payments: PropTypes.arrayOf(
    paymentPropTypes,
  ),
  loading: PropTypes.string,
};

export default PaymentsList;
