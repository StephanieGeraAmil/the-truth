import React, { useEffect } from "react";

import styled from "styled-components";
import { Landing } from "./components/landing";

const StyledSection = styled.div`
  width: 100%;
  height: 150%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
 
  return (
    <StyledSection>
      <Landing />
    </StyledSection>
  );
}

export default App;
