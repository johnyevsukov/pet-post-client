/**
 * Profile page.
 * Renders an info card populated with
 * the current user's info, a card to create
 * a new post, and a feed of all posts
 * posted by the current user.
 * Rendered through the LoggedInLayout
 * template.
 */

import React, { useCallback, useState } from "react";

import { useUserPermissions } from "../../../hooks/useUserPermissions";
import { useProfilePosts } from "../../../hooks/useProfilePosts";

import { UserInfoCard } from "../../organisms/UserInfoCard/UserInfoCard";
import { PostCard } from "../../organisms/PostCard/PostCard";
import { NewPostCard } from "../../organisms/NewPostCard/NewPostCard";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";

import * as styles from "./styles";

export const Profile: React.FC = () => {
  const [hasEditPermissions] = useUserPermissions();
  const { posts, isLoading, error, handleNewPost, handleDeletePost } =
    useProfilePosts();
  const [currentPostMoreMenuId, setCurrentPostMoreMenuId] = useState<
    number | undefined
  >();

  const handleTogglePostMoreMenu = useCallback(
    (postId: number) => {
      if (currentPostMoreMenuId === postId) {
        setCurrentPostMoreMenuId(undefined);
      } else {
        setCurrentPostMoreMenuId(postId);
      }
    },
    [currentPostMoreMenuId]
  );

  const renderPosts = () => {
    if (!isLoading && error) {
      return (
        <styles.Card>
          <HStack $spacing={8} $justifyContent="center">
            <Text $color="red4" $weight="bold">
              Error loading posts.
            </Text>
            <Icon name="warning" />
          </HStack>
        </styles.Card>
      );
    } else if (!posts.length && isLoading) {
      return (
        <styles.Card>
          <Loader />
        </styles.Card>
      );
    } else if (!posts.length && !isLoading) {
      return (
        <styles.Card>
          <Text $color="gray1" $weight="medium">
            No posts yet...
          </Text>
        </styles.Card>
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
                currentMoreMenuId={currentPostMoreMenuId}
                handleToggleMoreMenu={handleTogglePostMoreMenu}
              />
            );
          })}
        </VStack>
      );
    }
  };

  return (
    <VStack $spacing={16} $padding="0 0 16px">
      <UserInfoCard />
      {hasEditPermissions && <NewPostCard handleNewPost={handleNewPost} />}
      {renderPosts()}
    </VStack>
  );
};
