import React from "react";
import { axiosWithAuth } from "../../../utils/axiosAuth";

import { useNavigate } from "react-router-dom";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

import { Modal } from "../Modal/Modal";
import { Text } from "../../atoms/Text/Text";
import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";
import { VStack } from "../../atoms/VStack/VStack";
import { Button } from "../Button/Button";

import * as styles from "./styles";

interface DeleteAccountModalProps {
  handleClose: () => void;
}

export const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  handleClose,
}) => {
  const navigate = useNavigate();
  const [currentUserId] = useCurrentUserId();

  const handleDeleteAccount = () => {
    axiosWithAuth()
      .delete(`users/${currentUserId}`)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        navigate("/");
      })
      // TO DO: Error / loading handling here.
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <Modal title="Delete Account" handleClose={handleClose}>
      <styles.Wrapper>
        <VStack $spacing={6}>
          <HStack $spacing={6} $justifyContent="center">
            <Text $weight="bold">Are you sure you want to go?</Text>
            <Icon name="cryingCat" />
          </HStack>
          <HStack $spacing={12} $justifyContent="center">
            <Button $variant="red" onClick={handleDeleteAccount}>
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </HStack>
        </VStack>
        <styles.FloatingIconsWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="cat" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="dog" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="penguin" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="hamster" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="lizard" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="duck" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="chicken" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="pig" />
          </styles.FloatingIconWrapper>
          <styles.FloatingIconWrapper>
            <Icon name="fish" />
          </styles.FloatingIconWrapper>
        </styles.FloatingIconsWrapper>
      </styles.Wrapper>
    </Modal>
  );
};
