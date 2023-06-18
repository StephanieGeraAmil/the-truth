import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
  createCard,
  deleteCard,
  addResourceToCard,
} from "../actions/cardActions";

import { StyledButton } from "./shared_styles/styled_buttons";
import { addCardOnDeck, deleteCardFromDeck } from "../actions/deckActions";

import { CardOfDeck } from "./shared_styles/styled_cards";
import styled, { css } from "styled-components";
import { SubTitle, Info } from "./shared_styles/styled_text";
import { FormInput, FormTextArea } from "./shared_styles/styled_forms";
import { Next, Prev, Plus, Remove, Save } from "./shared_styles/styled_icons";

const AddMenu = styled.div`
  height: 12vh;
  width: 15vh;
  padding: 5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: -5vh;
  right: -5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2vh;
  z-index: 2;
`;
const NewCardBttonContainer = styled.div`
  position: relative;
  height: 12vh;
  width: 15vh;
`;
const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  gap: 2vh;
  z-index: 0;
  width: 50%;
  height: 6vh;
`;

const StyledResource = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;
const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow: auto;
  z-index: 1;
`;

//   @media (max-width: 500px) {
//     width: 90%;
//     height: 55vh;
//   }
//   @media (min-width: 700px) {
//     width: 80vh;
//   }
// `;

const DeckContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  /* @media (min-width: 1800px) {
    width: 80%;
    margin: auto;
    margin-bottom: 2vw;
  }
  @media (max-width: 500px) {
    gap: 1vh;
  } */
`;
const DeckContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    circle farthest-corner at 0% 0%,
    #000 0%,
    #15464c 70%,
    #33abb9 100%
  );
  /* 
  @media (min-width: 1800px) {
    width: 80%;
    margin: auto;
  } */
`;

