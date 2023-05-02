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
  padding-top: 2vw;
  padding-left: 1vw;
  padding-bottom: 1vw;
  width: 100%;
  position: absolute;
  top: 2vw;
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
      // dispatch(getVersesRelated(textInput));
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

  //the hint list must be ordered by amount of voutes that relate it to the tag
  //if it's not in the hint list I should look for it on thethought/tag table that isn't created yet
  //if I don't have nothing to suggest I should display a message inviting the user to search the web
  //or seek counseling and add the information to the site and we must store the search
  //so somebody can look for verses to help future aperances

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
