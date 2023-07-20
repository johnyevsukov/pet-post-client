import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div<{
  $width: string;
  $borderWidth: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width};
  height: ${({ $width }) => $width};
  min-width: ${({ $width }) => $width};
  min-height: ${({ $width }) => $width};
  border-radius: 50%;
  background: ${colors.blue3};
  border: ${({ $borderWidth }) => `${$borderWidth} solid ${colors.pureWhite}`};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
