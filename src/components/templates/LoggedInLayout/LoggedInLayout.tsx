import React, { useCallback, useState } from "react";

import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../molecules/Button/Button";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import { SideNav } from "../../organisms/SideNav/SideNav";

export const LoggedInLayout: React.FC = () => {
  return (
    <styles.Wrapper>
      <SideNav />
      <Outlet />
    </styles.Wrapper>
  );
};
