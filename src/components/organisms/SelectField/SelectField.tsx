import React from "react";

import Select from "react-select";
import { VStack } from "../../atoms/VStack/VStack";

import { selectStyles } from "./selectStyles";
import * as styles from "./styles";

interface SelectFieldProps {
  id: string;
  name: string;
  placeholder: string;
  options: any;
  onChange: any;
  value: any;
  label: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  placeholder,
  options,
  onChange,
  value,
  label,
}) => {
  return (
    <VStack $spacing={8}>
      <styles.Label>{label}</styles.Label>
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        styles={selectStyles}
        isSearchable={false}
        value={value}
      />
    </VStack>
  );
};
