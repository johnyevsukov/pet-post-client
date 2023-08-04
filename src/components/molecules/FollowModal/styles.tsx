import styled from "styled-components";
import { Text } from "../../atoms/Text/Text";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: 18px;
  width: auto;
  overflow-y: scroll;
  padding: 16px 8px;
`;

// TO DO: Redo these without need for absolute.
// TO DO: Should be link.
export const UserTileButton = styled.button`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  height: 150px;
  min-height: 150px;
  max-width: 150px;
  border-radius: 15px;
  padding: 8px;
  background: ${colors.pureWhite};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.1s ease-in-out;
  border: none;
  cursor: pointer;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  &:hover,
  &:focus {
    background: rgba(54, 172, 255, 0.15);
  }
`;

export const AvatarWrapper = styled.div`
  align-self: center;
`;

export const SpeciesTextWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const UsernameText = styled(Text).attrs({
  $weight: "bold",
})`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const SpeciesText = styled(Text).attrs({
  $size: "sm",
  $weight: "medium",
  $color: "gray2",
})`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
