import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

// TO DO: Systematize this
export const Card = styled.div`
  position: relative;
  border-radius: 15px;
  padding: 12px;
  background: ${colors.offWhite};
`;

// TO DO: Systematize this
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

// TO DO: Systematize this
export const DeleteButton = styled.button`
  position: absolute;
  right: 8px;
  top: 8px;
  background: none;
  padding: 3px 8px;
  border: 2px solid ${colors.red3};
  border-radius: 15px;
  font-weight: ${fontWeights.bold};
  color: ${colors.red3};
  ${fontSizeCss.xs}
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    background: ${colors.red1};
  }
`;
