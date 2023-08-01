import styled from "styled-components";

export const HStack = styled.div<{
  $spacing: number;
  $width?: string;
  $padding?: number;
  $justifyContent?: string;
  $alignItems?: string;
  $wrap?: boolean;
}>`
  display: flex;
  align-items: ${({ $alignItems }) => ($alignItems ? $alignItems : "center")};
  justify-content: ${({ $justifyContent }) =>
    $justifyContent ? $justifyContent : "flex-start"};
  width: ${({ $width }) => ($width ? $width : "100%")};
  padding: ${({ $padding }) => ($padding ? `${$padding}px` : null)};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};

  > * {
    margin-right: ${({ $spacing }) => `${$spacing}px`};
  }

  > *:last-child {
    margin-right: 0;
  }
`;
