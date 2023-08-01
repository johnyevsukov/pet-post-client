/**
 * System avatar component.
 */

import React from "react";
import { Icon, IconType } from "../../atoms/Icon/Icon";

import * as styles from "./styles";

interface AvatarProps {
  name: IconType;
  size: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({ name, size }) => {
  const sizeMap = {
    sm: {
      width: "46px",
      borderWidth: "3px",
      iconWidth: 28,
    },
    md: {
      width: "70px",
      borderWidth: "3px",
      iconWidth: 48,
    },
    lg: {
      width: "120px",
      borderWidth: "4px",
      iconWidth: 95,
    },
  };

  return (
    <styles.Wrapper
      $width={sizeMap[size].width}
      $borderWidth={sizeMap[size].borderWidth}
    >
      <Icon name={name} width={sizeMap[size].iconWidth} />
    </styles.Wrapper>
  );
};
