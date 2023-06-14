import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDecksOfUser } from "../actions/deckActions.js";
import { Lie } from "./lie";

import styled from "styled-components";
import { Title, Info } from "./shared_styles/styled_text";
import { StyledLink } from "./shared_styles/styled_buttons";
import Deck from "../assets/deck.svg";
// import bibleImg from "../assets/bible-unsplash.png";

const Paragraphs = styled.div``;
const Img = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 80%;
  aspect-ratio: 0.4;
  z-index: 2;
  margin: 0 auto;
  object-fit: cover;
  max-height: 70vh;
  max-width: 50vh;

`;
const GrayRectangle = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(60%, -55%);
  width: 80%;
  aspect-ratio: 0.4;
  z-index: 1;
  box-shadow: 2px 3px 16px #333;
  background-color: #8b8c89;
  max-height: 70vh;
  max-width: 50vh;

`;

const Right = styled.div`
  z-index: 0;
  position: relative;
  height: 80%;
  width: 50%;

`;
const Left = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
`;

const StyledSection = styled.div`
  width: 75%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

 
`;

export const TopSection = () => {
  const dispatch = useDispatch();
  return (
    <StyledSection>
        <Lie />
    </StyledSection>
  );
};
