/**
 * VStack component.
 * Used to space children
 * vertically with a given
 * px space between them via
 * a $spacing prop.
 */

import styled from "styled-components";

export const VStack = styled.div<{
  $spacing: number;
  $width?: string;
  $padding?: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ $width }) => ($width ? $width : "100%")};
  padding: ${({ $padding }) => ($padding ? $padding : 0)};

  > * {
    margin-bottom: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;
