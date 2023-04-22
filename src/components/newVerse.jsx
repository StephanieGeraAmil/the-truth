import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import { addResourceToCard } from "../actions/cardActions";

import styled, { css } from "styled-components";
import { Form, FormTextArea, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

const ActionButtonsSection = styled.div`
  width: 90%;
  height: 3vh;
  margin-top:1vw;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 40px;
`;
  const Button = styled(StyledButton)`
  font-size: 2vh;
  color: "#433e3e";
  margin:0;
  padding:0;

`;
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
      <FormTextArea
        placeholder="Scripture"
        onChange={(event) => setScripture(event.target.value)}
        value={scripture}
      ></FormTextArea>
       <FormInput
        onChange={(event) => setRef(event.target.value)}
        value={ref}
        placeholder="Book Ch:Vs"
      ></FormInput>
      <ActionButtonsSection>
        <Button transparent onClick={() => updateFormShown(null)}>
          close
        </Button>
        <Button transparent onClick={() => addVerse()}>
          save
        </Button>
      </ActionButtonsSection>
    </Form>
  );
};
