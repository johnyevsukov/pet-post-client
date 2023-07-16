import styled from "styled-components";
import { colors } from "../../../colors";
import { HStack } from "../../atoms/HStack/HStack";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100svh;
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

  @media (min-width: 768px) {
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
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.1s ease-in-out;
  cursor: text;
`;

export const Input = styled.input<{ $error: boolean }>`
  border: none;
  border-radius: 18px;
  padding: 25px 15px 10px;
  width: 100%;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.md};
  outline: none;
  background: ${({ $error }) => ($error ? colors.red1 : "#fff")};

  &:hover,
  &:focus {
    outline: ${({ $error }) =>
      $error ? `3px solid ${colors.red3}` : `3px solid ${colors.blue4}`};
  }

  &:not(:placeholder-shown) + label {
    top: 8px;
    transform: translateY(0);
    ${fontSizeCss.xs};
    font-weight: ${fontWeights.bold};
    color: ${colors.gray2};
  }

  &:focus + label {
    top: 8px;
    transform: translateY(0);
    ${fontSizeCss.xs};
    font-weight: ${fontWeights.bold};
    color: ${colors.gray2};
  }
`;

export const Card = styled.div<{ $error: boolean }>`
  background: ${colors.blue2};
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  max-width: 300px;
  position: relative;
  padding: ${({ $error }) => ($error ? "32px 32px 48px" : "32px 32px")};
  transition: padding 0.1s ease-in-out;
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const ErrorMessageHStack = styled(HStack)`
  background: ${colors.red1};
  padding: 2px;
  border-radius: 0 0 15px 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: padding 0.1s ease-in-out;
`;

export const InputErrorWrapper = styled.div`
  position: absolute;
  background: ${colors.red1};
  bottom: -21px;
  left: 5px;
  border-radius: 6px;
  padding: 2px 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
`;
