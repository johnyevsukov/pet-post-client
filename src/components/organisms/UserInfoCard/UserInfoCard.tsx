import React, { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import { useUser } from "../../../hooks/useUser";
import { useUserPermissions } from "../../../hooks/useUserPermissions";

import { FollowModal } from "../../molecules/FollowModal/FollowModal";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { FlexBox } from "../../atoms/FlexBox/FlexBox";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";

import * as styles from "./styles";

export const UserInfoCard: React.FC = () => {
  const navigate = useNavigate();
  const [currentUserId] = useCurrentUserId();
  const [hasEditPermissions] = useUserPermissions();
  const {
    userData,
    userFollowers,
    userFollowing,
    isLoading,
    error,
    handleFollow,
    handleUnfollow,
  } = useUser();
  const [openModal, setOpenModal] = useState<
    "followers" | "following" | "none"
  >("none");

  const birthday = useMemo(() => {
    if (userData?.user_birthday) {
      const birthday = new Date(userData?.user_birthday);
      return birthday.toLocaleDateString();
    } else {
      return;
    }
  }, [userData?.user_birthday]);

  const isFollowing = useMemo(() => {
    return !!userFollowers.filter(
      (follower) => follower.user_id === currentUserId
    ).length;
  }, [currentUserId, userFollowers]);

  const handleSettingsClick = () => {
    navigate("settings");
  };

  const renderModal = () => {
    if (openModal === "followers" && userFollowers) {
      return (
        <FollowModal
          title="Followers"
          handleClose={() => setOpenModal("none")}
          users={userFollowers}
        />
      );
    }
    if (openModal === "following" && userFollowing) {
      return (
        <FollowModal
          title="Following"
          handleClose={() => setOpenModal("none")}
          users={userFollowing}
        />
      );
    } else {
      return;
    }
  };

  const renderSideButton = () => {
    if (hasEditPermissions) {
      return (
        <styles.SettingsButton onClick={handleSettingsClick}>
          <Icon name="gear" width={32} />
        </styles.SettingsButton>
      );
    } else if (isFollowing) {
      return (
        <styles.UnfollowUserButton onClick={handleUnfollow}>
          Unfollow
        </styles.UnfollowUserButton>
      );
    } else {
      return (
        <styles.FollowUserButton onClick={handleFollow}>
          Follow
        </styles.FollowUserButton>
      );
    }
  };

  if (!isLoading && error) {
    return (
      <styles.Card>
        <styles.BlueTopBlock />
        <HStack $spacing={8} $justifyContent="center" $padding={16}>
          <Text $color="red4" $weight="bold">
            Error loading user
          </Text>
          <Icon name="warning" />
        </HStack>
      </styles.Card>
    );
  }

  if (!userData || !userFollowers || !userFollowing) {
    return (
      <styles.Card>
        <styles.BlueTopBlock />
        <FlexBox $padding={16}>
          <Loader />
        </FlexBox>
      </styles.Card>
    );
  }

  // TO DO: sort out state for no followers or following (open modal)
  return (
    <>
      {renderModal()}
      <styles.Card>
        <styles.AvatarWrapper>
          <Avatar name={userData.user_avatar || "defaultAvatar"} size="lg" />
        </styles.AvatarWrapper>
        {renderSideButton()}
        <styles.BlueTopBlock />
        <styles.UserInfoWrapper>
          <VStack $spacing={12}>
            <HStack $spacing={6}>
              <Text $weight="bold" $size="lg">
                {userData.username}
              </Text>
              <Icon name="tag" width={48} />
            </HStack>
            <VStack $spacing={8}>
              <Text $weight="medium" $size="sm" $color="gray2">
                {userData.user_species
                  ? userData.user_species
                  : "No species..."}
              </Text>
              <HStack $spacing={12}>
                <HStack $spacing={4} $width="auto">
                  <Icon name="location" width={28} />
                  <Text $weight="medium" $size="sm" $color="gray2">
                    {userData.user_location
                      ? userData.user_location
                      : "No location..."}
                  </Text>
                </HStack>
                <HStack $spacing={4} $width="auto">
                  <Icon name="balloon" width={28} />
                  <Text $weight="medium" $size="sm" $color="gray2">
                    {birthday ? birthday : "No birthday..."}
                  </Text>
                </HStack>
                <HStack $spacing={4} $width="auto">
                  <Icon name="mail" width={28} />
                  <Text $weight="medium" $size="sm" $color="gray2">
                    {userData.user_email}
                  </Text>
                </HStack>
              </HStack>
              <HStack $spacing={8}>
                <styles.FollowButton onClick={() => setOpenModal("following")}>
                  <styles.FollowCount>
                    {userFollowing.length}
                  </styles.FollowCount>{" "}
                  <styles.FollowDescription>Following</styles.FollowDescription>
                </styles.FollowButton>
                <styles.FollowButton onClick={() => setOpenModal("followers")}>
                  <styles.FollowCount>
                    {userFollowers.length}
                  </styles.FollowCount>{" "}
                  <styles.FollowDescription>Followers</styles.FollowDescription>
                </styles.FollowButton>
              </HStack>
            </VStack>
          </VStack>
        </styles.UserInfoWrapper>
      </styles.Card>
    </>
  );
};
