import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

export const ImgContainer = styled.div`
  height: 90%;
  aspect-ratio: 1.1;
  position: relative;
  overflow: hidden;
  & > .elipse {
    height: 85%;
    aspect-ratio: 1.1;
    /* width: 75%; */
    position: absolute;
    bottom: 10%;
    left: 10%;
    border-radius: 50%;
    background: radial-gradient(
      104.23% 81.9% at 14.57% 81.6%,
      #000 0%,
      #15464c 76.56%,
      #33abb9 100%
    );
    filter: blur(11px);
  }

  & > .focus {
    position: absolute;
    bottom: 5%;
    left: 20%;
    height: 90%;
    aspect-ratio: 0.9;
  }
  ${(props) =>
    props.$floating &&
    css`
      width: 100%;
      height: 100%;
      max-width: 100vw;
      position: absolute;
      z-index: 0;
      & > img {
        width: 60%;
        min-width: 90vh;
        min-height: 90vh;
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
  ${(props) =>
    props.$middle &&
    css`
      & > .focus {
        left: 20%;
      }
      & > .elipse {
        left: 10%;

        background: radial-gradient(
          120.56% 99.48% at 9.97% 18.55%,
          #000 0%,
          #15464c 76.56%,
          #33abb9 100%
        );
      }
    `}
  ${(props) =>
    props.$last &&
    css`
      & > .elipse {
        bottom: -10%;
        left: 10%;
        background: radial-gradient(
          126.82% 117.33% at 89.46% -9.17%,
          #000 11.78%,
          #15464c 81.45%,
          #33abb9 100%
        );
        filter: blur(11px);
      }
    `}
  @media (max-width: 1500px)and(min-aspect-ratio:1.1) {
    width: 60%;
    ${(props) =>
      props.$floating &&
      css`
        width: 100%;
      `}
    ${(props) =>
      props.$last &&
      css`
        width: 50%;
      `}
  }
  @media (max-width: 1300px) and(min-aspect-ratio:1.1) {
    min-width: 40vw;
    ${(props) =>
      props.$floating &&
      css`
        width: 100%;
      `}
    ${(props) =>
      props.$last &&
      css`
        width: 50%;
      `}
  }
  @media (max-width: 900px) {
    width: 50%;
    min-width: 30vw;
    ${(props) =>
      props.$floating &&
      css`
        width: 100%;
      `}
    ${(props) =>
      props.$last &&
      css`
        width: 50%;
      `}
        & > .focus {
      height: 75%;
      left: 0%;
    }
    & > .elipse {
      height: 55%;
      right: 0%;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    /* height: 70%; */
    height: 100%;
    max-height: 70vh;
    margin: 0%;
    overflow: hidden;
     & > div{
        height: 50%;
     }
    & > .elipse {
      height: 70%;
    }
    & > .focus {
    
      height: 80%;
    }
      /* ${(props) =>
      props.$last &&
      css`
          min-height: 40vh;
          /* height: 60%; */
      `} */
      ${(props) =>
      props.$floating &&
      css`
        height: 100vh;
            max-height: 100vh;
             & > img {
    
      height: 90%;
    }
      `}
    ${(props) =>
      props.$first &&
      css`
           & > .focus {
      /* height: 75%; */
      left:auto;
      right: 20%;
    }
    & > .elipse {
      /* height: 55%; */
           left:auto;
      right: 10%;
    }
      `}
    ${(props) =>
      props.$middle &&
      css`
        order: 3;
                  & > .focus {
      /* height: 75%; */
      left:auto;
      left: 20%;
    }
    & > .elipse {
      /* height: 55%; */
           left:auto;
      left: 10%;
    }
      `}
    ${(props) =>
      props.$closer &&
      css`
        position: absolute;
        bottom: 15%;
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
  align-items: flex-start;
  z-index: 1;
  ${(props) =>
    props.$wide &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.$head &&
    css`
      justify-content: center;
      width: 60%;
      min-width: 220px;
      max-width: 543px;
      margin-left: 10%;
    `}
   @media (min-width: 1800px) {
    max-width: 30vw;
  }
  @media (max-width: 800px) {
    width: 30%;
  }

  @media (max-width: 550px) {
    padding: 0;
    width: 60%;
    height: 40%;
    margin: 0;
    margin-left: 0%;

    ${(props) =>
      props.$head &&
      css`
        position: absolute;
        top: 30%;
        left: 10%;

      `}
    ${(props) =>
      props.$wide &&
      css`
        width: 90%;
      `}
    ${(props) =>
      props.$last &&
      css`
        order: 3;
      `}
  }
`;
