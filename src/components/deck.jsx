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

const BottomButtons = styled.div`
  height: 10vw;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 0;
  height: 8%;
  width: 50%;
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
 
  width: 100%;
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
  width: 4vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledResource = styled.div`
  width: 100%;
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
  gap: 5vh;
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
      {deck && <StyledTitle white>{deck.name}</StyledTitle>}
      <>
        {cards.length > 0 && (
          <DeckContent>
            {currentIndex !== 0 ? (
              <StyledButton onClick={() => prevCard()}>
                <FaArrowLeft style={{ color: "#0D0C3C", fontSize: "1.9vh" }} />
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
                    <StyledResource
                      key={res.id}
                      onMouseEnter={(e) => setDisplay(true)}
                      onMouseLeave={(e) => setDisplay(false)}
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
              <ActionButtonsContainer>
                <StyledButton onClick={() => removeCard()}>
                  <FaTrash style={{ color: "#0D0C3C", fontSize: "1.9vh" }} />
                   <StyledInfo>card</StyledInfo>
                </StyledButton>
                <StyledButton onClick={() => setFormShown("Note")}>
                  <FaPlus style={{ color: "#0D0C3C", fontSize: "1.9vh" }} />
                  <StyledInfo>note</StyledInfo>
                </StyledButton>
                <StyledButton onClick={() => setFormShown("Verse")}>
                  <FaPlus style={{ color: "#0D0C3C", fontSize: "1.9vh" }} />
                  <StyledInfo>verse</StyledInfo>
                </StyledButton>
              </ActionButtonsContainer>
            </CardContainer>
            {currentIndex !== cards.length - 1 ? (
              <StyledButton transparent onClick={() => nextCard()}>
                <FaArrowRight style={{ color:"#0D0C3C", fontSize: "1.9vh" }} />
              </StyledButton>
            ) : (
              <StyledButton></StyledButton>
            )}
          </DeckContent>
        )}
        <BottomButtons>
          <StyledButton transparent onClick={() => addCard()}>
            <FaPlus style={{ color:"#FFF", fontSize: "1.9vh" }} />{" "}
            <StyledInfo white>card</StyledInfo>
          </StyledButton>
        </BottomButtons>
      </>
    </DeckContainer>
  );
};
