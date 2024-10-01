import * as actions from "../actionTypes";
export default (decks = [], action) => {
  switch (action.type) {
    case actions.CREATE_DECK:
      return [...decks, action.payload];

    case actions.UPDATE_DECK:
      return decks.map((deck) =>
        deck._id === action.payload.id ? action.payload : deck
      );

    case actions.DELETE_DECK:
      return decks.filter((deck) => deck.id !== action.payload);

    case actions.GET_DECKS_OF_USER:
      return action.payload;
      
    // case actions.ADD_CARD_ON_DECK:
    //   return decks.map((deck) =>
    //     deck.id === action.payload.Deck_id
    //       ? { ...deck, cards: [...deck.cards, action.payload.Card_id] }
    //       : deck
    //   );
    // case actions.DELETE_CARD_FROM_DECK:
    //   return decks.map((deck) =>
    //      deck.id === action.payload.Deck_id
    //       ? {
    //           ...deck,
    //           cards: deck.cards.filter(
    //             (card) => card !== action.payload.Card_id
    //           )
    //         }
    //       : deck
    //   );

    default:
      return decks;
  }
};
