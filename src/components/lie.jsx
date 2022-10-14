import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTags } from "../actions/tagActions";

export const Lie = () => {
  
  const [textInput, setTextInput] = useState("");
  const tagsSelector = (state) => (state.tags ? state.tags : null);
  const tags = useSelector(tagsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTags());
  }, []);
//   useEffect(() => {
//     console.log(tags);

//   }, [tags]);
  const handleInputChange = (e) => {
    setTextInput(e.target.value);
    //update the hint list

    //the hint list must be ordered by amount of voutes that relate it to the tag

    //if it's not in the hint list I should look for it on the phrases/tag table

    //if I don't have nothing I should display a message inviting the user to search 
    //the web or seek counseling and add the information to the site and we must store the search so somebody can look for verses to help future aperances
  };

  return (
    <div className="lie">
      <p>I'm thinking...</p>
      <label onChange={handleInputChange}>{textInput}</label>
      <p>but...</p>
    </div>
  );
};
