import * as actions from "../actionTypes";
export default (cards = [], action) => {
  switch (action.type) {
    case actions.ADD_CARD:
      return [...cards, action.payload];


    case actions.DELETE_CARD:
      return cards.filter((card) => card.id !== action.payload);

    default:
      return cards;
  }
};
