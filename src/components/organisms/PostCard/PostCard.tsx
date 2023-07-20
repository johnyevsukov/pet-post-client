import React, { useEffect, useState, useMemo } from "react";

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

interface PostCardProps {
  post: PostType;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [currentUserId] = useCurrentUserId();
  const [likes, setLikes] = useState<LikeType[]>();
  const [comments, setComments] = useState<CommentType[]>();
  const [isLoading, setIsLoading] = useState(false);

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

  // handle error case here as well (&& !error)
  if (isLoading || !likes || !comments) {
    return <>load</>;
  }

  return (
    <styles.Wrapper>
      <styles.AvatarWrapper>
        <Avatar name="hamster" size="sm" />
      </styles.AvatarWrapper>
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
        <HStack $spacing={6}>
          <styles.TextButton $isLiked={isLiked} onClick={handleLike}>
            Paw: {likes.length}
          </styles.TextButton>
          <styles.TextButton $isLiked={false}>
            Comment: {comments.length}
          </styles.TextButton>
        </HStack>
      </VStack>
    </styles.Wrapper>
  );
};
