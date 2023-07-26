import styled from "styled-components";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

// TO DO: All very similar to new post card. Clean up.

export const Card = styled.div`
  position: relative;
  border-radius: 15px;
  background: ${colors.offWhite};
  padding: 12px;
`;

export const Form = styled.form`
  flex: 1;
`;

export const HiddenLabel = styled.label`
  position: absolute;
  opacity: 0;
  top: 0;
`;

// TO DO: Systematize this
export const TextAreaInput = styled.textarea<{ $error: boolean }>`
  flex: 1;
  min-height: 60px;
  resize: none;
  border-radius: 15px;
  padding: 16px;
  border: none;
  background: ${colors.offWhite};
  color: ${colors.textBlack};
  ${fontSizeCss.md}
  font-weight: ${fontWeights.regular};
  transition: all 0.1s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &::placeholder {
    color: ${colors.gray2};
    ${fontSizeCss.md}
    font-weight: ${fontWeights.regular};
  }

  &:hover {
    outline: 2px solid ${colors.blue3};
  }
  &:focus {
    background: ${colors.pureWhite};
    outline: 2px solid ${colors.blue3};
  }
`;
