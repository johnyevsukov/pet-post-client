import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import styled from "styled-components";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { VStack } from "../../atoms/VStack/VStack";

export const Wrapper = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
  background: ${colors.pureWhite};
`;

export const LoaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
  background: ${colors.pureWhite};
  height: 100px;
  min-height: 100px;
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
  min-width: 47px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const CommentCard = styled.div`
  border-radius: 15px;
  padding: 12px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  background: ${colors.offWhite};
  position: relative;
`;

export const CommentsWrapper = styled.div`
  margin: 12px 0 0 54px;
  width: auto;
  transition: height 2s;
`;

export const CommentConnectorLine = styled.div`
  margin-left: 95px;
  width: 5px;
  height: 15px;
  /* background: ${colors.blue3}; */
  background: ${colors.blue2};
`;

export const CollapseCommentsButton = styled.button`
  position: absolute;
  left: 24px;
  bottom: 28px;
  border: 3px solid ${colors.blue4};
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
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

export const DeleteCommentButton = styled(DeleteButton)`
  right: 8px;
  top: 8px;
`;
