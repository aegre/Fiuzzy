// Libraries
import React from 'react';
import { render, wait } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Components
import APIMock from 'api';
import SearchView from '..';

// Mocks
jest.mock('api');

beforeEach(jest.clearAllMocks);

describe('<SearchView/>', () => {
  test('Is calling the API when mounting', async () => {
    APIMock.getList.mockResolvedValue([]);
    render(<MemoryRouter><SearchView /></MemoryRouter>);

    await wait();

    expect(APIMock.getList).toHaveBeenCalledTimes(1);
  });
});
