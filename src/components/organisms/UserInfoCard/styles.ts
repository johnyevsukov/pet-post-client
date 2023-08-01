import styled, { css } from "styled-components";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  min-height: 384px;
`;

export const BlueTopBlock = styled.div`
  height: 150px;
  background: ${colors.blue3};
`;

export const UserInfoWrapper = styled.div`
  margin-top: 76px;
  padding: 0 16px 16px;
`;

export const FollowCount = styled.span`
  ${fontSizeCss.sm}
  font-weight: ${fontWeights.bold};
  color: ${colors.textBlack};
`;

export const FollowDescription = styled.span`
  ${fontSizeCss.sm}
  font-weight: ${fontWeights.medium};
  color: ${colors.gray2};
`;

const sharedFollowButtonCss = css`
  border-radius: 24px;
  padding: 8px 13px;
  ${fontSizeCss.md}
  font-weight: ${fontWeights.bold};
  background: ${colors.pureWhite};
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

export const FollowButton = styled.button`
  ${sharedFollowButtonCss}
  border: 3px solid ${colors.blue4};
  color: ${colors.blue4};

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;

export const UnfollowButton = styled.button`
  ${sharedFollowButtonCss}
  border: 3px solid ${colors.red3};
  color: ${colors.red3};

  &:hover,
  &:focus {
    background: ${colors.red1};
  }
`;
