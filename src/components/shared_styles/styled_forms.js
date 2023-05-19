import styled, { css } from "styled-components";
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
  font-size: 1.8vh;
  color: #8b8c89;
  width: 90%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
`;
export const FormTextArea = styled.textarea`
  font-family: Montserrat, sans-serif;
  font-size: 1.8vh;
  color: #8b8c89;
  width: 90%;
  height: 90%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
`;
