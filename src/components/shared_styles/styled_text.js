import styled, { css } from "styled-components";
const bigSize = "5vw";
const mediumSize = "3.5vw";
const smallSize = "1.2vw";
const smSize = "1.3vw";
const thick = "900";
const extra_bold = "500";
const bold = "500";
const regular = "300";
const thin = "100";
const primaryColor = "#133F45";
const secondaryColor = "#33ABB9";
// const secondaryColor = "#85D5E0";
const white = "#f0f0f0";
// const gray = "#8b8c89;";
const gray = "#f0f0f0;";
const black = "#000";
export const Title = styled.h1`
  font-size: ${bigSize};
  font-weight: ${thick};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  @media (max-width: 600px) {

    font-size:70px;
    padding:5px;
    
  }
`;
export const SubTitle = styled.h3`
  font-size: ${mediumSize};
  font-weight: ${extra_bold};
  margin: 0;
  margin-bottom: 0.5em;
  padding: 0;
  color: ${white};
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

    @media (max-width: 600px) {

      font-size:25px;
      
    }
`;
export const Info = styled.p`
  font-size: ${smallSize};
  line-height: 1.4em;
  font-weight: ${thin};
  width: 80%;
  margin: 0.2em 0;
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
      font-weight: ${extra_bold};
      font-size:${smSize};
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

    @media (max-width: 600px) {

      font-size:15px;
      
    }

`;

// @media (max-width: 1800px) and (min-height: 1000px) {
//   font-size: 1rem;
// }
