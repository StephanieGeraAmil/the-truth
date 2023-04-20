import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  width: 7vw;
  height:70%;
  z-index:10;
  border: 0;
  border-radius:2vw;
  background-color: #201352;
  display: flex;
  justify-content: center;
  align-items:center;

  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const StyledLink = styled(Link)`
  border: 0;
  display: flex;
  justify-content: center;
  color: fff;
  margin: 5px;
  z-index: 10; 
`;
