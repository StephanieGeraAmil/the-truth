import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addVerseToCard } from "../actions/verseActions";
import{addResourceToCard} from "../actions/cardActions";
import { v4 } from "uuid";

import styled, { css } from "styled-components";
import { Form, FormTextArea, FormInput } from "./shared_styles/styled_forms";
import { StyledButton } from "./shared_styles/styled_buttons";

export const NewVerse = ({ card_id, updateFormShown }) => {
  const dispatch = useDispatch();

  // const [book, setBook] = useState("");
  // const [chapter, setChapter] = useState("");
  // const [verseNumber, setVerseNumber] = useState("");
  const [scripture, setScripture] = useState("");
  const [ref, setRef] = useState("");

const VerseReferenceContainer = styled.div`

  width: 80%;
  height: 20%;
  display: flex;

  justify-content: space-around;

  z-index: -1;
`;

  const addVerse = () => {
   const verse={scripture:scripture,ref:ref, id:v4()}
    // dispatch(createVerse(verse));
  dispatch(addResourceToCard(verse,card_id));

   
   
    // dispatch(
    //   addVerseToCard(
    //     {
    //       book: book,
    //       chapter: +chapter,
    //       verse_number: +verseNumber,
    //       version: "NTV",
    //       scripture: scripture,
    //     },
    //     card_id
    //   )
    // );
    updateFormShown(null);
  };

  return (
        <Form >
       
           <StyledButton transparent onClick={() => updateFormShown(null)}>
        {/* <img src={Delete} alt="esc" /> */}
        delete
            </StyledButton>
               <VerseReferenceContainer>
                <FormInput 
            onChange={(event) => setRef(event.target.value)}
            value={ref}
          ></FormInput>
          {/* <FormInput medium
            onChange={(event) => setBook(event.target.value)}
            value={book}
          ></FormInput>
          <FormInput little
            onChange={(event) => setChapter(event.target.value)}
            value={chapter}
          ></FormInput>
          <FormInput little
            onChange={(event) => setVerseNumber(event.target.value)}
            value={verseNumber}
          ></FormInput> */}
          </VerseReferenceContainer>
          <FormTextArea
            onChange={(event) => setScripture(event.target.value)}
            value={scripture}
          ></FormTextArea>

          <StyledButton transparent onClick={() => addVerse()}>
            {/* <img src={Done} alt="add" /> */}
            save
            </StyledButton>
        </Form>

  );
};
