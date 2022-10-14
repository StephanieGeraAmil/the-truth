import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHintSelected } from "../actions/currentSelectionActions";

export const Lie = () => {
  const dispatch = useDispatch();
  const selectedSelector = (state) => (state.selected ? state.selected : null);
  const selected = useSelector(selectedSelector);

  const [textInput, setTextInput] = useState("");
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    dispatch(clearHintSelected());

    //update the hint list

    //the hint list must be ordered by amount of voutes that relate it to the tag

    //if it's not in the hint list I should look for it on the phrases/tag table

    //if I don't have nothing I should display a message inviting the user to search
    //the web or seek counseling and add the information to the site and we must store the search so somebody can look for verses to help future aperances
  };
  useEffect(() => {
    const search = selected.hint ? selected.hint.name : "";
    setTextInput(search);
  }, [selected]);

  return (
    <div className="lie">
      <p>I'm thinking...</p>
      <input onChange={handleInputChange} value={textInput}></input>
      <p>but...</p>
    </div>
  );
};
