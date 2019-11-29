// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

// Components
import LOADING_STATES from 'consts/loadingStates';
import fuzzySearch from 'utils/fuzzySearch';
import { paymentPropTypes } from './consts';

const PaymentsList = ({ payments, loading }) => {
  const [paymentsList, setPaymentsList] = useState([]);

  const { search } = useLocation();
  const { search: searchText } = parse(search);
  useEffect(() => {
    if (searchText) {
      setPaymentsList(payments.filter((payment) => fuzzySearch(payment, searchText)));
    } else {
      setPaymentsList(payments);
    }
  }, [payments, searchText]);


  if (loading === LOADING_STATES.initial || loading === LOADING_STATES.loading) {
    return <span>Cargando</span>;
  }
  return (
    <ul>
      {
        paymentsList.map((payment) => (
          <li key={`${payment.date}${payment.cardLastFour}`}>
            {`${payment.amount} - ${payment.date} - ${payment.cardLastFour}`}
          </li>
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
