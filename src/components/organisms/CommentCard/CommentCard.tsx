import React from "react";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { timeAgo } from "../../../utils/timeAgo";
import * as styles from "./styles";
import { CommentType } from "../../../types/commentType";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useParams } from "react-router-dom";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

interface CommentCardProps {
  comment: CommentType;
  handleDeleteComment: (comment: CommentType) => void;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  handleDeleteComment,
}) => {
  const { id: profileId } = useParams();
  const [currentUserId] = useCurrentUserId();

  const deleteComment = () => {
    axiosWithAuth()
      .delete(`comments/${comment.comment_id}`)
      .then(() => {
        handleDeleteComment(comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <styles.CommentCard>
      {/* use strict */}
      {currentUserId == profileId && (
        <styles.DeleteCommentButton onClick={deleteComment}>
          Delete
        </styles.DeleteCommentButton>
      )}
      <VStack $spacing={6}>
        <HStack $spacing={6}>
          <styles.TextLink to={`/profile/${comment.user_id}`}>
            {comment.username}
          </styles.TextLink>
          <Text $weight="medium" $size="sm" $color="gray1">
            {timeAgo(comment.created_at)}
          </Text>
        </HStack>
        <Text>{comment.comment_text}</Text>
      </VStack>
    </styles.CommentCard>
  );
};
