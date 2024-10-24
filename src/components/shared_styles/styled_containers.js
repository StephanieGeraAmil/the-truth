import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

// Image container styling
export const ImgContainer = styled.div`
  width: ${(props) => (props.$floating ? "80%" : "40%")};
  aspect-ratio: 1.1;
  right: 0;
  top: 0;
  position: ${(props) => (props.$floating ? "absolute" : "relative")};
  overflow: hidden;
  z-index: 0;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    max-height: ${(props) => (props.$floating ? "100vh" : "70vh")};
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
        position: absolute;
        right: -5%;
        animation: ${enterRight} 1.5s ease-in-out, ${float} 6s ease-in-out infinite, ${move} 6s ease-in-out infinite;
        animation-delay: 0s, 0s, 1.5s;
        mix-blend-mode: lighten;
      }
    `}

  & > .elipse {
    height: 85%;
    aspect-ratio: 1.1;
    position: absolute;
    bottom: ${(props) => (props.$last ? "2%" : "10%")};
    left: 10%;
    border-radius: 50%;
    filter: blur(11px);
    
    @media (max-width: 900px) {
      height: 55%;
      left: ${(props) => (props.$first || props.$middle ? "30%" : "auto")};
    }

    @media (max-width: 550px) {
      height: 75%;
      left: ${(props) => (props.$first ? "auto" : "10%")};
      right: ${(props) => (props.$first ? "10%" : "auto")};
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
      left: ${(props) => (props.$first ? "40%" : "30%")};
    }

    @media (max-width: 550px) {
      height: 90vw;
      left: ${(props) => (props.$first ? "auto" : "20%")};
      right: ${(props) => (props.$first ? "20%" : "auto")};
    }
  }
`;

// Text Container Styling
export const TextContainer = styled.div`
  width: ${(props) => (props.$all ? "100%" : "40%")};
  height: 100%;
  z-index: 1;
  @media (max-aspect-ratio: 14/9) {
    background-color:purple; 
 
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;
