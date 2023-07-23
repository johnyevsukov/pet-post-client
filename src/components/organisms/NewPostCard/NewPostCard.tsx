import React from "react";
import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { Button } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";
import { useFormik } from "formik";
import { Text } from "../../atoms/Text/Text";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { Loader } from "../../atoms/Loader/Loader";
import { PostType } from "../../../types/postType";
import * as yup from "yup";

interface NewPostCardProps {
  handleNewPost: (post: PostType) => void;
}

export const NewPostCard: React.FC<NewPostCardProps> = ({ handleNewPost }) => {
  // handle error here
  const onSubmit = () => {
    axiosWithAuth()
      .post("posts", { post_text: values.post_text })
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleNewPost(res.data);
      })
      .catch((err) => {
        setSubmitting(false);
        console.log(err);
      });
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: {
      post_text: "",
    },
    validationSchema: postSchema,
    onSubmit,
  });

  return (
    <styles.Wrapper>
      <HStack $spacing={8} $alignItems="flex-start">
        <Avatar name="hamster" size="sm" />
        <styles.Form onSubmit={handleSubmit}>
          <VStack $spacing={16}>
            <styles.HiddenLabel htmlFor="post_text">Post</styles.HiddenLabel>
            <styles.TextAreaInput
              id="post_text"
              name="post_text"
              placeholder="What's on your mind, buddy?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.post_text}
              $error={!!(errors.post_text && touched.post_text)}
            />
            <HStack $spacing={8} $justifyContent="space-between">
              {isSubmitting ? (
                <Loader $width={36} />
              ) : (
                <Button
                  $variant="blue"
                  $size="md"
                  $padding="8px 25px"
                  type="submit"
                  disabled={!isValid}
                >
                  Post
                </Button>
              )}
              {values.post_text.length > 0 && (
                <Text
                  $weight="medium"
                  $color={values.post_text.length > 200 ? "red3" : "textBlack"}
                >
                  {values.post_text.length}
                </Text>
              )}
            </HStack>
          </VStack>
        </styles.Form>
      </HStack>
    </styles.Wrapper>
  );
};

export const postSchema = yup.object().shape({
  post_text: yup
    .string()
    .required("Post must contain at least one character.")
    .max(200, "Post cannot exceed 200 characters."),
});
