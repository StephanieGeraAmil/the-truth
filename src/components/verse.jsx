import React, { useEffect } from "react";
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



export const Verse = ({ verse }) => {
  useEffect(() => {}, []);
  return (
    <Container>
      <VerseScripture>{verse.scripture}</VerseScripture>
      <VerseRef>{verse.ref}</VerseRef>
    </Container>
  );
};
