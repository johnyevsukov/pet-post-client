import React from "react";
import { HamsterIcon } from "../icons/HamsterIcon";
import { CatIcon } from "../icons/CatIcon";
import { ChickenIcon } from "../icons/ChickenIcon";
import { DogIcon } from "../icons/DogIcon";
import { FishIcon } from "../icons/FishIcon";
import { FrogIcon } from "../icons/FrogIcon";
import { MonkeyIcon } from "../icons/MonkeyIcon";
import { PenguinIcon } from "../icons/PenguinIcon";
import { PigIcon } from "../icons/PigIcon";
import { RabbitIcon } from "../icons/RabbitIcon";
import { SnakeIcon } from "../icons/SnakeIcon";
import { TurtleIcon } from "../icons/TurtleIcon";
import { ProfileIcon } from "../icons/ProfileIcon";
import { NewsPaperIcon } from "../icons/NewspaperIcon";
import { DoorIcon } from "../icons/DoorIcon";
import { TagIcon } from "../icons/TagIcon";

import * as styles from "./styles";
import { RedFlagIcon } from "../icons/RedFlagIcon";
import { WarningIcon } from "../icons/WarningIcon";
import { BalloonIcon } from "../icons/BalloonIcon";
import { MailIcon } from "../icons/MailIcon";
import { LocationIcon } from "../icons/LocationIcon";

export type IconType =
  | "hamster"
  | "cat"
  | "chicken"
  | "dog"
  | "fish"
  | "frog"
  | "monkey"
  | "penguin"
  | "pig"
  | "rabbit"
  | "snake"
  | "turtle"
  | "redFlag"
  | "warning"
  | "door"
  | "profile"
  | "newspaper"
  | "tag"
  | "balloon"
  | "mail"
  | "location";

const IconMap = {
  hamster: <HamsterIcon />,
  cat: <CatIcon />,
  chicken: <ChickenIcon />,
  dog: <DogIcon />,
  fish: <FishIcon />,
  frog: <FrogIcon />,
  monkey: <MonkeyIcon />,
  penguin: <PenguinIcon />,
  pig: <PigIcon />,
  rabbit: <RabbitIcon />,
  snake: <SnakeIcon />,
  turtle: <TurtleIcon />,
  redFlag: <RedFlagIcon />,
  warning: <WarningIcon />,
  profile: <ProfileIcon />,
  newspaper: <NewsPaperIcon />,
  door: <DoorIcon />,
  tag: <TagIcon />,
  balloon: <BalloonIcon />,
  mail: <MailIcon />,
  location: <LocationIcon />,
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
