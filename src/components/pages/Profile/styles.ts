import styled from "styled-components";
import { onDesktop } from "../../../utils/onDesktop";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
  margin-top: 45px;

  ${onDesktop`
    padding-top: 45px;
    margin-top: 32px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const LoaderErrorCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  min-height: 100px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.pureWhite};
`;
