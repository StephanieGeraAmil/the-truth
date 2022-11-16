import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Verse } from "./verse";

import styled, { css } from "styled-components";


const TruthContainer = styled.div`
  box-sizing: border-box;
  background-color: rgb(138, 175, 205);
  border-radius: 10px;
  padding: 15px;
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const ListVersesContainer = styled.div`
  background-color: #fff;
  height: 300px;

  border-radius: inherit;
  overflow-y: scroll;
`;

const TruthParagraph = styled.p`
  margin-top: 0;
`;

export const Truth = () => {
  const versesSelector = (state) => (state.verses ? state.verses : null);
  const versesOfTag = useSelector(versesSelector);

  useEffect(() => {

  }, []);

  return (
    <TruthContainer>
      <TruthParagraph>God says...</TruthParagraph>
      <ListVersesContainer>
        {versesOfTag.map((element) => (
            <Verse verse={element} key={`${element.id}_div`} />
        ))}
      </ListVersesContainer>
    </TruthContainer>
  );
};