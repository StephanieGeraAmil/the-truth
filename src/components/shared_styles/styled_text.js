import styled, { css } from "styled-components";
export const Title = styled.h1`
font-size:2.5rem;
  font-weight: 900;
  margin: 0;
  margin-bottom: 1vh;
  padding: 0;
  color: #8b8c89;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  @media (min-width: 1200px) {
    font-size: 9vh;
  }
`;
export const SubTitle = styled.h3`
  font-size: 6vh;
  font-weight: 500;
  margin: 0;
  /* margin-bottom: 1vh; */
  padding: 0;
  color: #8b8c89;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  /* @media (max-width: 500px) {
    font-size: 7vh;
    height: 8vh;
  } */
`;
export const Info = styled.p`
font-size:0.6rem;
  line-height: 1.1em;
  font-weight: 100;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  color: #8b8c89;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  @media (max-width: 500px) {
    font-size:0.8rem;
    line-height: 1.2em;
  }
  @media (min-width: 1200px) {
    font-size:2vh;
  
  }
`;
