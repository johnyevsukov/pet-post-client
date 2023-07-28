import styled from "styled-components";
import { colors } from "../../../colors";
import { Link } from "react-router-dom";
import { fontSizeCss, fontWeights } from "../../atoms/Text/Text";
import { onDesktop } from "../../../utils/onDesktop";

export const Wrapper = styled.div<{ $desktopWidth: number }>`
  position: fixed;
  top: 16px;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  background: ${colors.blue3};
  height: 45px;
  min-height: 45px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    width: ${({ $desktopWidth }) => `${$desktopWidth}px`};
    max-width: ${({ $desktopWidth }) => `${$desktopWidth}px`};
    top: 16px;
    left: auto;
    right: auto;
    border-radius: 15px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 682px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${onDesktop`
    justify-content: center;
  `};
`;

export const HamburgerButton = styled.button`
  /* height: 35px;
  width: 35px;
  min-height: 35px;
  min-width: 35px; */
  border: none;
  background: none;
  border-radius: 6px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  margin-right: 8px;
  padding: 8px;

  &:hover,
  &:focus {
    background: ${colors.blue2};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  min-height: 3px;
  height: 3px;
  min-width: 25px;
  width: 25px;
  background: white;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;

export const SearchInput = styled.input<{ $isSearchMenuOpen: boolean }>`
  width: 100%;
  height: 30px;
  border-radius: ${({ $isSearchMenuOpen }) =>
    $isSearchMenuOpen ? "12px 12px 0 0" : "12px"};
  border: none;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.sm};
  outline: none;
  padding: 0 10px 0 32px;
  transition: all 0.1s ease-in-out;
  background: ${colors.pureWhite};
  outline: ${({ $isSearchMenuOpen }) =>
    $isSearchMenuOpen ? `3px solid ${colors.blue4}` : "none"};

  &::placeholder {
    color: ${colors.gray1};
  }

  &:hover,
  &:focus {
    outline: 3px solid ${colors.blue4};
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 30px;
  left: -3px;
  height: auto;
  max-height: 195px;
  overflow-y: scroll;
  width: 306px;
  background: ${colors.pureWhite};
  border-radius: 0 0 15px 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-left: 3px solid ${colors.blue4};
  border-right: 3px solid ${colors.blue4};
  border-bottom: 3px solid ${colors.blue4};
  padding: 5px 0 10px;
`;

export const SearchResultLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 100%;
  color: ${colors.textBlack};
  font-weight: ${fontWeights.bold};
  ${fontSizeCss.sm};
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    background: ${colors.blue1};
  }
`;

export const NoResultsWrapper = styled.div`
  padding: 5px 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`;
