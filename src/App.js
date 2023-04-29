import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllThoughts } from "./actions/thoughtActions";
import { getDecksOfUser } from "./actions/deckActions.js";
import { Lie } from "./components/lie";
import { Truth } from "./components/truth";

import styled from "styled-components";
import { Title, SubTitle, Info } from "./components/shared_styles/styled_text";
import { StyledLink } from "./components/shared_styles/styled_buttons";
import {
  Fade,
  Appear,
  AppearAndFade,
} from "./components/shared_styles/styled_animations";
import Deck from "./assets/deck.png";
import confusedMan from "./assets/confusedMan.png";

const Left = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3vh;
  @media (max-width: 500px) {
    height: 95vh;
    width: 90%;
    /* justify-content: space-around; */
  }
`;
const GrayShape= styled.div`
  height: 80vh;
    width: 55vh;
   box-shadow:  2px 3px 16px #333;
 position: relative;
    background-color: #8b8c89;
`;
const Img = styled.img`
     position: absolute;
    left:-8vh;
    top:8vh;
z-index:2;
   height: 80vh;

`;

const Right = styled.div`

  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
      justify-content: center;
    margin-top: 6vh;
    width: 100%;
  }
`;
const TruthContainer = styled.div`
  background: #8b8c89;
  width: 100%;
  z-index: 5;
  box-shadow: 6px 5px 16px #000;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TopSection = styled.div`
  padding-top: 5%;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 10vh;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
      gap: 10vh;
  }
`;

function App() {
  const dispatch = useDispatch();
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesRelated = useSelector(versesSelector);
  const location = useLocation();

  useEffect(() => {
    console.log("The backend is not yet deployed");
    dispatch(getAllThoughts());
  }, []);

  return (
    <div>
      <TopSection>
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
              But there is not such thing as your truth, there is only one
              truth, God gave us the truth, in his word, in the Bible
            </Info>
            <Info white>
              Do you know the Bible, do you want to? At first we don’t know what
              we need to know from it, if we don’t have someone guiding us on
              our journey. That’s the reason behind this site... point you into
              the truth
            </Info>
          </div>
          <Lie />
        </Left>
        <Right>
         
          <GrayShape >
             <Img src={confusedMan} alt="confused_man" />
            </GrayShape>
        </Right>
      </TopSection>
      {versesRelated.length > 0 && (
        <TruthContainer>
          <Truth />
        </TruthContainer>
      )}
    </div>
  );
}

export default App;
