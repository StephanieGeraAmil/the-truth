import React, { useEffect } from "react";
import Plus from "../assets/plus.svg";
import styled, { css } from "styled-components";

import {
  VerseContainer,
  VerseScripture,
  VerseRef,
} from "./shared_styles/verses_styles";

const Container = styled(VerseContainer)`
  height: 80%;
  width: 80%;
`;

const Scripture = styled(VerseScripture)`
  font-size: 1.5vh;
  overflow:auto;
  @media (max-width: 500px) {
    font-size: 1.1em;
    line-height: 1.1em;
  }
`;
const Ref = styled(VerseRef)`
  font-size: 1.5vh;
   margin-top :0.5vh;
  @media (max-width: 500px) {
    font-size: 1.1em;
    line-height: 1.1em;
     margin-top :0.5em;
  }
`;

export const Verse = ({ verse }) => {
  useEffect(() => {}, []);
  return (
    <Container>
      <Scripture>{verse.verse}</Scripture>
      <Ref>{verse.ref}</Ref>
    </Container>
  );
};
