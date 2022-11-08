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

import styled, { css } from "styled-components";
const DeckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const DeckContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const DeckTitle= styled.h1`
  padding: 30px 0 0 30px;
  font-size: 20px;
  `;
const CardContainer = styled.div`
  width: 55%;
  /* margin: 0 auto; */
  height: 250px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  &:after {
    height: inherit;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -5px;
    top: 5px;
    z-index: -1;
    content: "";
    background-color: #fff;
  }
  &:before {
    height: inherit;
    width: 100%;
    border-radius: 10px;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -10px;
    top: 10px;
    z-index: -2;
    content: "";
    background-color: #fff;
  }
`;

const StyledButton = styled.button`
  border: 0;
  border-radius: 10px;
  font-size: 12px;
  padding: 6px;
  /* background-color: #bbbaba; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  ${(props) =>
    props.topRight &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `}
  ${(props) =>
    props.adyacent &&
    css`
      position: relative;
      top: -40px;
      right: -320px;
    `}
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
     
    `}

`;

const PageNavButton = styled(StyledButton)`
  background-color: #5b5b5b;
  color: white;
  
`;
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
    <DeckContainer>
      {deck && <DeckTitle>{deck.name}</DeckTitle>}
      {cardShown && (
        <DeckContent>
          {currentIndex !== 0 ? (
            <PageNavButton onClick={() => prevCard()}>{"<"}</PageNavButton>
          ):
          (
            <PageNavButton hidden onClick={() => prevCard()}>{"<"}</PageNavButton>
          )}

          <CardContainer>
            <StyledButton topRight onClick={() => deleteCard()}>
              X
            </StyledButton>
            {!formShown ? (
              <>
                {!note && (
                  <StyledButton onClick={() => setFormShown("Note")}>
                    New Note
                  </StyledButton>
                )}
                {verses.length == 0 && (
                  <StyledButton onClick={() => setFormShown("Verse")}>
                    New Verse
                  </StyledButton>
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
                <StyledButton
                  adyacent
                  onClick={() => dispatch(deleteNoteFromCard(note, cardShown))}
                >
                  X
                </StyledButton>
              </>
            )}

            {verses &&
              verses.map((verse) => (
                <div key={verse.id}>
                  <p>{`${verse.scripture} `}</p>
                  <p>{`${verse.book},${verse.chapter},${verse.verse_number} `}</p>
                  <StyledButton
                    adyacent
                    onClick={() =>
                      dispatch(deleteVerseFromCard(verse, cardShown))
                    }
                  >
                    X
                  </StyledButton>
                </div>
              ))}
          </CardContainer>
          {currentIndex !== cards.length - 1 ?(
            <PageNavButton onClick={() => nextCard()}>{">"}</PageNavButton>
          ):(
            <PageNavButton  hidden onClick={() => nextCard()}>{">"}</PageNavButton>
          )
          }
        </DeckContent>
      )}

      <StyledButton onClick={() => addCard()}>
        <img src={Plus} alt="add_to_deck" />
      </StyledButton>
    </DeckContainer>
  );
};
