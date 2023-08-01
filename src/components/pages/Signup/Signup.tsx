import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import { PageWrapper } from "../../atoms/PageWrapper/PageWrapper";
import { PageContentColumn } from "../../atoms/PageContentColumn/PageContentColumn";
import { TitleTypedSubtext } from "../../organisms/TitleTypedSubtext/TitleTypedSubtext";
import { PageCardForm } from "../../organisms/PageCardForm/PageCardForm";
import { Input } from "../../organisms/Input/Input";

import { signupSchema } from "../../../schemas/signupSchema";

export const Signup: React.FC = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const onSubmit = () => {
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
  } = useFormik({
    initialValues: {
      user_email: "",
      username: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  if (localStorage.getItem("token")) {
    return <Navigate replace to="/feed" />;
  }

  return (
    <PageWrapper>
      <PageContentColumn $mobileAlignItems="flex-end">
        <TitleTypedSubtext
          title="Welcome!"
          iconName="dog"
          typedSubtext="You'll be posting in no time!"
        />
      </PageContentColumn>
      <PageContentColumn $mobileAlignItems="flex-start" $background="offWhite">
        <PageCardForm
          title="A little info..."
          buttonText="Sign up"
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isValid={isValid}
          error={error}
        >
          <Input
            id="user_email"
            type="text"
            name="user_email"
            label="Email"
            value={values.user_email}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched.user_email}
            error={errors.user_email}
          />
          <Input
            id="username"
            type="text"
            name="username"
            label="Username"
            value={values.username}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched.username}
            error={errors.username}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="Password"
            value={values.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
            touched={touched.password}
            error={errors.password}
          />
        </PageCardForm>
      </PageContentColumn>
    </PageWrapper>
  );
};
