import LOADING_STATES from 'consts/loadingStates';
import { useReducer, useCallback } from 'react';

const START_REQUEST = 'START_REQUEST';
const ON_REQUEST_COMPLETE = 'ON_REQUEST_COMPLETE';
const ON_REQUEST_ERROR = 'ON_REQUEST_ERROR';


const apiReducer = (initialValue = {}) => (state, action) => {
  switch (action.type) {
    case START_REQUEST: {
      return {
        data: initialValue,
        isLoading: LOADING_STATES.loading,
        error: '',
      };
    }
    case ON_REQUEST_COMPLETE: {
      return {
        data: action.payload,
        isLoading: LOADING_STATES.loaded,
        error: '',
      };
    }
    case ON_REQUEST_ERROR: {
      return {
        ...state,
        isLoading: LOADING_STATES.error,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const useAPI = (endPoint, initialValue = {}) => {
  const initialState = {
    data: initialValue,
    isLoading: LOADING_STATES.initial,
    error: '',
  };

  const [{
    data,
    isLoading,
    error,
  }, dispatch] = useReducer(apiReducer(initialValue), initialState);

  const call = useCallback(async (params) => {
    try {
      dispatch({ type: START_REQUEST });
      const responseData = await endPoint(params);
      dispatch({ type: ON_REQUEST_COMPLETE, payload: responseData });
    } catch (err) {
      dispatch({ type: ON_REQUEST_ERROR, payload: err });
    }
  }, [endPoint, dispatch]);

  return {
    data,
    isLoading,
    error,
    call,
  };
};

export default useAPI;
