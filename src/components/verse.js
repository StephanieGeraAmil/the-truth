import React,{useEffect} from 'react'

export const Verse = ({verse}) => {
    useEffect(() => {
        console.log("inside verse")
        console.log(verse)
     },[]);
    return (
        <div className='card-verse'>
            <label>{verse.text}</label>
            
        </div>
    )
}
