import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import User from "../assets/user-white.svg";
import Deck from "../assets/deck-white.svg";
import Note from "../assets/notes-white.svg";
import Search from "../assets/search-white.svg";
import { Login } from "./login";
import { Logout } from "./logout";
import { getUserByEmail } from "./../actions/userActions.js";
import { getDecksOfUser } from "./../actions/deckActions.js";

import styled from "styled-components";
import { StyledLink } from "./shared_styles/styled_buttons";
const NavContainer = styled.nav`
  position: absolute;
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  z-index: 10;
  &:after {
    background-color: #433e3e;
    height: 150px;
    width: 50px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    content: "";
    border-radius: 0 10px 10px 0;
  }
  &:hover {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 600;
    transition-timing-function: ease-in-out;
  }
`;
// const StyledLink = styled(Link)`
//   border: 0;
// background-color: #433e3e;
// display: flex;
// justify-content: center;
// color: fff;
//   margin: 5px;
//   z-index: 10;
//   `;

export const Nav = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const userLoggedSelector = (state) => (state.user ? state.user : null);
  const userLogged = useSelector(userLoggedSelector);

  useEffect(() => {
    if (user) dispatch(getUserByEmail(user));
  }, [isAuthenticated]);
  return (
    <NavContainer>
      {!isAuthenticated ? (
        // <button>
        //   <img src={User} alt="user_page" />
        // </button>
        <Login />
      ) : (
        <>
          <Logout />
          <StyledLink
            onClick={() => dispatch(getDecksOfUser(userLogged))}
            to="/decks"
          >
            <img src={Deck} alt="deck_page" />
          </StyledLink>

          {/* <button>
            <img src={Note} alt="add_note" />
          </button> */}
        </>
      )}
      <StyledLink to="/">
        <img src={Search} alt="look_for_a_new_turth" />
      </StyledLink>
    </NavContainer>
  );
};
