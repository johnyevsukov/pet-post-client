/**
 * Follow modal.
 * Used to display the user's
 * follower/following users.
 * Rendered within the system
 * Modal component.
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import { Modal } from "../Modal/Modal";
import { Avatar } from "../Avatar/Avatar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";

import { UserDataType } from "../../../types/userDataType";

import * as styles from "./styles";

interface FollowModalProps {
  title: "Followers" | "Following";
  handleClose: () => void;
  users: UserDataType[];
}

export const FollowModal: React.FC<FollowModalProps> = ({
  title,
  handleClose,
  users,
}) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    handleClose();
    navigate(`/profile/${id}`);
  };

  return (
    <Modal title={title} handleClose={handleClose}>
      <styles.Wrapper>
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <styles.UserTileButton onClick={() => handleClick(user.user_id)}>
                <VStack $spacing={12}>
                  <HStack $spacing={6}>
                    <styles.UsernameText>{user.username}</styles.UsernameText>
                    <Icon name="tag" width={24} />
                  </HStack>
                  <styles.AvatarWrapper>
                    <Avatar
                      name={user.user_avatar ? user.user_avatar : "profile"}
                      size="md"
                    />
                  </styles.AvatarWrapper>
                </VStack>
                {user.user_species && (
                  <styles.SpeciesTextWrapper>
                    <styles.SpeciesText>{user.user_species}</styles.SpeciesText>
                  </styles.SpeciesTextWrapper>
                )}
              </styles.UserTileButton>
            );
          })
        ) : (
          <Text $weight="medium" $color="gray1">
            No {title.toLowerCase()}...
          </Text>
        )}
      </styles.Wrapper>
    </Modal>
  );
};
