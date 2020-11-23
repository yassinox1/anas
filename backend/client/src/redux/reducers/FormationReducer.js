import {
  GET_USER_FORMATIONS_FAIL,
  GET_USER_FORMATIONS_REQUEST,
  GET_USER_FORMATIONS_SUCCESS,
  GET_ADMIN_FORMATIONS_REQUEST,
  GET_ADMIN_FORMATIONS_FAIL,
  GET_ADMIN_FORMATIONS_SUCCESS,
  UPLOAD_VIDEO,
  GET_FORMATION_VIDEOS_FAIL,
  GET_FORMATION_VIDEOS_REQUEST,
  GET_FORMATION_VIDEOS_SUCCESS,
} from "../actions/actionsTypes";

const initialState = {
  userFormations: "",
  isLoading: false,
  error: false,
  fileName: "Choose File",
  uploadedFile: {},
  videos: "",
  totalFormations: "",
};

export const FormationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_FORMATIONS_REQUEST:
    case GET_ADMIN_FORMATIONS_REQUEST:
    case GET_FORMATION_VIDEOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_FORMATIONS_SUCCESS:
      return {
        ...state,
        userFormations: action.payload,
        isLoading: false,
      };
    case GET_ADMIN_FORMATIONS_SUCCESS:
      return {
        ...state,
        userFormations: action.payload.formations,
        isLoading: false,
        totalFormations: action.payload.totalResult,
      };
    case GET_FORMATION_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        isLoading: false,
      };
    case GET_USER_FORMATIONS_FAIL:
    case GET_ADMIN_FORMATIONS_FAIL:
    case GET_FORMATION_VIDEOS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case UPLOAD_VIDEO:
      return {
        ...state,
        fileName: action.payload.fileName,
        uploadedFile: { fileName: action.payload.fileName },
      };
    default:
      return state;
  }
};
