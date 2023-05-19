import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Truth } from "./truth";

import styled from "styled-components";
import { SubTitle, Info } from "./shared_styles/styled_text";

import { FaSearch, FaPen } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";
import { TbCards } from "react-icons/tb";
const thickIcons = {
  color: "#274C77",
  fontSize: "max(1.5rem,1.8vw)",
  opacity: 1,
};
const thinIcons = {
  color: "#274C77",
  fontSize: "max(2rem,2.4vw)",
  opacity: 1,
};
const GrayCircle = styled.div`
  height: max(2.5rem,2.9vw);
  aspect-ratio: 1;
  opacity: 0.5;
  border-radius: 50%;
  position: relative;
  background-color: #8b8c89;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StepTitleSection = styled.div``;

const WhiteShape = styled.div`
  height: 100%;
  padding:10%;
  margin:auto;
  box-shadow: 2px 3px 16px #333;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: max(0.5rem, 1vw);
  @media (max-width: 650px) {
      padding:5%;
   width: 80%;
   min-height: 40vh;
  }
   @media (max-width: 550px) {
   min-height: 20vh;
  }
 
`;

const StepSection = styled.div`
  height: 90%;
  width: 95%;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
 gap: 3%;
  @media (min-width: 1000px) {
     width: 75%;
  }
   @media (max-width: 650px) {
      width: 90%;
      row-gap: 6%;
      grid-template-columns: repeat(2, 1fr);
  }
    @media (max-width: 550px) {    
     grid-template-columns: 1fr;
       row-gap: 5%;
  }
`;

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
    @media(min-height: 850px) {
     height: 50%;
  }
    @media (max-width: 1080px) and (min-height: 550px) {
     height: 105%;
  }
  @media (max-width: 650px) {
    height: 100%;
  }
  @media (max-width: 550px) {
      height: 180%;
  }
        

`;

export const BottomSection = () => {
  const dispatch = useDispatch();
  const currentThoughtSelected = (state) =>
    state.selected.thought ? state.selected.thought : null;
  const ThoughtSelected = useSelector(currentThoughtSelected);
  const show = ThoughtSelected ? true : false;

  return (
    <StyledSection>
      <StepSection>
        <WhiteShape>
          <GrayCircle>
            <FaSearch style={thickIcons} />
          </GrayCircle>
          <StepTitleSection>
            <SubTitle blue smaller>
              Search
            </SubTitle>
          </StepTitleSection>

          <Info>
            Introduce your thoughts, or related keywords, and read what God has
            to say about that
          </Info>
        </WhiteShape>
        <WhiteShape>
          <GrayCircle>
            <TbCards style={thinIcons} />
          </GrayCircle>
          <StepTitleSection>
            <SubTitle blue smaller>
              Create Study Decks
            </SubTitle>
          </StepTitleSection>
          <Info>
            You can create study decks for each truth you find, so you can visit
            them later
          </Info>
        </WhiteShape>
        <WhiteShape>
          <GrayCircle>
            <FaPen style={thickIcons} />
          </GrayCircle>
          <StepTitleSection>
            <SubTitle blue smaller>
              Add verses and notes
            </SubTitle>
          </StepTitleSection>

          <Info>
            Add notes and verses that help you focus on the truth
          </Info>
        </WhiteShape>
        <WhiteShape>
          <GrayCircle>
            <BiRepeat style={thinIcons} />
          </GrayCircle>
          <StepTitleSection>
            <SubTitle blue smaller>
              Study
            </SubTitle>
          </StepTitleSection>

          <Info>
            Go through the Decks as much as you can, untill you are able to know
            and understand the truth
          </Info>
        </WhiteShape>
      </StepSection>
      {show && <Truth />}
    </StyledSection>
  );
};
