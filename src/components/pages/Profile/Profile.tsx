import React, { useEffect, useState } from "react";
import { UserInfoCard } from "../../organisms/UserInfoCard/UserInfoCard";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useParams } from "react-router-dom";
import { PostType } from "../../../types/postType";
import { Text } from "../../atoms/Text/Text";
import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { timeAgo } from "../../../utils/timeAgo";
import { VStack } from "../../atoms/VStack/VStack";
import { Icon } from "../../atoms/Icon/Icon";
import { Avatar } from "../../molecules/Avatar/Avatar";

export const Profile: React.FC = () => {
  const { id: profileId } = useParams();
  const [posts, setPosts] = useState<PostType[]>();

  useEffect(() => {
    axiosWithAuth()
      .get(`users/${profileId}/posts`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);

  console.log(posts);

  return (
    <styles.Wrapper>
      <styles.Content>
        <UserInfoCard />
        {posts ? (
          posts.map((post) => {
            return (
              <styles.PostCard>
                <styles.AvatarWrapper>
                  <Avatar name="hamster" size="sm" />
                </styles.AvatarWrapper>

                <VStack $spacing={6} $padding={"0 0 0 54px"}>
                  <HStack $spacing={6}>
                    <Text $weight="bold" $size="sm">
                      {post.username}
                    </Text>
                    <Text $weight="medium" $size="sm" $color="gray1">
                      {timeAgo(post.created_at)}
                    </Text>
                  </HStack>
                  <Text>{post.post_text}</Text>
                  <HStack $spacing={6}>
                    <Text $weight="bold" $size="xs">
                      Paw: 0
                    </Text>
                    <Text $weight="bold" $size="xs">
                      Comment: 0
                    </Text>
                  </HStack>
                </VStack>
              </styles.PostCard>
            );
          })
        ) : (
          <>load</>
        )}
      </styles.Content>
    </styles.Wrapper>
  );
};
