import * as actions from '../actionTypes'
export default (decks=[], action)=>{
    switch(action.type){
        case actions.CREATE_DECK:
        return  [...decks, action.payload];
        
        case actions.UPDATE_DECK:
        return decks.map((deck)=>deck._id===action.payload._id? action.payload: deck);

        case actions.DELETE_DECK:
        return decks.filter((deck)=>deck._id!==action.payload);

        case actions.FETCH_ALL_DECKS:
        return action.payload;
        
        default:
        return decks;
    }


}