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

import { FaPlus,FaMinus ,FaArrowLeft,FaArrowRight} from "react-icons/fa";
import styled, { css } from "styled-components";
import { Title } from "./shared_styles/styled_text";
import { VerseContainer, VerseRef } from "./shared_styles/verses_styles";

const DeckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index:-10;
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
  justify-content:center;
  align-items: center;

`;
const NavigationSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

`;

const AddContentButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
   z-index:0;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 55%;
  height: 250px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
   z-index:0;
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
export const StyledButton = styled.button`
  width: 7vw;
  height: 70%;
  z-index: 0;
  border:0;
  background:transparent;
    ${(props) =>
    props.hidden &&
    css`
      opacity: 0;

    `}
     
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
      {deck && <Title white>{deck.name}</Title>}
      {cards.length>0 && (
        <DeckContent>
          {currentIndex !== 0 && (
            <StyledButton  onClick={() => prevCard()}>
             <FaArrowLeft/>
            </StyledButton>
          ) }

          <CardContainer>
            <NavigationSection>
            <StyledButton onClick={() => removeCard()}>
            <FaArrowLeft style={{color: 'purple', fontSize: '1.5vw'}}/>
            </StyledButton>
            </NavigationSection>

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
                    <FaMinus style={{color: 'purple', fontSize: '1.5vw'}}/>
                  </StyledButton>
                </div >
              ))}
            </CardContent>
  
            <AddContentButtonsContainer>
              <StyledButton  onClick={() => setFormShown("Note")}>
                 <FaPlus style={{color: 'purple', fontSize: '1.5vw'}}/> 
                 note
              </StyledButton>
              <StyledButton  onClick={() => setFormShown("Verse")}>
             <FaPlus style={{color: 'purple', fontSize: '1.5vw'}}/>
             verse
              </StyledButton>
            </AddContentButtonsContainer>
          </CardContainer>
          {currentIndex !== cards.length - 1 &&(
            <StyledButton transparent onClick={() => nextCard()}>
              <FaArrowRight/>
            </StyledButton>
          )}
        </DeckContent>
      )}

      <StyledButton transparent onClick={() => addCard()}>
        <FaPlus style={{color: 'purple', fontSize: '1.5vw'}}/>
      </StyledButton>
    </DeckContainer>
  );
};
