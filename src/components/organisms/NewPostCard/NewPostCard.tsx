import React, { useState } from "react";

import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useFormik } from "formik";

import { Avatar } from "../../molecules/Avatar/Avatar";
import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Button } from "../../molecules/Button/Button";
import { Text } from "../../atoms/Text/Text";
import { Loader } from "../../atoms/Loader/Loader";

import { PostType } from "../../../types/postType";
import { postSchema } from "../../../schemas/postSchema";

import * as styles from "./styles";
import { UserDataType } from "../../../types/userDataType";

interface NewPostCardProps {
  userAvatar: UserDataType["user_avatar"];
  handleNewPost: (post: PostType) => void;
}

export const NewPostCard: React.FC<NewPostCardProps> = ({
  userAvatar,
  handleNewPost,
}) => {
  // TO DO: Handle error posting state
  const [error, setError] = useState();

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
        setError(err);
        console.warn(err);
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
    <styles.Card>
      <HStack $spacing={8} $alignItems="flex-start">
        {/* TO DO: clean this up */}
        <Avatar name={userAvatar ? userAvatar : "defaultAvatar"} size="sm" />
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
    </styles.Card>
  );
};
