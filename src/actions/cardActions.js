import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators

export const createCard=(Card)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createCard(Card);
        const action={type:actions.CREATE_CARD, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateCard=(updatedCard)=>async(dispatch)=>{
    try {
        await api.updateCard(updatedCard);
        const action={type:actions.UPDATE_CARD, payload:updatedCard};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteCard=(Card_id)=>async(dispatch)=>{
    try {
    
        await api.deleteCard(Card_id);
        const action={type: actions.DELETE_CARD,payload:Card_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}
export const getVersesOfCard = (card)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchVersesOfCard(card);
        const action={type:actions.GET_VERSES_OF_CARD, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const addVerseToCard = (verse,card)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await addVerseToCard(verse,card);
        const action={type:actions.ADD_CARD_VERSE, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const deleteVerseFromCard = (verse,card)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.removeVerseFromCard(verse,card);
        const action={type:actions.DELETE_CARD_VERSE, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}