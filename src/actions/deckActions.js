import * as actions from "../actionTypes";
import * as api from "../api/api.js";
import { v4 } from "uuid";

export const createDeck = (deck) => async (dispatch, getState) => {
  try {
    const {data} =await api.createDeck(deck);
    const action = { type: actions.CREATE_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateDeck = (updatedDeck) => async (dispatch) => {
  try {
  
   const {data}= await api.updateDeck(updatedDeck.id, updatedDeck);
    const action = { type: actions.UPDATE_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteDeck = (deck_id) => async (dispatch) => {
  try {
    await api.deleteDeck(deck_id);
    const action = { type: actions.DELETE_DECK, payload: deck_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const getDecksOfUser = (user) => async (dispatch, getState) => {
  try {
    // Fetch decks based on the user's email
    const { data } = await api.fetchDecksByUserEmail(user);

    // Check if data is not empty
    if (data && data.length > 0) {
      // Dispatch action to get decks of the user
      const action = { type: actions.GET_DECKS_OF_USER, payload: data };
      dispatch(action);

      // Loop through each deck
      data.forEach((deck) => {
        // Loop through each card in the deck
        deck.cards.forEach((card) => {
          // Ensure card data is not empty before dispatching
     
            const cardAction = { type: actions.ADD_CARD, payload: card };
            dispatch(cardAction);
            if (card.verse) {
              const verseAction = { type: actions.ADD_VERSE, payload: card.verse };
              dispatch(verseAction);
            }
            if (card.note) {
              const noteAction = { type: actions.ADD_NOTE, payload: card.note };
              dispatch(noteAction);
            }    
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};


