import React, { useEffect, useMemo, useState } from "react";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useParams } from "react-router-dom";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { HStack } from "../../atoms/HStack/HStack";
import { VStack } from "../../atoms/VStack/VStack";
import { UserDataType } from "../../../types/userDataType";
import { UserFollowType } from "../../../types/userFollowType";
import { Loader } from "../../atoms/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { FollowModal } from "../../molecules/FollowModal/FollowModal";
import * as styles from "./styles";

export const UserInfoCard: React.FC = () => {
  const { id: profileId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserDataType>();
  const [userFollowers, setUserFollowers] = useState<UserFollowType>();
  const [userFollowing, setUserFollowing] = useState<UserFollowType>();
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState<
    "followers" | "following" | "none"
  >("none");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axiosWithAuth().get(`users/${profileId}`),
      axiosWithAuth().get(`users/${profileId}/following`),
      axiosWithAuth().get(`users/${profileId}/followers`),
    ])
      .then(async ([res1, res2, res3]) => {
        setIsLoading(false);
        setUserData(res1.data);
        setUserFollowers(res2.data);
        setUserFollowing(res3.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [profileId]);

  const handleSettingsClick = () => {
    navigate("settings");
  };

  const parsedBirthday = useMemo(() => {
    if (userData?.user_birthday) {
      const birthday = new Date(userData?.user_birthday);
      return birthday.toLocaleDateString();
    } else {
      return;
    }
  }, [userData?.user_birthday]);

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

  // handle error case here as well (&& !error)
  if (!userData || !userFollowers || !userFollowing || isLoading) {
    return (
      <styles.UserInfoCard>
        <styles.UserInfoTopBlock />
        <styles.LoaderWrapper>
          <Loader />
        </styles.LoaderWrapper>
      </styles.UserInfoCard>
    );
  }

  return (
    <styles.UserInfoCard>
      {renderModal()}
      <styles.ProfileAvatar>
        <Icon
          name={userData.user_avatar ? userData.user_avatar : "profile"}
          width={100}
        />
      </styles.ProfileAvatar>
      <styles.SettingsButton onClick={handleSettingsClick}>
        <Icon name="gear" width={32} />
      </styles.SettingsButton>
      <styles.UserInfoTopBlock />
      <styles.UserInfo>
        <VStack $spacing={12}>
          <HStack $spacing={6}>
            <Text $weight="bold" $size="lg">
              {userData.username}
            </Text>
            <Icon name="tag" width={48} />
          </HStack>
          <VStack $spacing={8}>
            <Text $weight="medium" $size="sm" $color="gray2">
              {userData.user_species ? userData.user_species : "No species..."}
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
                  {parsedBirthday ? parsedBirthday : "No birthday..."}
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
                <styles.FollowCount>{userFollowing.length}</styles.FollowCount>{" "}
                <styles.FollowDesc>Following</styles.FollowDesc>
              </styles.FollowButton>
              <styles.FollowButton onClick={() => setOpenModal("followers")}>
                <styles.FollowCount>{userFollowers.length}</styles.FollowCount>{" "}
                <styles.FollowDesc>Followers</styles.FollowDesc>
              </styles.FollowButton>
            </HStack>
          </VStack>
        </VStack>
      </styles.UserInfo>
    </styles.UserInfoCard>
  );
};
