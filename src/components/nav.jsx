import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail } from "./../actions/userActions.js";
import { getDecksOfUser } from "./../actions/deckActions.js";
import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";
import { Login } from "./0auth/Login";
import { Logout } from "./0auth/Logout";
import { ColorBackground } from "styled-icons/fluentui-system-filled";
import { SubTitle, Info } from "./shared_styles/styled_text";


const NavContainer = styled.nav`
  width: 100vw;
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
  width: 100vw;
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

  useEffect(() => {
    if (user) { dispatch(getUserByEmail(user)) };
    if (user) { dispatch(getDecksOfUser(user)) };
  }, [isAuthenticated]);
 
  return (
    <NavContainer>

      {!isAuthenticated ? (<>
        <div></div>
        <Login />
      </>

      ) : (
        <>
          <div >

            <Info $xs>{user.email}</Info>

          </div>

          <ActionContainer>

            {location.pathname == '/' && (
              <StyledLink to="/decks">Decks</StyledLink>
            )}
            {location.pathname !== '/' && (
              <StyledLink to="/">Home</StyledLink>
            )}
            {/* {location.pathname !== '/search' && (
              <StyledLink to="/search">Search</StyledLink>
            )} */}
            <Logout />

          </ActionContainer>
        </>
      )}
    </NavContainer>
  );
};
