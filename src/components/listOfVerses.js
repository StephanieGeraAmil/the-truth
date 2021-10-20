import React from 'react'
import { Verse } from './verse'

export const ListOfVerses = () => {
    const verse1={location:"",id:"1", verse:"Now to Him who is able to do far more abundantly beyond all that we ask or think, according to the power that works within us"}

   const verse2= {location:"",id:"2", verse:"Now to Him who is able to do far more abundantly beyond all that we ask or think, according to the power that works within us"}
    const verse3={location:"",id:"3", verse:"Now to Him who is able to do far more abundantly beyond all that we ask or think, according to the power that works within us"}
     const verse4={location:"",id:"4", verse:"Now to Him who is able to do far more abundantly beyond all that we ask or think, according to the power that works within us"}
    const arrayOfVerses=[verse1,verse2,verse3,verse4]
    return (
        <div className="list">
            {arrayOfVerses.map((element,index)=>
                <Verse verse={element} key={index}/>
               
           
               )}
           
           
            
        </div>
    )
}
