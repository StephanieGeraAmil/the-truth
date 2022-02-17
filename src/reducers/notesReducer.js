import * as actions from '../actionTypes'
export default (notes=[], action)=>{
    switch(action.type){
        case actions.CREATE_NOTE:
        return  [...notes, action.payload];
        
        case actions.UPDATE_NOTE:
        return notes.map((note)=>note._id===action.payload._id? action.payload: note);

        case actions.DELETE_NOTE:
        return notes.filter((note)=>note._id!==action.payload);

        case actions.FETCH_ALL_NOTES:
        return action.payload;
        
        default:
        return notes;
    }


}