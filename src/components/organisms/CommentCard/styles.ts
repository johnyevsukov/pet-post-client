import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { VStack } from "../../atoms/VStack/VStack";

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
export const EditDeleteButtonsWrapper = styled(VStack)`
  position: absolute;
  width: auto;
  right: 8px;
  top: 8px;
`;

// TO DO: Systematize this. Defining new buttons all over the place is no good.
export const DeleteButton = styled.button`
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

export const EditButton = styled.button`
  background: none;
  padding: 3px 8px;
  border: 2px solid ${colors.orange3};
  border-radius: 15px;
  font-weight: ${fontWeights.bold};
  color: ${colors.orange3};
  ${fontSizeCss.xs}
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.orange1};
  }
`;
