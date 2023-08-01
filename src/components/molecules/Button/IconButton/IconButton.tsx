/**
 * System icon button component.
 */

import React from "react";
import { Icon, IconType } from "../../../atoms/Icon/Icon";
import * as styles from "./styles";

interface IconButtonProps {
  icon: IconType;
  iconWidth?: number;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  iconWidth,
  onClick,
}) => {
  return (
    <styles.Button onClick={onClick}>
      <Icon name={icon} width={iconWidth ? iconWidth : 32} />
    </styles.Button>
  );
};
