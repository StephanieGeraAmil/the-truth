import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
export const Deck = () => {
    const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const [deck,SetDeck]=useState(decks[0]);
     const { id } = useParams();
  //  useEffect(() => {
  //  //console.log(deck.name);

  //   // deck=decks.find(element=> element.id==id)


  // }, []);

  return (
    <div className='deck'>

       <h1 className="section_title">{deck.name}</h1>
    <div className="card">
        <p>
            Aqui va el versiculo que la persona tanto quiere recordar, para que lo recuerde y memorize.
            Para que lo lea una y otra vez hasta que le quede en la cabeza y pueda recordarlo cada vez que lo necesite en su batalla espiritual.
        </p>
    </div>
    </div>
  )
}
