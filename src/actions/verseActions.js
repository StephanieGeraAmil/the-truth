import * as actions from '../actionTypes'
import * as api from '../api/api.js';

export const createVerse=(verse)=>async(dispatch,getState)=>{
    try {
        const {data} =await api.createVerse(verse);
        const action={type:actions.CREATE_VERSE, payload:data};
        dispatch(action);     
    } catch (error) {
        console.log(error);
    }
}

export const getVersesRelated=(thought) => async(dispatch)=>{ 
    try{
        const data=[JSON.parse(localStorage.getItem( thought))];
        const action={type: actions.GET_VERSES_RELATED, payload:data};
         dispatch(action);
    }catch(error){ console.error(error);}    
}


// export const getVersesOfCard = (card)=>async(dispatch,getState)=>{
//     try { 
//         const {data}= await api.fetchVersesOfCard(card);  
//         const action={type:actions.GET_VERSES_OF_CARD, payload:data};
//         dispatch(action);
//     } catch (error) {
//         console.log(error);
//     }  
// }


export const addVerseToCard = (verse,card_id)=>async(dispatch,getState)=>{
    try {
        const  response= await api.addVerseToCard(verse,card_id);
        const action={type:actions.ADD_CARD_VERSE, payload:response.data};
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
  