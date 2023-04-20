import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllThoughts } from "./actions/thoughtActions";

import { Lie } from "./components/lie";
import { Truth } from "./components/truth";

import styled, { ThemeProvider, keyframes } from "styled-components";
import { Title ,SubTitle,Info} from "./components/shared_styles/styled_text";

import girlSadImage from "./assets/sad.png";
import girlHappyImage from "./assets/happy.png";
import uglyThought from "./assets/ugly.png";
import aloneThought from "./assets/alone.png";
import beautifulResponse from "./assets/beautiful.png";
import withGodResponse from "./assets/withgod.png";



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

const GirlSadImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 18vw;
  height: 28vw;
  animation: ${fade} 1s ease-in forwards 9s;
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
  animation: ${appear} 1s ease-in forwards 9s;
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
    animation: ${appearAndFade} 4s linear forwards 1s;
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
    animation: ${appear} 1s linear forwards 7s;
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
    animation: ${appear} 1s linear forwards 8s;
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
    animation: ${appearAndFade} 4s linear forwards 2s;
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
  gap:3vh;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 210vh;
  }
  @media (min-width: 850px) {
    height: 70vh;
  }
`;

const theme = {
  clr: "#433e3e",
};
const AppContainer = styled.div`
  color: ${(props) => props.theme.clr};
  background: #d9d9d9;
    height:100vh;
  @media (max-width: 500px) {
    height:300vh;
  }
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("The backend is not yet deployed");
    localStorage.setItem(
      "ugly",
      JSON.stringify({
        ref: "psalms 139:14",
        verse:
          "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
      })
    );
    localStorage.setItem(
      "fear",
      JSON.stringify({
        ref: "philippians 4:6-7",
        verse:
          "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus..",
      })
    );
    localStorage.setItem(
      "uncapable",
      JSON.stringify({
        ref: "philippians 4:13",
        verse: "I can do all things through Christ which strengtheneth me.",
      })
    );
    localStorage.setItem(
      "not enough",
      JSON.stringify({
        ref: "2 peter 1:3",
        verse:
          "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.",
      })
    );
    localStorage.setItem(
      "lazy",
      JSON.stringify({
        ref: "galatians 6:7-8",
        verse:
          "Do not be fooled. You cannot fool God. A man will get back whatever he plants! 8 If a man does things to please his sinful old self, his soul will be lost. If a man does things to please the Holy Spirit, he will have life that lasts forever.",
      })
    );
    localStorage.setItem(
      "unsure",
      JSON.stringify({
        ref: "proverbs 3:5-6",
        verse:
          "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
      })
    );
    dispatch(getAllThoughts());
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
