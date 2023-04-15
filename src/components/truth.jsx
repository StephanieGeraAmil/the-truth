import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";

import styled from "styled-components";

import { StyledCard } from "./shared_styles/styled_cards";

const TruthContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Truth = () => {
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesOfTag = useSelector(versesSelector);

  return (
    <TruthContainer>
        {versesOfTag.map((element) => (
          <StyledCard>
            <Verse verse={element} key={`${element.id}_div`} />
            </StyledCard>
        ))}

    </TruthContainer>
  );
};
