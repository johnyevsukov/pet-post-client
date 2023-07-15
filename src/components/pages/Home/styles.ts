import styled from "styled-components";
import { colors } from "../../../colors";
import { HStack } from "../../atoms/HStack/HStack";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100svh;
  background: ${colors.blue2};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 32px 0px;
  flex: 1;

  @media (min-width: 768px) {
    padding: 0 32px;
    align-items: center;
  }
`;

export const ContentColumnWhite = styled(ContentColumn)`
  align-items: flex-start;
  background: ${colors.offWhite};

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const LeftTextWrapper = styled.div`
  min-width: none;
  max-width: 300px;
  text-align: center;
  /* Prevent typing animation from moving content */
  min-height: 110px;

  @media (min-width: 768px) {
    min-height: none;
    text-align: left;
    max-width: none;
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
