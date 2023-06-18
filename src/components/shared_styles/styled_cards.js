import styled, { css } from "styled-components";
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;
export const CardOfDeck = styled.div`
     height: 100%;
      width: 30%;
      min-width: 55vh;
            max-width: 45vw;


      position: relative;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding:5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
 /* &:after {
     height: 80%;
     width: 80%;
     border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
     position: absolute;
     right: 35%;
     top:10%;
     z-index: 0;
     content: " ";
     background-color: #fff;
   }
   &:before {
     height: 80%;
     width: 80%;
     border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
     position: absolute;
     left: 35%;
     top: 10%;
     z-index: 0;
     content: " ";
     background-color: #fff;
   } */
  ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;
      height: 70%;
      width: 35%;
      max-width:25vw;
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
      max-width:20vw;
    `}
`;

export const PreviewCard = styled.div`
  height: 80%;
 
  width: 45%;
max-width:35vw;

  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding:5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.$static &&
    css`
      position: static;
      z-index: 1;
      height: 100%;
      width: 100%;
        padding:8%;
      /* height: 60%;
      width: 30%; */
    `}
  ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;
      height: 70%;
      width: 35%;
      max-width:25vw;
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
      max-width:20vw;
    `}
`;

