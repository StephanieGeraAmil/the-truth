import * as actions from "../actionTypes";
export const hintSelected = (currentSelection) => (dispatch) => {
  try {
    const action = { type: actions.SELECTED_HINT, payload: currentSelection };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const clearHintSelected = () => (dispatch) => {
  try {
    const action = { type: actions.UNSELECTED_HINT };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const settingFormPurposeToAddDeck = () => (dispatch) => {
  try {
    const action = { type: actions.SETTING_FORM_FOR_NEW_DECK };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const settingFormPurposeToEditDeck = () => (dispatch) => {
  try {
    const action = { type: actions.SETTING_FORM_FOR_EDIT_DECK };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const settingFormPurposeToAddCard = () => (dispatch) => {
  try {
    const action = { type: actions.SETTING_FORM_FOR_NEW_CARD };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const settingFormPurposeToEditCard = () => (dispatch) => {
  try {
    const action = { type: actions.SETTING_FORM_FOR_EDIT_CARD };
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
