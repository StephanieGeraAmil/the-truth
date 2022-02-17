import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators
export const getVerses = ()=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchVerses();
        const action={type:actions.FETCH_ALL_VERSES, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const createVerse=(jar)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createVerse(jar);
        const action={type:actions.CREATE_VERSE, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateVerse=(updatedVerse)=>async(dispatch)=>{
    try {
        await api.updateVerse(updatedVerse);
        const action={type:actions.UPDATE_VERSE, payload:updatedVerse};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteVerse=(verse_id)=>async(dispatch)=>{
    try {
    
        await api.deleteVerse(verse_id);
        const action={type: actions.DELETE_VERSE,payload:verse_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
