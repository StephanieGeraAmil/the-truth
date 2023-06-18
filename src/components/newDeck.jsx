import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";
import { clearFormPurpose } from "../actions/currentSelectionActions.js";

import styled, { css } from "styled-components";
import { FormTextArea } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";


import { PreviewDeck } from "./previewDeck";
import { Remove, Save } from "./shared_styles/styled_icons";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 4vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
export const NewDeck = () => {
  const dispatch = useDispatch();
  const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);

  const [deckName, setDeckName] = useState("");
  return (
    <PreviewDeck>
      <FormTextArea
        subtitle
        placeholder="Deck title"
        onChange={(e) => setDeckName(e.target.value)}
        value={deckName}
      ></FormTextArea>
      <ActionButtonsSection>
        <StyledButton onClick={() => dispatch(clearFormPurpose())}>
          <Remove $color />
        </StyledButton>
        <StyledButton
          onClick={() => {
            if (deckName !== "") {
              dispatch(createDeck(deckName));
              dispatch(clearFormPurpose());
            }
          }}
        >
          <Save $color />
        </StyledButton>
      </ActionButtonsSection>
    </PreviewDeck>
  );
};
