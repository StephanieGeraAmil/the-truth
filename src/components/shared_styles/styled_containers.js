import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

export const ImgContainer = styled.div`
  width: 40%;
  height: 85%;
   min-width: 500px;
  max-width: 1400px;
  position: relative;
  overflow: hidden;
  & > .elipse {
    height: 85%;
    width: 70%;
        position: absolute;
    bottom:10%;
    left: 10%;
    border-radius: 50%;
    /* background-image: radial-gradient(
      circle farthest-corner at 0% 0%,
      #000 0%,
      #15464c 70%,
      #33abb9 100%
    ); */
    background: radial-gradient(104.23% 81.90% at 14.57% 81.60%, #000 0%, #15464C 76.56%, #33ABB9 100%);
filter: blur(11px);

/* background: radial-gradient(120.56% 99.48% at 9.97% 18.55%, #000 0%, #15464C 76.56%, #33ABB9 100%); */

  }
  /* & > img {
    width: 60%;
    object-fit: contain;
  } */
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
      max-width:100vw;
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
         ${(props) =>
    props.$middle &&
    css` 
     & > .elipse {
          left: 0%;
      background: radial-gradient(120.56% 99.48% at 9.97% 18.55%, #000 0%, #15464C 76.56%, #33ABB9 100%);
     }
     `}
     ${(props) =>
    props.$last &&
    css` 
     & > .elipse {
     background: radial-gradient(126.82% 117.33% at 89.46% -9.17%, #000 11.78%, #15464C 81.45%, #33ABB9 100%);
filter: blur(11px);

     }
     `}
  @media (max-width: 550px) {
    width: 100%;
    height: 70%;
    min-height: 70vh;
    margin: auto;
    & > .elipse {
      height:60%;
      width: 100%;
    }
    /* & > img {
      width: 100%;
      object-fit: cover;
    } */
    & > .focus {
      height: 325px;
      width: 286px;

    }
    ${(props) =>
      props.$floating &&
      css`
        & > img {
          width: 100%;
        }
      `}
    ${(props) =>
      props.$middle &&
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
  /* align-items: center; */
      align-items:flex-start;
  z-index: 1;
  ${(props) =>
    props.$wide &&
    css`
      width: 30%;
    `}
  ${(props) =>
    props.$head &&
    css`
      margin-left: 10%;
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
    width: 70%;
    height: 50vh;
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
    props.$wide &&
    css`
      width: 85%;
    `}

    ${(props) =>
      props.$last &&
      css`
        order: 3;
      `}
  }
`;
