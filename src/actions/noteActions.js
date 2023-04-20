import * as actions from '../actionTypes'
import * as api from '../api/api.js';


export const createNote=(note)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {
        const {data} =await api.createNote(note);
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



// export const getNotesOfCard = (card)=>async(dispatch,getState)=>{
//     try { 

//         const {data}= await api.fetchNotesOfCard(card);

//         const action={type:actions.GET_NOTES_OF_CARD, payload:data};
//         dispatch(action);
//     } catch (error) {
//         console.log(error);
//     }
   
// }
export const addNoteToCard = (note,card)=>async(dispatch,getState)=>{
    try {
      
        const noteAdded=await api.addNoteToCard(note,card);
        const action={type:actions.ADD_CARD_NOTE, payload:noteAdded.data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
export const deleteNoteFromCard = (note,card)=>async(dispatch,getState)=>{
    try { 
        const {data}= await api.removeNoteFromCard(note,card);
        const action={type:actions.DELETE_CARD_NOTE, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}
