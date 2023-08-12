import styled from "styled-components";
import { colors } from "../../../colors";
import { onDesktop } from "../../../utils/onDesktop";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
  background: ${colors.blue2};
  padding: 16px;

  ${onDesktop`
    min-height: 100vh;
  `}
`;
