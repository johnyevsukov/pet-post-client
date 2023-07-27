import React from "react";
import { Text } from "../../atoms/Text/Text";
import * as styles from "./styles";
import { Icon } from "../../atoms/Icon/Icon";
import { HStack } from "../../atoms/HStack/HStack";
import { Avatar } from "../../molecules/Avatar/Avatar";
import { SelectField } from "../../organisms/SelectField/SelectField";
import { VStack } from "../../atoms/VStack/VStack";
import { useUser } from "../../../hooks/useUser";
import { useFormik } from "formik";
import * as yup from "yup";

const species = [
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

export const ProfileSettings: React.FC = () => {
  const { userData, isLoading, error } = useUser();

  const onSubmit = () => {};

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
      user_avatar: userData?.user_avatar,
      user_species: userData?.user_species,
      user_location: userData?.user_location,
      user_birthday: userData?.user_birthday,
    },
    validationSchema: userSchema,
    onSubmit,
    enableReinitialize: true,
  });

  if (!userData) {
    return <>loading</>;
  }

  return (
    <styles.Wrapper>
      <styles.Content>
        <styles.SettingsCard>
          <form>
            <VStack $spacing={6}>
              <HStack $spacing={6}>
                <Text $weight="bold" $size="lg">
                  Account Settings
                </Text>
                <Icon name="gear" width={36} />
              </HStack>
              <HStack $spacing={16}>
                <Avatar
                  name={values.user_species || "defaultAvatar"}
                  size="lg"
                />
                <SelectField
                  id="user_species"
                  name="user_species"
                  placeholder="Species..."
                  options={species}
                  onChange={(selectedValue: any) =>
                    setFieldValue("user_species", selectedValue.value)
                  }
                  value={species.filter((s) => s.value === values.user_species)}
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
                    (s) => s.value === values.user_species
                  )}
                />
              </HStack>
            </VStack>
          </form>
        </styles.SettingsCard>
      </styles.Content>
    </styles.Wrapper>
  );
};

const userSchema = yup.object().shape({
  user_avatar: yup
    .string()
    .oneOf(
      [
        "dog",
        "cat",
        "hamster",
        "lizard",
        "bird",
        "frog",
        "rodent",
        "fish",
        "spider",
        "turtle",
        "duck",
        "hedgehog",
        "horse",
        "monkey",
        "rabbit",
        "pig",
      ],
      "avatar required"
    ),
  user_species: yup
    .string()
    .oneOf(
      [
        "dog",
        "cat",
        "hamster",
        "lizard",
        "bird",
        "frog",
        "rodent",
        "fish",
        "spider",
        "turtle",
        "duck",
        "hedgehog",
        "horse",
        "monkey",
        "rabbit",
        "pig",
      ],
      "avatar required"
    ),
  user_location: yup.string().required("location required"),
  user_birthday: yup.string().required("birthday required"),
});
