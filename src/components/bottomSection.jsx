import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Truth } from "./truth";

import styled from "styled-components";
import { SubTitle, Info } from "./shared_styles/styled_text";

import { FaSearch, FaPen } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";
import {TbCards} from  "react-icons/tb";

const GrayCircle = styled.div`
  height: 10vh;
  width: 10vh;
  min-height: 40px;
  margin-bottom: 2vh;
  opacity: 0.5;
  border-radius: 50%;
  position: relative;
  background-color: #8b8c89;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const StepInfoSection = styled.div`
  height: 20vh;
  @media (min-width: 700px) {
    height: 38%;
  }
`;
const StepTitleSection = styled.div`
  height: 10vh;
`;

const WhiteShape = styled.div`
  height: 45vh;
  width: 20%;
  padding: 2%;
  box-shadow: 2px 3px 16px #333;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  @media (max-width: 500px) {
    height: 100%;
    min-height: 220px;
    width: 42vh;
  }
  @media (min-width: 800px) {
    height: 52vh;
    width: 38vh;
  }
`;

const StepSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10vh;
  }
`;

const StyledSection = styled.div`
  padding-top: 15vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 78vh;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10vh;
  }
`;

export const BottomSection = () => {
  const dispatch = useDispatch();

  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);

  return (
    <StyledSection>
      {formSelected === "truth" && <Truth />}
      {formSelected !== "truth" && (
        <StepSection>
          <WhiteShape>
            <GrayCircle>
              <FaSearch
                style={{
                  color: "#274C77",
                  fontSize: "3vh",
                  zIndex: 4,
                  opacity: 1,
                }}
              />
            </GrayCircle>
            <StepTitleSection>
              <SubTitle blue smaller>
                Search
              </SubTitle>
            </StepTitleSection>
            <StepInfoSection>
              <Info bigger>
                Introduce your thoughts, or related keywords, and read what God
                has to say about that
              </Info>
            </StepInfoSection>
          </WhiteShape>
          <WhiteShape>
            <GrayCircle>
                <TbCards
                style={{
                  color: "#274C77",
                  fontSize: "4.5vh",
                  zIndex: 4,
                  opacity: 1,
                }}
              />
            </GrayCircle>
            <StepTitleSection>
              <SubTitle blue smaller>
                Create Study Decks
              </SubTitle>
            </StepTitleSection>
            <StepInfoSection>
              <Info bigger>
                You can create study decks for each truth you find, so you can
                visit them later
              </Info>
            </StepInfoSection>
          </WhiteShape>
          <WhiteShape>
            <GrayCircle>
              <FaPen
                style={{
                  color: "#274C77",
                  fontSize: "3vh",
                  zIndex: 4,
                  opacity: 1,
                }}
              />
            </GrayCircle>
            <StepTitleSection>
              <SubTitle blue smaller>
                Add verses and notes
              </SubTitle>
            </StepTitleSection>

            <StepInfoSection>
              <Info bigger>
                Add notes and verses that help you focus on the truth
              </Info>
            </StepInfoSection>
          </WhiteShape>
          <WhiteShape>
            <GrayCircle>
              <BiRepeat
                style={{
                  color: "#274C77",
                  fontSize: "4.5vh",
                  zIndex: 4,
                  opacity: 1,
                }}
              />
            </GrayCircle>
            <StepTitleSection>
              <SubTitle blue smaller>
                Study
              </SubTitle>
            </StepTitleSection>
            <StepInfoSection>
              <Info bigger>
                Go through the Decks as much as you can, untill you are able to
                know and understand the truth
              </Info>
            </StepInfoSection>
          </WhiteShape>
        </StepSection>
      )}
    </StyledSection>
  );
};
