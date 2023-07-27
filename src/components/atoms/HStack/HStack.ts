import styled from "styled-components";
// TO DO: get rid of marginTop in place of margin
// Type all of this better
export const HStack = styled.div<{
  $spacing: number;
  $width?: string;
  $padding?: number;
  $marginTop?: number;
  $justifyContent?: string;
  $alignItems?: string;
  $wrap?: boolean;
}>`
  display: flex;
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "flex-start"};
  width: ${({ $width }) => ($width ? $width : "100%")};
  margin-top: ${({ $marginTop }) => ($marginTop ? `${$marginTop}px` : null)};
  padding: ${({ $padding }) => ($padding ? `${$padding}px` : null)};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};

  > * {
    margin-right: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-right: 0;
  }
`;
