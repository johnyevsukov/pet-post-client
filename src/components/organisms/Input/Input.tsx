import React from "react";

import { Text } from "../../atoms/Text/Text";
import { Icon } from "../../atoms/Icon/Icon";

import * as styles from "./styles";

interface InputProps {
  id: string;
  type: string;
  name: string;
  label: string;
  value: string;
  handleBlur: (e: React.FocusEvent) => void;
  handleChange: (e: React.ChangeEvent) => void;
  touched?: boolean;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  label,
  value,
  handleBlur,
  handleChange,
  touched,
  error,
}) => {
  return (
    <styles.LabelInputWrapper>
      <styles.Input
        id={id}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        placeholder=" "
        $error={!!(error && touched)}
      />
      <styles.Label htmlFor={id}>{label}</styles.Label>
      {error && touched && (
        <styles.IconWrapper>
          <Icon name="warning" width={20} />
        </styles.IconWrapper>
      )}
      {error && touched && (
        <styles.InputErrorWrapper>
          <Text $size="xs" $color="red4">
            {error}
          </Text>
        </styles.InputErrorWrapper>
      )}
    </styles.LabelInputWrapper>
  );
};
