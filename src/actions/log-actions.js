// any actions for logs

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
} from "./types";

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
      payload: error.response,
    });
  }
};

// add log from server
export const addLog = (log) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};

// delete log from server
export const deleteLog = (id) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};

// update log from server
export const updateLog = (log) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};

// set current log action
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

// clear current log action
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// search logs from server
export const searchLogs = (text) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call with the text inputted
    const res = await fetch(`/logs?q=${text}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
