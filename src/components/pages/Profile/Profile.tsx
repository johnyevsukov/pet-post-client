import React from "react";
import * as styles from "./styles";
import { Icon } from "../../atoms/Icon/Icon";
import { Text } from "../../atoms/Text/Text";
import { HStack } from "../../atoms/HStack/HStack";
import { VStack } from "../../atoms/VStack/VStack";

export const Profile: React.FC = () => {
  return (
    <styles.Content>
      <styles.UserInfoCard>
        <styles.ProfileAvatar>
          <Icon name="hamster" width={100} />
        </styles.ProfileAvatar>
        <styles.UserInfoTopBlock />
        <styles.UserInfo>
          <VStack $spacing={2}>
            <HStack $spacing={6}>
              <Text $weight="bold" $size="lg">
                Chonk
              </Text>
              <Icon name="tag" width={48} />
            </HStack>
            <Text $weight="medium" $size="sm" $color="gray2">
              Hi i'm Chonk! I'm a 1y/o Syrian hamster.
            </Text>
            <HStack $spacing={6}>
              <Icon name="location" width={32} />
              <Icon name="balloon" width={32} />
              <Icon name="mail" width={32} />
            </HStack>
          </VStack>
        </styles.UserInfo>
      </styles.UserInfoCard>
    </styles.Content>
  );
};
