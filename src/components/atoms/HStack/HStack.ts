import styled from "styled-components";

export const HStack = styled.div<{
  $spacing: number;
  $width?: string;
  $marginTop?: number;
  $justifyContent?: string;
  $alignItems?: string;
}>`
  display: flex;
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "flex-start"};
  width: ${({ $width }) => ($width ? $width : "100%")};
  margin-top: ${({ $marginTop }) => ($marginTop ? `${$marginTop}px` : null)};
  flex-wrap: wrap;

  > * {
    margin-right: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-right: 0;
  }
`;
