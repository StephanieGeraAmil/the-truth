import React, { useEffect ,useState} from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail } from "./../actions/userActions.js";
import { getDecksOfUser } from "./../actions/deckActions.js";
import {FaSearch,FaClone,FaCaretLeft,FaPen} from "react-icons/fa";
import { Login } from "./login";
import { Logout } from "./logout";

import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";

import Deck from "../assets/deck.svg";

const NavContainer = styled.nav`
  height: 7vh;
  width: 100%;
  background-color: #274C77;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 3vh;
  padding-right: 5%;
  gap: 2vw;
`;

export const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
  //   useAuth0();
  // const userLoggedSelector = (state) => (state.user ? state.user : null);
  // const userLogged = useSelector(userLoggedSelector);

  // useEffect(() => {
  //   if (user) dispatch(getUserByEmail(user));
  // }, [isAuthenticated]);

  return (
    <NavContainer>
     {location.pathname!=="/decks"&& <StyledLink
        onClick={() => dispatch(getDecksOfUser("userLogged"))}
        to="/decks"
        
      >
        <img src={Deck} alt="deck_page" style={{ color:"#8B8C89",height:  "4vh"}} />
      </StyledLink>}
      {location.pathname!=="/"&& <StyledLink
        onClick={() => dispatch(getDecksOfUser("userLogged"))}
        to="/"
      >
        <FaSearch style={{color: '#8B8C89', fontSize: "3.5vh" }}/>
      </StyledLink>}
    </NavContainer>
  );
};
