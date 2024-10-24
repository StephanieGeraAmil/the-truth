import * as actions from "../actionTypes";
export default (verses = [], action) => {
  switch (action.type) {
    case actions.ADD_VERSE:
      return [...verses, action.payload];

    case actions.UPDATE_VERSE:
      return verses.map((verse) =>
        verse.id === action.payload.id ? action.payload : verse
      );

    case actions.DELETE_VERSE:
      return verses.filter((verse) => verse.id !== action.payload);
    default:
      return verses;
  }
};
