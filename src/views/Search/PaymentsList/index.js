// Libraries
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';

// Components
import LOADING_STATES from 'consts/loadingStates';
import fuzzySearch from 'utils/fuzzySearch';
import Loading from 'components/Loading';
import stringToDate from 'utils/stringToDate';
import { paymentPropTypes } from './consts';
import { StyledPlaceHolder, StyledListContainer, StyledElementCounter } from './styled';
import PaymentListElement from './PaymentListElement';

export const getElementId = ({ date, cardLastFour }) => (
  `${date}${cardLastFour}`
);

const sortByDate = (first,
  second) => stringToDate(second.date).getTime() - stringToDate(first.date).getTime();

const PaymentsList = ({ payments, loading }) => {
  const [paymentsList, setPaymentsList] = useState([]);

  const { search } = useLocation();
  const { search: searchText } = parse(search);
  useEffect(() => {
    if (searchText) {
      const filteredPayments = payments.filter((payment) => fuzzySearch(payment, searchText));

      setPaymentsList(filteredPayments.sort(
        sortByDate,
      ));
    } else {
      setPaymentsList(payments.sort(sortByDate));
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
      <StyledElementCounter>{`Total: ${paymentsList.length}`}</StyledElementCounter>
      <StyledListContainer>
        {
        paymentsList.map((payment) => {
          const elementId = getElementId(payment);
          return (
            <PaymentListElement
              key={elementId}
              elementId={elementId}
              amount={payment.amount}
              date={payment.date}
              cardLastFour={payment.cardLastFour}
            />
          );
        })
      }
      </StyledListContainer>
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
