import React,{useEffect} from 'react'


export const Verse = ({verse}) => {
    useEffect(() => {
     },[]);
    return (
        <div className='verse'>
            <p>{verse.verse}</p>
            <p className="ref">{verse.ref.charAt(0).toUpperCase() + verse.ref.slice(1)}</p>
        </div>
    )
}
