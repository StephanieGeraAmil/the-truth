import React, { useEffect } from "react";

import { Lie } from "./lie";
import { Truth } from "./truth";
import styled from "styled-components";

const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10%;
  gap: 5%;
  align-items: center;
  background-image: radial-gradient(
    circle farthest-corner at 100% 100%,
    #000 0%,
    #15464c 70%,
    #33abb9 100%
  );
  @media (max-width: 500px) {
    padding-top: 15%;
  }
  @media (max-aspect-ratio: 0.78) {
    gap: 0%;
  }
`;

export const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SearchDiv>
      <Lie />
      <Truth />
    </SearchDiv>
  );
};
