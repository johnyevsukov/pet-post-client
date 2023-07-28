import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { onDesktop } from "../../../utils/onDesktop";

export const SideNav = styled.nav<{ $isOpen: boolean }>`
  border-right: 1px solid ${colors.gray1};
  z-index: 1000;
  overflow-y: scroll;
  position: fixed;
  top: 45px;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${colors.offWhite};
  padding: 0 16px;
  display: ${({ $isOpen }) => ($isOpen ? "static" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
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

const sharedCss = css`
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
  ${sharedCss}
`;

export const NavButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
  ${sharedCss}
`;

export const IconLogoWrapper = styled(HStack)`
  background: ${colors.blue3};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  padding: 6px 0 6px 16px;
`;

export const ButtonWrapper = styled.div`
  max-width: 217px;
  margin-top: 26px;

  ${onDesktop`
    max-width: none;
  `}
`;
