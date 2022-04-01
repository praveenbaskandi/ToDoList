import * as types from '../action/types';

export const initialState = {
  taskList: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TASK_LIST_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        isLoading: false,
      };

    case types.ADD_TASK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.ADD_TASK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        taskList: [],
        error: action.payload,
      };

    case types.GET_TASK_LIST_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        isLoading: false,
      };

    case types.GET_TASK_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_TASK_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        taskList: [],
        error: action.payload,
      };

    case types.DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: action.payload,
        isLoading: false,
      };

    case types.DELETE_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.DELETE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        taskList: [],
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};
