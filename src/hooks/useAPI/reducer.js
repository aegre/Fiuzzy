import { createAction } from 'utils';
import LOADING_STATES from 'consts/loadingStates';

/**
 * Actions types
 */
const START_REQUEST = 'START_REQUEST';
const ON_REQUEST_COMPLETE = 'ON_REQUEST_COMPLETE';
const ON_REQUEST_ERROR = 'ON_REQUEST_ERROR';

/**
 * Action methods
 */

/**
 * Called when the fetch has been initialized
 */
export const startRequest = createAction(START_REQUEST);

/**
 * Called when the fetch has been completed succesfully, it sets the data in the state
 * @param {*} data
 */
export const onRequestComplete = (data) => createAction(ON_REQUEST_COMPLETE, data);

/**
 * Called when an error has ocurred while fetching, it sets the error in the state
 * @param {*} error
 */
export const onRequestError = (error) => createAction(ON_REQUEST_ERROR, error);


/**
 * Generates a reducer that can manage a useAPI hook state
 * @param {any} initialValue The value that will be set as initial value
 */
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

export default apiReducer;
