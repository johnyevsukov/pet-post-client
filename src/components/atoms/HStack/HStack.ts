import styled from "styled-components";

export const HStack = styled.div<{
  $spacing: number;
  $width?: string;
  $marginTop?: number;
}>`
  display: flex;
  align-items: center;
  width: ${({ $width }) => ($width ? $width : "100%")};
  margin-top: ${({ $marginTop }) => ($marginTop ? `${$marginTop}px` : null)};

  > * {
    margin-right: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-right: 0;
  }
`;
