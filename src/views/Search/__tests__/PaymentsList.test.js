// Libraries
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

// Data
import paymentData from '__tests__/__mocks__/payments.json';

// Components
import LOADING_STATES from 'consts/loadingStates';
import fuzzySearch from 'utils/fuzzySearch';
import PaymentsList, { getElementId } from '../PaymentsList';
import { formatPayments } from '..';


describe('<PaymentsList/>', () => {
  test('Is showing the loading placeholder if the state is initial', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PaymentsList payments={formatPayments(paymentData)} loading={LOADING_STATES.initial} />
      </MemoryRouter>,
    );
    expect(getByTestId('payments-list-loading')).toBeInTheDocument();
  });

  test('Is showing the loading placeholder if the state is loading', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <PaymentsList payments={formatPayments(paymentData)} loading={LOADING_STATES.loading} />
      </MemoryRouter>,
    );
    expect(getByTestId('payments-list-loading')).toBeInTheDocument();
  });

  test('Is showing the not found placeholder if the state is loaded and no elements are in the array',
    () => {
      const { getByTestId } = render(
        <MemoryRouter>
          <PaymentsList payments={[]} loading={LOADING_STATES.loaded} />
        </MemoryRouter>,
      );
      expect(getByTestId('payments-list-not-found')).toBeInTheDocument();
    });

  test('Is showing the complete list', () => {
    const expectedData = formatPayments(paymentData);
    const { getByTestId } = render(
      <MemoryRouter>
        <PaymentsList payments={formatPayments(paymentData)} loading={LOADING_STATES.loaded} />
      </MemoryRouter>,
    );

    const expectedElementIds = expectedData.map(getElementId);
    expectedElementIds.forEach((id) => {
      expect(getByTestId(id)).toBeInTheDocument();
    });
  });

  test('Is filtering the list', () => {
    const search = '1234';
    const initialData = formatPayments(paymentData);
    const filteredData = initialData.filter((element) => fuzzySearch(element, search));
    const { getByTestId, queryByTestId } = render(
      <MemoryRouter
        initialEntries={[`?search=${search}`]}

      >
        <PaymentsList payments={initialData} loading={LOADING_STATES.loaded} />
      </MemoryRouter>,
    );

    // The initial and filtered data should be different
    expect(initialData).not.toHaveLength(filteredData.length);
    // We should have at least one filtered element
    expect(filteredData).not.toHaveLength(0);

    const allElementsIds = initialData.map(getElementId);
    const filteredElementsIds = filteredData.map(getElementId);
    allElementsIds.forEach((id) => {
      if (filteredElementsIds.includes(id)) {
        expect(getByTestId(id)).toBeInTheDocument();
      } else {
        expect(queryByTestId(id)).not.toBeInTheDocument();
      }
    });
  });
});
