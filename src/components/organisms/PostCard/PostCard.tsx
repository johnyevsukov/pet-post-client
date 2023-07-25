import React, { useEffect, useState, useMemo, useCallback } from "react";

import { PostType } from "../../../types/postType";
import { Text } from "../../atoms/Text/Text";
import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { timeAgo } from "../../../utils/timeAgo";
import { VStack } from "../../atoms/VStack/VStack";

import { Avatar } from "../../molecules/Avatar/Avatar";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { LikeType } from "../../../types/likeType";
import { CommentType } from "../../../types/commentType";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import { Loader } from "../../atoms/Loader/Loader";
import { Icon } from "../../atoms/Icon/Icon";
import { NewCommentCard } from "../../organisms/NewCommentCard/NewCommentCard";
import { useParams } from "react-router-dom";
import { CommentCard } from "../CommentCard/CommentCard";

interface PostCardProps {
  post: PostType;
  handleDeletePost: (post: PostType) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  handleDeletePost,
}) => {
  const [currentUserId] = useCurrentUserId();
  const { id: profileId } = useParams();
  const [likes, setLikes] = useState<LikeType[]>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleNewComment = useCallback((comment: CommentType) => {
    setComments((comments) => [comment, ...comments]);
  }, []);

  const handleDeleteComment = useCallback((comment: CommentType) => {
    setComments((comments) =>
      comments.filter((c) => c.comment_id !== comment.comment_id)
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axiosWithAuth().get(`posts/${post.post_id}/likes`),
      axiosWithAuth().get(`posts/${post.post_id}/comments`),
    ])
      .then(async ([res1, res2]) => {
        console.log("likes: ", res1.data);
        console.log("comments: ", res2.data);
        setIsLoading(false);
        setLikes(res1.data);
        setComments(res2.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [post.post_id]);

  const isLiked = useMemo(() => {
    return !!likes?.filter((like) => like.user_id === currentUserId).length;
  }, [currentUserId, likes]);

  // Handle loading / errors here
  const handleLike = () => {
    if (!isLiked) {
      axiosWithAuth()
        .post(`posts/${post.post_id}/likes`, {
          user_id: localStorage.getItem("user_id"),
        })
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosWithAuth()
        .delete(
          `posts/${localStorage.getItem("user_id")}/unlike/${post.post_id}`
        )
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDelete = () => {
    axiosWithAuth()
      .delete(`posts/${post.post_id}`)
      .then(() => {
        handleDeletePost(post);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle error case here as well (&& !error)
  if (isLoading || !likes || !comments) {
    return (
      <styles.LoaderCard>
        <Loader />
      </styles.LoaderCard>
    );
  }

  return (
    <styles.Wrapper>
      <styles.AvatarWrapper>
        <Avatar name="hamster" size="sm" />
      </styles.AvatarWrapper>
      {/* strict */}
      {currentUserId == post.user_id && (
        <styles.DeleteButton onClick={handleDelete}>Delete</styles.DeleteButton>
      )}
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
          <styles.TextButton $isLiked={isLiked} onClick={handleLike}>
            paws: {likes.length}
          </styles.TextButton>
          <styles.TextButton
            $isLiked={false}
            onClick={() => setShowComments((s) => !s)}
          >
            comments: {comments.length}
          </styles.TextButton>
        </HStack>
      </VStack>
      {showComments && (
        <styles.CommentsWrapper>
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
        </styles.CommentsWrapper>
      )}
    </styles.Wrapper>
  );
};
