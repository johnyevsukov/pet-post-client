import styled from "styled-components";
import { colors } from "../../../colors";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";

export const Label = styled.label`
  color: ${colors.gray1};
  font-weight: ${fontWeights.medium};
  ${fontSizeCss.sm};
`;
