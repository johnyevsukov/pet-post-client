/**
 * Page content column.
 * Used for left or right
 * page content on the Home,
 * Signup, and Login pages.
 */

import styled from "styled-components";
import { onDesktop } from "../../../utils/onDesktop";
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

  ${onDesktop`
    align-items: center;
    padding: 0 32px;
  `}
`;
