import {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  UPDATE_USER,
  DELETE_USER,
  CREATE_USER,
  CREATE_NEW_ROLE,
  GET_ALL_ROLES,
  CREATE_NEW_USER_FAIL,
} from "../actions/actionsTypes";
const initialState = {
  users: [],
  user: {},
  newUser: {},
  error: "",
  newROle: "",
  roles: "",
  totalUsers: "",
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload.users,
        totalUsers: action.payload.totalResult,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CREATE_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.filter((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item._id !== action.payload),
      };

    case CREATE_NEW_ROLE:
      return {
        ...state,
        newRole: action.payload,
      };
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_ALL_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    default:
      return state;
  }
};
