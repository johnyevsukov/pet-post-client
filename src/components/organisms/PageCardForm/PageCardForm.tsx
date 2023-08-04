/**
 * Page card form component.
 * Renders the form used in the
 * Signup and Login pages.
 */

import React from "react";

import { Loader } from "../../atoms/Loader/Loader";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";

import * as styles from "./styles";

interface PageCardFormProps {
  title: string;
  buttonText: string;
  handleSubmit: () => void;
  isSubmitting: boolean;
  isValid: boolean;
  children: JSX.Element[];
  error?: string;
}

export const PageCardForm: React.FC<PageCardFormProps> = ({
  title,
  buttonText,
  handleSubmit,
  isSubmitting,
  isValid,
  children,
  error,
}) => {
  return (
    <styles.Card $error={!!error}>
      <VStack $spacing={20}>
        <Text $color="offWhite" $weight="bold" $size="lg">
          {title}
        </Text>
        <styles.Form onSubmit={handleSubmit}>
          <VStack $spacing={28}>{children}</VStack>
          <styles.SubmitButtonWrapper>
            {isSubmitting ? (
              <Loader />
            ) : (
              <Button $variant="white" type="submit" disabled={!isValid}>
                {buttonText}
              </Button>
            )}
          </styles.SubmitButtonWrapper>
        </styles.Form>
      </VStack>
      {error && (
        <styles.ErrorMessageHStack
          $spacing={6}
          $justifyContent="center"
          style={{ bottom: 0, left: 0 }}
        >
          <Text $color="red3" $weight="bold" $size="sm">
            {error}
          </Text>
          <Icon name="warning" width={24} />
        </styles.ErrorMessageHStack>
      )}
    </styles.Card>
  );
};
