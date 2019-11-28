import React, { useEffect } from 'react';
import useAPI from 'hooks/useAPI';
import { render, wait } from '@testing-library/react';
import LOADING_STATES from 'consts/loadingStates';

/**
 * @typedef {Object} Props
 * @property {function} propsCallBack The callback function used to assert the props in the hook
 * @property {function} endpoint The endpoint method, this should be a mock of a promise
 * @property {array} [params] List of params to call the endpoint
 * @property {boolean} [shouldCall] boolean determines if we should call the method in the test
 * Custom component to test the useApi hook
 * @param {Props} props
 */
const UseAPIWrapper = ({
  propsCallBack, endpoint, initialValue = {}, params = undefined, shouldCall = true,
}) => {
  const apiState = useAPI(endpoint, initialValue);
  useEffect(() => {
    if (shouldCall) {
      apiState.call(params);
    }
  }, []);
  propsCallBack(apiState);
  return null;
};

const endpointMock = jest.fn();

beforeEach(jest.clearAllMocks);

describe('hooks.useAPI', () => {
  test('Is calling the API with the call function', async () => {
    const expectedResult = { name: 'pusheen' };
    endpointMock.mockResolvedValue(expectedResult);
    const propsCallBack = jest.fn();
    render(<UseAPIWrapper
      endpoint={endpointMock}
      propsCallBack={propsCallBack}
    />);

    expect(propsCallBack).toHaveBeenLastCalledWith({
      data: expect.anything(),
      call: expect.any(Function),
      error: '',
      isLoading: LOADING_STATES.loading,
    });
    await wait();

    expect(endpointMock).toHaveBeenCalledTimes(1);

    expect(propsCallBack).toHaveBeenLastCalledWith({
      data: expectedResult,
      call: expect.any(Function),
      error: '',
      isLoading: LOADING_STATES.loaded,
    });
  });

  test('Is setting the initialValue', () => {
    const expectedInitialValue = [];
    const propsCallBack = jest.fn();
    render(<UseAPIWrapper
      endpoint={endpointMock}
      propsCallBack={propsCallBack}
      initialValue={expectedInitialValue}
      shouldCall={false}
    />);

    expect(propsCallBack).toHaveBeenLastCalledWith({
      data: expectedInitialValue,
      call: expect.any(Function),
      error: '',
      isLoading: LOADING_STATES.initial,
    });
  });

  test('Is setting the error', async () => {
    const error = { message: 'error' };
    endpointMock.mockRejectedValue(error);
    const propsCallBack = jest.fn();
    const params = ['pusheen', 'Bodacious', 'nyan'];
    render(<UseAPIWrapper
      endpoint={endpointMock}
      propsCallBack={propsCallBack}
      params={params}
    />);

    await wait();

    expect(endpointMock).toHaveBeenCalledTimes(1);
    expect(propsCallBack).toHaveBeenLastCalledWith({
      data: expect.anything(),
      call: expect.any(Function),
      error,
      isLoading: LOADING_STATES.error,
    });
  });
});
