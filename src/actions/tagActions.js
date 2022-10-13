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
// export const getVersesWithTag=(tag_id) => async(dispatch)=>{ 
//     try{
//         const {data}=await api.fetchVersesOfTag(tag_id);
//         const action={type: actions.GET_VERSES_OF_TAG, payload:data};
//         dispatch(action);

//     }catch(error){ console.error(error);}    
// }

export const getTagsOfVerse=(verse_id) => async(dispatch)=>{ 
    try{
        const {data}=await api.fetchTagsOfVerse(verse_id);
         console.log(data);
        const action={type: actions.GET_TAGS_OF_VERSE, payload:data};
        dispatch(action);

    }catch(error){ console.error(error);}    
}

export const addTagToVerse=(tag_id, verse_id) => async(dispatch)=>{ 
    try{
        const {data}=await api.addTagToVerse( verse_id,tag_id);
        const action={type: actions.ADD_TAG_VERSE, payload:data};
        dispatch(action);

    }catch(error){ console.error(error);}    
}
export const removeTagFromVerse=(tag_id, verse_id) => async(dispatch)=>{ 
    try{
        const {data}=await api.removeTagFromVerse(verse_id,tag_id);
        const action={type: actions.DELETE_TAG_VERSE, payload:data};
        dispatch(action);

    }catch(error){ console.error(error);}    
}


