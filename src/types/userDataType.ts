import { IconType } from "../components/atoms/Icon/Icon";

export type UserDataType = {
  created_at: string;
  password: string;
  updated_at: string;
  user_avatar?: IconType | null;
  user_birthday?: string | null;
  user_email: string;
  user_id: number;
  user_location?: string | null;
  user_species?: string | null;
  username: string;
};
