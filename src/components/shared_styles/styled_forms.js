import styled, { css } from "styled-components";
export const Form = styled.div`
  margin-top: 10px;
  height: 80%;
  width: 80%;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 2px 2px 7px #595959;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  margin-top: 10px;
  width: 80%;
  border: none;
  border-bottom: 1px solid grey;
  resize: none;
  outline: none;
  background-color: transparent;
 
`;
export const FormTextArea = styled.textarea`
  margin-top: 20px;
  width: 80%;
  height: 80%;
  box-shadow: inset 0 0 5px #595959;
  border-radius: 10px;
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
`;
