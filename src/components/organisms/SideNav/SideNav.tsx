import React from "react";

import { useNavigate } from "react-router-dom";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";

import * as styles from "./styles";

export const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const [currentUserId] = useCurrentUserId();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    navigate("/");
  };

  return (
    <styles.Nav>
      <styles.IconLogoWrapper $spacing={12}>
        <Icon name="hamster" width={32} />
        <Text $weight="bold" $color="offWhite" $size="xl">
          PetPost
        </Text>
      </styles.IconLogoWrapper>
      <styles.NavList $spacing={6}>
        <styles.NavListItem>
          <styles.NavLink to="/feed">
            <HStack $spacing={8}>
              <Icon name="newspaper" width={32} />
              <Text $weight="bold" $size="lg">
                Feed
              </Text>
            </HStack>
          </styles.NavLink>
        </styles.NavListItem>
        <styles.NavListItem>
          <styles.NavLink to={`/profile/${currentUserId}`}>
            <HStack $spacing={8}>
              <Icon name="profile" width={32} />
              <Text $weight="bold" $size="lg">
                Profile
              </Text>
            </HStack>
          </styles.NavLink>
        </styles.NavListItem>
        <styles.NavListItem>
          <styles.NavLink to={`/profile/${currentUserId}/settings`}>
            <HStack $spacing={8}>
              <Icon name="navGear" width={32} />
              <Text $weight="bold" $size="lg">
                Settings
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

        {/* TO DO: Add post modal functionality here. */}
        {/* <styles.NavListItem>
          <styles.ButtonNavListItem>
            <Button $width="100%" $variant="blue">
              Post
            </Button>
          </styles.ButtonNavListItem>
        </styles.NavListItem> */}
      </styles.NavList>
    </styles.Nav>
  );
};
