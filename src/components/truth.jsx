import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearThoughtSelected } from "../actions/currentSelectionActions";

import { Verse } from "./verse";
import { AddToDeck } from "./addToDeck";
import { NewDeck } from "./newDeck";
import { TruthCard } from "./truthCard";

import styled from "styled-components";
import { StyledCard } from "./shared_styles/styled_cards";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { RiAddBoxFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";


export const CloseButton = styled.button`
  position: absolute;
  top: 1.5vh;
  right: 2vh;
  z-index: 0;
  border: 0;
  background: transparent;
  align-self: flex-end;
`;

const Truthlist = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;
  height: 80%;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const TruthContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #8b8c89;
  box-shadow: 6px 5px 16px #000;
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    height: 130%;
  }
  @media (max-width: 405px) {
    height: 132%;
  }
`;

export const Truth = () => {
  const dispatch = useDispatch();
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesRelated = useSelector(versesSelector);
  const wrapperRef = useRef(null);


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
      
      <Truthlist>
        {versesRelated &&
          versesRelated.map((element) => (
            <TruthCard key={element.ref} verse={element}>
            </TruthCard>
          ))}
      </Truthlist>
    </TruthContainer>
  );
};
