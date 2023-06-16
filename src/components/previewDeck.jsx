import React from "react";
import styled, { css } from "styled-components";
import { PreviewCard } from "./shared_styles/styled_cards";
import {SubTitle} from "./shared_styles/styled_text";
const StyledDeckPreview = styled.div`
  width: 100%;
  height: 100%;
position:absolute;
bottom:0;
right:0;

`;
export const PreviewDeck = ({children}) => {
  return (
     <StyledDeckPreview>
      <PreviewCard small />
      <PreviewCard medium />
      <PreviewCard>{children} </PreviewCard>
    </StyledDeckPreview>
  );
};
