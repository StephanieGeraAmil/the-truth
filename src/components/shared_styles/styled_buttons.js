import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  width: 7vw;
  height: 70%;
  z-index: 10;
  border: 0;
  border-radius: 2vw;
  background-color: #0D0C3C;
  display: flex;
  justify-content: center;
  align-items: center;
    font-family: Montserrat, sans-serif;

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
`;

export const StyledLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  border: 0;
  display: flex;
  justify-content: center;
  font-size:0.8em;
  color: fff;
  margin: 5px;
  z-index: 10;
`;
