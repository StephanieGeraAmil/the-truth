import styled, { css } from "styled-components";
import * as parameters from "./styling_parameters";
export const Form = styled.div`
  margin-top: auto;
  height: 30vh;
  width: 40vh;
  padding: 5%;
  z-index: 5;
  border-radius: 2vh;
  box-shadow: 1px 1px 10px #595959;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-49%, -55%);
`;

export const FormInput = styled.input`
  font-family: Montserrat, sans-serif;
  font-size: 1em;
  background-color:red;
  color: #8b8c89;
  width: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  @media (min-width: 1800px) {
    font-size: 1.8em;
  }

  ${(props) =>
    props.$bold &&
    css`
      font-weight: ${parameters.EXTRABOLD_FONT_WEIGHT};
    `}
    @media (max-aspect-ratio: 10/9) {
      font-size:3vw;
    }
 
  
`;
export const FormTextArea = styled.textarea`
  font-family: Montserrat, sans-serif;
  font-size: 1em;

  color: #8b8c89;
  width: 100%;
  height: 90%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  @media (min-width: 1800px) {
    font-size: 1.8em;
  }
  ${(props) =>
    props.subtitle &&
    css`
      font-size: 1.4em;
      font-weight: 500;
      height: 80%;
      @media (min-width: 1800px) {
        font-size: 2.5em;
      }
    `}
    @media (max-aspect-ratio: 10/9) {
      font-size:3vw;
    }
   
   
`;
