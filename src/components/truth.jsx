import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearThoughtSelected } from "../actions/currentSelectionActions";

import styled from "styled-components";
import { Info } from "./shared_styles/styled_text";
import { PreviewCard } from "./shared_styles/styled_cards";


const TruthContainer = styled.div`
  position: relative;
  align-self: flex-start;
  height: 70%;
  width: 90%;
  margin: 0 auto;
  z-index: 0;
  overflow: auto;
  display: grid;
  grid-gap: 2%;
  grid-template-columns: repeat(auto-fill, minmax(50vh, 1fr));
   grid-auto-rows:  50vh;
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
      {versesRelated &&
        versesRelated.map((element) => (
          <PreviewCard $static key={element.ref}>
              <Info $gray>{element ? element.scripture : ""}</Info>
              <Info $gray $bold>{element ? element.ref : ""}</Info>
          </PreviewCard>

        ))}
    </TruthContainer>
  );
};
