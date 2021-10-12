import React from 'react'
import { ListOfVerses } from './listOfVerses'


export const Box = () => {
    return (
        <div className='box'>
            <div className='frame'>
                    
                       <img src="/Box.svg"  className="frame-img" alt="bible-img" />
                      
                        <div className='back'></div> 
                </div>  
            <ListOfVerses/>
               
        </div>
    )
}
