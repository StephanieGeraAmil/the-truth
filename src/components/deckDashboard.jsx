import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deck } from "./deck";


export const DeckDashboard = () => {
   const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);

  return (
    <div className="deck_dashboard">
      <h1>Decks</h1>
      {decks.length>0?
        decks.map((element) => (
          // <Deck name={element.name}  key={element.name + "deck"}></Deck>
          <div className="deck_preview " key={element.name + "deck"}>{element.name} </div>
           
         
        )):<p>User without decks yet</p>}
    </div>
  );
};
