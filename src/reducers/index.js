// ROOT REDUCER

import { combineReducers } from "redux";

import logReducer from "./log-reducer";

export default combineReducers({
  // first value is name of state
  log: logReducer,
});
