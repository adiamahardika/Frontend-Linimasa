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
