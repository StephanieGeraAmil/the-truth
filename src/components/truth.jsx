import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";

import styled from "styled-components";

import { StyledCard } from "./shared_styles/styled_cards";

const TruthContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  gap: 2.5vw;
  height: 25vh;
  margin: 3.5vh 0 0 3.5vh;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    height: 80vh;
    margin:auto;
    margin-top: 5vh;
    width:90%;

  }
`;

const TruthCard = styled(StyledCard)`
  box-shadow: 0.3vw 0.3vw 0.5vw 0.08vw #888;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border-radius: 2vw;
  height: 20vh;
  min-width: 40vh; 

  @media (max-width: 500px) {
    min-height: 35vh;
      width:90%;
        margin: auto;
  }

`;

export const Truth = () => {
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesRelated = useSelector(versesSelector);

  return (
    <TruthContainer>
      {versesRelated &&
        versesRelated.map((element) => (
          <TruthCard key={element.ref}>
            <Verse verse={element} />
          </TruthCard>
        ))}
      <>
            <TruthCard key={"2"}>
            </TruthCard>
            <TruthCard key={"3"}>
            </TruthCard>
            <TruthCard key={"4"}>
            </TruthCard>
            <TruthCard key={"5"}> 
            </TruthCard>
            <TruthCard key={"6"}>
            </TruthCard>
            <TruthCard key={"7"}>
            </TruthCard>
            <TruthCard key={"8"}>
            </TruthCard>
            <TruthCard key={"9"}>
            </TruthCard>
          </>
    </TruthContainer>
  );
};
