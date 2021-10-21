import React,{useState,useEffect} from 'react'
import { Verse } from './verse'
import axios from 'axios'

export const ListOfVerses = () => {


    const [arrayOfVerses,setArrayOfVerses]=useState([])
    useEffect(() => {
    const getVerses= async()=>{ 
            try{
                const options = {
                method: 'GET',
                url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/Faith',
                headers: {
                    'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
                    }
                };
                console.log("getting verses");
                const result=await axios.request(options)
               
                const verses=result.data.results;
                 console.log(verses);
                setArrayOfVerses([...arrayOfVerses,verses]);
            
            }catch(error){ console.error(error);}    
        }
        getVerses();
        
       // console.log(arrayOfVerses);
      
        arrayOfVerses.map((element)=> (console.log(element)));
       
     },[]);

    return (
        <div className="list">
          
            {arrayOfVerses[0].slice(0, 3).map((element,index)=> (<Verse verse={element} key={index}/>))}
         
           
            
        </div>
    )
}
