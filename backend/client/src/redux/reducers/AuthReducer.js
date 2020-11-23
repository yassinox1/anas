import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  SET_COURENT_USER,
  SET_AUTH_TRUE,
  USER_REGISTER_SUCCESS,
} from "../actions/actionsTypes";
//import isEmpty from '../../validation/is-Empty';

const initialState = {
  isAuthenticated: false,
  userInfo: {},
  error: "",
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
        isAuthenticated: true,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_COURENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SET_AUTH_TRUE:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};
