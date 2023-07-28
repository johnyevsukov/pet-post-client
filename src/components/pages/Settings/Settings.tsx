import React, { useMemo, useState } from "react";
import { Text } from "../../atoms/Text/Text";
import * as styles from "./styles";
import { Icon } from "../../atoms/Icon/Icon";
import { HStack } from "../../atoms/HStack/HStack";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { SelectField } from "../../organisms/SelectField/SelectField";
import { VStack } from "../../atoms/VStack/VStack";
import { useUser } from "../../../hooks/useUser";
import { useFormik } from "formik";
import { SettingsInput } from "../../organisms/SettingsInput/SettingsInput";
import { Button } from "../../molecules/Button/Button";
import { axiosWithAuth } from "../../../utils/axiosAuth";
import { useCurrentUserId } from "../../../hooks/useCurrentUserId";
import { Loader } from "../../atoms/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../../schemas/userSchema";

const avatar = [
  { label: "Default", value: "defaultAvatar" },
  { label: "Dog", value: "dog" },
  { label: "Cat", value: "cat" },
  { label: "Hamster", value: "hamster" },
  { label: "Lizard", value: "lizard" },
  { label: "Bird", value: "bird" },
  { label: "Frog", value: "frog" },
  { label: "Gerbil", value: "gerbil" },
  { label: "Fish", value: "fish" },
  { label: "Spider", value: "spider" },
  { label: "Turtle", value: "turtle" },
  { label: "Snake", value: "snake" },
  { label: "Duck", value: "duck" },
  { label: "Hedgehog", value: "hedgehog" },
  { label: "Horse", value: "horse" },
  { label: "Monkey", value: "monkey" },
  { label: "Rabbit", value: "rabbit" },
  { label: "Pig", value: "pig" },
];

const locations = [
  { label: "None", value: "" },
  { label: "Alabama", value: "Alabama" },
  { label: "Alaska", value: "Alaska" },
  { label: "Arizona", value: "Arizona" },
  { label: "Arkansas", value: "Arkansas" },
  { label: "California", value: "California" },
  { label: "Colorado", value: "Colorado" },
  { label: "Connecticut", value: "Connecticut" },
  { label: "Delaware", value: "Delaware" },
  { label: "Florida", value: "Florida" },
  { label: "Georgia", value: "Georgia" },
  { label: "Hawaii", value: "Hawaii" },
  { label: "Idaho", value: "Idaho" },
  { label: "Illinois", value: "Illinois" },
  { label: "Indiana", value: "Indiana" },
  { label: "Iowa", value: "Iowa" },
  { label: "Kansas", value: "Kansas" },
  { label: "Kentucky", value: "Kentucky" },
  { label: "Louisiana", value: "Louisiana" },
  { label: "Maine", value: "Maine" },
  { label: "Maryland", value: "Maryland" },
  { label: "Massachusetts", value: "Massachusetts" },
  { label: "Michigan", value: "Michigan" },
  { label: "Minnesota", value: "Minnesota" },
  { label: "Mississippi", value: "Mississippi" },
  { label: "Missouri", value: "Missouri" },
  { label: "Montana", value: "Montana" },
  { label: "Nebraska", value: "Nebraska" },
  { label: "Nevada", value: "Nevada" },
  { label: "New Hampshire", value: "New Hampshire" },
  { label: "New Jersey", value: "New Jersey" },
  { label: "New Mexico", value: "New Mexico" },
  { label: "New York", value: "New York" },
  { label: "North Carolina", value: "North Carolina" },
  { label: "North Dakota", value: "North Dakota" },
  { label: "Ohio", value: "Ohio" },
  { label: "Oklahoma", value: "Oklahoma" },
  { label: "Oregon", value: "Oregon" },
  { label: "Pennsylvania", value: "Pennsylvania" },
  { label: "Rhode Island", value: "Rhode Island" },
  { label: "South Carolina", value: "South Carolina" },
  { label: "South Dakota", value: "South Dakota" },
  { label: "Tennessee", value: "Tennessee" },
  { label: "Texas", value: "Texas" },
  { label: "Utah", value: "Utah" },
  { label: "Vermont", value: "Vermont" },
  { label: "Virginia", value: "Virginia" },
  { label: "Washington", value: "Washington" },
  { label: "West Virginia", value: "West Virginia" },
  { label: "Wisconsin", value: "Wisconsin" },
  { label: "Wyoming", value: "Wyoming" },
];

