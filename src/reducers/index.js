// ROOT REDUCER

import { combineReducers } from "redux";

import logReducer from "./log-reducer";
import technicianReducer from "./technician-reducer";

export default combineReducers({
  // first value is name of state
  log: logReducer,
  technician: technicianReducer,
});
