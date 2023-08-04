/**
 * Post card component.
 * Renders user posts in the
 * Profile and Feed pages.
 */

import React, { useState } from "react";

import { timeAgo } from "../../../utils/timeAgo";
import { usePost } from "../../../hooks/usePost";

import { NewCommentCard } from "../../organisms/NewCommentCard/NewCommentCard";
import { CommentCard } from "../CommentCard/CommentCard";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";
import { TextButton } from "../../molecules/Button/TextButton";
import { IconButton } from "../../molecules/Button/IconButton/IconButton";
import { AbsoluteRightWrapper } from "../../atoms/AbsoluteWrapper/AbsoluteRightWrapper";

import { PostType } from "../../../types/postType";

import * as styles from "./styles";

interface PostCardProps {
  post: PostType;
  handleDeletePost: (post: PostType) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  handleDeletePost,
}) => {
  const {
    userData,
    likes,
    comments,
    isLoading,
    error,
    isLiked,
    hasEditPermissions,
    handleToggleLike,
    handleNewComment,
    handleDeleteComment,
  } = usePost(post);
  const [showComments, setShowComments] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const renderComments = () => {
    if (!isLoading && error) {
      return (
        <>
          <styles.CommentConnectorLine />
          <styles.CommentLoaderErrorCard>
            <HStack $spacing={8} $justifyContent="center">
              <Text $color="red4" $weight="bold" $size="sm">
                Error loading comments
              </Text>
              <Icon name="warning" width={32} />
            </HStack>
          </styles.CommentLoaderErrorCard>
        </>
      );
    } else if (!userData || !comments || !likes) {
      return (
        <styles.CommentLoaderErrorCard>
          <Loader />
        </styles.CommentLoaderErrorCard>
      );
    } else {
      return (
        <>
          <styles.CommentConnectorLine />
          <NewCommentCard
            postId={post.post_id}
            postUsername={post.username}
            handleNewComment={handleNewComment}
          />
          {comments.map((comment) => {
            return (
              <>
                <styles.CommentConnectorLine />
                <CommentCard
                  comment={comment}
                  handleDeleteComment={handleDeleteComment}
                />
              </>
            );
          })}
          <styles.CollapseCommentsButtonWrapper>
            <IconButton
              icon="curvedUpArrow"
              iconWidth={24}
              onClick={() => setShowComments(false)}
              aria-label="collapse comments"
            />
          </styles.CollapseCommentsButtonWrapper>
        </>
      );
    }
  };

  return (
    <styles.Card>
      <HStack $spacing={8} $alignItems="flex-start">
        <Avatar
          name={post.user_avatar || userData?.user_avatar || "defaultAvatar"}
          size="sm"
        />
        <VStack $spacing={10}>
          <VStack $spacing={6}>
            <HStack $spacing={6}>
              <styles.TextLink to={`/profile/${post.user_id}`}>
                {post.username}
              </styles.TextLink>
              <Text $weight="medium" $size="sm" $color="gray1">
                {timeAgo(post.created_at)}
              </Text>
            </HStack>
            <Text>{post.post_text}</Text>
          </VStack>
          <HStack $spacing={12}>
            <styles.LikeButton
              $isLiked={isLiked}
              onClick={handleToggleLike}
              aria-label="toggle like"
            >
              paws: {likes ? likes.length : 0}
            </styles.LikeButton>
            <TextButton
              $size="xs"
              onClick={() => setShowComments((state) => !state)}
              aria-label="toggle expand collapse comments"
            >
              comments: {comments ? comments.length : 0}
            </TextButton>
          </HStack>
        </VStack>
      </HStack>
      {hasEditPermissions && (
        <AbsoluteRightWrapper $top={8} $right={12}>
          <styles.MoreButton
            onClick={() => setIsMoreMenuOpen((state) => !state)}
          >
            <HStack $spacing={3}>
              <styles.MoreDot />
              <styles.MoreDot />
              <styles.MoreDot />
            </HStack>
          </styles.MoreButton>
        </AbsoluteRightWrapper>
      )}
      {isMoreMenuOpen && (
        <AbsoluteRightWrapper $top={38} $right={15}>
          <styles.MoreMenuCard>
            <styles.DeleteButton onClick={() => handleDeletePost(post)}>
              Delete
            </styles.DeleteButton>
          </styles.MoreMenuCard>
        </AbsoluteRightWrapper>
      )}
      {showComments && (
        <styles.CommentsWrapper>{renderComments()}</styles.CommentsWrapper>
      )}
    </styles.Card>
  );
};
