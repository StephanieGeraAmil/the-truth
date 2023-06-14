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

 
`;

const StepSection = styled.div`
  height: 90%;
  width: 95%;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
 gap: 3%;
 
`;

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

        

`;

export const BottomSection = () => {
  const dispatch = useDispatch();
  const currentThoughtSelected = (state) =>
    state.selected.thought ? state.selected.thought : null;
  const ThoughtSelected = useSelector(currentThoughtSelected);
  const show = ThoughtSelected ? true : false;

  return (
    <StyledSection>   
    <Truth />
    </StyledSection>
  );
};
