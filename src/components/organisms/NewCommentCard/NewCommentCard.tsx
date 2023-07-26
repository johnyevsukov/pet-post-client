// TO DO: Rename this file to have "form" in it (as well as new post card)?

import React, { useState } from "react";

import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useFormik } from "formik";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Button } from "../../molecules/Button/Button";
import { Loader } from "../../atoms/Loader/Loader";
import { Text } from "../../atoms/Text/Text";

import { CommentType } from "../../../types/commentType";
import { commentSchema } from "../../../schemas/commentSchema";

import * as styles from "./styles";

interface NewCommentCardProps {
  postId: number;
  postUsername: string;
  handleNewComment: (post: CommentType) => void;
}

export const NewCommentCard: React.FC<NewCommentCardProps> = ({
  postId,
  postUsername,
  handleNewComment,
}) => {
  const [currentUserId] = useCurrentUserId();
  const [error, setError] = useState();

  // handle error here
  const onSubmit = () => {
    axiosWithAuth()
      .post(`posts/${postId}/comments`, {
        comment_text: values.comment_text,
        user_id: currentUserId,
      })
      .then((res) => {
        resetForm();
        setSubmitting(false);
        handleNewComment(res.data);
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
      comment_text: "",
      user_id: "",
    },
    validationSchema: commentSchema,
    onSubmit,
  });

  return (
    <styles.Card>
      <styles.Form onSubmit={handleSubmit}>
        <VStack $spacing={8}>
          <styles.HiddenLabel htmlFor="post_text">Post</styles.HiddenLabel>
          <styles.TextAreaInput
            id="comment_text"
            name="comment_text"
            placeholder={`Say something to ${postUsername}...`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment_text}
            $error={!!(errors.comment_text && touched.comment_text)}
            autoFocus
          />
          <HStack $spacing={8} $justifyContent="space-between">
            {isSubmitting ? (
              <Loader $width={34} />
            ) : (
              <Button
                $variant="blue"
                $size="sm"
                $padding="8px 25px"
                type="submit"
                disabled={!isValid}
              >
                Post
              </Button>
            )}
            {values.comment_text.length > 0 && (
              <Text
                $weight="medium"
                $color={values.comment_text.length > 100 ? "red3" : "textBlack"}
              >
                {values.comment_text.length}
              </Text>
            )}
          </HStack>
        </VStack>
      </styles.Form>
    </styles.Card>
  );
};
