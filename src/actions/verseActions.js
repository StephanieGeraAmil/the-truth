import * as actions from '../actionTypes'
import * as api from '../api/api.js';

//action creators


export const createVerse=(verse)=>async(dispatch,getState)=>{
    try {

        const {data} =await api.createVerse(verse);
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
export const getVersesWithTag=(tag_id) => async(dispatch)=>{ 
    try{
        const {data}=await api.fetchVersesOfTag(tag_id);
        const action={type: actions.GET_VERSES_OF_TAG, payload:data};
        dispatch(action);

    }catch(error){ console.error(error);}    
}


// export const getTagsOfVerse=(verse_id) => async(dispatch)=>{ 
//     try{
//         const {data}=await api.fetchTagsOfVerse(verse_id);
//          console.log(data);
//         const action={type: actions.GET_TAGS_OF_VERSE, payload:data};
//         dispatch(action);

//     }catch(error){ console.error(error);}    
// }

export const getVersesOfCard = (card)=>async(dispatch,getState)=>{
    try { 
        const {data}= await api.fetchVersesOfCard(card);
        const action={type:actions.GET_VERSES_OF_CARD, payload:data};
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
   
}


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
  
