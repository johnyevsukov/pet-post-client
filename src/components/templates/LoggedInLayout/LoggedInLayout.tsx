import React from "react";

import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../molecules/Button/Button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const LoggedInLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  };

  return (
    <styles.Wrapper>
      <styles.SideNav>
        <styles.IconLogoWrapper $spacing={12}>
          <Icon name="hamster" width={32} />
          <Text $weight="bold" $color="offWhite" $size="xl">
            PetPost
          </Text>
        </styles.IconLogoWrapper>
        <styles.NavList $spacing={6}>
          <styles.NavListItem>
            <styles.NavLink to="">
              <HStack $spacing={8}>
                <Icon name="newspaper" width={32} />
                <Text $weight="bold" $size="lg">
                  Feed
                </Text>
              </HStack>
            </styles.NavLink>
          </styles.NavListItem>
          <styles.NavListItem>
            <styles.NavLink to="">
              <HStack $spacing={8}>
                <Icon name="profile" width={32} />
                <Text $weight="bold" $size="lg">
                  Profile
                </Text>
              </HStack>
            </styles.NavLink>
          </styles.NavListItem>
          <styles.NavListItem>
            <styles.NavButton onClick={handleLogout}>
              <HStack $spacing={8}>
                <Icon name="door" width={32} />
                <Text $weight="bold" $size="lg">
                  Logout
                </Text>
              </HStack>
            </styles.NavButton>
          </styles.NavListItem>
          <styles.NavListItem>
            <styles.ButtonWrapper>
              <Button $width="100%" $variant="blue">
                Post
              </Button>
            </styles.ButtonWrapper>
          </styles.NavListItem>
        </styles.NavList>
      </styles.SideNav>
      <Outlet />
    </styles.Wrapper>
  );
};
