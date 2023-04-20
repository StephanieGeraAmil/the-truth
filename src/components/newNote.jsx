import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNoteToCard,
} from "../actions/noteActions";


import styled, { css } from "styled-components";
import { Form, FormTextArea } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

export const NewNote = ({card_id, updateFormShown}) => {  
  const dispatch = useDispatch();

  const [textAreaInput, setTextAreaInput] = useState("");

  const addNote=()=>{
    dispatch(addNoteToCard({content:textAreaInput},card_id));
    updateFormShown(null);

  }
  
  return (
        <Form>
             <StyledButton topRight onClick={() => updateFormShown(null)}>
              {/* <img src={Delete} alt="esc" /> */}
            </StyledButton>
          <FormTextArea
            placeholder="Add the text of the note here"
            onChange={(event) => setTextAreaInput(event.target.value)}
            value={textAreaInput}
          ></FormTextArea>
              <StyledButton onClick={()=>addNote()}>
                {/* <img src={Done} alt="add" /> */}
                </StyledButton>
        </Form>
  );
};
