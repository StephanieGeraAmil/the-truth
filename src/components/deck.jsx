import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
  getCardsOfDeck,
  createCard,
  deleteCard,
  cleanCards,
  deleteResourceFromCard,
} from "../actions/cardActions";
import { createCardOnDeck, deleteCardFromDeck } from "../actions/deckActions";
import { NewNote } from "./newNote";
import { NewVerse } from "./newVerse";
import styled, { css } from "styled-components";
import { Title } from "./shared_styles/styled_text";
import { StyledButton } from "./shared_styles/styled_buttons";
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

  const { id } = useParams();
  const deck = decks.find((element) => element.id == id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [formShown, setFormShown] = useState(null);

  useEffect(() => {
    dispatch(getCardsOfDeck(deck));
  
    return () => {
      dispatch(cleanCards());
    };
  }, []);


  const nextCard = () => {
    setFormShown(null);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    setFormShown(null);
    setCurrentIndex(currentIndex - 1);
  };
  const removeCard = () => {
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
    dispatch(deleteCard(cards[currentIndex].id));
    dispatch(deleteCardFromDeck(deck.id, cards[currentIndex].id));
  };
  const addCard = () => {
    setFormShown(null);
    setCurrentIndex(cards.length);
    const card = { id: v4() };
    dispatch(createCard(card));
    dispatch(createCardOnDeck(deck.id, card.id));
  };

  return (
    <DeckContainer>
      {deck && <Title>{deck.name}</Title>}
      {cards.length>0 && (
        <DeckContent>
          {currentIndex !== 0 ? (
            <StyledButton transparent onClick={() => prevCard()}>
              prev
            </StyledButton>
          ) : (
            <></>
          )}

          <CardContainer>
            <StyledButton transparent onClick={() => removeCard()}>
              -
            </StyledButton>

            {formShown && formShown === "Note" &&cards[currentIndex]&& (
              <NewNote
                card_id={cards[currentIndex].id}
                updateFormShown={setFormShown}
              ></NewNote>
            )}
            {formShown && formShown === "Verse"&&cards[currentIndex] && (
              <NewVerse
                card_id={cards[currentIndex].id}
                updateFormShown={setFormShown}
              ></NewVerse>
            )}
            <CardContent>
              {cards[currentIndex]&&cards[currentIndex].resources.map((res) => (
                <div key={res.id}>
              
                    {res.content ? res.content : res.scripture}
                  
                  <StyledButton
                    transparent
                    onClick={() =>
                      dispatch(deleteResourceFromCard(res.id, cards[currentIndex].id))
                    }
                  >
                   -
                  </StyledButton>
                </div >
              ))}
            </CardContent>
  
            <AddContentButtonsContainer>
              <StyledButton transparent onClick={() => setFormShown("Note")}>
                add note
              </StyledButton>
              <StyledButton transparent onClick={() => setFormShown("Verse")}>
                add verse
              </StyledButton>
            </AddContentButtonsContainer>
          </CardContainer>
          {currentIndex !== cards.length - 1 ? (
            <StyledButton transparent onClick={() => nextCard()}>
              next
            </StyledButton>
          ) :<></>}
        </DeckContent>
      )}

      <StyledButton transparent onClick={() => addCard()}>
        add card
      </StyledButton>
    </DeckContainer>
  );
};
