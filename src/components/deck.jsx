import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { addCardToDeck } from "../actions/cardActions";
import Plus from "../assets/plus.svg";
export const Deck = () => {
  const [parameters, setParameters] = useSearchParams();
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
  const { id } = useParams();
  const [deck, setDeck] = useState(decks.find((element) => element.id == id));
  const [cardShown, setCardShown] = useState("");

  useEffect(() => {
    if (cards.length > 0) {
      let par = parameters.get("card");
      if (par !== undefined) {
        setCardShown(cards.find((element) => element.id == par));
      }
    }
  }, [parameters]);
  useEffect(() => {
    if (cardShown === "") {
      setParameters({ card: `${cards[0].id}` });
    }else{
       setParameters({ card: `${cards[cards.length-1].id}` });
    }
  }, [cards]);

  return (
    <div className="deck">
      {deck && <h1 className="section_title">{deck.name}</h1>}
      <div className="card">{cardShown && <p>{cardShown.id}</p>}</div>
      <Link
        to={`/decks/${id}/`}
        className="page_button"
        onClick={() => dispatch(addCardToDeck(deck))}
      >
        <img src={Plus} alt="add_to_deck" />
      </Link>
    </div>
  );
};
