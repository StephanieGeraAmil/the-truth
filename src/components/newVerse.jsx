import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import { addResourceToCard } from "../actions/cardActions";

import styled, { css } from "styled-components";
import { Form, FormTextArea, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

export const NewVerse = ({ card_id, updateFormShown }) => {
  const dispatch = useDispatch();

  const [scripture, setScripture] = useState("");
  const [ref, setRef] = useState("");



  const addVerse = () => {
    const verse = { scripture: scripture, ref: ref, id: v4() };
    dispatch(addResourceToCard(verse, card_id));
    updateFormShown(null);
  };

  return (
    <Form>
      <StyledButton transparent onClick={() => updateFormShown(null)}>
        -
      </StyledButton>
      <div>
        <FormInput
          onChange={(event) => setRef(event.target.value)}
          value={ref}
        ></FormInput>
      </div>
      <FormTextArea
        onChange={(event) => setScripture(event.target.value)}
        value={scripture}
      ></FormTextArea>

      <StyledButton transparent onClick={() => addVerse()}>
        save
      </StyledButton>
    </Form>
  );
};
