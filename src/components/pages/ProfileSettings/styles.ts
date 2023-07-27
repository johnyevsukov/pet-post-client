import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
`;

export const SettingsCard = styled.div`
  position: relative;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;
