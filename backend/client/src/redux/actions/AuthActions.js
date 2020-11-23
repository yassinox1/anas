import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  SET_COURENT_USER,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from "./actionsTypes";
import axios from "axios";
import jwt from "jsonwebtoken";
import setAuthToken from "../../utils/setAuthToken";

export const register = (userdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "api/v1/auth/register/",
      { ...userdata },
      config
    );
    console.log("datarehister", data);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    localStorage.setItem("jwtToken", data.token);
    setAuthToken(data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (userdat) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post("api/v1/auth/login/", userdat, config);

    localStorage.setItem("jwtToken", data.token);
    setAuthToken(data.token);
    dispatch(setCurrentUser(jwt.decode(data.token).user));
    /*dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });*/
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const logout = () => (dispatch) => {
  console.log("ahahah");
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch({ type: USER_LOGOUT });
};

export const setCurrentUser = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};
/*
export const setCurrentUser = async () => {
  console.log("usest");
  const { data } = await axios.get("api/v1/auth/login/");
  console.log("uset", data);
  return { type: SET_COURENT_USER, payload: "r" };
};
*/
