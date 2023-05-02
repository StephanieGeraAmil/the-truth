import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearThoughtSelected,
} from "../actions/currentSelectionActions";

import { Verse } from "./verse";
import { AddToDeck } from "./addToDeck";
import { NewDeck } from "./newDeck";

import styled from "styled-components";
import { StyledCard } from "./shared_styles/styled_cards";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { RiAddBoxFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";

export const StyledButton = styled.button`
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 0;
  border: 0;
  background: transparent;
  align-self: flex-end;

  @media (min-width: 1500px) {
    bottom: 10%;
    left: 10%;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 1.5vh;
  right: 2vh;
  z-index: 0;
  border: 0;
  background: transparent;
  align-self: flex-end;
`;

const TruthCard = styled(StyledCard)`
  position: relative;
  box-shadow: 0.3vw 0.3vw 0.5vw 0.08vw #888;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  height: 30vh;
  min-width: 40vh;
  max-width: 30vw;
  z-index: 6;

  @media (max-width: 500px) {
    min-height: 35vh;
    min-width: 80vw;
    width: 90%;
    margin: auto;
  }
`;
const TruthContainer = styled.div`
  position: absolute;
  bottom: -70vh;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  gap: 2.5vw;
  z-index: 2;
  height: 74vh;
  width: 100%;
  background: #8b8c89;
  box-shadow: 6px 5px 16px #000;
  padding-left: 10vh;

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
  const dispatch = useDispatch();
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesRelated = useSelector(versesSelector);
  const wrapperRef = useRef(null);

  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);

  const [displayAddToDeckForm, setDisplayAddToDeckForm] = useState(false);
  const [verseSelected, setVerseSelected] = useState(null);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      dispatch(clearThoughtSelected());
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <TruthContainer ref={wrapperRef}>
      <CloseButton transparent onClick={() => dispatch(clearThoughtSelected())}>
        <MdArrowBack style={{ color: "#1E1D25", fontSize: "4vh" }} />
      </CloseButton>
      {displayAddToDeckForm && (
        <AddToDeck
          verse={verseSelected}
          setVerseSelected={setVerseSelected}
          setDisplayAddToDeckForm={setDisplayAddToDeckForm}
        ></AddToDeck>
      )}
      {versesRelated &&
        versesRelated.map((element) => (
          <TruthCard key={element.ref}>
            <StyledButton
              transparent
              onClick={() => {
                setDisplayAddToDeckForm(true);
                setVerseSelected(element);
              }}
            >
              <FiPlusCircle style={{ color: "#6096BA", fontSize: "3vh" }} />
            </StyledButton>
            <Verse verse={element} />
          </TruthCard>
        ))}
      {formSelected == "New Deck" && <NewDeck />}
    </TruthContainer>
  );
};
