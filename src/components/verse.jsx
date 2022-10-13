import React,{useEffect} from 'react'


export const Verse = ({verse}) => {
    useEffect(() => {
     },[]);
    return (
        <div className='verse'>
             <p>{verse.scripture}</p>
              <p className="ref">{verse.book.charAt(0).toUpperCase() + verse.book.slice(1)+" "+verse.chapter+":"+verse.verse_number }</p>
        </div>
    )
}
