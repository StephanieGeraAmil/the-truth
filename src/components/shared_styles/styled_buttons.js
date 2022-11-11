import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  width: 25px;
  border: 0;
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
      margin:15px;
    `}
     ${(props) =>
    props.bottomRight &&
    css`
      position: absolute;
      bottom: 0;
      right: 0;
      margin:15px;
    `}
  ${(props) =>
    props.adyacent &&
    css`
      display: inline-block;
    `}
  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const StyledLink = styled(Link)`
  border: 0;
  background-color: #433e3e;
  display: flex;
  justify-content: center;
  color: fff;
  margin: 5px;
  z-index: 10;
  ${(props) =>
    props.whiteButton &&
    css`
      background-color: white;
     
    `}
   ${(props) =>
    props.topRight &&
    css`
      /* background-color: white; */
      position: absolute;
      top: 0;
      right: 0;
      margin:15px;
    `}
     ${(props) =>
    props.bottomRight &&
    css`
          /* background-color: white; */
      position: absolute;
      bottom: 0;
      right: 0;
      margin:15px;
    `}
`;