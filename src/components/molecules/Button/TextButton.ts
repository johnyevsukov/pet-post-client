/**
 * System text button component.
 */

import styled, { css } from "styled-components";
import { fontSizeCss } from "../../atoms/Text/Text";
import { fontWeights } from "../../atoms/Text/Text";
import { colorType, colors } from "../../../colors";

const baseTextButtonCss = css`
  background: none;
  border: none;
  padding: 0;
  font-weight: ${fontWeights.bold};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const defaults = {
  size: fontSizeCss.sm,
  color: colors.textBlack,
};

export const TextButton = styled.button<{
  $size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  $color?: colorType;
}>`
  ${baseTextButtonCss}
  ${({ $size }) => ($size ? fontSizeCss[$size] : defaults.size)};
  color: ${({ $color }) => ($color ? colors[$color] : defaults.color)};
`;
