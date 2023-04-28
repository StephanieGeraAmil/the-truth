import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";
import styled from "styled-components";
import { StyledCard } from "./shared_styles/styled_cards";
import { RiAddBoxFill } from "react-icons/ri";
export const StyledButton = styled.button`
position:absolute;
  top:2vh ;
  right:1vh;
  z-index: 0;
  border: 0;
  background: transparent;
  align-self: flex-end;
`;

const TruthCard = styled(StyledCard)`
position:relative;
  box-shadow: 0.3vw 0.3vw 0.5vw 0.08vw #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  height: 20vh;
  min-width: 40vh;
  max-width: 30vw;

  @media (max-width: 500px) {
    min-height: 35vh;
    min-width: 80vw;
    width: 90%;
    margin: auto;
  }
`;
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
    justify-content: flex-start;
    gap: 3vh;
    height: 80vh;
    margin: auto;
    margin-top: 5vh;
    width: 100%;
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
            <StyledButton
              transparent
              onClick={() => {
                return;  
                //ask whick deck should it be added to
               // dispatch(addResourceToDeck(element,deck));
              }}
            >
              <RiAddBoxFill style={{ color: "#0D0C3C", fontSize: "2vh" }} />
            </StyledButton>
            <Verse verse={element} />
          </TruthCard>
        ))}
    </TruthContainer>
  );
};
