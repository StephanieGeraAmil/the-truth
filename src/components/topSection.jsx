import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDecksOfUser } from "../actions/deckActions.js";
import { Lie } from "./lie";

import styled from "styled-components";
import { Title, Info } from "./shared_styles/styled_text";
import { StyledLink } from "./shared_styles/styled_buttons";
import Deck from "../assets/deck.svg";
import bibleImg from "../assets/bible-unsplash.png";

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
  @media (max-width: 500px) {
    height: 90%;
    width:100%;
  }
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

  @media (max-width: 500px) {
    height: 85%;
    transform: translate(50%, -50%);
  }
`;

const Right = styled.div`
  z-index: 0;
  position: relative;
  height: 80%;
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
    height: 80%;
    min-height: 50vh;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1em;
  @media (max-width: 1000px) {
    height: 80%;
  }
  @media (max-width: 750px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;

const StyledSection = styled.div`
  width: 75%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 700px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    height: 110%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TopSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <StyledSection>
      <Left>
        {location.pathname !== "/decks" && (
          <StyledLink
            onClick={() => dispatch(getDecksOfUser("userLogged"))}
            to="/decks"
          >
            <img
              src={Deck}
              alt="deck_page"
              style={{ height: "max(2rem,2vw)" }}
            />
          </StyledLink>
        )}
        <div>
          <Title white>Do you know the truth?</Title>
          <Paragraphs>
            <Info white>Sometimes we create our own truth</Info>
            <Info white>Other times others create truth for us</Info>
            <Info white>
              There is a popular phrase going around “ Find your truth”
            </Info>
            <Info white>
              But there is not such thing as your truth, there is only one
              truth, God gave us the truth, in his word, in the Bible
            </Info>
            <Info white>
              Do you know the Bible, do you want to? At first we don’t know what
              we need to know from it, if we don’t have someone guiding us on
              our journey. That’s the reason behind this site... point you into
              the truth
            </Info>
          </Paragraphs>
        </div>
        <Lie />
      </Left>
      <Right>
        <GrayRectangle />
        <Img src={bibleImg} alt="bible_verse" />
      </Right>
    </StyledSection>
  );
};
