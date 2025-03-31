import React from "react";
import Select from "react-select";

const ReactSelectInput = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  isMulti = false,
  isDisabled = false,
  className = "",
}) => {
  return (
    <Select
      className={className}
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      isDisabled={isDisabled}
    />
  );
};

export default ReactSelectInput;
