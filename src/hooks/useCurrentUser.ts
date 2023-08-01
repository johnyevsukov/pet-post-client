/**
 * Returns user data for the user
 * that is currently logged in.
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
    if (!currentUserId) {
      return;
    }

    setIsLoading(true);
    axiosWithAuth()
      .get(`users/${currentUserId}`)
      .then((res) => {
        setIsLoading(false);
        setUserData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response.data.message);
        console.warn(err);
      });
  }, [currentUserId]);

  return {
    userData,
    isLoading,
    error,
  };
};
