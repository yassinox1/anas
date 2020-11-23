import React from "react";
import { InputLabel, MenuItem, Select, Grid } from "@material-ui/core";

import TextFieldsGroup from "./TextFieldsGroup";

const FormControlGroupe = ({
  roles,
  user,
  onChange,

  handelSubmit,
}) => {
  return (
    <>
      {roles ? (
        <Grid item xs={12} sm={6} className="mb-2">
          <InputLabel id="demo-simple-select-label" className="mt-2">
            role *
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={user.roleType}
            name="role"
            onChange={onChange}
          >
            {roles &&
              roles
                .filter((item) => item.role !== "admin")
                .map((role) => (
                  <MenuItem value={role.role}>{role.role}</MenuItem>
                ))}
          </Select>
        </Grid>
      ) : (
        ""
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextFieldsGroup
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            label="First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextFieldsGroup
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            label="Last Name"
          />
        </Grid>

        <Grid item xs={12}>
          <TextFieldsGroup
            value={user.email}
            onChange={onChange}
            name="email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldsGroup
            value={user.password}
            onChange={onChange}
            name="password"
            label="Password"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormControlGroupe;
