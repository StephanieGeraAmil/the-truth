import * as actions from "../actionTypes";
export default (verses = [], action) => {
  switch (action.type) {
    case actions.GET_VERSES_RELATED:
      return action.payload;
      case actions.CLEAN_VERSES_RELATED:
      return [];

    default:
      return verses;
  }
};
