import React, { useEffect } from 'react';
import useAPI from 'hooks/useAPI';
import API from 'api';
import SearchForm from './SearchForm';
import PaymentsList from './PaymentsList';


const SearchView = () => {
  const { call, data, loading } = useAPI(API.getList, []);

  useEffect(() => {
    call();
  }, [call]);

  return (
    <section>
      <SearchForm />
      <PaymentsList payments={data} loading={loading} />
    </section>
  );
};


export default SearchView;
