import { useState, useEffect } from "react";

export const useCurrentUserId = () => {
  const [currentUserId, serCurrentUserId] = useState<number>();

  const getId = () => {
    return serCurrentUserId(JSON.parse(localStorage.getItem("user_id") || ""));
  };

  useEffect(() => {
    getId();
  }, []);

  return [currentUserId];
};
