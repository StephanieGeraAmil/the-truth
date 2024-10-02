import * as actions from "../actionTypes";
import * as api from "../api/api.js";

export const addVerse = (verse) => async (dispatch, getState) => {
  try {
    const { data } = await api.createVerse(verse);
    const action = { type: actions.ADD_VERSE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
// export const deleteVerse = (verse_id) => async (dispatch) => {
//   try {
//     // await api.deleteVerse(verse_id);
//     const action = { type: actions.DELETE_VERSE, payload: verse_id };
//     dispatch(action);
//   } catch (error) {
//     console.log(error);
//   }
// };
export const updateVerse = (id, verse) => async (dispatch) => {
  try {
    const { data } = await api.updateVerse(id, verse);
    const action = { type: actions.UPDATE_VERSE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
