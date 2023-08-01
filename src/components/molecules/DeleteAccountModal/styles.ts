import styled, { keyframes } from "styled-components";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";

export const Wrapper = styled(FlexBox)`
  height: 300px;
  position: relative;
`;

const float = keyframes`
  0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
  }

  100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
  }`;

export const FloatingIconsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: -1;

  :nth-child(1) {
    left: 25%;
    animation-delay: 0s;
  }
  :nth-child(2) {
    left: 10%;
    animation-delay: 2s;
    animation-duration: 7s;
  }
  :nth-child(3) {
    left: 70%;
    animation-delay: 4s;
  }
  :nth-child(4) {
    left: 40%;
    animation-delay: 0s;
    animation-duration: 12s;
  }
  :nth-child(5) {
    left: 65%;
    animation-delay: 0s;
  }
  :nth-child(6) {
    left: 75%;
    animation-delay: 3s;
  }
  :nth-child(7) {
    left: 35%;
    animation-delay: 7s;
  }
  :nth-child(8) {
    left: 50%;
    animation-delay: 15s;
    animation-duration: 11s;
  }
  :nth-child(9) {
    left: 20%;
    animation-delay: 2s;
    animation-duration: 15s;
  }
  :nth-child(10) {
    left: 85%;
    animation-delay: 0s;
    animation-duration: 11s;
  }
`;

export const FloatingIconWrapper = styled.div`
  position: absolute;
  animation: ${float} 10s linear infinite;
  bottom: -150px;
  z-index: 0;
`;
