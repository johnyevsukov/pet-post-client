import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import styled from "styled-components";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const Wrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.sm}

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const TextButton = styled.button<{ $isLiked: boolean }>`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  color: ${({ $isLiked }) => ($isLiked ? colors.blue3 : colors.textBlack)};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.xs}
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
