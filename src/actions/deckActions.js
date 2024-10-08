import * as actions from "../actionTypes";
import * as api from "../api/api.js";
//import { cards, setCards, decks, setDecks } from "../data.js";
import { v4 } from "uuid";

// export const addCardOnDeck =
//   (Deck_id, Card_id) => async (dispatch, getState) => {
//     //async(dispatch) comes from redux-thunk
//     // try {
//     //   // const { data } = await api.createCard(Card);
//     //   const data = { Card_id, Deck_id };
//     //   setDecks(
//     //     decks.map((deck) =>
//     //       deck.id === Deck_id
//     //         ? { ...deck, cards: [...deck.cards, Card_id] }
//     //         : deck
//     //     )
//     //   );
//     //   const action = { type: actions.ADD_CARD_ON_DECK, payload: data };
//     //   dispatch(action);
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

// export const deleteCardFromDeck = (Deck_id, Card_id) => async (dispatch) => {
//   // try {
//   //   // await api.deleteCard(Card_id);
//   //   const data = { Deck_id, Card_id };
//   //   setDecks(
//   //     decks.map((deck) =>
//   //       deck.id === Deck_id
//   //         ? {
//   //             ...deck,
//   //             cards: deck.cards.filter((card) => card.id !== Card_id),
//   //           }
//   //         : deck
//   //     )
//   //   );
//   //   const action = { type: actions.DELETE_CARD_FROM_DECK, payload: data };
//   //   dispatch(action);
//   // } catch (error) {
//   //   console.log(error);
//   // }
// };
export const createDeck = (deck) => async (dispatch, getState) => {
  //async(dispatch) comes from redux-thunk
  try {
    // const data = { name: deck, id: v4() };

   //console.log(deck);
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


// export const addVerseToCreatedCardOnDeck =
//   (Verse, Deck) => async (dispatch, getState) => {
    // try {
    //   const card_id = v4();
    //   const Card = { id: card_id, resources: [Verse] };
    //   setCards([...cards, Card]);
    //   setDecks(
    //     decks.map((deck) =>
    //       deck.id === Deck.id
    //         ? { ...deck, cards: [...deck.cards, Card.id] }
    //         : deck
    //     )
    //   );

    //   const actionCard = { type: actions.CREATE_CARD, payload: Card };
    //   dispatch(actionCard);
    //   const data = { Card_id: Card.id, Deck_id: Deck.id };
    //   const actionDeck = { type: actions.ADD_CARD_ON_DECK, payload: data };
    //   dispatch(actionDeck);
    // } catch (error) {
    //   console.log(error);
    // }
  //};
