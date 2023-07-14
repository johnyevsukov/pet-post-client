import React, { useEffect } from "react";
import * as styles from "./styles";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { HStack } from "../../atoms/HStack/HStack";
import { Button } from "../../molecules/Button/Button";
import { LinkButton } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";
import { TypeAnimation } from "react-type-animation";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <styles.Wrapper>
      <styles.ContentColumn>
        <styles.LeftTextWrapper>
          <styles.TitleIconWrapper $spacing={12}>
            <Text $color="offWhite" $weight="bold" $size="xxl" as="h1">
              PetPost
            </Text>
            <Icon name="hamster" width={62} />
          </styles.TitleIconWrapper>
          <TypeAnimation
            sequence={["Log in or sign up to connect with your pals!", 1000]}
            wrapper="p"
            speed={40}
            style={{
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "24px",
              color: "#F5F5F5",
            }}
          />
        </styles.LeftTextWrapper>
      </styles.ContentColumn>
      <styles.ContentColumn>
        <styles.Card>
          <VStack $spacing={20} $width="auto">
            <LinkButton $variant="blue" to="signup">
              Sign up
            </LinkButton>
            <LinkButton $variant="textBlue" to="login">
              Log in
            </LinkButton>
          </VStack>
        </styles.Card>
      </styles.ContentColumn>
    </styles.Wrapper>
  );
};
