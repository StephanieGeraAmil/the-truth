import * as actions from "../actionTypes";
export default (user = null, action) => {
  switch (action.type) {
    case actions.CREATE_USER:
      return action.payload;

    case actions.FETCH_USER_BY_EMAIL:
      return action.payload;

      case action.UNSET_USER:
        return null;
    default:
      return user;
  }
};
