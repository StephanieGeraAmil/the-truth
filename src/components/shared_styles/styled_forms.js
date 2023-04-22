import styled, { css } from "styled-components";
export const Form = styled.div`
  margin-top: 10px;
  height: 150px;
  width: 230px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 2px 2px 7px #595959;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -49% -55%;
  ${(props) =>
    props.embeded &&
    css`
      box-shadow: none;
      border: none;
      width: 90%;
      height: 90%;
      padding: 0;
    `}
`;
export const FormInput = styled.input`
  font-family: Montserrat, sans-serif;
  width: 90%;
  border:none;
  border-bottom: 0.8px solid #ccc;
  resize: none;
  outline: none;
  background-color: transparent;
`;
export const FormTextArea = styled.textarea`
  font-family: Montserrat, sans-serif;
  width: 90%;
  height: 90%;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
`;
