// any actions for logs

import { GET_LOGS, SET_LOADING, LOGS_ERROR } from "./types";

// get logs from server
export const getLogs = () => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    const res = await fetch("/logs");
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
