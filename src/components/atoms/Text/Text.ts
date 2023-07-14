import styled, { css } from "styled-components";
import { colors, colorType } from "../../../colors";

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizeCss = {
  xs: css`
    font-size: 12px;
    line-height: 14px;
  `,
  sm: css`
    font-size: 16px;
    line-height: 18px;
  `,
  md: css`
    font-size: 18px;
    line-height: 20px;
  `,
  lg: css`
    font-size: 22px;
    line-height: 24px;
  `,
  xl: css`
    font-size: 32px;
    line-height: 34px;
  `,
  xxl: css`
    font-size: 52px;
    line-height: 54px;
  `,
};

export const Text = styled.p<{
  $size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  $weight?: "regular" | "medium" | "bold";
  $align?: "center" | "left" | "right";
  $color?: colorType;
}>`
  ${({ $size }) => ($size ? fontSizeCss[$size] : fontSizeCss.md)};
  font-weight: ${({ $weight }) =>
    $weight ? fontWeights[$weight] : fontWeights.regular};
  color: ${({ $color }) => ($color ? colors[$color] : colors.textBlack)};
  text-align: ${({ $align }) => ($align ? $align : "left")};
`;
