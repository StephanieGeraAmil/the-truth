import * as actions from "../actionTypes";
export default (cards = [], action) => {
  switch (action.type) {
    case actions.CREATE_CARD:
      return [...cards, action.payload];

    case actions.UPDATE_CARD:
      return cards.map((card) =>
        card._id === action.payload._id ? action.payload : card
      );

    case actions.DELETE_CARD:
      return cards.filter((card) => card._id !== action.payload);

    case actions.GET_VERSES_OF_CARD:
      return action.payload;
    case actions.ADD_CARD_VERSE:
      return action.payload;
    case actions.DELETE_CARD_VERSE:
      return action.payload;

    default:
      return cards;
  }
};

// router.get('/verse_card/:id', cardsController.get_verses_of_card);
// router.patch('/verse_card/:id', cardsController.add_card_verse);
// router.delete('/verse_card/:id', cardsController.delete_card_verse);
