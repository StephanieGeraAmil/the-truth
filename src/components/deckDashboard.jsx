import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { deleteDeck } from "./../actions/deckActions.js";
import Plus from "../assets/plus.svg";

export const DeckDashboard = () => {
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const dispatch = useDispatch();
  const removeDeck = (deck) => {
   dispatch(deleteDeck(deck.id));
  };

  return (
    <div>
      <h1 className="section_title">Decks</h1>
      <div className="deck_dashboard">
        {decks.length > 0 ? (
          decks.map((element) => (
            <div key={element.name + "deck"}>
            <Link to={`/decks/${element.id}`} >
              <div className="deck_preview ">
                {element.name}
               
              </div>
            </Link>
             <button onClick={() => removeDeck(element)}>X</button>
             </div>
          ))
        ) : (
          <p>User without decks yet</p>
        )}
        <Link to={`/newDeck`}>
          {/* <button className="page_button" > */}
          <img src={Plus} alt="add_to_deck" />
        </Link>
        {/* </button> */}
      </div>
    </div>
  );
};
