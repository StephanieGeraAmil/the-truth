import * as actions from "../actionTypes";
export const thoughtSelected = (thought) => (dispatch) => {
  try {
    const action = { type: actions.SELECTED_THOUGHT, payload: thought };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
export const clearThoughtSelected = () => (dispatch) => {
  try {
    const action = { type: actions.UNSELECTED_THOUGHT };
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
