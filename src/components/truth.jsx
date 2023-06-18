import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PreviewCard } from "./shared_styles/styled_cards";
import { clearThoughtSelected } from "../actions/currentSelectionActions";

import { Verse } from "./verse";
import { AddToDeck } from "./addToDeck";
import { NewDeck } from "./newDeck";
import { TruthCard } from "./truthCard";

import styled from "styled-components";
import { StyledCard } from "./shared_styles/styled_cards";
import { Form, FormInput } from "./shared_styles/styled_forms";
import { Info } from "./shared_styles/styled_text";
import { RiAddBoxFill } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 1.5vh;
//   right: 2vh;
//   z-index: 0;
//   border: 0;
//   background: transparent;
//   align-self: flex-end;
// `;

// const Truthlist = styled.div`
//   overflow: auto;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   align-items: center;
//   gap: 2%;
//   height: 100%;
//   /* @media (max-width: 650px) {
//     flex-direction: column;
//     align-items: center;
//     justify-content: flex-start;
//   } */
// `;

const TruthContainer = styled.div`
  /* position: absolute;
  bottom: 0; */
  position: relative;
  align-self: flex-start;
  height: 70%;

  width: 90%;
  margin: 0 auto;
  z-index: 0;
  /* background: #8b8c89;
  box-shadow: 6px 5px 16px #000; */
  /* padding-left: 3vw; */
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  overflow: auto;
  display: grid;
  /* flex-direction: row;
  flex-wrap: wrap; */
  grid-gap: 2%;
  /* grid-auto-flow: row; */
  grid-template-columns: repeat(auto-fill, minmax(30vh, 1fr));
  grid-auto-rows: 40vh;
  /* justify-content: flex-start;
  align-items: center; */

  /* @media (max-width: 550px) {
    height: 128%;
  }
  @media (max-width: 405px) {
    height: 132%;
  } */
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
      {/* <CloseButton transparent onClick={() => dispatch(clearThoughtSelected())}>
        <MdArrowBack style={{ color: "#1E1D25", fontSize: "4vh" }} />
      </CloseButton> */}

      {/* <Truthlist> */}
      {versesRelated &&
        versesRelated.map((element) => (
          <PreviewCard $static key={element.ref}>
            <>
              <Info $gray>{element ? element.scripture : ""}</Info>
              <Info $gray $bold>{element ? element.ref : ""}</Info>
            </>
          </PreviewCard>
          // <TruthCard key={element.ref} verse={element}>
          // </TruthCard>
        ))}

      {/* </Truthlist> */}
    </TruthContainer>
  );
};
