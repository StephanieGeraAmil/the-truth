import styled, { keyframes } from "styled-components";

export const float = keyframes`
    0% {  rotate: 0deg; scale: 1.1; }
    50% {  rotate: 5deg; scale: 1.2; }
    100% {  rotate: 0deg; scale: 1.1;}
`;
export const move = keyframes`
    0% { transform: translatey(0); }
    50% {  transform: translatey(-15px); }
    100% {  transform: translatey(0); }
`;
export const enterRight = keyframes`
    0% {transform: translate(100px); opacity: 0;}
    100% { transform: translate(0);opacity: 1;scale: 1.1;}
`;
export const enterLeft= keyframes`
    0% {transform: translate(-100px); opacity: 0;}
    100% { transform: translate(0);opacity: 1;scale: 1.1;}
`;
