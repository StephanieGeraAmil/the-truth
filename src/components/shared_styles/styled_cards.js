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

  @media (max-width: 500px) {
    aspect-ratio: auto;
    width: 80%;
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
  padding: 8%;
  text-align:center;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
    animation: ${move} 5s 0.8s ease-in-out infinite;
  @media (max-width: 900px) {
    width: 50%;
    right: 0%;
    bottom: 5%;
  }
  @media (max-width: 550px) {
    bottom: 6%;
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
    props.$medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 30%;
      width: 50%;
      aspect-ratio: 0.8;
      animation: ${move} 5s 0.5s ease-in-out infinite;
      @media (max-width: 900px) {
        width: 40%;
        right: 15%;
        bottom: 10%;
      }
      @media (max-width: 550px) {
        bottom: 9%;
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
        animation: ${move} 5s 0.3s ease-in-out infinite;

      @media (max-width: 900px) {
        width: 30%;
        right: 30%;
        bottom: 15%;
      }
      @media (max-width: 550px) {
        bottom: 11%;
      }
    `}
`;
