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
import { PostCard } from "../../organisms/PostCard/PostCard";

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
            return <PostCard key={post.post_id} post={post} />;
          })
        ) : (
          <>load</>
        )}
      </styles.Content>
    </styles.Wrapper>
  );
};
