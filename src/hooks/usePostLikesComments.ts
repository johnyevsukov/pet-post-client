import { useEffect, useState, useCallback, useMemo } from "react";
import { useCurrentUserId } from "./useCurrentUserId";
import { axiosWithAuth } from "../utils/axiosAuth";
import { CommentType } from "../types/commentType";
import { LikeType } from "../types/likeType";
import { PostType } from "../types/postType";

export const usePostLikesComments = (post: PostType) => {
  const [currentUserId] = useCurrentUserId();
  const [likes, setLikes] = useState<LikeType[]>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const isLiked = useMemo(() => {
    return !!likes?.filter((like) => like.user_id === currentUserId).length;
  }, [currentUserId, likes]);

  const handleNewComment = useCallback((newComment: CommentType) => {
    setComments((comments) => [newComment, ...comments]);
  }, []);

  const handleDeleteComment = useCallback((deletedComment: CommentType) => {
    setComments((comments) =>
      comments.filter(
        (comment) => comment.comment_id !== deletedComment.comment_id
      )
    );
  }, []);

  // TO DO: Handle loading / errors here or  -debounce-
  const handleToggleLike = () => {
    if (!isLiked) {
      axiosWithAuth()
        .post(`posts/${post.post_id}/likes`, {
          user_id: currentUserId,
        })
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axiosWithAuth()
        .delete(`posts/${currentUserId}/unlike/${post.post_id}`)
        .then((res) => {
          setLikes(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axiosWithAuth().get(`posts/${post.post_id}/likes`),
      axiosWithAuth().get(`posts/${post.post_id}/comments`),
    ])
      .then(async ([res1, res2]) => {
        setIsLoading(false);
        setLikes(res1.data);
        setComments(res2.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [post.post_id]);

  return {
    likes,
    comments,
    isLoading,
    error,
    isLiked,
    handleToggleLike,
    handleNewComment,
    handleDeleteComment,
  };
};
