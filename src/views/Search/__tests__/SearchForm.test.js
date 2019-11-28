// Libraries
import React, { useEffect } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';

// Components
import SearchForm from '../SearchForm';


/**
 * Simple component to tests the router props
 * @param {{ callBack: function }} Props
 */
const RouterWrapper = ({ callBack }) => {
  const { search } = useLocation();
  useEffect(() => {
    callBack(search);
  }, [search, callBack]);
  return null;
};

describe('<SearchForm/>', () => {
  test('Is getting the search from the router', () => {
    const expectedSearch = 'pusheen';
    const { getByTestId } = render(
      <MemoryRouter
        initialEntries={[`?search=${expectedSearch}`]}
        initialIndex={0}
      >
        <SearchForm />
      </MemoryRouter>,
    );

    const searchInput = getByTestId('fiuzzy-search-input');
    expect(searchInput).toHaveValue(expectedSearch);
  });

  test('Is updating the search param in the router', () => {
    const expectedSearch = 'pusheen';
    const routerCallBack = jest.fn();

    const { getByTestId } = render(
      <MemoryRouter>
        <SearchForm />
        <RouterWrapper callBack={routerCallBack} />
      </MemoryRouter>,
    );

    const searchInput = getByTestId('fiuzzy-search-input');

    fireEvent.change(searchInput, {
      target: { value: expectedSearch },
    });
    expect(searchInput).toHaveValue(expectedSearch);
    expect(routerCallBack).toHaveBeenLastCalledWith(`?search=${expectedSearch}`);
  });
});
