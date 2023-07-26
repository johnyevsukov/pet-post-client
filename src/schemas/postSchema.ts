import * as yup from "yup";

export const postSchema = yup.object().shape({
  post_text: yup
    .string()
    .required("Post must contain at least one character.")
    .max(200, "Post cannot exceed 200 characters."),
});
