import styled from "styled-components";
import { colors } from "../../../colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100svh;
  background: ${colors.blue2};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
