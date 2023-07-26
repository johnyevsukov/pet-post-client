import styled from "styled-components";

export const FlexBox = styled.div<{ $padding?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $padding }) => ($padding ? `${$padding}px` : null)};
`;
