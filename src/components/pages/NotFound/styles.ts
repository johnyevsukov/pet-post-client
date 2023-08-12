import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* vh fallback for older browser versions */
  min-height: 100vh;
  min-height: 100svh;
  background: ${colors.blue2};
  padding: 16px;
`;
