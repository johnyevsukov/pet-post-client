/**
 * Ideally this whole hook should
 * not be necessary. Any needed post
 * user data should come from api when
 * initially fetching posts. Likes and comments
 * should load when opened.
 */

/**
 * Returns user data, likes, and comments
 * for a given post.
 */

import { useEffect, useState, useCallback, useMemo } from "react";
import { useCurrentUserId } from "./useCurrentUserId";
import { axiosWithAuth } from "../utils/axiosAuth";
import { CommentType } from "../types/commentType";
import { LikeType } from "../types/likeType";
import { PostType } from "../types/postType";
import { UserDataType } from "../types/userDataType";

export const usePost = (post: PostType) => {
  const [currentUserId] = useCurrentUserId();

  const [userData, setUserData] = useState<UserDataType>();
  const [likes, setLikes] = useState<LikeType[]>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const hasEditPermissions = useMemo(() => {
    return currentUserId === post.user_id;
  }, [currentUserId, post.user_id]);

  const isLiked = useMemo(() => {
    return !!likes?.filter((like) => like.user_id === currentUserId).length;
  }, [currentUserId, likes]);

  const handleNewComment = useCallback((newComment: CommentType) => {
    setComments((comments) => [newComment, ...comments]);
  }, []);

  const handleDeleteComment = (commentToDelete: CommentType) => {
    setIsLoading(true);
    axiosWithAuth()
      .delete(`comments/${commentToDelete.comment_id}`)
      .then(() => {
        setIsLoading(false);
        setComments((comments) =>
          comments.filter(
            (comment) => comment.comment_id !== commentToDelete.comment_id
          )
        );
      })
      .catch((err) => {
        setIsLoading(false);
        console.warn(err);
      });
  };

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
    if (!currentUserId) {
      return;
    }

    setIsLoading(true);
    Promise.all([
      axiosWithAuth().get(`users/${post.user_id}`),
      axiosWithAuth().get(`posts/${post.post_id}/likes`),
      axiosWithAuth().get(`posts/${post.post_id}/comments`),
    ])
      .then(async ([res1, res2, res3]) => {
        setIsLoading(false);
        setUserData(res1.data);
        setLikes(res2.data);
        setComments(res3.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        console.warn(err);
      });
  }, [post.user_id, post.post_id, currentUserId]);

  return {
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
  };
};
