import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {createNote} from "../actions/noteActions";
import { addResourceToCard } from "../actions/cardActions";
import { v4 } from "uuid";

import styled, { css } from "styled-components";
import { Form, FormTextArea } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

const ActionButtonsSection = styled.div`
  width: 100%;
  height: 5vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
export const NewNote = ({ card_id, updateFormShown }) => {
  const dispatch = useDispatch();

  const [textAreaInput, setTextAreaInput] = useState("");

  const addNote = () => {
    const note = { content: textAreaInput, id: v4(), type: "note" };
    // dispatch(createNote(note));
    dispatch(addResourceToCard(note, card_id));
    updateFormShown(null);
  };

  return (
    <Form>
      <FormTextArea
        placeholder="Add the text of the note here"
        onChange={(event) => setTextAreaInput(event.target.value)}
        value={textAreaInput}
      ></FormTextArea>
      <ActionButtonsSection>
        <StyledButton transparent onClick={() => updateFormShown(null)}>
          close
        </StyledButton>
        <StyledButton transparent onClick={() => addNote()}>
          save
        </StyledButton>
      </ActionButtonsSection>
    </Form>
  );
};
