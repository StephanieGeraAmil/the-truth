import * as actions from "../actionTypes";
import * as api from "../api/api.js";
export const addNote = (note) => async (dispatch, getState) => {
  try {
    const { data } = await api.createNote(note);
    const action = { type: actions.ADD_NOTE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateNote = (id, note) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, note);
    const action = { type: actions.UPDATE_NOTE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
