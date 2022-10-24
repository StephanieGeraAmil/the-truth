import React ,{useState}from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDeck } from "../actions/deckActions";

export const NewDeck = () => {
   const dispatch = useDispatch();
     const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);
 
     const [deckName,setDeckName]=useState("");
  return (
   <div className='form'>
        <input className='from-input' type="text" placeholder='Add the deck title here' onChange={(e)=>setDeckName(e.target.value)}value={deckName}>
        </input>
        <Link to={`/decks/`} onClick={()=> dispatch(createDeck({name:deckName, UserId:userLogged.id}))}>Save</Link>

      
    </div>
  )
}
