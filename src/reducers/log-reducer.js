// CONTROL STATE MANAGMENT HERE

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "../actions/types";

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        // spreading the current state of logs and adding the new log with action.payload
        logs: [...state.logs, action.payload],
        loading: false,
      };

    case DELETE_LOG:
      return {
        ...state,
        // filtering the logs array and comparing the log id to the payload id
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        // map over logs array, compare current log id to paylod id, if true set to the payload, if not set to the current log
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
