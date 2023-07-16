import React, { useState } from "react";
import * as styles from "./styles";
import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";
import { Button } from "../../molecules/Button/Button";
import { VStack } from "../../atoms/VStack/VStack";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { Loader } from "../../atoms/Loader/Loader";
import { useFormik } from "formik";

interface SignupProps {}

export const Signup: React.FC<SignupProps> = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log({
      username: values.username,
      password: values.password,
      user_email: values.user_email,
    });
    axios
      .post("https://pet-post.herokuapp.com/api/auth/register", {
        username: values.username,
        password: values.password,
        user_email: values.user_email,
      })
      .then((res) => {
        setSubmitting(false);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        navigate(`/profile/${res.data.user_id}`);
      })
      .catch((err) => {
        setSubmitting(false);
        setError(err.response.data.message);
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
  } = useFormik({
    initialValues: {
      user_email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <styles.Wrapper>
      <styles.ContentColumn>
        <styles.LeftTextWrapper>
          <styles.TitleIconWrapper $spacing={12}>
            <Text $color="offWhite" $weight="bold" $size="xxl" as="h1">
              Welcome!
            </Text>
            <Icon name="dog" width={62} />
          </styles.TitleIconWrapper>
          <TypeAnimation
            sequence={["You'll be posting in no time!", 700]}
            wrapper="p"
            speed={40}
            style={{
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "24px",
              color: "#F5F5F5",
            }}
          />
        </styles.LeftTextWrapper>
      </styles.ContentColumn>
      <styles.ContentColumnWhite>
        <styles.Card $error={!!error}>
          <VStack $spacing={20}>
            <Text $color="offWhite" $weight="bold" $size="lg">
              A little info...
            </Text>

            <styles.Form onSubmit={handleSubmit}>
              <VStack $spacing={28}>
                <styles.LabelInputWrapper>
                  <styles.Input
                    type="text"
                    name="user_email"
                    id="user_email"
                    onChange={handleChange}
                    value={values.user_email}
                    onBlur={handleBlur}
                    /* Needed for animation */
                    placeholder=" "
                    $error={!!(errors.user_email && touched.user_email)}
                  />
                  <styles.Label htmlFor="user_email">Email</styles.Label>
                  {errors.user_email && touched.user_email && (
                    <styles.IconWrapper>
                      <Icon name="warning" width={20} />
                    </styles.IconWrapper>
                  )}
                  {errors.user_email && touched.user_email && (
                    <styles.InputErrorWrapper>
                      <Text $size="xs" $color="red4">
                        {errors.user_email}
                      </Text>
                    </styles.InputErrorWrapper>
                  )}
                </styles.LabelInputWrapper>

                <styles.LabelInputWrapper>
                  <styles.Input
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                    /* Needed for animation */
                    placeholder=" "
                    $error={!!(errors.username && touched.username)}
                  />
                  <styles.Label htmlFor="username">Username</styles.Label>
                  {errors.username && touched.username && (
                    <styles.IconWrapper>
                      <Icon name="warning" width={20} />
                    </styles.IconWrapper>
                  )}
                  {errors.username && touched.username && (
                    <styles.InputErrorWrapper>
                      <Text $size="xs" $color="red4">
                        {errors.username}
                      </Text>
                    </styles.InputErrorWrapper>
                  )}
                </styles.LabelInputWrapper>

                <styles.LabelInputWrapper>
                  <styles.Input
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    /* Needed for animation */
                    placeholder=" "
                    $error={!!(errors.password && touched.password)}
                  />
                  <styles.Label htmlFor="password">Password</styles.Label>
                  {errors.password && touched.password && (
                    <styles.IconWrapper>
                      <Icon name="warning" width={20} />
                    </styles.IconWrapper>
                  )}
                  {errors.password && touched.password && (
                    <styles.InputErrorWrapper>
                      <Text $size="xs" $color="red4">
                        {errors.password}
                      </Text>
                    </styles.InputErrorWrapper>
                  )}
                </styles.LabelInputWrapper>
              </VStack>
              <styles.SubmitButtonWrapper>
                {isSubmitting ? (
                  <Loader />
                ) : (
                  <Button $variant="white" type="submit" disabled={!isValid}>
                    Sign up
                  </Button>
                )}
              </styles.SubmitButtonWrapper>
            </styles.Form>
          </VStack>
          {error && (
            <styles.ErrorMessageHStack
              $spacing={6}
              $justifyContent="center"
              style={{ bottom: 0, left: 0 }}
            >
              <Text $color="red3" $weight="bold" $size="sm">
                {error}
              </Text>
              <Icon name="warning" width={24} />
            </styles.ErrorMessageHStack>
          )}
        </styles.Card>
      </styles.ContentColumnWhite>
    </styles.Wrapper>
  );
};

const validationSchema = yup.object().shape({
  user_email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is required."),
  username: yup
    .string()
    .required("Username is required.")
    .min(3, "3 character minimum."),
  password: yup
    .string()
    .required("Password is required.")
    .min(3, "3 character minimum."),
});
