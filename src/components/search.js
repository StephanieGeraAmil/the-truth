import React,{useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {getVersesQuotesFromTopicService } from '../actions/verseQuoteActions.js'

export const Search = () => {
    const [searchField, setSearchField]=useState("")
    //GiNotebook
    //BsBookFill
    //FiBook
    const dispatch= useDispatch();
    const search=()=>{
        console.log('insideSearchMethod')
        dispatch(getVersesQuotesFromTopicService(searchField));

    }
    return (
        <div className="search_bar">
             <input  type="text"
                      required
                      className="search_param"
                      value={searchField}
                      onChange={(e)=>setSearchField(e.target.value)}
                      />
            <button className="search_button"  onClick={()=>search()}></button>
        </div>
    )
}
