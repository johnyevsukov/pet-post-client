import styled from "styled-components";

export const IconWrapper = styled.div<{ $width?: number }>`
  min-width: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  min-height: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  width: ${({ $width }) => ($width ? `${$width}px` : "48px")};
  height: ${({ $width }) => ($width ? `${$width}px` : "48px")};
`;
