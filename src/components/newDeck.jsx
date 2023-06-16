import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";
import { Link } from "react-router-dom";
import { clearFormPurpose } from "../actions/currentSelectionActions.js";

import styled, { css } from "styled-components";
import { Form, FormInput ,FormTextArea} from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

import { MdDelete, MdOutlineDone } from "react-icons/md";
import { PreviewDeck } from "./previewDeck";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 4vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
// const NewDeckForm = styled(Form)`
//   position: absolute;
//   z-index: 10;
//   width: 90%;
//   height: 80%;
//   max-width: 40vh;
//   max-height: 40vh;
//   top: 60%;
//   left: 50%;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;
export const NewDeck = () => {
  const dispatch = useDispatch();
  const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);

  const [deckName, setDeckName] = useState("");
  return (
    <PreviewDeck>
      <FormTextArea subtitle

        placeholder="Deck title"
        onChange={(e) => setDeckName(e.target.value)}
        value={deckName}
      ></FormTextArea>
      <ActionButtonsSection>
        <StyledButton transparent onClick={() => dispatch(clearFormPurpose())}>
          <MdDelete style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
        <StyledButton
          transparent
          onClick={() => {
            if (deckName != "") {
              dispatch(createDeck(deckName));
              dispatch(clearFormPurpose());
            }
          }}
        >
          <MdOutlineDone style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
      </ActionButtonsSection>
    </PreviewDeck>
    
  );
};
