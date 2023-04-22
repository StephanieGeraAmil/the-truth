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

import {
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaArrowRight,
  FaTrash,
} from "react-icons/fa";
import styled, { css } from "styled-components";
import { Title, Info } from "./shared_styles/styled_text";
import {
  VerseContainer,
  VerseScripture,
  VerseRef,
} from "./shared_styles/verses_styles";

const DeckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: -10;
  @media (min-width: 1800px) {
    width: 80%;
    margin: auto;
  }
`;
const DeckContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 1800px) {
    width: 80%;
    margin: auto;
    margin-bottom:2vw;
  }
`;
const StyledResource = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width:50%;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 60%;
  width: 70%;
  margin: auto;
  overflow:auto;
    z-index: 1;
      @media (max-width: 500px) {
    width: 60%;}
`;
const NavigationSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
   z-index: 1;
`;

const AddContentButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 0;
  height:80%;
   @media (max-width: 500px) {
   width:15%;
   
   }
`;
const CardContainer = styled.div`
height: 40vh;
  width: 60vh;
  border-radius: 2vh;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
      z-index: 0;
  &:after {
     height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -0.1vh;
    top: 0.1vh;
    z-index: -2;
    content: " ";
    background-color: #fff;
  
  }
  &:before {
      height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: 1vh;
    top: -1vh;
    z-index: -1;
    content: " ";
    background-color: #fff;
   
  }
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60vh;
  height: 40vh;
  padding: 4vh;
 border-radius: 2vh;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  z-index: 0;
 

  &:after {
    height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -1vh;
    top: 1vh;
    z-index: -1;
    content: "";
    background-color: #fff;
  }
  &:before {
    height: inherit;
    width: 100%;
    border-radius: 2vh;
    box-shadow: 2px 2px 7px #595959;
    position: absolute;
    left: -2vh;
    top: 2vh;
    z-index: -2;
    content: "";
    background-color: #fff;
  } */
 
      @media (max-width: 500px) {
   width:90%;
    height:50vh;
   }

`;
export const StyledButton = styled.button`
  width: 7vw;
  height: 70%;
  z-index: 0;
  border: 0;
  background: transparent;
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
    `}
`;
const StyledInfo = styled(Info)`
  font-size: 2vh;

  color: "#433e3e";
  margin:0;
  padding:0;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
   @media (min-width: 1800px) {
  font-size: 0.9vw;
  }
`;
const StyledScripture = styled(VerseScripture)`
  font-size: 2vh;
  color: "#433e3e";
   @media (min-width: 1800px) {
 font-size: 0.9vw;
  }
`;
const StyledRef = styled(VerseRef)`
  font-size: 2vh;
  color: "#433e3e";
   @media (min-width: 1800px) {
   font-size: 0.9vw;
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
      {deck && <Title white>{deck.name}</Title>}
      {cards.length > 0 && (
        <DeckContent>
          {currentIndex !== 0 ? (
            <StyledButton onClick={() => prevCard()}>
              <FaArrowLeft style={{ color: "purple", fontSize: "1.9vh" }} />
            </StyledButton>
          ) : (
            <StyledButton></StyledButton>
          )}

          <CardContainer>
            

            {formShown && formShown === "Note" && cards[currentIndex] && (
              <NewNote
                card_id={cards[currentIndex].id}
                updateFormShown={setFormShown}
              ></NewNote>
            )}
            {formShown && formShown === "Verse" && cards[currentIndex] && (
              <NewVerse
                card_id={cards[currentIndex].id}
                updateFormShown={setFormShown}
              ></NewVerse>
            )}
            <CardContent>
              {cards[currentIndex] &&
                cards[currentIndex].resources.map((res) => (
                  <StyledResource key={res.id}>
                    {res.content ? (
                      <StyledInfo>{res.content}</StyledInfo>
                    ) : (
                      <VerseContainer>
                        <StyledScripture>{res.scripture}</StyledScripture>
                        <StyledRef>{res.ref}</StyledRef>
                      </VerseContainer>
                    )}

                    <StyledButton
                      transparent
                      onClick={() =>
                        dispatch(
                          deleteResourceFromCard(res.id, cards[currentIndex].id)
                        )
                      }
                    >
                      <FaMinus style={{ color: "purple", fontSize: "0.9vw" }} />
                    </StyledButton>
                  </StyledResource>
                ))}
            </CardContent>

            <AddContentButtonsContainer>
              {/* <NavigationSection> */}
              <StyledButton onClick={() => removeCard()}>
                <FaTrash style={{ color: "purple", fontSize: "1.9vh" }} />
              </StyledButton>
            {/* </NavigationSection> */}
              <StyledButton onClick={() => setFormShown("Note")}>
                <FaPlus style={{ color: "purple", fontSize: "1.9vh" }} />
                <StyledInfo>note</StyledInfo>
              </StyledButton>
              <StyledButton onClick={() => setFormShown("Verse")}>
                <FaPlus style={{ color: "purple", fontSize: "1.9vh" }} />
                <StyledInfo>verse</StyledInfo>
              </StyledButton>
            </AddContentButtonsContainer>
          </CardContainer>
          {currentIndex !== cards.length - 1 ? (
            <StyledButton transparent onClick={() => nextCard()}>
              <FaArrowRight style={{ color: "purple", fontSize: "1.9vh" }} />
            </StyledButton>
          ) : (
            <StyledButton></StyledButton>
          )}
        </DeckContent>
      )}

      <StyledButton transparent onClick={() => addCard()}>
        <FaPlus style={{ color: "purple", fontSize: "1.9vh" }} /> <StyledInfo white> card</StyledInfo>
      </StyledButton>
    </DeckContainer>
  );
};
