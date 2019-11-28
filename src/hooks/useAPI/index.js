// Libraries
import LOADING_STATES from 'consts/loadingStates';
import { useReducer, useCallback } from 'react';

// Components
import apiReducer, { startRequest, onRequestComplete, onRequestError } from './reducer';

/**
 * Hook that manages the state of an API request
 * @param {function} endPoint This should be a pr
 * @param {*} [initialValue] The initial value
 */
const useAPI = (endPoint, initialValue = {}) => {
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
      const responseData = await endPoint(params);
      dispatch(onRequestComplete(responseData));
    } catch (err) {
      dispatch(onRequestError(err));
    }
  }, [endPoint, dispatch]);

  return {
    data,
    loading,
    error,
    call,
  };
};

export default useAPI;
