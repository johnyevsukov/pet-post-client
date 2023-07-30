/**
 * Not ideal to fetch all
 * user follower and following
 * data along with user info.
 * More ideal to fetch a count for
 * each and fetch full follower/following
 * data when opening the follower/following modals.
 * Here for lack of a stronger API.
 */

import { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosAuth";
import { UserDataType } from "../types/userDataType";
import { useCurrentUserId } from "./useCurrentUserId";

export const useCurrentUser = () => {
  const [currentUserId] = useCurrentUserId();
  const [userData, setUserData] = useState<UserDataType>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    axiosWithAuth()
      .get(`users/${currentUserId}`)
      .then((res) => {
        setIsLoading(false);
        setUserData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.warn(err);
      });
  }, [currentUserId]);

  return {
    userData,
    isLoading,
    error,
  };
};
