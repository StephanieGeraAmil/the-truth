import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useAuth0 } from "@auth0/auth0-react";
// import { getUserByEmail } from "./../actions/userActions.js";
// import {FaSearch,FaClone,FaCaretLeft,FaPen} from "react-icons/fa";
// import { Login } from "./login";
// import { Logout } from "./logout";
import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";


const NavContainer = styled.nav`
  width: 100%;
  background: rgba(1, 1, 1, 0.09);
  backdrop-filter: blur(4.5px);
  color: #fff;
  position: fixed;
  top:0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap:2%;
  padding: 1.5%;
  padding-right: 5%;
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
      {location.pathname !== "/decks" && (
        <StyledLink to="/decks">
          Decks
        </StyledLink>
      )}
      {location.pathname !== "/" && (
        <StyledLink to="/">
          Home
        </StyledLink>
      )}
      {location.pathname !== "/search" && (
        <StyledLink to="/search">Search</StyledLink>
      )}
    </NavContainer>
  );
};
