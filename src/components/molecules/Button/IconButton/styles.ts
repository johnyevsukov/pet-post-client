import styled from "styled-components";
import { colors } from "../../../../colors";

export const Button = styled.button`
  border-radius: 50%;
  padding: 2px;
  border: 3px solid ${colors.blue4};
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;
