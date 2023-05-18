import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVersesRelated } from "../actions/verseActions";
import {
  settingFormPurpose,
  clearFormPurpose,
  thoughtSelected,
} from "../actions/currentSelectionActions";

import styled from "styled-components";
import { SearchButton } from "./shared_styles/styled_buttons";

const LieContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  font-size: 0.8vw;
  height: 3em;
  @media (max-width: 1500px) {
    font-size: 1.2vw;
  }
  @media (max-width: 700px) {
    font-size: 1.6vw;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    width: 100%;
  }
`;

const LieInput = styled.input`
  width: 100%;
  height: 1.2em;
  background-color: #fff;
  /* border-radius: 2vw; */
  border: 0;
  /* font-size: 0.8vw; */
  font-size: 2vh;
  font-weight: 100;
  padding: 2em 1.5em;
  margin: 0;
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  z-index: 2;
  /* @media (max-width: 1500px) {
  font-size: 1.2vw;
  } 
  @media (max-width: 700px) {
  font-size: 1.6vw;˝
  }
  @media (max-width: 500px) {
  font-size: 1rem;
  } */
  &:active,
  &:focus {
    z-index: 2;
  }
`;

const LieSuggestions = styled.div`
  position: absolute;
  top: 1.8em;
  padding: 1.5em;
  padding-top: 3em;
  width: 100%;
  z-index: 1;
  /* border-radius: 0 0 2vw 2vw; */
  box-shadow: 5px 3px 10px #333;
  color: #8b8c89;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 0.8vw;
  line-height: 2em;
  @media (max-width: 1500px) {
    font-size: 1.2vw;
  }
  @media (max-width: 700px) {
    font-size: 1.6vw;
    /* border-radius: 0 0 2.5vw 2.5vw; */
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    /* border-radius: 0 0 3vw 3vw; */
  }
`;
const Search = styled(SearchButton)`
  position: absolute;
  width: 6.5em;
  height: 80%;
  top: 50%;
  right: 0;
  color: #fff;
  transform: translateY(-50%) translateX(-5%);
  z-index: 3;
  font-size: 1vw;
  @media (max-width: 700px) {
    font-size: 1.6vw;
    border-radius: 2.5vw;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    border-radius: 3vw;
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
