import styled from "styled-components";
import { colors } from "../../../colors";
import { HStack } from "../../atoms/HStack/HStack";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { VStack } from "../../atoms/VStack/VStack";

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelInputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  ${fontSizeCss.md}
  font-weight: ${fontWeights.bold};
  color: ${colors.offWhite};
  position: absolute;
  color: ${colors.gray1};
  font-weight: ${fontWeights.medium};
  ${fontSizeCss.sm};
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.1s ease-in-out;
`;

export const Input = styled.input`
  border: none;
  border-radius: 18px;
  padding: 25px 10px 10px;
  width: 100%;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.md};
  outline: none;

  &:not(:placeholder-shown) + label {
    left: 12px;
    top: 8px;
    transform: translateY(0);
    ${fontSizeCss.xs};
    font-weight: ${fontWeights.bold};
    color: ${colors.gray2};
  }

  &:focus + label {
    left: 12px;
    top: 8px;
    transform: translateY(0);
    ${fontSizeCss.xs};
    font-weight: ${fontWeights.bold};
    color: ${colors.gray2};
  }
`;

export const Card = styled.div`
  background: ${colors.blue2};
  padding: 32px 32px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  max-width: 300px;
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
