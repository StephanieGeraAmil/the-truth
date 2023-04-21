import * as actions from "../actionTypes";
import * as api from "../api/api.js";
import { decks,setDecks } from "../data.js";
import { v4 } from "uuid";

export const createCardOnDeck = (Deck_id,Card_id) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    // const { data } = await api.createCard(Card);
    const data = { Card_id, Deck_id };
     setDecks(decks.map((deck) =>
        deck.id === Deck_id
          ? { ...deck, cards: [...deck.cards, Card_id] }
          : deck
      ));
    const action = { type: actions.CREATE_CARD_ON_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCardFromDeck = (Deck_id, Card_id) => async (dispatch) => {
  try {

    // await api.deleteCard(Card_id);
    const data = { Deck_id, Card_id };
     setDecks(decks.map((deck) =>
        deck.id === Deck_id
          ? {
              ...deck,
              cards: deck.cards.filter(
                (card) => card.id !== Card_id
              ),
            }
          : deck
      ));
    const action = { type: actions.DELETE_CARD_FROM_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const createDeck = (deck) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    const data = { name: deck, id: v4() , cards:[]};

    
    setDecks( [...decks,data]);
    // const {data} =await api.createDeck(deck);
    const action = { type: actions.CREATE_DECK, payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const updateDeck = (updatedDeck) => async (dispatch) => {
  try {
    // await api.updateDeck(updatedDeck);
    const action = { type: actions.UPDATE_DECK, payload: updatedDeck };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const deleteDeck = (deck_id) => async (dispatch) => {
  try {
    // await api.deleteDeck(deck_id);
      setDecks(decks.filter((deck) => deck.id !== deck_id));
    const action = { type: actions.DELETE_DECK, payload: deck_id };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const getDecksOfUser = (user) => async (dispatch, getState) => {
  try {
    // const {data}= await api.fetchDecksOfUser(user);
    const data = decks;
    if (data != "") {
      const action = { type: actions.GET_DECKS_OF_USER, payload: data };
      dispatch(action);
    }
  } catch (error) {
    console.log(error);
  }
};
