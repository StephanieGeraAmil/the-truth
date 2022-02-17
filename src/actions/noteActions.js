import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators
export const getNotes = ()=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchNotes();
        const action={type:actions.FETCH_ALL_NOTES, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const createNote=(jar)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createNote(jar);
        const action={type:actions.CREATE_NOTE, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateNote=(updatedNote)=>async(dispatch)=>{
    try {
        await api.updateNote(updatedNote);
        const action={type:actions.UPDATE_NOTE, payload:updatedNote};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteNote=(note_id)=>async(dispatch)=>{
    try {
    
        await api.deleteNote(note_id);
        const action={type: actions.DELETE_NOTE,payload:note_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
