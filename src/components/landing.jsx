import React from "react";
import styled, { keyframes } from "styled-components";
import { Lie } from "./lie";
import { Truth } from "./truth";
import girlSadImage from "../assets/sad.png";
import girlHappyImage from "../assets/happy.png";
import uglyThought from "../assets/ugly.png";
import aloneThought from "../assets/alone.png";
import beautifulResponse from "../assets/beautiful.png";
import withGodResponse from "../assets/withgod.png";
import cloud from "../assets/cloud.png";

const fade = keyframes`
  from {
 opacity: 1; 
  }

  to {
 opacity: 0; 
  }
`;
const appear = keyframes`
  from {
 opacity: 0; 
  }

  to {
 opacity: 1; 
  }
`;
const appearAndFade = keyframes`
  0% {
 opacity: 0; 
  }

  50% {
 opacity: 1; 
  }
    100% {
 opacity: 0; 
  }
`;
const Left = styled.div`
  width: 50%;
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Wrapper = styled.div`
  position: relative;
  width: 45%;
  height:60vw;

  display: flex;
flex-direction:column;
  justify-content: center;
  align-items:center;

`;
const Section = styled.div`
  background: #201352;
  height: 60vw;
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  border-radius: 0 0 2vw 2vw;
  box-shadow:  5px 3px 6px #333;
`;

const GirlSadImg = styled.img`
position:absolute;
  z-index: 1;
  width: 25vw;
  height: 35vw;
  animation: ${fade} 1s ease-in forwards 9s;

`;
const GirlHappyImg = styled.img`
 opacity: 0; 
  z-index: 1;
  width: 31vw;
  height: 33vw;
    animation: ${appear} 1s ease-in  forwards 9s;

`;

const Dialog = styled.img`
  &.ugly {
    height: 8vw;
    width: 8vw;
      top: 8vw;
    right: 5vw;
    opacity: 0; 
      animation: ${appearAndFade} 4s linear forwards 1s;
  
  }
  &.beautiful {
      left: 3vw;
    height: 10vw;
    width: 15vw;
     top: 6vw;
      opacity: 0; 
        animation: ${appear} 1s linear forwards 7s;
      
  }
 &.withGod  {
    height: 10vw;
    width: 10vw;
        right: 5vw;
    top: 9vw;
     opacity: 0; 
      animation: ${appear} 1s linear forwards 8s;
   
  }
   &.alone  {
  
      height: 10vw;
    width: 10vw;
        right: 5vw;
    top: 10vw;
    left: 5vw;
     opacity: 0; 
       animation: ${appearAndFade} 4s linear forwards 2s;

  }
  
  position: absolute;
  z-index: 10;
 

`;

const Title = styled.h1`
  font-size: 4vw;
  font-weight: 900;
  margin: 1vw;
  color: #fff;
`;
const SubTitle = styled.h3`
  font-size: 1.8vw;
  font-weight: 500;
  margin: 0.8vw;
  color: #fff;
`;
const Info = styled.p`
  font-size: 1.2vw;

  font-weight: 100;
  margin: 0.5vw;
  color: #fff;
`;

export const Landing = () => {
  return (
    <>
      <Section>
        <Left>
          <Title>Can you identify your thoughts??</Title>
          <SubTitle>What would God say about them?</SubTitle>
          <Info>
            Sometimes the enemy lies to us, and we start to believe those lies.
            In order to identify the lies we need to know the truth.
          </Info>
          <Info>
            Do you know where to find the truth? In the word of God, the Bible.
          </Info>
          <Info>
            This website is meant to be a tool to find and learn the truth
          </Info>
          <Info>
            Just type in the thoughts you are battling with and find verses
            related to them
          </Info>
          <Lie />
        </Left>
        <Wrapper>
         
          <GirlSadImg src={girlSadImage} />
          <Dialog src={uglyThought}  className="ugly"/>
          <Dialog src={aloneThought} className="alone"/>
          <Dialog src={beautifulResponse} className="beautiful"/>
          <Dialog src={withGodResponse} className="withGod"/>
          <GirlHappyImg src={girlHappyImage} />
         
        </Wrapper>
      </Section>
      <Truth />
    </>
  );
};
