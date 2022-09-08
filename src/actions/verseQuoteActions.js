import * as actions from '../actionTypes'
import * as api from '../api/api.js';

import axios from 'axios'
//action creators

var _this = this;

export const getVersesQuotes = ()=>async(dispatch,getState)=>{

    try {
        
        const {data}= await api.fetchVersesQuotes();
        const action={type:actions.FETCH_ALL_VERSES_QUOTES, payload:data};
        dispatch(action);


    } catch (error) {
        console.log(error);
    }
   
}

export const createVerseQuote=(verse)=>async(dispatch,getState)=>{
      
    //async(dispatch) comes from redux-thunk
    try {
        

        const {data} =await api.createVerseQuote(verse);
        const action={type:actions.CREATE_VERSE_QUOTE, payload:data};
     
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateVerseQuote=(updatedVerseQuote)=>async(dispatch)=>{
    try {
        await api.updateVerseQuote(updatedVerseQuote);
        const action={type:actions.UPDATE_VERSE_QUOTE, payload:updatedVerseQuote};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteVerseQuote=(verse_quote_id)=>async(dispatch)=>{
    try {
    
        await api.deleteVerseQuote(verse_quote_id);
        const action={type: actions.DELETE_VERSE_QUOTE,payload:verse_quote_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}


export const getVersesQuotesFromTopicService=(topic) => async()=>{ 
     
    try{

        console.log("in the action")
        var options = {
            method: 'GET',
            url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/'+topic,
            headers: {
                'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
            }
            };
        
        const result=await axios.request(options)   
        const verseQuotes=await result.data.results;
       console.log(verseQuotes);
        verseQuotes.map(verseQ => {
           createVerseQuote(verseQ)});

    
        

    
    }catch(error){ console.error(error);}    
}

