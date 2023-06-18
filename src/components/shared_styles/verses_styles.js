import styled from "styled-components";

export const VerseContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
`;
export const VerseScripture = styled.p`
  font-size: 2vh;
  line-height: 1.1em;
  font-weight: 100;
  margin: 0;
  overflow: auto;
  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1rem;
  }
`;

export const VerseRef = styled.p`
  font-size: 2vh;
  align-self: flex-end;
  font-weight: 400;
  margin: 0;
  margin-top: 0.5vh;
  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1rem;
  }
`;
