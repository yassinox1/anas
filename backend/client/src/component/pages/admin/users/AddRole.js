import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

import { connect } from "react-redux";
import {
  createNewRole,
  getAllRoles,
  deleteRole,
} from "../../../../redux/actions/AdminActions";
import DeleteIcon from "@material-ui/icons/Delete";
function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [role, setRole] = useState("");

  const onChange = (e) => {
    setRole(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.createNewRole({ role });
  };

  useEffect(() => {
    props.getAllRoles();
  }, []);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        + Add Role
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {" "}
        <form onSubmit={handelSubmit}>
          <DialogTitle id="form-dialog-title">Add New Role</DialogTitle>
          <DialogContent style={{ width: "300px" }}>
            <DialogContentText>
              {props.admin.roles &&
                props.admin.roles.map((item) => (
                  <div className="d-flex justify-content-between my-2">
                    <h3>{item.role}</h3>
                    <Button
                      variant="contained"
                      color="secondary"
                      className=""
                      startIcon={<DeleteIcon />}
                      onClick={() => props.deleteRole(item._id)}
                    >
                      Delete
                    </Button>
                  </div>
                ))}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="newRole"
              label="New Role"
              name="newROle"
              type="text"
              fullWidth
              onChange={onChange}
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

const maspStateToProps = (state) => {
  return {
    admin: state.admin,
  };
};

export default connect(maspStateToProps, {
  createNewRole,
  getAllRoles,
  deleteRole,
})(FormDialog);
