import * as actions from "../actionTypes";
import * as api from "../api/api.js";

export const getUserByEmail = (user) => async (dispatch, getState) => {
  try {
    const { data } = await api.fetchUserByEmail(user);
      const action = { type: actions.FETCH_USER_BY_EMAIL, payload: data };
      dispatch(action);
   
  } catch (error) {
    try{
      const { data } = await api.createUser(user);
      const action = { type: actions.CREATE_USER, payload: data };
      dispatch(action);

    }catch(e){
      console.log(e);
    }
    console.log(error);
  }
};

export const unSetUser = () => async (dispatch) => {
  try {
    const action = { type: actions.UNSET_USER };
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
};
