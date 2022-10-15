import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { clearHintSelected } from "../actions/currentSelectionActions";
// import { getAllTags } from "../actions/tagActions";

export const Lie = () => {
  // const dispatch = useDispatch();
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
  };

  const handleKeyPress = (e) => {
        setDisplay(true);
    if (e.key === "Enter") {
      setDisplay(!display);
    }
  };
  const handleClickOutside = (event) => {
    const {current:wrap} =wrapperRef;
    if(wrap && !wrap.contains(event.target)){
    setDisplay(false);
    }

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
    <div className="lie">
      <p>I'm thinking...</p>
      <input
        onChange={(event) => handleInputChange(event)}
        onClick={() => setDisplay(!display)}
        onKeyPress={(e) => handleKeyPress(e)}
        value={textInput}
      ></input>
      {display ? (
        <div ref={wrapperRef} className="suggestions">
          {tags
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
        </div>
      ) : (
        <p>but...</p>
      )}
    </div>
  );
};
