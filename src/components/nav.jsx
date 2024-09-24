import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail } from "./../actions/userActions.js";
import {getDecksOfUser} from "./../actions/deckActions.js";
// import { Login } from "./login";
// import { Logout } from "./logout";
import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";
import { Login } from "./0auth/Login";
import { Logout } from "./0auth/Logout";
import { ColorBackground } from "styled-icons/fluentui-system-filled";


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
  justify-content: space-between;
  gap:2%;
  padding: 1.5%;
  padding-right: 5%;
 
`;
const ActionContainer = styled.nav`
  width: 100%;
  background: rgba(1, 1, 1, 0.09);
  backdrop-filter: blur(4.5px);
  color: #fff;
  position: fixed;
  top:0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  gap:2%;
  padding: 1.5%;
  padding-right: 5%;
  
`;


export const Nav = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const location = useLocation();

  // const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
  //   useAuth0();
  // const userLoggedSelector = (state) => (state.user ? state.user : null);
  // const userLogged = useSelector(userLoggedSelector);

  useEffect(() => {
   if (user) dispatch(getUserByEmail(user));
   if (user) dispatch(getDecksOfUser(user));
  // if (user) console.log(user.email);
  }, [isAuthenticated]);

  return (
    <NavContainer>

      {!isAuthenticated ? (
        <Login />
      ) : (
        <>
          <div >

            <label>{user.email}</label>

          </div>

          <ActionContainer>

            {location.pathname !== '/decks' && (
              <StyledLink to="/decks">Decks</StyledLink>
            )}
            {location.pathname !== '/' && (
              <StyledLink to="/">Home</StyledLink>
            )}
            {location.pathname !== '/search' && (
              <StyledLink to="/search">Search</StyledLink>
            )}
            <Logout />

          </ActionContainer>
        </>
      )}
    </NavContainer>
  );
};
