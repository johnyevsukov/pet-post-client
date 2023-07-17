import styled from "styled-components";
import { colorType, colors } from "../../../colors";

export const PageContentColumn = styled.div<{
  $mobileAlignItems: "flex-end" | "flex-start";
  $background?: colorType;
}>`
  display: flex;
  justify-content: center;
  align-items: ${({ $mobileAlignItems }) => $mobileAlignItems};
  background: ${({ $background }) =>
    $background ? colors[$background] : "none"};
  padding: 32px 0px;
  flex: 1;

  @media (min-width: 768px) {
    align-items: center;
    padding: 0 32px;
  }
`;
