import styled, { css } from "styled-components";
import { float, move, enterRight, enterLeft } from "./styled_animations";

export const ImgContainer = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  & > img {
    /* height: 100%; */
    width: 100%;
   /* position: absolute;
    top: -35%; */
    /* animation: ${enterLeft} 1.5s ease-in-out;
    animation-delay: 0s; */
  }
  & > .focus {
    position: absolute;
    bottom: 5%;
    left: 20%;
    width: 60%;
    /* animation-delay: 0.2s; */
  }
    & > .widerFocus {
    position: absolute;
    /* bottom: -15%; */
    left: 30%;
    width: 100%;
     height: 100%; 
    /* animation-delay: 0.2s; */
  }

  ${(props) =>
    props.wide &&
    css`
      width: 50%;
        /* & > img {
    height: 100%;
  } */
    `}

  ${(props) =>
    props.floating &&
    css`
      & > img {
        animation: ${enterRight} 1.5s ease-in-out,
          ${float} 6s ease-in-out infinite, ${move} 6s ease-in-out infinite;
        animation-delay: 0s, 0s, 1.5s;
        mix-blend-mode: lighten;
      }
    `}
`;
export const TextContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.wide &&
    css`
      width: 30%;
    `}
`;
