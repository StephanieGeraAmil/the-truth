import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators

export const createDeck=(deck)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
    try {

        const {data} =await api.createDeck(deck);
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

export const getDecksOfUser = (user)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchDecksOfUser(user);
        if (data!=""){
        const action={type:actions.GET_DECKS_OF_USER, payload:data};
        dispatch(action);
        }


    } catch (error) {
        console.log(error);
    }
   
}
export const getCardsOfDeck = (deck)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchCardsOfDeck(deck);
        const action={type:actions.GET_CARDS_OF_DECK, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const addCardToDeck = (deck,card)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.addCardToDeck(card,deck);
        const action={type:actions.ADD_CARD_DECK, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
export const deleteCardFromDeck = (deck,card)=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.removeCardFromDeck(card,deck);
        const action={type:actions.DELETE_CARD_DECK, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}




