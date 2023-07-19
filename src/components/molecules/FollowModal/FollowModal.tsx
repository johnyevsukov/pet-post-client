import { UserDataType } from "../../../types/userDataType";
import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";
import { Modal } from "../Modal/Modal";
import { Text } from "../../atoms/Text/Text";
import * as styles from "./styles";
import { VStack } from "../../atoms/VStack/VStack";
import { useNavigate } from "react-router-dom";

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
        {users.map((user) => {
          return (
            <styles.UserTileButton onClick={() => handleClick(user.user_id)}>
              <VStack $spacing={12}>
                <HStack $spacing={6}>
                  <Text $weight="bold">{user.username}</Text>
                  <Icon name="tag" width={24} />
                </HStack>
                <styles.IconWrapper>
                  <Icon
                    name={user.user_avatar ? user.user_avatar : "profile"}
                  />
                </styles.IconWrapper>
              </VStack>
              {user.user_species && (
                <styles.SpeciesTextWrapper>
                  <Text $size="sm" $weight="medium" $color="gray2">
                    {user.user_species}
                  </Text>
                </styles.SpeciesTextWrapper>
              )}
            </styles.UserTileButton>
          );
        })}
      </styles.Wrapper>
    </Modal>
  );
};
