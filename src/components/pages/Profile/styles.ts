import styled, { css } from "styled-components";
import { colors } from "../../../colors";

export const Content = styled.div`
  justify-self: center;
  padding: 16px;
  max-width: 682px;
  margin: 0 auto;
  width: 100%;
  border: 1px solid red;

  @media (min-width: 768px) {
    border: none;
  }
`;

export const UserInfoCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const UserInfoTopBlock = styled.div`
  height: 150px;
  background: ${colors.blue3};
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  top: 90px;
  left: 16px;
  border: 4px solid white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 50%;
  padding: 6px;
  background: ${colors.blue3};
`;

export const UserInfo = styled.div`
  margin-top: 76px;
  padding: 0 16px 16px;
`;
