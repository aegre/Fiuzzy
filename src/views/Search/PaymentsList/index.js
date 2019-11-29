// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

// Components
import LOADING_STATES from 'consts/loadingStates';
import fuzzySearch from 'utils/fuzzySearch';
import Loading from 'components/Loading';
import { paymentPropTypes } from './consts';
import { StyledPlaceHolder } from './styled';

export const getElementId = ({ date, cardLastFour }) => (
  `${date}${cardLastFour}`
);

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
    return (
      <StyledPlaceHolder data-testid="payments-list-loading">
        <Loading />
        Cargando
      </StyledPlaceHolder>
    );
  }

  if (loading === LOADING_STATES.loaded && paymentsList.length === 0) {
    return (
      <StyledPlaceHolder data-testid="payments-list-not-found">
        <h3>Lo sentimos, no se encontraron elementos</h3>
        <span role="img" aria-label="Face with cold sweat">&#x1F613;</span>
      </StyledPlaceHolder>
    );
  }
  return (
    <>
      <span>{`elementos: ${paymentsList.length}`}</span>
      <ul>
        {
        paymentsList.map((payment) => {
          const elementId = getElementId(payment);
          return (
            <li key={elementId} data-testid={elementId}>
              {`${payment.amount} - ${payment.date} - ${payment.cardLastFour}`}
            </li>
          );
        })
      }
      </ul>
    </>
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
