// Libraries
import LOADING_STATES from 'consts/loadingStates';
import { useReducer, useCallback } from 'react';

// Components
import apiReducer, { startRequest, onRequestComplete, onRequestError } from './reducer';

const defaultFormatFunction = (data) => data;

/**
 * Hook that manages the state of an API request
 * @param {function} endPoint This should be a pr
 * @param {*} [initialValue] The initial value
 */
const useAPI = (endPoint, initialValue = {}, formatFunction = defaultFormatFunction) => {
  const initialState = {
    data: initialValue,
    loading: LOADING_STATES.initial,
    error: '',
  };

  const [{
    data,
    loading,
    error,
  }, dispatch] = useReducer(apiReducer(initialValue), initialState);

  const call = useCallback(async (params) => {
    try {
      dispatch(startRequest);
      const { data: responseData } = await endPoint(params);
      dispatch(onRequestComplete(formatFunction(responseData)));
    } catch (err) {
      dispatch(onRequestError(err));
    }
  }, [endPoint, dispatch, formatFunction]);

  return {
    data,
    loading,
    error,
    call,
  };
};

export default useAPI;
