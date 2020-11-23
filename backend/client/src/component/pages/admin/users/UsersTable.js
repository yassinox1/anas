import React from "react";

import { Table } from "reactstrap";
import { Button } from "@material-ui/core";
import moment from "moment";
import UpdateUser from "./UpdateUser";

import Switch from "../../../common/Switch";
const UsersTable = (props) => {
  // eslint-disable-next-line no-unused-vars

  const { users, roles, deleteUser, updateUser } = props;

  return (
    <div>
      <Table borderless>
        <thead>
          <tr>
            <th>#</th>
            <th>first Name</th>
            <th>last Name</th>
            <th>email</th>

            <th>Status</th>
            <th>Role</th>
            <th>Date Dinscription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <Switch status={user.status} user={user} />
                </td>
                <td>{user.role.role}</td>
                <td>
                  {moment(user.createdAt).subtract(10, "days").calendar()}
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "10px" }}
                    onClick={() => deleteUser(user._id)}
                  >
                    delete
                  </Button>
                  <UpdateUser
                    user={user}
                    updateUser={updateUser}
                    roles={roles}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
