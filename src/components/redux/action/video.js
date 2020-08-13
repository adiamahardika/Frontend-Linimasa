import axios from "axios";
require("dotenv").config();

export const insertVideo = (data) => {
  return {
    type: "POST_VIDEO",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/video`,
    }),
  };
};

export const readVideo = () => {
  return {
    type: "GET_VIDEO",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/video`,
    }),
  };
};

export const editVideo = (data, id) => {
  return {
    type: "PATCH_VIDEO",
    payload: axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API}/video/${id}`,
      data: data,
    }),
  };
};

export const deleteVideo = (id) => {
  return {
    type: "DELETE_VIDEO",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API}/video/${id}`,
    }),
  };
};
