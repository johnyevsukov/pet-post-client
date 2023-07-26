import React, { useRef } from "react";

import { useElementDimensions } from "../../../hooks/useElementDimensions";
import { useUserPermissions } from "../../../hooks/useUserPermissions";
import { useUserPosts } from "../../../hooks/useUserPosts";

import { UserInfoCard } from "../../organisms/UserInfoCard/UserInfoCard";
import { PostCard } from "../../organisms/PostCard/PostCard";
import { NewPostCard } from "../../organisms/NewPostCard/NewPostCard";
import { SearchBar } from "../../organisms/SearchBar/SearchBar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";

import * as styles from "./styles";

// TO DO: chnage isLoading to loading
export const Profile: React.FC = () => {
  const [hasEditPermissions] = useUserPermissions();
  const { posts, isLoading, error, handleNewPost, handleDeletePost } =
    useUserPosts();

  const containerRef = useRef(null);
  const { width: containerWidth } = useElementDimensions(containerRef);

  const renderPosts = () => {
    if (!isLoading && error) {
      return (
        <styles.LoaderErrorCard>
          <HStack $spacing={8} $justifyContent="center">
            <Text $color="red4" $weight="bold">
              Error loading posts
            </Text>
            <Icon name="warning" />
          </HStack>
        </styles.LoaderErrorCard>
      );
    } else if (!posts) {
      return (
        <styles.LoaderErrorCard>
          <Loader />
        </styles.LoaderErrorCard>
      );
    } else {
      return (
        <VStack $spacing={8}>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.post_id}
                post={post}
                handleDeletePost={handleDeletePost}
              />
            );
          })}
        </VStack>
      );
    }
  };

  return (
    <styles.Wrapper>
      <styles.Content ref={containerRef}>
        <SearchBar desktopWidth={containerWidth} />
        <VStack $spacing={16}>
          <UserInfoCard />
          {hasEditPermissions && (
            // TO DO: need user data passed here
            <NewPostCard
              userAvatar="defaultAvatar"
              handleNewPost={handleNewPost}
            />
          )}
          {renderPosts()}
        </VStack>
      </styles.Content>
    </styles.Wrapper>
  );
};
