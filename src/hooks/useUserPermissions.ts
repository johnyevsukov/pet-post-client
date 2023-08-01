/**
 * Very insecure. Here for
 * lack of a stronger API.
 */

/**
 * Returns has edit permissions
 * boolean value based on a check
 * of the current param user id
 * and current logged in user id.
 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCurrentUserId } from "./useCurrentUserId";

export const useUserPermissions = () => {
  const { id: profileId } = useParams();
  const [currentUserId] = useCurrentUserId();

  const [hasEditPermissions, setHasEditPermissions] = useState(false);

  useEffect(() => {
    if (currentUserId === parseInt(profileId || "")) {
      setHasEditPermissions(true);
    } else {
      setHasEditPermissions(false);
    }
  }, [currentUserId, profileId]);

  return [hasEditPermissions];
};
