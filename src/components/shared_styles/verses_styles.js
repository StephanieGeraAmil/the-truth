import styled from "styled-components";

export const VerseContainer = styled.div`
width:95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
`;
export const VerseScripture = styled.p`
  font-size: 0.6rem;
  line-height: 1.1em;
  font-weight: 100;
  margin: 0;
  overflow: auto;
  @media (min-width: 1200px) {
    font-size: 2vh;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    line-height: 1.2em;
  }
`;

export const VerseRef = styled.p`
  font-size:0.6rem;
  align-self: flex-end;
  font-weight: 400;
  margin :0;
  margin-top :0.5vh;export type first = {second}
    @media (min-width: 1200px) {
    font-size: 2vh;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    line-height: 1.2em;
  }
  `;
