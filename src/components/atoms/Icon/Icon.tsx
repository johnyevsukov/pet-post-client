import React from "react";
import { HamsterIcon } from "../icons/HamsterIcon";
import * as styles from "./styles";

type IconType = "hamster" | "dog";

const IconMap = {
  hamster: <HamsterIcon />,
  dog: <div></div>,
};

interface IconProps {
  name: IconType;
  width?: number;
}

export const Icon: React.FC<IconProps> = ({ name, width }) => {
  return (
    <styles.IconWrapper $width={width}>{IconMap[name]}</styles.IconWrapper>
  );
};
