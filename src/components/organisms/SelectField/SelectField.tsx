import React from "react";
import Select from "react-select";
import { styles } from "./styles";

interface SelectFieldProps {
  id: string;
  name: string;
  placeholder: string;
  options: any;
  onChange: any;
  value: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  placeholder,
  options,
  onChange,
  value,
}) => {
  return (
    <Select
      id={id}
      name={name}
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      styles={styles}
      isSearchable={false}
      value={value}
    />
  );
};
