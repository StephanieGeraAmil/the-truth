import * as actions from "../actionTypes";
export const verseSelected = (currentSelection) => (dispatch) => {
  try {
    const action = { type: actions.SELECTED_VERSE, payload: currentSelection };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const clearVerseSelected = () => (dispatch) => {
  try {
    const action = { type: actions.UNSELECTED_VERSE };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const settingFormPurpose = (form) => (dispatch) => {
  try {
    const action = { type: actions.SET_FORM_PURPOSE, payload: form };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};

export const clearFormPurpose = () => (dispatch) => {
  try {
    const action = { type: actions.CLEAR_FORM_PURPOSE };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
