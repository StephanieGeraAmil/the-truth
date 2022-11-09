import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  border: 0;
  border-radius: 10px;
  font-size: 12px;
  padding: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  ${(props) =>
    props.topRight &&
    css`
      position: absolute;
      top: 0;
      right: 0;
    `}
  ${(props) =>
    props.adyacent &&
    css`
      position: relative;
      top: -40px;
      right: -320px;
    `}
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
       pointer-events: none;
    `}
`;

export const NavLink = styled(Link)`
  border: 0;
  background-color: #433e3e;
  display: flex;
  justify-content: center;
  color: fff;
  margin: 5px;
  z-index: 10;
`;
