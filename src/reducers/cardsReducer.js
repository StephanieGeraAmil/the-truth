import * as actions from "../actionTypes";
export default (cards = [], action) => {
  switch (action.type) {
    case actions.ADD_CARD:
      return [...cards, action.payload];

    // case actions.UPDATE_CARD:
    //   return cards.map((card) =>
    //     card._id === action.payload.id ? action.payload : card
    //   );

    case actions.DELETE_CARD:
      return cards.filter((card) => card.id !== action.payload);

    //  case actions.GET_CARDS_OF_DECK:
    //   return action.payload;
    // case actions.GET_CARDS_OF_USER:
    //   return action.payload;
    // case actions.ADD_RESOURCE_TO_CARD:
    //   return cards.map((card) =>
    //     card.id === action.payload.Card_id
    //       ? { ...card, resources: [...card.resources, action.payload.Resource] }
    //       : card
    //   );
    // case actions.DELETE_RESOURCE_FROM_CARD:
    //   return cards.map((card) =>
    //     card.id === action.payload.Card_id
    //       ? {
    //           ...card,
    //           resources: card.resources.filter(
    //             (resource) => resource.id !== action.payload.Resource_id
    //           ),
    //         }
    //       : card
    //   );
    default:
      return cards;
  }
};
