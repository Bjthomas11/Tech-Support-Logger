import {
  GET_TECHNICIANS,
  SET_LOADING,
  TECHNICIANS_ERROR,
  ADD_TECHNICIAN,
  DELETE_TECHNICIANS,
} from "./types";

// get technicians from server
export const getTechnicians = () => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    const res = await fetch("/technicians");
    const data = await res.json();
    dispatch({
      type: GET_TECHNICIANS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHNICIANS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// add technician from server
export const addTechnician = (technician) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    const res = await fetch("/technicians", {
      method: "POST",
      body: JSON.stringify(technician),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TECHNICIAN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TECHNICIANS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// delete tech from server
export const deleteTechnician = (id) => async (dispatch) => {
  // using thunk to use dispatch to get type and action at any time
  try {
    setLoading();

    // fetch call
    await fetch(`/technicians/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECHNICIANS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: TECHNICIANS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
