import * as actions from "../actionTypes";
import * as api from "../api/api.js";

export const getAllThoughts = () => async (dispatch) => {
  try {
    // const {data}=await api.fetchAllThoughts();

    const data = [];
    for (let i = 0, len = localStorage.length; i < len; ++i) {
      data.push(localStorage.key(i));
    }
    const action = { type: actions.GET_ALL_THOUGHTS, payload: data };
    dispatch(action);
  } catch (error) {
    console.error(error);
  }
};
