import styled from "styled-components";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";
import { colors } from "../../../colors";

export const Card = styled(FlexBox)`
  height: 100px;
  min-height: 100px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.pureWhite};
  padding: 16px;
`;
