import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  DialogTitle,
  Dialog,
  Container,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { connect } from "react-redux";
import { addNewFormation } from "../../../../redux/actions/FormationActions";
import MultiSelect from "./MultiSelect";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "550px", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SimpleDialog(props) {
  const { onClose, selectedValue, open, roles, history } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const classes = useStyles();

  const [formation, setFormation] = useState({
    title: "",
    access: "",
    description: "",
  });

  const { title, access, description } = formation;
  const [accessArray, setAccessArraye] = useState([]);

  const onChange = (e) => {
    setFormation({ ...formation, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    props.addNewFormation({ title, description, access: accessArray });

    history.push("/admin");
  };
  const names = [];
  roles &&
    roles
      .filter((i) => i.role !== "admin")
      .map((item) => names.push(item.role));
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Add New Category</DialogTitle>

      <Container>
        <form className={classes.form} noValidate onSubmit={handelSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Category Name"
            name="title"
            autoComplete="tite"
            autoFocus
            onChange={onChange}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="description"
            label="Add Description"
            name="description"
            autoComplete="tite"
            autoFocus
            onChange={onChange}
          />

          <InputLabel id="demo-simple-select-label" className="mt-2">
            access *
          </InputLabel>
          <MultiSelect
            names={names}
            selectArray={accessArray}
            setSelectArray={setAccessArraye}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            style={{ backgroundColor: "#192D3E" }}
          >
            Add Category
          </Button>
        </form>
      </Container>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add New Formation
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        addNewFormation={props.addNewFormation}
        roles={props.roles}
        history={props.history}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { admin: state.admin };
};
export default connect(mapStateToProps, { addNewFormation })(SimpleDialogDemo);
