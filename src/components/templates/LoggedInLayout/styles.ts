import styled from "styled-components";
import { colors } from "../../../colors";
import { onDesktop } from "../../../utils/onDesktop";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  overflow: hidden;
  background: ${colors.offWhite};

  ${onDesktop`
    min-height: 100vh;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: scroll;
  padding: 0 16px;
  margin-top: 45px;

  ${onDesktop`
    padding-top: 45px;
    margin-top: 32px;
  `}
`;

export const Content = styled.main`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
  padding: 16px 0;

  ${onDesktop`
    padding: 0;
  `}
`;
