import styled from "styled-components";
import { colors } from "../../../colors";

export const ScreenOverlay = styled.div`
  z-index: 10;
  position: fixed;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(000, 000, 000, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ModalCard = styled.div`
  z-index: 100;
  background: ${colors.offWhite};
  padding: 16px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  width: 100%;
  max-width: 532px;
`;
