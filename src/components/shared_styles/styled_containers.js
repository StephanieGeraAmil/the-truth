import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

export const ImgContainer = styled.div`
  height: ${(props) => (props.$floating ? "100%" : "90%")};
  aspect-ratio: 1.1;
  right: 0%;
  top: 0%;
  position: ${(props) => (props.$floating ? "absolute" : "relative")};
  overflow: hidden;
  z-index: 0;

  @media (max-width: 1500px) and(min-aspect-ratio:1.1) {
    width: ${(props) => (props.$floating ? "100%" : "60%")};
  }
  @media (max-width: 1300px) and(min-aspect-ratio:1.1) {
    min-width: 40vw;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    max-height: ${(props) => (props.$floating ? "100vh" : "70vh")};
    margin: 0%;
    ${(props) =>
      props.$middle &&
      css`
        order: 3;
      `}
  }
  ${(props) =>
    props.$floating &&
    css`
      & > img {
        height: 90%;
        aspect-ratio: 1.1;
        /* min-width: 90vh;
        min-height: 90vh;
        max-height: 2800px;
        max-width: 2800px; */
        position: absolute;
  
        right: -5%;
        animation: ${enterRight} 1.5s ease-in-out,
          ${float} 6s ease-in-out infinite, ${move} 6s ease-in-out infinite;
        animation-delay: 0s, 0s, 1.5s;
        mix-blend-mode: lighten;
      }
    `}

  & > .elipse {
    height: 85%;
    aspect-ratio: 1.1;
    position: absolute;
    bottom: ${(props) => (props.$last ? "-10%" : "10%")};
    left: 10%;
    border-radius: 50%;
    filter: blur(11px);
    @media (max-width: 900px) {
      height: 55%;
      right: auto;
      ${(props) =>
        props.$first &&
        css`
          left: 30%;
        `}
      ${(props) =>
        props.$middle &&
        css`
          left: 30%;
        `}
    }
    @media (max-width: 550px) {
      height: 75%;
      ${(props) =>
        props.$first &&
        css`
          left: auto;
          right: 10%;
        `}
      ${(props) =>
        props.$middle &&
        css`
          left: auto;
          left: 10%;
        `}
    }
    ${(props) =>
      props.$first &&
      css`
        background: radial-gradient(
          104.23% 81.9% at 14.57% 81.6%,
          #000 0%,
          #15464c 76.56%,
          #33abb9 100%
        );
      `}
    ${(props) =>
      props.$middle &&
      css`
        background: radial-gradient(
          120.56% 99.48% at 9.97% 18.55%,
          #000 0%,
          #15464c 76.56%,
          #33abb9 100%
        );
      `}
      ${(props) =>
      props.$last &&
      css`
        background: radial-gradient(
          126.82% 117.33% at 89.46% -9.17%,
          #000 11.78%,
          #15464c 81.45%,
          #33abb9 100%
        );
      `}
  }

  & > .focus {
    position: absolute;
    bottom: 5%;
    left: 20%;
    height: 90%;
    aspect-ratio: 0.9;

    @media (max-width: 900px) {
      height: 75%;
      ${(props) =>
        props.$first &&
        css`
          left: 40%;
        `}
      ${(props) =>
        props.$middle &&
        css`
          left: 30%;
        `}
    }
    @media (max-width: 550px) {
      height: 90%;
      ${(props) =>
        props.$first &&
        css`
          left: auto;
          right: 20%;
        `}
      ${(props) =>
        props.$middle &&
        css`
          left: auto;
          left: 20%;
        `}
    }
  }
`;
export const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;

  ${(props) =>
    props.$head &&
    css`
      justify-content: center;
      width: 60%;
      min-width: 220px;
      max-width: 543px;
      margin-left: 10%;
    `}
  ${(props) =>
    props.$wide &&
    css`
      width: 50%;
    `}
    @media (min-width: 1800px) {
    max-width: 30vw;
  }
 
  @media (max-width: 900px) {
    padding: 0;
    height: 40%;
    margin: 0;
    margin-left: 10%;
    width: 80%;
    
  }
`;
