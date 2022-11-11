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
import Add from "../assets/add.svg";
import Delete from "../assets/delete.svg";
import Prev from "../assets/prev.svg";
import Next from "../assets/next.svg";
import Bible from "../assets/bible.svg";
import Note from "../assets/note.svg";
import { NewNote } from "./newNote";
import { NewVerse } from "./newVerse";

import styled, { css } from "styled-components";
import { PageTitle } from "./shared_styles/styled_page_headigns";
import { StyledButton } from "./shared_styles/styled_buttons";
import { Paragraph } from "./shared_styles/styled_content_components";
import { VerseContainer, VerseRef } from "./shared_styles/verses_styles";

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
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const VerseDivContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const AddContentButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
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
  const [isHoveringNote, setIsHoveringNote] = useState(false);
  const [isHoveringVerse, setIsHoveringVerse] = useState(false);

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
    setFormShown(null);
    setCardShown(cards[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    setFormShown(null);
    setCardShown(cards[currentIndex - 1]);
    setCurrentIndex(currentIndex - 1);
  };
  const deleteCard = () => {
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
    const cardToDelete = { card: cardShown.id };
    dispatch(deleteCardFromDeck(deck, cardToDelete));
  };
  const addCard = () => {
    setFormShown(null);
    setCurrentIndex(cards.length);
    dispatch(addCardToDeck(deck));
  };

  return (
    <DeckContainer>
      {deck && <PageTitle>{deck.name}</PageTitle>}
      {cardShown && (
        <DeckContent>
          {currentIndex !== 0 ? (
            <StyledButton onClick={() => prevCard()}>
              {" "}
              <img src={Prev} alt="prev_card" />
            </StyledButton>
          ) : (
            <StyledButton hidden onClick={() => prevCard()}>
              <img src={Prev} alt="prev_card" />
            </StyledButton>
          )}

          <CardContainer>
            <StyledButton topRight onClick={() => deleteCard()}>
              <img src={Delete} alt="delete_card" />
            </StyledButton>

            {formShown && formShown === "Note" && (
              <NewNote
                card_id={cardShown.id}
                updateFormShown={setFormShown}
              ></NewNote>
            )}
            {formShown && formShown === "Verse" && (
              <NewVerse
                card_id={cardShown.id}
                updateFormShown={setFormShown}
              ></NewVerse>
            )}
            <CardContent>
              {note && (
                <NoteContainer
                  onMouseOver={() => setIsHoveringNote(true)}
                  onMouseLeave={() => setIsHoveringNote(false)}
                >
                  <p>{note.content}</p>
                  {isHoveringNote && (
                    <StyledButton
                      adyacent
                      onClick={() =>
                        dispatch(deleteNoteFromCard(note, cardShown))
                      }
                    >
                      <img src={Delete} alt="delete_note_from_card" />
                    </StyledButton>
                  )}
                </NoteContainer>
              )}

              {verses &&
                verses.map((verse) => (
                  <VerseDivContainer
                    onMouseOver={() => setIsHoveringVerse(true)}
                    onMouseLeave={() => setIsHoveringVerse(false)}
                  >
                    <VerseContainer key={`${verse.id}`}>
                      <Paragraph>{verse.scripture}</Paragraph>
                      <VerseRef>
                        {verse.book.charAt(0).toUpperCase() +
                          verse.book.slice(1) +
                          " " +
                          verse.chapter +
                          ":" +
                          verse.verse_number}
                      </VerseRef>
                    </VerseContainer>
                    {isHoveringVerse && (
                      <StyledButton
                        adyacent
                        onClick={() =>
                          dispatch(deleteVerseFromCard(verse, cardShown))
                        }
                      >
                        <img src={Delete} alt="delete_verse_from_card" />
                      </StyledButton>
                    )}
                  </VerseDivContainer>
                ))}
            </CardContent>
            <AddContentButtonsContainer>
              {!note && (
                <StyledButton onClick={() => setFormShown("Note")}>
                  <img src={Note} alt="add_to_note_to_card" />
                </StyledButton>
              )}
              {verses.length == 0 && (
                <StyledButton onClick={() => setFormShown("Verse")}>
                  <img src={Bible} alt="add_to_verse_to_card" />
                </StyledButton>
              )}
            </AddContentButtonsContainer>
          </CardContainer>
          {currentIndex !== cards.length - 1 ? (
            <StyledButton onClick={() => nextCard()}>
              {" "}
              <img src={Next} alt="next_card" />
            </StyledButton>
          ) : (
            <StyledButton hidden onClick={() => nextCard()}>
              <img src={Next} alt="next_card" />
            </StyledButton>
          )}
        </DeckContent>
      )}

      <StyledButton onClick={() => addCard()}>
        <img src={Add} alt="add_card_to_deck" />
      </StyledButton>
    </DeckContainer>
  );
};
