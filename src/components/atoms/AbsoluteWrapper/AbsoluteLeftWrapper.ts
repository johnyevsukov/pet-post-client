import styled from "styled-components";

export const AbsoluteLeftWrapper = styled.div<{
  $top: number;
  $left: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
`;
