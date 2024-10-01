import * as actions from "../actionTypes";
import * as api from "../api/api.js";
// import { thoughts, verses } from "../data.js";

// export const getVersesRelated = (thought) => async (dispatch) => {
//   try {
//     // const data=[JSON.parse(localStorage.getItem( thought))];
//     if (thoughts && thoughts.find((t) => t.key === thought)) {
//       const verses_ids = thoughts.filter((t) => t.key === thought)[0].verses;
//       const data = verses.filter((v) => verses_ids.indexOf(v.id) > -1);
//       // const action = { type: actions.GET_VERSES_RELATED, payload: data };
//       // dispatch(action);
//     } else {
//       // const action = { type: actions.CLEAN_VERSES_RELATED };
//       // dispatch(action);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };


export const addVerse = (verse) => async (dispatch, getState) => {
  try {
    const { data } = await api.createVerse(verse);
    const action = { type: actions.ADD_VERSE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteVerse = (verse_id) => async (dispatch) => {
  try {
    // await api.deleteVerse(verse_id);
    const action = { type: actions.DELETE_VERSE, payload: verse_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateVerse = (verse) => async (dispatch) => {
  try {
     // const { data } await api.updateVerse(verse);
    const data=null;

    const action = { type: actions.UPDATE_VERSE, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
