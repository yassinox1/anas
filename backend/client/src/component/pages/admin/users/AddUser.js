import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import FormControlGroupe from "../../../common/FormControlGroupe";
function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.createNewUser(user);
  };

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        + Add user
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {" "}
        <DialogTitle id="form-dialog-title">Add User</DialogTitle>
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
    </div>
  );
}

export default FormDialog;
