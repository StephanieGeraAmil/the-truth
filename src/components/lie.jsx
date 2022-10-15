import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHintSelected } from "../actions/currentSelectionActions";
import { getAllTags } from "../actions/tagActions";

export const Lie = () => {
  const dispatch = useDispatch();
  // const selectedSelector = (state) => (state.selected ? state.selected : null);
  // const selected = useSelector(selectedSelector);
  const tagsSelector = (state) => (state.tags ? state.tags : null);
  const tags = useSelector(tagsSelector);

  const [display, setDisplay] = useState(false);
  // const [options, setOptions] = useState(tags);
  const [textInput, setTextInput] = useState("");
  // useEffect(() => {
  //   console.log(tags);
  //       console.log(tags.map(e=>e.name));
  //  // setOptions(tags)
  // }, [tags]);
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    // setDisplay(true);

    // if(textInput=="")dispatch(clearHintSelected());

    //update the hint list

    //the hint list must be ordered by amount of voutes that relate it to the tag

    //if it's not in the hint list I should look for it on the phrases/tag table

    //if I don't have nothing I should display a message inviting the user to search
    //the web or seek counseling and add the information to the site and we must store the search so somebody can look for verses to help future aperances
  };
  const handleClickOnSuggestion = (suggestion) => {
    setDisplay(!display);
    setTextInput(suggestion.name);
  };

  return (
    <div className="lie">
      <p>I'm thinking...</p>
      <input
        onChange={(event) => handleInputChange(event)}
        onClick={() => setDisplay(!display)}
        value={textInput}
      ></input>
      {display ? (
        <div className="suggestions">
          {tags
            .filter((element) => (element.name.indexOf(textInput.toLocaleLowerCase())>-1))
            .map(element => (
              <span
                key={element.id}
                onClick={()=>handleClickOnSuggestion(element)}
              >
                {element.name}
              </span>
           ))}
        </div>
      ):<p>but...</p>}
      
    </div>
  );
};
