import React from "react";

import { timeAgo } from "../../../utils/timeAgo";
import { useUserPermissions } from "../../../hooks/useUserPermissions";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";

import { CommentType } from "../../../types/commentType";

import * as styles from "./styles";

interface CommentCardProps {
  comment: CommentType;
  handleDeleteComment: (comment: CommentType) => void;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  handleDeleteComment,
}) => {
  const [hasEditPermissions] = useUserPermissions();

  // TO DO: isLoading state from parent

  return (
    <styles.Card>
      {hasEditPermissions && (
        <styles.EditDeleteButtonsWrapper $spacing={6}>
          <styles.DeleteButton onClick={() => handleDeleteComment(comment)}>
            Delete
          </styles.DeleteButton>
          <styles.EditButton onClick={() => ""}>Edit</styles.EditButton>
        </styles.EditDeleteButtonsWrapper>
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
    </styles.Card>
  );
};
