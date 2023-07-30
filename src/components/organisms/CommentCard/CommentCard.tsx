import React, { useState } from "react";

import { timeAgo } from "../../../utils/timeAgo";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

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
  const [currentUserId] = useCurrentUserId();
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  return (
    <styles.Card>
      {currentUserId === comment.user_id && (
        <styles.MoreButtonWrapper>
          <styles.MoreButton
            onClick={() => setIsMoreMenuOpen((state) => !state)}
          >
            <HStack $spacing={3}>
              <styles.MoreDot />
              <styles.MoreDot />
              <styles.MoreDot />
            </HStack>
          </styles.MoreButton>
        </styles.MoreButtonWrapper>
      )}
      {isMoreMenuOpen && (
        <styles.MoreMenuCard>
          <styles.DeleteTextButton onClick={() => handleDeleteComment(comment)}>
            Delete
          </styles.DeleteTextButton>
        </styles.MoreMenuCard>
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
