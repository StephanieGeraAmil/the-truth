import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVersesWithTag } from "../actions/verseActions";

import styled, { css } from "styled-components";
import { StyledButton } from "./shared_styles/styled_buttons";

const LieContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.8vw;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:1.5vw;
`;



const LieInput = styled.input`
  width: 100%;
  height: 80%;
  background-color: #fff;
  border-radius: 2vw;
  border: 0;
  font-size: 1.2vw;
  font-weight: 300;
  color: inherit;
  padding: 0.5vw;
  margin: 0;
  &:active,
  &:focus {
    background-color: #fff;
    border: 0;
    color: inherit;
    z-index: 2;
  }
`;

const LieSuggestions = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0 0 2vw 2vw;
  margin-top: -25px;
  font-size: 1vw;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 2em;
`;
const SearchButton = styled(StyledButton)`
  position: absolute;
  background: #201352;
  font-size: 0.9vw;
  color: #fff;
  top: 50%;
  right: 0;
  transform: translateY(-50%) translateX(-2%);
  z-index: 10;

`;
export const Lie = () => {
  const dispatch = useDispatch();
  const tagsSelector = (state) => (state.tags ? state.tags : null);
  const tags = useSelector(tagsSelector);

  const wrapperRef = useRef(null);

  const [display, setDisplay] = useState(false);

  const [textInput, setTextInput] = useState("");

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };
  const handleClickOnSuggestion = (suggestion) => {
    setDisplay(!display);
    setTextInput(suggestion.name);
    searchResults(suggestion);
  };

  const handleKeyPress = (e) => {
    setDisplay(true);
    if (e.key === "Enter") {
      setDisplay(!display);
      const search = tags.filter((element) => element.name === textInput);

      if (search.length === 1) searchResults(search[0]);
    }
  };
  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
      const search = tags.filter((element) => element.name === textInput);

      if (search.length === 1) searchResults(search[0]);
    }
  };
  const searchResults = (tag) => {
    dispatch(getVersesWithTag(tag.id));
  };
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

      <SearchButton>Search</SearchButton>
      {display && (
        <LieSuggestions ref={wrapperRef}>
          {tags &&
            tags
              .filter(
                (element) =>
                  element.name.indexOf(textInput.toLocaleLowerCase()) > -1
              )
              .map((element) => (
                <span
                  key={element.id}
                  onClick={() => handleClickOnSuggestion(element)}
                >
                  {element.name}
                </span>
              ))}
        </LieSuggestions>
      )}
    </LieContainer>
  );
};
