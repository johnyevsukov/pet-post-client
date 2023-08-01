import styled from "styled-components";

export const AbsoluteRightWrapper = styled.div<{
  $top: number;
  $right: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  right: ${({ $right }) => `${$right}px`};
`;
