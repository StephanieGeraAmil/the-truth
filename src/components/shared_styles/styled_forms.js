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
  font-size: 1.6em;
  color: #8b8c89;
  width: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;

  ${(props) =>
    props.$bold &&
    css`
      font-weight: ${parameters.EXTRABOLD_FONT_WEIGHT};
      font-size: ${parameters.SMALL_FONT_SIZE};
    `}
  @media (min-width: 1400px) {
    font-size: 1.5em;
  }
  @media (max-width: 600px) {
    font-size: 1.4em;
  }
  
`;
export const FormTextArea = styled.textarea`
  font-family: Montserrat, sans-serif;
  font-size: 1.6em;
  color: #8b8c89;
  width: 100%;
  height: 90%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  ${(props) =>
    props.subtitle &&
    css`
      font-size: 4.5vh;
      font-weight: 500;
      height: 80%;
    `}
    @media (min-width: 1400px) {
      font-size: 1.5em;
    }
    @media (max-width: 600px) {
      font-size: 1.4em;
    }
`;
