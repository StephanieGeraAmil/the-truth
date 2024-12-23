import styled, { css } from "styled-components";
import * as parameters from "./styling_parameters";

export const Title = styled.h1`
  font-size: ${parameters.BIG_FONT_SIZE};
  font-weight: ${parameters.THICK_FONT_WEIGHT};
  
  margin: 0 0 0.2em 0;
  padding: 0;
  color: ${parameters.WHITE};

  

  @media (max-width: 1800px) and (min-height: 1000px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 70px;
    padding: 5px;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${parameters.MEDIUM_FONT_SIZE};
  font-weight: ${parameters.EXTRABOLD_FONT_WEIGHT};
  margin: 0 0 0.5em 0;
  padding: 0;
  color: ${parameters.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  ${(props) =>
    props.$big &&
    css`
    margin:0;
    font-size: ${parameters.BIG_FONT_SIZE};

    `}
 
  ${(props) =>
    props.$color &&
    css`
      color: ${parameters.PRIMARY_COLOR};
    `}
  @media (max-aspect-ratio: 10/9) {
    font-size:8vw;
  }
  @media (max-width: 600px) {
    font-size: 25px;
    ${(props) =>
    props.$big &&
    css`
        font-size: 50px;
      `}
  
  }
 
`;


export const Info = styled.p`
  font-size: ${parameters.XS_FONT_SIZE};
  line-height: 1.4em;
  font-weight: ${parameters.THIN_FONT_WEIGHT};
  
  margin: 0.5em 0;
  text-align:start;    
  padding: 0;
  color: ${parameters.WHITE};
  word-wrap: break-word;
  overflow-wrap: break-word;

  ${(props) =>
    props.$centered &&
    css`
    text-align:center;    
    `}

  ${(props) =>
    props.$gray &&
    css`
      color: ${parameters.BLACK};
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
      font-weight: ${parameters.EXTRABOLD_FONT_WEIGHT};
      font-size: ${parameters.SMALL_FONT_SIZE};
    `}

  ${(props) =>
    props.$wide &&
    css`
      width: 100%;
    `}
    ${(props) =>
    props.$addmenu &&
    css`
        width: 6vw;
      `}

  
    ${(props) =>
    props.$large &&
    css`
        height: 90%;
      `}
 

  ${(props) =>
    props.$short &&
    css`
      width: 50%;
    `}
    @media (max-aspect-ratio: 11/9) {
      font-size:2.1vw;
      ${(props) =>
        props.$xs &&
        css`
        font-size:2.3vw;
          `}
    }
    @media (max-aspect-ratio: 10/9) {
      font-size:3vw;
      ${(props) =>
        props.$xs &&
        css`
        font-size:2.5vw;
          `}
    }
  @media (max-width: 600px) {
    font-size: 15px;
    ${(props) =>
    props.$xs &&
    css`
      font-size: 11px;
      `}
      ${(props) =>
    props.$addmenu &&
    css`
          width: 20vw;
        `}
  }
 
`;
////DECKS///
export const DeckTitle = styled.h3`
  font-size: ${parameters.SM_FONT_SIZE};
  font-weight: ${parameters.BOLD_FONT_WEIGHT};
  margin: 0 0 0.5em 0;
  padding: 0;
  color: ${parameters.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

