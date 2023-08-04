/**
 * Absolute right wrapper.
 * Used to position elements
 * absolutely within a relative parent
 * using top and right positioning.
 */

import styled from "styled-components";

export const AbsoluteRightWrapper = styled.div<{
  $top: number;
  $right: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  right: ${({ $right }) => `${$right}px`};
`;
