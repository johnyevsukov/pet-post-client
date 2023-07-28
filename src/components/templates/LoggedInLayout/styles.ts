import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../colors";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { onDesktop } from "../../../utils/onDesktop";

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100svh;
  background: ${colors.offWhite};
  overflow: hidden;
`;

export const SideNav = styled.nav`
  border-right: 1px solid ${colors.gray1};
  width: 250px;
  min-width: 250px;
  overflow-x: hidden;
  overflow-y: scroll;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled(VStack).attrs({
  as: "ul",
  $width: "auto",
})`
  list-style: none;
  padding: 0 16px;
  margin: 32px 0;
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
  width: 100%;
  margin-top: 26px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
  margin-top: 45px;

  ${onDesktop`
    padding-top: 45px;
    margin-top: 32px;
  `}
`;

// Main tag instead?
export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
`;
