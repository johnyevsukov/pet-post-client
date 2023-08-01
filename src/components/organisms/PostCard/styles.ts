import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { TextButton } from "../../molecules/Button/TextButton";

export const Card = styled.div`
  position: relative;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const CommentLoaderErrorCard = styled(FlexBox)`
  border-radius: 15px;
  padding: 12px;
  height: 68px;
  min-height: 68px;
  background: ${colors.offWhite};
`;

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

export const LikeButton = styled(TextButton).attrs({
  $size: "xs",
})<{ $isLiked: boolean }>`
  color: ${({ $isLiked }) => ($isLiked ? colors.blue3 : colors.textBlack)};
  min-width: 47px;
`;

export const DeleteButton = styled(TextButton).attrs({
  $size: "xs",
  $color: "red3",
})`
  padding: 4px 2px;
`;

export const CollapseCommentsButtonWrapper = styled.div`
  position: absolute;
  left: 24px;
  bottom: 28px;
`;

export const MoreMenuCard = styled.div`
  position: absolute;
  top: 45px;
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
  background: ${colors.pureWhite};
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.offWhite};
  }
`;

export const MoreDot = styled.div`
  border-radius: 50%;
  width: 4px;
  height: 4px;
  min-width: 4px;
  min-height: 4px;
  background: ${colors.gray1};
`;
