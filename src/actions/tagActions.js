import * as actions from '../actionTypes'
import * as api from '../api/api.js';

//action creators


export const createTag=(tag)=>async(dispatch,getState)=>{
    try {

        const {data} =await api.createTag(tag);
        const action={type:actions.CREATE_TAG, payload:data};
        dispatch(action);

        
    } catch (error) {
        console.log(error);
    }
}
export const updateTag=(updatedTag)=>async(dispatch)=>{
    try {
        await api.updateTag(updatedTag);
        const action={type:actions.UPDATE_TAG, payload:updatedTag};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }
}
export const deleteTag=(tag_id)=>async(dispatch)=>{
    try {
    
        await api.deleteTag(tag_id);
        const action={type: actions.DELETE_TAG,payload:tag_id};
        dispatch(action);
        
    } catch (error) {
        console.log(error);
    }

    
}

export const getAllTags=() => async(dispatch)=>{ 
    try{
        const {data}=await api.fetchAllTags();
     
        const action={type: actions.GET_ALL_TAGS, payload:data};
        dispatch(action);

    }catch(error){ console.error(error);}    
}


