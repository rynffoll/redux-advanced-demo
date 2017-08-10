import * as types from './types';

const initialState = {
  isFetching: false,
  error: "",
  tasks: []
};

export function tasks(state = initialState, action) {
  switch(action.type) {
  case types.FIND_ALL:
    return {
      ...state,
      isFetching: true
    };
  case types.FIND_ALL_SUCCESS:
    return {
      ...state,
      isFetching: false,
      tasks: action.tasks
    };
  case types.FIND_ALL_ERROR:
    return {
      ...state,
      isFetching: false,
      error: action.errorMessage
    };
  default:
    return state;
  }
}
