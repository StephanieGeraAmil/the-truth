import { Link } from "react-router-dom";
import styled, { css } from "styled-components";


export const StyledButton = styled.button`
  border: 0;
  background: transparent;
  width: 5vh;
  ${(props) =>
    props.$big &&
    css`
      width: 8vh;
    `}
  ${(props) =>
    props.$wide &&
    css`
      width: 12vh;
    `}
  ${(props) =>
  props.$medium &&
  css`
    width: 6vh;
  `} 
  /* @media (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 2vh;
  } */
`;
export const StyledLink = styled(Link)`
  border: 0;
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
  color: #fff;
  text-decoration: none;
  margin: 5px;
  z-index: 10;

  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1.5rem;
  }
`;

export const ColorAndTextButton = styled.button`
  width: 15%;
  min-width: 90px;
  height: 80%;
  z-index: 3;
  border: 0;
  border-radius: 2vw;
  background-color: #33abb9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  ${(props) =>
    props.$hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  ${(props) =>
    props.$wide &&
    css`
      width: 40%;
    `}
    ${(props) =>
    props.$margin &&
    css`
      margin-top: 0.8em;
    `}
      ${(props) =>
    props.$short &&
    css`
       height: 2em;
    `}

  @media (max-width: 1800px)  and (min-height: 1000px) {
    font-size: 1rem;
  }
`;
