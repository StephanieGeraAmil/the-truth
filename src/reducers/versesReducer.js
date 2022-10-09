import * as actions from "../actionTypes";
export default (verses = [], action) => {
  switch (action.type) {
    case actions.CREATE_VERSE:
      return [...verses, action.payload];

    case actions.UPDATE_VERSE:
      return verses.map((verse) =>
        verse._id === action.payload._id ? action.payload : verse
      );

    case actions.DELETE_VERSE:
      return verses.filter((verse) => verse._id !== action.payload);

    case actions.GET_TAGS_OF_VERSE:
      return action.payload;
    default:
      return verses;
  }
};
