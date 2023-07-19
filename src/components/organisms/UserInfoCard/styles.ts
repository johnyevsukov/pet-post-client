import styled from "styled-components";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const UserInfoCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  /* background: #fff; */
`;

export const UserInfoTopBlock = styled.div`
  height: 150px;
  background: ${colors.blue3};
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  top: 90px;
  left: 16px;
  border: 4px solid #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 50%;
  padding: 6px;
  background: ${colors.blue3};
`;

export const UserInfo = styled.div`
  margin-top: 76px;
  padding: 0 16px 16px;
`;

export const SettingsButton = styled.button`
  position: absolute;
  right: 16px;
  top: 166px;
  border: 3px solid ${colors.blue4};

  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  svg {
    transition: all 0.1s ease-in-out;
  }

  &:hover,
  &:focus {
    background: ${colors.blue1};

    svg {
      transform: rotate(30deg);
    }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const FollowButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: none;
  background: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const FollowCount = styled.span`
  ${fontSizeCss.sm}
  font-weight: ${fontWeights.bold};
  color: ${colors.textBlack};
`;

export const FollowDesc = styled.span`
  ${fontSizeCss.sm}
  font-weight: ${fontWeights.medium};
  color: ${colors.gray2};
`;
