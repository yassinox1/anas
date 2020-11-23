import {
  GET_USER_FORMATIONS_REQUEST,
  GET_USER_FORMATIONS_FAIL,
  GET_USER_FORMATIONS_SUCCESS,
  GET_ADMIN_FORMATIONS_REQUEST,
  GET_ADMIN_FORMATIONS_FAIL,
  GET_ADMIN_FORMATIONS_SUCCESS,
  CREATE_FORMATION,
  UPDATE_FORMATION,
  DELETE_FORMATION,
  UPLOAD_VIDEO,
  GET_FORMATION_VIDEOS_FAIL,
  GET_FORMATION_VIDEOS_REQUEST,
  GET_FORMATION_VIDEOS_SUCCESS,
} from "./actionsTypes";
import axios from "axios";

// User Dashboard
export const getUserFormations = () => async (dispatch) => {
  dispatch({ type: GET_USER_FORMATIONS_REQUEST });
  try {
    const res = await axios.get(`api/v1/users/formations`);

    dispatch({
      type: GET_USER_FORMATIONS_SUCCESS,
      payload: res.data.Formations,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FORMATIONS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getAdminFormation = (page) => async (dispatch) => {
  dispatch({ type: GET_ADMIN_FORMATIONS_REQUEST });
  try {
    const res = await axios.get(`api/v1/formations?page=${page}`);
    dispatch({
      type: GET_ADMIN_FORMATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ADMIN_FORMATIONS_FAIL,
      payload: error.response.data,
    });
  }
};

export const addNewFormation = (newFormation) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    console.log("newFormation", newFormation);
    const { data } = await axios.post(
      "api/v1/formations",
      newFormation,
      config
    );

    dispatch({ type: CREATE_FORMATION, payload: data });
  } catch (error) {
    console.log("error");
  }
};

export const deleteFormation = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`api/v1/formations/${id}`);

    dispatch({ type: DELETE_FORMATION, payload: data });
  } catch (error) {
    console.log("error");
  }
};
export const updateFormation = (id, newFormation) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `api/v1/formations/${id}`,
      newFormation,
      config
    );

    dispatch({ type: UPDATE_FORMATION, payload: data });
  } catch (error) {
    console.log("error");
  }
};

export const updateFormationImage = (id, file) => async (dispatch) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.put(
      `api/v1/formations/${id}/photo/`,
      formData,
      config
    );

    dispatch({ type: UPDATE_FORMATION, payload: data });
  } catch (error) {
    console.log("error");
  }
};

// Video
export const uploadVideo = (id, file, setMessage, onUploadProgress) => async (
  dispatch
) => {
  const formData = new FormData();
  formData.append("file", file);
  try {
    const res = await axios.post(`api/v1/formations/${id}/videos`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
    setMessage("Fiel Uploaded");
    dispatch({
      type: UPLOAD_VIDEO,
      payload: {
        fileName: res.data.fileName,
        uploadedFile: { fileName: res.data.fileName },
      },
    });
  } catch (error) {
    console.log("eroror", error.response.data.error);
    setMessage(error.response.data);
  }
};
