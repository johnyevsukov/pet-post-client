/**
 * Absolute left wrapper.
 * Used to position elements
 * absolutely within a relative parent
 * using top and left positioning.
 */

import styled from "styled-components";

export const AbsoluteLeftWrapper = styled.div<{
  $top: number;
  $left: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;
