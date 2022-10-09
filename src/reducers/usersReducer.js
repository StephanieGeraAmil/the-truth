import * as actions from '../actionTypes'
export default (users=[], action)=>{
    switch(action.type){
        case actions.CREATE_USER:
        return  [...users, action.payload];
        
        case actions.UPDATE_USER:
        return users.map((users)=>users._id===action.payload._id? action.payload: users);

        case actions.DELETE_USER:
        return users.filter((users)=>users._id!==action.payload);

        case actions.FETCH_ALL_USERS:
        return action.payload;
        
        default:
        return users;
    }


}