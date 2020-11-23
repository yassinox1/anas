import React, { useEffect } from "react";

import AddUser from "./AddUser";
import UsersTable from "./UsersTable";
import AddRole from "./AddRole";
import HeaderBar from "../../../common/HeaderBar";
import { connect } from "react-redux";
import {
  getAllRoles,
  getAllUsers,
  getSingleUser,
  deleteUser,
  createNewUser,
  updateUser,
} from "../../../../redux/actions/AdminActions";
import { Alert, AlertTitle, Pagination } from "@material-ui/lab";

const Utilisateurs = (props) => {
  const { users, roles, error, totalUsers } = props.admin;
  const [page, setPage] = React.useState(1);
  const handlePagination = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    props.getAllRoles();
    props.getAllUsers(page);
  }, [page]);
  return (
    <div className="p-5">
      {error ? (
        <Alert severity="error" className="mt-5 w-100 p-5">
          <AlertTitle>Error</AlertTitle>
          <h1> {error.error}</h1>
        </Alert>
      ) : (
        <>
          <HeaderBar>
            <h3 style={{ color: "#fff" }}> Gestion Des Utilisateurs </h3>
            <AddUser
              type="add"
              createNewUser={props.createNewUser}
              roles={roles}
            />
            <AddRole />
          </HeaderBar>
          <UsersTable
            users={users}
            roles={roles}
            updateUser={props.updateUser}
            deleteUser={props.deleteUser}
          />
          <Pagination
            count={totalUsers}
            page={page}
            onChange={handlePagination}
            color="primary"
          />
        </>
      )}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    admin: state.admin,
  };
}
export default connect(mapStateToProps, {
  getAllRoles,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  createNewUser,
})(Utilisateurs);
