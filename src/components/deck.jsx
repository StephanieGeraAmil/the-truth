import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addCardToDeck, deleteCardFromDeck } from "../actions/cardActions";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (cards.length > 0) {
      if (cardShown === "") {
        setCardShown(cards[0]);
      }else{
           setCardShown(cards[currentIndex]);
      }
    }
  }, [cards]);
  const nextCard = () => {
    setCardShown(cards[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    setCardShown(cards[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };

  const deleteCard = () => {
      setCurrentIndex(currentIndex - 1);
    const cardToDelete = { card: cardShown.id };
    dispatch(deleteCardFromDeck(deck, cardToDelete));
  };
  const addCard = () => {
    setCurrentIndex(cards.length);
    dispatch(addCardToDeck(deck));
  };

  return (
    <div className="deck">
      {deck && <h1 className="section_title">{deck.name}</h1>}
      <button onClick={() => prevCard()}></button>

      <div className="card">
        {cardShown && <p>{cardShown.id}</p>}
        <button onClick={() => deleteCard()}>X</button>
      </div>
      <button onClick={() => nextCard()}></button>
      <button
        className="page_button"
        onClick={() => addCard()}
      >
        <img src={Plus} alt="add_to_deck" />
      </button>
    </div>
  );
};
