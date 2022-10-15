import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators
export const getUserById = (user)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchUserById(user);
        const action={type:actions.FETCH_USER_BY_ID, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const createUser=(User)=>async(dispatch,getState)=>{

    try {

        const {data} =await api.createUser(User);
        const action={type:actions.CREATE_USER, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateUser=(updatedUser)=>async(dispatch)=>{
    try {
        await api.updateUser(updatedUser);
        const action={type:actions.UPDATE_USER, payload:updatedUser};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteUser=(User_id)=>async(dispatch)=>{
    try {
    
        await api.deleteUser(User_id);
        const action={type: actions.DELETE_USER,payload:User_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
