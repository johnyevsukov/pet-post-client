import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { onDesktop } from "../../../utils/onDesktop";

export const Nav = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 45px;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: scroll;
  padding: 0 16px;
  background: ${colors.offWhite};
  border-right: 1px solid ${colors.gray1};
  display: ${({ $isOpen }) => ($isOpen ? "static" : "none")};

  ${onDesktop`
    display: none;
  `}
`;

export const NavList = styled(VStack).attrs({
  as: "ul",
  $width: "auto",
})`
  list-style: none;
  max-width: 682px;
  margin: 32px auto;
`;

export const NavListItem = styled.li`
  list-style: none;
`;

const sharedNavItemCss = css`
  padding: 6px 16px;
  border-radius: 15px;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: block;
  ${sharedNavItemCss}
`;

export const NavButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  ${sharedNavItemCss}
`;

export const IconLogoWrapper = styled(HStack)`
  background: ${colors.blue3};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  padding: 6px 0 6px 16px;
`;

export const ButtonNavListItem = styled(NavListItem)`
  width: 100%;
  max-width: 217px;
  margin-top: 26px;
`;
