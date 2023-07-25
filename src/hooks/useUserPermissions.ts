/**
 * Super insecure way
 * to handle auth for edit
 * permisions. Here for
 * lack of a stronger API.
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
