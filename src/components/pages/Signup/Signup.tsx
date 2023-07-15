import React, { useEffect } from "react";
import * as styles from "./styles";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button, LinkButton } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";
import { TypeAnimation } from "react-type-animation";
import * as yup from "yup";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  return (
    <styles.Wrapper>
      <styles.ContentColumn>
        <styles.LeftTextWrapper>
          <styles.TitleIconWrapper $spacing={12}>
            <Text $color="offWhite" $weight="bold" $size="xxl" as="h1">
              Welcome!
            </Text>
            <Icon name="dog" width={62} />
          </styles.TitleIconWrapper>
          <TypeAnimation
            sequence={["You'll be posting in no time!", 700]}
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
      <styles.ContentColumnWhite>
        <styles.Card>
          <VStack $spacing={16}>
            <Text $color="offWhite" $weight="bold" $size="xl">
              A little info...
            </Text>
            <styles.Form>
              <VStack $spacing={12}>
                <styles.LabelInputWrapper>
                  <styles.Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder=" "
                  />
                  <styles.Label htmlFor="email">Email</styles.Label>
                </styles.LabelInputWrapper>

                <styles.LabelInputWrapper>
                  <styles.Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder=" "
                  />
                  <styles.Label htmlFor="username">Username</styles.Label>
                </styles.LabelInputWrapper>

                <styles.LabelInputWrapper>
                  <styles.Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                  />
                  <styles.Label htmlFor="password">Password</styles.Label>
                </styles.LabelInputWrapper>
              </VStack>
              <styles.SubmitButtonWrapper>
                <Button $variant="white">Signup</Button>
              </styles.SubmitButtonWrapper>
            </styles.Form>
          </VStack>
        </styles.Card>
      </styles.ContentColumnWhite>
    </styles.Wrapper>
  );
};

const validationSchema = yup.object().shape({
  user_email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is required."),
  username: yup
    .string()
    .required("Username is required.")
    .min(3, "Must be at least 3 characters long."),
  password: yup
    .string()
    .required("Password is required.")
    .min(3, "Must be at least 3 characters long."),
});
