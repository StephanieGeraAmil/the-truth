import React, { useState, useEffect, useRef } from "react";

import { Verse } from "./verse";
import { AddToDeck } from "./addToDeck";

import styled from "styled-components";
import { StyledCard } from "./shared_styles/styled_cards";
import { FiPlusCircle } from "react-icons/fi";


export const StyledButton = styled.button`
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 0;
  border: 0;
  background: transparent;
  align-self: flex-end;
`;

const Card = styled(StyledCard)`
  position: relative;
  box-shadow: 0.3vw 0.3vw 0.5vw 0.08vw #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  height: 90%;
  min-width: 50vh;
  max-height: 30vh;
  max-width: 30vw;
  z-index: 6;
  @media (max-width: 650px) {
    width: 80%;
    max-width: 60vw;
    min-height: 30vh;
  }
   @media (max-width: 450px) {
     width: 60%;
      min-width: 40vh;
  }
`;

export const TruthCard = ({ verse }) => {
  const [displayAddToDeckForm, setDisplayAddToDeckForm] = useState(false);
  const [verseSelected, setVerseSelected] = useState(null);
  return (
    <Card>
      {displayAddToDeckForm && (
        <AddToDeck
          verse={verseSelected}
          setVerseSelected={setVerseSelected}
          setDisplayAddToDeckForm={setDisplayAddToDeckForm}
        ></AddToDeck>
      )}
      <StyledButton
        transparent
        onClick={() => {
          setDisplayAddToDeckForm(true);
          setVerseSelected(verse);
        }}
      >
        <FiPlusCircle style={{ color: "#6096BA", fontSize: "3vh" }} />
      </StyledButton>
      <Verse verse={verse} />
    </Card>
  );
};
