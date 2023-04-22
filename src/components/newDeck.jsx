import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";
import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 3vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
const StyledLink = styled(Link)`
  font-size: 2vh;
  color: "#433e3e";
  margin:0;
  padding:0;

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
        <StyledLink to={`../decks`}>close</StyledLink>
        <StyledLink
          to={`../decks`}
          onClick={() => dispatch(createDeck(deckName))}
        >
          {/* <StyledLink   to={`/decks/`} onClick={()=> dispatch(createDeck({name:deckName, UserId:userLogged.id}))}></StyledLink> */}
          save
        </StyledLink>
      </ActionButtonsSection>
    </Form>
  );
};