export const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [currentUserId] = useCurrentUserId();
  const { userData, isLoading, error } = useUser();
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);
  const [submitError, setSubmitError] = useState();

  const birthday = useMemo(() => {
    if (userData?.user_birthday) {
      const birthday = new Date(userData?.user_birthday);
      return birthday.toISOString().substring(0, 10);
    } else {
      return;
    }
  }, [userData?.user_birthday]);

  const onSubmit = () => {
    axiosWithAuth()
      .put(`users/${currentUserId}`, values)
      .then((res) => {
        setSubmitting(false);
        setSuccessfullySubmitted(true);
      })
      .catch((err) => {
        setSubmitting(false);
        setSubmitError(err);
        console.warn("err", err);
      });
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
    setSubmitting,
    isValid,
  } = useFormik({
    initialValues: {
      username: userData?.username || "",
      user_avatar: userData?.user_avatar,
      user_species: userData?.user_species || "",
      user_location: userData?.user_location || "",
      user_birthday: birthday || "",
    },
    validationSchema: userSchema,
    onSubmit,
    enableReinitialize: true,
  });

  if (!isLoading && error) {
    return <>error</>;
  }

  if (!userData) {
    return <>loading</>;
  }

  return (
    <styles.SettingsCard>
      <VStack $spacing={24}>
        <HStack $spacing={6} $justifyContent="space-between">
          <styles.BackButton onClick={() => navigate(-1)}>
            <Icon name="leftArrow" width={32} />
          </styles.BackButton>
          <HStack $spacing={6} $width="auto">
            <Text $weight="bold" $size="lg">
              Account Settings
            </Text>
            <Icon name="gear" width={48} />
          </HStack>
        </HStack>
        <styles.AvatarFormWrapper>
          {/* <HStack $spacing={24} $alignItems="flex-start"> */}
          <Avatar name={values.user_avatar || "defaultAvatar"} size="lg" />
          <styles.Form onSubmit={handleSubmit}>
            <VStack $spacing={16}>
              <SettingsInput
                id="username"
                name="username"
                label="Username"
                type="text"
                placeholder="My username..."
                value={values.username}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.username}
                error={errors.username}
              />
              <SettingsInput
                id="user_species"
                name="user_species"
                label="Species"
                type="text"
                placeholder="e.g. dwarf hamster"
                value={values.user_species}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.user_species}
                error={errors.user_species}
              />
              <SettingsInput
                id="user_birthday"
                name="user_birthday"
                label="Birthday"
                type="date"
                placeholder="e.g. dwarf hamster"
                value={values.user_birthday}
                handleBlur={handleBlur}
                handleChange={handleChange}
                touched={touched.user_birthday}
                error={errors.user_birthday}
              />
              <SelectField
                id="user_avatar"
                name="user_avatar"
                placeholder="Avatar..."
                options={avatar}
                onChange={(selectedValue: any) =>
                  setFieldValue("user_avatar", selectedValue.value)
                }
                value={avatar.filter((a) => a.value === values.user_avatar)}
                label="Avatar"
              />
              <SelectField
                id="user_location"
                name="user_location"
                placeholder="Location..."
                options={locations}
                onChange={(selectedValue: any) =>
                  setFieldValue("user_location", selectedValue.value)
                }
                value={locations.filter(
                  (s) => s.value === values.user_location
                )}
                label="Location"
              />
              <styles.ButtonWrapper $spacing={6}>
                {isSubmitting ? (
                  <Loader $width={48} />
                ) : (
                  <VStack $spacing={12}>
                    {/* TO DO: sort out button width */}
                    <div>
                      <Button $variant="blue" type="submit" disabled={!isValid}>
                        Save
                      </Button>
                    </div>
                    {/* TO DO: better css / display for errors */}
                    {submitError && (
                      <HStack $spacing={6}>
                        <Text $weight="medium" $color="red3">
                          {submitError}
                        </Text>
                        <Icon name="warning" width={22} />
                      </HStack>
                    )}
                    {/* TO DO: handle better */}
                    {/* {errors.username && (
                          <HStack $spacing={6}>
                            <Text $weight="medium" $color="red3">
                              {errors.username}
                            </Text>
                            <Icon name="warning" width={22} />
                          </HStack>
                        )}
                        {errors.user_birthday && (
                          <HStack $spacing={6}>
                            <Text $weight="medium" $color="red3">
                              {errors.user_birthday}
                            </Text>
                            <Icon name="warning" width={22} />
                          </HStack>
                        )} */}
                  </VStack>
                )}
                {successfullySubmitted && <Icon name="check" />}
              </styles.ButtonWrapper>
            </VStack>
          </styles.Form>
        </styles.AvatarFormWrapper>
      </VStack>
    </styles.SettingsCard>
  );
};
