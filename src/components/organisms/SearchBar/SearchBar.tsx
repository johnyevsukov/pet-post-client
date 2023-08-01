import React, { useState } from "react";

import { axiosWithAuth } from "../../../utils/axiosAuth";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { Loader } from "../../atoms/Loader/Loader";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";

import * as styles from "./styles";

interface SearchBarProps {
  desktopWidth: number;
  isMobileNavOpen: boolean;
  handleToggleMobileNav: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  desktopWidth,
  isMobileNavOpen,
  handleToggleMobileNav,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const handleResultClick = () => {
    setInputValue("");
    setSearchResults([]);
    setIsSearchMenuOpen(false);
  };

  // TO DO: debounce search.
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
      })
      .catch((err) => {
        setIsLoading(false);
        // TO DO: Handle error from api.
        setError("Failed to fetch results.");
        console.warn(err);
      });
  };

  const renderSearchResults = () => {
    if (!isLoading && error) {
      return (
        <styles.ErrorNoResultsWrapper>
          <HStack $spacing={4}>
            <Text $weight="bold" $color="red4" $size="sm">
              {error}
            </Text>
            <Icon name="warning" width={20} />
          </HStack>
        </styles.ErrorNoResultsWrapper>
      );
    } else if (isLoading) {
      return (
        <FlexBox>
          <Loader $width={28} />
        </FlexBox>
      );
    } else if (!isLoading && !searchResults.length) {
      return (
        <styles.ErrorNoResultsWrapper>
          <Text $weight="medium" $color="gray2" $size="sm">
            No results...
          </Text>
        </styles.ErrorNoResultsWrapper>
      );
    } else {
      return (
        <VStack $spacing={6}>
          {searchResults.map((r: any) => (
            <styles.SearchResultLink
              onClick={handleResultClick}
              to={`/profile/${r.user_id}`}
            >
              {r.username}
            </styles.SearchResultLink>
          ))}
        </VStack>
      );
    }
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
        <styles.InputWrapper $isMobileNavOpen={isMobileNavOpen}>
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
            <styles.SearchResults>{renderSearchResults()}</styles.SearchResults>
          )}
        </styles.InputWrapper>
      </styles.Content>
    </styles.Wrapper>
  );
};
