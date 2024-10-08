import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import {
  addCard,
  deleteCard,
} from "../actions/cardActions";
import { addVerse, updateVerse } from "../actions/verseActions";
import { addNote, updateNote } from "../actions/noteActions";

import { StyledButton } from "./shared_styles/styled_buttons";
// import { addCardOnDeck, deleteCardFromDeck } from "../actions/deckActions";

import { CardOfDeck } from "./shared_styles/styled_cards";
import styled, { css } from "styled-components";
import { SubTitle, Info } from "./shared_styles/styled_text";
import { FormInput, FormTextArea } from "./shared_styles/styled_forms";
import { Next, Prev, Plus, Remove, Edit, Save } from "./shared_styles/styled_icons";

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


const DeckContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vh;
   @media (max-width: 550px) {
    gap: 1vh;
    height: 60%;
  }
`;
const DeckContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow:hidden;
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
`;

export const Deck = () => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
  const noteSelector = (state) => (state.notes ? state.notes : null);
  const notes = useSelector(noteSelector);
  const verseSelector = (state) => (state.verses ? state.verses : null);
  const verses = useSelector(verseSelector);

  const { id } = useParams();
  const deck = decks.find((element) => element.id == id);
  const [cardsOfDeck, setCardsOfDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formShown, setFormShown] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [textAreaInput, setTextAreaInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [displayEditingResourceForm, setDisplayEditingResourceForm] = useState(null);

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
  const createCard = () => {
    const card = { deckId: id, order: cardsOfDeck.length };
    console.log(card);
    dispatch(addCard(card));
    //  dispatch(addCardOnDeck(id, card.id));
    setCurrentIndex(cardsOfDeck.length);
  };
  const removeCard = () => {
    if (currentIndex !== 0) setCurrentIndex(prevIndex => prevIndex - 1);
    dispatch(deleteCard(cardsOfDeck[currentIndex].id));
    //dispatch(deleteCardFromDeck(deck.id, cardsOfDeck[currentIndex].id));
    handleClose();
  };
  const handleClose = () => {
    setTextAreaInput("");
    setTextInput("");
    setFormShown(null);
    setDisplayEditingResourceForm(null);
  };
  const handleAddNoteClick = () => {
    createCard();
    setFormShown("Note");
    setDisplayMenu(false);
  };
  const handleAddVerseClick = () => {
    createCard();
    setFormShown("Verse");
    setDisplayMenu(false);
  };
  const handleSaveNoteClick = (id) => {
    if (textAreaInput !== "") {
      const note = { content: textAreaInput, cardId: cardsOfDeck[currentIndex].id };
      if (id && displayEditingResourceForm == id) {
        dispatch(updateNote(id, note));
      } else {
        console.log("is a creation");
        dispatch(addNote(note));
      }
      handleClose();
    }
  };

  const handleSaveVerseClick = (id) => {
    if (textAreaInput !== "" && textInput !== "") {
      const verse = { content: textAreaInput, reference: textInput, cardId: cardsOfDeck[currentIndex].id };
      if (id && displayEditingResourceForm == id) {
        dispatch(updateVerse(id, verse));
      } else {
        dispatch(addVerse(verse));
      }
      handleClose();
    }
  };

  useEffect(() => {
    // setCardsOfDeck(cards.filter((c) => deck.cards.indexOf(c.id) > -1));
    setCardsOfDeck(cards.filter((c) => c.deckId == id));
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
                {formShown && formShown === "Note" && (<>
                  <StyledResource>
                    <FormTextArea
                      placeholder="Note content"
                      value={textAreaInput}
                      onChange={(e) => setTextAreaInput(e.target.value)}
                    />
                  </StyledResource>
                  <StyledButton onClick={() => { console.log(displayEditingResourceForm); handleSaveNoteClick(displayEditingResourceForm) }}>
                    <Save $color />
                  </StyledButton>
                </>
                )}
                {formShown && formShown === "Verse" && (<>
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
                  <StyledButton onClick={() => handleSaveVerseClick(displayEditingResourceForm)}>
                    <Save $color />
                  </StyledButton>
                </>

                )}

                {!formShown &&
                  notes.filter((note) => note.cardId == cardsOfDeck[currentIndex].id).map((note) => (

                    <StyledResource key={note.id}>
                      <Info $gray $wide>
                        {note.content}
                      </Info>
                      <StyledButton onClick={() => { setDisplayEditingResourceForm(note.id); setFormShown("Note") }}>
                        <Edit $color />
                      </StyledButton>

                    </StyledResource>
                  ))}
                {!formShown &&
                  verses.filter((verse) => verse.cardId == cardsOfDeck[currentIndex].id).map((verse) => (
                    <StyledResource key={verse.id}>

                      <StyledResource>
                        <Info $gray $wide>
                          {verse.content}{" "}
                        </Info>
                        <Info $gray $bold $wide>
                          {verse.reference}
                        </Info>
                      </StyledResource>
                      <StyledButton onClick={() => { setDisplayEditingResourceForm(verse.id); setFormShown("Verse") }}>
                        <Edit $color />
                      </StyledButton>

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
