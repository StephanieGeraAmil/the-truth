import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { StyledLink } from "./shared_styles/styled_buttons";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 5vh;
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
    <Form>
      <FormInput
        placeholder="Add the deck title here"
        onChange={(e) => setDeckName(e.target.value)}
        value={deckName}
      ></FormInput>
      <ActionButtonsSection>
        <StyledLink to={`../the-truth/decks`}>close</StyledLink>
        <StyledLink
          to={`../the-truth/decks`}
          onClick={() => dispatch(createDeck(deckName))}
        >
          {/* <StyledLink   to={`/decks/`} onClick={()=> dispatch(createDeck({name:deckName, UserId:userLogged.id}))}></StyledLink> */}
          save
        </StyledLink>
      </ActionButtonsSection>
    </Form>
  );
};
