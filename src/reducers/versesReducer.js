import * as actions from "../actionTypes";
export default (verses = [], action) => {
  switch (action.type) {
    // case actions.GET_VERSES_RELATED:
    //   return action.payload;
    //   case actions.CLEAN_VERSES_RELATED:
    //   return [];

    case actions.ADD_VERSE:
      return [...verses, action.payload];

    case actions.UPDATE_VERSE:
      return verses.map((verse) =>
        verse._id === action.payload.id ? action.payload : verse
      );

    case actions.DELETE_VERSE:
      return verses.filter((verse) => verse.id !== action.payload);
    default:
      return verses;
  }
};
