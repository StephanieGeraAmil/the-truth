import React,{useState,useEffect} from 'react'
import { Verse } from './verse'
import axios from 'axios'

export const ListOfVerses = () => {


    const [arrayOfVerses,setArrayOfVerses]=useState([])
    useEffect(() => {
    const getVerses= async()=>{ 
            try{

                var options = {
                    method: 'GET',
                    url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/faith',
                    headers: {
                        'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                        'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
                    }
                 };
               
                const result=await axios.request(options)
               
                const verses=await result.data.results;

                
                setArrayOfVerses(verses);

            
            }catch(error){ console.error(error);}    
        }
        getVerses();
     
     },[]);

    return (
        <div className="list">
          
            {arrayOfVerses.slice(0, 3).map((element,index)=> (<Verse verse={element} key={index}/>))}
         
           
            
        </div>
    )
}
