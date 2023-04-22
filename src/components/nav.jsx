import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail } from "./../actions/userActions.js";
import { getDecksOfUser } from "./../actions/deckActions.js";

import { Login } from "./login";
import { Logout } from "./logout";

import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";

import Deck from "../assets/deck.png";

const NavContainer = styled.nav`
  height: 7vh;
  width: 100%;
  background-color: #201352;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1vh;
  padding-right: 5%;
  gap: 10px;
`;

export const Nav = () => {
  const dispatch = useDispatch();
  // const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
  //   useAuth0();
  // const userLoggedSelector = (state) => (state.user ? state.user : null);
  // const userLogged = useSelector(userLoggedSelector);

  // useEffect(() => {
  //   if (user) dispatch(getUserByEmail(user));
  // }, [isAuthenticated]);
  return (
    <NavContainer>
      <StyledLink
        onClick={() => dispatch(getDecksOfUser("userLogged"))}
        to="/decks"
      >
        <img src={Deck} alt="deck_page" />
      </StyledLink>
    </NavContainer>
  );
};
