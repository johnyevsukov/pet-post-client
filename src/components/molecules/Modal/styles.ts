import styled from "styled-components";
import { colors } from "../../../colors";

export const ScreenOverlay = styled.div`
  z-index: 10;
  position: fixed;
  // TO DO: Fix this. Something adding 16px magin bottom here.
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  background: rgb(000, 000, 000, 0.4);
`;

export const ModalCard = styled.div`
  z-index: 100;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: ${colors.offWhite};
  padding: 16px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  // work on this
  width: 100%;
  max-width: 532px;
  margin: 0 8px;
`;

export const TopWrapper = styled.div`
  margin-bottom: 16px;
`;

export const CloseButton = styled.button`
  border: 3px solid ${colors.blue4};

  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;
