import React from "react";
import * as styles from "./styles";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { HStack } from "../../atoms/HStack/HStack";
import { Button } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <styles.Wrapper>
      <styles.ContentColumn>
        <styles.LeftTextWrapper>
          <HStack $spacing={12}>
            <Text $color="offWhite" $weight="bold" $size="xxl" as="h1">
              PetPost
            </Text>
            <Icon name="hamster" width={62} />
          </HStack>
          <Text $color="offWhite" $weight="medium" $size="md">
            Log in or sign up to connect with your pals!
          </Text>
        </styles.LeftTextWrapper>
      </styles.ContentColumn>
      <styles.ContentColumn>
        <VStack $spacing={12} $width="auto">
          <Button $variant="blue">Login</Button>
          <Button $variant="text">Signup</Button>
        </VStack>
      </styles.ContentColumn>
    </styles.Wrapper>
  );
};
