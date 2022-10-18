import * as actions from "../actionTypes";
export default (user = null, action) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return action.payload;

    case actions.UPDATE_USER:
      return action.payload;

    case actions.DELETE_USER:
      return null;

    case actions.FETCH_USER_BY_ID:
      return action.payload;

    case actions.FETCH_USER_BY_EMAIL:
      return action.payload;
    default:
      return user;
  }
};
