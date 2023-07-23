import React, { useCallback, useEffect, useState, useRef } from "react";
import { UserInfoCard } from "../../organisms/UserInfoCard/UserInfoCard";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useParams } from "react-router-dom";
import { PostType } from "../../../types/postType";
import * as styles from "./styles";
import { VStack } from "../../atoms/VStack/VStack";
import { PostCard } from "../../organisms/PostCard/PostCard";
import { NewPostCard } from "../../organisms/NewPostCard/NewPostCard";
import { Loader } from "../../atoms/Loader/Loader";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import { Text } from "../../atoms/Text/Text";
import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";
import { SearchBar } from "../../organisms/SearchBar/SearchBar";
import { useElementDimensions } from "../../../hooks/useElementDimensions";

export const Profile: React.FC = () => {
  const { id: profileId } = useParams();
  const [currentUserId] = useCurrentUserId();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const containerRef = useRef(null);
  const { width: containerWidth } = useElementDimensions(containerRef);

  const handleNewPost = useCallback((post: PostType) => {
    setPosts((posts) => [post, ...posts]);
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

  const renderPosts = () => {
    if (!isLoading && error) {
      return (
        <styles.LoaderErrorCard>
          <HStack $spacing={8} $justifyContent="center">
            <Text $color="red4" $weight="bold">
              Error loading posts
            </Text>
            <Icon name="warning" />
          </HStack>
        </styles.LoaderErrorCard>
      );
    } else if (!posts) {
      return (
        <styles.LoaderErrorCard>
          <Loader />
        </styles.LoaderErrorCard>
      );
    } else {
      return (
        <VStack $spacing={8}>
          {posts.map((post) => {
            return <PostCard key={post.post_id} post={post} />;
          })}
        </VStack>
      );
    }
  };

  return (
    <styles.Wrapper>
      <styles.Content ref={containerRef}>
        <SearchBar desktopWidth={containerWidth} />
        <VStack $spacing={16}>
          <UserInfoCard />
          {/* fix this for strict equality */}
          {currentUserId == profileId && (
            <NewPostCard handleNewPost={handleNewPost} />
          )}
          {renderPosts()}
        </VStack>
      </styles.Content>
    </styles.Wrapper>
  );
};
