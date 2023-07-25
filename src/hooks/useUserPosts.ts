import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosAuth";
import { PostType } from "../types/postType";

export const useUserPosts = () => {
  const { id: profileId } = useParams();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleNewPost = useCallback((newPost: PostType) => {
    setPosts((posts) => [newPost, ...posts]);
  }, []);

  const handleDeletePost = useCallback((deletedPost: PostType) => {
    setPosts((posts) =>
      posts.filter((post) => post.post_id !== deletedPost.post_id)
    );
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axiosWithAuth()
      .get(`users/${profileId}/posts`)
      .then((res) => {
        setIsLoading(false);
        setPosts(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.warn(err);
      });
  }, [profileId]);

  return { posts, isLoading, error, handleNewPost, handleDeletePost };
};
