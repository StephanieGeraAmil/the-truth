import styled, { css } from "styled-components";
import { move } from "./styled_animations";
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

  @media (max-width: 600px) {
    aspect-ratio: auto;
    width: 80%;
    border-radius: 16%;
  }
  ${(props) =>
    props.$big &&
    css`
      position: absolute;
      z-index: 3;
      bottom: 0;
      right: 0;
      height: 75%;
      width: 35%;
      
    `}
  ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;
      height: 70%;
      width: 30%;
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
      width: 25%;
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
  padding: 8%;
  text-align:center;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
    animation: ${move} 5s 0.8s ease-in-out infinite;
  @media (max-width: 1000px) {
    width: 50%;
    right: 0%;
    bottom: 5%;
  }
  @media (max-width: 600px) {
    bottom: 6%;
    right:0;
    width: 70%;
  }

  ${(props) =>
    props.$static &&
    css`
      position: static;
      z-index: 1;
      height: 90%;
      width: 80%;
      margin: auto;
      padding: 8%;
      min-width: 240px;
      max-width: 45vh;
      @media (min-width: 1900px) {
        height: 100%;
        width: 100%;

      }
     
    `}
    ${(props) =>
      props.$big &&
      css`
        position: absolute;
        z-index: 3;
        bottom: 10%;
        right: 20%;
        width: 55%;
        aspect-ratio: 0.8;
        animation: ${move} 5s 0.5s ease-in-out infinite;
        @media (min-width: 1400px) {
          width: 50%;
          right: 0;
          bottom: 5%;
        }
        @media (max-width: 600px) {
          bottom: 0;
          width: 60%;
        }
      `}
    ${(props) =>
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 35%;
      width: 46%;
      aspect-ratio: 0.8;
      animation: ${move} 5s 0.5s ease-in-out infinite;
      @media (min-width: 1400px) {
        width: 40%;
        right: 15%;
        bottom: 10%;
      }
      @media (max-width: 600px) {
        bottom: 5%;
        width: 52%;
        right:20%;
      }
    `}
  ${(props) =>
    props.$small &&
    css`
      position: absolute;
      z-index: 1;
      bottom: 20%;
      right: 45%;
      width: 40%;
      aspect-ratio: 0.8;
        animation: ${move} 5s 0.3s ease-in-out infinite;

      @media (min-width: 1400px) {
        width: 30%;
        right: 30%;
        bottom: 15%;
      }
      @media (max-width: 600px) {
        bottom: 8%;
        width: 45%;
        right:35%;
      }
    `}
`;
