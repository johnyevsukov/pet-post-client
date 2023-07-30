import * as yup from "yup";

export const signupSchema = yup.object().shape({
  user_email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is required."),
  username: yup
    .string()
    .required("Username is required.")
    .min(3, "3 character minimum.")
    .max(15, "15 character maximum."),
  password: yup
    .string()
    .required("Password is required.")
    .min(3, "3 character minimum."),
});
