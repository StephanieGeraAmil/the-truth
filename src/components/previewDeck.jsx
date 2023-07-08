import React from "react";
import styled, { css } from "styled-components";
import { PreviewCard } from "./shared_styles/styled_cards";
import { SubTitle } from "./shared_styles/styled_text";
import { Link } from "react-router-dom";
const StyledDeckPreview = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
 @media (max-width: 900px) {
     width: 80%;
       left: -10%;

  }

`;
export const PreviewDeck = React.memo(({ id, children }) => {
  return (
    <StyledDeckPreview>
      <PreviewCard $small />
      <PreviewCard $medium />
      <PreviewCard>{children} </PreviewCard>
    </StyledDeckPreview>
  );
});