export const Deck = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);

  const { id } = useParams();
  const deck = decks.find((element) => element.id == id);
  const [cardsOfDeck, setCardsOfDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formShown, setFormShown] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [textAreaInput, setTextAreaInput] = useState("");
  const [textInput, setTextInput] = useState("");

  const nextCard = () => {
    setDisplayMenu(false);
    setFormShown(null);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    setDisplayMenu(false);
    setFormShown(null);
    setCurrentIndex(currentIndex - 1);
  };
  const addCard = () => {
    const card = { id: v4() };
    dispatch(createCard(card));
    dispatch(addCardOnDeck(id, card.id));
      setCurrentIndex(cardsOfDeck.length );
      console.log(currentIndex)
  };
  const removeCard = () => {
    if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
    dispatch(deleteCard(cardsOfDeck[currentIndex].id));
    dispatch(deleteCardFromDeck(deck.id, cardsOfDeck[currentIndex].id));
  };
  const handleClose = () => {
    setTextAreaInput("");
    setTextInput("");
    setFormShown(null);
  };
  const handleAddNoteClick = () => {
        addCard();
    setFormShown("Note");
    setDisplayMenu(false);

    //     const card = { id: v4() };
    // dispatch(createCard(card));
  };
  const handleAddVerseClick = () => {
     addCard();
    setFormShown("Verse");
    setDisplayMenu(false);
       
    //     const card = { id: v4() };
    // dispatch(createCard(card));
  };
  const handleSaveNoteClick = () => {
    if (textAreaInput !== "") {
      const note = { content: textAreaInput, id: v4() };
      // const card = { id: v4() };
      // dispatch(createCard(card));
      // dispatch(addCardOnDeck(id,  cardsOfDeck[currentIndex].id));
      console.log(currentIndex)
      dispatch(addResourceToCard(note, cardsOfDeck[currentIndex].id));
      handleClose();
    }
  };

  const handleSaveVerseClick = () => {
    if (textAreaInput !== "" && textInput !== "") {
      const verse = { scripture: textAreaInput, ref: textInput, id: v4() };
      // const card = { id: v4() };
      // dispatch(createCard(card));
      // dispatch(addCardOnDeck(id,  cardsOfDeck[currentIndex].id));
      dispatch(addResourceToCard(verse, cardsOfDeck[currentIndex].id));
      handleClose();
    }
  };

  useEffect(() => {
    setCardsOfDeck(cards.filter((c) => deck.cards.indexOf(c.id) > -1));
    console.log(cardsOfDeck)
  }, [cards]);

  return (
    <DeckContainer>
      {deck && <SubTitle $big>{deck.name}</SubTitle>}
      <>
        {cardsOfDeck.length == 0 && (
          <NewCardBttonContainer>
            <StyledButton $wide onClick={() => setDisplayMenu(true)}>
              <Plus />

              <Info $wide>Add First Card</Info>
            </StyledButton>
            {displayMenu && (
              <AddMenu>
                <StyledButton wide onClick={() => handleAddNoteClick()}>
                  <Info $gray $wide>
                    New Note
                  </Info>
                </StyledButton>
                <StyledButton wide onClick={() => handleAddVerseClick()}>
                  <Info $gray $wide>
                    {" "}
                    New Verse
                  </Info>
                </StyledButton>
              </AddMenu>
            )}
          </NewCardBttonContainer>
        )}
        {cardsOfDeck.length > 0 && (
          <DeckContent>
            {currentIndex > 0 ? (
              <StyledButton onClick={() => prevCard()}>
                <Prev />
              </StyledButton>
            ) : (
              <StyledButton></StyledButton>
            )}
            <CardOfDeck>
              <CardContent>
                {formShown && formShown === "Note" && (
                  <StyledResource>
                    <FormTextArea
                      placeholder="Note content"
                      value={textAreaInput}
                      onChange={(e) => setTextAreaInput(e.target.value)}
                    />
                  </StyledResource>
                )}
                {formShown && formShown === "Verse" && (
                  <StyledResource>
                    <FormTextArea
                      placeholder="Verse scripture"
                      value={textAreaInput}
                      onChange={(e) => setTextAreaInput(e.target.value)}
                    />
                    <FormInput
                      placeholder="Verse reference"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                    />
                  </StyledResource>
                )}

                {!formShown &&
                  cardsOfDeck[currentIndex] &&
                  cardsOfDeck[currentIndex].resources.map((res) => (
                    <StyledResource key={res.id}>
                      {res.content ? (
                        <Info $gray $wide>
                          {res.content}
                        </Info>
                      ) : (
                        <StyledResource>
                          <Info $gray $wide>
                            {res.scripture}{" "}
                          </Info>
                          <Info $gray $bold $wide>
                            {res.ref}
                          </Info>
                        </StyledResource>
                      )}
                    </StyledResource>
                  ))}

                <ActionButtonsContainer>
                  <StyledButton onClick={() => removeCard()}>
                    <Remove $color />
                  </StyledButton>

                  {!formShown && (
                    <StyledButton onClick={() => setDisplayMenu(true)}>
                      <Plus $color />
                    </StyledButton>
                  )}
                  {formShown && formShown == "Verse" && (
                    <StyledButton onClick={() => handleSaveVerseClick()}>
                      <Save $color />
                    </StyledButton>
                  )}
                  {formShown && formShown == "Note" && (
                    <StyledButton onClick={() => handleSaveNoteClick()}>
                      <Save $color />
                    </StyledButton>
                  )}
                  {displayMenu && (
                    <AddMenu>
                      <StyledButton $wide onClick={() => handleAddNoteClick()}>
                        <Info $gray $wide>
                          New Note
                        </Info>
                      </StyledButton>
                      <StyledButton $wide onClick={() => handleAddVerseClick()}>
                        <Info $gray $wide>
                          {" "}
                          New Verse
                        </Info>
                      </StyledButton>
                    </AddMenu>
                  )}
                </ActionButtonsContainer>
              </CardContent>
            </CardOfDeck>
            {currentIndex < cardsOfDeck.length - 1 ? (
              <StyledButton onClick={() => nextCard()}>
                <Next />
              </StyledButton>
            ) : (
              <StyledButton></StyledButton>
            )}
          </DeckContent>
        )}
      </>
    </DeckContainer>
  );
};
