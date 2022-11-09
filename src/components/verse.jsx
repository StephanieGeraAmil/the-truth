import React, { useEffect } from "react";
import Plus from "../assets/plus.svg";

import styled, { css } from "styled-components";
import { Paragraph } from "./shared_styles/styled_content_components";
import { StyledButton } from "./shared_styles/styled_buttons";
import { VerseContainer ,VerseRef} from "./shared_styles/verses_styles";

const VerseListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Verse = ({ verse }) => {
  useEffect(() => {}, []);
  return (
    <VerseListItemContainer>
      <VerseContainer>
        <Paragraph>{verse.scripture}</Paragraph>
        <VerseRef>
          {verse.book.charAt(0).toUpperCase() +
            verse.book.slice(1) +
            " " +
            verse.chapter +
            ":" +
            verse.verse_number}
        </VerseRef>
      </VerseContainer>
      <StyledButton> 
        <img src={Plus} alt="add_to_deck" />
      </StyledButton>
    </VerseListItemContainer>
  );
};
