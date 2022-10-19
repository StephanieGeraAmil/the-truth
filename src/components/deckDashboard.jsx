import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deck } from "./deck";
import { Link} from "react-router-dom";


export const DeckDashboard = () => {
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  

  return (
    <div>
      <h1 className="section_title">Decks</h1>
      <div className="deck_dashboard">
      {decks.length>0?
        decks.map((element) => (
          // <Deck name={element.name}  key={element.name + "deck"}></Deck>
           <Link to={`/decks/${element.id}`}key={element.name + "deck"} >
          <div className="deck_preview " >{element.name} </div>
          </Link>
           
         
        )):<p>User without decks yet</p>}
        </div>
    </div>
  );
};
