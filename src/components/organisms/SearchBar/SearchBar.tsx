import React from "react";
import * as styles from "./styles";
import { VStack } from "../../atoms/VStack/VStack";

interface SearchBarProps {
  desktopWidth: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({ desktopWidth }) => {
  return (
    <styles.Wrapper $desktopWidth={desktopWidth}>
      <styles.Content>
        <styles.HamburgerButton>
          <VStack $spacing={4}>
            <styles.HamburgerLine />
            <styles.HamburgerLine />
            <styles.HamburgerLine />
          </VStack>
        </styles.HamburgerButton>
      </styles.Content>
    </styles.Wrapper>
  );
};
