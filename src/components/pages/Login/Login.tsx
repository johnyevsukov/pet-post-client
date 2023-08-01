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

import { loginSchema } from "../../../schemas/loginSchema";

export const Login: React.FC = () => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const onSubmit = () => {
    axios
      .post("https://pet-post.herokuapp.com/api/auth/login", {
        username: values.username,
        password: values.password,
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
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  if (localStorage.getItem("token")) {
    return <Navigate replace to="/feed" />;
  }

  return (
    <PageWrapper>
      <PageContentColumn $mobileAlignItems="flex-end">
        <TitleTypedSubtext
          title="Login"
          iconName="frog"
          typedSubtext="So good to see you again!"
        />
      </PageContentColumn>
      <PageContentColumn $mobileAlignItems="flex-start" $background="offWhite">
        <PageCardForm
          title="Your info..."
          buttonText="Log in"
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          isValid={isValid}
          error={error}
        >
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
