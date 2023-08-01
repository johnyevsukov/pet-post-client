/**
 * Returns the user id of
 * the user that is currenlty
 * logged in.
 */

import { useState, useEffect } from "react";

export const useCurrentUserId = () => {
  const [currentUserId, setCurrentUserId] = useState<number>();

  const getId = () => {
    return setCurrentUserId(JSON.parse(localStorage.getItem("user_id") || ""));
  };

  useEffect(() => {
    getId();
  }, []);

  return [currentUserId];
};
