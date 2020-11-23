/* eslint-disable react/prop-types */
import React from "react";
import classnames from "classnames";
import { TextField } from "@material-ui/core";
const TextFieldsGroup = ({ name, value, onChange, label }) => {
  return (
    <TextField
      autoComplete="name"
      name={name}
      variant="outlined"
      fullWidth
      id="firstName"
      label={label}
      autoFocus
      value={value}
      onChange={onChange}
    />
  );
};

export default TextFieldsGroup;
