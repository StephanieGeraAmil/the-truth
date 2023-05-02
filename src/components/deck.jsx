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
import { addCardOnDeck, deleteCardFromDeck } from "../actions/deckActions";
import { NewNote } from "./newNote";
import { NewVerse } from "./newVerse";

import styled, { css } from "styled-components";
import { Title, Info } from "./shared_styles/styled_text";
import {
  VerseContainer,
  VerseScripture,
  VerseRef,
} from "./shared_styles/verses_styles";

import { FaMinus, FaTrash, FaPen } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const ActionButtonsContainer = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 1vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 2vh;
  z-index: 0;
  height: 5vh;
`;

const StyledTitle = styled(Title)`
  font-size: 10vh;
  text-align: center;
  color: white; */
  height: 40vw;
  @media (max-width: 500px) {
    font-size: 8vh; 
    height: 10vh;
  }
`;
export const StyledButton = styled.button`
  z-index: 0;
  border: 0;
  background: transparent;
  font-size: 0.6rem;
  font-weight: 100;
  vertical-align: center;
  color: #8b8c89;
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
    `}
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 2vh;
  }
`;
export const PrevAndNext = styled.button`
  width: 4vh;
  height: 4vh;
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

  width: 95%;
  padding: 0;
  color: #433e3e;
  margin: 0;
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
  color: #433e3e;
  @media (min-width: 1800px) {
    font-size: 0.9vw;
  }
`;
const StyledRef = styled(VerseRef)`
  font-size: 2vh;
  color: #433e3e;
  @media (min-width: 1800px) {
    font-size: 0.9vw;
  }
`;
const MinusDiv = styled.div`
  width: 3vh;
  height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledResource = styled.div`
  width: 100%;
  min-height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;
  height: 60%;
  width: 85%;
  margin: 0;
  overflow: auto;
  z-index: 1;
`;

const CardContainer = styled.div`
  height: 50vh;
  width: 60vw;
  border-radius: 2vh;
  padding: 0 2vh;
  box-shadow: 2px 2px 7px #595959;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
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

  @media (max-width: 500px) {
    width: 90%;
    height: 55vh;
  }
  @media (min-width: 700px) {
    width: 80vh;
  }
`;

const DeckContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10vh;
  @media (min-width: 1800px) {
    width: 80%;
    margin: auto;
    margin-bottom: 2vw;
  }
`;
const DeckContainer = styled.div`
  width: 100%;
  height: 100%;
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
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (deck) {
      dispatch(getCardsOfDeck(deck));
    }
    return () => {
      dispatch(cleanCards());
    };
  }, []);

  const nextCard = () => {
    setDisplay(false);
    setFormShown(null);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    setDisplay(false);
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
    dispatch(addCardOnDeck(deck.id, card.id));
  };
  const editCard = () => {
    setDisplay(true);
  };
  const FinishEditCard = () => {
    setDisplay(false);
  };
  return (
    <DeckContainer>
      {deck && <StyledTitle white>{deck.name}</StyledTitle>}
      <>
        {cards.length == 0 && (
          <>
            <StyledButton transparent onClick={() => addCard()}>
              <FiPlusCircle style={{ color: "#6096BA", fontSize: "3vh" }} />
                  <Info>Add First Card</Info>
            </StyledButton>
          </>
        )}
        {cards.length > 0 && (
          <DeckContent>
            {currentIndex !== 0 ? (
              <PrevAndNext onClick={() => prevCard()}>
                <IoIosArrowBack style={{ color: "#8B8C89", fontSize: "3vh" }} />
              </PrevAndNext>
            ) : (
              <PrevAndNext> </PrevAndNext>
            )}
            <CardContainer>
              <ActionButtonsContainer>
                {display && (
                  <>
                    <StyledButton onClick={() => FinishEditCard()}>
                      <MdOutlineDone
                        style={{ color: "#6096BA", fontSize: "3vh" }}
                      />{" "}
                    </StyledButton>
                    <StyledButton onClick={() => setFormShown("Note")}>
                      <FiPlusCircle
                        style={{ color: "#6096BA", fontSize: "2vh" }}
                      />{" "}
                      <Info> Note</Info>
                    </StyledButton>
                    <StyledButton onClick={() => setFormShown("Verse")}>
                      <FiPlusCircle
                        style={{ color: "#6096BA", fontSize: "2vh" }}
                      />{" "}
                      <Info> Verse</Info>
                    </StyledButton>
                  </>
                )}
                {!display && (
                  <>
                    <StyledButton onClick={() => removeCard()}>
                      <FaTrash style={{ color: "#6096BA", fontSize: "3vh" }} />
                    </StyledButton>
                    <StyledButton onClick={() => editCard()}>
                      <FaPen style={{ color: "#6096BA", fontSize: "3vh" }} />
                    </StyledButton>
                    <StyledButton transparent onClick={() => addCard()}>
                      <FiPlusCircle
                        style={{ color: "#6096BA", fontSize: "3vh" }}
                      />{" "}
                    </StyledButton>
                  </>
                )}
              </ActionButtonsContainer>
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
                    <StyledResource
                      key={res.id}
                    >
                      {display && (
                        <MinusDiv>
                          <StyledButton
                            transparent
                            onClick={() =>
                              dispatch(
                                deleteResourceFromCard(
                                  res.id,
                                  cards[currentIndex].id
                                )
                              )
                            }
                          >
                            <FaMinus
                              style={{ color: "#0D0C3C", fontSize: "0.9vh" }}
                            />
                          </StyledButton>
                        </MinusDiv>
                      )}
                      {res.content ? (
                        <StyledInfo>{res.content}</StyledInfo>
                      ) : (
                        <VerseContainer>
                          <StyledScripture>{res.scripture}</StyledScripture>
                          <StyledRef>{res.ref}</StyledRef>
                        </VerseContainer>
                      )}
                    </StyledResource>
                  ))}
              </CardContent>
            </CardContainer>
            {currentIndex !== cards.length - 1 ? (
              <PrevAndNext transparent onClick={() => nextCard()}>
                <IoIosArrowForward
                  style={{ color: "#8B8C89", fontSize: "3vh" }}
                />
              </PrevAndNext>
            ) : (
              <PrevAndNext></PrevAndNext>
            )}
          </DeckContent>
        )}
      </>
    </DeckContainer>
  );
};
