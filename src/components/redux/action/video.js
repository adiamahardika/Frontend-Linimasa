import axios from "axios";
require("dotenv").config();

export const insertVideo = (data) => {
  return {
    type: "POST_VIDEO",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_API}/video`,
      data: data,
    }),
  };
};

export const readVideo = (video_title, video_category) => {
  return {
    type: "GET_VIDEO",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_API}/video/?video_title=${video_title}&video_category=${video_category}`,
    }),
  };
};

export const readAllVideo = () => {
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
