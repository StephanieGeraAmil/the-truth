import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "./actions/tagActions";
import { Lie } from "./components/lie";
import { Truth } from "./components/truth";
import styled, { ThemeProvider, keyframes } from "styled-components";
import girlSadImage from "./assets/sad.png";
import girlHappyImage from "./assets/happy.png";
import uglyThought from "./assets/ugly.png";
import aloneThought from "./assets/alone.png";
import beautifulResponse from "./assets/beautiful.png";
import withGodResponse from "./assets/withgod.png";
import cloud from "./assets/cloud.png";

const fade = keyframes`
  from {
      opacity: 1; 
  }to {
      opacity: 0; 
  }
`;
const appear = keyframes`
  from {
      opacity: 0; 
  }to {
      opacity: 1; 
  }
`;
const appearAndFade = keyframes`
  0% {
      opacity: 0; 
  }50% {
      opacity: 1; 
  }100% {
      opacity: 0; 
  }
`;
const Left = styled.div`
  width: 40%;
  height: 80%;
  max-height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Paragraphs = styled.div`
  margin: 0;
  padding: 0;
  height: 10vw;
`;
const Wrapper = styled.div`
  position: relative;
  max-height: 40vw;
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  background: #201352;
  height: 190vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 2vw 2vw;
  box-shadow: 5px 3px 6px #333;
`;

const GirlSadImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 18vw;
  height: 28vw;
  animation: ${fade} 1s ease-in forwards 9s;
`;
const GirlHappyImg = styled.img`
  opacity: 0;
  z-index: 1;
  width: 24vw;
  height: 26vw;
  animation: ${appear} 1s ease-in forwards 9s;
`;

const Dialog = styled.img`
  &.ugly {
    height: 8vw;
    width: 8vw;
    top: 3vw;
    right: 5vw;
    opacity: 0;
    animation: ${appearAndFade} 4s linear forwards 1s;
  }
  &.beautiful {
    left: 3vw;
    height: 6vw;
    width: 10vw;
    top: 0;
    opacity: 0;
    animation: ${appear} 1s linear forwards 7s;
  }
  &.withGod {
    height: 8vw;
    width: 8vw;
    right: 4vw;
    top: 0;
    opacity: 0;
    animation: ${appear} 1s linear forwards 8s;
  }
  &.alone {
    height: 7vw;
    width: 8vw;
    right: 5vw;
    top: 2vw;
    left: 5vw;
    opacity: 0;
    animation: ${appearAndFade} 4s linear forwards 2s;
  }
  position: absolute;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 3.5vw;
  font-weight: 900;
  height: 10vw;
  margin: 1vw;
  color: #fff;
`;
const SubTitle = styled.h3`
  font-size: 1.5vw;
  font-weight: 500;
  height: 2vw;
  margin: 0.8vw;
  color: #fff;
`;
const Info = styled.p`
  font-size: 0.9vw;
  height: 2.2vw;
  line-height: 1.2em;
  font-weight: 100;
  margin: 0;
  padding-left: 0.5vw;
  color: #fff;
`;

const theme = {
  clr: "#433e3e",
  bg: "#D9D9D9",
  df_font_size: "15px",
};
const AppContainer = styled.div`
  height: 100%;
  color: ${(props) => props.theme.clr};
  font-size: ${(props) => props.theme.df_font_size};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTags());
  }, []);

  return (
    <ThemeProvider theme={theme}>
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
                The only way to spot a lie is to know the truth, Do you know
                where to find the truth? In the word of God, the Bible.
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
    </ThemeProvider>
  );
}

export default App;
