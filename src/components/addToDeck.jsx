import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVerseToCreatedCardOnDeck } from "../actions/deckActions";
import { settingFormPurpose } from "../actions/currentSelectionActions";

import { NewDeck } from "./newDeck";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

const ActionButtonsSection = styled.div`
  height: 3em;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
const StyledCheckboxLabel = styled.label`
  font-size: 2vh;
`;
const StyledCheckbox = styled.input`
  height: 2vh;
`;
const ListOfDecks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
`;
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const AddToDeckForm = styled(Form)`
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 5;
  width:80%;
  height:75%;

`;
export const AddToDeck = ({
  verse,
  setDisplayAddToDeckForm,
  setVerseSelected,
}) => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const cardSelector = (state) => (state.cards ? state.cards : null);
  const cards = useSelector(cardSelector);
  const cardsWithVerse = cards
    .filter((c) => c.resources.filter((r) => r.id == verse.id).length > 0)
    .map((c) => c.id);
  let decksWithVerseIds = [];
  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);

  if (cardsWithVerse.length > 0) {
    const decksWithVerse = cardsWithVerse.reduce(
      (acc, cwv) => acc.concat(decks.filter((d) => d.cards.indexOf(cwv) > -1)),
      []
    );
    decksWithVerseIds = decksWithVerse.map((d) => d.id);
  }

  const [decksSelected, setDecksSelected] = useState([]);

  const setSelectedOnDecks = (decks) => {
    setDecksSelected(
      decks
        .filter((d) => decksWithVerseIds.indexOf(d.id) < 0)
        .map((d) => ({ ...d, selected: false }))
    );
  };

  const handleAddToDeck = async () => {
    setDisplayAddToDeckForm(false);
    decksSelected.map(async (deck) => {
      if (deck.selected) {
        dispatch(addVerseToCreatedCardOnDeck(verse, deck));
      }
    });
    setVerseSelected(null);
  };

  useEffect(() => {
    if (decks.length > 0) {
      setSelectedOnDecks(decks);
    }
  }, [decks]);

  return (
    <AddToDeckForm>
      {formSelected == "New Deck" && <NewDeck />}
      <ListOfDecks>
        {decks.length > 0 &&
          decks.map((element) => {
            return decksWithVerseIds.indexOf(element.id) > -1 ? (
              <CheckboxContainer key={element.name}>
                <StyledCheckbox
                  disabled={true}
                  checked={true}
                  type="checkbox"
                  id={element.name}
                  name={element.name}
                />
                <StyledCheckboxLabel htmlFor={element.name}>
                  {element.name}
                </StyledCheckboxLabel>
              </CheckboxContainer>
            ) : (
              <CheckboxContainer key={element.name}>
                <StyledCheckbox
                  type="checkbox"
                  id={element.name}
                  name={element.name}
                  value={
                    decksSelected.length > 0 &&
                    decksSelected.find((d) => d.name === element.name) &&
                    decksSelected.find((d) => d.name === element.name).selected
                  }
                  onChange={(e) => {
                    if (decksSelected) {
                      setDecksSelected(
                        decksSelected.map((d) =>
                          d.name === element.name
                            ? { ...d, selected: e.target.checked }
                            : d
                        )
                      );
                    }
                  }}
                />
                <StyledCheckboxLabel htmlFor={element.name}>
                  {element.name}
                </StyledCheckboxLabel>
              </CheckboxContainer>
            );
          })}
      </ListOfDecks>
      <ActionButtonsSection>
        <StyledButton
          transparent
          onClick={() => {
            setDisplayAddToDeckForm(false);
            setVerseSelected(null);
          }}
        >
          <MdArrowBack style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
        <StyledButton
          transparent
          onClick={() => dispatch(settingFormPurpose("New Deck"))}
        >
          <FiPlusCircle style={{ color: "#8B8C89", fontSize: "2vh" }} />
        </StyledButton>
        <StyledButton
          transparent
          onClick={() => {
            handleAddToDeck();
          }}
        >
          <MdOutlineDone style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
      </ActionButtonsSection>
    </AddToDeckForm>
  );
};
