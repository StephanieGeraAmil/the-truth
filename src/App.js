import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { getAllThoughts } from "./actions/thoughtActions";
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
  const dispatch = useDispatch();
  useEffect(() => {
  //  console.log("The backend is not yet deployed");
   // dispatch(getAllThoughts());
  }, []);
  return (
    <StyledSection>
      <Landing />
    </StyledSection>
  );
}

export default App;
