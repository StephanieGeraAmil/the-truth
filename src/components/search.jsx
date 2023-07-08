import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecksOfUser, deleteDeck } from "../actions/deckActions.js";
import { getAllCardsOfUser } from "../actions/cardActions.js";
import { settingFormPurpose } from "../actions/currentSelectionActions.js";
import { NewDeck } from "./newDeck.jsx";
import { Lie } from "./lie";
import { Truth } from "./truth";
import { PreviewDeck } from "./previewDeck.jsx";
import styled from "styled-components";
import { SubTitle } from "./shared_styles/styled_text.js";
import { StyledLink, StyledButton } from "./shared_styles/styled_buttons.js";

import { TopSection } from "./topSection.jsx";
import { BottomSection } from "./bottomSection.jsx";



const SearchDiv = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction: column;
    justify-content: flex-start;
    padding-top:10%;
    gap:5%;
  align-items: center;
  background-image: radial-gradient(circle farthest-corner at  100% 100%  ,#000 0%,#15464C 70%, #33ABB9 100% );
  @media (max-width: 500px) {
    padding-top:15%;
  }
`;
export const Search = () => {

  return (
    <SearchDiv>
           <Lie />
   <Truth />
    </SearchDiv>
  );
};
