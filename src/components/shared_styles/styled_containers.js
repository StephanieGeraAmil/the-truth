import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

export const ImgContainer = styled.div`
  width: 40%;
  height: 85%;
  position: relative;
  overflow: hidden;
  & > div {
    height: 70%;
    width: 70%;
    border-radius: 50%;
    background-image: radial-gradient(
      circle farthest-corner at 0% 0%,
      #000 0%,
      #15464c 70%,
      #33abb9 100%
    );
  }
  & > img {
    width: 60%;
    object-fit: contain;
  }
  & > .focus {
    position: absolute;
    bottom: 5%;
    left: 20%;
    width: 60%;
  }
  ${(props) =>
    props.$floating &&
    css`
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;

      & > img {
        width: 60%;
        min-width: 700px;
        min-height: 700px;
        max-height: 2800px;
        max-width: 2800px;
        position: absolute;
        right: -5%;
        animation: ${enterRight} 1.5s ease-in-out,
          ${float} 6s ease-in-out infinite, ${move} 6s ease-in-out infinite;
        animation-delay: 0s, 0s, 1.5s;
        mix-blend-mode: lighten;
      }
    `}
  @media (max-width: 550px) {
    width: 100%;
    height: 70%;
    min-height: 70vh;
    margin: auto;
    & > div {
      height: 80%;
      width: 90%;
    }
    & > img {
      width: 100%;
      object-fit: cover;
    }
    & > .focus {
      height: 40vh;
      width: 40%;
    }
    ${(props) =>
      props.$floating &&
      css`
        /* height: 100%; */
        & > img {
          width: 100%;
        }
      `}
    ${(props) =>
      props.$last &&
      css`
        order: 3;
      `}
    ${(props) =>
      props.$closer &&
      css`
        position: absolute;
        bottom: 0;
        z-index: 0;
      `}
  }
`;
export const TextContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${(props) =>
    props.$wide &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.$head &&
    css`
      /* justify-content: flex-end; */
      /* padding-top: 15vh; */
      /* width: 30%; */
      margin-left: 10%;
      /* margin-bottom: 20%; */
      justify-content: center;
      width: 60%;
      min-width: 410px;
      max-width: 543px;
      margin-left: 10%;
      @media (min-width: 1800px) {
        max-width: 30vw;
      }
    `}

  @media (max-width: 550px) {
    padding: 0;
    width: 55%;
    height: 60vh;
    margin: 0;
    margin-left: 10%;
    justify-content: flex-end;
    ${(props) =>
      props.$head &&
      css`
        height: 90vh;
          min-width: 280px;
      `}

    ${(props) =>
      props.$last &&
      css`
        order: 3;
      `}
  }
`;
