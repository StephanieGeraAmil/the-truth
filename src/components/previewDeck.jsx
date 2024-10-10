import React from "react";
import styled from "styled-components";
import { PreviewCard } from "./shared_styles/styled_cards";

const StyledDeckPreview = styled.div`
  width: 100%;
  height: 100%;
 

  @media (max-width: 900px) {
    width: 80%;
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
