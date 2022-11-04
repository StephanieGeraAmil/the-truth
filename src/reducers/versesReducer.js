import * as actions from "../actionTypes";
export default (verses = [], action) => {
  switch (action.type) {
    case actions.CREATE_VERSE:
      return [...verses, action.payload];

    case actions.UPDATE_VERSE:
      return verses.map((verse) =>
        verse._id === action.payload.id ? action.payload : verse
      );

    case actions.DELETE_VERSE:
      return verses.filter((verse) => verse.id !== action.payload);

    case actions.GET_VERSES_OF_TAG:
      return action.payload;

    case actions.GET_VERSES_OF_CARD:
      return action.payload;
    case actions.ADD_CARD_VERSE:
        return  [...verses, action.payload];
    case actions.DELETE_CARD_VERSE:
       return verses.filter((verse)=>verse.id!==action.payload);
    default:
      return verses;
  }
};
