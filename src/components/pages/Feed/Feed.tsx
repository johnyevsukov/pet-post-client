/**
 * Feed page.
 * Renders a card to create
 * a new post and a feed of all posts
 * posted by users that the current
 * user is following. Rendered through
 * the LoggedInLayout template.
 */

import React from "react";

import { useFeedPosts } from "../../../hooks/useFeedPosts";

import { PostCard } from "../../organisms/PostCard/PostCard";
import { NewPostCard } from "../../organisms/NewPostCard/NewPostCard";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";

import * as styles from "./styles";

export const Feed: React.FC = () => {
  const { posts, isLoading, error, handleNewPost, handleDeletePost } =
    useFeedPosts();

  const renderPosts = () => {
    if (!isLoading && error) {
      return (
        <styles.Card>
          <HStack $spacing={8} $justifyContent="center">
            <Text $color="red4" $weight="bold">
              Error loading posts
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
              />
            );
          })}
        </VStack>
      );
    }
  };

  return (
    <VStack $spacing={16} $padding="0 0 16px">
      <NewPostCard handleNewPost={handleNewPost} />
      {renderPosts()}
    </VStack>
  );
};
