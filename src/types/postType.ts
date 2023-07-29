import { IconType } from "../components/atoms/Icon/Icon";

export type PostType = {
  created_at: string;
  post_id: number;
  post_text: string;
  user_id: number;
  user_avatar?: IconType | null;
  username: string;
};
