import styled from "styled-components";
import { colors } from "../../../colors";

import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const LabelInputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label<{ $error: boolean }>`
  ${fontSizeCss.sm};
  font-weight: ${fontWeights.medium};
  color: ${({ $error }) => ($error ? colors.red3 : colors.gray1)};
`;

export const Input = styled.input<{ $error: boolean }>`
  width: auto;
  border: none;
  outline: none;
  border-radius: 18px;
  padding: 15px;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.sm};
  outline: ${({ $error }) =>
    $error ? `2px solid ${colors.red3}` : `2px solid ${colors.blue4}`};
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};

  /* Needed for annoyance with mobile safari styling on date inputs.
  Not a permanent fix.*/
  min-width: calc(100% - 16px);

  &:hover,
  &:focus {
    background: ${({ $error }) => ($error ? colors.red1 : colors.blue1)};
  }
`;
