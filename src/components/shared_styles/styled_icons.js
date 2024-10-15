import styled, { css } from "styled-components";

import {
  ArrowForwardIos,
  ArrowBackIos,
  KeyboardArrowUp,
  Delete,
  Edit as EditIcon,
  AddCircleOutline,
  Done,
  Close as CloseIcon
} from "@styled-icons/material";
const bigSize = "8vh";
const mediumSize = "5vh";
const smallSize = "5vh";
const primaryColor = "#133F45";
const white = "#FFF";
const sharedStyle = css`
  color: ${(props) => (props.$color ? primaryColor : white)};
  size: ${smallSize};
  padding: 0;
  margin: 0;
  ${(props) =>
    props.$big &&
    css`
      size: ${bigSize};
    `}
  ${(props) =>
    props.$medium &&
    css`
      size: ${mediumSize};
    `}
    ${(props) =>
      props.$gray &&
      css`
        color: gray;
      `}
`;
export const Next = styled(ArrowForwardIos)`
  ${sharedStyle}
`;
export const Prev = styled(ArrowBackIos)`
  ${sharedStyle}
`;
export const Back = styled(KeyboardArrowUp)`
  ${sharedStyle}
`;
export const Remove = styled(Delete)`
  ${sharedStyle}
`;
export const Edit = styled(EditIcon)`
  ${sharedStyle}
`;
export const Plus = styled(AddCircleOutline)`
  ${sharedStyle}
`;
export const Save = styled(Done)`
  ${sharedStyle}
`;
export const Close = styled(CloseIcon)`
  ${sharedStyle}
`;
