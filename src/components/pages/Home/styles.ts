import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  background: ${colors.blue2};
  padding: 0 32px;
`;

export const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const LeftTextWrapper = styled.div``;

export const TitleIconWrapper = styled.div`
  display: flex;
`;
