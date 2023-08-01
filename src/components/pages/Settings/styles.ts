import styled from "styled-components";
import { colors } from "../../../colors";
import { HStack } from "../../atoms/HStack/HStack";
import { onDesktop } from "../../../utils/onDesktop";

export const Wrapper = styled.div`
  padding: 0 0 16px;
`;

export const SettingsCard = styled.div`
  position: relative;
  border-radius: 15px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const LoaderErrorCard = styled(SettingsCard)`
  min-height: 604px;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const SubmitButtonWrapper = styled(HStack)`
  margin-top: 8px;
`;
