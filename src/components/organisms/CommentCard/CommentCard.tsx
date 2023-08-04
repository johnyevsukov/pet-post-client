/**
 * Comment card component.
 * Used to render post's comments.
 */

import React, { useState } from "react";

import { timeAgo } from "../../../utils/timeAgo";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Text } from "../../atoms/Text/Text";
import { AbsoluteRightWrapper } from "../../atoms/AbsoluteWrapper/AbsoluteRightWrapper";

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
      {currentUserId === comment.user_id && (
        <AbsoluteRightWrapper $top={8} $right={8}>
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
        <AbsoluteRightWrapper $top={40} $right={15}>
          <styles.MoreMenuCard>
            <styles.DeleteButton onClick={() => handleDeleteComment(comment)}>
              Delete
            </styles.DeleteButton>
          </styles.MoreMenuCard>
        </AbsoluteRightWrapper>
      )}
    </styles.Card>
  );
};
