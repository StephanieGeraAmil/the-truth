import * as actions from "../actionTypes";
import * as api from "../api/api.js";
import { cards } from "../data.js";
import { v4 } from "uuid";

export const createCard = (card) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    // const { data } = await api.createCard(Card);
    const data = card;
    const action = { type: actions.CREATE_CARD, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCard = (Card_id) => async (dispatch) => {
  try {
    // await api.deleteCard(Card_id);
    const action = { type: actions.DELETE_CARD, payload: Card_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const getCardsOfDeck = (deck) => async (dispatch, getState) => {
  try {
    // const {data}= await api.fetchCardsOfDeck(deck)
    const data =
      (deck.cards && deck.cards.length > 0)
        ? cards.filter((card) => deck.cards.indexOf(card.id) > -1)
        : [];

    const action = { type: actions.GET_CARDS_OF_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};