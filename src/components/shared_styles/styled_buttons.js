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
      width: 7.5vw;
    `}
    ${(props) =>
      props.$addmenu &&
      css`
        width: auto;
      `}
  
  ${(props) =>
  props.$medium &&
  css`
    width: 6vh;
  `} 

  @media (min-width: 1200px)  {
    font-size: 1.5w;
  }
  @media (max-aspect-ratio: 14/9) {
    width:4vw;
    ${(props) =>
      props.$wide &&
      css`
        width: 20vw;
      `}
  }
  @media (max-aspect-ratio: 9/9) {
    width:5vw;
    ${(props) =>
      props.$wide &&
      css`
        width: 20vw;
      `}
  }
  @media (max-width: 600px)  {
    width: 5vh;
    ${(props) =>
      props.$wide &&
      css`
        width: 24vw;
      `}
      ${(props) =>
        props.$addmenu &&
        css`
          width: auto;
        `}
  }
 
`;
export const StyledLink = styled(Link)`
  border: 0;
  display: flex;
  justify-content: center;

  color: #fff;
  text-decoration: none;
  margin: 5px;
  z-index: 10;
  @media (max-aspect-ratio: 14/9) {
    font-size: 2.6vw!important;
   
  }
 
`;

export const ColorAndTextButton = styled.button`
line-height:1.8em;
padding:0.5em 1.5em;
margin-top: 2em;
  z-index: 3;
  border: 0;
  border-radius: 0.3vw;
  background-color: #33abb9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2vw;
  ${(props) =>
    props.$hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
    ${(props) =>
      props.$nav &&
      css`
       margin-top:0;
       padding: 0.2em 2em;
    

      `}
   

    @media (min-width: 1200px)  {
      font-size: 1.5w;
    }
    @media (max-aspect-ratio: 14/9) {
      font-size: 2.6vw!important;
     
    }
    @media (max-width: 600px)  {
      font-size: 15px;
      border-radius: 8px;
    }
`;
