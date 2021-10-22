import React,{useState,useEffect} from 'react'
import { Verse } from './verse'
import axios from 'axios'

export const ListOfVerses = () => {


    const [arrayOfVerses,setArrayOfVerses]=useState([])
    useEffect(() => {
    const getVerses= async()=>{ 
            try{
                // const options = {
                // method: 'GET',
                // url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/Faith',
                // headers: {
                //     'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                //     'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
                //     }
                // };
                var options = {
                    method: 'GET',
                    url: 'https://uncovered-treasure-v1.p.rapidapi.com/topic/faith',
                    headers: {
                        'x-rapidapi-host': 'uncovered-treasure-v1.p.rapidapi.com',
                        'x-rapidapi-key': 'd47e72236dmsh90eafb4f2ff9515p170ca9jsn628460a52b39'
                    }
                 };
                console.log("getting verses");
                const result=await axios.request(options)
               
                const verses=await result.data.results;
                // const verses=[
                //                     {
                //                         "date": "Mon Jan 04 00:00:00 MST 2010",
                //                         "context": "Acts 21:13-14",
                //                         "scriptures": [
                //                             "Acts 21:13"
                //                         ],
                //                         "text": "Some loving, well-meaning Christ-followers try tight arguments and tears to dissuade a Spirit-led Christ-follower from doing what he thoroughly believes - and is yielded to do - the Spirit is leading him to do.",
                //                         "topics": [
                //                             "faith",
                //                             "discouragement",
                //                             "Spirit-led"
                //                         ],
                //                         "bookOrder": 44
                //                     },
                //                     {
                //                         "date": "Tue Jun 22 00:00:00 MDT 2010",
                //                         "context": "Ephesians 6",
                //                         "scriptures": [
                //                             "Ephesians 6:16-17"
                //                         ],
                //                         "text": "The size of one's SHIELD OF FAITH is proportionate to the (1) knowledge / assurance of his / her salvation (place in Christ) and the (2) working knowledge of Scripture (the amount of and ability to apply in life). ",
                //                         "topics": [
                //                             "God's Word",
                //                             "faith",
                //                             "knowledge"
                //                         ],
                //                         "bookOrder": 49
                //                     },
                //                     {
                //                         "date": "Fri Jun 04 00:00:00 MDT 2010",
                //                         "context": "1 Kings 13",
                //                         "scriptures": [
                //                             "1 Kings 13:1-10"
                //                         ],
                //                         "text": "A servant of God must have active confidence in God to obey in full the strange (speak to an altar) and sometimes dangerous (anger a king) words revealed to him.",
                //                         "topics": [
                //                             "hearing God",
                //                             "faith",
                //                             "obedience"
                //                         ],
                //                         "bookOrder": 11
                //                     },
                //                     {
                //                         "date": "Sun Jun 13 00:00:00 MDT 2010",
                //                         "context": "Galatians 3",
                //                         "scriptures": [
                //                             "Galatians 3:3-5"
                //                         ],
                //                         "text": "Sanctification (spiritual maturity) comes as a work of the Holy Spirit and involves the same kind of faith (believing God's Word) as does salvation.",
                //                         "topics": [
                //                             "faith",
                //                             "sanctification",
                //                             "maturity"
                //                         ],
                //                         "bookOrder": 48
                //                     }
                                    
                                   
                //                 ];
                 console.log(verses);
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
