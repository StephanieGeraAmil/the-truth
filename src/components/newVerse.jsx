import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVerseToCard } from "../actions/verseActions";

import styled, { css } from "styled-components";
import { Form, FormTextArea, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

export const NewVerse = ({ card_id, updateFormShown }) => {
  const dispatch = useDispatch();

  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [verseNumber, setVerseNumber] = useState("");
  const [scripture, setScripture] = useState("");

  const addVerse = () => {
    dispatch(
      addVerseToCard(
        {
          book: book,
          chapter: +chapter,
          verse_number: +verseNumber,
          version: "NTV",
          scripture: scripture,
        },
        card_id
      )
    );
    updateFormShown(null);
  };

  return (
        <Form>
           <StyledButton topRight onClick={() => updateFormShown(null)}>
              X
            </StyledButton>
          <FormInput
            onChange={(event) => setBook(event.target.value)}
            value={book}
          ></FormInput>
          <FormInput
            onChange={(event) => setChapter(event.target.value)}
            value={chapter}
          ></FormInput>
          <FormInput
            onChange={(event) => setVerseNumber(event.target.value)}
            value={verseNumber}
          ></FormInput>
          <FormTextArea
            onChange={(event) => setScripture(event.target.value)}
            value={scripture}
          ></FormTextArea>

          <StyledButton onClick={() => addVerse()}>Save</StyledButton>
        </Form>

  );
};
