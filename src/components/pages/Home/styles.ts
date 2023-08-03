import styled from "styled-components";
import { colors } from "../../../colors";
import { Text } from "../../atoms/Text/Text";

export const WebsiteBanner = styled.div`
  position: absolute;
  top: 25px;
  left: -57px;
  display: flex;
  justify-content: center;
  padding: 5px;
  width: 200px;
  transform: rotate(-45deg);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.blue4};
`;

export const TextLink = styled(Text).attrs({
  $weight: "bold",
  $size: "md",
  $align: "center",
  $color: "pureWhite",
})`
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const GithubLink = styled.a`
  position: absolute;
  right: 16px;
  bottom: 16px;
  transition: all 0.1s ease-in-out;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: rotate(20deg);
    box-shadow: rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px;
  }
`;
