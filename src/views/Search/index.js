import React, { useEffect } from 'react';
import useAPI from 'hooks/useAPI';
import API from 'api';
import SearchForm from './SearchForm';
import PaymentsList from './PaymentsList';
import StyledSearchView from './styled';

export const formatPayments = (payments) => payments.map((payment) => ({
  amount: payment.amount,
  date: payment.date,
  cardLastFour: payment.card_last_four,
}));

const SearchView = () => {
  const { call, data, loading } = useAPI(API.getList, [], formatPayments);

  useEffect(() => {
    call();
  }, [call]);

  return (
    <StyledSearchView>
      <SearchForm />
      <PaymentsList payments={data} loading={loading} />
    </StyledSearchView>
  );
};


export default SearchView;
