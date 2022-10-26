import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { addCardToDeck } from "../actions/cardActions";
import Plus from "../assets/plus.svg";
export const Deck = () => {
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
      if (cardShown === "") {
        setCardShown(cards[0]);
      } else {
        setCardShown(cards[cards.length - 1]);
      }
    }
  }, [cards]);
  const nextCard = () => {
    const currentIndex = cards.indexOf(cardShown);

    setCardShown(cards[currentIndex + 1]);
  };
  const prevCard = () => {
    const currentIndex = cards.indexOf(cardShown);

    setCardShown(cards[currentIndex - 1]);
  };

  return (
    <div className="deck">
      {deck && <h1 className="section_title">{deck.name}</h1>}
      <button onClick={() => prevCard()}></button>

      <div className="card">{cardShown && <p>{cardShown.id}</p>}</div>
      <button onClick={() => nextCard()}></button>
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
