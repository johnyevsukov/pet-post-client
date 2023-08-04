/**
 * Title typed subtext component.
 * Renders h1 page title and animated
 * subtext (typing animation). Used in
 * the Home, Signup, and Login pages.
 */

import React from "react";
import { TypeAnimation } from "react-type-animation";

import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";

import { IconType } from "../../atoms/Icon/Icon";
import * as styles from "./styles";

interface TitleTypedSubtextProps {
  title: string;
  iconName: IconType;
  typedSubtext: string;
  minMobileHeight?: number;
}

export const TitleTypedSubtext: React.FC<TitleTypedSubtextProps> = ({
  title,
  iconName,
  typedSubtext,
  minMobileHeight,
}) => {
  return (
    <styles.Wrapper $minMobileHeight={minMobileHeight}>
      <styles.TitleIconWrapper $spacing={12}>
        <Text $color="offWhite" $weight="bold" $size="xxl" as="h1">
          {title}
        </Text>
        <Icon name={iconName} width={62} />
      </styles.TitleIconWrapper>
      <TypeAnimation
        sequence={[typedSubtext, 700]}
        wrapper="p"
        speed={40}
        style={{
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "24px",
          color: "#F5F5F5",
        }}
      />
    </styles.Wrapper>
  );
};
