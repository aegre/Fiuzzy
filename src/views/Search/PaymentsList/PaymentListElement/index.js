// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Components
import formatMoney from 'utils/formatMoney';
import formatDate from 'utils/formatDate';
import stringToDate from 'utils/stringToDate';
import { StyledPaymentElement, StyledInfoSection, StyledAmount } from './styled';

const PaymentListElement = ({
  elementId, amount, date, cardLastFour,
}) => (
  <StyledPaymentElement data-testid={elementId}>
    <StyledInfoSection>
      <h2>{`**** **** **** ${cardLastFour}`}</h2>
      <small>{formatDate(stringToDate(date))}</small>
    </StyledInfoSection>
    <StyledAmount>
      <h1>
        {formatMoney(amount)}
      </h1>
    </StyledAmount>
  </StyledPaymentElement>
);

PaymentListElement.propTypes = {
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  cardLastFour: PropTypes.string.isRequired,
  elementId: PropTypes.string.isRequired,
};

export default PaymentListElement;
