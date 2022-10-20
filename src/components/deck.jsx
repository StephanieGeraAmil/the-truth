import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { addCardToDeck } from "../actions/cardActions";
import Plus from "../assets/plus.svg";
export const Deck = () => {
  const dispatch = useDispatch();
    const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
    const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
   const { id } = useParams();
  const [deck,SetDeck]=useState(decks.find(element=>element.id==id));

    
  //  useEffect(() => {
    
  

  // }, []);

  return (
    <div className='deck'>

       <h1 className="section_title">{deck.name}</h1>
    <div className="card">
        <p>
           {deck.name}
        </p>
    </div>
       <button className="page_button" onClick={()=> dispatch(addCardToDeck(deck))}>
        <img src={Plus} alt="add_to_deck" />
      </button>
    </div>
  )
}
