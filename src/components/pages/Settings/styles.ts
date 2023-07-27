import styled from "styled-components";
import { colors } from "../../../colors";
import { HStack } from "../../atoms/HStack/HStack";
import { onDesktop } from "../../../utils/onDesktop";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
`;

export const SettingsCard = styled.div`
  position: relative;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const Form = styled.form`
  flex: 1;
  margin-top: 24px;

  ${onDesktop`
    margin-top: 0;
    margin-left: 24px;
  `}
`;

export const AvatarFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${onDesktop`
    flex-direction: row;
  `}
`;

export const ButtonWrapper = styled(HStack)`
  margin-top: 8px;
`;

export const BackButton = styled.button`
  border: 3px solid ${colors.blue4};
  border-radius: 50%;
  padding: 2px;
  cursor: pointer;
  background: ${colors.pureWhite};
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;
