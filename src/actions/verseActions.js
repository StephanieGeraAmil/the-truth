import * as actions from '../actionTypes'
import * as api from '../api/api.js';
import axios from 'axios'
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

export const createVerse=(verse)=>async(dispatch,getState)=>{
    //async(dispatch) comes from redux-thunk
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


export const getVersesFromTopicService=(topic) => async()=>{ 
    try{

        var options = {
            method: 'GET',
            url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/'+topic,
            headers: {
                'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
            }
            };
        
        const result=await axios.request(options)
        
        const verses=await result.data.results;
        

       verses.map(verse=>createVerse(verse));
        

    
    }catch(error){ console.error(error);}    
}