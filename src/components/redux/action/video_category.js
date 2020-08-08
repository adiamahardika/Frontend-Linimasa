import axios from "axios";
require("dotenv").config();

export const insertVideoCategory = (data) => {
  return {
    type: "POST_VIDEO_CATEGORY",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/video-category`,
      data: data,
    }),
  };
};

export const readVideoCategory = () => {
  return {
    type: "GET_VIDEO_CATEGORY",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/video-category`,
    }),
  };
};

export const editVideoCategory = (data, id) => {
  return {
    type: "PATCH_VIDEO_CATEGORY",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/video-category/${id}`,
      data: data,
    }),
  };
};

export const deleteVideoCategory = (id) => {
  return {
    type: "DELETE_VIDEO_CATEGORY",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/video-category/${id}`,
    }),
  };
};
