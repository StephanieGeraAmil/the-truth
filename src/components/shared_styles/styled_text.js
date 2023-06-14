import styled, { css } from "styled-components";
export const Title = styled.h1`
  font-size: 8vh;
  font-weight: 900;
  margin: 0;
  margin-bottom: 0.2em;
  padding: 0;
  color: #fff;

  & > span {
    /* color: #3D7FD8; */
    /* color:#2D93FA; */
    /* color: #5aa2f0; */
    color:#33ABB9
  }
  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 4rem;
  }
`;
export const SubTitle = styled.h3`
  font-size: 4.5vh;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  color: #fff;
  ${(props) =>
    props.color &&
    css`
      /* color: #5aa2f0; */
          color:#33ABB9
    `}
`;
export const Info = styled.p`
  font-size: 2vh;
  line-height: 1.1em;
  font-weight: 100;
  margin: 0;
  width: 80%;
  align-self: flex-start;
  /* margin-bottom: 0.5em; */
  padding: 0;
  color: #fff;
  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1rem;
  }
`;
