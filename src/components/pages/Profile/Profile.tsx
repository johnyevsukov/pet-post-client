import React from "react";
import { UserInfoCard } from "../../organisms/UserInfoCard/UserInfoCard";
import * as styles from "./styles";

export const Profile: React.FC = () => {
  return (
    <styles.Wrapper>
      <styles.Content>
        <UserInfoCard />
      </styles.Content>
    </styles.Wrapper>
  );
};
