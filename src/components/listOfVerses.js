import React from 'react'
import { Verse } from './verse'
import {useSelector} from 'react-redux'



export const ListOfVerses = () => { 
    const verses=useSelector(state=> state.verses_quotes); 
    return (
        <div className="list">    
            {verses.map((element,index)=> (<Verse verse={element} key={index}/>))}   
        </div>
    )
}
