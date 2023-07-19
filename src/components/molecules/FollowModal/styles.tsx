import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 18px;
  align-items: start;
  width: 500px;
  height: 300px;
  overflow-y: scroll;
  padding: 16px 8px;
`;

// export const UserTileLink = styled(Link)`
//   position: relative;
//   text-decoration: none;
//   height: 150px;
//   min-height: 150px;
//   border-radius: 15px;
//   padding: 8px;
//   background: white;
//   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
//   transition: all 0.1s ease-in-out;

//   &:hover,
//   &:focus {
//     background: rgba(54, 172, 255, 0.15);
//   }
// `;

export const UserTileButton = styled.button`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  height: 150px;
  min-height: 150px;
  border-radius: 15px;
  padding: 8px;
  background: white;
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

export const IconWrapper = styled.div`
  border: 3px solid white;
  align-self: center;
  display: block;
  border-radius: 50%;
  padding: 8px;
  background: ${colors.blue3};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const SpeciesTextWrapper = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;
