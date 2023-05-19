import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllThoughts } from "./actions/thoughtActions";

import { TopSection } from "./components/topSection";
import { BottomSection } from "./components/bottomSection";
import styled from "styled-components";


const StyledSection = styled.div`
    width: 100%;
    height: 150%;

    display:flex;
    flex-direction: column;
    justify-content: center;
     @media (max-width: 650px) {
          padding-top:5%;
    height: 210%;
  }
   @media (max-width: 550px) {
    height: 290%;
  }
    @media (max-width: 1800px)  and (min-height: 1000px){
  height: 100%;
       /* height: 60%; */
  }

`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("The backend is not yet deployed");
    dispatch(getAllThoughts());
  }, []);

  return (
    <StyledSection>
      <TopSection />
      <BottomSection />
    </StyledSection>
  );
}

export default App;
