/**
 * System button component.
 */

import styled, { css } from "styled-components";
import { fontSizeCss } from "../../atoms/Text/Text";
import { fontWeights } from "../../atoms/Text/Text";
import { colors } from "../../../colors";
import { Link } from "react-router-dom";

const buttonSizeCss = {
  sm: css`
    ${fontSizeCss.sm}
    padding: 5px 10px;
  `,
  md: css`
    ${fontSizeCss.md}
    padding: 8px 13px;
  `,
  lg: css`
    ${fontSizeCss.lg}
    padding: 12px 25px;
  `,
};

const buttonVariantCss = {
  blue: css`
    background: ${colors.blue4};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.blue3};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${colors.offWhite};
      color: ${colors.gray1};
    }
  `,
  white: css`
    background: ${colors.offWhite};
    color: ${colors.blue3};

    &:hover,
    &:focus {
      color: ${colors.blue2};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${colors.offWhite};
      color: ${colors.gray1};
    }
  `,
  textBlue: css`
    padding: 0;
    background: none;
    color: ${colors.blue3};

    &:hover,
    &:focus {
      color: ${colors.blue2};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${colors.offWhite};
      color: ${colors.gray1};
    }
  `,
};

const baseButtonCss = css`
  border: none;
  font-weight: ${fontWeights.bold};
  border-radius: 24px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

const defaults = {
  size: buttonSizeCss.lg,
  variant: buttonVariantCss.blue,
  width: "auto",
  padding: null,
};

export const Button = styled.button<{
  $size?: "sm" | "md" | "lg";
  $variant?: "blue" | "white" | "textBlue";
  $width?: string;
  $padding?: string;
}>`
  ${baseButtonCss}
  ${({ $size }) => ($size ? buttonSizeCss[$size] : defaults.size)};
  ${({ $variant }) =>
    $variant ? buttonVariantCss[$variant] : defaults.variant};
  width: ${({ $width }) => ($width ? $width : defaults.width)};
  padding: ${({ $padding }) => ($padding ? $padding : defaults.padding)};
`;

export const LinkButton = styled(Link)<{
  $size?: "sm" | "md" | "lg";
  $variant?: "blue" | "textBlue";
}>`
  ${baseButtonCss}
  ${({ $size }) => ($size ? buttonSizeCss[$size] : buttonSizeCss.lg)};
  ${({ $variant }) =>
    $variant ? buttonVariantCss[$variant] : buttonVariantCss.blue};
  text-align: center;
  text-decoration: none;
`;
