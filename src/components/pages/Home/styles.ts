import styled from "styled-components";
import { colors } from "../../../colors";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100svh;
  background: ${colors.blue2};
  padding: 0 32px;

  @media (min-width: 1135px) {
    flex-direction: row;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1135px) {
    flex: 1;
  }
`;

export const LeftTextWrapper = styled.div`
  min-width: none;
  max-width: 300px;
  text-align: center;
  /* Prevent typing animation from moving content */
  min-height: 110px;

  @media (min-width: 1135px) {
    min-height: none;
    text-align: left;
    /* Prevent typing animation from moving content */
    min-width: 421px;
  }
`;

export const TitleIconWrapper = styled(HStack)`
  justify-content: center;

  @media (min-width: 1135px) {
    justify-content: flex-start;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 15px;
  padding: 48px 72px;
  border: 1px solid white;
  margin-top: 24px;

  @media (min-width: 1135px) {
  }
`;
