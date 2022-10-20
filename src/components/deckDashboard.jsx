import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Deck } from "./deck";
import { Link} from "react-router-dom";
import {getCardsOfDeck} from './../actions/cardActions.js';
import Plus from "../assets/plus.svg";
import { createDeck } from "../actions/deckActions";


export const DeckDashboard = () => {
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
 const dispatch = useDispatch();

  return (
    <div>
      <h1 className="section_title">Decks</h1>
      <div className="deck_dashboard">
      {decks.length>0?
        decks.map((element) => (
          // <Deck name={element.name}  key={element.name + "deck"}></Deck>
           <Link to={`/decks/${element.id}`}key={element.name + "deck"} onClick={()=> dispatch(getCardsOfDeck(element))}>
          <div className="deck_preview " >{element.name} </div>
          </Link>
           
         
        )):<p>User without decks yet</p>}
             <button className="page_button" >
        <img src={Plus} alt="add_to_deck" />
      </button>
        </div>
    </div>
  );
};
