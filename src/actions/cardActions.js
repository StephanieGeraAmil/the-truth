import * as actions from '../actionTypes'
import * as api from '../api/api.js';
//action creators
export const getCards = ()=>async(dispatch,getState)=>{
    try {
        
        const {data}= await api.fetchCards();
        const action={type:actions.FETCH_ALL_CARDS, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}
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

//  case actions.GET_VERSES_OF_CARD:

//     case actions.ADD_CARD_VERSE:

//     case actions.DELETE_CARD_VERSE:
