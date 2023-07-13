import styled from "styled-components";

export const IconWrapper = styled.div<{ $width?: number }>`
  width: ${({ $width }) => ($width ? `${$width}px` : "32px")};
  height: ${({ $width }) => ($width ? `${$width}px` : "32px")};
`;
