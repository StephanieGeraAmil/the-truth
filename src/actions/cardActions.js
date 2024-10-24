import * as actions from "../actionTypes";
import * as api from "../api/api.js";
import { v4 } from "uuid";

export const addCard = (card) => async (dispatch, getState) => {
  try {
     const { data } = await api.createCard(card);
 
    const action = { type: actions.ADD_CARD, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteCard = (card_id) => async (dispatch) => {
  try {
    await api.deleteCard(card_id);
    const action = { type: actions.DELETE_CARD, payload: card_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
