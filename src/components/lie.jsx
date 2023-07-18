import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVersesRelated } from "../actions/verseActions";
import {
  settingFormPurpose,
  clearFormPurpose,
  thoughtSelected,
} from "../actions/currentSelectionActions";

import styled from "styled-components";
import { ColorAndTextButton } from "./shared_styles/styled_buttons";

const LieContainer = styled.div`
  position: relative;
  height:8%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.8vw;
  @media (max-width: 550px) {
    font-size: 1rem;
    width: 90%;
  } 
`;

const LieInput = styled.input`
  position: absolute;
  top: 0.5em;
  width: 100%;
  height: 1.2em;
  background-color: #fff;
  border: 0;
  font-size: 2vh;
  font-weight: 100;
  padding: 2em 1.5em;
  margin: 0;
  border-radius:4vw;
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  z-index: 2;
  &:active,
  &:focus {
    z-index: 2;
  }
 
   @media (max-width: 1800px)  and (min-height: 1000px){
    font-size: 1rem;
  }
`;

const LieSuggestions = styled.div`
  position: absolute;
  top: 0.5em;
  padding: 1.5em;
  padding-top: 3.8em;
  width: 100%;
  z-index: 1;
  border-radius: 3vw 3vw 4vw 4vw;
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 2vh;
  line-height: 2em;

  @media (max-width: 1800px)  and (min-height: 1000px){
    font-size: 1rem;
  }
`;
const Search = styled(ColorAndTextButton)`
  position: absolute;
  width: 6.5em;
  height: 3em;
  top: 1em;
  right: 2%;
  color: #fff;
  z-index: 3;
  font-size: 2vh;
  @media (max-width: 700px) {
    border-radius: 2.5vw;
  }
  @media (max-width: 500px) {
    border-radius: 3vw;
  }
  @media (max-width: 1800px)  and (min-height: 1000px){
    font-size: 1rem;
  }
`;
export const Lie = () => {
  const dispatch = useDispatch();
  const thoughtSelector = (state) => (state.thoughts ? state.thoughts : null);
  const thoughts = useSelector(thoughtSelector);
  const currentFormSelected = (state) =>
    state.selected.form ? state.selected.form : null;
  const formSelected = useSelector(currentFormSelected);
  const currentThoughtSelected = (state) =>
    state.selected.thought ? state.selected.thought : null;
  const ThoughtSelected = useSelector(currentThoughtSelected);

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
    dispatch(thoughtSelected(suggestion));
  };

  const handleKeyPress = (e) => {
    setDisplay(true);
    if (e.key === "Enter") {
      setDisplay(!display);
      dispatch(getVersesRelated(textInput));
      dispatch(thoughtSelected(textInput));
    }
  };
  const handleSearch = () => {
    setDisplay(false);
    dispatch(getVersesRelated(textInput));
    dispatch(thoughtSelected(textInput));
  };
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  useEffect(() => {
    if (ThoughtSelected === null) {
      setTextInput("");
    }
  }, [ThoughtSelected]);

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
