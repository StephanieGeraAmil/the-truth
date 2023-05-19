import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const SearchButton = styled.button`
  width:15%;
  min-width:90px;
  height: 80%;
  z-index: 2;
  border: 0;
  border-radius: 2vw;
  background-color: #6096ba;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 0.6rem; */
  font-size: 2vh;
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
    `}
      /* @media (max-width: 500px) {
border-radius: 4vw;
  }
      @media (min-width: 1500px) {
    font-size: 2vh;
  } */
        @media (max-width: 1800px)  and (min-height: 1000px){
    font-size: 1rem;
`;
export const StyledButton = styled.button`
  z-index: 2;
  border: 0;
  border-radius: 2vw;
  background-color: #6096ba;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
    `}
      @media (min-width: 1500px) {
    font-size: 2vh;
  }
`;
export const StyledLink = styled(Link)`
  border: 0;
  display: flex;
  justify-content: center;
  font-size: 0.8em;
  color: fff;
  margin: 5px;
  z-index: 10;
`;
