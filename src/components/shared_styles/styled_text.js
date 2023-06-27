import styled, { css } from "styled-components";
const bigSize = "8vh";
const mediumSize = "5vh";
const smallSize = "2vh";
const thick = "900";
const bold = "500";
const regular = "300";
const thin = "100";
const primaryColor = "#133F45";
const secondaryColor = "#33ABB9";
const white = "#FFF";
const gray = "#8b8c89;";
const black = "#000";
export const Title = styled.h1`
  font-size: ${bigSize};
  font-weight: ${thick};
  margin: 0;
  margin-bottom: 0.2em;
  padding: 0;
  color: ${white};

  & > span {
    color: ${secondaryColor};
  }

  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 4rem;
  }
`;
export const SubTitle = styled.h3`
  font-size: ${mediumSize};
  font-weight: ${bold};
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  color: ${white};
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.$big &&
    css`
      font-size: ${bigSize};
      height: 10vh;
    `}

  ${(props) =>
    props.$color &&
    css`
      color: ${primaryColor};
    `}
`;
export const Info = styled.p`
  font-size: ${smallSize};
  line-height: 1.1em;
  font-weight: ${thin};
  width: 80%;
  margin: 0 auto;
  align-self: flex-start;
  padding: 0;
  color: ${white};
  ${(props) =>
    props.$gray &&
    css`
      color: ${black};
    `}
  ${(props) =>
    props.$right &&
    css`
      align-self: flex-end;
      margin: 0;
    `}
     ${(props) =>
    props.$bold &&
    css`
      font-weight: ${bold};
    `}
         ${(props) =>
    props.$wide &&
    css`
      width: 100%;
    `}
    ${(props) =>
    props.$short &&
    css`
      width: 50%;
    `}
  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 1rem;
  }
`;
