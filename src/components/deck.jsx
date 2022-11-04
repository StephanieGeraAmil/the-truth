import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCardsOfDeck,
  addCardToDeck,
  deleteCardFromDeck,
} from "../actions/cardActions";
import { getVersesOfCard, deleteVerseFromCard } from "../actions/verseActions";
import { getNotesOfCard, deleteNoteFromCard } from "../actions/noteActions";

import Plus from "../assets/plus.svg";
import { NewNote } from "./newNote";
import { NewVerse } from "./newVerse";
export const Deck = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
  const verseSelector = (state) => (state.verses ? state.verses : null);
  const verses = useSelector(verseSelector);
  const noteSelector = (state) => (state.note ? state.note : null);
  const note = useSelector(noteSelector);
  const { id } = useParams();
  const [deck, setDeck] = useState(decks.find((element) => element.id == id));
  const [cardShown, setCardShown] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formShown, setFormShown] = useState(null);

  useEffect(() => {
    dispatch(getCardsOfDeck(deck));
  }, []);
  useEffect(() => {
    if (cardShown) {
      dispatch(getVersesOfCard(cardShown));
      dispatch(getNotesOfCard(cardShown));
    }
  }, [cardShown]);
  useEffect(() => {
    if (cards.length > 0) {
      if (cardShown === "") {
        setCardShown(cards[0]);
      } else {
        setCardShown(cards[currentIndex]);
      }
    } else {
      setCardShown(null);
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
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
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
      {cardShown && (
        <>
          {currentIndex !== 0 && (
            <button onClick={() => prevCard()}>Prev</button>
          )}

          <div className="card">
            {!formShown ? (
              <>
                {!note && (
                  <button onClick={() => setFormShown("Note")}>New Note</button>
                )}
                 {verses.length==0 && (
                <button onClick={() => setFormShown("Verse")}>New Verse</button>
                 )}
              </>
            ) : (
              <>
                {formShown === "Note" ? (
                  <NewNote
                    card_id={cardShown.id}
                    updateFormShown={setFormShown}
                  ></NewNote>
                ) : (
                  <NewVerse
                    card_id={cardShown.id}
                    updateFormShown={setFormShown}
                  ></NewVerse>
                )}
              </>
            )}

            {note && (
              <>
                <p>{note.content}</p>
                 <button onClick={() => dispatch(deleteNoteFromCard(note, cardShown))}>X</button>
              </>
            )}

            {verses &&
              verses.map((verse) => (
                <div key={verse.id}>
                
                  <p>{`${verse.scripture} `}</p>
                    <p>{`${verse.book},${verse.chapter},${verse.verse_number} `}</p>
                   <button onClick={() => dispatch(deleteVerseFromCard( verse, cardShown))}>X</button>
                </div>
              ))}
            <button onClick={() => deleteCard()}>X</button>
          </div>
          {currentIndex !== cards.length - 1 && (
            <button onClick={() => nextCard()}>Next</button>
          )}
        </>
      )}

      <button className="page_button" onClick={() => addCard()}>
        <img src={Plus} alt="add_to_deck" />
      </button>
    </div>
  );
};
