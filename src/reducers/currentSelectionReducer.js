import * as actions from '../actionTypes'
export default (selected={hint: null, form:null}, action)=>{
    switch(action.type){
        case  actions.SELECTED_HINT:
        return {...selected,hint: action.payload};
         
        case  actions.UNSELECTED_HINT:
        return {...selected,hint: null};

        case  actions.SETTING_FORM_FOR_NEW_DECK:
        return {...selected,form: "New Deck"};
        
        case  actions.SETTING_FORM_FOR_NEW_CARD:
        return {...selected,form: "New Card"};
       
        case  actions.SETTING_FORM_FOR_EDIT_DECK:
        return {...selected,form: "Edit Deck"};
        
        case  actions.SETTING_FORM_FOR_EDIT_CARD:
        return {...selected,form: "Edit Card"};
        
        case  actions.CLEAR_FORM_PURPOSE:
        return {...selected,form: null};

        default:
        return selected;
    }


}