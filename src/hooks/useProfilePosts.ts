/**
 * Returns all posts for the user
 * of the current profile page as
 * well as new post and delete post
 * functions.
 */

import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosAuth";
import { PostType } from "../types/postType";

export const useProfilePosts = () => {
  const { id: profileId } = useParams();

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleNewPost = useCallback((newPost: PostType) => {
    setPosts((posts) => [newPost, ...posts]);
  }, []);

  const handleDeletePost = (postToDelete: PostType) => {
    setIsLoading(true);
    axiosWithAuth()
      .delete(`posts/${postToDelete.post_id}`)
      .then(() => {
        setIsLoading(false);
        setPosts((posts) =>
          posts.filter((post) => post.post_id !== postToDelete.post_id)
        );
      })
      .catch((err) => {
        setIsLoading(false);
        console.warn(err);
      });
  };

  useEffect(() => {
    if (!profileId) {
      return;
    }

    setIsLoading(true);
    axiosWithAuth()
      .get(`users/${profileId}/posts`)
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        console.warn(err);
      });
  }, [profileId]);

  return { posts, isLoading, error, handleNewPost, handleDeletePost };
};
