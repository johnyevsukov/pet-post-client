import styled, { css } from "styled-components";
import { fontSizeCss } from "../../atoms/Text/Text";
import { fontWeights } from "../../atoms/Text/Text";
import { colors } from "../../../colors";

const baseButtonCss = css`
  border-radius: 24px;
  border: none;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
`;

const buttonSizeCss = {
  sm: css`
    ${fontSizeCss.sm}
    padding: 5px 10px;
    font-weight: ${fontWeights.medium};
  `,
  md: css`
    ${fontSizeCss.md}
    padding: 8px 13px;
    font-weight: ${fontWeights.medium};
  `,
  lg: css`
    ${fontSizeCss.lg}
    padding: 12px 25px;
    font-weight: ${fontWeights.bold};
  `,
};

const buttonVariantCss = {
  black: css`
    background: ${colors.textBlack};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.gray2};
    }
  `,
  purple: css`
    background: ${colors.purple3};
    color: ${colors.offWhite};

    &:hover,
    &:focus {
      background: ${colors.purple2};
      color: ${colors.textBlack};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${colors.purple1};
      color: ${colors.gray1};
    }
  `,
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
  text: css`
    background: none;
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
};

export const Button = styled.button<{
  $size?: "sm" | "md" | "lg";
  $variant?: "black" | "purple" | "blue" | "text";
}>`
  ${baseButtonCss}
  ${({ $size }) => ($size ? buttonSizeCss[$size] : buttonSizeCss.lg)}
  ${({ $variant }) =>
    $variant ? buttonVariantCss[$variant] : buttonVariantCss.black}
`;
