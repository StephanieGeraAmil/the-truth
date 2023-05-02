import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from "../actions/deckActions";
import { Link } from "react-router-dom";
import { clearFormPurpose } from "../actions/currentSelectionActions.js";

import styled, { css } from "styled-components";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

import { MdArrowBack, MdOutlineDone } from "react-icons/md";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 3vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
// const StyledLink = styled(Link)`
//   font-size: 2vh;
//   color: #6096ba;
//   margin: 0;
//   padding: 0;
// `;
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
        <StyledButton transparent onClick={() => dispatch(clearFormPurpose())}>
          <MdArrowBack style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
        <StyledButton
          transparent
          onClick={() => {
            dispatch(createDeck(deckName));
            dispatch(clearFormPurpose());
          }}
        >
          {/* <StyledLink   to={`/decks/`} onClick={()=> dispatch(createDeck({name:deckName, UserId:userLogged.id}))}></StyledLink> */}
          <MdOutlineDone style={{ color: "#6096BA", fontSize: "3vh" }} />
        </StyledButton>
      </ActionButtonsSection>
    </Form>
  );
};
