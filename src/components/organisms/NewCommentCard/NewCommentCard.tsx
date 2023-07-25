import React from "react";
import * as styles from "./styles";
import { HStack } from "../../atoms/HStack/HStack";
import { Button } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";
import { useFormik } from "formik";
import { Text } from "../../atoms/Text/Text";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { Loader } from "../../atoms/Loader/Loader";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import * as yup from "yup";
import { CommentType } from "../../../types/commentType";

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
      comment_text: "",
      user_id: "",
    },
    validationSchema: commentSchema,
    onSubmit,
  });

  return (
    <styles.Wrapper>
      <styles.Form onSubmit={handleSubmit}>
        <VStack $spacing={8}>
          <styles.HiddenLabel htmlFor="post_text">Post</styles.HiddenLabel>
          <styles.TextAreaInput
            id="comment_text"
            name="comment_text"
            autoFocus
            placeholder={`Say something to ${postUsername}...`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment_text}
            $error={!!(errors.comment_text && touched.comment_text)}
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
    </styles.Wrapper>
  );
};

export const commentSchema = yup.object().shape({
  comment_text: yup
    .string()
    .required("Comment must contain at least one character.")
    .max(100, "Comment cannot exceed 100 characters."),
});
