import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosAuth";
import { UserDataType } from "../types/userDataType";
import { useCurrentUserId } from "./useCurrentUserId";

export const useUser = () => {
  const { id: profileId } = useParams();
  const [currentUserId] = useCurrentUserId();
  const [userData, setUserData] = useState<UserDataType>();
  const [userFollowers, setUserFollowers] = useState<UserDataType[]>([]);
  const [userFollowing, setUserFollowing] = useState<UserDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleFollow = () => {
    axiosWithAuth()
      .post(`users/${currentUserId}/follow`, { following_id: profileId })
      .then((res) => {
        console.log("here: ", res.data);
        setUserFollowers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUnfollow = () => {
    axiosWithAuth()
      .delete(`users/${currentUserId}/unfollow/${profileId}`)
      .then((res) => {
        setUserFollowers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      axiosWithAuth().get(`users/${profileId}`),
      axiosWithAuth().get(`users/${profileId}/following`),
      axiosWithAuth().get(`users/${profileId}/followers`),
    ])
      .then(async ([res1, res2, res3]) => {
        setIsLoading(false);
        setUserData(res1.data);
        setUserFollowing(res2.data);
        setUserFollowers(res3.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.warn(err);
      });
  }, [profileId]);

  return {
    userData,
    userFollowers,
    userFollowing,
    isLoading,
    error,
    handleFollow,
    handleUnfollow,
  };
};
