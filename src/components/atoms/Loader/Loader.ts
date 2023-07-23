import styled, { keyframes } from "styled-components";
import { colors } from "../../../colors";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }`;

export const Loader = styled.div<{ $width?: number }>`
  border: 10px solid ${colors.offWhite};
  border-top: 10px solid ${colors.blue3};
  border-radius: 50%;
  width: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  height: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  min-width: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  min-height: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  animation: ${spin} 1s linear infinite;
`;
