import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
import { Next, Prev, Plus, Remove, Edit, Save, Close, Back } from "./shared_styles/styled_icons";
import { E } from "styled-icons/fa-solid";

const AddMenu = styled.div`
  height: 15vh;
  width: 10vw;
  padding: 1vh 3vh;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 18vh;
  right: -15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;

  ${(props) =>
    props.$bottom &&
    css`
    bottom: -5vh;
    right: -5vh;   
    `}
  @media (max-width: 600px) {
    width: 30vw;
    padding: 1vh 1vh;
    ${(props) =>
      props.$bottom &&
      css`
      bottom: -8vh;
     
      `}
  }
  @media (min-width: 1400px) {
    height:17vh;
  }


`;
const NewCardBttonContainer = styled.div`
  position: relative;
  height: 60%;
  display:flex;
  flex-direction:column;
  justify-content:center;

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
const StyledLink = styled(Link)`
width:6vh;
height:6vh;
`;

const StyledResource = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2vh;
`;
const StyledResourceContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 
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
  @media (max-width: 600px) {
   padding:2vh;
  }
`;


const DeckContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  @media (max-width: 600px) {
    gap: 1vh;
    height: 60%;
  }
`;
const DeckTitleContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
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
  const addMenuRef = useRef(null);

  const nextCard = () => {
    setDisplayMenu(false);
    setFormShown(null);
    setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    if (formShown && !displayEditingResourceForm) {
      removeCard();
    }
    setDisplayMenu(false);
    setFormShown(null);
    setCurrentIndex(currentIndex - 1);
  };
  const createCard = () => {
    const card = { deckId: id, order: cardsOfDeck.length };
    dispatch(addCard(card));
    setCurrentIndex(cardsOfDeck.length);
  };
  const removeCard = () => {
    if (currentIndex !== 0) setCurrentIndex(prevIndex => prevIndex - 1);
    dispatch(deleteCard(cardsOfDeck[currentIndex].id));
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
  const handleColseForm = () => {
    if (!displayEditingResourceForm) {
      prevCard();
    } else {
      setFormShown(null);
      setDisplayEditingResourceForm(null);
    }

  }
  const handleSaveNoteClick = (id) => {
    if (textAreaInput !== "") {
      const note = { content: textAreaInput, cardId: cardsOfDeck[currentIndex].id };
      if (id && displayEditingResourceForm == id) {
        dispatch(updateNote(id, note));
      } else {
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
    setCardsOfDeck(cards.filter((c) => c.deckId == id));
  }, [cards]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (addMenuRef.current && !addMenuRef.current.contains(event.target)) {
        setDisplayMenu(false); // Close the menu if the click is outside
      }
    };
    if (displayMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayMenu]);

  return (
    <DeckContainer>
      {deck &&
        <DeckTitleContainer>
          <SubTitle >{deck.name}</SubTitle>
          <StyledLink to={`../decks/`}>
            <Back $gray />
          </StyledLink>
        </DeckTitleContainer>}
      <>
        {cardsOfDeck.length == 0 && (
          <NewCardBttonContainer>
            <StyledButton $big onClick={() => setDisplayMenu(true)}>
              <Plus />

              <Info $centered>Add Card</Info>
            </StyledButton>
            {displayMenu && (
              <AddMenu ref={addMenuRef}>
                <StyledButton $wide onClick={() => handleAddNoteClick()}>
                  <Info $gray  >
                    New Note
                  </Info>
                </StyledButton >
                <StyledButton $wide onClick={() => handleAddVerseClick()}>
                  <Info $gray  >
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

                    <ActionButtonsContainer>
                      <StyledButton onClick={() => handleColseForm()}>
                        <Close $gray />
                      </StyledButton>
                      <StyledButton onClick={() => handleSaveNoteClick(displayEditingResourceForm)}>
                        <Save $gray />
                      </StyledButton>
                    </ActionButtonsContainer>
                  </StyledResource>
                )}
                {formShown && formShown === "Verse" && (
                  <StyledResource>
                    <FormTextArea
                      placeholder="Verse scripture"
                      value={textAreaInput}
                      onChange={(e) => setTextAreaInput(e.target.value)}
                    />
                    <FormInput $bold
                      placeholder="Verse reference"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                    />

                    <ActionButtonsContainer>
                      <StyledButton onClick={() => handleColseForm()}>
                        <Close $gray />
                      </StyledButton>
                      <StyledButton onClick={() => handleSaveVerseClick(displayEditingResourceForm)}>
                        <Save $gray />
                      </StyledButton>
                    </ActionButtonsContainer>
                  </StyledResource>

                )}

                {!formShown &&
                  notes.filter((note) => note.cardId == cardsOfDeck[currentIndex].id).map((note) => (

                    <StyledResource key={note.id}>
                      <StyledButton onClick={() => { setDisplayEditingResourceForm(note.id); setFormShown("Note"); setTextAreaInput(note.content); }}>
                        <Edit $gray />
                      </StyledButton>
                      <StyledResourceContent>
                        <Info $gray >
                          {note.content}
                        </Info>
                      </StyledResourceContent>


                    </StyledResource>
                  ))}
                {!formShown &&
                  verses.filter((verse) => verse.cardId == cardsOfDeck[currentIndex].id).map((verse) => (
                    <StyledResource key={verse.id}>
                      <StyledButton $right onClick={() => { setDisplayEditingResourceForm(verse.id); setFormShown("Verse"); setTextAreaInput(verse.content); setTextInput(verse.reference) }}>
                        <Edit $gray />
                      </StyledButton>
                      <StyledResourceContent>
                        <Info $gray $wide>
                          {verse.content}{" "}
                        </Info>
                        <Info $gray $bold $wide>
                          {verse.reference}
                        </Info>
                      </StyledResourceContent>


                    </StyledResource>
                  ))}
                {!formShown && (
                  <ActionButtonsContainer>
                    <StyledButton onClick={() => removeCard()}>
                      <Remove $color />
                    </StyledButton>



                    <StyledButton onClick={() => setDisplayMenu(true)}>
                      <Plus $color />
                    </StyledButton>


                    {displayMenu && (
                      <AddMenu $bottom ref={addMenuRef}>
                        <StyledButton $wide onClick={() => handleAddNoteClick()}>
                          <Info $gray $wide  >
                            New Note
                          </Info>
                        </StyledButton>
                        <StyledButton $wide onClick={() => handleAddVerseClick()}>
                          <Info $gray $wide >
                            New Verse
                          </Info>
                        </StyledButton>
                      </AddMenu>
                    )}
                  </ActionButtonsContainer>
                )}
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
