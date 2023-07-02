import styled, { css } from "styled-components";
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;
export const CardOfDeck = styled.div`
  height: 100%;
  aspect-ratio: 0.8;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    aspect-ratio: auto;
    width:80%;
  }

  ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;
      height: 70%;
      width: 35%;
      max-width: 25vw;
    `}
  ${(props) =>
    props.$small &&
    css`
      position: absolute;
      z-index: 1;
      bottom: 20%;
      right: 45%;
      height: 60%;
      width: 30%;
      max-width: 20vw;
    `}
`;

export const PreviewCard = styled.div`
  width: 60%;
  aspect-ratio: 0.8;
  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
    @media (max-width:750px) {
    width: 45%;
    margin: 0 auto;
  }
  ${(props) =>
    props.$static &&
    css`
      position: static;
      z-index: 1;
      height: 90%;
      width: 80%;
      padding: 8%;
      min-width: 240px;
      @media (min-width: 1750px) {
        height: 100%;
        width: 100%;
      }
  /* @media (max-width: 550px) {
        width: 70%;
        height: 100%;
        margin: 0 auto;
      } */
      /* @media (max-width: 550px) {
        width: 80vw;
        height: 100%;
        margin: 0 auto;
      } */
    `}
  ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;

      width: 50%;
      aspect-ratio: 0.8;

    
         @media (max-width: 750px) {
        width: 40%;
        right:20%;
      }
    `}
  ${(props) =>
    props.$small &&
    css`
      position: absolute;
      z-index: 1;
      bottom: 20%;
      right: 50%;
      width: 40%;
      aspect-ratio: 0.8;
  
         @media (max-width: 750px) {
        width: 35%;
        right:30%;
      }
           @media (max-width: 750px) {
        width: 35%;
        right:30%;
      }
    `}
`;
