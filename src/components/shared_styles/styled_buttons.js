import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
export const StyledButton = styled.button`
  /* z-index: 0; */
  border: 0;
  background: transparent;
  /* vertical-align: center; */
/* display: flex; */
/* flex-direction: row;
justify-content: center;
align-items: center; */
/* overflow:hidden; */
  /* height: 5.5vh; */
  width: 5vh;
${(props) =>
    props.big &&
    css`
    /* height: 8vh;
  width: 8vh; */
   width: 8vh
    `}
    ${(props) =>
    props.medium &&
    css`
    /* height: 6vh;
  width: 6vh; */
   width: 6vh
    `}
  /* @media (max-width: 500px) {
    font-size: 0.8rem;
  }
  @media (min-width: 1200px) {
    font-size: 2vh;
  } */
`;
// export const StyledButton = styled.button`
//   align-self: flex-start;
//   /* margin-top: 5%; */
//   z-index: 2;
//   border: 0;
//   border-radius: 2vw;
//   padding: 2.5% 4%;

//   /* background-color: #6096ba; */
//   /* background-color: #5aa2f0; */
//   background-color: #33abb9;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* font-size: 0.8rem; */
//   font-size: 2.5vh;
//   ${(props) =>
//     props.hidden &&
//     css`
//       opacity: 0;
//       pointer-events: none;
//     `}
//   ${(props) =>
//     props.transparent &&
//     css`
//       background-color: transparent;
//     `}
//   @media (max-width: 1800px) and (min-height: 1000px) {
//     font-size: 1.5rem;
//   }
//   /* @media (min-width: 1500px) {
//     font-size: 2vh;
//   } */
// `;
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

export const SearchButton = styled.button`
  width: 15%;
  min-width: 90px;
  height: 80%;
  z-index: 2;
  border: 0;
  border-radius: 2vw;
  /* background-color: #6096ba; */
  background-color: #33abb9;
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

        @media (max-width: 1800px)  and (min-height: 1000px) {
    font-size: 1rem;
  }
`;
