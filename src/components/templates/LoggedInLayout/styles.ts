import styled from "styled-components";
import { colors } from "../../../colors";
import { onDesktop } from "../../../utils/onDesktop";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  background: ${colors.offWhite};
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  padding: 0 16px;
  margin-top: 45px;

  ${onDesktop`
    padding-top: 45px;
    margin-top: 32px;
  `}
`;

// Main tag instead?
export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
  padding: 16px 0;

  ${onDesktop`
    padding: 0;
  `}
`;
