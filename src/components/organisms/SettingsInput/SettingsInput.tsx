/**
 * Settings input component.
 * Renders input used
 * in the Settings page.
 */

import React from "react";

import { VStack } from "../../atoms/VStack/VStack";
import { HStack } from "../../atoms/HStack/HStack";
import { Icon } from "../../atoms/Icon/Icon";

import * as styles from "./styles";

interface SettingsInputProps {
  id: string;
  type: string;
  name: string;
  label: string;
  value: string;
  placeholder: string;
  handleBlur: (e: React.FocusEvent) => void;
  handleChange: (e: React.ChangeEvent) => void;
  touched?: boolean;
  error?: string;
}

export const SettingsInput: React.FC<SettingsInputProps> = ({
  id,
  type,
  name,
  label,
  value,
  placeholder,
  handleBlur,
  handleChange,
  touched,
  error,
}) => {
  return (
    <styles.LabelInputWrapper>
      <VStack $spacing={8}>
        <HStack $spacing={6}>
          <styles.Label htmlFor={id} $error={!!(error && touched)}>
            {label}
          </styles.Label>
          {error && touched && <Icon name="warning" width={18} />}
        </HStack>
        <styles.Input
          id={id}
          type={type}
          name={name}
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
          placeholder={placeholder}
          $error={!!(error && touched)}
        />
      </VStack>
    </styles.LabelInputWrapper>
  );
};
