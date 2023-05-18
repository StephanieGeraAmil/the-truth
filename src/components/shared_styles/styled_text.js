import styled, { css } from "styled-components";
export const Title = styled.h1`
  font-size: 8vh;
  font-weight: 900;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  color: #8b8c89;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
`;
export const SubTitle = styled.h3`
  font-size: 4vh;
  font-weight: 500;
  margin: 0;
  padding: 0;
  color: #8b8c89;
  ${(props) =>
    props.white &&
    css`
      color: #fff;
    `}
  ${(props) =>
    props.blue &&
    css`
      color: #6096ba;
    `}
  ${(props) =>
    props.smaller &&
    css`
      font-size: 3.5vh;
      font-weight: 600;
      text-align: center;
    `} 
`;
export const Info = styled.p`
  font-size: 2vh;
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
  ${(props) =>
    props.bigger &&
    css`
      font-size: 2.2vh;
    `} 
`;
