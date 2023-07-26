import * as yup from "yup";

export const commentSchema = yup.object().shape({
  comment_text: yup
    .string()
    .required("Comment must contain at least one character.")
    .max(100, "Comment cannot exceed 100 characters."),
});
