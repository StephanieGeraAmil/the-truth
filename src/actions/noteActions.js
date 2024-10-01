import * as actions from "../actionTypes";
import * as api from "../api/api.js";


export const addNote = (note) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    // const { data } = await api.createNote(note);
    const data=null;
    const action = { type: actions.ADD_NOTE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteNote = (note_id) => async (dispatch) => {
  try {
    // await api.deleteNote(note_id);
    const action = { type: actions.DELETE_NOTE, payload: Note_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateNote = (note) => async (dispatch) => {
  try {
     // const { data } await api.updateNote(note);
    const data=null;

    const action = { type: actions.UPDATE_NOTE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
