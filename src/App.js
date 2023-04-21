import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThoughts } from "./actions/thoughtActions";

import { Lie } from "./components/lie";
import { Truth } from "./components/truth";

import styled from "styled-components";
import { Title, SubTitle, Info } from "./components/shared_styles/styled_text";
import {
  Fade,
  Appear,
  AppearAndFade,
} from "./components/shared_styles/styled_animations";
import girlSadImage from "./assets/sad.png";
import girlHappyImage from "./assets/happy.png";
import uglyThought from "./assets/ugly.png";
import aloneThought from "./assets/alone.png";
import beautifulResponse from "./assets/beautiful.png";
import withGodResponse from "./assets/withgod.png";


const GirlSadImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 18vw;
  height: 28vw;
  animation: ${Fade} 1s ease-in forwards 9s;
  @media (max-width: 500px) {
    width: 55vw;
    height: 80vw;
  }
`;
const GirlHappyImg = styled.img`
  opacity: 0;
  z-index: 1;
  width: 24vw;
  height: 26vw;
  animation: ${Appear} 1s ease-in forwards 9s;
  @media (max-width: 500px) {
    width: 70vw;
    height: 78vw;
  }
`;

const Dialog = styled.img`
  &.ugly {
    height: 8vw;
    width: 8vw;
    top: 3vw;
    right: 5vw;
    opacity: 0;
    animation: ${AppearAndFade} 4s linear forwards 1s;
    @media (max-width: 500px) {
      width: 28vw;
      height: 28vw;
    }
  }
  &.beautiful {
    left: 3vw;
    height: 6vw;
    width: 10vw;
    top: 0;
    opacity: 0;
    animation: ${Appear} 1s linear forwards 7s;
    @media (max-width: 500px) {
      width: 35vw;
      height: 25vw;
    }
  }
  &.withGod {
    height: 8vw;
    width: 8vw;
    right: 4vw;
    top: 0;
    opacity: 0;
    animation: ${Appear} 1s linear forwards 8s;
    @media (max-width: 500px) {
      width: 28vw;
      height: 26vw;
    }
  }
  &.alone {
    height: 7vw;
    width: 8vw;
    right: 5vw;
    top: 2vw;
    left: 5vw;
    opacity: 0;
    animation: ${AppearAndFade} 4s linear forwards 2s;
    @media (max-width: 500px) {
      width: 28vw;
      height: 24vw;
    }
  }
  position: absolute;
  z-index: 10;
`;

const Paragraphs = styled.div`
  margin: 0;
  padding: 0;
  height: 35%;
  @media (max-width: 500px) {
    height: 30vh;
  }
`;
const Left = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    height: 95vh;
    width: 90%;
    justify-content: space-around;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    margin-top: 6vh;
    height: 100vh;
    width: 100%;
  }
`;
const Section = styled.div`
  background: #201352;
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 2vw 2vw;
  box-shadow: 5px 3px 6px #333;
  gap: 3vh;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 210vh;
  }
  @media (min-width: 850px) {
    height: 70vh;
  }
`;

const AppContainer = styled.div`
  color: "#433e3e";
  background: #d9d9d9;
  height: 100vh;
  @media (max-width: 500px) {
    height: 300vh;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("The backend is not yet deployed");
    dispatch(getAllThoughts());
  }, []);

  return (
    <AppContainer>
      <Section>
        <Left>
          <Title>Can you identify your thoughts??</Title>
          <SubTitle>What would God say about them?</SubTitle>
          <Paragraphs>
            <Info>
              Sometimes the enemy lies to us, and we start to believe those
              lies.
            </Info>
            <Info>
              The only way to spot a lie is to know the truth, Do you know where
              to find the truth? In the word of God, the Bible.
            </Info>
            <Info>
              This website is meant to be a tool to find and learn the truth
            </Info>
            <Info>
              Just type in the thoughts you are battling with and find verses
              related to them. You can create your own study decks to help you
              remember them.
            </Info>
          </Paragraphs>
          <Lie />
        </Left>
        <Wrapper>
          <GirlSadImg src={girlSadImage} />
          <Dialog src={uglyThought} className="ugly" />
          <Dialog src={aloneThought} className="alone" />
          <Dialog src={beautifulResponse} className="beautiful" />
          <Dialog src={withGodResponse} className="withGod" />
          <GirlHappyImg src={girlHappyImage} />
        </Wrapper>
      </Section>
      <Truth />
    </AppContainer>
  );
}

export default App;
