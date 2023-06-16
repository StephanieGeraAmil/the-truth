import styled, { css } from "styled-components";
export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;
export const PreviewCard = styled.div`
  height: 80%;
  width: 45%;
  position: absolute;
  bottom: 10%;
  right: 0%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding:5%;
  background: #fff;
  border-radius: 20%;
  box-shadow: 0px 4px 9px 6px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.static &&
    css`
      position: static;
      z-index: 1;
      height: 100%;
      width: 100%;
        padding:8%;
      /* height: 60%;
      width: 30%; */
    `}
  ${(props) =>
    props.medium &&
    css`
      position: absolute;
      z-index: 2;
      bottom: 15%;
      right: 20%;
      height: 70%;
      width: 35%;
    `}
  ${(props) =>
    props.small &&
    css`
      position: absolute;
      z-index: 1;
      bottom: 20%;
      right: 35%;
      height: 60%;
      width: 30%;
    `}
`;
