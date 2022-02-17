import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators
export const getDecks = ()=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchDecks();
        const action={type:actions.FETCH_ALL_DECKS, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const createDeck=(jar)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createDeck(jar);
        const action={type:actions.CREATE_DECK, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateDeck=(updatedDeck)=>async(dispatch)=>{
    try {
        await api.updateDeck(updatedDeck);
        const action={type:actions.UPDATE_DECK, payload:updatedDeck};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteDeck=(deck_id)=>async(dispatch)=>{
    try {
    
        await api.deleteDeck(deck_id);
        const action={type: actions.DELETE_DECK,payload:deck_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
