import styled from "styled-components";
import { HStack } from "../../atoms/HStack/HStack";

export const Wrapper = styled.div<{ $minMobileHeight?: number }>`
  text-align: center;
  min-width: none;
  max-width: 300px;
  min-height: ${({ $minMobileHeight }) =>
    $minMobileHeight ? `${$minMobileHeight}px` : "none"};

  @media (min-width: 768px) {
    text-align: left;
    max-width: none;
    min-height: none;
    /* Prevent typing animation from moving content */
    min-width: 421px;
  }
`;

export const TitleIconWrapper = styled(HStack)`
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
