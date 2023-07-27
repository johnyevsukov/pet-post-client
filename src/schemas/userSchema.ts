import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter a username.")
    .min(3, "3 character username minimum.")
    .max(15, "15 character username maximum."),
  user_birthday: yup.string().required("Please enter a birthday."),
  user_avatar: yup.string().notRequired(),
  user_species: yup
    .string()
    .max(20, "20 character species maximum.")
    .notRequired(),
  user_location: yup.string().notRequired(),
});
