import * as actions from '../actionTypes'
export default (note={}, action)=>{
    switch(action.type){

         case actions.GET_NOTES_OF_CARD:
      return action.payload;
    case actions.ADD_CARD_NOTE:
      return   action.payload;
    case actions.DELETE_CARD_NOTE:
     return {};
        
        default:
        return note;
    }


}