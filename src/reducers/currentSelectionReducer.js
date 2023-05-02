import * as actions from "../actionTypes";
export default (selected = { thought: null, form: null }, action) => {
  switch (action.type) {
    case actions.SELECTED_THOUGHT:
      return { ...selected, thought: action.payload };

    case actions.UNSELECTED_THOUGHT:
      return { ...selected, thought: null };

    case actions.SET_FORM_PURPOSE:
      return { ...selected, form: action.payload };

    case actions.CLEAR_FORM_PURPOSE:
      return { ...selected, form: null };

    default:
      return selected;
  }
};
