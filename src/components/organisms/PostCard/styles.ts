import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { VStack } from "../../atoms/VStack/VStack";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const LoaderErrorCard = styled.div`
  border-radius: 15px;
  padding: 12px;
  background: ${colors.offWhite};
  height: 68px;
  min-height: 68px;
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

// TO DO: I've used this a lot. Reusable component? Build into avatar component?
export const AvatarWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

// TO DO: Systematize this
export const TextButton = styled.button<{ $isLiked: boolean }>`
  background: none;
  border: none;
  padding: 0;
  color: ${({ $isLiked }) => ($isLiked ? colors.blue3 : colors.textBlack)};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.xs}
  min-width: 47px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

// TO DO: Better expand animation
export const CommentsWrapper = styled.div`
  margin: 12px 0 0 54px;
  width: auto;
`;

export const CommentConnectorLine = styled.div`
  margin-left: 95px;
  width: 5px;
  min-width: 5px;
  height: 15px;
  min-height: 15px;
  background: ${colors.blue3};
`;

// TO DO: Systematize this. Defining new buttons all over the place is no good.
export const CollapseCommentsButton = styled.button`
  position: absolute;
  left: 24px;
  bottom: 28px;
  border: 3px solid ${colors.blue4};
  border-radius: 50%;
  padding: 2px;
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;

export const EditDeleteButtonsWrapper = styled(VStack)`
  position: absolute;
  width: auto;
  right: 16px;
  top: 16px;
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
  transition: all 0.1s ease-in-out;
  cursor: pointer;

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
