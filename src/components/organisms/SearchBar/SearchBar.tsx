import React, { useState } from "react";
import * as styles from "./styles";
import { VStack } from "../../atoms/VStack/VStack";
import { Icon } from "../../atoms/Icon/Icon";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { Text } from "../../atoms/Text/Text";
import { Loader } from "../../atoms/Loader/Loader";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";

interface SearchBarProps {
  desktopWidth: number;
  handleToggleMobileNav: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  desktopWidth,
  handleToggleMobileNav,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResultClick = () => {
    setInputValue("");
    setSearchResults([]);
    setIsSearchMenuOpen(false);
  };

  // TO DO: debounce this search
  // Neaten up logic for rendering loading / no results state + add error state
  const handleSearch = (e: any) => {
    setInputValue(e.target.value);

    if (e.target.value < 1) {
      setIsSearchMenuOpen(false);
      setSearchResults([]);
      return;
    }

    setIsSearchMenuOpen(true);
    setIsLoading(true);
    axiosWithAuth()
      .post("users/search", { username: e.target.value })
      .then((res) => {
        setIsLoading(false);
        setSearchResults(res.data);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <styles.Wrapper $desktopWidth={desktopWidth}>
      <styles.Content>
        <styles.HamburgerButton onClick={handleToggleMobileNav}>
          <VStack $spacing={6}>
            <styles.HamburgerLine />
            <styles.HamburgerLine />
            <styles.HamburgerLine />
          </VStack>
        </styles.HamburgerButton>
        <styles.InputWrapper>
          <styles.IconWrapper>
            <Icon name="magnifyingGlass" width={25} />
          </styles.IconWrapper>
          <styles.SearchInput
            value={inputValue}
            placeholder="Search..."
            onChange={handleSearch}
            $isSearchMenuOpen={isSearchMenuOpen}
          />
          {isSearchMenuOpen && (
            <styles.SearchResults>
              <VStack $spacing={6}>
                {isLoading && (
                  <FlexBox>
                    <Loader $width={28} />
                  </FlexBox>
                )}
                {!isLoading && !searchResults.length && (
                  <styles.NoResultsWrapper>
                    <Text $weight="medium" $color="gray2" $size="sm">
                      No results...
                    </Text>
                  </styles.NoResultsWrapper>
                )}
                {searchResults.map((r: any) => (
                  <styles.SearchResultLink
                    onClick={handleResultClick}
                    to={`/profile/${r.user_id}`}
                  >
                    {r.username}
                  </styles.SearchResultLink>
                ))}
              </VStack>
            </styles.SearchResults>
          )}
        </styles.InputWrapper>
      </styles.Content>
    </styles.Wrapper>
  );
};
