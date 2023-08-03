/**
 * 404 page.
 */

import React from "react";

import { useNavigate } from "react-router-dom";

import { HStack } from "../../atoms/HStack/HStack";
import { VStack } from "../../atoms/VStack/VStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../molecules/Button/Button";

import * as styles from "./styles";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <styles.Wrapper>
      <VStack $spacing={12} $width="auto">
        <HStack $spacing={12}>
          <Text $weight="bold" $size="xxl" $color="pureWhite">
            404
          </Text>
          <Icon name="raccoon" width={100} />
        </HStack>
        {/* Redo with button link */}
        <Button $variant="white" $width="auto" onClick={() => navigate("/")}>
          Home
        </Button>
      </VStack>
    </styles.Wrapper>
  );
};
