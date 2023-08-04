/**
 * Comment card component.
 * Used to render post's comments.
 */

import React, { useEffect, useRef } from "react";

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
  currentCommentMenuId: number | undefined;
  handleToggleMoreMenu: (commentId: number) => void;
}

export const CommentCard: React.FC<CommentCardProps> = ({
  comment,
  handleDeleteComment,
  currentCommentMenuId,
  handleToggleMoreMenu,
}) => {
  const [currentUserId] = useCurrentUserId();

  const moreMenuRef = useRef<HTMLDivElement>(null);
  const moreMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        moreMenuRef.current &&
        !moreMenuRef.current.contains(e.target as Node) &&
        moreMenuButtonRef.current &&
        !moreMenuButtonRef.current.contains(e.target as Node)
      ) {
        handleToggleMoreMenu(comment.comment_id);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreMenuRef, handleToggleMoreMenu, comment.comment_id]);

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
            ref={moreMenuButtonRef}
            onClick={() => handleToggleMoreMenu(comment.comment_id)}
          >
            <HStack $spacing={3}>
              <styles.MoreDot />
              <styles.MoreDot />
              <styles.MoreDot />
            </HStack>
          </styles.MoreButton>
        </AbsoluteRightWrapper>
      )}
      {currentCommentMenuId === comment.comment_id && (
        <AbsoluteRightWrapper $top={40} $right={15}>
          <styles.MoreMenuCard ref={moreMenuRef}>
            <styles.DeleteButton onClick={() => handleDeleteComment(comment)}>
              Delete
            </styles.DeleteButton>
          </styles.MoreMenuCard>
        </AbsoluteRightWrapper>
      )}
    </styles.Card>
  );
};
