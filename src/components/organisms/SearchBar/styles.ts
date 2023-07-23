import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div<{ $desktopWidth: number }>`
  position: fixed;
  top: 16px;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  background: ${colors.blue3};
  height: 45px;
  min-height: 45px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    width: ${({ $desktopWidth }) => `${$desktopWidth}px`};
    max-width: ${({ $desktopWidth }) => `${$desktopWidth}px`};
    top: 16px;
    left: auto;
    right: auto;
    border-radius: 15px;
  }
`;

export const HamburgerButton = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background: none;
  border-radius: 6px;
  display: block;
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.blue2};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  height: 3px;
  width: 100%;
  background: white;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 682px;
  display: flex;
  align-items: center;
`;
