import * as actions from "../actionTypes";
import * as api from "../api/api.js";
import { thoughts, verses } from "../data.js";

export const getVersesRelated = (thought) => async (dispatch) => {
  try {
    // const data=[JSON.parse(localStorage.getItem( thought))];
    if (thoughts && thoughts.find((t) => t.key === thought)) {
      const verses_ids = thoughts.filter((t) => t.key === thought)[0].verses;
      const data = verses.filter((v) => verses_ids.indexOf(v.id) > -1);
      const action = { type: actions.GET_VERSES_RELATED, payload: data };
      dispatch(action);
    } else {
      const action = { type: actions.CLEAN_VERSES_RELATED };
      dispatch(action);
    }
  } catch (error) {
    console.error(error);
  }
};
