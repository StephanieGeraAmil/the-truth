import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
const AddToDeckForm = styled(Form)`
  top: 35vh;
  z-index: 10;

`;
const ActionButtonsSection = styled.div`
  position: absolute;
  bottom: 2vh;
  left: 0;
  height: 3vh;
  width: 95%;
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
  flex-wrap:wrap
`;
const CheckboxContainer = styled.div``;
export const AddToDeck = ({ verse, setDisplayForm, setVerseSelected }) => {
  const dispatch = useDispatch();
  const deckSelector = (state) => (state.decks ? state.decks : null);
  const decks = useSelector(deckSelector);
  const [decksSelected, setDecksSelected] = useState(
    decks.map((d) => ({ ...d, selected: false }))
  );

  return (
    <AddToDeckForm>
      <ListOfDecks>
        {decksSelected.length > 0 &&
          decksSelected.map((element) => (
            <CheckboxContainer key={element.name}>
              <StyledCheckbox
                type="checkbox"
                id={element.name}
                name={element.name}
                value={
                  decksSelected.find((d) => d.name === element.name).selected
                }
                onChange={(e) => {
                  setDecksSelected(
                    decksSelected.map((d) =>
                      d.name === element.name
                        ? { ...d, selected: e.target.checked }
                        : d
                    )
                  );
                }}
              />
              <StyledCheckboxLabel htmlFor={element.name}>
                {element.name}
              </StyledCheckboxLabel>
            </CheckboxContainer>
          ))}
      </ListOfDecks>
      <ActionButtonsSection>
        <StyledButton
          transparent
          onClick={() => {
            setDisplayForm(false);
            setVerseSelected(null);
          }}
        >
          <MdArrowBack style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
        <StyledButton transparent onClick={() => {}}>
          <FiPlusCircle style={{ color: "#6096BA", fontSize: "2vh" }} />{" "}
        </StyledButton>
        <StyledButton
          transparent
          onClick={() => {
            console.log(decksSelected);
            setDisplayForm(false);
            setVerseSelected(null);
          }}
        >
          <MdOutlineDone style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
      </ActionButtonsSection>
    </AddToDeckForm>
  );
};