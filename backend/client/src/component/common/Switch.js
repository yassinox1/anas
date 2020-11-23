import React from "react";
import Switch from "@material-ui/core/Switch";
import { updateUser } from "../../redux/actions/AdminActions";
import { connect } from "react-redux";
function Switches(props) {
  const [checked, setState] = React.useState(props.status);

  const handleChange = (event) => {
    const id = props.user._id;

    const newUser = { ...props.user, status: event.target.checked };
    const { email, password, role, status, firstName, lastName } = newUser;
    props.updateUser(id, firstName, lastName, email, password, role, status);
    setState(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "secondary checkbox " }}
    />
  );
}

const mapsStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapsStateToProps, { updateUser })(Switches);
