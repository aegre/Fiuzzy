import React, { useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

/**
 * Component that does all the logic for the search
 * in the Search view
 */
const SearchForm = () => {
  const { push } = useHistory();
  const { pathname, search } = useLocation();

  const { search: searchText = '' } = parse(search);

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
    <input
      data-testid="fiuzzy-search-input"
      onChange={changeSearch}
      value={searchText}
    />
  );
};


export default SearchForm;
