import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNoteToCard,
} from "../actions/noteActions";

export const NewNote = ({card_id, updateFormShown}) => {  
  const dispatch = useDispatch();

  const [textAreaInput, setTextAreaInput] = useState("");
  const [display, setDisplay] = useState(true);



 
   useEffect(() => {
      console.log(textAreaInput);
  }, [textAreaInput]);



  const addNote=()=>{
   
    dispatch(addNoteToCard({content:textAreaInput},card_id));
    updateFormShown(null);
    setDisplay(false);
  }
  return (
    <>
      {display && (
        <div className="form">
          <textarea
          
            placeholder="Add the text of the note here"
            onChange={(event) => setTextAreaInput(event.target.value)}
            value={textAreaInput}
          ></textarea>
              <button onClick={()=>addNote()}>Save</button>
        </div>
      )}
    </>
  );
};
