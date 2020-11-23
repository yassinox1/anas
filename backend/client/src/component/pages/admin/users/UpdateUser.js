/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import axios from "axios";

import FormControlGroupe from "../../../common/FormControlGroupe";
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    email: props.user.email,
    role: props.user.role.role,
    password: props.user.password,
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, role } = { ...user };

    const { data } = await axios.get(`api/v1/roles/${role}`);

    props.updateUser(
      props.user._id,
      firstName,
      lastName,
      email,
      password,
      data
    );
  };
  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Update
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {" "}
        <DialogTitle id="form-dialog-title">Update UseR</DialogTitle>
        <form onSubmit={handelSubmit}>
          <DialogContent>
            <FormControlGroupe
              onChange={onChange}
              roles={props.roles}
              user={user}
              handelSubmit={handelSubmit}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              save
            </Button>
          </DialogActions>{" "}
        </form>
      </Dialog>
    </>
  );
}
