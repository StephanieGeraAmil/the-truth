import * as actions from "../actionTypes";
export default (selected = { verse: null, form: null }, action) => {
  switch (action.type) {
    case actions.SELECTED_VERSE:
      return { ...selected, verse: action.payload };

    case actions.UNSELECTED_VERSE:
      return { ...selected, verse: null };

    case actions.SET_FORM_PURPOSE:
      return { ...selected, form: action.payload };

    case actions.CLEAR_FORM_PURPOSE:
      return { ...selected, form: null };

    default:
      return selected;
  }
};
