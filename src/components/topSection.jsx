import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getDecksOfUser } from "../actions/deckActions.js";
import { Lie } from "./lie";

import styled from "styled-components";
import { Title, Info } from "./shared_styles/styled_text";
import { StyledLink } from "./shared_styles/styled_buttons";
import Deck from "../assets/deck.svg";
import confusedMan from "../assets/confusedMan.png";

const Img = styled.img`
  position: absolute;
  left: -8vh;
  top: 8vh;
  z-index: 2;
  height: 80vh;
`;
const GrayRectangle = styled.div`
  height: 80vh;

  width: 55vh;
  min-width: 300px;
  box-shadow: 2px 3px 16px #333;
  position: relative;
  background-color: #8b8c89;
`;

const Right = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 650px) {
    justify-content: center;
    width: 50vh;
    height: 95vh;
    margin: auto;
  }
  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;
  @media (max-width: 650px) {
    height: 95vh;
    width: 90%;
  }
`;

const StyledSection = styled.div`
  padding-top: 5%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10vh;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
    width: 80%;
    height: 180vh;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (min-width: 900px) {
    width: 90%;
  }
  @media (min-width: 1500px) {
    width: 70%;
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
            <img src={Deck} alt="deck_page" style={{ height: "4vh" }} />
          </StyledLink>
        )}
        <Title white>Do you know the truth?</Title>
        <div>
          <Info white>Sometimes we create our own truth</Info>
          <Info white>Other times others create truth for us</Info>
          <Info white>
            There is a popular phrase going around “ Find your truth”
          </Info>
          <Info white>
            But there is not such thing as your truth, there is only one truth,
            God gave us the truth, in his word, in the Bible
          </Info>
          <Info white>
            Do you know the Bible, do you want to? At first we don’t know what
            we need to know from it, if we don’t have someone guiding us on our
            journey. That’s the reason behind this site... point you into the
            truth
          </Info>
        </div>
        <Lie />
      </Left>
      <Right>
        <GrayRectangle>
          <Img src={confusedMan} alt="confused_man" />
        </GrayRectangle>
      </Right>
    </StyledSection>
  );
};
