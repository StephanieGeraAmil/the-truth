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
`;
export const StyledLink = styled(Link)`
  border: 0;
  display: flex;
  justify-content: center;
  font-size: 1.2vw;
  color: #fff;
  text-decoration: none;
  margin: 5px;
  z-index: 10;

  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1.5rem;
  }
`;



// borderRadius: {
//   xs: "2vw",  
//   sm: "5px",    
//   md: "10px", 

// },

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
    @media (max-width: 600px)  {
      font-size: 15px;
      border-radius: 8px;
    }
`;
