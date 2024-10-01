import * as actions from "../actionTypes";
export default (thoughts = [], action) => {
  switch (action.type) {
    // case actions.CREATE_TAG:
    //   return [...tag, action.payload];

    // case actions.UPDATE_TAG:
    //   return tag.map((tag) =>
    //     tag._id === action.payload._id ? action.payload : tag
    //   );

    // case actions.DELETE_TAG:
    //   return tag.filter((tag) => tag._id !== action.payload);

      //  case actions.GET_ALL_THOUGHTS:
      // return action.payload;


    default:
      return thoughts;
  }
};

