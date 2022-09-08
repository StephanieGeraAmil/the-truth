import * as actions from '../actionTypes'
export default (verses_quotes=[], action)=>{
    switch(action.type){
        case actions.CREATE_VERSE_QUOTE:
        return  [...verses_quotes, action.payload];
        
        case actions.UPDATE_VERSE_QUOTE:
        return verses_quotes.map((verse)=>verse._id===action.payload._id? action.payload: verse);

        case actions.DELETE_VERSE_QUOTE:
        return verses_quotes.filter((verse)=>verse._id!==action.payload);

        case actions.FETCH_ALL_VERSES_QUOTES:
        return action.payload;
        
        default:
        return verses_quotes;
    }


}