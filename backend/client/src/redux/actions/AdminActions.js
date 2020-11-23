import {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  UPDATE_USER,
  DELETE_USER,
  CREATE_USER,
  CREATE_NEW_ROLE,
  GET_ALL_ROLES,
  CREATE_NEW_USER_FAIL,
  DELETE_ROLE,
} from "./actionsTypes";
import axios from "axios";

//  Users

export const getAllUsers = (page) => async (dispatch) => {
  try {
    const { data } = await axios.get(`api/v1/users?page=${page}`);

    dispatch({ type: GET_ALL_USERS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};
export const getSingleUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("api/v1/users/" + id);

    dispatch({ type: GET_SINGLE_USER, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const createNewUser = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("user", user);

    const { data } = await axios.post("api/v1/users", user, config);

    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};
export const updateUser = (
  id,
  firstName,
  lastName,
  email,
  password,
  role,
  status
) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      "api/v1/users/" + id,
      { email, password, role, status, firstName, lastName },
      config
    );

    dispatch({ type: UPDATE_USER, payload: data.user });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete("api/v1/users/" + id);
    console.log("data", data);
    dispatch({ type: DELETE_USER, payload: data.user._d });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const createNewRole = (newRole) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post("api/v1/roles", newRole, config);

    dispatch({ type: CREATE_NEW_ROLE, payload: data });
  } catch (error) {
    console.log("error");
  }
};
export const getAllRoles = () => async (dispatch) => {
  try {
    const { data } = await axios.get("api/v1/roles");

    dispatch({ type: GET_ALL_ROLES, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteRole = (id) => async (dispatch) => {
  console.log("idd", id);
  try {
    const { data } = await axios.delete(`api/v1/roles/${id}`);

    dispatch({ type: DELETE_ROLE, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_NEW_USER_FAIL,
      payload: error.response.data,
    });
  }
};
