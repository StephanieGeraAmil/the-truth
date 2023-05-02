import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addResourceToCard } from "../actions/cardActions";
import styled from "styled-components";
import { Form, FormTextArea, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";
import { MdArrowBack, MdOutlineDone } from "react-icons/md";

const ActionButtonsSection = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 2vh;
  width: 90%;
  height: 3vh;
  overflow: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled(StyledButton)`
  font-size: 2vh;
  margin: 0;
  padding: 0;
`;

export const NewVerse = ({ card_id, updateFormShown }) => {
  const dispatch = useDispatch();

  const [scripture, setScripture] = useState("");
  const [ref, setRef] = useState("");

  const addVerse = () => {
    if (scripture != "" && ref != "") {
      const verse = { scripture: scripture, ref: ref, id: v4() };
      dispatch(addResourceToCard(verse, card_id));
      updateFormShown(null);
    }
  };

  return (
    <Form>
      <FormInput
        placeholder="Add the Reference of the verse"
        onChange={(event) => setRef(event.target.value)}
        value={ref}
      ></FormInput>
      <FormTextArea
        placeholder="Add the Scripture"
        onChange={(event) => setScripture(event.target.value)}
        value={scripture}
      ></FormTextArea>

      <ActionButtonsSection>
        <Button transparent onClick={() => updateFormShown(null)}>
          <MdArrowBack style={{ color: "#6096BA", fontSize: "3vh" }} />
        </Button>
        <Button transparent onClick={() => addVerse()}>
          <MdOutlineDone style={{ color: "#6096BA", fontSize: "3vh" }} />
        </Button>
      </ActionButtonsSection>
    </Form>
  );
};
