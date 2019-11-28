import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/**
 * Component that does all the logic for the search
 * in the Search view
 */
const SearchForm = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const changeSearch = useCallback(
    /**
     * Update the url whenever the search changes
     */
    ({
      target: { value },
    }) => {
      push(`${pathname}${value ? '?search=' : ''}${value}`);
    }, [push, pathname],
  );
  return (
    <input onChange={changeSearch} />
  );
};


export default SearchForm;
