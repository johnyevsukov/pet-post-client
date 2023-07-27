import React, { useState } from "react";

import { timeAgo } from "../../../utils/timeAgo";
import { useUserPermissions } from "../../../hooks/useUserPermissions";
import { usePostLikesComments } from "../../../hooks/usePostLikesComments";

import { NewCommentCard } from "../../organisms/NewCommentCard/NewCommentCard";
import { CommentCard } from "../CommentCard/CommentCard";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Loader } from "../../atoms/Loader/Loader";

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
    likes,
    comments,
    isLoading,
    error,
    isLiked,
    handleToggleLike,
    handleNewComment,
    handleDeleteComment,
  } = usePostLikesComments(post);
  const [hasEditPermissions] = useUserPermissions();
  const [showComments, setShowComments] = useState(false);

  const renderComments = () => {
    if (!isLoading && error) {
      return (
        <>
          <styles.CommentConnectorLine />
          <styles.LoaderErrorCard>
            <HStack $spacing={8} $justifyContent="center">
              <Text $color="red4" $weight="bold" $size="sm">
                Error loading comments
              </Text>
              <Icon name="warning" width={32} />
            </HStack>
          </styles.LoaderErrorCard>
        </>
      );
    } else if (!comments || !likes) {
      return (
        <styles.LoaderErrorCard>
          <Loader />
        </styles.LoaderErrorCard>
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
          <styles.CollapseCommentsButton
            onClick={() => setShowComments(false)}
            aria-label="collapse comments"
          >
            <Icon name="curvedUpArrow" width={24} />
          </styles.CollapseCommentsButton>
        </>
      );
    }
  };

  return (
    <styles.Card>
      {/* TO DO: Avatar should come from userData. */}
      <styles.AvatarWrapper>
        <Avatar name="defaultAvatar" size="sm" />
      </styles.AvatarWrapper>
      {/* TO DO: This should be margin not padding. This should just use flex not absolute. */}
      <VStack $spacing={10} $padding={"0 0 0 54px"}>
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
          <styles.TextButton
            $isLiked={isLiked}
            onClick={handleToggleLike}
            aria-label="toggle like"
          >
            paws: {likes ? likes.length : 0}
          </styles.TextButton>
          <styles.TextButton
            $isLiked={false}
            onClick={() => setShowComments((state) => !state)}
            aria-label="toggle expand collapse comments"
          >
            comments: {comments ? comments.length : 0}
          </styles.TextButton>
        </HStack>
      </VStack>
      {/* TO DO: Make this a menu with three dot toggle button */}
      {/* TO DO: confirm delete step */}
      {hasEditPermissions && (
        <styles.EditDeleteButtonsWrapper $spacing={6}>
          <styles.DeleteButton onClick={() => handleDeletePost(post)}>
            Delete
          </styles.DeleteButton>
          <styles.EditButton onClick={() => ""}>Edit</styles.EditButton>
        </styles.EditDeleteButtonsWrapper>
      )}
      {showComments && (
        <styles.CommentsWrapper>{renderComments()}</styles.CommentsWrapper>
      )}
    </styles.Card>
  );
};
