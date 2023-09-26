/**
 * System icon component.
 * Icon SVGs courtesy of
 * https://openmoji.org/.
 */

import React from "react";
import { HamsterIcon } from "./icons/HamsterIcon";
import { CatIcon } from "./icons/CatIcon";
import { ChickenIcon } from "./icons/ChickenIcon";
import { DogIcon } from "./icons/DogIcon";
import { FishIcon } from "./icons/FishIcon";
import { FrogIcon } from "./icons/FrogIcon";
import { MonkeyIcon } from "./icons/MonkeyIcon";
import { PenguinIcon } from "./icons/PenguinIcon";
import { PigIcon } from "./icons/PigIcon";
import { RabbitIcon } from "./icons/RabbitIcon";
import { SnakeIcon } from "./icons/SnakeIcon";
import { TurtleIcon } from "./icons/TurtleIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { NewsPaperIcon } from "./icons/NewspaperIcon";
import { DoorIcon } from "./icons/DoorIcon";
import { TagIcon } from "./icons/TagIcon";
import { RedFlagIcon } from "./icons/RedFlagIcon";
import { WarningIcon } from "./icons/WarningIcon";
import { BalloonIcon } from "./icons/BalloonIcon";
import { MailIcon } from "./icons/MailIcon";
import { LocationIcon } from "./icons/LocationIcon";
import { GearIcon } from "./icons/GearIcon";
import { NavGearIcon } from "./icons/NavGearIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { LizardIcon } from "./icons/LizardIcon";
import { GerbilIcon } from "./icons/GerbilIcon";
import { SpiderIcon } from "./icons/SpiderIcon";
import { DuckIcon } from "./icons/DuckIcon";
import { HedgehogIcon } from "./icons/HedgehogIcon";
import { HorseIcon } from "./icons/HorseIcon";
import { BirdIcon } from "./icons/BirdIcon";
import { CurvedUpArrowIcon } from "./icons/CurvedUpArrowIcon";
import { DefaultAvatarIcon } from "./icons/DefaultAvatarIcon";
import { LeftArrowIcon } from "./icons/LeftArrowIcon";
import { CheckIcon } from "./icons/CheckIcon";
import { MagnifyingGlassIcon } from "./icons/MagnifyingGlassIcon";
import { RaccoonIcon } from "./icons/RaccoonIcon";
import { CryingCatIcon } from "./icons/CryingCatIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import * as styles from "./styles";

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
  | "location"
  | "gear"
  | "navGear"
  | "close"
  | "lizard"
  | "bird"
  | "gerbil"
  | "spider"
  | "duck"
  | "hedgehog"
  | "horse"
  | "curvedUpArrow"
  | "defaultAvatar"
  | "leftArrow"
  | "check"
  | "magnifyingGlass"
  | "raccoon"
  | "cryingCat"
  | "github"
  | "figma";

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
  gear: <GearIcon />,
  navGear: <NavGearIcon />,
  close: <CloseIcon />,
  lizard: <LizardIcon />,
  bird: <BirdIcon />,
  gerbil: <GerbilIcon />,
  spider: <SpiderIcon />,
  duck: <DuckIcon />,
  hedgehog: <HedgehogIcon />,
  horse: <HorseIcon />,
  curvedUpArrow: <CurvedUpArrowIcon />,
  defaultAvatar: <DefaultAvatarIcon />,
  leftArrow: <LeftArrowIcon />,
  check: <CheckIcon />,
  magnifyingGlass: <MagnifyingGlassIcon />,
  raccoon: <RaccoonIcon />,
  cryingCat: <CryingCatIcon />,
  github: <GithubIcon />,
  figma: <FigmaIcon />,
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
