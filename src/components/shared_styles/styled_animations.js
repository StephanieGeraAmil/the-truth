import styled, { keyframes } from "styled-components";
export const Fade = keyframes`
  from {
      opacity: 1; 
  }to {
      opacity: 0; 
  }
`;
export const Appear = keyframes`
  from {
      opacity: 0; 
  }to {
      opacity: 1; 
  }
`;
export const AppearAndFade = keyframes`
  0% {
      opacity: 0; 
  }50% {
      opacity: 1; 
  }100% {
      opacity: 0; 
  }
`;