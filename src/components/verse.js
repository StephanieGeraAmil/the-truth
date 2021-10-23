import React,{useEffect} from 'react'

export const Verse = ({verse}) => {
    useEffect(() => {
     },[]);
    return (
        <div className='card-verse'>
            <label>{verse.text}</label>
           
            <label><b>{verse.scriptures[0]}</b></label>
        </div>
    )
}
