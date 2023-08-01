import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { TextButton } from "../../molecules/Button/TextButton";

export const Card = styled.div`
  position: relative;
  border-radius: 15px;
  padding: 12px;
  background: ${colors.offWhite};
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

export const MoreMenuCard = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  padding: 8px;
  background: ${colors.pureWhite};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 12px;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  border-radius: 15px;
  padding: 8px 12px;
  transition: all 0.1s ease-in-out;
  background: ${colors.offWhite};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.pureWhite};
  }
`;

export const MoreDot = styled.div`
  border-radius: 50%;
  width: 4px;
  height: 4px;
  background: ${colors.gray1};
`;

export const DeleteButton = styled(TextButton).attrs({
  $size: "xs",
  $color: "red3",
})`
  padding: 4px 2px;
`;
