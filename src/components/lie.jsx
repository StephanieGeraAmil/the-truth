import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVersesRelated } from "../actions/verseActions";
import {
  settingFormPurpose,
  clearFormPurpose,
} from "../actions/currentSelectionActions";

import styled from "styled-components";
import { SearchButton } from "./shared_styles/styled_buttons";

const LieContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1vh;
  align-items: center;
  @media (max-width: 500px) {
    height: 13vh;
  }
`;

const LieInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2vw;
  border: 0;
  font-size: 1.2vw;
  font-weight: 100;
  padding: 0.5vh;
  padding-left: 5%;
  margin: 0;
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  z-index: 2;
  @media (max-width: 500px) {
    border-radius: 6vw;
    height: 12vh;
    font-size: 1.1em;
    padding: 0.5em;
  }
  &:active,
  &:focus {
    z-index: 2;
  }
`;

const LieSuggestions = styled.div`
  padding-top: 4.5vh;
  padding-left: 1vw;
  padding-bottom: 1vw;
  width: 100%;
  position: absolute;
  top: 3.3vh;
  left: 0;
  background-color: #fff;
  border-radius: 0 0 2vw 2vw;
  font-size: 1vw;
  z-index: 1;
  display: flex;
  flex-direction: column;
  line-height: 2em;
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  @media (max-width: 500px) {
    top: 2.1em;
    padding: 1em;
    padding-top: 1.8em;
    border-radius: 0 0 20px 20px;
    font-size: 1em;
  }
  @media (max-width: 400px) {
    top: 1.5em;
  }
`;
const Search = styled(SearchButton)`
  position: absolute;
  color: #fff;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(-5%);
  z-index: 3;
  @media (max-width: 500px) {
    border-radius: 20px;
  }
`;
export const Lie = () => {
  const dispatch = useDispatch();
  const thoughtSelector = (state) => (state.thoughts ? state.thoughts : null);
  const thoughts = useSelector(thoughtSelector);
  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);

  const wrapperRef = useRef(null);

  const [display, setDisplay] = useState(false);

  const [textInput, setTextInput] = useState("");

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleClickOnSuggestion = (suggestion) => {
    setDisplay(!display);
    setTextInput(suggestion);
    dispatch(getVersesRelated(suggestion));
    dispatch(settingFormPurpose("truth"));
  };

  const handleKeyPress = (e) => {
    setDisplay(true);
    if (e.key === "Enter") {
      setDisplay(!display);
      dispatch(getVersesRelated(textInput));
    }
  };
  const handleSearch = () => {
    setDisplay(false);
    dispatch(getVersesRelated(textInput));
  };
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    if (formSelected !== "truth") {
      setTextInput("");
    }
  }, [formSelected]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <LieContainer>
      <LieInput
        onChange={(event) => handleInputChange(event)}
        onClick={() => setDisplay(!display)}
        onKeyPress={(e) => handleKeyPress(e)}
        value={textInput}
      />

      <Search onClick={() => handleSearch()}>Search</Search>
      {display && (
        <LieSuggestions ref={wrapperRef}>
          {thoughts &&
            thoughts
              .filter(
                (element) => element.indexOf(textInput.toLocaleLowerCase()) > -1
              )
              .map((element) => (
                <span
                  key={element}
                  onClick={() => handleClickOnSuggestion(element)}
                >
                  {element}
                </span>
              ))}
        </LieSuggestions>
      )}
    </LieContainer>
  );
};
